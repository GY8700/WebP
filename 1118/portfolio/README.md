# Myfolio — 개인 포트폴리오 웹사이트

웹프로그래밍 수업 제출용으로 제작한 **밝고 미니멀한 원페이지 개인 포트폴리오**입니다. 진행 중인 프로젝트 소개는 포함하지 않았습니다.

## 빠른 실행

1. 압축을 풀고 `index.html`을 크롬/엣지에서 더블클릭하여 엽니다.
2. 개발할 때는 VS Code의 Live Server 확장 기능을 사용해도 됩니다.
3. 별도 서버, npm, 패키지 설치, 계정 가입은 필요 없습니다.

## 실제 제출 전 반드시 수정

- `index.html`: 메인 문구, About Me, Skills, Interests, Journey를 **본인에 맞게** 수정합니다. 현재 문장은 예시입니다.
- `js/main.js` 최상단 `PROFILE.email`에 실제 연락용 이메일을 입력합니다.
- `js/main.js` 최상단 `PROFILE.github`에 본인 GitHub 주소를 입력합니다. GitHub가 없다면 해당 버튼을 HTML에서 제거해도 됩니다.
- `css/style.css`의 `:root` 안 색상 변수를 바꾸면 전체 테마를 수정할 수 있습니다.
- 현재 **연락처는 예시값**이므로 이메일 복사와 GitHub 프로필 열기 기능이 실제 연락처를 설정할 때까지 안내 메시지를 표시합니다.

## 구성

```
portfolio-website/
├── index.html       # 모든 페이지 섹션
├── css/
│   └── style.css    # 밝은 디자인, 다크 모드, 반응형
├── js/
│   └── main.js      # 메뉴, 필터, 테마, 스크롤, 복사 기능
└── README.md
```

## 구현된 기능

- 시맨틱 HTML5 구조 및 접근성: 본문 바로가기, 키보드 포커스, ARIA 속성, 상태 알림
- CSS Grid/Flexbox와 미디어 쿼리를 이용한 모바일/태블릿/PC 대응
- 섹션 앵커 이동과 현재 메뉴 자동 강조
- 다크/라이트 테마 전환 및 로컬 저장
- 모바일 메뉴 토글 및 자동 닫기
- 기술 스택 4종 필터(전체 / Frontend / Programming / Tools)
- IntersectionObserver를 이용한 스크롤 등장 효과 (모션 감소 선호 존중)
- 스크롤 진행 표시
- 이메일 클립보드 복사와 오류 처리
- 현재 연도 자동 출력

## GitHub Pages에 배포하기

1. GitHub에 새 저장소를 생성합니다.
2. `index.html`, `css/`, `js/`, `README.md`를 저장소 **최상위 경로**에 업로드합니다.
3. 저장소 `Settings → Pages → Build and deployment`에서 `Deploy from a branch`를 선택합니다.
4. 브랜치 `main`, 폴더 `/(root)`를 선택 후 저장합니다.
5. GitHub Pages에서 알려주는 웹사이트 URL로 접속합니다.

## 과제 발표 포인트

- HTML: Header / Nav / Main / Section / Article / Footer와 앵커 연결
- CSS: 사용자 정의 변수, 다크 모드, Grid/Flex, 반응형 미디어 쿼리, hover
- JS: DOM 조작(`querySelector`, `classList`, `dataset`), 이벤트 리스너, `IntersectionObserver`, `localStorage`, 클립보드 API

## 참고

- 폰트/아이콘 라이브러리, 외부 이미지, 외부 CDN을 사용하지 않습니다.
- 이미지 없이도 모든 화면이 정상 표시되도록 만든 정적 웹사이트입니다.
- 이 사이트는 본인 맞춤 콘텐츠로 수정하여 제출해야 합니다.
