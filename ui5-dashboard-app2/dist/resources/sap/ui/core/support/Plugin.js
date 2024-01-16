/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/thirdparty/jquery","sap/base/util/uid","sap/m/MessageBox","sap/ui/core/Lib"],function(t,jQuery,e,i,n){"use strict";var o=t.extend("sap.ui.core.support.Plugin",{constructor:function(i,n,o){t.apply(this);this._id=i?i:e();this._title=n?n:"";this._bActive=false;this._aEventIds=[];this._bIsToolPlugin=o.isToolStub();this._oStub=o}});o.prototype.init=function(t){for(var e=0;e<this._aEventIds.length;e++){var i=this["on"+this._aEventIds[e]];if(typeof i==="function"){t.attachEvent(this._aEventIds[e],i,this)}}this._bActive=true};o.prototype.exit=function(t){for(var e=0;e<this._aEventIds.length;e++){var i=this["on"+this._aEventIds[e]];if(typeof i==="function"){t.detachEvent(this._aEventIds[e],i,this)}}this._bActive=false};o.prototype.getId=function(){return this._id};o.prototype.getTitle=function(){return this._title};o.prototype.isToolPlugin=function(){return true};o.prototype.isAppPlugin=function(){return true};o.prototype.runsAsToolPlugin=function(){return this._bIsToolPlugin};o.prototype.$=function(t){if(this.isToolPlugin()){var e=jQuery(document.getElementById(t?this.getId()+"-"+t:this.getId()));if(e.length==0&&!t){e=jQuery("<div></div>",{id:this.getId()});e.appendTo(jQuery(".sapUiSupportCntnt"))}return e}return new jQuery};o.prototype.dom=function(t){if(this.isToolPlugin()){var e=document.getElementById(this.getId());if(t==null){return e}if(/^[\w-]+$/.test(t)){return document.getElementById(this.getId()+"-"+t)}return e&&e.querySelector(t)}return null};o.prototype.addStylesheet=function(t){if(!t){return}var e=sap.ui.require.toUrl(t+".css"),i=document.createElement("link");i.setAttribute("rel","stylesheet");i.setAttribute("type","text/css");i.setAttribute("href",e);var n=document.getElementsByTagName("head")[0];n.appendChild(i)};o.prototype.isActive=function(){return this._bActive};o.prototype.confirmReload=function(t){i.confirm(this._getText("TechInfo.ReloadApp.ConfirmMessage"),{title:this._getText("TechInfo.DebugSources.ConfirmTitle"),onClose:function(e){if(e===i.Action.OK){t()}}})};o.prototype._getText=function(t,e){return n.getResourceBundleFor("sap.ui.core").getText(t,e)};return o});
//# sourceMappingURL=Plugin.js.map