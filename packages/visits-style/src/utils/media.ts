import { ThemeType } from '../types';

interface Props {
  theme: ThemeType;
}

export function mediaMobile({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.variable.mobile})`;
}

export function mediaTablet({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.variable.tablet})`;
}

export function mediaDesktop({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.variable.desktop})`;
}

export function mediaFullHD({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.variable.fullhd})`;
}

export function mediaUntilFullHD({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media (min-width: ${theme.variable.fullhd})`;
}
