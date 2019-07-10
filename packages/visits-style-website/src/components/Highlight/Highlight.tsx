import React from 'react';
import styled from 'styled-components';
import { Editor } from 'react-live';
import { Language } from 'prism-react-renderer';
import { HighlightStyle } from './styles';

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
    <Wrapper
      code={code}
      // @ts-ignore
      onChange={handleChange}
      disabled={!live}
      language={lang}
      noInline
    />
  );
}

const Wrapper = styled(Editor)`
  ${HighlightStyle}
  margin-bottom: 0.725rem;
  margin-left: -0.725rem;
  margin-right: -0.725rem;
  max-height: 300px;
  overflow-y: auto;
  outline: none;
`;

