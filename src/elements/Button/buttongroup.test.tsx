import { render } from '@testing-library/react';

import ButtonGroup from './ButtonGroup';
import Button from '.';

describe('ButtonGroup', () => {
  it('rendered without error', () => {
    render(
      <ButtonGroup>
        <Button>button1</Button>
        <Button>button2</Button>
        <Button>button3</Button>
      </ButtonGroup>
    );
  });
});
