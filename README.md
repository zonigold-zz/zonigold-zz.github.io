# Zion Kim — Signal / Possibility

KAIST 연구자 Zion Kim의 개인 홈페이지. GitHub Pages 기본 Jekyll 빌드를 그대로 사용하며 외부 폰트, 패키지 설치, API 키가 필요하지 않습니다.

## 내용 수정

공개 프로필 정보는 `_data/profile.yml` 한 곳에서 관리합니다. 기존 학력, 경력, 논문, 이메일, 사진과 검색 노출 설정을 유지했습니다.

- `person`: 이름, 과정, 소개, 사진
- `affiliation`: 연구실, 지도교수, 소속
- `research.themes`: 펼쳐 볼 수 있는 연구 관심사
- `publications`: 논문과 인용 복사에 사용하는 서지 정보
- `background`: 학력, 연구·산업 경력, 교육, 멘토링, 리더십, 학술 활동
- `contact`: 공개 이메일과 외부 링크

항목을 추가할 때는 기존 항목을 복사하고 공백 2칸 들여쓰기를 유지하세요. `dates`의 여러 활동 기간은 각각 별도 항목으로 작성합니다. 리더십 항목은 ‘Beyond the lab’에도 표시됩니다. 공개할 수 있는 정보만 적어 주세요.

## 디자인과 기능

- `index.html`: 소개, 연구, 논문, 경력, 연구실 밖의 모습, 연락처
- `_layouts/default.html`: 내비게이션과 공통 메타 정보
- `styles.css`: 화면 크기별 디자인, 다크/라이트 테마, 인쇄 레이아웃
- `assets/site.js`: 테마 저장, 모바일 메뉴, 인용 복사, 경력 링크 펼치기, 인쇄
- `assets/neural-field.svg`: 실제 측정 EEG가 아닌 수학적 개념 일러스트
- `assets/zion-kim.jpg`: 기존 공개 프로필 사진

상단의 원형 버튼으로 테마를 전환합니다. 연구 주제와 경력은 클릭 또는 키보드 Enter/Space로 펼칩니다. 논문의 Copy citation 버튼은 일반 텍스트 인용을 복사하며 복사가 제한된 환경에서는 선택 가능한 인용문을 표시합니다. Download CV는 현재 홈페이지 정보로 작성한 실제 2쪽 PDF를 내려받습니다. Print this page는 별도로 홈페이지 인쇄 창을 엽니다.

자바스크립트를 사용하지 않아도 본문, 링크, 펼침 항목을 볼 수 있습니다. 움직임 최소화 설정을 존중하며 폰트·분석 도구·방문자 추적 서비스를 외부에서 불러오지 않습니다.

## 미리보기와 반영

`zion-profile-preview` 폴더의 `index.html`은 완성된 정적 미리보기입니다. 같은 폴더의 `styles.css`와 `assets`도 함께 유지하세요. 테마와 펼침 기능은 파일을 직접 열어도 동작하고 인용 복사는 브라우저 제한에 따라 선택 방식으로 대체됩니다.

운영 저장소에는 이 `zion-profile-source` 폴더의 내용만 반영합니다. `_data`, `_layouts`, `assets`를 포함하며 기존 같은 이름의 파일은 교체합니다. `index.html`은 Jekyll 템플릿이므로 소스 파일을 직접 열면 완성된 화면이 표시되지 않습니다.

기존 Settings → Pages → Deploy from a branch → main → /(root) 설정을 유지하세요. `.nojekyll` 파일을 추가하지 마세요. 배포 후 GitHub Actions의 Jekyll 빌드와 Pages 반영을 확인합니다.

현재 `meta.allow_search_indexing: false` 설정을 유지하여 검색 수집을 요청하지 않습니다. 이는 사이트 접근을 제한하거나 비공개로 만드는 설정은 아닙니다.

## CV와 학술 링크

상단 메뉴, 첫 화면, Background에서 CV PDF를 다운로드할 수 있습니다. 파일은 assets/Zion-Kim-CV.pdf이며 2026-11-16 기준으로 생성되었습니다. 프로필 정보를 변경하면 PDF도 새로 생성하여 교체하세요. 인쇄 버튼과 다운로드 버튼은 별도 기능입니다.

Google Scholar는 KAIST 뇌인지과학과 소속과 기존 EEG 논문을 대조하여 확인한 본인 프로필(Ye0M9fIAAAAJ)로 연결됩니다.

2025 공동학술대회 논문은 학회 공식 자료집의 311-313쪽에서 제목, 저자 순서, KAIST 소속을 확인했습니다. 국문 제목과 원문에 기재된 영문 제목을 함께 표시하며, 학술대회 논문으로 구분합니다. 전체 발표논문집은 학회 원문으로 연결하고 저장소에 복제하지 않습니다.
