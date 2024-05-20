import PropTypes from 'prop-types';
export type ButtonVariant = 'primary' | 'secondary' | 'filled' | 'tertiary' | 'link' | 'affirmative' | 'destructive' | string;
export type Theme = 'light' | 'dark' | string;
export type Size = 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | string;
export type ButtonType = 'button' | 'submit' | 'reset' | 'link' | string;
export type NotificationState = 'error' | 'confirmation' | 'alert' | 'information' | string;
export type Color = 'dark-blue' | 'ocean-blue' | 'teal' | string;
export type AlignDirection = 'start' | 'end';
export type ResponsiveAlignProp =
  | {
      sm: AlignDirection;
    }
  | {
      md: AlignDirection;
    }
  | {
      lg: AlignDirection;
    }
  | {
      xl: AlignDirection;
    }
  | {
      xxl: AlignDirection;
    }
  | Record<string, AlignDirection>;
export type AlignType = AlignDirection | ResponsiveAlignProp;
export declare const alignPropType: PropTypes.Requireable<NonNullable<object | AlignDirection | null | undefined>>;
export type RootCloseEvent = 'click' | 'mousedown';
export type GapValue = 0 | 1 | 2 | 3 | 4 | 5 | number;
export interface PopperRef {
  state: State | undefined;
  outOfBoundaries: boolean;
  placement: Placement | undefined;
  scheduleUpdate?: () => void;
  strategy: UsePopperOptions['strategy'];
}
