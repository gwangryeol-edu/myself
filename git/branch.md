# Git 프로젝트 초기화 실습

## 개요

git 프로젝트를 초기화하고 파일의 변경사항을 저장하는 실습
1. 브랜치 생성
2. 브랜치 전환
3. 작업
4. git add . 
5. git commit -m "메세지"

git hub에서 pr(Pull Request) 열기
- 원격저장소 열기
1. 원격 저장소(fork) 또는 협업 저장소에서 branch 생성
  # main 브랜치로 이동
  git checkout main

  # 최신 상태로 업데이트
  git pull origin main

  # 새 브랜치 생성 (예: feature/login)
  git checkout -b feature/login

    # 코드 수정 후
  git add .

  # 커밋 메시지 작성
  git commit -m "Add login page and user authentication logic"

2. 코드 수정 및 커밋(push)
  - git push origin feature/login

3. GitHub에서 Pull Request 생성
	1.	GitHub 저장소로 이동
	2.	상단에 “Compare & pull request” 버튼 클릭
  → 자동으로 “내 브랜치 → main” 비교 화면이 뜹니다.
	3.	PR 제목과 설명(comment) 작성
	•	제목: [Feature] 로그인 기능 추가
	•	설명: 어떤 변경을 했는지 간단히 작성
	4.	리뷰어, 라벨, 프로젝트 등 지정
	5.	“Create pull request” 클릭

4. 리뷰어가 코드 검토

5. 승인되면 Merge
  - git branch -d feature/login
  - git push origin --delete feature/login

6. (로컬)main 브랜치로 이동
  - git switch main

7. (로컬)최신 상태로 업데이트
  - git pull origin main