"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { ArrowLeft, AlertTriangle, Scale, Quote, FileText, Calendar, Users, TrendingDown, Zap, Brain, LineChart, Network } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Timeline Data - Chronological Order
const TIMELINE_2022 = [
  {
    time: "8/28 (일) 11:00",
    title: "제보 접수",
    detail: "배우자 업추비 사용 의혹",
    icon: AlertTriangle,
    highlight: false
  },
  {
    time: "8/28 (일) 13:00",
    title: "이재명 후보 전화",
    detail: "후보가 알고 있다",
    icon: Users,
    highlight: true
  },
  {
    time: "8/28 (일) 오후",
    title: "전당대회 & 백의종군",
    detail: "사무총장 포기 결정",
    icon: FileText,
    highlight: false
  },
  {
    time: "8/29 (월) 오전",
    title: "CCTV 은폐 시도",
    detail: "95% 확인 못할 것",
    icon: TrendingDown,
    highlight: true
  },
  {
    time: "8/29 (월) 오후",
    title: "허위 보고",
    detail: "클리어는 됐다",
    icon: TrendingDown,
    highlight: true
  },
  {
    time: "8월말",
    title: "당직 수령",
    detail: "수석사무부총장 임명",
    icon: Users,
    highlight: false
  }
]

const TIMELINE_2024 = [
  {
    time: "3월 초",
    title: "언론 보도",
    detail: "매일경제 의혹 보도",
    icon: AlertTriangle,
    highlight: false
  },
  {
    time: "3월 중순",
    title: "SNS 거짓 해명",
    detail: "아내가 음해를 당하고 있다",
    icon: TrendingDown,
    highlight: true
  },
  {
    time: "3월 하순",
    title: "기자·시민 고소",
    detail: "강경 대응",
    icon: Scale,
    highlight: true
  },
  {
    time: "4월 10일",
    title: "총선 3선 성공",
    detail: "국민 기만 후 당선",
    icon: Users,
    highlight: false
  }
]

const TIMELINE_2025 = [
  {
    time: "12/26",
    title: "1단계: 조진희 육성",
    detail: "CCTV 보존기한 언급",
    icon: Quote,
    highlight: false
  },
  {
    time: "12/27",
    title: "2단계: 배우자 육성",
    detail: "업추비 사용 증거",
    icon: Quote,
    highlight: false
  },
  {
    time: "12/28",
    title: "3단계: 김병기 육성",
    detail: "허위 보고 계획 폭로",
    icon: Quote,
    highlight: true
  },
  {
    time: "12/30",
    title: "원내대표 사퇴",
    detail: "여전히 사실 부인",
    icon: TrendingDown,
    highlight: false
  }
]

// Voice Evidence - Integrated
const VOICE_EVIDENCE = [
  {
    stage: 1,
    speaker: "조진희 전 부의장",
    role: "업추비 카드 제공자",
    quotes: [
      {
        text: "CCTV 보존기한 한 달 안 돼요",
        context: "증거 인멸 가능성 언급"
      },
      {
        text: "제가 사안을 마무리하겠습니다",
        context: "은폐 협조"
      }
    ]
  },
  {
    stage: 2,
    speaker: "배우자 이 씨",
    role: "업추비 사적 유용 당사자",
    quotes: [
      {
        text: "[업추비 사용 관련 육성 녹취]",
        context: "직접적 증거"
      }
    ]
  },
  {
    stage: 3,
    speaker: "김병기 본인",
    role: "은폐 주도자",
    quotes: [
      {
        text: "후보가 전화가 왔어. 후보가 알고 있다",
        context: "이재명 후보 인지 확인 (2022.08.28)"
      },
      {
        text: "그 CCTV를 확인하지 못할 거라는 게 한 95%는 되는 것 아니냐",
        context: "증거 인멸 가능성 타진 (2022.08.29)"
      },
      {
        text: "클리어는 됐다고 내가 내일 얘기를 하겠다",
        context: "허위 보고 계획 (2022.08.29)"
      },
      {
        text: "아내가 음해를 당하고 있다",
        context: "총선 직전 국민 기만 (2024.03)"
      }
    ],
    highlight: true
  }
]

// Legal Issues
const LEGAL_ISSUES = [
  {
    title: "공직선거법 위반",
    subtitle: "(허위사실유포죄)",
    detail: "총선 직전 유권자 기만",
    status: "공소시효 6개월 경과 → 처벌 불가",
    statusType: "expired"
  },
  {
    title: "증거인멸",
    subtitle: "",
    detail: "CCTV 차단, 일정 삭제, 증인 통제",
    status: "혐의 인정",
    statusType: "active"
  },
  {
    title: "업무추진비 횡령",
    subtitle: "(배우자)",
    detail: "동작구의회 세금 사적 유용",
    status: "수사 필요",
    statusType: "active"
  }
]

// AI Insights Data
const AI_PATTERNS = [
  {
    icon: Brain,
    title: "공통 패턴",
    items: [
      "증거 인멸 시도 (CCTV, 기록)",
      "피해자 탓으로 전환",
      "시간 끌기 전략",
      "정치적 이득 극대화"
    ]
  },
  {
    icon: AlertTriangle,
    title: "위험 신호",
    items: [
      '2022.08.29: "95% 확인 못할 것"',
      '2024.03: "음해" 주장 + 즉시 고소',
      "사퇴 후에도 사실 부인"
    ]
  }
]

const STATISTICS = [
  { label: "제보부터 허위 보고까지", value: "48", unit: "시간" },
  { label: "1차 거짓말부터 2차 거짓말까지", value: "2", unit: "년" },
  { label: "육성 녹취 증거 단계", value: "3", unit: "단계" },
  { label: "공직선거법 공소시효", value: "6", unit: "개월" },
  { label: "김병기 예상 은폐 성공률", value: "95", unit: "%" }
]

// Related Articles
const RELATED_ARTICLES = [
  {
    title: "통일교 타운 성지화… '특구' 지정까지 추진",
    href: "/news/gapyeong-special-zone"
  },
  {
    title: "UN 사무국을 가평에? 통일교 숙원 해결 앞장선 가평군수",
    href: "/news/un-office-gapyeong"
  },
  {
    title: "서태원 가평군수 \"평화의 어머니 한학자 총재님의 깊은 뜻\"",
    href: "/news/seo-taewon-unification"
  }
]

export default function KimByunggiCoverupPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black pointer-events-none" />

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <motion.button
            className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm backdrop-blur-xl transition-all hover:border-primary/50 hover:bg-primary/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-4 w-4" />
            돌아가기
          </motion.button>
        </Link>
      </div>

      {/* Content */}
      <article className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-6 inline-block animate-pulse rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-sm font-bold tracking-wider text-yellow-400">
            공직감시
          </div>
          <h1 className="mb-8 font-display text-5xl font-bold leading-tight md:text-7xl bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            "이재명이가"...
            <br />
            '배우자 비리 은폐' 김병기,
            <br />
            민주당·국민에 거짓말
          </h1>
          <p className="mb-8 text-2xl leading-relaxed text-white/90 font-light">
            당 지도부와 국민,
            <br />
            모두를 속인 이중 기만
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>강혜인·홍주환 기자</span>
            <span>·</span>
            <span>2025년 12월 31일 15시 18분</span>
          </div>
        </motion.div>

        {/* Core Question */}
        <GlassCard className="mb-16 border-l-4 border-yellow-500 bg-gradient-to-r from-yellow-950/20 to-transparent">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">핵심 의문</h2>
            </div>
            <p className="mb-4 text-3xl font-bold leading-relaxed text-white">
              "왜 당과 국민, 모두에게 거짓말을 했는가?"
            </p>
            <p className="leading-relaxed text-white/80 text-lg">
              김병기는 2022년 배우자 비리를 알고도 당 지도부에 "클리어 됐다"고 허위 보고했고,
              2024년 총선에서는 국민에게 "음해"라며 거짓말했다.
            </p>
          </motion.div>
        </GlassCard>

        {/* Dual Deception Concept */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-3">이중 거짓말이란?</h2>
            <p className="text-white/70">두 번의 거짓말, 두 번의 이득</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-primary to-red-500 transform -translate-x-1/2 hidden md:block" />

            <div className="grid gap-8 md:grid-cols-2">
              {/* 1st Lie */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <GlassCard className="h-full border-2 border-blue-500/50 bg-gradient-to-br from-blue-950/30 to-blue-900/10">
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm border-4 border-black">
                      1
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-blue-400 mb-2">1차 거짓말</h3>
                    <p className="text-sm font-mono text-white/60">2022년 8월</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-xs font-mono text-white/60">대상</p>
                      <p className="font-bold text-white text-xl">당 지도부</p>
                      <p className="text-sm text-white/70">이재명 당대표, 민주당 지도부</p>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <p className="mb-2 text-xs font-mono text-white/60">발언</p>
                      <p className="text-2xl font-bold italic text-blue-400 mb-2">"클리어는 됐다"</p>
                      <p className="text-sm text-white/70">알아보니까 클리어는 됐는데 충분히 왜곡될 수 있으니까, 이번에는 내가 접겠다</p>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-500/20 border-2 border-blue-500/50">
                      <p className="mb-1 text-xs font-mono text-white/60">결과</p>
                      <p className="text-xl font-bold text-blue-400">→ 수석사무부총장 임명</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* 2nd Lie */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <GlassCard className="h-full border-2 border-red-500/50 bg-gradient-to-br from-red-950/30 to-red-900/10">
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm border-4 border-black">
                      2
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-red-400 mb-2">2차 거짓말</h3>
                    <p className="text-sm font-mono text-white/60">2024년 3월</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-xs font-mono text-white/60">대상</p>
                      <p className="font-bold text-white text-xl">국민</p>
                      <p className="text-sm text-white/70">유권자, 22대 총선</p>
                    </div>

                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <p className="mb-2 text-xs font-mono text-white/60">발언</p>
                      <p className="text-2xl font-bold italic text-red-400 mb-2">"아내가 음해를 당하고 있다"</p>
                      <p className="text-sm text-white/70">명백한 허위, 날조, 공작, 거짓뉴스</p>
                    </div>

                    <div className="p-4 rounded-lg bg-red-500/20 border-2 border-red-500/50">
                      <p className="mb-1 text-xs font-mono text-white/60">결과</p>
                      <p className="text-xl font-bold text-red-400">→ 총선 3선 성공</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* AI Insights Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <GlassCard className="border-2 border-primary/50 bg-gradient-to-br from-primary/10 via-purple-950/10 to-pink-950/10 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 animate-pulse" />

            <div className="relative">
              <div className="mb-8 flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Brain className="h-8 w-8 text-primary" />
                </motion.div>
                <div>
                  <h2 className="text-4xl font-bold text-white">AI 인사이트</h2>
                  <p className="text-white/60 text-sm mt-1">패턴 분석 및 통계적 분석</p>
                </div>
              </div>

              {/* Pattern Analysis */}
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                {AI_PATTERNS.map((pattern, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="rounded-lg border border-primary/30 bg-black/30 p-6 backdrop-blur-sm">
                      <div className="mb-4 flex items-center gap-2">
                        <pattern.icon className="h-5 w-5 text-primary" />
                        <h3 className="font-bold text-white text-lg">{pattern.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {pattern.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/80">
                            <span className="text-primary mt-1">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Statistics */}
              <div className="rounded-lg border border-primary/30 bg-black/30 p-6 backdrop-blur-sm">
                <div className="mb-6 flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-white text-lg">수치로 보는 이중 기만</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  {STATISTICS.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="mb-2">
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.0 + index * 0.1, type: "spring" }}
                          className="text-4xl font-bold text-primary block"
                        >
                          {stat.value}
                        </motion.span>
                        <span className="text-lg text-primary/70">{stat.unit}</span>
                      </div>
                      <p className="text-xs text-white/60 leading-tight">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Timeline Simulation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="mt-8 rounded-lg border border-yellow-500/30 bg-yellow-950/10 p-6"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  <h3 className="font-bold text-white text-lg">만약 2022년에 밝혀졌다면?</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-24 text-sm font-mono text-white/60">실제</div>
                    <div className="flex-1 text-white/80">
                      2022 은폐 → 2024 당선 → 2025 폭로
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-24 text-sm font-mono text-primary">시나리오</div>
                    <div className="flex-1 text-white">
                      2022 즉시 폭로 → 당직 불발 → 정치 생명 종료
                    </div>
                  </div>
                  <div className="pt-4 border-t border-yellow-500/20">
                    <p className="text-yellow-400 font-bold">
                      ⚠️ 차이: 3년간의 정치적 이득, 원내대표 역임, 국민 기만
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </motion.section>

        {/* 1st Lie: 2022 August */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <div className="mb-8">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/50 mb-4">
              <span className="text-blue-400 font-bold">1차 거짓말</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">2022년 8월 28~29일</h2>
            <p className="text-white/70 text-lg">은폐 작업의 48시간</p>
          </div>

          {/* Timeline */}
          <GlassCard className="mb-8">
            <div className="space-y-4">
              {TIMELINE_2022.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className={`flex items-start gap-4 rounded-lg p-4 transition-all ${
                    item.highlight
                      ? 'border-2 border-blue-500/50 bg-blue-950/20 shadow-lg shadow-blue-500/10'
                      : 'border border-white/10 bg-white/5'
                  }`}
                >
                  <div className={`rounded-full p-3 ${
                    item.highlight ? 'bg-blue-500/20 ring-2 ring-blue-500/50' : 'bg-white/10'
                  }`}>
                    <item.icon className={`h-5 w-5 ${
                      item.highlight ? 'text-blue-400' : 'text-white/70'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="mb-1 text-xs font-mono text-white/60">{item.time}</p>
                    <p className={`font-bold mb-1 ${item.highlight ? 'text-blue-400 text-lg' : 'text-white'}`}>
                      {item.title}
                    </p>
                    <p className="text-sm text-white/70">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* Coverup Flowchart */}
          <GlassCard>
            <h3 className="text-2xl font-bold text-white mb-6">증거 은폐 시스템</h3>
            <div className="relative flex flex-col items-center space-y-6 py-8">
              {[
                { text: "제보 접수", highlight: true },
                { text: "보좌진 소집", highlight: false },
                { text: "CCTV 차단 · 일정 삭제", highlight: false },
                { text: "조진희 통제", highlight: false },
                { text: "허위 보고", highlight: true },
                { text: "당직 수령", highlight: true }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center w-full max-w-md">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    className={`w-full rounded-lg border-2 px-6 py-4 text-center transition-all ${
                      step.highlight
                        ? 'border-blue-500/50 bg-blue-950/20 shadow-lg shadow-blue-500/10'
                        : 'border-white/20 bg-white/5'
                    }`}
                  >
                    <p className={`font-bold ${
                      step.highlight ? 'text-blue-400 text-lg' : 'text-white'
                    }`}>
                      {step.text}
                    </p>
                  </motion.div>
                  {index < 5 && (
                    <div className="my-3 flex flex-col items-center">
                      <div className="h-8 w-0.5 bg-gradient-to-b from-blue-500/50 to-blue-500/10"></div>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-blue-500/50"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        {/* 2nd Lie: 2024 March */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-20"
        >
          <div className="mb-8">
            <div className="inline-block px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 mb-4">
              <span className="text-red-400 font-bold">2차 거짓말</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">2024년 3월</h2>
            <p className="text-white/70 text-lg">총선 직전 국민 기만</p>
          </div>

          <GlassCard>
            <div className="space-y-4">
              {TIMELINE_2024.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className={`flex items-start gap-4 rounded-lg p-4 transition-all ${
                    item.highlight
                      ? 'border-2 border-red-500/50 bg-red-950/20 shadow-lg shadow-red-500/10'
                      : 'border border-white/10 bg-white/5'
                  }`}
                >
                  <div className={`rounded-full p-3 ${
                    item.highlight ? 'bg-red-500/20 ring-2 ring-red-500/50' : 'bg-white/10'
                  }`}>
                    <item.icon className={`h-5 w-5 ${
                      item.highlight ? 'text-red-400' : 'text-white/70'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="mb-1 text-xs font-mono text-white/60">{item.time}</p>
                    <p className={`font-bold mb-1 ${item.highlight ? 'text-red-400 text-lg' : 'text-white'}`}>
                      {item.title}
                    </p>
                    <p className="text-sm text-white/70">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        {/* Truth Revealed: 2025 December */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-20"
        >
          <div className="mb-8">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/50 mb-4">
              <span className="text-primary font-bold">진실 폭로</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">2025년 12월</h2>
            <p className="text-white/70 text-lg">부인 불가능한 육성 증거</p>
          </div>

          {/* Timeline */}
          <GlassCard className="mb-8">
            <div className="space-y-4">
              {TIMELINE_2025.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  className={`flex items-start gap-4 rounded-lg p-4 transition-all ${
                    item.highlight
                      ? 'border-2 border-primary/50 bg-primary/10 shadow-lg shadow-primary/10'
                      : 'border border-white/10 bg-white/5'
                  }`}
                >
                  <div className={`rounded-full p-3 ${
                    item.highlight ? 'bg-primary/20 ring-2 ring-primary/50' : 'bg-white/10'
                  }`}>
                    <item.icon className={`h-5 w-5 ${
                      item.highlight ? 'text-primary' : 'text-white/70'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="mb-1 text-xs font-mono text-white/60">{item.time}</p>
                    <p className={`font-bold mb-1 ${item.highlight ? 'text-primary text-lg' : 'text-white'}`}>
                      {item.title}
                    </p>
                    <p className="text-sm text-white/70">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* Voice Evidence - 3 Stages */}
          <div className="mb-6 flex items-center gap-3">
            <Quote className="h-6 w-6 text-primary" />
            <h3 className="text-3xl font-bold text-white">3단계 육성 녹취</h3>
          </div>

          <div className="space-y-6">
            {VOICE_EVIDENCE.map((evidence, index) => (
              <motion.div
                key={evidence.stage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.2 }}
              >
                <GlassCard className={evidence.highlight ? 'border-2 border-primary/50 bg-gradient-to-r from-primary/10 to-transparent' : ''}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${
                      evidence.highlight ? 'bg-primary/20 text-primary ring-2 ring-primary/50' : 'bg-white/10 text-white'
                    } font-bold text-lg`}>
                      {evidence.stage}
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 font-bold text-white text-xl">{evidence.speaker}</p>
                      <p className="text-sm text-white/60">{evidence.role}</p>
                    </div>
                  </div>

                  <div className="space-y-3 ml-16">
                    {evidence.quotes.map((quote, qIndex) => (
                      <div key={qIndex} className={`rounded-lg p-4 ${
                        evidence.highlight ? 'bg-primary/5 border border-primary/20' : 'bg-white/5 border border-white/10'
                      }`}>
                        <div className="mb-2 text-4xl font-serif text-primary/20">"</div>
                        <p className={`italic leading-relaxed mb-2 ${
                          evidence.highlight ? 'text-lg text-white' : 'text-white/80'
                        }`}>
                          {quote.text}
                        </p>
                        <p className="text-xs text-white/60 border-t border-white/10 pt-2 mt-2">
                          {quote.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.3 }}
              className="mt-8 rounded-lg border-2 border-primary/50 bg-gradient-to-r from-primary/20 to-primary/5 p-6 text-center"
            >
              <p className="text-2xl font-bold text-primary">→ 부인 불가능</p>
              <p className="mt-2 text-white/70">3단계 육성 녹취로 완벽히 입증된 이중 기만</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Legal Issues */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mb-20"
        >
          <GlassCard className="border-l-4 border-red-500">
            <div className="mb-6 flex items-center gap-3">
              <Scale className="h-6 w-6 text-red-400" />
              <h2 className="text-3xl font-bold text-white">법적 쟁점</h2>
            </div>

            <div className="space-y-4">
              {LEGAL_ISSUES.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="rounded-lg border border-white/10 bg-white/5 p-5"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <div>
                      <p className="font-bold text-white text-lg">{issue.title}</p>
                      {issue.subtitle && (
                        <p className="text-sm text-white/70 mt-1">{issue.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <p className="mb-4 text-white/80">{issue.detail}</p>
                  <div className={`rounded-lg border p-3 ${
                    issue.statusType === 'expired'
                      ? 'border-white/20 bg-white/5'
                      : 'border-red-500/30 bg-red-950/10'
                  }`}>
                    <p className={`font-bold ${
                      issue.statusType === 'expired' ? 'text-white/60' : 'text-red-400'
                    }`}>
                      {issue.status}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        {/* Post-Resignation Statement */}
        <GlassCard className="mb-16 border-l-4 border-yellow-500">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-white">김병기 측 입장</h3>
            <div className="mb-4 rounded-lg border border-white/20 bg-white/5 p-5">
              <p className="text-xl italic text-white">
                "시시비비를 가린 후 더 큰 책임을 감당하겠다"
              </p>
            </div>
            <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-5">
              <p className="mb-3 font-bold text-yellow-400 text-lg">⚠️ 문제점:</p>
              <ul className="space-y-2 text-white">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>육성 녹취 3단계 공개됐는데도</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>여전히 사실관계 부인</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>정치적 책임 회피</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </GlassCard>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="border-t border-white/10 pt-12"
        >
          <div className="mb-8">
            <p className="font-bold text-white text-lg">강혜인·홍주환 기자</p>
            <p className="text-sm text-white/60 mt-1">2025년 12월 31일 15시 18분</p>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-sm font-bold text-white">원문 출처:</p>
            <p className="text-white/80">뉴스타파</p>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold text-white">관련 기사:</p>
            <div className="space-y-3">
              {RELATED_ARTICLES.map((article, index) => (
                <Link
                  key={index}
                  href={article.href}
                  className="block rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/5"
                >
                  <p className="text-white hover:text-primary transition-colors">{article.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </motion.footer>
      </article>
    </main>
  )
}
