"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import {
  AlertTriangle,
  ArrowLeft,
  Church,
  Landmark,
  TrendingUp,
  Map,
  DollarSign,
  FileText,
  Quote,
  ExternalLink,
  ChevronRight,
  Cable,
  Trees,
  Building2,
  Coins,
  ShieldAlert
} from "lucide-react"
import Link from "next/link"

// 한학자 총재의 3가지 지시
const DIRECTIVES = [
  {
    id: 1,
    icon: Church,
    number: "지시 ①",
    title: "바티칸 같은 성지로",
    quote: "천원단지를 로마 바티칸 성당과 같은 종교와 문화의 성지로 만들어야 한다",
    detail: "천원단지 = 통일교 타운 전체",
    color: "purple"
  },
  {
    id: 2,
    icon: Cable,
    number: "지시 ②",
    title: "관광명소를 만들어야",
    quote: "관광객 1천만 명이 올 수 있는 관광명소를 만들어야 한다",
    detail: "청평호반 케이블카 사업",
    color: "blue"
  },
  {
    id: 3,
    icon: Trees,
    number: "지시 ③",
    title: "에덴동산을 만들어야",
    quote: "천원단지를 성경 속 낙원 '에덴동산'으로 조성",
    detail: "가평크루즈, 베고니아새정원 등",
    color: "green"
  }
]

// 사업 비교 데이터
const PLAN_COMPARISON = [
  {
    project: "케이블카",
    church: {
      name: "청평호반 케이블카",
      details: ["천원단지 옆 출발", "청평호 가로지름", "관광객 1천만명 목표"]
    },
    government: {
      name: "청평호 케이블카",
      details: ["동일 출발지", "동일 경로", "관광 벨트화"]
    },
    match: 100
  },
  {
    project: "관광단지",
    church: {
      name: "에덴동산 조성",
      details: ["HJ천주천보수련원", "HJ글로벌아트센터", "가평크루즈, 베고니아새정원"]
    },
    government: {
      name: "관광 클러스터",
      details: ["동일 시작 지점", "동일 종료 지점", "동일 범위"]
    },
    match: 100
  }
]

// 특구 수혜 대상
const BENEFICIARIES = [
  {
    name: "HJ디오션리조트",
    type: "통일교 산하 한주그룹",
    benefits: ["재정 지원", "규제 완화"]
  },
  {
    name: "아이티씨코리아",
    type: "통일교 관련 업체",
    benefits: ["재정 지원", "규제 완화"]
  }
]

export default function GapyeongSpecialZonePage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 50])

  return (
    <main className="min-h-screen w-full bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50 shadow-[0_0_10px_var(--color-primary)]"
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-20">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-bold tracking-wider text-yellow-400 animate-pulse">
              공직감시
            </span>
            <span className="text-sm text-white font-mono">
              2025.12.26 18:00
            </span>
            <span className="text-sm text-white">
              전혁수 기자
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 keep-all">
            통일교 타운 성지화…{" "}
            <br className="md:hidden" />
            <span className="text-primary relative">
              '특구' 지정까지 추진
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-transparent" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl keep-all">
            가평군이 통일교의 '성지화' 사업에 기회발전특구 지정을 통해 재정 지원과 규제 완화를 제공하려는 정교유착 의혹
          </p>
        </motion.header>

        {/* Core Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <GlassCard className="border-l-4 border-l-yellow-500 bg-yellow-950/20">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1 animate-pulse" />
              <div>
                <h2 className="text-lg font-bold text-yellow-400 mb-2">핵심 의문</h2>
                <p className="text-white leading-relaxed keep-all">
                  "왜 통일교의 계획과 가평군의 계획이 100% 일치하는가?"
                  <br />
                  <span className="text-white text-sm mt-2 block">
                    뉴스타파는 ▲통일교 HJ한주그룹의 내부 문건과 ▲가평군 사업 계획안을 입수했다.
                    통일교의 케이블카 코스와 가평군의 코스를 지도 위에 표시해본 결과, 두 코스가 정확히 일치했다.
                    통일교의 '에덴동산' 조성 범위와 가평군의 '관광 클러스터' 범위 역시 정확히 일치했다.
                  </span>
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* 한학자 총재의 3가지 지시 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-sm font-mono text-white tracking-widest mb-6">
            한학자 총재의 지시 ("참어머님 말씀")
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {DIRECTIVES.map((directive, index) => (
              <motion.div
                key={directive.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col group hover:border-primary/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className={`p-4 rounded-xl mb-3 ${
                      directive.color === 'purple' ? 'bg-purple-500/10 border border-purple-500/20' :
                      directive.color === 'blue' ? 'bg-blue-500/10 border border-blue-500/20' :
                      'bg-green-500/10 border border-green-500/20'
                    }`}>
                      <directive.icon className={`h-8 w-8 ${
                        directive.color === 'purple' ? 'text-purple-400' :
                        directive.color === 'blue' ? 'text-blue-400' :
                        'text-green-400'
                      }`} />
                    </div>
                    <p className="text-xs text-white font-mono mb-1">{directive.number}</p>
                    <p className="font-bold text-white text-lg">{directive.title}</p>
                  </div>

                  {/* Quote */}
                  <div className="flex-1 mb-4">
                    <blockquote className="text-sm text-white leading-relaxed keep-all border-l-2 border-primary pl-3 italic">
                      "{directive.quote}"
                    </blockquote>
                  </div>

                  {/* Detail */}
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs font-mono text-primary">
                      → {directive.detail}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 사업 비교 - Split View */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            사업 계획 비교: 완벽한 일치
          </h2>

          <div className="space-y-8">
            {PLAN_COMPARISON.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <GlassCard className="overflow-hidden">
                  {/* Project Title */}
                  <div className="text-center mb-6 pb-4 border-b border-white/10">
                    <h3 className="text-xl font-bold text-primary mb-2">{comparison.project}</h3>
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      <span className="text-xs font-mono text-primary">일치도: {comparison.match}%</span>
                    </div>
                  </div>

                  {/* Comparison Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* 통일교 계획 */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-3">
                        <Church className="h-5 w-5 text-purple-400" />
                        <span className="font-bold text-white">통일교 계획</span>
                        <span className="text-xs text-white font-mono">(내부문건)</span>
                      </div>
                      <div className="bg-purple-950/20 border border-purple-500/20 rounded-lg p-4">
                        <p className="font-bold text-white mb-3">{comparison.church.name}</p>
                        <ul className="space-y-2">
                          {comparison.church.details.map((detail, i) => (
                            <li key={i} className="text-sm text-white flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* 가평군 계획 */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-3">
                        <Landmark className="h-5 w-5 text-blue-400" />
                        <span className="font-bold text-white">가평군 계획</span>
                        <span className="text-xs text-white font-mono">(공식문서)</span>
                      </div>
                      <div className="bg-blue-950/20 border border-blue-500/20 rounded-lg p-4">
                        <p className="font-bold text-white mb-3">{comparison.government.name}</p>
                        <ul className="space-y-2">
                          {comparison.government.details.map((detail, i) => (
                            <li key={i} className="text-sm text-white flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Match Indicator */}
                  <div className="mt-6 pt-6 border-t border-white/10 text-center">
                    <div className="inline-flex items-center gap-3 text-primary">
                      <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-primary to-primary" />
                      <span className="font-mono text-sm">100% 일치</span>
                      <div className="h-0.5 w-16 bg-gradient-to-r from-primary via-primary to-transparent" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 기회발전특구 메커니즘 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            기회발전특구를 통한 특혜 구조
          </h2>

          <GlassCard className="bg-gradient-to-b from-white/[0.02] to-transparent">
            {/* Flow Chart */}
            <div className="relative flex flex-col items-center space-y-6 py-8">
              {/* 가평군 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-500/10 border-2 border-blue-400 flex items-center justify-center mx-auto mb-3 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <Landmark className="h-12 w-12 text-blue-400" />
                </div>
                <p className="font-bold text-white text-lg">가평군</p>
                <p className="text-xs text-white font-mono mt-1">지방정부</p>
              </motion.div>

              {/* Arrow Down */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-primary/50" />
                <div className="w-3 h-3 rotate-45 border-r-2 border-b-2 border-primary -mt-1" />
              </div>

              {/* 특구 지정 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="bg-primary/10 border-2 border-primary/30 rounded-xl px-8 py-4"
              >
                <p className="font-bold text-primary text-center">기회발전특구 지정</p>
              </motion.div>

              {/* Arrow Down Split */}
              <div className="flex items-start gap-16">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-green-500" />
                  <DollarSign className="h-8 w-8 text-green-400 bg-green-950/30 border border-green-500/30 rounded-lg p-1" />
                  <p className="text-xs text-green-400 font-mono mt-2">재정 지원</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-yellow-500" />
                  <ShieldAlert className="h-8 w-8 text-yellow-400 bg-yellow-950/30 border border-yellow-500/30 rounded-lg p-1" />
                  <p className="text-xs text-yellow-400 font-mono mt-2">규제 완화</p>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-12 bg-gradient-to-b from-yellow-500 to-primary/50" />
                <div className="w-3 h-3 rotate-45 border-r-2 border-b-2 border-primary -mt-1" />
              </div>

              {/* 수혜 대상 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="w-full"
              >
                <div className="bg-purple-950/20 border border-purple-500/30 rounded-xl p-6">
                  <p className="font-bold text-white mb-4 flex items-center gap-2">
                    <Coins className="h-5 w-5 text-purple-400" />
                    수혜 대상 (통일교 관련)
                  </p>
                  <div className="space-y-3">
                    {BENEFICIARIES.map((beneficiary, index) => (
                      <div key={index} className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
                        <p className="font-bold text-white mb-1">{beneficiary.name}</p>
                        <p className="text-xs text-purple-400 mb-2">{beneficiary.type}</p>
                        <div className="flex flex-wrap gap-2">
                          {beneficiary.benefits.map((benefit, i) => (
                            <span key={i} className="text-xs bg-primary/10 border border-primary/20 text-primary px-2 py-1 rounded">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Summary */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-white italic keep-all">
                "공적 자원이 특정 종교의 사업에 투입되는 구조"
              </p>
            </div>
          </GlassCard>
        </motion.section>

        {/* 결정적 발언 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mb-20"
        >
          <h2 className="text-sm font-mono text-white tracking-widest mb-6">
            결정적 발언
          </h2>

          <GlassCard className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
            <div className="relative">
              {/* Quote Mark */}
              <div className="absolute -top-4 -left-4 text-7xl font-serif text-primary/10 select-none">
                "
              </div>

              <div className="relative z-10">
                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6 keep-all">
                  "가평군수에게 꼭 전해라. <br />
                  내가 가평을 관광특별시로 만들어 주겠다"
                </blockquote>

                {/* Speaker */}
                <p className="text-sm text-primary mb-6 font-medium">
                  — 한학자 총재, HJ한주그룹 내부 문건
                </p>

                {/* Analysis */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm font-mono text-yellow-400 mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    분석
                  </p>
                  <p className="text-sm text-white leading-relaxed keep-all">
                    종교 지도자가 지방정부 수장에게 "만들어주겠다"는 표현을 사용한 것은,
                    주체가 통일교임을 명확히 드러낸다. 가평군수와의 관계를 암시하는 발언이다.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        {/* 가평군 해명 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-20"
        >
          <h2 className="text-sm font-mono text-white tracking-widest mb-6">
            가평군 측 입장
          </h2>

          <GlassCard className="bg-white/[0.02] border-white/10 border-dashed">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Quote className="h-4 w-4 text-white" />
              </div>
              <div className="space-y-4">
                <blockquote className="text-white leading-relaxed keep-all">
                  "특구 추진을 위한 기업을 구하려고 다른 기업들도 접촉을 했지만 투자 의향이 없었다.
                  그러던 중 천년뱃길 사업과 연관이 있는 HJ디오션리조트, ITC코리아와 사업을 진행하게 됐다"
                </blockquote>
                <blockquote className="text-white leading-relaxed keep-all">
                  "가평군의 관광을 벨트화하기 위해 추진한 것이다.
                  통일교와 관계없이 과거부터 민간자본을 유치하려 했다"
                </blockquote>
                <p className="text-sm text-white font-mono pt-4 border-t border-white/5">
                  — 가평군 관계자
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        {/* Source & Credits */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="border-t border-white/10 pt-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-white">
            <div>
              <p className="font-bold text-white mb-1">전혁수 기자</p>
              <p className="font-mono">2025년 12월 26일 18시 00분</p>
            </div>
            <div className="flex items-center gap-2">
              <span>원문 출처:</span>
              <a
                href="https://newstapa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                뉴스타파 <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-10 pt-8 border-t border-white/5">
            <p className="text-xs text-white font-mono mb-4">관련 기사</p>
            <div className="space-y-3">
              <Link href="/news/seo-taewon-unification" className="group">
                <GlassCard className="hover:border-primary/50 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-primary font-mono mb-1">2026.01.02</p>
                      <p className="font-bold text-white group-hover:text-primary transition-colors">
                        서태원 가평군수 "평화의 어머니 한학자 총재님의 깊은 뜻"
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-white group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </GlassCard>
              </Link>
              <Link href="/news/gapyeong-scandal" className="group">
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
          </div>

          {/* Back to Home */}
          <div className="mt-8 pt-8 border-t border-white/5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
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
