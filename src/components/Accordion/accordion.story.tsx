import { useState, type SVGAttributes } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import Accordion from ".";

function IconArrow(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11.7 14.8 7 9.8a.5.5 0 0 1 0-.7c.2-.2.5-.2.7 0l4.5 5c.2.2.2.6 0 .8-.1.2-.4.2-.6 0Z" fill="currentColor" />
      <path d="m16.9 9.9-4.6 5c-.2.2-.4.2-.6 0a.5.5 0 0 1 0-.8l4.5-5c.2-.2.5-.2.7 0 .1.2.1.6 0 .8Z" fill="currentColor" />
    </svg>
  );
}

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
          <IconArrow
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
