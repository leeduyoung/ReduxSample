# 리덕스 미들웨어를 통한 비동기 작업 관리
리액트 리덕스 프로젝트에서 비동기 작업을 관리해야한다면, 미들웨어를 잘 사용하여 효율적이고 편하게 상태 관리를 할 수 있다.

## 작업 환경 준비
프로젝트 생성
`yarn create react-app redux-middleware`

사용 라이브러리
`yarn add redux react-redux redux-actions`
`yarn add redux-logger`
`yarn add redux-thunk`
`yarn add axios`

## 미들웨어 사용하기
