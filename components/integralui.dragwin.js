/*
  filename: integralui.dragwin.js
  version : 21.4.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{L as LitElement,c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUICommonService from"../services/integralui.common.service.js";import{IntegralUITheme}from"./integralui.enums.js";import{iuiDragWinDefaultStyle}from"../styles/integralui.dragdrop.style.js";import{iuiDragWinOfficeStyle}from"../themes/office/integralui.dragdrop.office.js";import{iuiDragWinMidnightStyle}from"../themes/midnight/integralui.dragdrop.midnight.js";class IntegralUIDragWindow extends LitElement{constructor(){super();this._commonService=new IntegralUICommonService();this._currentIconClass="";this._currentPosition={x:0,y:0};this._currentSize={width:0,height:0};this._currentTitle="";this._currentDisplay="block";this._currentControlStyleSettings=iuiDragWinDefaultStyle;this._currentResourcePath="../icons";this._currentCustomStyle={};this._currentTheme=IntegralUITheme.None;this._currentThemeSettings=css``}connectedCallback(){}disconnectedCallback(){}static get properties(){return{customStyle:{type:Object,attribute:"custom-style"},display:{type:String,reflect:!0},iconClass:{type:String,attribute:"icon-class",reflect:!0},position:{type:Object},resourcePath:{type:String,attribute:"resource-path",reflect:!0},size:{type:Object},title:{type:String,reflect:!0},theme:{converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"office":return IntegralUITheme.Office;case"midnight":return IntegralUITheme.Midnight;default:return IntegralUITheme.None}},toAttribute:t=>{switch(t){case IntegralUITheme.Office:return"Office";case IntegralUITheme.Midnight:return"Midnight";default:return"None"}}},reflect:!0}}}attributeChangedCallback(t,e,s){super.attributeChangedCallback(t,e,s)}get customStyle(){return this._currentCustomStyle}set customStyle(t){if(this._currentCustomStyle!==t){const e=this._currentCustomStyle;this._currentCustomStyle=t;this.requestUpdate("customStyle",e);this.refresh()}}get display(){return this._currentDisplay}set display(t){if(this._currentDisplay!==t){const e=this._currentDisplay;this._currentDisplay=t;this.requestUpdate("display",e)}}get iconClass(){return this._currentIconClass}set iconClass(t){if(this._currentIconClass!==t){const e=this._currentIconClass;this._currentIconClass=t;this.requestUpdate("iconClass",e)}}get position(){return this._currentPosition}set position(t){const e=this._currentPosition;this._currentPosition=t;this.requestUpdate("position",e)}get resourcePath(){return this._currentResourcePath}set resourcePath(t){if(this._currentResourcePath!==t){const e=this._currentResourcePath;this._currentResourcePath=t;this._updateControlStyleSettings(t);this.requestUpdate("resourcePath",e)}}get size(){return this._currentSize}set size(t){const e=this._currentSize;this._currentSize=t;this.requestUpdate("size",e)}get title(){return this._currentTitle}set title(t){if(this._currentTitle!==t){const e=this._currentTitle;this._currentTitle=t;this.requestUpdate("title",e)}}get theme(){return this._currentTheme}set theme(t){if(this._currentTheme!==t){const e=this._currentTheme;this._currentTheme=t;this._updateThemeSettings(t);this.requestUpdate("theme",e);this.refresh()}}updatePos(t){if(t){if(t.class)this.iconClass=t.class;this.position={x:t.left,y:t.top};if(t.text)this.title=t.text;this.refresh()}}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiDragWinOfficeStyle.cssText,"../icons",this._currentResourcePath);break;case IntegralUITheme.Midnight:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiDragWinMidnightStyle.cssText,"../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}firstUpdated(t){}refresh(){this.update()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-drag-window class="iui-dragwin" style=${styleMap({display:this._currentDisplay,top:this._currentPosition.y+"px",left:this._currentPosition.x+"px"})}">                 ${""!==this._currentIconClass?html`<span class=${classMap(this._currentIconClass)}"></span>`:html``}                 <span class='iui-dragwin-title'>${this._currentTitle}</span>             </div>         `}_updateControlStyleSettings(t){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiDragWinDefaultStyle.cssText,"../icons",t)}}window.customElements.define("iui-dragwin",IntegralUIDragWindow);export default IntegralUIDragWindow;