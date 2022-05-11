import { Meta } from '@storybook/react';
import Component, { iComponent } from '.';

export default {
  title: 'Simple Components/Button',
  component: Component,
  args: {
    children: 'Text',
    onClick: () => console.log('clicked on button'),
  },
  argTypes: {
    children: { type: 'string' },
    onClick: { type: 'function' },
  },
} as Meta;

export const Button = (args: iComponent) => <Component {...args} />;
