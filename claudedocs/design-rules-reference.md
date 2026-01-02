# Viewse 디자인 규칙 레퍼런스

## 프로젝트 개요
- **Framework**: Next.js 16.1.1 (App Router)
- **React**: 19 (Server Components)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **3D**: Three.js + React Three Fiber
- **Typography**: Noto Sans KR (한글), Orbitron (영문/디스플레이)

## 디자인 시스템

### 색상 체계 (OKLCH)

```css
/* 기본 색상 */
--background: oklch(0.05 0 0);           /* 거의 검은색 */
--foreground: oklch(0.985 0.04 200);     /* 거의 흰색 */

/* 주요 색상 */
--primary: oklch(0.85 0.18 190);         /* Neon Cyan - 주요 강조 */
--secondary: oklch(0.25 0.1 300);        /* Deep Purple */

/* 카드 */
--card: oklch(0.08 0 0);                 /* 약간 밝은 검은색 */

/* 경고/위험 */
--destructive: oklch(0.6 0.25 25);       /* Red */

/* 투명도 활용 */
text-white/90  /* 90% 불투명도 */
text-white/60  /* 60% 불투명도 */
text-white/40  /* 40% 불투명도 */
bg-black/40    /* 40% 불투명 검은 배경 */
```

### 탐사보도 전용 색상

```css
/* 기존 서태원 기사에서 사용된 색상 */
--red-alert: oklch(0.6 0.25 25);         /* 긴급/경고 */
border-red-500/30                         /* Red border 30% */
bg-red-950/20                             /* Red background 20% */
text-red-400                              /* Red text */
```

### 글래스모피즘 (Glassmorphism)

```tsx
// GlassCard 컴포넌트 기본 스타일
"relative overflow-hidden rounded-xl
border border-white/10
bg-black/40
backdrop-blur-md
transition-all duration-300"

// Hover 효과
"hover:border-primary/50
hover:bg-black/60
hover:shadow-[0_0_30px_-5px_var(--color-primary)]"

// Before 슈도 엘리먼트
"before:absolute before:inset-0 before:-z-10
before:bg-gradient-to-b before:from-white/5
before:to-transparent
before:opacity-0 hover:before:opacity-100"
```

### 타이포그래피

```css
/* 헤딩 */
font-display text-7xl md:text-9xl font-bold uppercase
text-3xl md:text-5xl lg:text-6xl font-bold leading-tight

/* 본문 */
text-lg md:text-xl leading-relaxed
text-sm leading-relaxed

/* 메타/라벨 */
font-mono text-xs tracking-widest
font-mono text-sm

/* 한글 줄바꿈 최적화 */
keep-all  /* word-break: keep-all */
```

### 레이아웃

```tsx
// 컨테이너
max-w-7xl mx-auto px-6 pt-24 pb-20  /* 메인 */
max-w-4xl mx-auto                   /* 기사 */
max-w-3xl mx-auto                   /* 좁은 콘텐츠 */

// 그리드
grid gap-6 md:grid-cols-2 lg:grid-cols-3  /* 3단 그리드 */
grid gap-8 md:grid-cols-2                 /* 2단 그리드 */

// Flex
flex flex-col gap-6
flex items-center justify-between
```

## 컴포넌트 패턴

### 1. 기사 Hero Section

```tsx
<motion.header
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="mb-16"
>
  {/* Category Badge */}
  <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-bold tracking-wider text-red-400 animate-pulse">
    탐사보도
  </span>

  {/* Title */}
  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 keep-all">
    메인 제목{" "}
    <span className="text-primary relative">
      강조 부분
      <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-transparent" />
    </span>
  </h1>

  {/* Subtitle */}
  <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl keep-all">
    부제목 또는 요약
  </p>
</motion.header>
```

### 2. 핵심 의문 카드

```tsx
<GlassCard className="border-l-4 border-l-red-500 bg-red-950/20">
  <div className="flex items-start gap-4">
    <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1 animate-pulse" />
    <div>
      <h2 className="text-lg font-bold text-red-400 mb-2">핵심 의문</h2>
      <p className="text-white leading-relaxed keep-all">
        질문 내용
      </p>
    </div>
  </div>
</GlassCard>
```

### 3. 카드 그리드 (주장/증거)

```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {items.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard className="h-full flex flex-col group hover:border-primary/50">
        {/* Icon Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
            <item.icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-xs text-white font-mono">상위 레이블</p>
            <p className="font-bold text-white text-lg">제목</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 mb-4">
          <p className="text-sm text-white leading-relaxed keep-all">
            설명 내용
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/5">
          <p className="text-xs font-mono">
            <span className="text-white">증거:</span>
            <span className="text-primary">증거 내용</span>
          </p>
        </div>
      </GlassCard>
    </motion.div>
  ))}
</div>
```

### 4. 타임라인 (수직)

```tsx
<div className="relative">
  {/* Vertical Line */}
  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

  {timeline.map((item, index) => (
    <motion.div
      key={index}
      className="relative pl-20 mb-12 last:mb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      {/* Icon */}
      <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary flex items-center justify-center">
        <item.icon className="h-8 w-8 text-primary" />
      </div>

      {/* Content Card */}
      <GlassCard>
        <p className="text-xs font-mono text-primary mb-2">{item.year}</p>
        <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
        <p className="text-sm text-white leading-relaxed keep-all">
          {item.description}
        </p>
      </GlassCard>
    </motion.div>
  ))}
</div>
```

### 5. 인용문 카드

```tsx
<GlassCard className="relative overflow-hidden group">
  {/* Quote Mark Background */}
  <div className="absolute -top-6 -left-4 text-9xl font-serif text-primary/5 select-none">
    "
  </div>

  <div className="relative z-10">
    {/* Context */}
    <p className="text-xs text-white mb-6 font-mono border-b border-white/5 pb-4">
      발언 맥락
    </p>

    {/* Quote */}
    <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-6 pl-5 border-l-2 border-primary keep-all">
      "{인용문 내용}"
    </blockquote>

    {/* Speaker */}
    <p className="text-sm text-primary mb-6 font-medium">
      — 발언자
    </p>

    {/* Significance */}
    <div className="pt-4 border-t border-white/10 bg-white/[0.02] -mx-6 -mb-6 px-6 py-4">
      <p className="text-sm text-white flex items-start gap-2">
        <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
        <span className="keep-all">
          <span className="text-white font-mono text-xs mr-2">해석:</span>
          의미 설명
        </span>
      </p>
    </div>
  </div>
</GlassCard>
```

### 6. 관계도 (SVG)

```tsx
<GlassCard className="p-8 md:p-12">
  {/* Title */}
  <h2 className="text-2xl font-bold text-white mb-12 text-center">
    관계도 제목
  </h2>

  <div className="relative min-h-[400px]">
    {/* Center Node */}
    <div className="absolute left-1/2 top-0 -translate-x-1/2">
      <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-4">
          <Icon className="h-10 w-10 text-primary" />
        </div>
        <p className="font-bold text-white">노드 이름</p>
      </motion.div>
    </div>

    {/* SVG Connections */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(0, 255, 255)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="rgb(0, 255, 255)" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <line x1="50%" y1="100" x2="20%" y2="300" stroke="url(#lineGradient)" strokeWidth="2" />
    </svg>

    {/* Other Nodes */}
    {/* ... */}
  </div>

  {/* Connection Labels */}
  <div className="mt-12 grid md:grid-cols-3 gap-4">
    <GlassCard className="text-center p-4">
      <p className="text-primary font-mono text-xs mb-2">A ↔ B</p>
      <p className="text-white text-sm">관계 설명</p>
    </GlassCard>
  </div>
</GlassCard>
```

## 애니메이션 패턴

### Framer Motion Variants

```tsx
// Stagger Children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// Scroll Progress
const { scrollYProgress } = useScroll()
const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
const y = useTransform(scrollYProgress, [0, 0.2], [0, 50])

// Progress Bar
<motion.div
  style={{ scaleX: scrollYProgress }}
  className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
/>
```

### Timing

```tsx
// 기본
transition={{ duration: 0.5 }}

// Delay
transition={{ duration: 0.5, delay: 0.2 }}

// Spring
transition={{ type: "spring", stiffness: 300 }}

// Stagger
transition={{ staggerChildren: 0.1 }}
```

## 아이콘 시스템

```tsx
import {
  Eye,           // 탐사/조사
  AlertTriangle, // 경고/의문
  Calendar,      // 날짜/타임라인
  MapPin,        // 위치
  Users,         // 인물/그룹
  Building,      // 건물/조직
  FileText,      // 문서/증거
  Quote,         // 인용
  ChevronRight,  // 화살표/진행
  ArrowLeft,     // 뒤로가기
  ExternalLink,  // 외부링크
  Church,        // 종교
  Landmark,      // 정부
  UserCheck,     // 인물
  MessageSquareWarning // 분석/논평
} from "lucide-react"
```

## 네비게이션

### Back Button

```tsx
<Link
  href="/"
  className="inline-flex items-center gap-2 text-sm text-white hover:text-primary transition-colors mb-8 group"
>
  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
  메인으로 돌아가기
</Link>
```

### Related Article

```tsx
<Link href="/news/related-article" className="group">
  <GlassCard className="hover:border-primary/50 transition-all">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs text-primary font-mono mb-1">날짜</p>
        <p className="font-bold text-white group-hover:text-primary transition-colors">
          기사 제목
        </p>
      </div>
      <ChevronRight className="h-5 w-5 text-white group-hover:text-primary group-hover:translate-x-1 transition-all" />
    </div>
  </GlassCard>
</Link>
```

## 반응형 디자인

```tsx
// 모바일 우선
className="text-sm md:text-base lg:text-lg"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="px-4 md:px-6 lg:px-8"

// 조건부 렌더링
<br className="md:hidden" />  // 모바일에만 줄바꿈

// 레이아웃 변경
className="flex flex-col md:flex-row"
className="w-full md:w-1/2"
```

## 접근성

```tsx
// ARIA
aria-label="설명"
role="navigation"

// 키보드 네비게이션
tabIndex={0}
onKeyDown={handleKeyDown}

// 포커스 표시
focus:outline-none focus:ring-2 focus:ring-primary

// 이미지 대체 텍스트
<img alt="상세 설명" />
```

## 성능 최적화

```tsx
// 동적 import
const HeroScene = dynamic(() => import('@/components/3d/hero-scene'), {
  ssr: false
})

// Image 최적화
import Image from 'next/image'
<Image
  src="/image.jpg"
  alt="설명"
  width={800}
  height={600}
  loading="lazy"
/>

// Lazy motion
import { LazyMotion, domAnimation, m } from 'framer-motion'
```

## 메타데이터 (SEO)

```tsx
export const metadata = {
  title: "기사 제목 | Viewse",
  description: "기사 요약",
  openGraph: {
    title: "기사 제목",
    description: "기사 요약",
    type: "article",
    publishedTime: "2025-12-26T18:00:00Z",
    authors: ["전혁수"],
  }
}
```

## 코드 구조

```
app/
  news/
    [slug]/
      page.tsx         # 기사 페이지
      layout.tsx       # 레이아웃 (선택)
components/
  ui/
    glass-card.tsx     # 재사용 컴포넌트
  3d/
    hero-scene.tsx     # 3D 배경
```

## 데이터 구조 예시

```tsx
const TIMELINE_DATA = [
  {
    year: "2025",
    title: "제목",
    description: "설명",
    icon: Calendar,
    highlight: false
  }
]

const ALLEGATIONS = [
  {
    title: "상위 레이블",
    subtitle: "제목",
    description: "설명",
    evidence: "증거",
    icon: FileText
  }
]
```
