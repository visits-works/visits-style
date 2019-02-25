import { ThemeType } from '../types';

interface Props {
  theme: ThemeType;
}

export function mediaMobile({ theme }: Props) {
  return `@media screen and (max-width: ${theme.responsive ? theme.mobile : 0}px)`;
}

export function mediaTablet({ theme }: Props) {
  return `@media screen and (min-width: ${theme.responsive ? theme.tablet : 0}px)`;
}

export function mediaDesktop({ theme }: Props) {
  return `@media screen and (min-width: ${theme.responsive ? theme.desktop : 0}px)`;
}

export function mediaFullHD({ theme }: Props) {
  return `@media screen and (min-width: ${theme.responsive ? theme.fullhd : 0}px)`;
}

export function mediaUntilFullHD({ theme }: Props) {
  return `@media screen and (max-width: ${theme.responsive ? theme.fullhd : 0}px)`;
}
