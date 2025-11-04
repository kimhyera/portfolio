# Next.js Migration Skeleton

이 폴더는 기존 CRA 프로젝트를 Next.js로 점진 마이그레이션하기 위한 스켈레톤입니다.

## 실행

1) 의존성 설치

```
cd next
npm i
```

2) 개발 서버
```
npm run dev
```

3) 프로덕션 빌드
```
npm run build && npm start
```

## 포함된 페이지
- `/` 홈 (네비게이션)
- `/diet-diary` 식단 일지 (로컬스토리지 저장)

## 다음 단계 권장
- 기존 `views/html/page/main/*` 페이지를 Next.js의 `pages/`로 이관
- 이미지/폰트 `public/` 이동 및 경로 정리
- 스타일(SCSS) 통합 또는 CSS Module 변환
- 배포(Vercel 권장) 설정


