import { Story } from '@storybook/react';
import { Theme, ThemePorvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemePorvider>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemePorvider>
);
