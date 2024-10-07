import { Story } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state as StateSchema}>
            <StoryComponent />
    </StoreProvider>
);
