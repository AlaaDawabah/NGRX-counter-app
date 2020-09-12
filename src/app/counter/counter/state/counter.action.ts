import { createAction, props } from '@ngrx/store';

export const setCount = createAction('[Counter] Set Count',
    props<{ count: number }>()
);