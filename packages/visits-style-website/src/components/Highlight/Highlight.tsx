import React from 'react';
import styled from 'styled-components';
import { Editor } from 'react-live';
import { Language } from 'prism-react-renderer';

interface Props {
  children: string;
  live?: boolean;
  onChange?: (code: string) => void;
  onError?: (e: any) => void;
  lang?: Language;
}
export default function HighlightCode({ live, children, onChange, lang }: Props) {
  const handleChange = (value: string) => {
    if (onChange) onChange(value);
  };
  const code = children.trim();
  return (
    <Container>
      <Editor
        code={code}
        // @ts-ignore
        onChange={handleChange}
        disabled={!live}
        language={lang}
      />
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 0.725rem;
  max-width: calc(100% + 1.5rem);
  max-height: 300px;
  overflow: auto;
  outline: none;
  background-color: rgb(40, 44, 52);
  color: rgb(255, 255, 255);

  textarea {
    &:focus {
      outline: none;
    }
  }
`;

