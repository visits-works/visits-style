
export const ANIMATION_DONE_EVENT = 'anime:done';
export const dispatchAnimeDone = (node: HTMLElement) => node.dispatchEvent(new Event(ANIMATION_DONE_EVENT));
export const addAnimeListener = (node: HTMLElement, done: any) => node.addEventListener(ANIMATION_DONE_EVENT, done);
