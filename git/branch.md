# git branch

## 브랜치 명령어

### `git branch`
- git 프로젝트의 브랜치 목록 출력

### `git branh <브랜치 명>`
- 새로운 브랜치 생성
- 작업 공간을 생성

### `git switch <브랜치 명>`
- 브랜치 전환
- 작업 공간을 바꾸다

## 서브(기능) 브랜치 워크 플로우
1. 브랜치 생성 `git branch <브랜치명>`
2. 브랜치 전환 `git switch <브랜치명>`
3. 작업
4. `git add`
5. `git cimmit -m "커밋 메세지"`
6. 브랜치 전환 `git switch main`
7. 브랜치 병합 `git merge <브랜치명>`
8. (선택) 브랜치 삭제 `git branch -d <브랜치명>`
  - 추후 문제 발생 가능성: 동ㅇ리한 브랜치명을 사용 못함