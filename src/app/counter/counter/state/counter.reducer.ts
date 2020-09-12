import { createReducer, on } from '@ngrx/store';
import * as CounterActions from "./counter.action";

export interface CounterState {
    count: number | 0,
}

const initialState = {
    count: 0,
}

export const counterReducer = createReducer<CounterState>(
    initialState,
    on(CounterActions.setCount, (state, { count }) => {
        return {
            ...state,
            count
        }
    }),
);
