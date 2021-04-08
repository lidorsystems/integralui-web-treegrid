import { c as css } from '../external/lit-element.js';

export const iuiHeaderDefaultStyle = css`
    /* Normal State */
    .iui-header
    {
        overflow: hidden;
        position: relative;
    }
    .iui-header-move-marker
    {
        border: thin solid red;
        display: inline-block;
        width: 6px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-header-label {
        display: inline-block;
        padding: var(--header-label-padding, 1px);
    }
    .iui-header-label-empty {
        display: block;
        height: var(--header-label-empty-height, 20px);
    }
    .iui-header-icon {
    }
    .iui-header-icon-url {
        vertical-align: middle;
    }
    /* Hover State */
    .iui-header-hovered
    {
        background-color: #cccccc;
    }
    /* Selected State */
    .iui-header-selected
    {
        background-color: #aaaaaa;
        border-color: #808080;
        color: white;
    }
    /* Disabled State */
    .iui-header-disabled
    {
        opacity: 0.75;
        pointer-events: none;
    }
    .iui-header-expand-box
    {
        display: inline-block;
        height: 16px;
        margin: var(--header-expand-box-margin, 5px);
        position: absolute;
        right: var(--header-expand-box-right, 0);
        top: var(--header-expand-box-top, 0);
        width: 16px;
    }
    .iui-header-expand-box-vertical
    {
        background: white;
        display: block;
        position: absolute;
        left: 7px;
        width: 2px;
        height: 16px;
    }
    .iui-header-expand-box-vertical-expand
    {
        animation-name: vertical-expand;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes vertical-expand
    {
        0% { transform: rotate(-90deg); }
        100% { transform: rotate(0deg); }
    }
    .iui-header-expand-box-vertical-collapse
    {
        animation-name: vertical-collapse;
        animation-delay: 0.2s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes vertical-collapse
    {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-90deg); }
    }


    .iui-header-expand-box-horizontal
    {
        background: white;
        display: block;
        position: absolute;
        top: 7px;
        width: 16px;
        height: 2px;
    }
    .iui-header-expand-box-horizontal-expand
    {
        animation-name: horizontal-expand;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes horizontal-expand
    {
        0% { max-width: 0; left: 7px; }
        80% { max-width: 4px; left: 2px; }
        100% { max-width: 16px; left: 0; }
    }
    .iui-header-expand-box-horizontal-collapse
    {
        animation-name: horizontal-collapse;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes horizontal-collapse
    {
        0% { max-width: 16px; left: 0; }
        100% { max-width: 0; left: 7px; }
    }



    .iui-header-expand-box-arrow
    {
        display: inline-block;
        height: 16px;
        margin: var(--header-expand-box-margin, 5px);
        position: absolute;
        right: var(--header-expand-box-right, 0);
        top: var(--header-expand-box-top, 0);
        width: 16px;

    }
    .iui-header-expand-box-arrow-bottom-left
    {
        background: white;
        display: block;
        position: absolute;
        top: 8px;
        left: -3px;
        width: 10px;
        height: 2px;
        transform: rotate(45deg);
    }
    .iui-header-expand-box-arrow-bottom-left-expand
    {
        animation-name: arrow-bottom-left-expand;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes arrow-bottom-left-expand
    {
        0% { max-width: 0; left: 3px; }
        60% { max-width: 0; left: 3px; }
        100% { max-width: 10px; left: -3px;}
    }
    .iui-header-expand-box-arrow-bottom-left-collapse
    {
        animation-name: arrow-bottom-left-collapse;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes arrow-bottom-left-collapse
    {
        0% { max-width: 10px; left: -3px; }
        100% { max-width: 0; left: 3px; }
    }

    .iui-header-expand-box-arrow-bottom-right
    {
        background: white;
        display: block;
        position: absolute;
        top: 8px;
        left: 3px;
        width: 10px;
        height: 2px;
        transform: rotate(-45deg);
    }
    .iui-header-expand-box-arrow-bottom-right-expand
    {
        animation-name: arrow-bottom-right-expand;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes arrow-bottom-right-expand
    {
        0% { max-width: 0; }
        60% { max-width: 0; }
        100% { max-width: 10px; }
    }
    .iui-header-expand-box-arrow-bottom-right-collapse
    {
        animation-name: arrow-bottom-right-collapse;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes arrow-bottom-right-collapse
    {
        0% { max-width: 10px; }
        100% { max-width: 0; }
    }

    .iui-header-expand-box-arrow-vertical
    {
        background: white;
        display: block;
        position: absolute;
        top: 0;
        left: 3px;
        width: 2px;
        height: 10px;
    }
    .iui-header-expand-box-arrow-vertical-expand
    {
        animation-name: arrow-vertical-expand;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes arrow-vertical-expand
    {
        0% { max-height: 10px; top: 0; }
        100% { max-height: 0; top: 10px; }
    }
    .iui-header-expand-box-arrow-vertical-collapse
    {
        animation-name: arrow-vertical-collapse;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes arrow-vertical-collapse
    {
        0% { max-height: 0; top: 10px;}
        100% { max-height: 10px; top: 0; }
    }

    .iui-header-expand-box-arrow-top-left
    {
        background: white;
        display: block;
        position: absolute;
        top: 8px;
        left: -3px;
        width: 10px;
        height: 2px;
        transform: rotate(135deg);
    }
    .iui-header-expand-box-arrow-top-left-expand
    {
        animation-name: arrow-top-left-expand;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes arrow-top-left-expand
    {
        0% { max-width: 0; left: 3px; }
        60% { max-width: 0; left: 3px; }
        100% { max-width: 10px; left: -3px; }
    }
    .iui-header-expand-box-arrow-top-left-collapse
    {
        animation-name: arrow-top-left-collapse;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes arrow-top-left-collapse
    {
        0% { max-width: 10px; left: -3px; }
        100% { max-width: 0; left: 3px; }
    }

    .iui-header-expand-box-arrow-top-right
    {
        background: white;
        display: block;
        position: absolute;
        top: 8px;
        left: 3px;
        width: 10px;
        height: 2px;
        transform: rotate(-135deg);
    }
    .iui-header-expand-box-arrow-top-right-expand
    {
        animation-name: arrow-top-right-expand;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes arrow-top-right-expand
    {
        0% { max-width: 0; }
        60% { max-width: 0; }
        100% { max-width: 10px; }
    }
    .iui-header-expand-box-arrow-top-right-collapse
    {
        animation-name: arrow-top-right-collapse;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes arrow-top-right-collapse
    {
        0% { max-width: 10px; }
        100% { max-width: 0; }
    }
`;