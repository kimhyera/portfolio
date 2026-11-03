# 리뉴얼 SCSS 관리

`Portfolio.js`는 `styles.scss`만 가져옵니다. 이 진입점에서 공통 스타일,
레이아웃과 섹션, 캡처 전용 스타일 순으로 각 모듈을 한 번씩 로드합니다.

- `_tokens.scss`: CSS를 출력하지 않는 공통 색상 변수
- `base.scss`: 리셋, 기본 타이포그래피, 페이지 레이아웃
- `components.scss`: 공통 버튼, 태그, 상태 표시
- `headings.scss`, `motion.scss`: 섹션 제목과 공통 등장 모션
- `header.scss`, `mobile-menu.scss`: 헤더, 내비게이션, 상단 이동 버튼
- `hero.scss`, `services.scss`, `work.scss`, `build.scss`, `process.scss`, `contact.scss`: 각 섹션. 푸터는 `contact.scss`에서 관리
- `dialog.scss`: 프로젝트 상세와 문의 모달
- `capture.scss`: 전체 화면 캡처 전용 표시

새 규칙과 반응형 수정은 해당 요소를 담당하는 파일에 작성합니다.
1024px 이하의 내비게이션 전환은 `header.scss`에서 관리합니다.
색상 변수가 필요한 파일만 `@use 'tokens'`로 불러오고 `tokens.$purple`처럼 사용합니다.

반응형 규칙은 기존 디자인의 적용 순서를 유지합니다. 미디어 쿼리나
동일 선택자의 위치를 바꾸면 우선순위가 달라질 수 있으므로, 뒤에 임시
덮어쓰기 파일을 추가하기보다 담당 파일의 기존 규칙을 먼저 수정합니다.
구형 서브 페이지의 `src/views/html/assets/scss`는 별도로 유지합니다.
