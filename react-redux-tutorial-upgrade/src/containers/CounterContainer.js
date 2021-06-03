// 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부른다.

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  /**
   * useSelector Hook을 사용하여 connect 함수를 사용하지 않고도 리덕스의 상태를 조회할 수 있다.
   */
  const number = useSelector((state) => state.counter.number);

  /**
   * useDispatch Hook을 사용하여 컴포넌트 내부에서 스토어의 내장함수 dispatch를 사용할 수 있다.
   */
  const dispatch = useDispatch();

  // 성능 최적화
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

/**
 * connect 함수를 사용할 경우 컨테이너의 props의 변경이 없을 경우 리렌더링을 자동으로 방지하여 성능이 최적화 되지만,
 * useSelector를 사용하여 리덕스 상태를 조회했을때는 매번 다시 렌더링하기때문에 React.memo를 사용하여 최적화해주어야한다.
 */
export default React.memo(CounterContainer);
