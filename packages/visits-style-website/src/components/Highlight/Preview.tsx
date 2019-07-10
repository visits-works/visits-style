import React from 'react';
import styled from 'styled-components';
import { withLive } from 'react-live';

// const compileES5 = (
//   code,
// ) => Babel.transform(code, {presets: ['es2015', 'react']}).code;

// // eslint-disable-next-line no-undef
// const compileES6 = code => Babel.transform(code, {presets: ['react']}).code;

const PreviewWrapper = styled.div`
  min-height: 3.25rem;
  background: white;
`;

const Playground = styled.div`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #1e1e1e;
  margin: 0 auto;
`;

function Preview({ live }: any) {
  const Element = live.element;
  return (
    <PreviewWrapper>
      <Playground>
        {Element ? <Element /> : null}
      </Playground>
    </PreviewWrapper>
  );
}

export default withLive(Preview);
