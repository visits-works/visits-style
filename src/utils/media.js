// @flow
import { css } from 'styled-components';
import { mobile, tablet, desktop, fullhd, gutter, smallGutter } from '../styles/variables';

function mediaFrom(device: number, str: Array<string>, ...args: any) {
  const template = ['@media screen and (min-width: ', 'px) {', ...str, '}']
  const values = [device, '', ...args, ''];
  return css(template, ...values);
}

function mediaUntil(device: number, str: Array<string>, ...args: any) {
  const template = ['@media screen and (max-width: ', 'px) {', ...str, '}']
  const values = [device, '', ...args, ''];
  return css(template, ...values);
}

export function mediaMobile(str: Array<string>, ...args: any) {
  return mediaUntil(tablet - 1, str, ...args);
}

export function mediaTablet(str: Array<string>, ...args: any) {
  return mediaFrom(tablet, str, ...args);
}

export function mediaDesktop(str: Array<string>, ...args: any) {
  return mediaFrom(desktop, str, ...args);
}

export function mediaFullHD(str: Array<string>, ...args: any) {
  return mediaFrom(fullhd, str, ...args);
}

export function mediaUntilFullHD(str: Array<string>, ...args: any) {
  return mediaUntil(fullhd - 1, str, ...args);
}
