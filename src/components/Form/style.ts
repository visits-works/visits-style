
export interface InputProps {
  name: string;
  value?: string | number;
  onChange: () => void;
  onBlur: () => void;
  disabled?: boolean;
}

export default `
  font-size: 1em;
  text-align: left;
  color: inherit;

  &:disabled {
    box-shadow: none;
    background-color: rgb(128, 128, 128, 0.15);
  }
  &:readonly {
    box-shadow: none;
    background-color: rgb(128, 128, 128, 0.15);
  }
`;
