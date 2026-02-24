import { useCallback, useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Toast from '.';
import observer from './observer';

import Button from '../../elements/Button';
import Input from '../../forms/Input';
import Select from '../../forms/Select';
import FormField from '../../forms/Field/FormField';
import InputField from '../../forms/Field/InputField';
import type { ToastType, ToasterProps } from './types';

const positionList = ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
const typeList = ['success', 'info', 'error', 'warn', 'loading'] as ToastType[];

const icons = {
  success: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" className="text-primary size-5">
      <path d="M15 29a14 14 0 0 1-9.9-4.1A14 14 0 0 1 1 15a14 14 0 0 1 4.1-9.9A14 14 0 0 1 15 1a14 14 0 0 1 9.9 4.1A14 14 0 0 1 29 15a14 14 0 0 1-4.1 9.9A14 14 0 0 1 15 29z" fill="none" />
      <path d="M15 2a13 13 0 0 0-9.2 3.8A13 13 0 0 0 2 15a13 13 0 0 0 3.8 9.2A13 13 0 0 0 15 28a13 13 0 0 0 9.2-3.8A13 13 0 0 0 28 15a13 13 0 0 0-3.8-9.2A13 13 0 0 0 15 2m0-2a15 15 0 1 1 0 30 15 15 0 0 1 0-30z" fill="currentColor" />
      <path d="m11.5 18.5-3.9-4L6 16l5.6 5.6L23.2 10l-1.7-1.6z" fill="currentColor" />
    </svg>
  ),
  info: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" className="text-info size-5">
      <path d="M16 0C7.16 0 0 7.16 0 16C0 24.84 7.16 32 16 32C24.84 32 32 24.84 32 16C32 7.16 24.84 0 16 0ZM16 31C7.73 31 1 24.27 1 16C1 7.73 7.73 1 16 1C24.27 1 31 7.73 31 16C31 24.27 24.27 31 16 31Z" fill="currentColor" />
      <path d="M15.5 19.55V8.54999C15.5 8.26999 15.72 8.04999 16 8.04999C16.28 8.04999 16.5 8.26999 16.5 8.54999V19.55C16.5 19.83 16.28 20.05 16 20.05C15.72 20.05 15.5 19.83 15.5 19.55Z" fill="currentColor" />
      <path d="M16 23.95C16.5523 23.95 17 23.5023 17 22.95C17 22.3977 16.5523 21.95 16 21.95C15.4477 21.95 15 22.3977 15 22.95C15 23.5023 15.4477 23.95 16 23.95Z" fill="currentColor" />
    </svg>
  ),
  warn: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" className="text-warn size-5">
      <path d="M16 0C7.16 0 0 7.16 0 16C0 24.84 7.16 32 16 32C24.84 32 32 24.84 32 16C32 7.16 24.84 0 16 0ZM16 31C7.73 31 1 24.27 1 16C1 7.73 7.73 1 16 1C24.27 1 31 7.73 31 16C31 24.27 24.27 31 16 31Z" fill="currentColor" />
      <path d="M15.5 19.55V8.54999C15.5 8.26999 15.72 8.04999 16 8.04999C16.28 8.04999 16.5 8.26999 16.5 8.54999V19.55C16.5 19.83 16.28 20.05 16 20.05C15.72 20.05 15.5 19.83 15.5 19.55Z" fill="currentColor" />
      <path d="M16 23.95C16.5523 23.95 17 23.5023 17 22.95C17 22.3977 16.5523 21.95 16 21.95C15.4477 21.95 15 22.3977 15 22.95C15 23.5023 15.4477 23.95 16 23.95Z" fill="currentColor" />
    </svg>
  ),
  error: (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 52 45" className="text-danger size-5">
      <path d="M50.6 37.8 29.3 2c-1.5-2.6-5.1-2.8-6.7-.3l-21.2 36c-1.7 2.6.2 6.6 3.4 6.6h42.4c3.1 0 5-4 3.4-6.6Zm-24.7.6a2.7 2.7 0 1 1 0-5.5 2.7 2.7 0 0 1 0 5.5Zm2.9-10.1c0 1.5-1.3 2.7-2.8 2.7a2.8 2.8 0 0 1-2.8-2.7V13.9c0-1.5 1.3-2.7 2.8-2.7 1.5 0 2.8 1.2 2.8 2.7v14.4Z" fill="currentColor" />
    </svg>
  ),
} as ToasterProps['icons'];

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
          <Input value={duration || ''} onChange={onDurationChange} customStyle />
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
        <Button variant="outline" onClick={addLoading}>Async Process</Button>
        <Button variant="danger" onClick={observer.clear}>Clear All</Button>
      </footer>
    </div>
  );
}

export const base: Story = {
  render: (args) => (
    <>
      <ToastControl />
      <Toast icons={icons} {...args} />
    </>
  ),
  // @ts-expect-error
  args: { fixed: true, position: 'top-left' },
  parameters: {
    controls: {
      position: positionList,
    },
  },
};
