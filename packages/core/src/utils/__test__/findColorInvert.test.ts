import findColorInvert from '../findColorInvert';
import theme from '../../theme';

describe('utils findColorInvert', () => {
  it('white to black', () => {
    expect(findColorInvert(theme, '#fff')).toEqual('#0a0a0a');
  });
  it('black to white', () => {
    expect(findColorInvert(theme, '#000')).toEqual('#ffffff');
  });
});
