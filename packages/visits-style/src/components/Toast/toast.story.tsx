import React, { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';
import faker from 'faker';
import Toast from '.';
import Button from '../../elements/Button';
import Field from '../../forms/Field';
import Checkbox from '../../forms/Checkbox';
import TextInput from '../../forms/TextInput';

const positionList = ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
const colorList = ['warning', 'danger', 'info', 'primary', 'success'];

function ToastDemo({ fixed, position }: any) {
  const [list, setList] = useState([]);
  const [duration, setDuration] = useState<number | null>(2000);
  const [showButton, setShowbutton] = useState(false);
  const addToast = useCallback(() => {
    const newList = list.slice();
    const color = colorList[Math.floor(Math.random() * Math.floor(colorList.length))];
    const id = `_${Math.random().toString(36).substr(2, 9)}`;
    newList.push({ id, color, message: faker.lorem.sentence(), duration, clearOnClick: showButton });
    setList(newList);
  }, [duration, showButton, list]);
  const clearToast = useCallback((id: string) => {
    setList(l => l.filter(item => item.id !== id));
  }, []);
  const clearAll = useCallback(() => setList([]), []);
  const onDurationChange = useCallback(({ target }: any) => {
    if (!target.value) {
      setDuration(null);
    } else {
      setDuration(parseInt(target.value, 10));
    }
  }, []);
  const clickButton = useCallback(() => setShowbutton(b => !b), []);

  return (
    <div>
      <Checkbox checked={showButton} onChange={clickButton}>ボタン表示</Checkbox>
      <br />
      <Field label="タイムアウト(空欄はタイムアウトなし)">
        <TextInput value={duration || ''} onChange={onDurationChange} outline />
      </Field>
      <br />
      <Button color="primary" onClick={addToast}>Toast!</Button>
      <Button color="danger" onClick={clearAll}>Clear All</Button>
      <Toast
        toasts={list}
        clear={clearToast}
        position={position}
        fixed={fixed}
      />
    </div>
  );
}

storiesOf('components|Toast', module)
  .add('default', () => (
    <ToastDemo
      position={select('position', positionList, 'top-left')}
      fixed={boolean('fixed', false)}
    />
  ));
