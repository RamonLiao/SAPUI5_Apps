/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib"],function(e){"use strict";var n=e.getResourceBundleFor("sap.m");var t={apiVersion:2};t.render=function(e,t){var a=t.getId();e.openStart("div",t);e.class("sapMFeedInBase");e.attr("role","group");e.attr("aria-label",n.getText("FEED_INPUT_ARIA_LABEL"));e.openEnd();e.openStart("div",a+"-outerContainer");e.class("sapMFeedIn");if(!t.getShowIcon()){e.class("sapMFeedInNoIcon")}if(!t.getEnabled()){e.class("sapMFeedInDisabled")}e.openEnd();if(t.getShowIcon()){this._addImage(e,t,a)}e.openStart("div",a+"-container");e.class("sapMFeedInContainer");e.openEnd();var o=t._getTextArea();e.renderControl(o);e.renderControl(t._getPostButton());e.close("div");e.close("div");e.openStart("div",a+"-counterContainer");e.class("sapMFeedInCounter");e.openEnd();e.close("div");e.close("div")};t._addImage=function(e,n,t){e.openStart("figure",t+"-figure").class("sapMFeedInFigure");if(!n.getIcon()){e.class("sapMFeedListItemIsDefaultIcon")}e.openEnd();e.renderControl(n._getAvatar());e.close("figure")};return t},true);
//# sourceMappingURL=FeedInputRenderer.js.map