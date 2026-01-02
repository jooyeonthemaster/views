"use client"

import { GlassCard } from "@/components/ui/glass-card"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowLeft,
  AlertTriangle,
  Building2,
  Users,
  Calendar,
  Quote,
  FileWarning,
  ChevronRight,
  ExternalLink,
  Scale,
  Landmark,
  Church,
  UserCheck,
  MessageSquareWarning,
  Briefcase,
  GraduationCap,
  Vote,
  PartyPopper,
  Search
} from "lucide-react"

// 타임라인 데이터 - 기사에서 명시된 팩트만
const TIMELINE_DATA = [
  {
    year: "2017",
    title: "설악면장 재직",
    description: "통일교 건물·시설물이 밀집한 경기도 가평 설악면의 면장으로 재직",
    icon: Briefcase,
    type: "position" as const,
  },
  {
    year: "2021.04",
    title: "가평군 공무원 퇴직",
    description: "허가민원과 과장 등을 거쳐 공무원 생활 마침",
    icon: Building2,
    type: "transition" as const,
  },
  {
    year: "퇴직 후",
    title: "평화아카데미 수강",
    description: "통일교 관련 단체의 사상 교육 프로그램 수강 확인",
    icon: GraduationCap,
    type: "education" as const,
  },
  {
    year: "2022.05.11",
    title: "통일교 간담회 참석 + 핵심 발언",
    description: "지방선거 약 1개월 전, 통일교 유관단체 '가평군수 후보자 간담회' 참석. \"공직자 재직 시절부터 천원단지 처음부터 끝까지 내용을 다 알고 있습니다\"",
    icon: Users,
    type: "event" as const,
    highlight: true,
  },
  {
    year: "2022.06",
    title: "가평군수 당선",
    description: "국민의힘 후보로 가평군수에 출마, 당선",
    icon: Vote,
    type: "election" as const,
  },
  {
    year: "당선 직후",
    title: "통일교 원로 모임 참석",
    description: "당선인 신분으로 통일교 원로 모임에 참석",
    icon: Users,
    type: "event" as const,
  },
  {
    year: "2023.05.07",
    title: "한학자 총재 생일 잔치",
    description: "통일교 한학자 총재의 생일 잔치 참석, 공개적으로 총재 찬양 발언",
    icon: PartyPopper,
    type: "event" as const,
    highlight: true,
  },
  {
    year: "2025.10",
    title: "특검 수사 중 행사 참석",
    description: "김건희 특검이 통일교 정교유착 수사를 진행하던 시기에도 통일교 행사 참석",
    icon: Search,
    type: "event" as const,
  },
]

// 핵심 의혹 데이터
const KEY_ALLEGATIONS = [
  {
    icon: Building2,
    title: "공무원 시절",
    subtitle: "통일교 사업 직접 챙김",
    evidence: "본인 발언 녹화",
    description: "공직자 재직 시절부터 천원단지(통일교 타운) 사업 전체를 파악하고 어려운 부분에 직접 나섰다고 발언",
  },
  {
    icon: Users,
    title: "군수 당선 후",
    subtitle: "통일교 행사 적극 참석",
    evidence: "사진/영상 다수 확보",
    description: "당선 직후부터 통일교의 큼직한 행사는 물론 총재 생일 잔치까지 참석",
  },
  {
    icon: Church,
    title: "공개 찬양",
    subtitle: "한학자 총재 찬양 발언",
    evidence: "행사장 영상",
    description: "\"평화의 어머니 한학자 총재님의 깊은 뜻을 잘 알고 감사드립니다\"",
  },
]

// 핵심 발언 데이터
const KEY_STATEMENTS = [
  {
    context: "2022년 5월 11일, 통일교 유관 단체 '가평군수 후보자 간담회'에서",
    speaker: "서태원 당시 국민의힘 가평군수 후보",
    quote: "HJ크루즈에서 몇년전부터 공직자 재직 시절부터 천원단지(통일교 타운) 처음부터 끝까지 내용을 다 알고 있습니다. 부분 부분 어려운 부분 있을 때 제가 나서서 봤습니다.",
    significance: "공무원 재직 시절부터 통일교 관련 사업을 챙겼다는 의미로 해석",
  },
  {
    context: "2023년 5월 7일, 통일교 한학자 총재 생일 잔치에서",
    speaker: "서태원 가평군수",
    quote: "존경하고 또 존경하고 사랑하는 한학자 총재님의 산수 성탄 80주년을 축하드립니다. 총재님 만수무강하십시오. 인류의 눈물을 닦아주시는 평화의 어머니 한학자 총재님의 깊은 뜻을 잘 알고 감사드립니다, 고맙습니다라고 말씀 올리겠습니다.",
    significance: "현직 군수가 특정 종교 지도자를 공개적으로 찬양",
  },
]

export default function SeoTaewonUnificationPage() {
  const { scrollYProgress } = useScroll()

  return (
    <main className="relative min-h-screen w-full text-white/90 bg-background selection:bg-primary/30">
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-primary to-red-500 origin-left z-50 shadow-[0_0_10px_var(--color-primary)]"
      />

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-background to-background" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-12 pb-20">

        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            메인으로 돌아가기
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-bold tracking-wider text-red-400 animate-pulse">
              탐사보도
            </span>
            <span className="text-sm text-white font-mono">
              2026.01.02 17:11
            </span>
            <span className="text-sm text-white">
              박종화 기자
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 keep-all">
            서태원 가평군수{" "}
            <br className="md:hidden" />
            <span className="text-primary relative">
              "평화의 어머니 한학자 총재님의 깊은 뜻"
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-transparent" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl keep-all">
            공무원에서 군수까지, 통일교의 '해결사'를 자처한 의혹.
            지방 정부의 자치권이 특정 종교 편의를 위해 작동한 초유의 '정교유착' 의혹을 추적한다.
          </p>
        </motion.header>

        {/* Core Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <GlassCard className="border-l-4 border-l-red-500 bg-red-950/20">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1 animate-pulse" />
              <div>
                <h2 className="text-lg font-bold text-red-400 mb-2">핵심 의문</h2>
                <p className="text-white leading-relaxed keep-all">
                  "가평군-통일교 사이에는 어떤 연결 고리가 있는 걸까."
                  <br />
                  <span className="text-white text-sm mt-2 block">
                    현직 가평군수와 통일교의 연관성이 심상치 않은 것으로 드러났다.
                    뉴스타파는 ▲서태원 가평군수가 '가평군청 공무원 시절부터 통일교 관련 사업을 챙겼다'고 직접 발언한 것을 포함해
                    ▲군수에 당선 이후 통일교의 각종 행사에 참여
                    ▲행사장에서 공개적으로 통일교 한학자 총재를 찬양하는 영상, 사진 자료를 다수 확보했다.
                  </span>
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Key Allegations - 3 Cards */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest mb-8 flex items-center gap-2">
            <FileWarning className="h-4 w-4" />
            핵심 의혹 3가지
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {KEY_ALLEGATIONS.map((allegation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
              >
                <GlassCard className="h-full flex flex-col group hover:border-primary/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <allegation.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-white font-mono">{allegation.title}</p>
                      <p className="font-bold text-white text-lg">{allegation.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex-1 mb-4">
                    <p className="text-sm text-white leading-relaxed keep-all">
                      {allegation.description}
                    </p>
                  </div>

                  {/* Evidence */}
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs font-mono flex items-center gap-2">
                      <span className="text-white">증거:</span>
                      <span className="text-primary">{allegation.evidence}</span>
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-24"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest mb-12 flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            타임라인: 서태원과 통일교의 연결고리
          </h2>

          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

            {/* Timeline Line - Mobile */}
            <div className="md:hidden absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

            {TIMELINE_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Icon - Mobile */}
                <div className="md:hidden absolute left-0 z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    item.highlight
                      ? 'bg-red-500/20 border-2 border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                      : 'bg-primary/10 border border-primary/30'
                  }`}>
                    <item.icon className={`h-5 w-5 ${item.highlight ? 'text-red-400' : 'text-primary'}`} />
                  </div>
                </div>

                {/* Timeline Icon - Desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    item.highlight
                      ? 'bg-red-500/20 border-2 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                      : 'bg-primary/10 border border-primary/30'
                  }`}>
                    <item.icon className={`h-6 w-6 ${item.highlight ? 'text-red-400' : 'text-primary'}`} />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3.5rem)] ${
                  index % 2 === 0 ? 'md:pr-4 md:text-right' : 'md:pl-4'
                }`}>
                  <GlassCard className={`${item.highlight ? 'border-red-500/30 bg-red-950/20' : ''}`}>
                    <p className={`text-xs font-mono mb-2 ${item.highlight ? 'text-red-400' : 'text-primary'}`}>
                      {item.year}
                    </p>
                    <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-white leading-relaxed keep-all">
                      {item.description}
                    </p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Statements Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-24"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest mb-10 flex items-center gap-2">
            <Quote className="h-4 w-4" />
            핵심 발언
          </h2>

          <div className="space-y-8">
            {KEY_STATEMENTS.map((statement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
              >
                <GlassCard className="relative overflow-hidden group hover:border-primary/30 transition-colors">
                  {/* Quote Mark Background */}
                  <div className="absolute -top-6 -left-4 text-9xl font-serif text-primary/5 select-none group-hover:text-primary/10 transition-colors">
                    "
                  </div>

                  <div className="relative z-10">
                    {/* Context */}
                    <p className="text-xs text-white mb-6 font-mono border-b border-white/5 pb-4">
                      {statement.context}
                    </p>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-6 pl-5 border-l-2 border-primary keep-all">
                      "{statement.quote}"
                    </blockquote>

                    {/* Speaker */}
                    <p className="text-sm text-primary mb-6 font-medium">
                      — {statement.speaker}
                    </p>

                    {/* Significance */}
                    <div className="pt-4 border-t border-white/10 bg-white/[0.02] -mx-6 -mb-6 px-6 py-4">
                      <p className="text-sm text-white flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="keep-all">
                          <span className="text-white font-mono text-xs mr-2">해석:</span>
                          {statement.significance}
                        </span>
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Relationship Diagram */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-24"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest mb-10 flex items-center gap-2">
            <Scale className="h-4 w-4" />
            정교유착 구조도
          </h2>

          <GlassCard className="p-8 md:p-12">
            {/* Triangle Diagram */}
            <div className="relative max-w-3xl mx-auto">
              {/* Top Node - 서태원 */}
              <div className="flex justify-center mb-12">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(0,255,255,0.3)] relative">
                    <UserCheck className="h-10 w-10 text-primary" />
                    <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-30" />
                  </div>
                  <p className="font-bold text-white text-lg">서태원</p>
                  <p className="text-xs text-white font-mono mt-1">가평군수</p>
                </motion.div>
              </div>

              {/* Connection Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ top: '100px' }}>
                <defs>
                  <linearGradient id="lineGradientLeft" x1="50%" y1="0%" x2="20%" y2="100%">
                    <stop offset="0%" stopColor="rgb(0, 255, 255)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="lineGradientRight" x1="50%" y1="0%" x2="80%" y2="100%">
                    <stop offset="0%" stopColor="rgb(0, 255, 255)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="lineGradientBottom" x1="20%" y1="100%" x2="80%" y2="100%">
                    <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {/* Left Line */}
                <line x1="50%" y1="0" x2="15%" y2="120" stroke="url(#lineGradientLeft)" strokeWidth="2" strokeDasharray="6 4" />
                {/* Right Line */}
                <line x1="50%" y1="0" x2="85%" y2="120" stroke="url(#lineGradientRight)" strokeWidth="2" strokeDasharray="6 4" />
                {/* Bottom Line */}
                <line x1="15%" y1="120" x2="85%" y2="120" stroke="url(#lineGradientBottom)" strokeWidth="2" strokeDasharray="6 4" />
              </svg>

              {/* Bottom Nodes */}
              <div className="flex justify-between items-start mt-8 relative z-10 px-4 md:px-8">
                {/* 가평군 */}
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-500/10 border-2 border-blue-400 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    <Landmark className="h-8 w-8 md:h-10 md:w-10 text-blue-400" />
                  </div>
                  <p className="font-bold text-white">가평군</p>
                  <p className="text-xs text-white font-mono mt-1">지방정부</p>
                </motion.div>

                {/* 통일교 */}
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-500/10 border-2 border-purple-400 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                    <Church className="h-8 w-8 md:h-10 md:w-10 text-purple-400" />
                  </div>
                  <p className="font-bold text-white">통일교</p>
                  <p className="text-xs text-white font-mono mt-1">종교단체</p>
                </motion.div>
              </div>

              {/* Connection Labels */}
              <div className="mt-12 grid md:grid-cols-3 gap-4">
                <GlassCard className="text-center p-4 border-primary/20 bg-primary/5">
                  <p className="text-primary font-mono text-xs mb-2">서태원 ↔ 가평군</p>
                  <p className="text-white text-sm keep-all">공무원 → 면장 → 군수</p>
                  <p className="text-white text-xs mt-2">인허가 권한 보유</p>
                </GlassCard>
                <GlassCard className="text-center p-4 border-red-500/20 bg-red-950/10">
                  <p className="text-red-400 font-mono text-xs mb-2">서태원 ↔ 통일교</p>
                  <p className="text-white text-sm keep-all">사업 챙김, 행사 참석, 찬양 발언</p>
                  <p className="text-white text-xs mt-2">정교유착 의혹의 핵심</p>
                </GlassCard>
                <GlassCard className="text-center p-4 border-purple-500/20 bg-purple-950/10">
                  <p className="text-purple-400 font-mono text-xs mb-2">가평군 ↔ 통일교</p>
                  <p className="text-white text-sm keep-all">시설 밀집 지역, 공적 자원 투입</p>
                  <p className="text-white text-xs mt-2">지방정부 자치권 작동</p>
                </GlassCard>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        {/* Core Issue */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-20"
        >
          <GlassCard className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
            <h2 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
              <MessageSquareWarning className="h-5 w-5" />
              뉴스타파의 시선
            </h2>
            <div className="space-y-6 text-white leading-relaxed">
              <p className="keep-all text-lg">
                뉴스타파가 추적하고 있는 건 경기도에 위치한 한 지방자치단체의 비위가 아니다.
              </p>
              <p className="keep-all text-xl font-medium text-white border-l-2 border-red-400 pl-4 py-2 bg-red-950/20">
                특정 종교 단체의 편의를 위해 지방 정부의 자치권이라는 공적 시스템이 작동한 초유의 '정교유착' 의혹이다.
              </p>
              <p className="keep-all">
                지방 정부의 장인 가평군수가 통일교의 '해결사'를 자처하며 지방 정부의 자치권이라는 공적 시스템을 특정 종교에 밀어주고 있는 건 아닌지,
                <strong className="text-primary"> 수사 등을 통해 철저히 규명해야 하는 이유</strong>다.
              </p>
            </div>
          </GlassCard>
        </motion.section>

        {/* Rebuttal Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mb-20"
        >
          <h2 className="text-sm font-mono text-white tracking-widest mb-6">
            서태원 군수 측 입장
          </h2>

          <GlassCard className="bg-white/[0.02] border-white/10 border-dashed">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Quote className="h-4 w-4 text-white" />
              </div>
              <div>
                <blockquote className="text-white leading-relaxed keep-all text-lg">
                  "통일교보다 기독교나 불교 행사에 더 자주 참석한다. 통일교와의 유착 관계는 없다."
                </blockquote>
                <p className="text-sm text-white mt-4 font-mono">
                  — 서태원 군수, 뉴스타파 취재에 대한 답변
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        {/* Source & Credits */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="border-t border-white/10 pt-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-white">
            <div>
              <p className="font-bold text-white mb-1">박종화 기자</p>
              <p className="font-mono">2026년 01월 02일 17시 11분</p>
            </div>
            <div className="flex items-center gap-2">
              <span>원문 출처:</span>
              <a
                href="https://newstapa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1 font-medium"
              >
                뉴스타파 <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Related Article */}
          <div className="mt-10 pt-8 border-t border-white/5">
            <p className="text-xs text-white font-mono mb-4">관련 기사</p>
            <Link
              href="/news/gapyeong-scandal"
              className="group"
            >
              <GlassCard className="hover:border-primary/50 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-primary font-mono mb-1">2022.05.11</p>
                    <p className="font-bold text-white group-hover:text-primary transition-colors">
                      그림자 면접: 통일교와 군수 후보들의 은밀한 회동
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-white group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </GlassCard>
            </Link>
          </div>

          {/* Back to Home */}
          <div className="mt-8 pt-8 border-t border-white/5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              다른 기사 보기
            </Link>
          </div>
        </motion.footer>
      </div>
    </main>
  )
}
