import { css } from 'styled-components';
import { CSSType, ThemeType } from '../types';

function mediaFrom(device: any, str: TemplateStringsArray, ...args: any[]): CSSType {
  const template = ['@media screen and (min-width: ', 'px) {', ...str, '}'];
  const values = [device, '', ...args, ''];
  return css(
    // @ts-ignore
    ['', ''],
    // @ts-ignore
    [({ theme }: any) => theme.responsive ? css(template, ...values) : ''],
  );
}

function mediaUntil(device: any, str: TemplateStringsArray, ...args: any[]): CSSType {
  const template = ['@media screen and (max-width: ', 'px) {', ...str, '}'];
  const values = [device, '', ...args, ''];
  return css(
    // @ts-ignore
    ['', ''],
    // @ts-ignore
    [({ theme }: any) => theme.responsive ? css(template, ...values) : ''],
  );
}

export function mediaMobile(str: TemplateStringsArray, ...args: any[]) {
  return mediaUntil(({ theme }: any) => theme.media.tablet - 1, str, ...args);
}

export function mediaTablet(str: TemplateStringsArray, ...args: any[]) {
  return mediaFrom(({ theme }: any) => theme.media.tablet, str, ...args);
}

export function mediaDesktop(str: TemplateStringsArray, ...args: any[]) {
  return mediaFrom(({ theme }: any) => theme.media.desktop, str, ...args);
}

export function mediaFullHD(str: TemplateStringsArray, ...args: any[]) {
  return mediaFrom(({ theme }: any) => theme.media.fullhd, str, ...args);
}

export function mediaUntilFullHD(str: TemplateStringsArray, ...args: any[]) {
  return mediaUntil(({ theme }: any) => theme.media.fullhd - 1, str, ...args);
}
