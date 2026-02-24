import { useCallback, useMemo, useRef, useState } from 'react';
import type { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

import Popover, { PopoverRef } from '../../components/Popover';
import Base from '../../elements/Base';

type OptionType<T> = { value: T; label: string; } | string;
interface OptionRenderConfig {
  index: number;
  selected: boolean;
  onChange: () => void;
}

export interface Props<T> extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick' | 'type' | 'value' | 'children'> {
  /** 配列の値の入力の場合、複数選択モードに切り替えます */
  value: T | T[];
  options: OptionType<T>[];
  onChange?: (value: T) => void;
  onClear?: () => void;
  renderItem?: (item: OptionType<T>, config: OptionRenderConfig) => ReactElement;
  placeholder?: string;
  arrowIcon?: ReactNode;
  closeIcon?: ReactNode;
  checkIcon?: ReactNode;
  /**
   * select選択肢の最大高さ
   * @default 408
  */
  maxHeight?: number;
  error?: boolean;
  customStyle?: boolean;
  /** クリアボタン、矢印アイコンの領域のdivのスタイルのカスタム指定 */
  buttonAreaStyle?: string;
  /** section(stringのみで区域を区切った場合)を使うときのスタイルのカスタム指定 */
  sectionLabelStyle?: string;
  /** 各選択肢のスタイルのカスタム指定 */
  optionStyle?: string;
  /** 選択を取り消すボタンのaria-label */
  clearLabelText?: string;
}

export default function Select<T = unknown>({
  className, placeholder = '', options = [], error, customStyle, disabled, value,
  maxHeight = 408, arrowIcon, closeIcon, checkIcon, onChange, onClear, renderItem,
  sectionLabelStyle, buttonAreaStyle, clearLabelText, optionStyle, ...rest
}: Props<T>) {
  const ref = useRef<PopoverRef>(null);
  const [width, setWidth] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isMultiple = useMemo(() => Array.isArray(value), []);

  const handleChange = useCallback((val: T) => {
    onChange?.(val);
    if (!isMultiple) ref.current?.close();
  }, [onChange, isMultiple]);

  const isSelected = useCallback((item: T) => {
    if (Array.isArray(value)) return value.indexOf(item) > -1;
    return value === item;
  }, [value]);

  const optionMap = useMemo(() => {
    const map = {} as Record<string, string>;
    const items = options.filter((item) => typeof item !== 'string');
    for (let i = 0, len = items.length; i < len; i += 1) {
      const item = items[i];
      map[`${item.value}`] = item.label;
    }
    return map;
  }, [options]);

  const selectedLabel = useMemo(() => {
    if (!value) return placeholder;
    if (Array.isArray(value)) {
      if (!value.length) return placeholder;
      const sorted = [...value].sort();
      const arr = [];
      for (let i = 0, len = sorted.length; i < len; i += 1) {
        arr[i] = optionMap[`${sorted[i]}`] || '';
      }
      return arr.filter(Boolean).join(',') || placeholder;
    }
    return optionMap[`${value}`] || placeholder;
  }, [placeholder, value, optionMap]);

  const isEmpty = useMemo(() => {
    if (value === undefined || value === null) return true;
    if (Array.isArray(value)) return !value.length;
    return false;
  }, [value]);

  const handleRender = useCallback((item: OptionType<T>, index: number) => {
    if (renderItem) {
      if (typeof item === 'string') {
        return renderItem(item, { index, selected: false, onChange: () => {} });
      }
      return renderItem(item, {
        index,
        selected: isSelected(item.value),
        onChange: () => handleChange(item.value),
      });
    }
    if (typeof item === 'string') {
      return (
        <Base
          as="h5"
          classList={['font-normal py-1 px-2 text-muted']}
          className={sectionLabelStyle}
          key={`optionheader-${index}`}
        >
          {item}
        </Base>
      );
    }
    return (
      <SelectItem<T>
        key={item.label}
        selected={isSelected(item.value)}
        onChange={handleChange}
        checkIcon={checkIcon}
        className={optionStyle}
        {...item}
      />
    );
  }, [renderItem, handleChange, isSelected, sectionLabelStyle, optionStyle, checkIcon]);

  return (
    <Popover
      label={(
        <Base<ButtonHTMLAttributes<HTMLButtonElement>>
          as="button"
          type="button"
          classList={customStyle ? undefined : [
            'flex items-center justify-between rounded-md border bg-background px-3 py-2 w-full overflow-hidden cursor-pointer',
            'disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring',
            error ? 'border-danger hover:border-danger-fore' : 'border-input not-disabled:hover:border-input-fore',
          ]}
          className={className}
          disabled={disabled}
          {...rest}
        >
          <Base
            as="span"
            classList={[
              'overflow-hidden overflow-ellipsis whitespace-nowrap',
              isEmpty ? 'text-muted' : 'text-text',
            ]}
          >
            {selectedLabel}
          </Base>
          <Base classList="relative flex items-center space-x-2" className={buttonAreaStyle}>
            {onClear && !isEmpty ? (
              <div
                tabIndex={-1}
                role="button"
                className="size-6 p-1.5 rounded hover:bg-accent cursor-pointer"
                aria-label={clearLabelText}
                onKeyDown={(e) => {
                  if (e.key !== 'Enter' && e.key !== 'Space') return;
                  onClear();
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClear();
                }}
              >
                {closeIcon}
              </div>
            ) : null}
            {arrowIcon}
          </Base>
        </Base>
      )}
      ref={ref}
      onOpen={(elem) => setWidth(elem?.getBoundingClientRect().width || 0)}
      disabled={disabled}
    >
      <ul
        className="overflow-y-auto flex flex-col"
        role="listbox"
        style={{ minWidth: width, maxWidth: 'calc(100vw - 3rem)', maxHeight }}
      >
        {options.map(handleRender)}
      </ul>
    </Popover>
  );
}

interface SelectItemProps<T> {
  className?: string;
  value: T;
  label: string;
  onChange?: (value: T) => void;
  checkIcon?: ReactNode;
  selected?: boolean;
}

export function SelectItem<T>({
  className, value, label, selected, checkIcon, onChange,
}: SelectItemProps<T>) {
  return (
    <Base<ButtonHTMLAttributes<HTMLButtonElement>>
      as="button"
      type="button"
      role="option"
      classList="flex items-center w-full hover:bg-accent rounded p-1 cursor-pointer"
      className={className}
      aria-selected={selected}
      onClick={() => onChange?.(value)}
    >
      {selected && checkIcon ? checkIcon : <div className="w-5 h-1 mr-1" />}
      {label}
    </Base>
  );
}
