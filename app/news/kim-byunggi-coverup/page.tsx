"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { ArrowLeft, AlertTriangle, Scale, Quote, FileText, Calendar, Users, TrendingDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Timeline Data - 3 Phases
const TIMELINE_PHASES = [
  {
    id: 1,
    year: "2022년 8월",
    color: "blue",
    events: [
      { date: "8/28", title: "제보 접수", detail: "배우자 업추비 사용 의혹" },
      { date: "8/28", title: "이재명에게 허위 보고", detail: "클리어 됐다고 거짓 보고" },
      { date: "8/29", title: "증거 은폐 작업", detail: "CCTV 차단, 일정 삭제" },
      { date: "8월말", title: "수석사무부총장 임명", detail: "당직 수령" }
    ]
  },
  {
    id: 2,
    year: "2024년 3월",
    color: "red",
    events: [
      { date: "3월", title: "언론 보도", detail: "매일경제 의혹 보도" },
      { date: "3월", title: "음해 주장", detail: "SNS에 허위 해명" },
      { date: "3월", title: "기자·시민 고소", detail: "강경 대응" },
      { date: "4월", title: "총선 3선 성공", detail: "국민 기만 후 당선" }
    ]
  },
  {
    id: 3,
    year: "2025년 12월",
    color: "cyan",
    events: [
      { date: "12/26~", title: "육성 녹취 공개", detail: "3단계 증거 공개" },
      { date: "12/30", title: "원내대표 사퇴", detail: "여전히 사실 부인" }
    ]
  }
]

// Dual Lies Comparison
const DUAL_LIES = [
  {
    id: 1,
    title: "1차 거짓말",
    date: "2022년 8월",
    target: "당 지도부",
    targetDetail: "이재명 당대표, 민주당 지도부",
    quote: "클리어는 됐다",
    fullQuote: "알아보니까 클리어는 됐는데 충분히 왜곡될 수 있으니까, 이번에는 내가 접겠다",
    result: "수석사무부총장 임명",
    color: "blue"
  },
  {
    id: 2,
    title: "2차 거짓말",
    date: "2024년 3월",
    target: "국민",
    targetDetail: "유권자, 22대 총선",
    quote: "아내가 음해를 당하고 있다",
    fullQuote: "명백한 허위, 날조, 공작, 거짓뉴스",
    result: "총선 3선 성공",
    color: "red"
  }
]

// Detailed 48-hour Timeline
const DETAILED_TIMELINE = [
  {
    time: "8/28 (일) 11:00",
    title: "제보 접수",
    detail: "배우자 업추비 사용 의혹",
    icon: AlertTriangle
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
    icon: FileText
  },
  {
    time: "8/29 (월)",
    title: "허위 보고 결정",
    detail: "클리어 됐다고 보고",
    icon: TrendingDown,
    highlight: true
  }
]

// Voice Evidence - 3 Stages
const VOICE_EVIDENCE = [
  {
    stage: 1,
    speaker: "조진희 전 부의장",
    role: "업추비 카드 제공자",
    quote: "CCTV 보존기한 한 달 안 돼요. 제가 사안을 마무리하겠습니다"
  },
  {
    stage: 2,
    speaker: "배우자 이 씨",
    role: "업추비 사적 유용 당사자",
    quote: "[업추비 사용 관련 육성 녹취]"
  },
  {
    stage: 3,
    speaker: "김병기 본인",
    role: "은폐 주도자",
    quote: "클리어는 됐다고 내가 내일 얘기를 하겠다",
    highlight: true
  }
]

// Key Voice Quotes
const KEY_QUOTES = [
  {
    id: 1,
    quote: "후보가 전화가 왔어. 후보가 알고 있다",
    speaker: "김병기",
    date: "2022.08.28",
    context: "이재명 후보가 의혹을 인지"
  },
  {
    id: 2,
    quote: "그 CCTV를 확인하지 못할 거라는 게 한 95%는 되는 것 아니냐",
    speaker: "김병기",
    date: "2022.08.29",
    context: "증거 인멸 가능성 타진"
  },
  {
    id: 3,
    quote: "클리어는 됐다고 내가 내일 얘기를 하겠다",
    speaker: "김병기",
    date: "2022.08.29",
    context: "이재명 측에 허위 보고 계획"
  },
  {
    id: 4,
    quote: "아내가 음해를 당하고 있다",
    speaker: "김병기 SNS",
    date: "2024.03",
    context: "총선 직전 국민 기만"
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
      <article className="mx-auto max-w-4xl px-6 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-6 inline-block animate-pulse rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-sm font-bold tracking-wider text-yellow-400">
            공직감시
          </div>
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight md:text-6xl">
            "이재명이가"...
            <br />
            '배우자 비리 은폐' 김병기,
            <br />
            민주당·국민에 거짓말
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-white">
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
        <GlassCard className="mb-12 border-l-4 border-yellow-500">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">핵심 의문</h2>
            </div>
            <p className="mb-4 text-2xl font-bold leading-relaxed text-white">
              "왜 당과 국민, 모두에게 거짓말을 했는가?"
            </p>
            <p className="leading-relaxed text-white">
              김병기는 2022년 배우자 비리를 알고도 당 지도부에 "클리어 됐다"고 허위 보고했고,
              2024년 총선에서는 국민에게 "음해"라며 거짓말했다.
            </p>
          </motion.div>
        </GlassCard>

        {/* 3-Phase Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="mb-6 flex items-center gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-white">이중 기만의 타임라인</h2>
          </div>

          <div className="space-y-8">
            {TIMELINE_PHASES.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <GlassCard className={`border-l-4 ${
                  phase.color === 'blue' ? 'border-blue-500' :
                  phase.color === 'red' ? 'border-red-500' :
                  'border-primary'
                }`}>
                  <h3 className={`mb-4 text-xl font-bold ${
                    phase.color === 'blue' ? 'text-blue-400' :
                    phase.color === 'red' ? 'text-red-400' :
                    'text-primary'
                  }`}>
                    {phase.year}
                  </h3>
                  <div className="space-y-3">
                    {phase.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                      >
                        <div className={`mt-1 h-2 w-2 flex-shrink-0 rounded-full ${
                          phase.color === 'blue' ? 'bg-blue-400' :
                          phase.color === 'red' ? 'bg-red-400' :
                          'bg-primary'
                        }`} />
                        <div className="flex-1">
                          <div className="flex items-baseline gap-2">
                            <span className="text-xs font-mono text-white/60">{event.date}</span>
                            <span className="font-bold text-white">{event.title}</span>
                          </div>
                          <p className="mt-1 text-sm text-white/70">{event.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Dual Lies Comparison */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white">이중 기만의 구조</h2>
            <p className="mt-2 text-white/70">두 번의 거짓말, 두 번의 이득</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {DUAL_LIES.map((lie, index) => (
              <motion.div
                key={lie.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <GlassCard className={`h-full border-2 ${
                  lie.color === 'blue' ? 'border-blue-500/50 bg-blue-950/20' : 'border-red-500/50 bg-red-950/20'
                }`}>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className={`text-xl font-bold ${
                      lie.color === 'blue' ? 'text-blue-400' : 'text-red-400'
                    }`}>
                      {lie.title}
                    </h3>
                    <span className="text-sm font-mono text-white/60">{lie.date}</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-xs font-mono text-white/60">대상</p>
                      <p className="font-bold text-white">{lie.target}</p>
                      <p className="text-sm text-white/70">{lie.targetDetail}</p>
                    </div>

                    <div>
                      <p className="mb-1 text-xs font-mono text-white/60">발언</p>
                      <p className="text-lg font-bold italic text-white">"{lie.quote}"</p>
                      <p className="mt-2 text-sm text-white/70">{lie.fullQuote}</p>
                    </div>

                    <div className={`rounded-lg border p-3 ${
                      lie.color === 'blue' ? 'border-blue-500/30 bg-blue-500/10' : 'border-red-500/30 bg-red-500/10'
                    }`}>
                      <p className="mb-1 text-xs font-mono text-white/60">결과</p>
                      <p className={`font-bold ${
                        lie.color === 'blue' ? 'text-blue-400' : 'text-red-400'
                      }`}>
                        {lie.result}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Detailed 48-hour Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-12"
        >
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white">2022년 8월 28~29일</h2>
            <p className="mt-2 text-white/70">은폐 작업의 48시간</p>
          </div>

          <GlassCard>
            <div className="space-y-6">
              {DETAILED_TIMELINE.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                  className={`flex items-start gap-4 rounded-lg p-4 ${
                    item.highlight
                      ? 'border-2 border-yellow-500/50 bg-yellow-950/20'
                      : 'border border-white/10 bg-white/5'
                  }`}
                >
                  <div className={`rounded-full p-2 ${
                    item.highlight ? 'bg-yellow-500/20' : 'bg-primary/20'
                  }`}>
                    <item.icon className={`h-5 w-5 ${
                      item.highlight ? 'text-yellow-400' : 'text-primary'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="mb-1 text-xs font-mono text-white/60">{item.time}</p>
                    <p className="font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-white/70">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        {/* Coverup Flowchart */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-12"
        >
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white">증거 은폐 시스템</h2>
          </div>

          <GlassCard>
            <div className="relative flex flex-col items-center space-y-6 py-8">
              {[
                "제보 접수",
                "보좌진 소집",
                "CCTV 차단 · 일정 삭제",
                "조진희 통제",
                "허위 보고",
                "당직 수령"
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    className={`rounded-lg border-2 px-6 py-3 text-center ${
                      index === 0 || index === 5
                        ? 'border-red-500/50 bg-red-950/20'
                        : 'border-white/20 bg-white/5'
                    }`}
                  >
                    <p className={`font-bold ${
                      index === 0 || index === 5 ? 'text-red-400' : 'text-white'
                    }`}>
                      {step}
                    </p>
                  </motion.div>
                  {index < 5 && (
                    <div className="my-2 h-8 w-0.5 bg-gradient-to-b from-white/50 to-white/10"></div>
                  )}
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        {/* Voice Evidence - 3 Stages */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mb-12"
        >
          <div className="mb-6 flex items-center gap-3">
            <Quote className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-white">육성 녹취 공개 (3단계)</h2>
          </div>

          <div className="space-y-4">
            {VOICE_EVIDENCE.map((evidence, index) => (
              <motion.div
                key={evidence.stage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <GlassCard className={evidence.highlight ? 'border-2 border-primary/50' : ''}>
                  <div className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
                      evidence.highlight ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white'
                    } font-bold`}>
                      {evidence.stage}
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 font-bold text-white">{evidence.speaker}</p>
                      <p className="mb-3 text-xs text-white/60">{evidence.role}</p>
                      <p className={`italic leading-relaxed ${
                        evidence.highlight ? 'text-lg text-white' : 'text-white/80'
                      }`}>
                        "{evidence.quote}"
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 }}
              className="mt-6 rounded-lg border-2 border-primary/50 bg-primary/10 p-4 text-center"
            >
              <p className="text-lg font-bold text-primary">→ 부인 불가능</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Key Voice Quotes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="mb-12"
        >
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white">결정적 육성</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {KEY_QUOTES.map((quote, index) => (
              <motion.div
                key={quote.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.1 + index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="mb-3 text-6xl font-serif text-primary/10">"</div>
                  <p className="mb-4 text-lg italic leading-relaxed text-white">
                    {quote.quote}
                  </p>
                  <div className="border-t border-white/10 pt-3">
                    <p className="text-sm text-primary">— {quote.speaker}</p>
                    <p className="mt-1 text-xs font-mono text-white/60">{quote.date}</p>
                    <p className="mt-2 text-xs text-white/70">{quote.context}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Legal Issues */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          className="mb-12"
        >
          <GlassCard className="border-l-4 border-red-500">
            <div className="mb-6 flex items-center gap-3">
              <Scale className="h-6 w-6 text-red-400" />
              <h2 className="text-2xl font-bold text-white">법적 쟁점</h2>
            </div>

            <div className="space-y-4">
              {LEGAL_ISSUES.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.5 + index * 0.1 }}
                  className="rounded-lg border border-white/10 bg-white/5 p-4"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <p className="font-bold text-white">{issue.title}</p>
                      {issue.subtitle && (
                        <p className="text-sm text-white/70">{issue.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <p className="mb-3 text-sm text-white/80">{issue.detail}</p>
                  <div className={`rounded-lg border p-2 ${
                    issue.statusType === 'expired'
                      ? 'border-white/20 bg-white/5'
                      : 'border-red-500/30 bg-red-950/10'
                  }`}>
                    <p className={`text-sm font-bold ${
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
        <GlassCard className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            <h3 className="mb-4 text-xl font-bold text-white">김병기 측 입장</h3>
            <div className="mb-4 rounded-lg border border-white/20 bg-white/5 p-4">
              <p className="text-lg italic text-white">
                "시시비비를 가린 후 더 큰 책임을 감당하겠다"
              </p>
            </div>
            <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
              <p className="mb-2 font-bold text-yellow-400">⚠️ 문제점:</p>
              <ul className="space-y-1 text-sm text-white">
                <li>• 육성 녹취 3단계 공개됐는데도</li>
                <li>• 여전히 사실관계 부인</li>
                <li>• 정치적 책임 회피</li>
              </ul>
            </div>
          </motion.div>
        </GlassCard>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.9 }}
          className="border-t border-white/10 pt-12"
        >
          <div className="mb-8">
            <p className="font-bold text-white">강혜인·홍주환 기자</p>
            <p className="text-sm text-white/60">2025년 12월 31일 15시 18분</p>
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
                  className="block rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-primary/50 hover:bg-primary/10"
                >
                  <p className="text-white hover:text-primary">{article.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </motion.footer>
      </article>
    </main>
  )
}
