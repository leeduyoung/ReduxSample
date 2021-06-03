import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * 리덕스 더 편하게 사용하기
 *
 * redux-actions, immer 라이브러리를 사용하여 리덕스를 편하게 사용해보자
 */

// 스토어 생성
const store = createStore(rootReducer, composeWithDevTools());

// 리액트 프로젝트에 리덕스 적용
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
