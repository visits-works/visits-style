import type { Meta, StoryObj } from '@storybook/react-vite';
import Button, { ButtonProps } from '.';
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

function IconApproved() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
      <path d="M15 29a14 14 0 0 1-9.9-4.1A14 14 0 0 1 1 15a14 14 0 0 1 4.1-9.9A14 14 0 0 1 15 1a14 14 0 0 1 9.9 4.1A14 14 0 0 1 29 15a14 14 0 0 1-4.1 9.9A14 14 0 0 1 15 29z" fill="none" />
      <path d="M15 2a13 13 0 0 0-9.2 3.8A13 13 0 0 0 2 15a13 13 0 0 0 3.8 9.2A13 13 0 0 0 15 28a13 13 0 0 0 9.2-3.8A13 13 0 0 0 28 15a13 13 0 0 0-3.8-9.2A13 13 0 0 0 15 2m0-2a15 15 0 1 1 0 30 15 15 0 0 1 0-30z" fill="currentColor" />
      <path d="m11.5 18.5-3.9-4L6 16l5.6 5.6L23.2 10l-1.7-1.6z" fill="currentColor" />
    </svg>
  );
}

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
    children: <IconApproved />,
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
