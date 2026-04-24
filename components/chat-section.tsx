"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ParasiteIcon } from "@/components/parasite-icon"
import { Send, User, Loader2 } from "lucide-react"

interface ChatMessage {
  role: "user" | "assistant"
  content: string
  sources?: string[]
  error?: boolean
}

const suggestedQuestions = [
  "What is the lifecycle of T. gondii?",
  "How does toxoplasmosis affect pregnancy?",
  "Can T. gondii alter human behavior?",
  "What are the current treatment options?",
]

const API_URL = "http://localhost:8000/chat"

export function ChatSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  async function handleSend(text?: string) {
    const message = text || input.trim()
    if (!message) return

    setMessages((prev) => [...prev, { role: "user", content: message }])
    setInput("")
    setIsTyping(true)

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      })

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`)
      }

      const data: { response: string; sources?: string[] } = await res.json()

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response, sources: data.sources },
      ])
    } catch (err: unknown) {
      const isCors =
        err instanceof TypeError && err.message.toLowerCase().includes("fetch")
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

          {/* Input */}
          <div className="border-t border-border p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about T. gondii..."
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                disabled={isTyping}
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isTyping}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              ToxoAI provides information for educational purposes. Always consult medical professionals for clinical decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
