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
    inputValue: { type: 'string', description: 'the value of input' },
    onInputChange: {
      type: 'function',
      description: 'this function is called when the value changes',
    },
    onFormSubmit: {
      type: 'function',
      description: 'this function is called when the form submit',
    },
  },
} as Meta;

export const MessageInput = (args: MessageInputProps) => (
  <Component {...args} />
);
