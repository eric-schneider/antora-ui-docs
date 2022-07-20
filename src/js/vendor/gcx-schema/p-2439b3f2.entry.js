import{r as a,h as r}from"./p-e2e44488.js";const o=class{constructor(r){a(this,r),this.language="en"}componentWillLoad(){this.loadSchemaData()}render(){return this.schema.bottomSidebar.active?r("div",{class:"other-resources"},r("h4",null,this.schema.bottomSidebar.title),r("ul",null,this.schema.bottomSidebar.listItem.map((a=>r("li",null,r("i",{class:"material-icons"},a.icon),r("a",{href:a.link},a.item)))))):r("slot",null)}loadSchemaData(){this.uri.settings.map((a=>{if(this.language===a.lang){let r=[];a.bottom_sidebar.list_item.map((a=>{r.push({item:a.item,icon:a.icon,link:a.link})})),this.schema={lang:a.lang,bottomSidebar:{active:a.bottom_sidebar.active,title:a.bottom_sidebar.title,listItem:r}}}}))}};o.style=":host{display:block;--gcx-sidebar-h4-color:#3C4961;--gcx-sidebar-li-color:#3C4961;--gcx-sidebar-li-padding:8px 16px;--gcx-sidebar-li-font-size:2em}.other-resources{padding:16px;display:flex;flex-direction:column;align-items:flex-start}.other-resources h4{padding:11px 16px;margin:0;color:var(--gcx-sidebar-h4-color)}.other-resources ul{list-style:none;padding:0;margin:0}.other-resources li{padding-left:1.3em;display:flex;padding:var(--gcx-sidebar-li-padding);display:flex;align-items:center;flex-direction:row;gap:10px}.other-resources li i{font-size:var(--gcx-sidebar-li-font-size);color:var(--gcx-sidebar-li-color)}.other-resources li a{color:var(--gcx-sidebar-li-color);text-decoration-line:underline}@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v134/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2')}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased}";const t=class{constructor(r){a(this,r),this.language="en"}componentWillLoad(){this.loadSchemaData()}render(){return this.schema.sampleAppGallery.active?r("div",{class:"card",onClick:()=>{this.redirectPage(this.schema.sampleAppGallery.link)}},r("div",{class:"icon"},this.schema.sampleAppGallery.icon),r("div",{class:"name"},r("h4",null,this.schema.sampleAppGallery.title),r("p",null,this.schema.sampleAppGallery.content))):r("slot",null)}redirectPage(a){window.open(a)}loadSchemaData(){this.uri.settings.map((a=>{this.language===a.lang&&(this.schema={lang:a.lang,sampleAppGallery:{active:a.sample_app_gallery.active,title:a.sample_app_gallery.title,icon:a.sample_app_gallery.icon,content:a.sample_app_gallery.content,link:a.sample_app_gallery.link}})}))}};t.style=":host{display:block;--gcx-app-gallery-p-color:#5C6A85;--gcx-app-appgallery-h4-color:#20293A;--gcx-sample-appgallery-card-padding:16px 24px;--gcx-sample-appgallery-card-background:#F6F8FA;--gcx-sample-appgallery-card-border:2px solid #A6B1C2}.card{display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;padding:var(--gcx-sample-appgallery-card-padding);background:var(--gcx-sample-appgallery-card-background);border:var(--gcx-sample-appgallery-card-border);border-radius:6px;margin:16px;cursor:pointer}.card h4{color:var(--gcx-app-appgallery-h4-color);font-weight:500;font-size:20px;line-height:150%}h4,p{margin-block-start:0;margin-block-end:0}.card p{color:var(--gcx-app-gallery-p-color)}.icon{margin-right:24px;font-weight:700;font-size:24px;line-height:24px}";const i=class{constructor(r){a(this,r),this.language="en"}componentWillLoad(){this.loadSchemaData()}render(){return this.schema.topTitle.active?r("div",{class:"announcement-banner"},r("p",{class:"row"},this.schema.topTitle.title)):r("slot",null)}loadSchemaData(){this.uri.settings.map((a=>{this.language===a.lang&&(this.schema={lang:a.lang,topTitle:{active:a.top_title.active,title:a.top_title.title}})}))}};i.style=":host{display:inline;--gcx-topbar-height:48px;--gcx-topbar-position:unset;--gcx-topbar-bgcolor:#1e71d4;--gcx-topbar-color:#FFF;--gcx-topbar-padding:10px 0}.announcement-banner{background-color:var(--gcx-topbar-bgcolor);color:var(--gcx-topbar-color);text-align:center;text-align:center;width:100%;max-width:100vw;position:var(--gcx-topbar-position);height:var(--gcx-topbar-height);z-index:1024;top:0}p.row{margin-top:0;padding:var(--gcx-topbar-padding);margin-bottom:0}";export{o as gcx_schema_bottom_sidebar,t as gcx_schema_sample_app_gallery,i as gcx_schema_topbar}