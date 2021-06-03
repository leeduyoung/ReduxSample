// 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부른다.

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// CASE 1
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// CASE 2
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   }),
// )(CounterContainer);

// CASE 3
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => bindActionCreators({ increase, decrease }, dispatch),
// )(CounterContainer);

// CASE 4
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);

/**
 * connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
 *
 * mapStateToProps
 * : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
 *
 * mapDispatchToProps
 * : 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
 *
 * connect 함수를 호출하면 또 다른 함수를 반환한다. 반환된 함수에 컴포넌트를 파라미터로 넣어주면
 * 리덕스와 연동된 컴포넌트가 만들어진다.
 */
