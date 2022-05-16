export type Scheme = 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info';

export type Shape = 'squircle' | 'rectangle' | 'ellipse' | 'circle' | 'link';
export type Shade = 'dot' | 'bar' | 'round' | 'squid' | 'circle' | 'spread';
export type SwitchStyle = 'inward' | 'outward';
export type Direction = 'horizontal' | 'vertical';
export type TypographyType = 'paragraph' | 'heading' | 'subheading' | 'title' | 'subtitle';

export type Option = {
    value: string | number;
    label: string;
    group?: OptionGroup;
    disabled?: boolean;
    children?: Option[];
};

export type OptionGroup = string;