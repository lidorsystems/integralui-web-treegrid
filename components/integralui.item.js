/*
  filename: integralui.item.js
  version : 21.4.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBase from"./integralui.base.js";import{IntegralUIObjectState,IntegralUITheme}from"./integralui.enums.js";import{iuiItemDefaultStyle}from"../styles/integralui.item.style.js";import{iuiItemOfficeStyle}from"../themes/office/integralui.item.office.js";import{iuiItemMidnightStyle}from"../themes/midnight/integralui.item.midnight.js";class IntegralUIItem extends IntegralUIBase{connectedCallback(){}disconnectedCallback(){}_init(){super._init();this._currentIcon="";this._currentIconUrl="";this._currentIconSize={width:16,height:16};this._currentText="";this._isVisible=!0;this._parentCtrl=null;this._itemPos={top:0,left:0};this._positionType="static";this._contentClass={};this._currentControlStyleSettings=iuiItemDefaultStyle;this._generalClassName="iui-item";this._contentClassName=this._generalClassName+"-content"}_initStyle(){this._defaultStyle={general:{disabled:this._generalClassName+"-disabled",focused:this._generalClassName+"-focused",normal:this._generalClassName,hovered:this._generalClassName+"-hovered",selected:this._generalClassName+"-selected"},content:{disabled:this._contentClassName+"-disabled",focused:this._contentClassName+"-focused",normal:this._contentClassName,hovered:this._contentClassName+"-hovered",selected:this._contentClassName+"-selected"}};this.refresh()}setParent(t){this._parentCtrl=t}attributeChangedCallback(t,e,s){super.attributeChangedCallback(t,e,s)}static get properties(){return{icon:{type:String,reflect:!0},iconUrl:{type:String,attribute:"icon-url",reflect:!0},iconSize:{type:Object},text:{type:String,reflect:!0},visible:{type:Boolean,reflect:!0}}}get icon(){return this._currentIcon}set icon(t){if(this._currentIcon!==t){const e=this._currentIcon;this._currentIcon=t;this.requestUpdate("icon",e)}}get iconUrl(){return this._currentIconUrl}set iconUrl(t){if(this._currentIconUrl!==t){const e=this._currentIconUrl;this._currentIconUrl=t;this.requestUpdate("iconUrl",e)}}get iconSize(){return this._currentIconSize}set iconSize(t){if(this._currentIconSize!==t){const e=this._currentIconSize;this._currentIconSize=t;this.requestUpdate("iconSize",e)}}get text(){return this._currentText}set text(t){if(this._currentText!==t){const e=this._currentText;this._currentText=t;this.requestUpdate("text",e);this.update()}}get visible(){return this._isVisible}set visible(t){if(this._isVisible!==t){const e=this._isVisible;this._isVisible=t;this.requestUpdate("visible",e)}}_processStateChanged(){this._updateContentClass()}_onClick(t){if(this._isEnabled)this._invokeEvent("click",t);t.stopPropagation()}_onMouseDown(t){if(this._isEnabled){this._invokeEvent("mouseDown",t);if(this._parentCtrl&&this._parentCtrl.invokeCtrlMethod)this._parentCtrl.invokeCtrlMethod("ITEM_SELECT",this)}t.stopPropagation()}_onMouseUp(t){if(this._isEnabled)this._invokeEvent("mouseUp",t);t.stopPropagation()}_onMouseEnter(t){if(this._isEnabled){this.state|=IntegralUIObjectState.Hovered;this._invokeEvent("mouseEnter",t)}t.stopPropagation()}_onMouseMove(t){if(this._isEnabled)this._invokeEvent("mouseMove",t);t.stopPropagation()}_onMouseLeave(t){if(this._isEnabled){this.state&=~IntegralUIObjectState.Hovered;this._invokeEvent("mouseLeave",t)}t.stopPropagation()}getContentSize(){let t={width:0,height:0};if(this._contentElem){let e=this._commonService.getMargin(this._contentElem);t={width:this._contentElem.offsetWidth+(e.left+e.right),height:this._contentElem.offsetHeight+(e.top+e.bottom)/2}}return t}getIconStatus(){return this.icon?"inline-block":"none"}getMargin(){if(this._elemRef)return this._commonService.getMargin(this._elemRef.firstElementChild);else return{top:0,right:0,bottom:0,left:0}}getPageRect(){let t={top:0,right:0,bottom:0,left:0};if(this._elemRef)t=this._commonService.getPageRect(this._elemRef.firstElementChild);return t}getClientSize(){let t={width:0,height:0};if(this._elemRef)t={width:this._elemRef.firstElementChild.clientWidth,height:this._elemRef.firstElementChild.clientHeight};return t}getSize(){let t={width:0,height:0};this._updateReferences();if(this._elemRef){let e=this._commonService.getMargin(this._elemRef);t={width:this._elemRef.offsetWidth+(e.left+e.right),height:this._elemRef.offsetHeight+(e.top+e.bottom)/2}}return t}resetPos(){this.updateLayout("static",{x:"auto",y:"auto"})}updateLayout(t,e){this._updateReferences();this._positionType=t;this._itemPos={top:e.y,left:e.x}}updatePos(t){this.updateLayout("absolute",t)}_getControlStyle(){let t={position:this._positionType,top:this._itemPos.top+"px",left:this._itemPos.left+"px"};if(this._ctrlSize.width>0)t.width=this._ctrlSize.width+"px";if(this._ctrlSize.height>0)t.height=this._ctrlSize.height+"px";return t}_updateContentClass(){this._contentClass={};this._contentClass[this._contentClassName]=!0;if(this._options.currentStyle){this._contentClass[this._options.currentStyle.content.normal]=!0;if(this.state&IntegralUIObjectState.Disabled)this._contentClass[this._options.currentStyle.content.disabled]=!0;else if(this.state&IntegralUIObjectState.Focused)this._contentClass[this._options.currentStyle.content.focused]=!0;else if(this.state&IntegralUIObjectState.Selected)this._contentClass[this._options.currentStyle.content.selected]=!0;else if(this.state&IntegralUIObjectState.Hovered)this._contentClass[this._options.currentStyle.content.hovered]=!0}}_getContentClass(){return this._contentClass}_getContentStyle(t){if(this._commonService.isString(t))return t;else if(t)return{disabled:this._commonService.isFieldAvailable(t.disabled,this._contentClassName+"-disabled"),focused:this._commonService.isFieldAvailable(t.focused,this._contentClassName+"-focused"),hovered:this._commonService.isFieldAvailable(t.hovered,this._contentClassName+"-hovered"),normal:this._commonService.isFieldAvailable(t.normal,this._contentClassName),selected:this._commonService.isFieldAvailable(t.selected,this._contentClassName+"-selected")};else return{disabled:this._defaultStyle.content.disabled,focused:this._defaultStyle.content.focused,hovered:this._defaultStyle.content.hovered,normal:this._defaultStyle.content.normal,selected:this._defaultStyle.content.selected}}_updateStyle(t){if(t)this._options.currentStyle={general:this._getGeneralStyle(t.general),content:this._getContentStyle(t.content)};else this._options.currentStyle={general:{disabled:this._defaultStyle.general.disabled,focused:this._defaultStyle.general.focused,hovered:this._defaultStyle.general.hovered,normal:this._defaultStyle.general.normal,selected:this._defaultStyle.general.selected},content:{disabled:this._defaultStyle.content.disabled,focused:this._defaultStyle.content.focused,hovered:this._defaultStyle.content.hovered,normal:this._defaultStyle.content.normal,selected:this._defaultStyle.content.selected}}}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiItemOfficeStyle.cssText,"../icons",this._currentResourcePath);break;case IntegralUITheme.Midnight:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiItemMidnightStyle.cssText,"../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}firstUpdated(t){this._updateReferences()}refresh(){this._updateStyle(this.controlStyle);this._updateControlClass();this._updateContentClass();this.update();this._updateReferences()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings} 				${this._currentCustomStyle}             </style>             <div data-ctrl="item" id="content" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} @click="${t=>this._onClick(t)}" @mousedown="${t=>this._onMouseDown(t)}" @mouseup="${t=>this._onMouseUp(t)}" @mouseenter="${t=>this._onMouseEnter(t)}" @mousemove="${t=>this._onMouseMove(t)}" @mouseleave="${t=>this._onMouseLeave(t)}">                 ${this.icon?html`<span class="iui-item-icon" class=${classMap(this.icon)} style=${styleMap({display:this._getIconStatus()})}></span>`:html``}                 ${this.iconUrl?html`<img class="iui-item-icon-url" src="${this.iconUrl}" />`:html``}                 ${this.text?html`<span class="iui-item-label">${this.text}</span>`:html``}                 <slot></slot>             </div>         `}_updateControlStyleSettings(t){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiItemDefaultStyle.cssText,"../icons",t)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=item]");this._contentElem=this.shadowRoot.querySelector("#content")}}window.customElements.define("iui-item",IntegralUIItem);export default IntegralUIItem;