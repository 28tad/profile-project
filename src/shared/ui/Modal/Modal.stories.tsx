import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing'
                + 'elit. Omnis magni rem perspiciatis neque beatae ex labore autem sed cumque'
                + 'iure accusamus illo molestias error rerum delectus expedita quae repellendus'
                + 'facilis!',

};
