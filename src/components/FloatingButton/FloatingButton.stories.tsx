import { Meta } from '@storybook/react';
import Component, { FloatingButtonProps } from '.';

export default {
  title: 'Simple Components/Floating Button',
  component: Component,
  args: {
    onClick: () => console.log('clicked'),
  },
  argTypes: {
    onClick: { type: 'function' },
  },
} as Meta;

export const FloatingButton = (args: FloatingButtonProps) => (
  <Component {...args} />
);
