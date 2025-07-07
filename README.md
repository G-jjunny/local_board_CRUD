# 📝 LocalStorage 기반 커뮤니티 게시판 앱

Next.js와 React, Zustand, localStorage를 활용한 커뮤니티 게시판 과제입니다.  
게시글/댓글 작성, 삭제, 검색 기능을 지원하며, 새로고침 시에도 데이터가 유지됩니다.

---

## ✅ 기술 스택

- **Next.js 13+** (App Router, Client Component 기반)
- **React**
- **Zustand** – 상태 관리 및 localStorage 연동
- **Zod + React Hook Form** – 폼 검증
- **Tailwind CSS** – 유틸리티 기반 스타일링
- **shadcn/ui** – UI 컴포넌트 라이브러리
- **TypeScript**

---

## 📁 프로젝트 구조

### 아키텍처: FSD (Feature-Sliced Design)

FSD 아키텍처 기반으로 구성되었습니다. 프론트엔드 프로젝트에서 관심사의 분리(Separation of Concern) 와 기능 중심의 모듈화(Modularization) 를 돕는 구조입니다. FSD는 애플리케이션을 기능 단위로 분할하고, 각 기능을 독립적으로 개발, 테스트, 유지보수할 수 있도록 하는 것을 목표로 합니다.

```bash
src/
├── app/                      ## (FSD) App layer 라우팅, 전역 스타일 등
│   ├── page.tsx               # 메인 페이지 (게시글 목록)
│   ├── write/page.tsx         # 게시글 작성 페이지
│   ├── post/[id]/page.tsx     # 게시글 상세 페이지
│   └── ClientInit.tsx         # zustand 상태 초기화
│
├── views/                    ## (FSD) Pages layer(views로 변경)
│   ├── home                   # 각 페이지를 담당하는 UI
│   ├── post                   # 해당레이어의 각 slice
│   └── write
│
├── features/                 ## (FSD) features layer 핵심 및 구체적인 인터렉션 단위
│   ├── home/
│   ├── post/
│   └── write/
│       ├── ui/                # UI 컴포넌트
│       └── model/             # 타입, Zod 스키마, 상태 등
│
└── shared/                    # 전역에서 재사용 가능한 UI 컴포넌트, API, 상수, 유틸
    ├── store/postStore.ts     # Zustand 상태 및 localStorage 연동
    └── ui/                    # 커스텀 Input/Textarea/Form 등
```

---

## ▶️ 실행 방법

```bash

# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev

# 3. 브라우저에서 열기
http://localhost:3000

```

## 📌 주요 기능 설명

### 🏠 1. 게시글 목록 페이지 (`/`)

- 제목만 표시된 게시글 리스트를 보여줍니다.
- 최신순 정렬이 적용되어 최근 작성된 게시글이 상단에 나타납니다.
- `localStorage`에 저장된 데이터를 Zustand로 불러와 렌더링합니다.

---

### 📝 2. 게시글 작성 페이지 (`/write`)

- 제목 + 내용을 입력받아 새 게시글을 추가할 수 있습니다.
- `React Hook Form`과 `Zod`를 활용한 입력 유효성 검사가 적용되어 있습니다.
- 게시글은 UUID를 통해 고유하게 식별되며, `localStorage`에 저장됩니다.
- 작성 완료 시 메인 페이지로 이동됩니다.

---

### 📄 3. 게시글 상세 페이지 (`/posts/:id`)

- 게시글의 전체 내용을 볼 수 있습니다.
- 삭제 버튼을 통해 해당 게시글을 삭제하고 메인 페이지로 이동할 수 있습니다.
- 존재하지 않는 게시글 ID 접근 시 "존재하지 않는 게시글입니다" 메시지를 표시합니다.

---

### 💬 4. 댓글 기능

- 게시글 상세 페이지에서 댓글을 작성할 수 있습니다.
- 댓글은 해당 게시글에 종속된 형태로 상태에 저장되며, 새로고침해도 유지됩니다.
- 댓글 작성 시간도 함께 출력됩니다.

---

### 🔍 5. 게시글 검색 기능

- 메인 페이지 상단에서 게시글 제목을 기준으로 실시간 검색 필터링이 가능합니다.
- 검색어 입력 시 해당 문자열이 포함된 게시글만 목록에 표시됩니다.

---

### 🧠 상태 관리 및 데이터 저장

- 모든 게시글과 댓글 데이터는 `zustand` 상태에서 관리됩니다.
- 상태 초기화 시 `localStorage`로부터 데이터를 불러오며, 상태 변경 시 다시 저장합니다.
- 서버/API 없이 **완전 클라이언트 사이드 렌더링(CSR)**으로 구현되어 있습니다.
