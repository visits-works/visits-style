import { ThemeType } from '../types';

interface Props {
  theme: ThemeType;
}

export function mediaMobile({ theme }: Props) {
  return `@media screen and (max-width: ${theme.responsive ? 0 : theme.mobile}px)`;
}

export function mediaTablet({ theme }: Props) {
  return `@media screen and (min-width: ${theme.responsive ? 0 : theme.tablet}px)`;
}

export function mediaDesktop({ theme }: Props) {
  return `@media screen and (min-width: ${theme.responsive ? 0 : theme.desktop}px)`;
}

export function mediaFullHD({ theme }: Props) {
  return `@media screen and (min-width: ${theme.responsive ? 0 : theme.fullhd}px)`;
}

export function mediaUntilFullHD({ theme }: Props) {
  return `@media screen and (max-width: ${theme.responsive ? 0 : theme.fullhd}px)`;
}
