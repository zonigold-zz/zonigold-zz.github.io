# Zion Kim — 개인 홈페이지

GitHub Pages의 기본 Jekyll 빌드로 동작합니다. 별도 API 키, Notion 연동, 유료 서비스는 필요하지 않습니다.

## 평소 내용 수정
1. GitHub 저장소에서 `_data/profile.yml`을 엽니다.
2. 연필(Edit) 버튼을 누릅니다.
3. 원하는 내용만 수정하고 **Commit changes**로 저장합니다.
4. Pages 배포가 성공한 뒤 홈페이지를 새로고침합니다. 반영에는 몇 분이 걸릴 수 있습니다.

주요 항목:
- `person`: 이름, 과정, 소개와 사진 경로
- `research`: 연구 관심사
- `publications`: 논문 목록
- `background`: 학력, 연구·산업 경력, 교육, 멘토링, 리더십
- `contact`: 공개 이메일과 링크

경력이나 논문을 추가하려면 같은 종류의 기존 항목을 복사하고 내용과 날짜를 바꾸세요. 공백 들여쓰기를 유지하고 탭은 쓰지 마세요. `dates`의 여러 기간은 별도 항목으로 유지하세요. 문장에 콜론이 있으면 따옴표로 감싸는 것이 안전합니다. 모든 내용은 공개됩니다.

## 사진과 디자인
- 사진: `assets/zion-kim.jpg`를 교체하거나 `person.portrait` 경로를 수정합니다.
- 색상·간격·글꼴: `styles.css`
- 페이지 구조: `index.html`, `_layouts/default.html`
- 검색 노출: `_data/profile.yml`의 `meta.allow_search_indexing`을 `true`로 변경합니다. 현재는 검토용으로 `false`입니다. 이는 접근 제한이나 비공개 설정이 아닙니다.

## 최초 배포
1. `zonigold-zz.github.io`라는 공개 저장소를 만들고 이 폴더의 파일을 최상위에 업로드합니다. `_data`, `_layouts`, `assets` 폴더도 포함합니다.
2. Settings → Pages → Build and deployment에서 **Deploy from a branch**, **main**, **/(root)**를 선택하고 저장합니다.
3. Actions에서 Pages 빌드 성공을 확인합니다.
4. GitHub가 표시하는 사이트 주소를 열어 내용·사진·링크를 확인합니다.

`.nojekyll` 파일을 추가하면 템플릿 처리가 꺼지므로 추가하지 마세요. 이 소스의 `index.html`을 직접 더블클릭하면 완성 페이지가 아닌 템플릿이 표시됩니다. 별도 정적 미리보기 ZIP을 사용하세요.

## 오류와 되돌리기
배포가 실패하면 Actions 로그에서 YAML 들여쓰기·따옴표 오류를 확인합니다. 변경 이력은 GitHub에 남으므로 이전 내용을 복구할 수 있습니다. 비밀번호나 API 키를 저장소에 넣지 마세요.
