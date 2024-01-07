/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/layout/cssgrid/GridLayoutBase","sap/ui/layout/cssgrid/GridSettings","sap/ui/Device","sap/ui/thirdparty/jquery"],function(t,i,e,jQuery){"use strict";var s=/^([X][L](?:[1-9]|1[0-2]))? ?([L](?:[1-9]|1[0-2]))? ?([M](?:[1-9]|1[0-2]))? ?([S](?:[1-9]|1[0-2]))?$/i;var a=s.exec("XL7 L6 M4 S2");var o={Phone:"sapUiLayoutCSSGridBoxLayoutSizeS",Tablet:"sapUiLayoutCSSGridBoxLayoutSizeM",Desktop:"sapUiLayoutCSSGridBoxLayoutSizeL",LargeDesktop:"sapUiLayoutCSSGridBoxLayoutSizeXL"};var r={XL:"sapUiLayoutCSSGridBoxLayoutSpanXL7",L:"sapUiLayoutCSSGridBoxLayoutSpanL6",M:"sapUiLayoutCSSGridBoxLayoutSpanM4",S:"sapUiLayoutCSSGridBoxLayoutSpanS2"};var n="0.5rem";var p=t.extend("sap.ui.layout.cssgrid.GridBoxLayout",{metadata:{library:"sap.ui.layout",properties:{boxMinWidth:{type:"sap.ui.core.CSSSize",defaultValue:""},boxWidth:{type:"sap.ui.core.CSSSize",defaultValue:""},boxesPerRowConfig:{type:"sap.ui.layout.BoxesPerRowConfig",group:"Behavior",defaultValue:"XL7 L6 M4 S2"}}}});p.prototype.getActiveGridSettings=function(){return new i({gridTemplateColumns:this._getTemplateColumns(),gridGap:n+" "+n})};p.prototype._applySingleGridLayout=function(i){t.prototype._applySingleGridLayout.call(this,i);var e=sap.ui.getCore().byId(i.parentElement.id);if(e&&e.isA("sap.f.GridList")&&e.isGrouped()){this._flattenHeight(e)}};p.prototype.addGridStyles=function(i){t.prototype.addGridStyles.apply(this,arguments);this._addSpanClasses(i);i.class("sapUiLayoutCSSGridBoxLayoutContainer")};p.prototype.onGridAfterRendering=function(t){t.getGridDomRefs().forEach(function(t){if(t.children){for(var i=0;i<t.children.length;i++){if(!t.children[i].classList.contains("sapMGHLI")&&!t.children[i].classList.contains("sapUiBlockLayerTabbable")){t.children[i].classList.add("sapUiLayoutCSSGridItem")}}}});if(!this._hasBoxWidth()){this._applySizeClass(t)}if(t.isA("sap.f.GridList")&&t.getGrowing()){var i=t._oGrowingDelegate._onAfterPageLoaded;t._oGrowingDelegate._onAfterPageLoaded=function(){i.call(t._oGrowingDelegate);if(t.isA("sap.f.GridList")&&t.isGrouped()){this._flattenHeight(t)}}.bind(this)}};p.prototype.isResponsive=function(){return true};p.prototype.onGridResize=function(t){if(t.control&&t.control.isA("sap.f.GridList")&&t.control.isGrouped()){this._flattenHeight(t.control)}if(t){if(!this._hasBoxWidth()){this._applySizeClass(t.control)}}};p.prototype._flattenHeight=function(t){var i=0,e;this._loopOverGridItems(t,function(t){if(!t.classList.contains("sapMGHLI")){t.style.height=""}});this._loopOverGridItems(t,function(t){if(!t.classList.contains("sapMGHLI")){i=Math.max(jQuery(t).outerHeight(),i)}});e=i+"px";this._loopOverGridItems(t,function(t){if(!t.classList.contains("sapMGHLI")){t.style.height=e}})};p.prototype._applySizeClass=function(t){var i=e.media.getCurrentRange("StdExt",t.$().width());if(!i){return}var s=o[i.name];t.getGridDomRefs().forEach(function(t){if(!t.classList.contains(s)){Object.keys(o).map(function(i){t.classList.remove(o[i])});t.classList.add(s)}})};p.prototype._getTemplateColumns=function(){var t="";if(this.getBoxWidth()){t="repeat(auto-fit, "+this.getBoxWidth()+")"}else if(this.getBoxMinWidth()){t="repeat(auto-fit, minmax("+this.getBoxMinWidth()+", 1fr))"}return t};p.prototype._hasBoxWidth=function(){if(this.getBoxWidth()||this.getBoxMinWidth()){return true}else{return false}};p.prototype._addSpanClasses=function(t){var i,e=this.getBoxesPerRowConfig(),o,n,p,l;if(this._hasBoxWidth()){return}if(!e||!e.length===0){i=a}else{i=s.exec(e)}if(i){for(var u=1;u<i.length;u++){var d=i[u];if(!d){continue}d=d.toUpperCase();switch(d.substr(0,1)){case"X":if(d.substr(1,1)==="L"){o=this._getBoxesPerRowClass(d,2)}break;case"L":n=this._getBoxesPerRowClass(d,1);break;case"M":p=this._getBoxesPerRowClass(d,1);break;case"S":l=this._getBoxesPerRowClass(d,1);break;default:break}}}o=o||r.XL;n=n||r.L;p=p||r.M;l=l||r.S;t.class(o).class(n).class(p).class(l)};p.prototype._getBoxesPerRowClass=function(t,i){var e=parseInt(t.substr(i,t.length));if(e&&e>0&&e<13){return"sapUiLayoutCSSGridBoxLayoutSpan"+t}};p.prototype._loopOverGridItems=function(t,i){t.getGridDomRefs().forEach(function(t){if(t&&t.children){for(var e=0;e<t.children.length;e++){if(t.children[e].style.display!=="none"&&t.children[e].style.visibility!=="hidden"){i(t.children[e])}}}})};return p});
//# sourceMappingURL=GridBoxLayout.js.map