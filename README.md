# ReduxSample

## Outline
다양한 방식으로 리덕스를 사용해보며 익힌다.

리덕스의 핵심은
- 스토어를 만들고 그 안에 저장된 state를 관리하는 것

리덕스를 쓰면 좋은 이유?
- 여러 컴포넌트에서 사용되는 값은 하나의 컴포넌트에서 값이 변경 되었을때 모든 컴포넌트의 값이 수정되어야 한다.
- 이때 리덕스를 사용하면 store에 저장 된 state 값만 변경하면 된다.
- 또한, 컴포넌트간의 의존성을 낮출 수 있다.

![리덕스](https://user-images.githubusercontent.com/10377728/122517943-94a68e00-d04b-11eb-9026-dc4f2114788a.png)

1)pure-redux-js
- 순수 Javascript에서 redux를 사용한 프로젝트

2)react-redux-js
- CRA로 생성한 리액트 프로젝트에서 redux를 사용한 프로젝트

3)react-redux-hook-js
- CRA로 생성한 리액트 프로젝트에서 hook을 사용하여 redux를 더 쉽고 간단하게 사용한 프로젝트

4)react-redux-hook-ts
- CRA로 생성한 typescript 기반의 리액트 프로젝트에서 hook을 사용하여 redux를 더 쉽고 간단하게 사용한 프로젝트

5)react-redux-middleware-js
- CRA로 생성한 리액트 프로젝트에서 redux, redux-thunk를 사용한 프로젝트


## Installation
이 프로젝트를 빌드하기 위해서는 NodeJS가 설치되어 있어야 한다.

```bash
# Install Dependencies
yarn install
```

이 프로젝트를 빌드하고, 실행하려거든 아래 커맨드를 수행하면 된다.

```bash
yarn build # Compile
yarn start # Execute
```
