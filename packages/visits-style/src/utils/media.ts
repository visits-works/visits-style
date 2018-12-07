import { css } from 'styled-components';
import { tablet, desktop, fullhd } from '../styles/variables';
import { CSSType, ThemeType } from '../types';

function mediaFrom(device: number, str: TemplateStringsArray, ...args: any[]): CSSType {
  const template = ['@media screen and (min-width: ', 'px) {', ...str, '}'];
  const values = [device, '', ...args, ''];
  return css(template, ...values);
}

function mediaUntil(device: number, str: TemplateStringsArray, ...args: any[]): CSSType {
  const template = ['@media screen and (max-width: ', 'px) {', ...str, '}'];
  const values = [device, '', ...args, ''];
  return css(template, ...values);
}

function withTheme(func: any, ...args: any[]) {
  return function({ theme }: { theme: ThemeType }): CSSType | string {
    if (theme && theme.responsive === false) return '';
    return func(...args);
  };
}

export function mediaMobile(str: TemplateStringsArray, ...args: any[]) {
  return withTheme(mediaUntil, tablet - 1, str, ...args);
}

export function mediaTablet(str: TemplateStringsArray, ...args: any[]) {
  return withTheme(mediaFrom, tablet, str, ...args);
}

export function mediaDesktop(str: TemplateStringsArray, ...args: any[]) {
  return withTheme(mediaFrom, desktop, str, ...args);
}

export function mediaFullHD(str: TemplateStringsArray, ...args: any[]) {
  return withTheme(mediaFrom, fullhd, str, ...args);
}

export function mediaUntilFullHD(str: TemplateStringsArray, ...args: any[]) {
  return mediaUntil(fullhd - 1, str, ...args);
}
