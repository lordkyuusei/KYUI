export type Scheme = 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info';

export type Shape = 'squircle' | 'rectangle' | 'ellipse' | 'circle' | 'link';

export type SwitchStyle = 'inward' | 'outward';
export type Direction = 'horizontal' | 'vertical';

export type Option = {
    value: string | number;
    label: string;
    group?: OptionGroup;
    disabled?: boolean;
    children?: Option[];
};

export type OptionGroup = string;