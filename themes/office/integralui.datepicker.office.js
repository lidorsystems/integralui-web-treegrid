import { c as css } from '../../external/lit-element.js';

const iuiDatePickerOfficeStyle = css`
    /* Header */
    .iui-datepicker-header {
        border: var(--datepicker-header-border, thin solid #d9d9d9);
    }
    .iui-datepicker-header-hovered .iui-datepicker-header-expand-box, .iui-datepicker-header-selected .iui-datepicker-header-expand-box {
        background: #0d7edb;
    }
`;

export { iuiDatePickerOfficeStyle };
