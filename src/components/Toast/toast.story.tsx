import { useCallback, useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Toast from '.';
import observer from './observer';

import Button from '../../elements/Button';
import Input from '../../forms/Input';
import Select from '../../forms/Select';
import FormField from '../../forms/Field/FormField';
import InputField from '../../forms/Field/InputField';
import type { ToastType } from './types';

const positionList = ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
const typeList = ['success', 'info', 'error', 'warn', 'loading'] as ToastType[];

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
  const [type, setType] = useState<ToastType>('success');
  
  const addDefault = useCallback(() => {
    observer.add('Event has been created', { duration: duration || null });
  }, [duration]);
  
  const addMessage = useCallback(() => {
    observer.add('Event has been created', {
      message: 'Monday, January 3rd at 6:00pm',
      duration: duration || null,
    });
  }, [duration]);

  const addType = useCallback(() => {
    observer.add(`Type:${type} has been created`, { duration: duration || null, type });
  }, [duration, type]);

  const addLoading = useCallback(async () => {
    const id = observer.add('Loading...', { duration: null, type: 'loading' });
    await new Promise((done) => { window.setTimeout(done, 2000); });
    observer.update(id, { label: 'Process Successed!', type: 'success', duration });
  }, [duration]);

  const onDurationChange = useCallback(({ target }: any) => {
    const num = target.value ? parseInt(target.value, 10) : null;
    setDuration(num ? num : null);
  }, []);

  const options = useMemo(() => typeList.map((value) => ({ value, label: value })), []);

  return (
    <div>
      <FormField label="Duration">
        <InputField className="flex items-center">
          <Input value={duration || ''} onChange={onDurationChange} unstyled />
          <span className="text-sm text-muted">ms</span>
        </InputField>
      </FormField>
      <br />
      <footer className="grid gap-2">
        <Button variant="outline" onClick={addDefault}>Default</Button>
        <Button variant="outline" onClick={addMessage}>Message</Button>
        <div className="flex items-center space-x-1">
          <Button variant="outline" size="none" className="pl-2 pr-3 py-2" onClick={addType}>
            Show Type:
          </Button>
          <Select value={type} onChange={setType} placeholder="select type" options={options} />
        </div>
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
