import { PureComponent } from 'react';
import { InputProps } from './style';
interface Props extends InputProps {
    placeholder?: string;
    options: Array<{
        id: string | number;
        name: string;
    }>;
}
export default class Select extends PureComponent<Props> {
    static defaultProps: {
        name: null;
        placeholder: null;
        onChange: () => void;
        options: never[];
    };
    render(): JSX.Element;
}
export {};
