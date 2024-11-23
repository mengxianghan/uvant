import * as vue from 'vue';
import { ExtractPropTypes, PropType, InjectionKey } from 'vue';
import * as _uni_helper_uni_app_types from '@uni-helper/uni-app-types';
import { ImageMode } from '@uni-helper/uni-app-types';

type Numeric = number | string;

type Mod = string | {
    [key: string]: any;
};
type Mods = Mod | Mod[];

type Interceptor = (...args: any[]) => Promise<boolean> | boolean | undefined | void;

declare const actionBarName: string;
declare const actionBarBem: (el?: Mods, mods?: Mods) => Mods;
declare const ACTION_BAR_KEY: unique symbol;
declare const actionBarProps: {
    placeholder: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    fixed: {
        type: BooleanConstructor;
        default: true;
    };
};
type ActionBarProps = ExtractPropTypes<typeof actionBarProps>;

declare const buttonType: readonly ["default", "primary", "success", "warning", "danger"];
type ButtonType = (typeof buttonType)[number];
declare const buttonSize: readonly ["large", "normal", "small", "mini"];
type ButtonSize = (typeof buttonSize)[number];
declare const buttonIconPosition: readonly ["left", "right"];
type ButtonIconPosition = (typeof buttonIconPosition)[number];

declare const actionBarButtonName: string;
declare const actionBarButtonBem: (el?: Mods, mods?: Mods) => Mods;
declare const actionBarButtonProps: {
    text: StringConstructor;
    type: PropType<ButtonType>;
    color: StringConstructor;
    icon: StringConstructor;
    disabled: BooleanConstructor;
    loading: BooleanConstructor;
};
type ActionBarButtonProps = ExtractPropTypes<typeof actionBarButtonProps>;
declare const actionBarButtonEmits: {
    click: (evt: MouseEvent) => boolean;
};
type ActionBarButtonEmits = typeof actionBarButtonEmits;

declare const actionBarIconName: string;
declare const actionBarIconBem: (el?: Mods, mods?: Mods) => Mods;
declare const actionBarIconProps: {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    badgeProps: ObjectConstructor;
    iconPrefix: StringConstructor;
};
type ActionBarIconProps = ExtractPropTypes<typeof actionBarIconProps>;
declare const actionBarIconEmits: {
    click: (evt: MouseEvent) => boolean;
};
type ActionBarIconEmits = typeof actionBarIconEmits;

interface ActionSheetAction {
    icon?: string;
    name?: string;
    color?: string;
    subname?: string;
    loading?: boolean;
    disabled?: boolean;
    callback?: (action: ActionSheetAction) => void;
    className?: unknown;
}

declare const badgePosition: string[];
type BadgePosition = (typeof badgePosition)[number];

declare const cardName: string;
declare const cardBem: (el?: Mods, mods?: Mods) => Mods;
declare const cardProps: {
    tag: StringConstructor;
    num: (NumberConstructor | StringConstructor)[];
    desc: StringConstructor;
    thumb: StringConstructor;
    title: StringConstructor;
    price: (NumberConstructor | StringConstructor)[];
    centered: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    currency: {
        type: vue.PropType<string>;
        default: string;
    };
    thumbLink: StringConstructor;
    originPrice: (NumberConstructor | StringConstructor)[];
};
type CardProps = ExtractPropTypes<typeof cardProps>;
declare const cardEmits: {
    clickThumb: (evt: MouseEvent) => boolean;
};
type CardEmits = typeof cardEmits;

declare const cellArrowDirection: readonly ["left", "right", "up", "down"];
type CellArrowDirection = (typeof cellArrowDirection)[number];
declare const cellSize: readonly ["normal", "large"];
type CellSize = (typeof cellSize)[number];

declare const cellName: string;
declare const cellBem: (el?: Mods, mods?: Mods) => Mods;
declare const cellProps: {
    icon: StringConstructor;
    size: PropType<CellSize>;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    iconPrefix: StringConstructor;
    arrowDirection: PropType<CellArrowDirection>;
    required: {
        type: PropType<boolean | "auto">;
        default: any;
    };
    clickable: {
        type: PropType<boolean | null>;
        default: any;
    };
};
type CellProps = ExtractPropTypes<typeof cellProps>;
declare const cellEmits: string[];
type CellEmits = typeof cellEmits;

declare const cellGroupName: string;
declare const cellGroupBem: (el?: Mods, mods?: Mods) => Mods;
declare const cellGroupProps: {
    title: StringConstructor;
    inset: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
};
type CellGroupProps = ExtractPropTypes<typeof cellGroupProps>;

declare const checkboxShape: readonly ["square", "round"];
type CheckboxShape = (typeof checkboxShape)[number];
declare const checkboxDirection: readonly ["horizontal", "vertical"];
type CheckboxDirection = (typeof checkboxDirection)[number];
declare const checkboxLabelPosition: readonly ["left", "right"];
type CheckboxLabelPosition = (typeof checkboxLabelPosition)[number];

declare const checkboxName: string;
declare const checkboxBem: (el?: Mods, mods?: Mods) => Mods;
declare const checkboxProps: {
    name: (NumberConstructor | StringConstructor)[];
    shape: PropType<CheckboxShape>;
    disabled: BooleanConstructor;
    labelDisabled: BooleanConstructor;
    labelPosition: PropType<CheckboxLabelPosition>;
    iconSize: (NumberConstructor | StringConstructor)[];
    checkedColor: StringConstructor;
    bindGroup: {
        type: BooleanConstructor;
        default: true;
    };
    indeterminate: BooleanConstructor;
};
type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
declare const checkboxEmits: {
    change: (val: boolean) => boolean;
    click: () => boolean;
    toggle: () => boolean;
};
type CheckboxEmits = typeof checkboxEmits;

declare const checkboxGroupName: string;
declare const checkboxGroupBem: (el?: Mods, mods?: Mods) => Mods;
declare const CHECKBOX_KEY: unique symbol;
declare const checkboxGroupProps: {
    max: (NumberConstructor | StringConstructor)[];
    shape: {
        type: PropType<"round" | "square">;
        default: "round" | "square";
    };
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<CheckboxDirection>;
    checkedColor: StringConstructor;
};
type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
declare const checkboxGroupEmits: {
    change: (val: Array<Numeric>) => boolean;
};
type CheckboxGroupEmits = typeof checkboxGroupEmits;

declare const circleBem: (el?: Mods, mods?: Mods) => Mods;
declare const circleName: string;
declare const circleProps: {
    currentRate: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: vue.PropType<"2d">;
        default: "2d";
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    layerColor: {
        type: vue.PropType<string>;
        default: string;
    };
    fill: StringConstructor;
    speed: {
        type: NumberConstructor;
        default: number;
    };
    text: StringConstructor;
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    strokeLinecap: {
        type: vue.PropType<"round" | "square" | "butt">;
        default: "round" | "square" | "butt";
    };
    clockwise: {
        type: BooleanConstructor;
        default: true;
    };
    startPosition: {
        type: vue.PropType<"left" | "right" | "top" | "bottom">;
        default: "left" | "right" | "top" | "bottom";
    };
};
type CircleProps = ExtractPropTypes<typeof circleProps>;
declare const circleEmits: {
    'update:currentRate': (val: number) => boolean;
};
type CircleEmits = typeof circleEmits;

declare const circleType: readonly ["2d"];
type CircleType = (typeof circleType)[number];
declare const circleStrokeLinecap: readonly ["round", "square", "butt"];
type CircleStrokeLinecap = (typeof circleStrokeLinecap)[number];
declare const circleStartPosition: readonly ["top", "bottom", "left", "right"];
type CircleStartPosition = (typeof circleStartPosition)[number];

declare const colName: string;
declare const colBem: (el?: Mods, mods?: Mods) => Mods;
declare const colProps: {
    span: (NumberConstructor | StringConstructor)[];
    offset: (NumberConstructor | StringConstructor)[];
};
type ColProps = ExtractPropTypes<typeof colProps>;
declare const colEmits: {
    click: (evt: MouseEvent) => boolean;
};
type ColEmits = typeof colEmits;

declare const dividerName: string;
declare const dividerBem: (el?: Mods, mods?: Mods) => Mods;
declare const dividerProps: {
    dashed: BooleanConstructor;
    hairline: {
        type: BooleanConstructor;
        default: true;
    };
    vertical: BooleanConstructor;
    contentPosition: {
        type: vue.PropType<"left" | "right" | "center">;
        default: "left" | "right" | "center";
    };
    customStyle: vue.PropType<unknown>;
    customClass: vue.PropType<unknown>;
};
type DividerProps = ExtractPropTypes<typeof dividerProps>;
declare const dividerEmits: {
    click: (evt: MouseEvent) => boolean;
};
type DividerEmits = typeof dividerEmits;

declare const dividerContentPosition: readonly ["left", "center", "right"];
type DividerContentPosition = (typeof dividerContentPosition)[number];

declare const emptyName: string;
declare const emptyBem: (el?: Mods, mods?: Mods) => Mods;
declare const PRESET_IMAGES: {
    error: string;
    search: string;
    network: string;
    default: string;
};
declare const emptyProps: {
    image: {
        type: PropType<string>;
        default: string;
    };
    imageSize: PropType<Numeric | [Numeric, Numeric]>;
    description: StringConstructor;
};
type EmptyProps = ExtractPropTypes<typeof emptyProps>;

declare const fieldName: string;
declare const fieldBem: (el?: Mods, mods?: Mods) => Mods;
declare const fieldProps: {
    label: StringConstructor;
    name: StringConstructor;
    id: StringConstructor;
    type: {
        type: PropType<"number" | "tel" | "text" | "idcard" | "digit" | "safe-password" | "nickname" | "textarea">;
        default: "number" | "tel" | "text" | "idcard" | "digit" | "safe-password" | "nickname" | "textarea";
    };
    fixed: BooleanConstructor;
    focus: BooleanConstructor;
    size: StringConstructor;
    maxlength: {
        type: NumberConstructor;
        default: number;
    };
    min: NumberConstructor;
    max: NumberConstructor;
    placeholder: StringConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    disabled: BooleanConstructor;
    colon: BooleanConstructor;
    required: BooleanConstructor;
    center: BooleanConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: PropType<string>;
        default: string;
    };
    clearTrigger: {
        type: PropType<"focus" | "always">;
        default: "focus" | "always";
    };
    clickable: BooleanConstructor;
    isLink: BooleanConstructor;
    showWordLimit: BooleanConstructor;
    error: BooleanConstructor;
    errorMessage: StringConstructor;
    errorMessageAlign: {
        type: PropType<string>;
        default: string;
    };
    arrowDirection: {
        type: PropType<string>;
        default: string;
    };
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelAlign: {
        type: PropType<string>;
        default: string;
    };
    inputAlign: {
        type: PropType<"left" | "right" | "center" | "top">;
        default: "left" | "right" | "center" | "top";
    };
    autosize: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    confirmType: {
        type: PropType<string>;
        default: string;
    };
    confirmHold: BooleanConstructor;
    holdKeyboard: BooleanConstructor;
    cursorSpacing: {
        type: NumberConstructor;
        default: number;
    };
    adjustPosition: {
        type: BooleanConstructor;
        default: true;
    };
    showConfirmBar: {
        type: BooleanConstructor;
        default: true;
    };
    selectionStart: {
        type: NumberConstructor;
        default: number;
    };
    selectionEnd: {
        type: NumberConstructor;
        default: number;
    };
    cursor: {
        type: NumberConstructor;
        default: number;
    };
    alwaysEmbed: BooleanConstructor;
    disableDefaultPadding: {
        type: BooleanConstructor;
        default: true;
    };
    iconPrefix: StringConstructor;
    placeholderClass: StringConstructor;
    autoBlur: BooleanConstructor;
    ignoreCompositionEvent: {
        type: BooleanConstructor;
        default: true;
    };
    safePasswordCertPath: StringConstructor;
    safePasswordLength: NumberConstructor;
    safePasswordTimeStamp: NumberConstructor;
    safePasswordNonce: StringConstructor;
    safePasswordSalt: StringConstructor;
    safePasswordCustomHash: StringConstructor;
    randomNumber: BooleanConstructor;
    controlled: BooleanConstructor;
    alwaysSystem: BooleanConstructor;
    inputmode: {
        type: PropType<string>;
        default: string;
    };
    adjustKeyBoardTo: {
        type: PropType<string>;
        default: string;
    };
    password: BooleanConstructor;
    formatter: PropType<(value: Numeric) => string>;
    formatTrigger: {
        type: PropType<"onBlur" | "onChange">;
        default: "onBlur" | "onChange";
    };
    readonly: BooleanConstructor;
};
type FieldProps = ExtractPropTypes<typeof fieldProps>;
declare const fieldEmits: {
    input: (val: string) => boolean;
    focus: (evt: Event) => boolean;
    blur: (evt: Event) => boolean;
    change: (val: string) => boolean;
    confirm: (evt: Event) => boolean;
    clear: () => boolean;
    clickInput: (evt: Event) => boolean;
    clickLeftIcon: (evt: Event) => boolean;
    clickRightIcon: (evt: Event) => boolean;
    keyboardheightchange: (evt: Event) => boolean;
    linechange: (evt: Event) => boolean;
    nicknamereview: (evt: Event) => boolean;
    click: (evt: Event) => boolean;
};
type FieldEmits = typeof fieldEmits;

declare const fieldTextAlign: readonly ["left", "center", "right", "top"];
type FieldTextAlign = (typeof fieldTextAlign)[number];
declare const fieldClearTrigger: readonly ["always", "focus"];
type FieldClearTrigger = (typeof fieldClearTrigger)[number];
declare const fieldFormatTrigger: readonly ["onBlur", "onChange"];
type FieldFormatTrigger = (typeof fieldFormatTrigger)[number];
declare const fieldValidateTrigger: readonly ["onBlur", "onChange", "onSubmit"];
type FieldValidateTrigger = (typeof fieldValidateTrigger)[number];
declare const fieldType: readonly ["text", "number", "idcard", "digit", "tel", "safe-password", "nickname", "textarea"];
type FieldType = (typeof fieldType)[number];

type FixedPosition = 'top' | 'bottom';
declare const name: string;
declare const bem: (el?: Mods, mods?: Mods) => Mods;
declare const fixedProps: {
    disabled: BooleanConstructor;
    placeholder: BooleanConstructor;
    position: {
        type: vue.PropType<FixedPosition>;
        default: FixedPosition;
    };
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
};

declare const floatingBubbleAxis: string[];
type FloatingBubbleAxis = (typeof floatingBubbleAxis)[number];
declare const floatingBubbleMagnetic: string[];
type FloatingBubbleMagnetic = (typeof floatingBubbleMagnetic)[number];
interface FloatingBubbleOffset {
    x: number;
    y: number;
}
interface FloatingBubbleBoundary {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

declare const floatingBubbleName: string;
declare const floatingBubbleBem: (el?: Mods, mods?: Mods) => Mods;
declare const floatingBubbleProps: {
    gap: {
        type: NumberConstructor;
        default: number;
    };
    icon: StringConstructor;
    axis: {
        type: PropType<string>;
        default: string;
    };
    magnetic: PropType<FloatingBubbleMagnetic>;
};
type FloatingBubbleProps = ExtractPropTypes<typeof floatingBubbleProps>;
declare const floatingBubbleEmits: {
    click: (evt: MouseEvent) => boolean;
    offsetChange: (val: object) => boolean;
};
type FloatingBubbleEmits = typeof floatingBubbleEmits;

declare const floatingPanelName: string;
declare const floatingPanelBem: (el?: Mods, mods?: Mods) => Mods;
declare const floatingPanelProps: {
    anchors: {
        type: vue.PropType<number[]>;
        default: () => number[];
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    contentDraggable: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
};
type FloatingPanelProps = ExtractPropTypes<typeof floatingPanelProps>;

interface GridProvide {
    props: GridProps;
}

declare const gridName: string;
declare const gridBem: (el?: Mods, mods?: Mods) => Mods;
declare const gridProps: {
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    iconSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    gutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    center: {
        type: BooleanConstructor;
        default: true;
    };
    square: BooleanConstructor;
    clickable: BooleanConstructor;
    direction: {
        type: vue.PropType<"vertical" | "horizontal">;
        default: "vertical" | "horizontal";
    };
    reverse: BooleanConstructor;
};
type GridProps = ExtractPropTypes<typeof gridProps>;
declare const GRID_KEY: InjectionKey<GridProvide>;

declare const gridItemName: string;
declare const gridItemBem: (el?: Mods, mods?: Mods) => Mods;
declare const gridItemProps: {
    text: StringConstructor;
    icon: StringConstructor;
    iconPrefix: StringConstructor;
    iconColor: StringConstructor;
    dot: BooleanConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    badgeProps: ObjectConstructor;
};
type GridItemProps = ExtractPropTypes<typeof gridItemProps>;
declare const gridItemEmits: {
    click: (evt: MouseEvent) => boolean;
};
type GridItemEmits = typeof gridItemEmits;

declare const iconName: string;
declare const iconBem: (el?: Mods, mods?: Mods) => Mods;
declare const iconProps: {
    name: {
        type: vue.PropType<string>;
        default: string;
    };
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
    badge: (NumberConstructor | StringConstructor)[];
    badgeProps: ObjectConstructor;
    color: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    classPrefix: {
        type: vue.PropType<string>;
        default: string;
    };
    customClass: vue.PropType<unknown>;
    customStyle: vue.PropType<unknown>;
};
type IconProps = ExtractPropTypes<typeof iconProps>;
declare const iconEmits: string[];
type IconEmits = typeof iconEmits;

declare const imageName: string;
declare const imageBem: (el?: Mods, mods?: Mods) => Mods;
declare const imageProps: {
    src: StringConstructor;
    fit: {
        type: vue.PropType<_uni_helper_uni_app_types.ImageMode>;
        default: _uni_helper_uni_app_types.ImageMode;
    };
    alt: StringConstructor;
    width: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    radius: (NumberConstructor | StringConstructor)[];
    round: BooleanConstructor;
    block: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    showError: {
        type: BooleanConstructor;
        default: true;
    };
    showLoading: {
        type: BooleanConstructor;
        default: true;
    };
    errorIcon: {
        type: vue.PropType<string>;
        default: string;
    };
    loadingIcon: {
        type: vue.PropType<string>;
        default: string;
    };
    iconSize: (NumberConstructor | StringConstructor)[];
    iconPrefix: StringConstructor;
    webp: BooleanConstructor;
    aspectRatio: NumberConstructor;
    autosize: BooleanConstructor;
    customClass: vue.PropType<unknown>;
};
type ImageProps = ExtractPropTypes<typeof imageProps>;
declare const imageEmits: {
    click: (evt: MouseEvent) => boolean;
    load: (evt: MouseEvent) => boolean;
    error: (evt: MouseEvent) => boolean;
};
type ImageEmits = typeof imageEmits;

type ImageFit = ImageMode;

declare const loadingName: string;
declare const loadingBem: (el?: Mods, mods?: Mods) => Mods;
declare const loadingProps: {
    color: StringConstructor;
    type: {
        type: vue.PropType<string>;
        default: string;
    };
    size: (NumberConstructor | StringConstructor)[];
    textSize: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
    vertical: BooleanConstructor;
};
type LoadingProps = ExtractPropTypes<typeof loadingProps>;

declare const loadingType: string[];
type LoadingType = (typeof loadingType)[number];

declare const noticeBarMode: readonly ["closeable", "link"];
type NoticeBarMode = (typeof noticeBarMode)[number];

declare const noticeBarName: string;
declare const noticeBarBem: (el?: Mods, mods?: Mods) => Mods;
declare const noticeBarProps: {
    text: StringConstructor;
    mode: PropType<NoticeBarMode>;
    color: StringConstructor;
    delay: {
        type: NumberConstructor;
        default: number;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    leftIcon: StringConstructor;
    wrapable: BooleanConstructor;
    background: StringConstructor;
    scrollable: {
        type: PropType<boolean | null>;
        default: any;
    };
};
type NoticeBarProps = ExtractPropTypes<typeof noticeBarProps>;
declare const noticeBarEmits: {
    close: (evt: MouseEvent) => boolean;
    replay: () => boolean;
};
type NoticeBarEmits = typeof noticeBarEmits;

declare const numberKeyboardTheme: readonly ["default", "custom"];
type NumberKeyboardTheme = (typeof numberKeyboardTheme)[number];
declare const keyType: readonly ["", "delete", "extra", "close"];
type KeyType = (typeof keyType)[number];
interface KeyConfig {
    text?: Numeric;
    type?: KeyType;
    color?: string;
    wider?: boolean;
}

declare const numberKeyboardName: string;
declare const numberKeyboardBem: (el?: Mods, mods?: Mods) => Mods;
declare const numberKeyboardProps: {
    title: StringConstructor;
    theme: {
        type: PropType<"default" | "custom">;
        default: "default" | "custom";
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: (ObjectConstructor | StringConstructor)[];
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    transition: {
        type: BooleanConstructor;
        default: true;
    };
    blurOnClose: {
        type: BooleanConstructor;
        default: true;
    };
    showDeleteKey: {
        type: BooleanConstructor;
        default: true;
    };
    randomKeyOrder: BooleanConstructor;
    closeButtonText: StringConstructor;
    deleteButtonText: StringConstructor;
    closeButtonLoading: BooleanConstructor;
    hideOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    extraKey: {
        type: PropType<string | string[]>;
        default: string;
    };
};
type NumberKeyboardProps = ExtractPropTypes<typeof numberKeyboardProps>;
declare const numberKeyboardKeyProps: {
    type: PropType<KeyType>;
    text: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    wider: BooleanConstructor;
    large: BooleanConstructor;
    loading: BooleanConstructor;
};
type NumberKeyboardKeyProps = ExtractPropTypes<typeof numberKeyboardKeyProps>;

declare const overlayName: string;
declare const overlayBem: (el?: Mods, mods?: Mods) => Mods;
declare const overlayProps: {
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: {
        type: NumberConstructor;
        default: number;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    customClass: vue.PropType<unknown>;
    customStyle: vue.PropType<unknown>;
    destroyOnClose: BooleanConstructor;
};
type OverlayProps = ExtractPropTypes<typeof overlayProps>;
declare const overlayEmits: {
    click: (evt: MouseEvent) => boolean;
};
type OverlayEmits = typeof overlayEmits;

declare const paginationName: string;
declare const paginationBem: (el?: Mods, mods?: Mods) => Mods;
declare const paginationT: (path: string, ...args: unknown[]) => any;
declare const paginationProps: {
    mode: {
        type: vue.PropType<"simple" | "multi">;
        default: "simple" | "multi";
    };
    prevText: StringConstructor;
    nextText: StringConstructor;
    pageCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    totalItems: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showPageSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    forceEllipses: BooleanConstructor;
    showPrevButton: {
        type: BooleanConstructor;
        default: true;
    };
    showNextButton: {
        type: BooleanConstructor;
        default: true;
    };
};
type PaginationProps = ExtractPropTypes<typeof paginationProps>;
declare const paginationEmits: {
    change: (val: number) => boolean;
};
type PaginationEmits = typeof paginationEmits;

declare const paginationMode: readonly ["simple", "multi"];
type PaginationMode = (typeof paginationMode)[number];

declare const passwordInputName: string;
declare const passwordInputBem: (el?: Mods, mods?: Mods) => Mods;
declare const passwordInputProps: {
    info: StringConstructor;
    mask: {
        type: BooleanConstructor;
        default: true;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    length: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    focused: BooleanConstructor;
    errorInfo: StringConstructor;
};
type PasswordInputProps = ExtractPropTypes<typeof passwordInputProps>;

declare const popupName: string;
declare const popupBem: (el?: Mods, mods?: Mods) => Mods;
declare const popupProps: {
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    position: {
        type: vue.PropType<string>;
        default: string;
    };
    overlayClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    overlayStyle: ObjectConstructor;
    duration: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    round: BooleanConstructor;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    closeable: BooleanConstructor;
    closeIcon: {
        type: vue.PropType<string>;
        default: string;
    };
    closeIconPosition: {
        type: vue.PropType<string>;
        default: string;
    };
    beforeClose: {
        type: FunctionConstructor;
        default: () => boolean;
    };
    iconPrefix: StringConstructor;
    transition: StringConstructor;
    safeAreaInsetTop: BooleanConstructor;
    safeAreaInsetBottom: BooleanConstructor;
    customClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    customStyle: (ObjectConstructor | StringConstructor)[];
    destroyOnClose: BooleanConstructor;
};
type PopupProps = ExtractPropTypes<typeof popupProps>;
declare const popupEmits: {
    open: () => boolean;
    close: () => boolean;
    opened: () => boolean;
    closed: () => boolean;
    keydown: () => boolean;
    clickOverlay: (evt: MouseEvent) => boolean;
    clickCloseIcon: (evt: MouseEvent) => boolean;
};
type PopupEmits = typeof popupEmits;

declare const popupPosition: string[];
type PopupPosition = (typeof popupPosition)[number];

declare const progressName: string;
declare const progressBem: (el?: Mods, mods?: Mods) => Mods;
declare const progressProps: {
    color: StringConstructor;
    inactive: BooleanConstructor;
    pivotText: StringConstructor;
    textColor: StringConstructor;
    showPivot: {
        type: BooleanConstructor;
        default: true;
    };
    pivotColor: StringConstructor;
    trackColor: StringConstructor;
    strokeWidth: (NumberConstructor | StringConstructor)[];
    percentage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: Numeric) => boolean;
    };
};
type ProgressProps = ExtractPropTypes<typeof progressProps>;

declare const radioLabelPosition: string[];
type RadioLabelPosition = (typeof radioLabelPosition)[number];
declare const radioShape: readonly ["square", "round", "dot"];
type RadioShape = (typeof radioShape)[number];
declare const radioDirection: readonly ["horizontal", "vertical"];
type RadioDirection = (typeof radioDirection)[number];

declare const radioName: string;
declare const radioBem: (el?: Mods, mods?: Mods) => Mods;
declare const radioProps: {
    name: (NumberConstructor | StringConstructor)[];
    shape: PropType<RadioShape>;
    disabled: BooleanConstructor;
    labelDisabled: BooleanConstructor;
    labelPosition: PropType<RadioLabelPosition>;
    iconSize: (NumberConstructor | StringConstructor)[];
    checkedColor: StringConstructor;
    bindGroup: {
        type: BooleanConstructor;
        default: true;
    };
};
type RadioProps = ExtractPropTypes<typeof radioProps>;
declare const radioEmits: {
    click: (evt: MouseEvent) => boolean;
    toggle: () => boolean;
    change: (val: Numeric) => val is NonNullable<Numeric>;
};
type RadioEmits = typeof radioEmits;

declare const radioGroupName: string;
declare const radioGroupBem: (el?: Mods, mods?: Mods) => Mods;
declare const RADIO_KEY: unique symbol;
declare const radioGroupProps: {
    disabled: BooleanConstructor;
    direction: PropType<RadioDirection>;
    iconSize: (NumberConstructor | StringConstructor)[];
    checkedColor: StringConstructor;
    shape: PropType<RadioShape>;
};
type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
declare const radioGroupEmits: {
    change: (val: Numeric) => val is NonNullable<Numeric>;
};
type RadioGroupEmits = typeof radioGroupEmits;

declare const rowAlign: readonly ["top", "center", "bottom"];
type RowAlign = (typeof rowAlign)[number];
declare const rowJustify: readonly ["start", "end", "center", "space-around", "space-between"];
type RowJustify = (typeof rowJustify)[number];

declare const rowName: string;
declare const rowBem: (el?: Mods, mods?: Mods) => Mods;
declare const ROW_KEY: unique symbol;
declare const rowProps: {
    wrap: {
        type: BooleanConstructor;
        default: true;
    };
    align: PropType<RowAlign>;
    gutter: {
        type: PropType<string | number | (string | number)[]>;
        default: number;
    };
    justify: PropType<RowJustify>;
};
type RowProps = ExtractPropTypes<typeof rowProps>;
declare const rowEmits: {
    click: (evt: MouseEvent) => boolean;
};
type RowEmits = typeof rowEmits;

declare const searchName: string;
declare const searchBem: (el?: Mods, mods?: Mods) => Mods;
declare const searchProps: {
    label: StringConstructor;
    name: StringConstructor;
    shape: {
        type: vue.PropType<"round" | "square">;
        default: "round" | "square";
    };
    id: StringConstructor;
    background: StringConstructor;
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    placeholder: StringConstructor;
    clearable: {
        type: BooleanConstructor;
        default: true;
    };
    clearIcon: {
        type: vue.PropType<string>;
        default: string;
    };
    clearTrigger: {
        type: vue.PropType<string>;
        default: string;
    };
    autofocus: BooleanConstructor;
    showAction: BooleanConstructor;
    actionText: {
        type: vue.PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    inputAlign: StringConstructor;
    leftIcon: {
        type: vue.PropType<string>;
        default: string;
    };
    rightIcon: StringConstructor;
    formatter: {
        type: FunctionConstructor;
        default: (val: any) => any;
    };
    formatTrigger: {
        type: vue.PropType<string>;
        default: string;
    };
    customStyle: vue.PropType<unknown>;
    customClass: vue.PropType<unknown>;
};
type SearchProps = ExtractPropTypes<typeof searchProps>;

declare const searchShape: readonly ["square", "round"];
type SearchShape = (typeof searchShape)[number];

interface ShareSheetOption {
    name: string;
    icon: string;
    className?: string;
    description?: string;
}
type ShareSheetOptions = ShareSheetOption[] | ShareSheetOption[][];

declare const shareSheetName: string;
declare const shareSheetBem: (el?: Mods, mods?: Mods) => Mods;
declare const shareSheetT: (path: string, ...args: unknown[]) => any;
declare const shareSheetProps: {
    zIndex: (NumberConstructor | StringConstructor)[];
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    duration: NumberConstructor;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    beforeClose: FunctionConstructor;
    overlayStyle: ObjectConstructor;
    overlayClass: vue.PropType<unknown>;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    title: StringConstructor;
    round: {
        type: BooleanConstructor;
        default: true;
    };
    options: {
        type: vue.PropType<(ShareSheetOption | ShareSheetOption[])[]>;
        default: () => (ShareSheetOption | ShareSheetOption[])[];
    };
    cancelText: StringConstructor;
    description: StringConstructor;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
};
type ShareSheetProps = ExtractPropTypes<typeof shareSheetProps>;
declare const shareSheetEmits: {
    select: (option: ShareSheetOption, index: number) => boolean;
    cancel: () => boolean;
};
declare const ShareSheetEmits: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";

declare const sidebarName: string;
declare const sidebarBem: (el?: Mods, mods?: Mods) => Mods;
declare const SIDEBAR_KEY: unique symbol;
declare const sidebarEmits: {
    change: (val: Numeric) => val is string;
};
type SidebarEmits = typeof sidebarEmits;

declare const sidebarItemName: string;
declare const sidebarItemBem: (el?: Mods, mods?: Mods) => Mods;
declare const sidebarItemProps: {
    title: StringConstructor;
    dot: BooleanConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    badgeProps: ObjectConstructor;
    disabled: BooleanConstructor;
};
type SidebarItemProps = ExtractPropTypes<typeof sidebarItemProps>;
declare const sidebarItemEmits: {
    click: (val: Numeric) => val is string;
};
type SidebarItemEmits = typeof sidebarItemEmits;

declare const spaceDirection: string[];
type SpaceDirection = (typeof spaceDirection)[number];
declare const spaceAlign: string[];
type SpaceAlign = (typeof spaceAlign)[number];

declare const spaceName: string;
declare const spaceBem: (el?: Mods, mods?: Mods) => Mods;
declare const spaceProps: {
    direction: {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: PropType<Numeric | [Numeric, Numeric]>;
        default: number;
    };
    align: PropType<SpaceAlign>;
    wrap: BooleanConstructor;
    fill: BooleanConstructor;
};
type SpaceProps = ExtractPropTypes<typeof spaceProps>;

declare const stepName: string;
declare const stepBem: (el?: Mods, mods?: Mods) => Mods;

declare const stepperTheme: readonly ["default", "round"];
type StepperTheme = (typeof stepperTheme)[number];

declare const stepperName: string;
declare const stepperBem: (el?: Mods, mods?: Mods) => Mods;
declare const stepperProps: {
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: (NumberConstructor | StringConstructor)[];
    autoFixed: {
        type: BooleanConstructor;
        default: true;
    };
    defaultValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    name: (NumberConstructor | StringConstructor)[];
    inputWidth: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    decimalLength: (NumberConstructor | StringConstructor)[];
    theme: PropType<StepperTheme>;
    placeholder: StringConstructor;
    integer: BooleanConstructor;
    disabled: BooleanConstructor;
    disablePlus: BooleanConstructor;
    disableMinus: BooleanConstructor;
    disableInput: BooleanConstructor;
    beforeChange: PropType<Interceptor>;
    showPlus: {
        type: BooleanConstructor;
        default: true;
    };
    showMinus: {
        type: BooleanConstructor;
        default: true;
    };
    showInput: {
        type: BooleanConstructor;
        default: true;
    };
    longPress: {
        type: BooleanConstructor;
        default: true;
    };
    allowEmpty: BooleanConstructor;
};
type StepperProps = ExtractPropTypes<typeof stepperProps>;

declare const stepsName: string;
declare const stepsBem: (el?: Mods, mods?: Mods) => Mods;
interface StepsProvide {
    props: StepsProps;
    onClickStep: (index: number) => void;
}
declare const STEPS_KEY: InjectionKey<StepsProvide>;
declare const stepsProps: {
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: vue.PropType<"vertical" | "horizontal">;
        default: "vertical" | "horizontal";
    };
    activeIcon: {
        type: vue.PropType<string>;
        default: string;
    };
    iconPrefix: StringConstructor;
    finishIcon: StringConstructor;
    activeColor: StringConstructor;
    inactiveIcon: StringConstructor;
    inactiveColor: StringConstructor;
};
type StepsProps = ExtractPropTypes<typeof stepsProps>;
declare const stepsEmits: {
    clickStep: (index: number) => boolean;
};
type StepsEmits = typeof stepsEmits;

declare const stepsDirection: readonly ["horizontal", "vertical"];
type StepsDirection = (typeof stepsDirection)[number];

declare const stickyName: string;
declare const stickyBem: (el?: Mods, mods?: Mods) => Mods;
declare const stickyProps: {
    position: {
        type: vue.PropType<"top" | "bottom">;
        default: "top" | "bottom";
    };
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    container: FunctionConstructor;
    disabled: BooleanConstructor;
    pageScroll: {
        type: FunctionConstructor;
        default: () => void;
    };
};
type StickyProps = ExtractPropTypes<typeof stickyProps>;

declare const stickyPosition: readonly ["top", "bottom"];
type StickyPosition = (typeof stickyPosition)[number];

declare const submitBarTextAlign: string[];
type SubmitBarTextAlign = (typeof submitBarTextAlign)[number];

declare const submitBarName: string;
declare const submitBarBem: (el?: Mods, mods?: Mods) => Mods;
declare const submitBarProps: {
    price: NumberConstructor;
    decimalLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    label: {
        type: PropType<string>;
        default: string;
    };
    suffixLabel: StringConstructor;
    textAlign: PropType<SubmitBarTextAlign>;
    buttonText: StringConstructor;
    buttonType: {
        type: PropType<"default" | "primary" | "success" | "warning" | "danger">;
        default: "default" | "primary" | "success" | "warning" | "danger";
    };
    buttonColor: StringConstructor;
    tip: StringConstructor;
    tipIcon: StringConstructor;
    currency: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    loading: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    placeholder: BooleanConstructor;
    fixed: {
        type: BooleanConstructor;
        default: true;
    };
};
type SubmitBarProps = ExtractPropTypes<typeof submitBarProps>;
declare const submitBarEmits: {
    submit: () => boolean;
};
type SubmitBarEmits = typeof submitBarEmits;

declare const swipeCellName: string;
declare const swipeCellBem: (el?: Mods, mods?: Mods) => Mods;
declare const swipeCellProps: {
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    disabled: BooleanConstructor;
    leftWidth: (NumberConstructor | StringConstructor)[];
    rightWidth: (NumberConstructor | StringConstructor)[];
    beforeClose: PropType<Interceptor>;
    stopPropagation: BooleanConstructor;
};
type SwipeCellProps = ExtractPropTypes<typeof swipeCellProps>;
declare const swipeCellEmits: {
    open: (val: object) => val is Record<any, any>;
    close: (val: object) => val is Record<any, any>;
    click: (position: string) => boolean;
};
type SwipeCellEmits = typeof swipeCellEmits;

type SwipeCellPosition = 'left' | 'right' | 'cell';

declare const switchName: string;
declare const switchBem: (el?: Mods, mods?: Mods) => Mods;
declare const switchProps: {
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    size: (NumberConstructor | StringConstructor)[];
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    activeValue: {
        type: vue.PropType<unknown>;
        default: unknown;
    };
    inactiveValue: {
        type: vue.PropType<unknown>;
        default: unknown;
    };
};
type SwitchProps = ExtractPropTypes<typeof switchProps>;

declare const tabName: string;
declare const tabBem: (el?: Mods, mods?: Mods) => Mods;
declare const tabProps: {
    dot: BooleanConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    title: StringConstructor;
    disabled: BooleanConstructor;
    titleClass: vue.PropType<unknown>;
    titleStyle: (ObjectConstructor | StringConstructor)[];
    showZeroBadge: {
        type: BooleanConstructor;
        default: true;
    };
    icon: StringConstructor;
    rightIcon: StringConstructor;
};
type TabProps = ExtractPropTypes<typeof tabProps>;

declare const tabbarName: string;
declare const tabbarBem: (el?: Mods, mods?: Mods) => Mods;
declare const TABBAR_KEY: unique symbol;
declare const tabbarProps: {
    fixed: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    placeholder: BooleanConstructor;
    safeAreaInsetBottom: BooleanConstructor;
    beforeChange: {
        type: FunctionConstructor;
        default: () => boolean;
    };
};
type TabbarProps = ExtractPropTypes<typeof tabbarProps>;
declare const tabbarEmits: {
    change: (val: Numeric) => val is string;
};
type TabbarEmits = typeof tabbarEmits;

declare const tabbarItemName: string;
declare const tabbarItemBem: (el?: Mods, mods?: Mods) => Mods;
declare const tabbarItemProps: {
    name: (NumberConstructor | StringConstructor)[];
    icon: StringConstructor;
    iconPrefix: StringConstructor;
    dot: BooleanConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    badgeProps: ObjectConstructor;
};
type TabbarItemProps = ExtractPropTypes<typeof tabbarItemProps>;

declare const tabsName: string;
declare const tabsBem: (el?: Mods, mods?: Mods) => Mods;
declare const TABS_KEY: unique symbol;
declare const tabsProps: {
    type: {
        type: PropType<"card" | "line">;
        default: "card" | "line";
    };
    color: StringConstructor;
    border: BooleanConstructor;
    sticky: BooleanConstructor;
    shrink: BooleanConstructor;
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    animated: BooleanConstructor;
    ellipsis: {
        type: BooleanConstructor;
        default: true;
    };
    swipeable: BooleanConstructor;
    scrollspy: BooleanConstructor;
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    background: StringConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    showHeader: {
        type: BooleanConstructor;
        default: true;
    };
    lineWidth: (NumberConstructor | StringConstructor)[];
    lineHeight: (NumberConstructor | StringConstructor)[];
    beforeChange: PropType<Interceptor>;
    swipeThreshold: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    titleActiveColor: StringConstructor;
    titleInactiveColor: StringConstructor;
    pageScroll: PropType<() => void>;
    useNameSlot: BooleanConstructor;
    showContent: {
        type: BooleanConstructor;
        default: true;
    };
};
type TabsProps = ExtractPropTypes<typeof tabsProps>;
declare const tabsEmits: {
    change: (name: Numeric, title: Numeric) => boolean;
    scroll: () => boolean;
    rendered: (name: Numeric, title: Numeric) => boolean;
    clickTab: (val: object) => boolean;
};
type TabsEmits = typeof tabsEmits;

declare const tabsType: readonly ["line", "card"];
type TabsType = (typeof tabsType)[number];

declare const tagType: readonly ["default", "primary", "success", "warning", "danger"];
type TagType = (typeof tagType)[number];
declare const tagSize: readonly ["large", "medium"];
type TagSize = (typeof tagSize)[number];

declare const tagName: string;
declare const tagBem: (el?: Mods, mods?: Mods) => Mods;
declare const tagProps: {
    type: {
        type: PropType<"default" | "primary" | "success" | "warning" | "danger">;
        default: "default" | "primary" | "success" | "warning" | "danger";
    };
    size: PropType<TagSize>;
    color: StringConstructor;
    show: {
        type: BooleanConstructor;
        default: true;
    };
    plain: BooleanConstructor;
    round: BooleanConstructor;
    mark: BooleanConstructor;
    textColor: {
        type: PropType<string>;
        default: string;
    };
    closeable: BooleanConstructor;
};
type TagProps = ExtractPropTypes<typeof tagProps>;
declare const tagEmits: {
    click: (evt: MouseEvent) => boolean;
    close: (evt: MouseEvent) => boolean;
};
type TagEmits = typeof tagEmits;

declare const transitionName: string;
declare const transitionBem: (el?: Mods, mods?: Mods) => Mods;
declare const transitionProps: {
    duration: {
        type: NumberConstructor;
        default: number;
    };
    name: {
        type: vue.PropType<string>;
        default: string;
    };
    show: BooleanConstructor;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    destroyOnClose: BooleanConstructor;
    customClass: vue.PropType<unknown>;
    customStyle: vue.PropType<unknown>;
};
type TransitionProps = ExtractPropTypes<typeof transitionProps>;
declare const transitionEmits: {
    beforeEnter: () => boolean;
    enter: () => boolean;
    afterEnter: () => boolean;
    beforeLeave: () => boolean;
    leave: () => boolean;
    afterLeave: () => boolean;
    click: (evt: MouseEvent) => boolean;
    touchmove: (evt: TouchEvent) => boolean;
};
type TransitionEmits = typeof transitionEmits;

type UploaderImageFit = ImageFit;
type UploaderBeforeRead = (file: File | File[], detail: {
    name: Numeric;
    index: number;
}) => boolean | undefined | Promise<File | File[] | undefined>;
type UploaderAfterRead = (items: UploaderFileListItem | UploaderFileListItem[], detail: {
    name: Numeric;
    index: number;
}) => void;
type UploaderStatus = '' | 'uploading' | 'done' | 'failed';
type UploaderVideoFit = 'contain' | 'fill' | 'cover';
interface UploaderFileListItem {
    url?: string;
    file?: File;
    objectUrl?: string;
    content?: string;
    isImage?: boolean;
    status?: UploaderStatus;
    message?: string;
    imageFit?: UploaderImageFit;
    deletable?: boolean;
    reupload?: boolean;
    previewSize?: Numeric;
    beforeDelete?: Interceptor;
    thumb?: string;
    name?: string;
    isVideo?: boolean;
    autoplay?: boolean;
}
type UploaderMediaType = 'image' | 'video' | 'mix';
type UploaderCapture = 'album' | 'camera';
type UploaderSizeType = 'original' | 'compressed';
type UploaderAccept = 'image' | 'media' | 'video' | 'all';

declare const uploaderName: string;
declare const uploaderBem: (el?: Mods, mods?: Mods) => Mods;
declare const uploaderProps: {
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    accept: {
        type: PropType<UploaderAccept>;
        default: UploaderAccept;
    };
    sizeType: {
        type: PropType<UploaderSizeType[]>;
        default: () => UploaderSizeType[];
    };
    previewSize: (NumberConstructor | StringConstructor)[];
    previewImage: {
        type: BooleanConstructor;
        default: true;
    };
    previewFullImage: {
        type: BooleanConstructor;
        default: true;
    };
    previewFile: {
        type: BooleanConstructor;
        default: true;
    };
    multiple: BooleanConstructor;
    disabled: BooleanConstructor;
    showUpload: {
        type: BooleanConstructor;
        default: true;
    };
    deletable: {
        type: BooleanConstructor;
        default: true;
    };
    capture: {
        type: PropType<UploaderCapture[]>;
        default: () => UploaderCapture[];
    };
    maxSize: {
        type: (NumberConstructor | StringConstructor | FunctionConstructor)[];
        default: number;
    };
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    uploadText: StringConstructor;
    videoFit: {
        type: PropType<UploaderVideoFit>;
        default: UploaderVideoFit;
    };
    imageFit: {
        type: PropType<_uni_helper_uni_app_types.ImageMode>;
        default: _uni_helper_uni_app_types.ImageMode;
    };
    useBeforeRead: BooleanConstructor;
    compressed: {
        type: BooleanConstructor;
        default: true;
    };
    maxDuration: {
        type: NumberConstructor;
        default: number;
    };
    mediaType: {
        type: PropType<UploaderMediaType[]>;
        default: () => UploaderMediaType[];
    };
    extension: ArrayConstructor;
    showmenu: {
        type: BooleanConstructor;
        default: true;
    };
    uploadIcon: {
        type: PropType<string>;
        default: string;
    };
    camera: {
        type: PropType<string>;
        default: string;
    };
    reupload: BooleanConstructor;
    afterRead: PropType<UploaderAfterRead>;
    beforeRead: PropType<UploaderBeforeRead>;
    referrerPolicy: {
        type: PropType<string>;
        default: string;
    };
};
type UploaderProps = ExtractPropTypes<typeof uploaderProps>;
declare const uploaderEmits: {
    beforeRead: (file: object, detail: object) => boolean;
    afterRead: (file: object, detail: object) => boolean;
    oversize: (file: object, detail: object) => boolean;
    clickPreview: (item: object, file: object) => boolean;
    clickReUpload: (item: object, file: object) => boolean;
    delete: (item: object, file: object) => boolean;
    error: (err: object) => err is Record<any, any>;
};
type UploaderEmits = typeof uploaderEmits;

export { ACTION_BAR_KEY, type ActionBarButtonEmits, type ActionBarButtonProps, type ActionBarIconEmits, type ActionBarIconProps, type ActionBarProps, type ActionSheetAction, type BadgePosition, type ButtonIconPosition, type ButtonSize, type ButtonType, CHECKBOX_KEY, type CardEmits, type CardProps, type CellArrowDirection, type CellEmits, type CellGroupProps, type CellProps, type CellSize, type CheckboxDirection, type CheckboxEmits, type CheckboxGroupEmits, type CheckboxGroupProps, type CheckboxLabelPosition, type CheckboxProps, type CheckboxShape, type CircleEmits, type CircleProps, type CircleStartPosition, type CircleStrokeLinecap, type CircleType, type ColEmits, type ColProps, type DividerContentPosition, type DividerEmits, type DividerProps, type EmptyProps, type FieldClearTrigger, type FieldEmits, type FieldFormatTrigger, type FieldProps, type FieldTextAlign, type FieldType, type FieldValidateTrigger, type FixedPosition, type FloatingBubbleAxis, type FloatingBubbleBoundary, type FloatingBubbleEmits, type FloatingBubbleMagnetic, type FloatingBubbleOffset, type FloatingBubbleProps, type FloatingPanelProps, GRID_KEY, type GridItemEmits, type GridItemProps, type GridProps, type IconEmits, type IconProps, type ImageEmits, type ImageFit, type ImageProps, type KeyConfig, type KeyType, type LoadingProps, type LoadingType, type NoticeBarEmits, type NoticeBarMode, type NoticeBarProps, type NumberKeyboardKeyProps, type NumberKeyboardProps, type NumberKeyboardTheme, type OverlayEmits, type OverlayProps, PRESET_IMAGES, type PaginationEmits, type PaginationMode, type PaginationProps, type PasswordInputProps, type PopupEmits, type PopupPosition, type PopupProps, type ProgressProps, RADIO_KEY, ROW_KEY, type RadioDirection, type RadioEmits, type RadioGroupEmits, type RadioGroupProps, type RadioLabelPosition, type RadioProps, type RadioShape, type RowAlign, type RowEmits, type RowJustify, type RowProps, SIDEBAR_KEY, STEPS_KEY, type SearchProps, type SearchShape, ShareSheetEmits, type ShareSheetOption, type ShareSheetOptions, type ShareSheetProps, type SidebarEmits, type SidebarItemEmits, type SidebarItemProps, type SpaceAlign, type SpaceDirection, type SpaceProps, type StepperProps, type StepperTheme, type StepsDirection, type StepsEmits, type StepsProps, type StepsProvide, type StickyPosition, type StickyProps, type SubmitBarEmits, type SubmitBarProps, type SwipeCellEmits, type SwipeCellPosition, type SwipeCellProps, type SwitchProps, TABBAR_KEY, TABS_KEY, type TabProps, type TabbarEmits, type TabbarItemProps, type TabbarProps, type TabsEmits, type TabsProps, type TabsType, type TagEmits, type TagProps, type TagSize, type TagType, type TransitionEmits, type TransitionProps, type UploaderAccept, type UploaderAfterRead, type UploaderBeforeRead, type UploaderCapture, type UploaderEmits, type UploaderFileListItem, type UploaderImageFit, type UploaderMediaType, type UploaderProps, type UploaderSizeType, type UploaderStatus, type UploaderVideoFit, actionBarBem, actionBarButtonBem, actionBarButtonEmits, actionBarButtonName, actionBarButtonProps, actionBarIconBem, actionBarIconEmits, actionBarIconName, actionBarIconProps, actionBarName, actionBarProps, badgePosition, bem, buttonIconPosition, buttonSize, buttonType, cardBem, cardEmits, cardName, cardProps, cellArrowDirection, cellBem, cellEmits, cellGroupBem, cellGroupName, cellGroupProps, cellName, cellProps, cellSize, checkboxBem, checkboxDirection, checkboxEmits, checkboxGroupBem, checkboxGroupEmits, checkboxGroupName, checkboxGroupProps, checkboxLabelPosition, checkboxName, checkboxProps, checkboxShape, circleBem, circleEmits, circleName, circleProps, circleStartPosition, circleStrokeLinecap, circleType, colBem, colEmits, colName, colProps, dividerBem, dividerContentPosition, dividerEmits, dividerName, dividerProps, emptyBem, emptyName, emptyProps, fieldBem, fieldClearTrigger, fieldEmits, fieldFormatTrigger, fieldName, fieldProps, fieldTextAlign, fieldType, fieldValidateTrigger, fixedProps, floatingBubbleAxis, floatingBubbleBem, floatingBubbleEmits, floatingBubbleMagnetic, floatingBubbleName, floatingBubbleProps, floatingPanelBem, floatingPanelName, floatingPanelProps, gridBem, gridItemBem, gridItemEmits, gridItemName, gridItemProps, gridName, gridProps, iconBem, iconEmits, iconName, iconProps, imageBem, imageEmits, imageName, imageProps, keyType, loadingBem, loadingName, loadingProps, loadingType, name, noticeBarBem, noticeBarEmits, noticeBarMode, noticeBarName, noticeBarProps, numberKeyboardBem, numberKeyboardKeyProps, numberKeyboardName, numberKeyboardProps, numberKeyboardTheme, overlayBem, overlayEmits, overlayName, overlayProps, paginationBem, paginationEmits, paginationMode, paginationName, paginationProps, paginationT, passwordInputBem, passwordInputName, passwordInputProps, popupBem, popupEmits, popupName, popupPosition, popupProps, progressBem, progressName, progressProps, radioBem, radioDirection, radioEmits, radioGroupBem, radioGroupEmits, radioGroupName, radioGroupProps, radioLabelPosition, radioName, radioProps, radioShape, rowAlign, rowBem, rowEmits, rowJustify, rowName, rowProps, searchBem, searchName, searchProps, searchShape, shareSheetBem, shareSheetEmits, shareSheetName, shareSheetProps, shareSheetT, sidebarBem, sidebarEmits, sidebarItemBem, sidebarItemEmits, sidebarItemName, sidebarItemProps, sidebarName, spaceAlign, spaceBem, spaceDirection, spaceName, spaceProps, stepBem, stepName, stepperBem, stepperName, stepperProps, stepperTheme, stepsBem, stepsDirection, stepsEmits, stepsName, stepsProps, stickyBem, stickyName, stickyPosition, stickyProps, submitBarBem, submitBarEmits, submitBarName, submitBarProps, swipeCellBem, swipeCellEmits, swipeCellName, swipeCellProps, switchBem, switchName, switchProps, tabBem, tabName, tabProps, tabbarBem, tabbarEmits, tabbarItemBem, tabbarItemName, tabbarItemProps, tabbarName, tabbarProps, tabsBem, tabsEmits, tabsName, tabsProps, tabsType, tagBem, tagEmits, tagName, tagProps, tagSize, tagType, transitionBem, transitionEmits, transitionName, transitionProps, uploaderBem, uploaderEmits, uploaderName, uploaderProps };
