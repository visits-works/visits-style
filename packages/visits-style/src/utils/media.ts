import { ThemeType } from '../types';

interface Props {
  theme: ThemeType;
}

export function mediaMobile({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.mobile})`;
}

export function mediaTablet({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.tablet})`;
}

export function mediaDesktop({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.desktop})`;
}

export function mediaFullHD({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.fullhd})`;
}

export function mediaUntilFullHD({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media (min-width: ${theme.fullhd})`;
}
