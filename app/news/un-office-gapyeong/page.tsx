"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { ArrowLeft, Globe, AlertTriangle, Scale, FileText, Users, TrendingUp, MapPin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// UN Office Locations
const UN_OFFICES = [
  { id: 1, location: "미국 뉴욕", active: true },
  { id: 2, location: "스위스 제네바", active: true },
  { id: 3, location: "오스트리아 비엔나", active: true },
  { id: 4, location: "케냐 나이로비", active: true },
  { id: 5, location: "가평 천원궁", active: false, desired: true }
]

// Festival Actions
const FESTIVAL_ACTIONS = [
  {
    id: 1,
    icon: Users,
    action: "한학자 총재를 'Holy Mother' 칭송",
    detail: "성스러운 어머니라는 종교적 호칭 사용"
  },
  {
    id: 2,
    icon: FileText,
    action: "감사패 전달",
    detail: "통일교 총재에게 공식 감사"
  },
  {
    id: 3,
    icon: TrendingUp,
    action: "UN 사무국 유치 결의서 전달",
    detail: "가평군민 21,000명 서명"
  }
]

// Lobbying Strategy
const LOBBYING_TIERS = [
  {
    id: 1,
    tier: "지방정부",
    target: "서태원 가평군수",
    year: "2025",
    action: "결의서 전달"
  },
  {
    id: 2,
    tier: "대통령",
    target: "윤석열 당선자",
    year: "2022",
    action: "직접 청탁"
  },
  {
    id: 3,
    tier: "영부인",
    target: "김건희 씨",
    year: "2022",
    action: "전성배 경유"
  }
]

// Constitutional Violations
const VIOLATIONS = [
  "공적 시스템이 종교 성지화 도구로 전락",
  "군수가 종교 숙원 해결에 앞장섬",
  "종교 시설에 국제기구 유치 결의",
  "민주주의와 행정 독립성 위협"
]

// Related Articles
const RELATED_ARTICLES = [
  {
    title: "통일교 타운 성지화… '특구' 지정까지 추진",
    href: "/news/gapyeong-special-zone"
  },
  {
    title: "서태원 가평군수 \"평화의 어머니 한학자 총재님의 깊은 뜻\"",
    href: "/news/seo-taewon-unification"
  },
  {
    title: "그림자 면접: 통일교와 가평군수 후보들의 은밀한 회동",
    href: "/news/gapyeong-scandal"
  }
]

export default function UNOfficeGapyeongPage() {
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
          <div className="mb-6 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-bold tracking-wider text-orange-400">
            타파스
          </div>
          <h1 className="mb-6 font-display text-5xl font-bold leading-tight md:text-7xl">
            UN 사무국을 가평에?
            <br />
            통일교 숙원 해결 앞장선 가평군수
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-white">
            현직 군수가 종교의 '숙원'을
            <br />
            공적 시스템으로 해결하려 한다
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>허현재 기자</span>
            <span>·</span>
            <span>2025년 12월 29일 14시 08분</span>
          </div>
        </motion.div>

        {/* Core Question */}
        <GlassCard className="mb-12 border-l-4 border-orange-500">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-orange-400" />
              <h2 className="text-2xl font-bold text-white">핵심 의문</h2>
            </div>
            <p className="mb-4 text-2xl font-bold leading-relaxed text-white">
              "왜 군수가 종교의 숙원을 해결하려 하는가?"
            </p>
            <p className="leading-relaxed text-white">
              서태원 가평군수는 통일교 행사에서 가평군민 21,000명의 서명을 모은 'UN 사무국 유치 결의서'를 전달했다.
            </p>
          </motion.div>
        </GlassCard>

        {/* UN Office Locations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="mb-6 flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-white">UN 사무국 현황</h2>
          </div>

          <GlassCard>
            <div className="space-y-4">
              <p className="text-sm text-white/80">
                UN 사무국은 전 세계에 단 4곳만 존재합니다
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {UN_OFFICES.map((office, index) => (
                  <motion.div
                    key={office.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`flex items-center gap-3 rounded-lg p-4 ${
                      office.desired
                        ? "border-2 border-orange-500/50 bg-orange-500/10"
                        : "border border-white/10 bg-white/5"
                    }`}
                  >
                    <MapPin className={`h-5 w-5 ${office.desired ? "text-orange-400" : "text-primary"}`} />
                    <div className="flex-1">
                      <p className={`font-bold ${office.desired ? "text-orange-400" : "text-white"}`}>
                        {office.location}
                      </p>
                      {office.desired && (
                        <p className="text-xs text-orange-400/80">통일교의 목표 - 5번째 사무국</p>
                      )}
                    </div>
                    {office.active && <span className="text-xs text-primary">● 현재</span>}
                    {office.desired && <span className="text-xs text-orange-400">● 희망</span>}
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
                <p className="font-bold text-orange-400">통일교의 목표:</p>
                <p className="mt-2 text-white">
                  한국 가평 천원궁 (통일교 본부)에 UN 사무국 유치
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        {/* Festival Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="mb-6 flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-white">2025년 3월 효정문화축제</h2>
          </div>

          <GlassCard>
            <div className="space-y-6">
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm text-white/80">결정적 장면</p>
                <p className="mt-2 font-bold text-white">
                  서태원 군수가 통일교 행사에서 결의서를 전달하는 순간
                </p>
              </div>

              <div className="space-y-4">
                <p className="font-bold text-white">서태원 군수의 행동:</p>
                {FESTIVAL_ACTIONS.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-4"
                  >
                    <div className="rounded-full bg-primary/20 p-2">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-white">{item.action}</p>
                      <p className="mt-1 text-sm text-white/70">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-lg border-2 border-orange-500/50 bg-orange-500/10 p-6">
                <p className="mb-3 text-sm font-bold text-orange-400">결의서 내용</p>
                <p className="mb-4 text-lg font-bold leading-relaxed text-white">
                  "UN 사무국을 가평에 유치할 수 있도록<br />민·관이 협력한다"
                </p>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-400" />
                  <p className="text-2xl font-bold text-orange-400">
                    21,000명
                    <span className="ml-2 text-base text-white">가평군민 서명</span>
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        {/* Public-Private Cooperation Structure */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white">민·관 협력 구조</h2>
            <p className="mt-2 text-white/70">정교유착 메커니즘</p>
          </div>

          <GlassCard>
            <div className="relative flex flex-col items-center space-y-8 py-8">
              {/* 통일교 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-center"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-purple-400 bg-gradient-to-br from-purple-500/30 to-purple-500/10">
                  <span className="text-center text-sm font-bold text-purple-400">통일교</span>
                </div>
                <p className="mt-3 text-sm text-white/60">숙원 요청</p>
              </motion.div>

              {/* Arrow */}
              <div className="h-12 w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>

              {/* 가평군수 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col items-center"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-blue-400 bg-gradient-to-br from-blue-500/30 to-blue-500/10">
                  <span className="text-center text-sm font-bold text-blue-400">가평군수</span>
                </div>
                <div className="mt-3 space-y-1 text-center">
                  <p className="text-sm font-bold text-white">21,000명 서명</p>
                  <p className="text-sm font-bold text-white">결의서 작성</p>
                </div>
              </motion.div>

              {/* Arrow */}
              <div className="h-12 w-0.5 bg-gradient-to-b from-blue-400 to-orange-400"></div>

              {/* UN 사무국 유치 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 }}
                className="flex flex-col items-center"
              >
                <div className="flex h-24 w-32 items-center justify-center rounded-lg border-2 border-orange-400 bg-gradient-to-br from-orange-500/30 to-orange-500/10">
                  <span className="text-center text-sm font-bold text-orange-400">UN 사무국<br />유치</span>
                </div>
              </motion.div>

              {/* Key Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-6 rounded-lg border-2 border-orange-500/50 bg-orange-500/10 p-4 text-center"
              >
                <p className="font-bold text-orange-400">"민·관이 협력한다"</p>
                <p className="mt-2 text-white">= 공적 시스템이 종교 숙원 해결</p>
              </motion.div>
            </div>
          </GlassCard>
        </motion.section>

        {/* Political Lobbying Map */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-12"
        >
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white">통일교의 정치권 로비 전략</h2>
            <p className="mt-2 text-white/70">전방위 접근</p>
          </div>

          <GlassCard>
            <div className="space-y-8 py-6">
              {/* Central Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
                className="flex justify-center"
              >
                <div className="flex h-20 w-32 items-center justify-center rounded-lg border-2 border-purple-400 bg-gradient-to-br from-purple-500/30 to-purple-500/10">
                  <span className="text-center font-bold text-purple-400">통일교</span>
                </div>
              </motion.div>

              {/* Three Branches */}
              <div className="grid gap-6 md:grid-cols-3">
                {LOBBYING_TIERS.map((tier, index) => (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Connecting Line Visual */}
                    <div className="mb-4 flex justify-center">
                      <div className="h-12 w-0.5 bg-gradient-to-b from-purple-400/50 to-transparent"></div>
                    </div>

                    <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                      <div className="rounded-full bg-primary/20 px-3 py-1 text-center text-xs font-bold text-primary">
                        {tier.tier}
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-white">{tier.target}</p>
                        <p className="mt-1 text-sm text-white/60">({tier.year})</p>
                      </div>
                      <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-2 text-center">
                        <p className="text-sm font-bold text-orange-400">{tier.action}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Goal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
                className="mt-8 rounded-lg border-2 border-orange-500/50 bg-orange-500/10 p-4 text-center"
              >
                <p className="text-lg font-bold text-orange-400">→ UN 사무국 유치 목표</p>
              </motion.div>
            </div>
          </GlassCard>
        </motion.section>

        {/* Cable Car Brief Mention */}
        <GlassCard className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <h3 className="font-bold text-white">이전 보도: 사업 계획도 일치</h3>
            </div>
            <p className="mb-3 text-white">
              통일교 케이블카 = 가평군 케이블카 (100% 일치)
            </p>
            <Link
              href="/news/gapyeong-special-zone"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              상세 보도 보기 →
            </Link>
          </motion.div>
        </GlassCard>

        {/* Constitutional Violation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
          className="mb-12"
        >
          <GlassCard className="border-l-4 border-red-500">
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-6 w-6 text-red-400" />
              <h2 className="text-2xl font-bold text-white">헌법 제20조: 정교분리 원칙</h2>
            </div>

            <div className="mb-6 rounded-lg border border-white/20 bg-white/5 p-4">
              <p className="text-center text-lg font-bold text-white">"종교와 정치의 분리"</p>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-red-400">❌ 현재 가평군:</p>
              {VIOLATIONS.map((violation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.0 + index * 0.1 }}
                  className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/5 p-3"
                >
                  <span className="text-red-400">•</span>
                  <p className="text-white">{violation}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        {/* Mayor's Response */}
        <GlassCard className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            <h3 className="mb-4 text-xl font-bold text-white">서태원 군수 측 입장</h3>
            <div className="mb-4 rounded-lg border border-white/20 bg-white/5 p-4">
              <p className="text-lg italic text-white">
                "자세한 내용은 몰랐고<br />통일교에서 시키는 대로 했다"
              </p>
            </div>
            <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4">
              <p className="mb-2 font-bold text-orange-400">⚠️ 문제점:</p>
              <p className="text-white">군수가 내용도 모르고 결의서 전달?</p>
            </div>
          </motion.div>
        </GlassCard>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="border-t border-white/10 pt-12"
        >
          <div className="mb-8">
            <p className="font-bold text-white">허현재 기자</p>
            <p className="text-sm text-white/60">2025년 12월 29일 14시 08분</p>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-sm font-bold text-white">원문 출처:</p>
            <p className="text-white/80">뉴스타파 타파스</p>
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
