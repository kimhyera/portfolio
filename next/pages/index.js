import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <Head>
        <title>김혜라 포트폴리오 | Next.js</title>
        <meta name="description" content="웹 퍼블리셔/프론트엔드 포트폴리오. 접근성 중심 UI, 인터랙션, React/Vue 경험." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="김혜라 포트폴리오" />
        <meta property="og:description" content="접근성과 사용성을 고려한 UI, 200+ 프로젝트 경험." />
        <meta property="og:image" content="/img/og_img.png" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav className="nav">
        <Link href="/diet-diary">식단 일지</Link>
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
      </nav>
      <div className="card">
      </div>
    </main>
  )
}


