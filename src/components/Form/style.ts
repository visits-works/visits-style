
export interface InputProps {
  name: string;
  value?: string | number;
  onChange: () => void;
  onBlur: () => void;
}

export default `
  font-size: 1em;
  position: relative;
  text-align: left;
  clear: both;
  color: inherit;

  &[disabeld] {
    box-shadow: none;
  }
  &[readonly] {
    box-shadow: none;
  }
`;
