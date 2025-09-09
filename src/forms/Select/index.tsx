import { useCallback, useMemo, useRef, useState } from 'react';
import type { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

import merge from '../../utils/merge';
import Popover, { PopoverRef } from '../../components/Popover';

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
  unstyled?: boolean;
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
  className, placeholder = '', options = [], error, unstyled, disabled, value,
  maxHeight = 408, arrowIcon, closeIcon, checkIcon, onChange, onClear, renderItem,
  sectionLabelStyle, buttonAreaStyle, clearLabelText, optionStyle, ...rest
}: Props<T>) {
  const ref = useRef<PopoverRef>(null);
  const [width, setWidth] = useState(0);
  const btnName = useMemo(() => (unstyled ? className : merge(clsx(
    'flex items-center justify-between rounded-md border bg-background px-3 py-2 w-full overflow-hidden cursor-pointer',
    'disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring',
    error ? 'border-danger hover:border-danger-fore' : 'border-input not-disabled:hover:border-input-fore',
  ), className)), [className, error, unstyled]);

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

  const isEmpty = selectedLabel === placeholder;

  const btnLabelClass = useMemo(() => clsx(
    'overflow-hidden overflow-ellipsis whitespace-nowrap',
    isEmpty ? 'text-muted' : 'text-text',
  ), [isEmpty]);

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
        <h5
          className={clsx('font-normal py-1 px-2 text-muted', sectionLabelStyle)}
          key={`optionheader-${index}`}
        >
          {item}
        </h5>
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

  const buttonWrapperStyle = useMemo(() => clsx(
    'relative flex items-center pr-4 space-x-2',
    buttonAreaStyle,
  ), [buttonAreaStyle]);

  return (
    <Popover
      label={(
        <button type="button" className={btnName} disabled={disabled} {...rest}>
          <span className={btnLabelClass}>
            {selectedLabel}
          </span>
          <div className={buttonWrapperStyle}>
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
          </div>
        </button>
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
  const name = useMemo(() => clsx(
    'flex items-center w-full hover:bg-accent rounded p-1 cursor-pointer',
    className,
  ), [className]);
  return (
    <button
      type="button"
      role="option"
      className={name}
      aria-selected={selected}
      onClick={() => onChange?.(value)}
    >
      {selected && checkIcon ? checkIcon : <div className="w-5 h-1 mr-1" />}
      {label}
    </button>
  );
}
