/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/core/library","sap/m/Text","sap/ui/core/Element","sap/ui/events/KeyCodes","./ObjectAttributeRenderer","sap/base/Log","sap/ui/base/ManagedObjectObserver","sap/ui/core/Core"],function(t,e,i,o,n,s,r,a,u,g){"use strict";var p=i.TextDirection;var l=t.EmptyIndicatorMode;var c=i.aria.HasPopup;var m=e.extend("sap.m.ObjectAttribute",{metadata:{library:"sap.m",designtime:"sap/m/designtime/ObjectAttribute.designtime",properties:{title:{type:"string",group:"Misc",defaultValue:null},text:{type:"string",group:"Misc",defaultValue:null},active:{type:"boolean",group:"Misc",defaultValue:null},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:p.Inherit},ariaHasPopup:{type:"sap.ui.core.aria.HasPopup",group:"Accessibility",defaultValue:c.None}},aggregations:{customContent:{type:"sap.ui.core.Control",multiple:false},_textControl:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}},events:{press:{parameters:{domRef:{type:"string"}}}},dnd:{draggable:true,droppable:false}},renderer:r});m.prototype.init=function(){this.setAggregation("_textControl",new o)};m.prototype.exit=function(){if(this._oCustomContentObserver){this._oCustomContentObserver.disconnect();this._oCustomContentObserver=null}if(this._oCustomContentCloning){this._oCustomContentCloning.destroy()}};m.prototype.onBeforeRendering=function(){var t,e=this.getId()+"-title";if(this._isClickable()&&!this._isSimulatedLink()){t=this.getCustomContent();t.setAriaHasPopup(this.getAriaHasPopup());if(!t.getAriaLabelledBy().includes(e)){t.addAriaLabelledBy(e)}}};m.prototype._getUpdatedTextControl=function(){var t=this._oCustomContentCloning||this.getAggregation("_textControl"),e=this.getTitle(),i=this.getAggregation("customContent")?this.getAggregation("customContent").getText():this.getText(),o=this.getTextDirection(),n=this.getParent(),s=g.getConfiguration().getRTL(),a,u=true,c="",m;this._bEmptyIndicatorMode=this._isEmptyIndicatorMode();if(o===p.LTR&&s){c="‎"}if(o===p.RTL&&!s){c="‏"}i=c+i+c;if(e){m=e;if(g.getConfiguration().getLocale().getLanguage().toLowerCase()==="fr"){m+=" "}m+=": "+i}else{m=i}if(this._bEmptyIndicatorMode){this.getAggregation("_textControl").setEmptyIndicatorMode(l.On)}t.setText(m);t.setTextDirection(o);if(n&&n.isA("sap.m.ObjectListItem")){u=false;a=r.MAX_LINES.SINGLE_LINE}this._setControlWrapping(t,u,a);return t};m.prototype._isEmptyIndicatorMode=function(){var t=this.getAggregation("customContent");return t&&t.getEmptyIndicatorMode()!==l.Off&&!t.getText()};m.prototype._setControlWrapping=function(t,e,i){if(t.isA("sap.m.Link")){t.setWrapping(e)}if(t.isA("sap.m.Text")){t.setMaxLines(i)}};m.prototype.ontap=function(t){var e=t.target;e=e.id?e:e.parentElement;if(this._isSimulatedLink()&&e.id===this.getId()+"-text"){this.firePress({domRef:this.getDomRef()})}};m.prototype.onsapenter=function(t){if(this._isSimulatedLink()){this.firePress({domRef:this.getDomRef()});t.setMarked()}};m.prototype.onsapspace=function(t){t.preventDefault()};m.prototype.onkeyup=function(t){if(t.which===s.SPACE){this.onsapenter(t)}};m.prototype._isEmpty=function(){if(this.getAggregation("customContent")&&!(this.getAggregation("customContent").isA("sap.m.Link")||this.getAggregation("customContent").isA("sap.m.Text"))){a.warning('Only sap.m.Link or sap.m.Text are allowed in "sap.m.ObjectAttribute.customContent" aggregation');return true}return!(this.getText().trim()||this.getTitle().trim())};m.prototype.ontouchstart=function(t){if(this._isSimulatedLink()){t.originalEvent._sapui_handledByControl=true}};m.prototype.getPopupAnchorDomRef=function(){return this.getDomRef("text")};m.prototype.getFocusDomRef=function(){var t=this.getDomRef();if(t){if(this._isSimulatedLink()){return t.querySelector(".sapMObjectAttributeText")}else if(this._isClickable()){return this.getAggregation("customContent").getDomRef()}}return n.prototype.getFocusDomRef.apply(this,arguments)};m.prototype._isSimulatedLink=function(){return this.getActive()&&this.getText()!==""&&!this.getAggregation("customContent")};m.prototype.setCustomContent=function(t){var e=this.getCustomContent();if(this._oCustomContentCloning){this._oCustomContentCloning.destroy()}this._oCustomContentCloning=t&&t.clone();if(!this._oCustomContentObserver){this._oCustomContentObserver=new u(function(){this.invalidate()}.bind(this))}if(e){this._oCustomContentObserver.unobserve(e)}t&&this._oCustomContentObserver.observe(t,{properties:true});return this.setAggregation("customContent",t)};m.prototype._isClickable=function(){return this.getActive()&&this.getText()!==""||this.getAggregation("customContent")&&this.getAggregation("customContent").isA("sap.m.Link")};return m});
//# sourceMappingURL=ObjectAttribute.js.map