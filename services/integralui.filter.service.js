/*
  filename: integralui.filter.service.js
  version : 21.1.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
class IntegralUIFilterService{isString(e){return e?"string"===typeof e||e instanceof String:!1}isFilterCondition(e){if("a"===e||"b"===e||"c"===e||"d"===e||"e"===e||"f"===e||"g"===e||"h"===e||"i"===e||"j"===e||"k"===e||"l"===e||"m"===e||"n"===e||"o"===e||"p"===e||"q"===e||"r"===e||"s"===e||"t"===e||"u"===e||"v"===e||"w"===e||"x"===e||"y"===e||"z"===e)return!0;else return!1}beginsWith(e,t,i){if(void 0!==e&&void 0!==t&&this.isString(e)&&this.isString(t))if(e.length>=t.length)if(!1!==i)return e.substring(0,t.length)===t?!0:!1;else return e.toLowerCase().substring(0,t.length)===t.toLowerCase()?!0:!1;return!1}endsWith(e,t,i){if(void 0!==e&&void 0!==t&&this.isString(e)&&this.isString(t))if(e.length>=t.length)if(!1!==i)return e.substring(e.length-t.length,e.length)===t?!0:!1;else return e.toLowerCase().substring(e.length-t.length,e.length)===t.toLowerCase()?!0:!1;return!1}getFilterCondition(e,t){let i="abcdefghijklmnopqrstuvwxyz".indexOf(t);return e&&i>=0&&i<e.length?e[i]:null}createFilterNode(){return{result:!1}}setFilterNode(e,t,i,r){let l=this.createFilterNode();l.condition=this.getFilterCondition(t,i);l.negative=r;if(!e.left)e.left=l;else if(!e.right)e.right=l}getMatchResult(e,t,i,r,l){let s=!1;if(void 0!==e&&void 0!==i){switch(t){case">":s=e>i;break;case">=":s=e>=i;break;case"<":s=e<i;break;case"<=":s=e<=i;break;case"=":if(this.isString(e)&&this.isString(i))s=!1!==l?e===i:e.toLowerCase()===i.toLowerCase();else s=e===i;break;case"!=":case"<>":if(this.isString(e)&&this.isString(i))s=!1!==l?e!==i:e.toLowerCase()!==i.toLowerCase();else s=e!==i;break;case"->":s=this.beginsWith(e,i,l);break;case"<-":s=this.endsWith(e,i,l);break;case"><":case"[]":s=this.isString(e)&&this.isString(i)?!1!==l?e.indexOf(i)>-1:e.toLowerCase().indexOf(i.toLowerCase())>-1:!1;break;default:s=!1}if(!0===r)s=!s}return s}getFilterResult(e,t,i,r){if(t){if(Array.isArray(t.value)){let l=[];for(let s=0;s<t.value.length;s++)l.push(this.getMatchResult(e,t.operation,t.value[s],i,r));let s=!0;if("&"===t.join)for(let e=0;e<l.length;e++)s=s&&l[e];else{s=!1;for(let e=0;e<l.length;e++)s=s||l[e]}return s}return this.getMatchResult(e,t.operation,t.value,i,r)}return!0}applyFilter(e,t,i){if(t){let r=t,l=r;if(l.left)if(l.left.condition)l.left.result=this.getFilterResult(e,l.left.condition,l.left.negative,i);else{l=l.left;this.applyFilter(e,l,i)}if((l=r).right)if(l.right.condition)l.right.result=this.getFilterResult(e,l.right.condition,l.right.negative,i);else{l=l.right;this.applyFilter(e,l,i)}if("&"===r.operator){r.result=!0;if(r.left)r.result=r.result&&r.left.result;if(r.right)r.result=r.result&&r.right.result}else{r.result=!1;if(r.left)r.result=r.result||r.left.result;if(r.right)r.result=r.result||r.right.result}return r.result}return!0}createTree(e,t){if(t){let i=this.createFilterNode(),r=i,l=null,s=!1;for(let i=0;i<t.length;i++)if(this.isFilterCondition(t[i]))this.setFilterNode(r,e,t[i],s);else if("&"===t[i]||"|"===t[i]){s=!1;r.operator=t[i]}else if("!"===t[i])s=!0;else if("("===t[i]){s=!1;(l=this.createFilterNode()).parent=r;r=l}else if(")"===t[i]){s=!1;if(r.parent)if(!r.parent.left)r.parent.left=r;else if(!r.parent.right)r.parent.right=r;r=r.parent}return i}return null}match(e,t,i,r,l){if(Array.isArray(t)){if(!r)r=this.createTree(t,i);return this.applyFilter(e,r,l)}let s=t?t.negative:!1;return this.getFilterResult(e,t,s,l)}filter(e,t,i,r,l,s){let n=[];if(e&&Array.isArray(e))for(let a=0;a<e.length;a++){let h=t?e[a][t]:e[a];if(this.match(h,i,r,l,s))n.push(e[a])}return n}}export default IntegralUIFilterService;