"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ParasiteIcon } from "@/components/parasite-icon"
import { Send, User, Loader2 } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

const suggestedQuestions = [
  "What is the lifecycle of T. gondii?",
  "How does toxoplasmosis affect pregnancy?",
  "Can T. gondii alter human behavior?",
  "What are the current treatment options?",
]

const mockResponses: Record<string, string> = {
  "What is the lifecycle of T. gondii?":
    "Toxoplasma gondii has a complex lifecycle involving both definitive and intermediate hosts.\n\n**Sexual reproduction** occurs exclusively in felids (cats), where the parasite undergoes gametogony in intestinal epithelial cells, producing oocysts shed in feces.\n\n**Asexual reproduction** occurs in virtually all warm-blooded animals through two forms:\n- **Tachyzoites** (rapidly dividing form during acute infection)\n- **Bradyzoites** (slowly dividing form within tissue cysts during chronic infection)\n\nTransmission routes include ingestion of oocysts from contaminated soil/water, consumption of undercooked meat containing tissue cysts, and congenital transmission from mother to fetus.",
  "How does toxoplasmosis affect pregnancy?":
    "Congenital toxoplasmosis is one of the most clinically significant aspects of T. gondii infection.\n\n**Risk factors:**\n- Primary maternal infection during pregnancy poses the greatest risk\n- Transmission rate increases with gestational age (10-15% in first trimester, up to 70% in third trimester)\n- However, severity of fetal disease is inversely related to gestational age\n\n**Clinical manifestations can include:**\n- Chorioretinitis (most common late sequel)\n- Hydrocephalus\n- Intracranial calcifications\n- The classic triad: chorioretinitis, hydrocephalus, and intracranial calcifications\n\nScreening programs exist in countries like France and Austria, involving serial serological testing of seronegative pregnant women.",
  "Can T. gondii alter human behavior?":
    "This is one of the most fascinating and debated areas of Toxoplasma research.\n\n**In rodents (well-established):**\n- Infected rodents show reduced fear of cat odor (\"fatal attraction\" phenomenon)\n- This manipulation is thought to enhance transmission to the definitive host\n- Mediated partly through dopamine pathway alterations\n\n**In humans (studied but debated):**\n- Latent infection has been associated with subtle behavioral changes including slower reaction times, increased risk-taking, and altered personality profiles\n- Some studies link chronic infection to increased traffic accident risk\n- Associations with schizophrenia and other psychiatric conditions have been reported\n- T. gondii encodes tyrosine hydroxylase, a rate-limiting enzyme in dopamine synthesis\n\nNote: Many human studies are correlational, and causation remains difficult to establish.",
  "What are the current treatment options?":
    "Treatment of toxoplasmosis depends on the clinical presentation and immune status of the patient.\n\n**Standard therapy:**\n- **Pyrimethamine + sulfadiazine + folinic acid** (leucovorin) remains the gold standard\n- Treatment duration varies: 4-6 weeks for acute infection, longer for immunocompromised patients\n\n**Alternative regimens:**\n- Trimethoprim-sulfamethoxazole (TMP-SMX) as both treatment and prophylaxis\n- Atovaquone for patients intolerant to standard therapy\n- Clindamycin + pyrimethamine as second-line\n\n**For immunocompromised patients (e.g., HIV/AIDS):**\n- Acute treatment followed by chronic suppressive therapy\n- Secondary prophylaxis can be discontinued after immune reconstitution with ART\n\n**Emerging research:**\n- Endochin-like quinolones targeting the cytochrome bc1 complex\n- Bumped kinase inhibitors (BKIs)\n- Drug combinations targeting bradyzoite cysts (a major unmet need)",
}

export function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function handleSend(text?: string) {
    const message = text || input.trim()
    if (!message) return

    setMessages((prev) => [...prev, { role: "user", content: message }])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const response =
        mockResponses[message] ||
        `That's a great question about Toxoplasma gondii! As an AI specializing in parasitology, I can tell you that this topic involves several key aspects of T. gondii biology.\n\nThe parasite's ability to infect virtually any nucleated cell in warm-blooded animals makes it one of the most successful parasites on Earth, infecting approximately one-third of the global population.\n\nFor more detailed information, I'd recommend checking recent publications in journals like *Parasitology*, *International Journal for Parasitology*, and *PLOS Pathogens*.`

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsTyping(false)
    }, 1500)
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
                    <div
                      className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                        }`}
                    >
                      {msg.content.split("\n").map((line, j) => (
                        <p key={j} className={j > 0 ? "mt-2" : ""}>
                          {line}
                        </p>
                      ))}
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
