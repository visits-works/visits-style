import { SizeType } from '../../types';
interface Props {
    size?: SizeType;
    full?: boolean;
    headerStyle?: any;
    bordered?: boolean;
    borderless?: boolean;
    striped?: boolean;
    hover?: boolean;
}
declare const Table: import("styled-components").StyledComponent<"table", any, Props, never>;
export default Table;
