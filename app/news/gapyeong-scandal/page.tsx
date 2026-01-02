"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Users, Calendar, MapPin, Eye, FileText, ArrowLeft, CheckCircle2, XCircle, Quote, ArrowUpRight } from "lucide-react"
import Link from "next/link"

// Factual Data Only - No Arbitrary Metrics
const CANDIDATES = [
    {
        name: "서태원",
        role: "국민의힘 후보 (현 군수)",
        status: "attend",
        quote: "차기 군수의 짐을 좀 덜은 것 같습니다. 제가 공직자 시절부터 천원단지 개발 다 알고 있었습니다.",
        note: "천원단지 개발 적극 지원 공언"
    },
    {
        name: "송기욱",
        role: "더불어민주당 후보",
        status: "attend",
        quote: "이 사업은 당연한 사업이다. 효정에서 하는 관광 크루즈 사업과 연결될 수 있다.",
        note: "크루즈 사업 연계 약속"
    },
    {
        name: "박범서",
        role: "무소속 후보",
        status: "attend",
        quote: "통일원리를 공부하며 확신을 가졌습니다.",
        note: "교리 공부 언급"
    },
    {
        name: "강태만",
        role: "무소속 후보",
        status: "attend",
        quote: "전 세계 110개 대사관에 전략적으로 통일교를 홍보해드리겠습니다.",
        note: "해외 홍보 지원 약속"
    },
    {
        name: "???",
        role: "불참 후보",
        status: "absent",
        quote: "(참석하지 않음)",
        note: "유일한 불참자"
    },
]

export default function GapyeongScandalPage() {
    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
    const y = useTransform(scrollYProgress, [0, 0.2], [0, 50])

    return (
        <main className="min-h-screen w-full bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
            {/* Progress Bar */}
            <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50 shadow-[0_0_10px_var(--color-primary)]" />

            {/* Navigation */}
            <nav className="fixed top-6 left-6 z-40">
                <Link href="/">
                    <GlassCard className="py-2 px-4 flex items-center gap-2 text-sm font-mono hover:bg-primary/20 transition-colors border-white/10">
                        <ArrowLeft className="w-4 h-4" /> BACK TO INTEL
                    </GlassCard>
                </Link>
            </nav>

            {/* Hero Section */}
            <section className="relative h-[90vh] flex flex-col items-center justify-center border-b border-white/5">
                <motion.div style={{ opacity, y }} className="text-center space-y-8 z-10 px-4 max-w-4xl">
                    <div className="inline-flex items-center gap-2 border border-primary/50 bg-primary/10 px-3 py-1 text-xs text-primary font-mono tracking-[0.2em]">
                        <Eye className="w-3 h-3" /> INVESTIGATION REPORT
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none glitch-text" data-text="SHADOW INTERVIEW">
                        그림자 면접: <br /> <span className="text-white">통일교와 군수 후보들</span>
                    </h1>
                    <p className="font-sans font-light text-white/60 max-w-2xl mx-auto text-xl leading-relaxed">
                        지방선거를 20일 앞둔 시점, <br />
                        가평군수 후보자 5명 중 4명이 특정 종교 시설에 모였다.
                    </p>

                    <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10 w-full max-w-2xl mx-auto">
                        <div className="flex flex-col items-center gap-2">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span className="text-xs font-mono text-white/50">DATE</span>
                            <span className="text-lg font-bold">2022.05.11</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span className="text-xs font-mono text-white/50">LOCATION</span>
                            <span className="text-lg font-bold">가평 천원단지</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Users className="w-5 h-5 text-primary" />
                            <span className="text-xs font-mono text-white/50">ATTENDEES</span>
                            <span className="text-lg font-bold">후보 4인</span>
                        </div>
                    </div>
                </motion.div>

                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent -z-10" />
            </section>

            {/* Timeline Visualization: Why it matters */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-display font-bold mb-12 flex items-center gap-3">
                        <Calendar className="text-primary" />
                        타임라인: 선거 직전의 회동
                    </h2>

                    <div className="relative pl-8 border-l-2 border-white/10 space-y-12">
                        {/* Event 1 */}
                        <div className="relative">
                            <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_10px_var(--color-primary)]" />
                            <div className="text-primary font-mono text-sm mb-1">2022.05.11 (D-20)</div>
                            <GlassCard className="p-6 inline-block w-full">
                                <strong className="block text-lg mb-2">통일교 가평군수 후보자 간담회 개최</strong>
                                <p className="text-white/60 text-sm">장소: 천원단지 (통일교 타운)</p>
                            </GlassCard>
                        </div>

                        {/* Connector Line Dotted */}
                        <div className="absolute left-[-1px] top-12 bottom-12 w-0.5 border-r border-dotted border-white/20 h-20" />

                        {/* Event 2 */}
                        <div className="relative">
                            <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-white/20 border-4 border-background" />
                            <div className="text-white/50 font-mono text-sm mb-1">2022.06.01</div>
                            <div className="p-4 border border-white/10 rounded-lg bg-white/5 inline-block w-full">
                                <strong className="block text-lg text-white/80">제8회 전국동시지방선거일</strong>
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 text-white/50 text-sm italic py-4 border-y border-white/5 text-center">
                        "선거 운동으로 가장 바쁜 시기에, 후보자들이 TV 토론회도 아닌 특정 종교 간담회에 집결했다."
                    </p>
                </div>
            </section>

            {/* The Candidates: Fact Cards */}
            <section className="py-24 px-6 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-display font-bold mb-12 text-center">
                        참석자 분석
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {CANDIDATES.filter(c => c.status === 'attend').map((person, idx) => (
                            <GlassCard key={idx} className="flex flex-col gap-4 hover:border-primary/50 transition-colors">
                                <div className="flex items-center justify-between">
                                    <div className="text-xs font-mono text-white/40">{person.role}</div>
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                </div>
                                <div className="text-xl font-bold">{person.name}</div>

                                <div className="flex-1 bg-white/5 p-4 rounded-lg relative mt-2">
                                    <Quote className="w-4 h-4 text-primary/50 absolute -top-2 -left-2 bg-background p-0.5 rounded-full" />
                                    <p className="text-sm text-white/80 font-light leading-relaxed">
                                        {person.quote}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-white/10">
                                    <div className="text-xs text-primary font-mono">
                                        * {person.note}
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>

                    {/* Absentee */}
                    <div className="mt-8 max-w-sm mx-auto">
                        <GlassCard className="opacity-50 border-dashed border-white/20 flex items-center justify-between p-4">
                            <span className="text-white/40">불참 후보 1명</span>
                            <div className="flex items-center gap-2 text-white/30 text-xs">
                                <XCircle className="w-4 h-4" />
                                DID NOT ATTEND
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* The Evidence: Q&A Visualization */}
            <section className="py-24 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold mb-4">질의와 응답</h2>
                    <p className="text-white/60">간담회 내용은 단순한 '덕담'이 아니었다. 구체적인 사업 지원 요청과 확약이 오갔다.</p>
                </div>

                <div className="space-y-12 relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent lg:before:block hidden">
                    {/* Item 1 */}
                    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex-1 w-full lg:text-right relative">
                            <span className="absolute top-1/2 -right-12 text-2xl font-bold text-white/20 hidden lg:block">→</span>
                            <div className="text-sm font-bold text-white/50 mb-2">통일교 (사회자) 질문</div>
                            <p className="text-lg">"군수가 된다면 통일교 사업을 얼마나 적극적으로 도울 것입니까?"</p>
                        </div>

                        <div className="hidden lg:flex items-center justify-center w-8 shrink-0">
                            <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
                        </div>

                        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 flex-1 w-full relative">
                            <span className="absolute top-1/2 -left-12 text-2xl font-bold text-white/20 hidden lg:block">→</span>
                            <div className="text-sm font-bold text-primary mb-2">후보자 답변 요약</div>
                            <ul className="space-y-2 list-disc list-inside text-sm text-white/80">
                                <li>"해외 110개 대사관에 홍보하겠다" (강태만)</li>
                                <li>"제가 나서서 물꼬를 텄다" (서태원)</li>
                                <li>"당연한 사업이다" (송기욱)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex-1 w-full lg:text-right">
                            <div className="text-sm font-bold text-white/50 mb-2">통일교 (평화대사협의회장) 질문</div>
                            <p className="text-lg">"기적의 전투 기념관 설립을 추진 증인데, 적극 추진할 의향이 있습니까?"</p>
                        </div>

                        <div className="hidden lg:flex items-center justify-center w-8 shrink-0">
                            <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
                        </div>

                        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 flex-1 w-full">
                            <div className="text-sm font-bold text-primary mb-2">후보자 답변 요약</div>
                            <p className="text-lg">"미영연방 공원화 사업과 함께 같이 가겠다. 협의회와 함께 하겠다." (서태원)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Outro */}
            <footer className="py-20 border-t border-white/10 text-center bg-black/40">
                <p className="text-white/40 mb-8 font-mono text-sm max-w-md mx-auto leading-relaxed">
                    [출처: 뉴스타파 "통일교가 가평군수 후보자 면접... 현장 영상 공개"] <br />
                    해당 기사는 2022년 지방선거 당시의 실제 발언을 기반으로 재구성되었습니다.
                </p>
                <Link href="https://newstapa.org" className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:bg-primary/10 hover:border-primary/50 transition-colors text-sm font-bold rounded-lg text-white">
                    원본 기사 보러가기 <ArrowUpRight className="w-4 h-4" />
                </Link>
            </footer>
        </main>
    )
}
