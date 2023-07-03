/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '.';

function Fancy({ length = 6, defaultShow = false }: any) {
  const [show, setShow] = useState<boolean>(defaultShow);
  const onClick = () => setShow((s) => !s);
  return (
    <Accordion
      header={<button type="button" onClick={onClick}>click me</button>}
      show={show}
      style={{ width: '100%' }}
    >
      {Array.from({ length })
        // eslint-disable-next-line react/no-array-index-key
        .map((_, i) => <div key={i}>Hello world!</div>)}
    </Accordion>
  );
}

const meta = {
  title: 'components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  render: Fancy,
  argTypes: {
    header: { table: false },
    show: { table: false },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const multiple: Story = {
  render: () => (
    <>
      <Fancy />
      <Fancy length={20} />
      <Fancy length={4} />
    </>
  ),
  // @ts-ignore
  args: {},
};
