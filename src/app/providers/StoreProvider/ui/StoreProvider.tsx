import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderPros {
    children?: ReactNode;
    initialState?: StateSchema
    asyncReducers?: DeepPartial<ReducersMapObject>
}

export const StoreProvider = (props: StoreProviderPros) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const store = createReduxStore(initialState as StateSchema, asyncReducers);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
