import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { NewsSection } from "@/components/news-section"
import { LifecycleSection } from "@/components/lifecycle-section"
import { ChatSection } from "@/components/chat-section"
import { TopicsSection } from "@/components/topics-section"
import { StatsSection } from "@/components/stats-section"
import { ResearchSection } from "@/components/research-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <NewsSection />
        <LifecycleSection />
        <ChatSection />
        <TopicsSection />
        <ResearchSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}

