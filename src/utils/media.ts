import { css } from 'styled-components';
import { tablet, desktop, fullhd } from '../styles/variables';

function mediaFrom(device: number, str: TemplateStringsArray, ...args: Array<any>) {
  const template = ['@media screen and (min-width: ', 'px) {', ...str, '}']
  const values = [device, '', ...args, ''];
  // @ts-ignore
  return css(template, ...values);
}

function mediaUntil(device: number, str: TemplateStringsArray, ...args: Array<any>) {
  const template = ['@media screen and (max-width: ', 'px) {', ...str, '}']
  const values = [device, '', ...args, ''];
  // @ts-ignore
  return css(template, ...values);
}

export function mediaMobile(str: TemplateStringsArray, ...args: Array<any>) {
  return mediaUntil(tablet - 1, str, ...args);
}

export function mediaTablet(str: TemplateStringsArray, ...args: Array<any>) {
  return mediaFrom(tablet, str, ...args);
}

export function mediaDesktop(str: TemplateStringsArray, ...args: Array<any>) {
  return mediaFrom(desktop, str, ...args);
}

export function mediaFullHD(str: TemplateStringsArray, ...args: Array<any>) {
  return mediaFrom(fullhd, str, ...args);
}

export function mediaUntilFullHD(str: TemplateStringsArray, ...args: Array<any>) {
  return mediaUntil(fullhd - 1, str, ...args);
}
