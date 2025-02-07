import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Accordion from ".";
import ArrowDownIcon from "../../elements/Icons/ArrowDown";

function Test({ show, timeout, length, onClick }: any) {
  return (
    <Accordion
      className="border-b border-input"
      header={
        <button
          className="flex justify-between items-center w-full hover:underline px-1 py-2 cursor-pointer"
          type="button"
          onClick={onClick}
        >
          {`accordion header-${length}`}
          <ArrowDownIcon
            className="transition-transform ease-in-out"
            style={{ transform: show ? 'rotate(180deg)' : '' }}
          />
        </button>
      }
      show={show}
      timeout={timeout}
      style={{ width: "100%" }}
    >
      <div className="pb-2 pt-1">
        {Array.from({ length }).map((_, i) => (
          <p key={i}>Hello world!</p>
        ))}
      </div>
    </Accordion>
  );
}

const meta = {
  title: "components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: { timeout: 300 },
  argTypes: {
    show: { control: false },
    header: { control: false },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

// @ts-expect-error
export const single: Story = {
  render: ({ timeout }) => {
    const [show, setShow] = useState(0);
    return (
      <>
        <Test
          show={show === 1}
          timeout={timeout}
          length={6}
          onClick={() => setShow(show === 1 ? 0 : 1)}
        />
        <Test
          show={show === 2}
          timeout={timeout}
          length={20}
          onClick={() => setShow(show === 2 ? 0 : 2)}
        />
        <Test
          show={show === 3}
          timeout={timeout}
          length={4}
          onClick={() => setShow(show === 3 ? 0 : 3)}
        />
      </>
    );
  },
};

function Fancy({ length = 6, timeout }: any) {
  const [show, setShow] = useState<boolean>(false);
  const onClick = () => setShow((s) => !s);
  return (
    <Test show={show} timeout={timeout} length={length} onClick={onClick} />
  );
}

// @ts-expect-error
export const multiple: Story = {
  render: ({ timeout }) => (
    <>
      <Fancy timeout={timeout} />
      <Fancy timeout={timeout} length={20} />
      <Fancy timeout={timeout} length={4} />
    </>
  ),
};
