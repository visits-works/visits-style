import { ThemeType } from '../types';

interface Props {
  theme: ThemeType;
}

export function mediaMobile({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.mobile}px)`;
}

export function mediaTablet({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.tablet}px)`;
}

export function mediaDesktop({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.desktop}px)`;
}

export function mediaFullHD({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.fullhd}px)`;
}

export function mediaUntilFullHD({ theme }: Props) {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media (min-width: ${theme.fullhd}px)`;
}
