import { Meta } from '@storybook/react';
import Component, { MessageProps } from '.';
import * as ChatStyles from '../Chat/styles';

export default {
  title: 'Simple Components/Message',
  component: Component,
  args: {
    children: 'A sended message example',
    isSender: true,
    user: 'user example',
    createdAt: new Date(),
  },
  argTypes: {
    children: { type: 'string' },
    isSender: { type: 'boolean' },
  },
} as Meta;

export const MessageSended = (args: MessageProps) => (
  <ChatStyles.Container>
    <Component {...args} />
  </ChatStyles.Container>
);

export const MessageReceived = (args: MessageProps) => (
  <ChatStyles.Container>
    <Component {...args} />
  </ChatStyles.Container>
);

MessageReceived.args = {
  isSender: false,
  children: 'A received message example',
};
