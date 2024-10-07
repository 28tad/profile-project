import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title here or something',
    text: 'Text here or something else maybe idk you say me ',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title here or something',
    text: 'Text here or something else maybe idk you say me ',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title here or something',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text here or something else maybe idk you say me ',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title here or something',
    text: 'Text here or something else maybe idk you say me ',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title here or something',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text here or something else maybe idk you say me ',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
