"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ParasiteIcon } from "@/components/parasite-icon"
import { Send, User, Loader2, Paperclip, X, FileText, File } from "lucide-react"

interface ChatMessage {
  role: "user" | "assistant"
  content: string
  sources?: string[]
  attachmentName?: string
  error?: boolean
}

interface AttachedFile {
  name: string
  type: "pdf" | "txt"
  file: File
  uploaded?: boolean
  uploadError?: string
}

const suggestedQuestions = [
  "What is the lifecycle of T. gondii?",
  "How does toxoplasmosis affect pregnancy?",
  "Can T. gondii alter human behavior?",
  "What are the current treatment options?",
]

const API_URL = "http://localhost:8000/chat"
const UPLOAD_URL = "http://localhost:8000/upload-source"

export function ChatSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [attachedFile, setAttachedFile] = useState<AttachedFile | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    // Reset input so same file can be re-selected
    e.target.value = ""

    const ext = file.name.split(".").pop()?.toLowerCase()
    if (ext !== "pdf" && ext !== "txt") return

    const fileType = ext as "pdf" | "txt"

    // Store the raw file — backend handles parsing
    setAttachedFile({ name: file.name, type: fileType, file })
  }

  function removeAttachment() {
    setAttachedFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  async function handleSend(text?: string) {
    const message = text || input.trim()
    if (!message && !attachedFile) return

    const displayMessage = message || `Attached: ${attachedFile?.name}`
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: displayMessage,
        attachmentName: attachedFile?.name,
      },
    ])
    setInput("")
    const currentFile = attachedFile
    setAttachedFile(null)
    setIsTyping(true)

    try {
      // Step 1: If there's a file, upload it to /upload-source first
      if (currentFile) {
        setIsUploading(true)
        const formData = new FormData()
        formData.append("file", currentFile.file)

        const uploadRes = await fetch(UPLOAD_URL, {
          method: "POST",
          body: formData,
        })

        if (!uploadRes.ok) {
          throw new Error(`File upload failed with status ${uploadRes.status}`)
        }
        setIsUploading(false)
      }

      // Step 2: Send the chat message to /chat
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message || "" }),
      })

      if (!res.ok) throw new Error(`Server responded with status ${res.status}`)

      const data: { response: string; sources?: string[] } = await res.json()
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response, sources: data.sources },
      ])
    } catch (err: unknown) {
      setIsUploading(false)
      const isCors = err instanceof TypeError && err.message.toLowerCase().includes("fetch")
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: isCors
            ? "Could not reach the backend. This is likely a CORS issue — please ask your peer to enable CORS on the server (allow http://localhost:3000), then try again."
            : `Backend error: ${err instanceof Error ? err.message : "Unknown error"}. Please make sure the server is running at ${API_URL}.`,
          error: true,
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  const canSend = (input.trim() || !!attachedFile) && !isTyping && !isUploading

  return (
    <section id="chat" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
            AI Assistant
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Your Personal Parasitology Expert
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-muted-foreground">
            Trained on thousands of research papers. Ask anything about
            T. gondii — from molecular biology to clinical treatment —
            and get expert-level answers in seconds.
          </p>
        </div>

        {/* Chat window */}
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          {/* Chat header */}
          <div className="flex items-center gap-3 border-b border-border px-5 py-3.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <ParasiteIcon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-card-foreground">ToxoAI</p>
              <p className="text-xs text-muted-foreground">Toxoplasma gondii specialist</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-5">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ParasiteIcon className="mb-4 w-12 h-12 text-primary/30" />
                <p className="mb-1 text-sm font-medium text-card-foreground">
                  Welcome to ToxoAI
                </p>
                <p className="mb-6 max-w-sm text-sm text-muted-foreground">
                  I can answer questions about T. gondii biology, pathogenesis,
                  diagnosis, treatment, and current research. Try one of these:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "assistant" && (
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <ParasiteIcon className="w-3.5 h-3.5 text-primary" />
                      </div>
                    )}
                    <div className="flex flex-col gap-1.5 max-w-[80%]">
                      {/* File attachment card on user messages */}
                      {msg.attachmentName && (
                        <div className="self-end flex items-center gap-3 rounded-xl border border-primary/25 bg-primary/10 px-3 py-2.5 min-w-[200px] max-w-[260px]">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                            {msg.attachmentName.endsWith(".pdf") ? (
                              <File className="h-4.5 w-4.5 text-primary" />
                            ) : (
                              <FileText className="h-4.5 w-4.5 text-primary" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-xs font-semibold text-primary/90 leading-tight">
                              {msg.attachmentName}
                            </p>
                            <p className="text-[10px] text-primary/60 mt-0.5 uppercase tracking-wide">
                              {msg.attachmentName.endsWith(".pdf") ? "PDF Document" : "Text File"}
                            </p>
                          </div>
                        </div>
                      )}
                      <div
                        className={`rounded-xl px-4 py-3 text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : msg.error
                            ? "bg-destructive/10 text-destructive border border-destructive/20"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {msg.content.split("\n").map((line, j) => (
                          <p key={j} className={j > 0 ? "mt-2" : ""}>
                            {line}
                          </p>
                        ))}
                      </div>
                      {/* Sources */}
                      {msg.sources && msg.sources.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 px-1">
                          <span className="text-[10px] text-muted-foreground self-center mr-0.5">Sources:</span>
                          {msg.sources.map((src) => (
                            <span
                              key={src}
                              className="rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 font-mono text-[10px] text-primary/80"
                            >
                              {src}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    {msg.role === "user" && (
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary">
                        <User className="w-3.5 h-3.5 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <ParasiteIcon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-secondary px-4 py-3">
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Analyzing literature...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Attached file preview — ChatGPT-style card */}
          {attachedFile && (
            <div className="border-t border-border bg-muted/30 px-4 pt-3 pb-2">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 w-fit max-w-xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  {isUploading ? (
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  ) : attachedFile.type === "pdf" ? (
                    <File className="h-4 w-4 text-primary" />
                  ) : (
                    <FileText className="h-4 w-4 text-primary" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-foreground leading-tight">
                    {attachedFile.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {isUploading ? "Uploading…" : `${attachedFile.type.toUpperCase()} · Ready to upload`}
                  </p>
                </div>
                <button
                  onClick={removeAttachment}
                  className="ml-1 shrink-0 rounded-md p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                  aria-label="Remove attachment"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-border p-4">
            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.txt"
              className="hidden"
              onChange={handleFileChange}
            />
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex items-center gap-2"
            >
              {/* Attach button */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isTyping || isUploading}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                  attachedFile
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary"
                } disabled:opacity-40`}
                aria-label="Attach PDF or TXT file"
                title="Attach a PDF or TXT file"
              >
                <Paperclip className="h-4 w-4" />
              </button>

              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={attachedFile ? "Ask something about the file…" : "Ask about T. gondii…"}
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                disabled={isTyping}
              />
              <Button
                type="submit"
                size="icon"
                disabled={!canSend}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Supports PDF &amp; TXT attachments · ToxoAI is for educational purposes only
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
