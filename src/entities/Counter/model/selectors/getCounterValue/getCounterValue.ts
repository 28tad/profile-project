import { createSelector } from 'reselect';
import { CounterSchema } from '../../types/counterScema';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
