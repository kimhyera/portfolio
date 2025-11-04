import Head from 'next/head'

export default function About() {
  return (
    <main className="container">
      <Head>
        <title>About | 김혜라 포트폴리오</title>
        <meta name="description" content="10년 경력 웹 퍼블리셔/프론트엔드, 접근성과 사용성 중심 UI 구현." />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="About - 김혜라" />
        <meta property="og:description" content="디자인 시스템과 협업 중심 퍼블리싱 경험." />
        <meta property="og:locale" content="ko_KR" />
      </Head>
      <div className="card">
        <h1>About</h1>
        <p>경력, 철학, 강점 등을 소개하는 페이지입니다. 기존 콘텐츠를 이관해 확장할 수 있습니다.</p>
      </div>
    </main>
  )
}


