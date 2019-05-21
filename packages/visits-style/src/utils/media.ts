import { ThemeType } from '../types';

interface Props {
  theme: ThemeType;
}

export function mediaMobile({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.media.mobile})`;
}

export function mediaTablet({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.media.tablet})`;
}

export function mediaDesktop({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.media.desktop})`;
}

export function mediaFullHD({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.media.fullhd})`;
}

export function mediaUntilFullHD({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media (min-width: ${theme.media.fullhd})`;
}
