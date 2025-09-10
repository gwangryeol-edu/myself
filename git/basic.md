# 깃 개념

![깃](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2aRJR6dWUGsjhkUzKkGp-3787npBEJcJblg&s)

## 스냅샷
- 마치 폴라로이드 카메라로 풍경을 기록하듯이 파일의 상태를 기록하는 시스템
- 한 번 기록하면 변경할 수 없다.

## git의 3가지 영역
- 작업 트리(Workint Tree): 
    -  컴퓨터에서 직접 보고 작업하는 프로젝트 폴더 그 자체
    - 파일을 수정하고, 생성하고, 삭제하는 모든 활동이 일어나는 공간
- 스테이징 영역(Staging Area):
    - 곧 커밋할 후보들을 올려두는 가상의 공간
    - **Index** 라고 불림
- 저장소(Local Repository):
    - 프로젝트의 모든 변경 이력(커밋)이 영구적으로 저장되는 곳

## 파일의 3가지 상태
- 수정(Modified): 
    - 작업 디렉토리에서 파일을 수정되었지만, 아직 스테이징 영역에는 초가되지 않은 상태
- 스테이징(Staged): 
    - 수정된 파일을 다음  커밋에 포함시키기 위해 스테이징 영역에 추가한 상태
    - 곧 커밋될 준비가 되어있음
- 커밋(Committed): 
    - 스테이징 영역에 있던 파일들을 `git commit` 명령어를 통해 로컬 레퍼지토리에 안전하게 저장한 상태
    -  해당 버전의 **스냅샷**이 생성된 것
        
        스냅샷(Snapshot): 게임의 **Save Point**. 프로젝트에 포함된 모든 파일의 모습을 사진 찍듯이 그대로 저장하는 것을 의미

# 깃 명령어
`git init`

`ls -a`
## 변경된 파일을 스테이징 영역으로 이동하는 명령어
`git add <파일명>`

`git add .` 오타 생성
## 스테이징 영역에 있는 파일을 기록(커밋)하는 명령어
`git commit`
- COMMIT_EDITMSG: 커밋 올리기 전에 메세지를 남길 수 있는 페이지
- 메세지를 남기고 저장 후 (저장 후)페이지 닫기

`git commit -m "커밋 메세지"`

## 현재 파일 상태를 출력하는 명령어

`git status`

`git diff`

`git log`

# Git GUI
Git을 커맨드 라인(CLI)이 아닌 그래픽 사용자 인터페이스(GUI)로 편하게 사용할 수 있게 해주는 도구들
1. souce control
- Changes
    - 작업 트리 영역
- Staged Changes
    - 스테이징 영역
2. Message 남기고 Commit
3. 확장 프로그램 "Git Gragh" 설치
- souce control에서 그래프로 확인 가능

# .gitignore
- git으로 관리하면 안되는 파일, 폴더를 관리
## 사용법
1. 가장 큰 파일에 `.gitignore`ge 파일 생성
2. git으로 관리하고 싶지 않은 파일, 폴더 작성
    - 파일: 파일명 작성(ex.secret)
    - 폴더: 폴더 경로 작성(ex.secret_folder/)
## 주의사항
- `.gitignore`는 Git이 파일을 추적하기 전에만 유효 
- 이미 한 번이라도 커밋된 파일은 `.gitignore`에 추가해도 계속해서 변경 사항을 추적
- [gitignore.io](https://www.toptal.com/developers/gitignore/)사이트를 활용하면 사용하는 운영체제, 언어, 프레임워크에 맞는 보편적인 `.gitignore` 파일을 쉽게 생성 가능