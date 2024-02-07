sap.ui.define(["sap/ui/core/mvc/Controller","custom/FilerobotImageEditor","sap/ui/Device","sap/ui/model/json/JSONModel","sap/m/MessageToast","sap/m/Image","sap/ui/core/Icon","custom/JSZip"],(e,t,i,o,s,a,n)=>{"use strict";let l=0;let r={};let d;let g;return e.extend("ui5.imgeditor.controller.App",{onInit(){let e=1;if(i.system.desktop){e=4}else if(i.system.tablet){e=2}let t=new o({pagesCount:e});this.getView().setModel(t,"settings");let s=new o(r);this.getView().setModel(s,"imgEditors");this._initialiseCarousel()},onBeforeRendering(){},onAfterRendering(){},_getFileSizeInBase64:function(e){const t=e.endsWith("==")?2:e.endsWith("=")?1:0;const i=e.length/4*3-t;const o=i/1024;const s=o/1e3;return{sizeInBytes:i,sizeInKB:o,sizeInMB:s}},onUploadnShow:function(e){var t=this.getView().byId("myFileUploader");var i=t.oFileUpload.files[0];var o=new FileReader;o.onload=function(e){var t=e.target.result;var i=new sap.m.Image({src:t});var o=this.getView().byId("myPanel");o.addContent(i)}.bind(this);o.readAsDataURL(i)},onUploadAddImage:function(){let e=this.getView().byId("fileUploaderCarousel");let t=e.oFileUpload.files[0];if(t){let e=new FileReader;e.onload=function(e){let t=e.target.result;this._addImageToCarousel(t)}.bind(this);e.readAsDataURL(t)}},onOpenImgEditor:function(e,i){if(d&&g!==i){d.terminate()}const{TABS:o,TOOLS:s}=t;const a={source:e,onSave:function(e,t){this._saveAll(r)}.bind(this),onBeforeSave:function(e){},annotationsCommon:{fill:"#00000000",stroke:"#ff0000",strokeWidth:2},Text:{text:"Text..."},Rotate:{angle:90,componentType:"slider"},translations:{profile:"Profile",coverPhoto:"Cover photo",facebook:"Facebook",socialMedia:"Social Media",fbProfileSize:"180x180px",fbCoverPhotoSize:"820x312px"},Crop:{presetsItems:[{titleKey:"classicTv",descriptionKey:"4:3",ratio:4/3},{titleKey:"cinemascope",descriptionKey:"21:9",ratio:21/9}],presetsFolders:[{titleKey:"socialMedia",groups:[{titleKey:"facebook",items:[{titleKey:"profile",width:180,height:180,descriptionKey:"fbProfileSize"},{titleKey:"coverPhoto",width:820,height:312,descriptionKey:"fbCoverPhotoSize"}]}]}]},tabsIds:[o.ADJUST,o.ANNOTATE],defaultTabId:o.ANNOTATE,defaultToolId:s.ELLIPSE,defaultSavedImageName:"image",defaultSavedImageType:"jpg"};let n=this.getView().byId("imgContainer");let l=n.getDomRef();this.getView().byId("imgContainer").destroyContent();d=new t(l,a);d.render({onClose:e=>{d.terminate()},onModify:function(e){let t=d.getCurrentImgData();let o=t.imageData.imageBase64;r[i]=o;this.getView().getModel("imgEditors").setData(r)}.bind(this)});g=i},_initialiseCarousel:function(){let e=this.getView().byId("carouselSample");e.destroyPages();if(i.system.desktop){e.setShowPageIndicator(false)}else if(i.system.tablet||i.system.phone){e.setShowPageIndicator(true);e.setPageIndicatorBackgroundDesign("Translucent");e.setPageIndicatorBorderDesign("None")}},_addImageToCarousel:function(e){let t="img"+l;r[t]=e;this.getView().getModel("imgEditors").setData(r);let i=this.getView().byId("carouselSample");let o=new a(t,{src:`{imgEditors>/${t}}`,height:"8rem"});o.attachPress(this.onEditImage.bind(this));i.addPage(o);this.onOpenImgEditor(e,t);l++},onEditImage(e){let t=e.getParameter("id");if(g===t){return}let i=e.getSource();let o=i.mProperties.src;this.onOpenImgEditor(o,t)},_saveAll:function(e){if(Object.keys(e).length>0){for(const t in e){let i=document.createElement("a");i.href=e[t];i.download=t;i.click();console.log("Saved",t)}s.show("All Images Saved")}else{s.show("No Images to be saved")}},onSaveAll:function(e){this._saveAll(r)}})});
//# sourceMappingURL=App.controller.js.map