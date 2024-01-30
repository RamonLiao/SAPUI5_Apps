/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/core/ValueStateSupport","sap/ui/core/IndicationColorSupport","sap/ui/core/library","sap/ui/base/DataType","./ObjectStatusRenderer","sap/m/ImageHelper","sap/ui/core/LabelEnablement","sap/ui/core/InvisibleText"],function(t,e,i,o,a,r,n,s,l,p){"use strict";var u=a.TextDirection;var c=a.ValueState;var g=t.EmptyIndicatorMode;var d=e.extend("sap.m.ObjectStatus",{metadata:{interfaces:["sap.ui.core.IFormContent"],library:"sap.m",designtime:"sap/m/designtime/ObjectStatus.designtime",properties:{title:{type:"string",group:"Misc",defaultValue:null},text:{type:"string",group:"Misc",defaultValue:null},active:{type:"boolean",group:"Misc",defaultValue:false},state:{type:"string",group:"Misc",defaultValue:c.None},inverted:{type:"boolean",group:"Misc",defaultValue:false},icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},iconDensityAware:{type:"boolean",group:"Appearance",defaultValue:true},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:u.Inherit},emptyIndicatorMode:{type:"sap.m.EmptyIndicatorMode",group:"Appearance",defaultValue:g.Off},stateAnnouncementText:{type:"string",group:"Misc"}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{press:{}},dnd:{draggable:true,droppable:false}},renderer:n});d.prototype._getStateText=function(t){if(t!==c.None&&this.isPropertyInitial("stateAnnouncementText")){return i.getAdditionalText(t)?i.getAdditionalText(t):o.getAdditionalText(t)}return!this.isPropertyInitial("stateAnnouncementText")?this.getStateAnnouncementText():""};d.prototype.exit=function(){if(this._oImageControl){this._oImageControl.destroy();this._oImageControl=null}if(this._oInvisibleStateText){this._oInvisibleStateText.destroy();this._oInvisibleStateText=null}};d.prototype._getImageControl=function(){var t=this.getId()+"-icon",e=!this.getText()&&!this.getTitle(),i={src:this.getIcon(),densityAware:this.getIconDensityAware(),useIconTooltip:false};if(e){i.decorative=false;i.alt=sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("OBJECT_STATUS_ICON")}this._oImageControl=s.getImageControl(t,this._oImageControl,this,i);return this._oImageControl};d.prototype.setState=function(t){if(t==null){t=c.None}else if(!r.getType("sap.ui.core.ValueState").isValid(t)&&!r.getType("sap.ui.core.IndicationColor").isValid(t)){throw new Error('"'+t+'" is not a value of the enums sap.ui.core.ValueState or sap.ui.core.IndicationColor for property "state" of '+this)}return this.setProperty("state",t)};d.prototype.ontap=function(t){if(this._isClickable(t)){this.firePress()}};d.prototype.onsapenter=function(t){if(this._isActive()){this.firePress();t.setMarked()}};d.prototype.onsapspace=function(t){this.onsapenter(t)};d.prototype._isActive=function(){return this.getActive()&&(this.getText().trim()||this.getIcon().trim())};d.prototype._isEmpty=function(){return!(this.getText().trim()||this.getIcon().trim()||this.getTitle().trim())};d.prototype.ontouchstart=function(t){if(this._isClickable(t)){t.setMarked()}};d.prototype.getAccessibilityInfo=function(){var t=this.isPropertyInitial("stateAnnouncementText")?i.getAdditionalText(this.getState()):this.getStateAnnouncementText(),e;if(this.getState()!=c.None){t=t!==null?t:o.getAdditionalText(this.getState())}e=((this.getTitle()||"")+" "+(this.getText()||"")+" "+(t!==null?t:"")+" "+(this.getTooltip()||"")).trim();e=this._isActive()?e+(e?" "+sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("OBJECT_STATUS_ACTIVE"):""):e;return{description:e}};d.prototype._hasExternalLabelling=function(){return this.getAriaLabelledBy().length>0||l.getReferencingLabels(this).length>0};d.prototype._generateSelfLabellingIds=function(){var t=this.getId(),e="";if(this.getTitle()){e+=t+"-title "}if(this.getText()){e+=t+"-text "}if(this.getIcon()){e+=t+"-statusIcon "}return e.trim()};d.prototype._isClickable=function(t){var e=t.target.id;return this._isActive()&&(e===this.getId()+"-link"||e===this.getId()+"-text"||e===this.getId()+"-statusIcon"||e===this.getId()+"-icon")};d.prototype._fnInvisibleStateLabelFactory=function(){if(!this._oInvisibleStateText){this._oInvisibleStateText=new p({id:this.getId()+"-state-text",text:this._getStateText(this.getState())}).toStatic()}return this._oInvisibleStateText};return d});
//# sourceMappingURL=ObjectStatus.js.map