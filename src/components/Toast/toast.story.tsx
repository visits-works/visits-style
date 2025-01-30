import { useCallback, useLayoutEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Toast from '.';
import observer from './observer';

import Button from '../../elements/Button';
// import Field from '../../forms/Field/FormField';
import Input from '../../forms/Input';

const positionList = ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];

const meta = {
  title: 'components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

function ToastControl() {
  const [duration, setDuration] = useState<number | null>(2000);
  
  const addDefault = useCallback(() => {
    observer.add('Event has been created', { duration: duration || null });
  }, [duration]);
  
  const addMessage = useCallback(() => {
    observer.add('Event has been created', {
      message: 'Monday, January 3rd at 6:00pm',
      duration: duration || null,
    });
  }, [duration]);

  const addSuccess = useCallback(() => {
    observer.add('Event has been created', {
      duration: duration || null,
      type: 'success',
    });
  }, [duration]);

  const addLoading = useCallback(async () => {
    const id = observer.add('Loading...', { duration: null, type: 'loading' });
    await new Promise((done) => { window.setTimeout(done, 2000); });
    observer.update(id, { label: 'Process has been done', type: 'success', duration });
  }, [duration]);

  const onDurationChange = useCallback(({ target }: any) => {
    const num = target.value ? parseInt(target.value, 10) : null;
    setDuration(num ? num : null);
  }, []);

  return (
    <div>
      <Input value={duration || ''} onChange={onDurationChange} />
      <br />
      <footer className="grid gap-2">
        <Button variant="outline" onClick={addDefault}>Default</Button>
        <Button variant="outline" onClick={addMessage}>Message</Button>
        <Button variant="outline" onClick={addSuccess}>Success</Button>
        <Button variant="outline" onClick={addLoading}>Loading</Button>
        <Button variant="danger" onClick={observer.clear}>Clear All</Button>
      </footer>
    </div>
  );
}

export const base: Story = {
  render: (args) => (
    <>
      <ToastControl />
      <Toast {...args} />
    </>
  ),
  // @ts-ignore
  args: { fixed: true, position: 'top-left' },
  parameters: {
    controls: {
      position: positionList,
    },
  },
};
