import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '.';
import Approved from '../Icons/Approved';
import ButtonGroup from './ButtonGroup';

const varients = [
  '',
  'danger',
  'link',
  'outlint',
  'ghost',
];

const sizeList = [
  '',
  'icon',
];

const meta = {
  title: 'elements/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    control: {
      variant: varients,
      size: sizeList,
      disabled: [true, false],
    },
  },
  argTypes: { children: { control: false } },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  args: {
    children: 'Hello wolrd',
  },
};

export const icon: Story = {
  args: {
    children: <Approved />,
    variant: 'outline',
    size: 'icon',
  },
};

export const buttonGroup: Story = {
  render: (args) => (
    <ButtonGroup>
      <Button {...args}>button 1</Button>
      <Button {...args}>ボタン 2</Button>
      <Button {...args}>BUTTON 3</Button>
    </ButtonGroup>
  ),
};
