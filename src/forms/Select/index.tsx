import { type ButtonHTMLAttributes, type ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

import merge from '../../utils/merge';
import Popover, { PopoverRef } from '../../components/Popover';
import IconArrowDown from '../../elements/Icons/ArrowDown';
import IconCheck from '../../elements/Icons/Check';
import IconClose from '../../elements/Icons/Close';

export interface Props<T> extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick' | 'type' | 'value' | 'children'> {
  /** 配列の値の入力の場合、複数選択モードに切り替えます */
  value: T | T[];
  placeholder: string;
  options: Array<{ value: T; label: string; category?: string; }>;
  onChange?: (value: T) => void;
  onClear?: () => void;
  maxHeight?: number;
  error?: boolean;
  unstyled?: boolean;
}

export default function Select<T = any>({
  className, placeholder = '', options, error, unstyled, disabled, value,
  maxHeight = 408, onChange, onClear, ...rest
}: Props<T>) {
  const ref = useRef<PopoverRef>(null);
  const [width, setWidth] = useState(0);
  const btnName = useMemo(() => (unstyled ? className : merge(clsx(
    'flex items-center justify-between rounded-md border bg-background px-3 py-2 w-full overflow-hidden cursor-pointer',
    'disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring',
    error ? 'border-danger hover:border-danger-fore' : 'border-input not-disabled:hover:border-input-fore',
  ), className)), [className, error, unstyled]);

  const isMultiple = useMemo(() => Array.isArray(value), []);

  const handleChange = useCallback((value: T) => {
    onChange?.(value);
    if (!isMultiple) ref.current?.close();
  }, [onChange, isMultiple]);

  const isSelected = useCallback((compare: T) => {
    if (Array.isArray(value)) return value.indexOf(compare) > -1;
    return value === compare;
  }, [value]);

  const optionMap = useMemo(() => {
    const map = {} as Record<string, string>;
    for (let i = 0, len = options.length; i < len; i += 1) {
      const item = options[i];
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
    'overflow-hidden overflow-ellipsis',
    isEmpty ? 'text-muted' : 'text-text',
  ), [isEmpty]);

  return (
    <Popover
      label={(
        <button type="button" className={btnName} disabled={disabled} {...rest}>
          <span className={btnLabelClass}>
            {selectedLabel}
          </span>
          <div className="flex items-center pl-2 pr-1 space-x-2">
            {onClear && !isEmpty ? (
              <a
                type="button"
                className="size-6 p-1.5 rounded hover:bg-accent"
                aria-label="clear selected values"
                onClick={(e) => {
                  e.stopPropagation();
                  onClear();
                }}
              >
                <IconClose />
              </a>
            ) : null}
            <IconArrowDown className="text-muted size-3" />
          </div>
        </button>
      )}
      ref={ref}
      onOpen={(ref) => setWidth(ref?.getBoundingClientRect().width || 0)}
      disabled={disabled}
    >
      <ul
        className="overflow-y-auto"
        style={{ minWidth: width, maxWidth: 'calc(100vw - 3rem)', maxHeight }}
      >
        {options.map((item) => (
          <SelectItem<T>
            key={item.label}
            selected={isSelected(item.value)}
            onChange={handleChange}
            {...item}
          />
        ))}
      </ul>
    </Popover>
  );
}

function isOverflow(target: number, elem: HTMLElement | null) {
  if (!elem) return false;
  return target < (elem.scrollWidth + 32);
}

interface SelectItemProps<T> {
  className?: string;
  value: T;
  label: ReactNode;
  onChange?: (value: T) => void;
  selected?: boolean;
}

export function SelectItem<T>({ className, value, label, selected, onChange }: SelectItemProps<T>) {
  const name = useMemo(() => clsx(
    'flex items-center w-full hover:bg-accent rounded p-1',
    className,
  ), [className]);
  return (
    <button
      type="button"
      className={name}
      aria-selected={selected}
      onClick={() => onChange?.(value)}
    >
      {selected ? <IconCheck className="w-5 h-5 mr-1" /> : <i className="w-5 h-1 mr-1" />}
      {label}
    </button>
  );
}
