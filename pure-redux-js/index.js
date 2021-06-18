import { createStore } from 'redux';

console.log("hello parcel")

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션 타입
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

// 액션 생성 함수 정의
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초기값 설정
const initialState = {
  toggle: false,
  counter: 0
};

// 리듀서 함수 정의
function reducer(state = initialState, action) {
  // action.type에 따라 다른 작업을 처리함
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state;
  }
}

// 스토어 만들기
const store = createStore(reducer);

// render 함수 만들기
const render = () => {
  const state = store.getState();

  // 토글처리
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }

  // 카운터 처리
  counter.innerText = state.counter;
};

render();

store.subscribe(render);

// 액션 발생시키기 -> 액션 발생은 디스패치를 사용한다. 스토어 내장함수 dispatch를 사용한다.
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
