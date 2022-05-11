import { Meta } from '@storybook/react';
import Component, { MessageProps } from '.';

export default {
  title: 'Simple Components/Message',
  component: Component,
  args: {
    children: 'A sended message example',
    isSender: true,
  },
  argTypes: {
    children: { type: 'string' },
    isSender: { type: 'boolean' },
  },
} as Meta;

export const MessageSended = (args: MessageProps) => <Component {...args} />;

export const MessageReceived = (args: MessageProps) => <Component {...args} />;

MessageReceived.args = {
  isSender: false,
  children: 'A received message example',
};
