import { css } from 'styled-components';
import { tablet, desktop, fullhd } from '../styles/variables';
function mediaFrom(device, str, ...args) {
    const template = ['@media screen and (min-width: ', 'px) {', ...str, '}'];
    const values = [device, '', ...args, ''];
    // @ts-ignore
    return css(template, ...values);
}
function mediaUntil(device, str, ...args) {
    const template = ['@media screen and (max-width: ', 'px) {', ...str, '}'];
    const values = [device, '', ...args, ''];
    // @ts-ignore
    return css(template, ...values);
}
function withTheme(func, ...args) {
    return function ({ theme }) {
        if (theme && theme.responsive === false)
            return '';
        return func(...args);
    };
}
export function mediaMobile(str, ...args) {
    return withTheme(mediaUntil, tablet - 1, str, ...args);
}
export function mediaTablet(str, ...args) {
    return withTheme(mediaFrom, tablet, str, ...args);
}
export function mediaDesktop(str, ...args) {
    return withTheme(mediaFrom, desktop, str, ...args);
}
export function mediaFullHD(str, ...args) {
    return withTheme(mediaFrom, fullhd, str, ...args);
}
export function mediaUntilFullHD(str, ...args) {
    return mediaUntil(fullhd - 1, str, ...args);
}
