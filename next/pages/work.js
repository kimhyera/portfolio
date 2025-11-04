import Head from 'next/head'

export default function Work() {
  return (
    <main className="container">
      <Head>
        <title>Work | 김혜라 포트폴리오</title>
        <meta name="description" content="프로젝트 사례와 작업물 리스트. 역할과 기여 내용을 정리합니다." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Work - 포트폴리오" />
        <meta property="og:description" content="다양한 산업의 UI/프론트엔드 퍼블리싱 사례." />
        <meta property="og:locale" content="ko_KR" />
      </Head>
      <div className="card">
        <h1>Work</h1>
        <p>포트폴리오 리스트 영역입니다. 기존 리스트/그리드를 이관하여 구성할 수 있습니다.</p>
      </div>
    </main>
  )
}


