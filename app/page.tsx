"use client"

import { HeroScene } from "@/components/3d/hero-scene"
import { GlassCard } from "@/components/ui/glass-card"
import Link from "next/link"
import { ArrowUpRight, Cpu, Globe, Zap, Radio, Activity, Database, Eye } from "lucide-react"

// Mock Data
const NEWS_ITEMS = [
  {
    id: 0,
    category: "공직감시",
    title: "'이재명이가'...'배우자 비리 은폐' 김병기, 민주당·국민에 거짓말",
    date: "2025.12.31",
    icon: Eye,
    summary: "김병기 전 원내대표가 2022년부터 배우자 비리를 은폐하며 당 지도부와 국민을 이중으로 기만. 육성 녹취로 드러난 진실",
    href: "/news/kim-byunggi-coverup"
  },
  {
    id: 1,
    category: "공직감시",
    title: "통일교 타운 성지화… '특구' 지정까지 추진",
    date: "2025.12.26",
    icon: Eye,
    summary: "가평군이 통일교의 '성지화' 사업에 재정 지원과 규제 완화를 제공하려는 정교유착 의혹",
    href: "/news/gapyeong-special-zone"
  },
  {
    id: 2,
    category: "타파스",
    title: "UN 사무국을 가평에? 통일교 숙원 해결 앞장선 가평군수",
    date: "2025.12.29",
    icon: Eye,
    summary: "현직 군수가 통일교 행사에서 21,000명 서명 결의서 전달. 종교의 숙원을 공적 시스템이 해결하려는 정교유착 의혹",
    href: "/news/un-office-gapyeong"
  },
  {
    id: 3,
    category: "탐사 보도",
    title: "서태원 가평군수 \"평화의 어머니 한학자 총재님의 깊은 뜻\"",
    date: "2026.01.02",
    icon: Eye,
    summary: "공무원에서 군수까지, 통일교의 '해결사'를 자처한 의혹. 정교유착의 실체를 추적한다.",
    href: "/news/seo-taewon-unification"
  },
  {
    id: 4,
    category: "탐사 보도",
    title: "그림자 면접: 통일교와 가평군수 후보들의 은밀한 회동",
    date: "2022.05.11",
    icon: Eye,
    summary: "지방선거를 앞두고 포착된 영상. 후보들은 왜 특정 종교의 면접장에 섰는가?",
    href: "/news/gapyeong-scandal"
  },
  {
    id: 5,
    category: "글로벌 경제",
    title: "합성 시장: 알고리즘 트레이딩 V2의 부상",
    date: "2026.04.11",
    icon: Globe,
    summary: "AI가 주도하는 초단타 매매 시장이 기존 금융 시스템을 재편하고 있습니다.",
    href: "#"
  },
  {
    id: 6,
    category: "에너지",
    title: "핵융합 반응로: 차세대 데이터 센터의 동력원",
    date: "2026.04.10",
    icon: Zap,
    summary: "무한한 청정 에너지가 AI 연산 비용을 0에 가깝게 만들고 있습니다.",
    href: "#"
  },
  {
    id: 7,
    category: "사이버 보안",
    title: "뉴럴 방화벽: 생각하는 보안 시스템",
    date: "2026.04.09",
    icon: Activity,
    summary: "자가 학습하는 보안 프로토콜이 제로 데이 공격을 실시간으로 무력화합니다.",
    href: "#"
  },
  {
    id: 8,
    category: "데이터",
    title: "기억의 디지털화: 뇌-컴퓨터 인터페이스의 진화",
    date: "2026.04.08",
    icon: Database,
    summary: "인간의 기억을 클라우드에 백업하는 시대가 도래했습니다.",
    href: "#"
  },
]

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white/90">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <HeroScene />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-20">

        {/* Header Section */}
        <header className="mb-20 flex flex-col items-start gap-6 border-l-2 border-primary pl-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-widest">
            <Radio className="h-4 w-4 animate-pulse" />
            LIVE FEED // v2.0.4 한국 서버
          </div>
          <h1 className="font-display text-7xl md:text-9xl font-bold uppercase leading-[0.8] tracking-tighter opacity-90 mix-blend-difference">
            views <span className="text-primary text-4xl align-top">®</span>
          </h1>
          <p className="max-w-lg text-lg text-white/60 font-light leading-relaxed">
            탈중앙화 지능 네트워크. <br />
            수많은 소음 속에서 진실만을 정제하여 전달합니다.
          </p>
        </header>

        {/* Featured News Grid */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {NEWS_ITEMS.map((item) => (
            <GlassCard key={item.id} className="group relative flex flex-col justify-between gap-4 min-h-[320px] transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider text-primary">
                  {item.category}
                </span>
                <item.icon className="h-6 w-6 text-white/50 group-hover:text-primary transition-colors" />
              </div>

              <div className="space-y-3">
                <h2 className="font-sans text-xl font-bold leading-snug group-hover:text-primary transition-colors keep-all">
                  {item.title}
                </h2>
                <p className="text-sm text-white/40 line-clamp-2 leading-relaxed">
                  {item.summary}
                </p>
                <p className="font-mono text-xs text-primary/50 pt-2">{item.date}</p>
              </div>

              <div className="flex items-center justify-end pt-4 border-t border-white/5">
                <Link href={item.href} className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white group-hover:text-primary hover:underline decoration-primary underline-offset-4 transition-colors">
                  분석 보기 <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </section>

        {/* Footer / Status */}
        <footer className="mt-32 border-t border-white/10 py-12 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-mono gap-4">
          <div className="flex gap-4">
            <span>시스템 상태: <span className="text-green-500">정상</span></span>
            <span>네트워크 지연: <span className="text-primary">12ms</span></span>
          </div>
          <div>
            © 2026 views INC. | Future Intelligence Platform
          </div>
        </footer>
      </div>
    </main>
  )
}
