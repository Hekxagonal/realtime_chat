import { Meta } from '@storybook/react';
import Component, { ChatProps } from '.';
import test_data from '../../../test/data';

export default {
  title: 'Templates/Chat',
  component: Component,
  args: {
    initialMessages: test_data,
  },
  argTypes: {
    initialMessages: { description: 'its old messages' },
  },
} as Meta;

export const Chat = (args: ChatProps) => <Component {...args} />;
