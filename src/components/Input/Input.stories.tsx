import { Meta } from '@storybook/react';
import Component, { InputProps } from '.';

export default {
  title: 'Simple Components/Input',
  component: Component,
  args: {
    placeholder: 'Text',
    type: 'text',
    onChange: () => console.log('changed input value'),
    value: '',
  },
  argTypes: {
    placeholder: { type: 'string' },
    type: { type: 'string', control: 'radio', options: ['text', 'password'] },
    value: { type: 'string' },
  },
} as Meta;

export const Input = (args: InputProps) => <Component {...args} />;
