/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Popover, { PopoverRef } from '.';
import TextInput from '../../forms/TextInput';

const positionList = [
  'auto',
  'top',
  'left',
  'right',
  'bottom',
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
];

const meta = {
  title: 'components/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    label: { control: false },
    children: { control: false },
  },
  parameters: {
    control: {
      position: positionList,
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
  render: (args) => (
    <div style={{ textAlign: 'center' }}>
      <Popover {...args} label={<button type="button">show</button>}>
        <button type="button" onClick={() => { alert('world!'); }}>hello</button>
        <p>hello world</p>
      </Popover>
    </div>
  ),
};

export const scroll: Story = {
  render: (args) => (
    <>
      <div style={{ width: '50px', height: '100vh' }} />
      <div style={{ textAlign: 'center' }}>
        <Popover {...args} label={<button type="button">show</button>}>
          <div style={{ padding: 50 }}>
            <button type="button" onClick={() => { alert('world!'); }}>hello</button>
            <p>hello world</p>
          </div>
        </Popover>
      </div>
      <div style={{ width: '50px', height: '100vh' }} />
    </>
  ),
};

// storiesOf('components/Popover', module)
//   .add('default', () => (
//     <>
//       <div style={{ width: '50px', height: '80vh' }} />
//       <Popover
//         label={<button type="button">show</button>}
//         // @ts-ignore
//         position={select('position', positionList, 'bottom-end')}
//         onOpen={action('onOpen')}
//         onClose={action('onClose')}
//         offset={object('offset', { x: 0, y: 6 })}
//         disabled={boolean('disabled', false)}
//       >
//         <button type="button" onClick={() => { alert('world!'); }}>hello</button>
//         <p>{text('children', 'hello world')}</p>
//       </Popover>
//       <div style={{ width: '50px', height: '80vh' }} />
//     </>
//   ))
//   .add('with input', () => (
//     <Test />
//   ))
//   .add('with absolute parent', () => (
//     <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
//       <Test2 />
//       <Test2 />
//       <Test2 />
//       <Test2 />
//       <Test2 />
//       <Test2 />
//     </div>
//   ))
//   .add('programatically handle', () => {
//     const ref = useRef<PopoverRef | null>(null);
//     return (
//       <>
//         <button type="button" onClick={() => ref.current && ref.current.open()}>open</button>
//         <Popover
//           ref={ref}
//           label={<span>show</span>}
//         >
//           <p>hello world!</p>
//           <button type="button" onClick={() => ref.current && ref.current.close()}>
//             close me!
//           </button>
//         </Popover>
//       </>
//     );
//   })
//   .add('clickable parent', () => {
//     const [clicked, setClicked] = useState(false);
//     return (
//       <>
//         <button onClick={() => setClicked(!clicked)}>
//           <span>parent button contents</span><br />
//           <Popover
//             label={<button>click me</button>}
//           >
//             <p>hello world</p>
//           </Popover>
//         </button>
//         {clicked ? <div>oh no! your parent click event is triggered!</div> : null}
//       </>
//     );
//   });

// function Test() {
//   const [txt, setText] = useState('');
//   const onChange = (e) => setText(e.target.value);
//   return (
//     <Popover
//       label={<button type="button">show</button>}
//     >
//       <TextInput value={txt} onChange={onChange} />
//     </Popover>
//   );
// }

// function Test2() {
//   const [show, setShow] = useState(false);
//   return (
//     <div
//       onPointerOver={() => setShow(true)}
//       onPointerLeave={() => setShow(false)}
//       style={{ position: 'relative', width: '40vw', height: '20vh', background: '#eee', marginBottom: 3 }}
//     >
//       {show && (
//         <div style={{ position: 'absolute', right: 4, top: 0, transform: 'translateY(100%)', zIndex: 10 }}>
//           <Popover
//             label={<button type="button">button!</button>}
//             // @ts-ignore
//             position={select('position', positionList, 'bottom-end')}
//           >
//             hello world!
//           </Popover>
//         </div>
//       )}
//     </div>
//   );
// }
