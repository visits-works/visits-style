import findColorInvert from '../findColorInvert';

describe('utils findColorInvert', () => {
  it('white to black', () => {
    expect(findColorInvert('#fff')).toEqual('#0a0a0a');
  });
  it('black to white', () => {
    expect(findColorInvert('#000')).toEqual('#ffffff');
  });
});
