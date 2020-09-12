import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

const getShowCounterState = createFeatureSelector<CounterState>('counter');
export const getCount = createSelector(getShowCounterState, state => state.count);