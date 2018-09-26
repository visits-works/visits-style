export const ANIMATION_DONE_EVENT = 'anime:done';
export const dispatchAnimeDone = node => node.dispatchEvent(new Event(ANIMATION_DONE_EVENT));
export const addAnimeListener = (node, done) => node.addEventListener(ANIMATION_DONE_EVENT, done);