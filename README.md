# 디스코드 내전 봇

친선전을 위해 팀원을 무작위로 나누고 팀장을 선택할 수 있는 디스코드 봇입니다.

## 기능

- 10명의 팀원을 무작위로 두 팀(5 대 5)으로 나누기
- 10명의 팀원 중 무작위로 두 명의 팀장 선택
- 봇 사용법 설명

## 준비물

- Node.js
- 디스코드 계정 및 봇 토큰

## 설정

1. **저장소 클론**:
    ```sh
    git clone <repository-url>
    cd discord_civilwar
    ```

2. **의존성 설치**:
    ```sh
    npm install
    ```

3. **`.env` 파일 생성**: 프로젝트 루트 디렉터리에 `.env` 파일을 생성하고 디스코드 봇 토큰을 추가합니다:
    ```env
    DISCORD_TOKEN=your-discord-bot-token
    ```

4. **`Procfile` 파일 생성**: 프로젝트 루트 디렉터리에 `Procfile` 파일을 생성하고 다음 내용을 추가합니다:
    ```txt
    worker: node index.js
    ```

## 로컬에서 봇 실행

다음 명령어로 로컬에서 봇을 시작할 수 있습니다:
```sh
node index.js
