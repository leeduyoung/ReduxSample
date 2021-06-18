import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { CounterIState, increase, decrease } from '../modules/counter';

interface IState {
  counter: CounterIState;
}

function CounterContainer() {
  const number = useSelector<IState, number>((state) => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default React.memo(CounterContainer);
