import type { Interpolation, ExecutionContext } from 'styled-components/dist/types';

export function mediaMobile({ theme }: ExecutionContext): Interpolation<object> {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.media.mobile})`;
}

export function mediaTablet({ theme }: ExecutionContext): Interpolation<object> {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.media.tablet})`;
}

export function mediaDesktop({ theme }: ExecutionContext): Interpolation<object> {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.media.desktop})`;
}

export function mediaFullHD({ theme }: ExecutionContext): Interpolation<object> {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (max-width: ${theme.media.fullhd})`;
}

export function mediaUntilFullHD({ theme }: ExecutionContext): Interpolation<object> {
  if (!theme.responsive) return '@media (max-width: 0)';
  return `@media screen and (min-width: ${theme.media.fullhd})`;
}
