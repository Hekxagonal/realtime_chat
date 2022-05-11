import { Meta } from '@storybook/react';
import Component, { MessageInputProps } from '.';

export default {
  title: 'Simple Components/MessageInput',
  component: Component,
  args: {
    inputValue: '',
    onInputChange: () => console.log('input value changed'),
    onFormSubmit: () => console.log('submitted'),
  },
  argTypes: {
    inputValue: { type: 'string' },
  },
} as Meta;

export const MessageInput = (args: MessageInputProps) => (
  <Component {...args} />
);
