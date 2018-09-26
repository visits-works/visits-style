import { css } from '../styled';
import { tablet, desktop, fullhd } from '../styles/variables';

function mediaFrom(device, str, ...args) {
  const template = ['@media screen and (min-width: ', 'px) {', ...str, '}'];
  const values = [device, '', ...args, '']; // @ts-ignore

  return css(template, ...values);
}

function mediaUntil(device, str, ...args) {
  const template = ['@media screen and (max-width: ', 'px) {', ...str, '}'];
  const values = [device, '', ...args, '']; // @ts-ignore

  return css(template, ...values);
}

export function mediaMobile(str, ...args) {
  return mediaUntil(tablet - 1, str, ...args);
}
export function mediaTablet(str, ...args) {
  return mediaFrom(tablet, str, ...args);
}
export function mediaDesktop(str, ...args) {
  return mediaFrom(desktop, str, ...args);
}
export function mediaFullHD(str, ...args) {
  return mediaFrom(fullhd, str, ...args);
}
export function mediaUntilFullHD(str, ...args) {
  return mediaUntil(fullhd - 1, str, ...args);
}