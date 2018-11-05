(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(e,n,t){"use strict";t.r(n);var l=t(10),a=t.n(l),r=t(136),i=t.n(r),u=t(0),d=t.n(u),o=t(140),p=t(137),s=t(148),m=t(145),f={Button:p.Button,Props:s.a,React:d.a,MDXTag:m.MDXTag},c=t(147);t.d(n,"pageQuery",function(){return y});var y="2186483958";n.default=function(e){var n=e.children,t=i()(e,["children"]);return d.a.createElement(o.MDXScopeProvider,{__mdxScope:a()({},f)},d.a.createElement(c.a,t,n))}},148:function(e,n,t){"use strict";t.d(n,"a",function(){return p});t(141);var l=t(149),a=t(0),r=t.n(a),i=t(142),u=t(137),d="3867025378";function o(e,n){if(!e)return null;if(Array.isArray(e)&&e.length>0){var t=e.filter(function(e){return o(e,n)});return t.length?t[0]:null}return"object"==typeof e&&e.name===n?e:null}function p(e){var n=e.name;return r.a.createElement(i.StaticQuery,{query:d,render:function(e){for(var t=e.allFile.edges,l=null,a=0,i=t.length;a<i;a++){var d=o(t[a].node.fields.meta,n);if(d){l=d;break}}return l?r.a.createElement(u.Table,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"name"),r.a.createElement("th",null,"type"),r.a.createElement("th",null,"required"),r.a.createElement("th",null,"default"),r.a.createElement("th",null,"description"))),r.a.createElement("tbody",null,l.props.map(function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.type),r.a.createElement("td",null,""+e.required),r.a.createElement("td",null,e.defaultValue),r.a.createElement("td",null,e.description))}))):null},data:l})}},149:function(e){e.exports={data:{allFile:{edges:[{node:{fields:{meta:[{name:"components",props:[{name:"name",description:"inputの対象名",required:!0,type:"string",defaultValue:null}]},{name:"SideMenu",props:[]},{name:"MenuList",props:[]},{name:"MenuLabel",props:[]}]}}},{node:{fields:{meta:[{name:"Button",props:[{name:"disabled",description:"-",required:!1,type:"boolean",defaultValue:null},{name:"color",description:"ボタンの色",required:!1,type:"string",defaultValue:null},{name:"size",description:"ボタンのサイズ",required:!1,type:"SizeType",defaultValue:null},{name:"outline",description:"背景が透明なボタンでする",required:!1,type:"boolean",defaultValue:null},{name:"full",description:"全体幅のボタンで設定",required:!1,type:"boolean",defaultValue:null}]}]}}},{node:{fields:{meta:[{name:"ButtonGroup",props:[]}]}}},{node:{fields:{meta:[{name:"Box",props:[{name:"color",description:"色指定",required:!1,type:"string",defaultValue:null},{name:"borderless",description:"borderを非表示する",required:!1,type:"boolean",defaultValue:null}]}]}}},{node:{fields:{meta:[{name:"AppBar",props:[{name:"children",description:"メニュー、ボタンなどを自由に定義できます。メニューはできれば<ul>タグで指定してください",required:!1,type:"any",defaultValue:null},{name:"color",description:"background色",required:!1,type:"string",defaultValue:"null"},{name:"brand",description:"ロゴのイメージ、プロジェクト名など",required:!1,type:"any",defaultValue:"null"},{name:"fixed",description:"定義された位置を固定にする",required:!1,type:"boolean",defaultValue:"false"},{name:"sticky",description:"(IE11不可)画面がスクロールされても上で貼り付けいるようにする",required:!1,type:"boolean",defaultValue:"false"},{name:"fluid",description:"中央並びから自動幅で表示します",required:!1,type:"boolean",defaultValue:"false"},{name:"backdrop",description:"背景がblurされます（safari専用、他は透明度）",required:!1,type:"boolean",defaultValue:"false"},{name:"align",description:"childrenに定義するElementの並び順を指定します。未定義は自動並び",required:!1,type:'"left" | "right"',defaultValue:null},{name:"style",description:"cssのスタイルを入れてください",required:!1,type:"any",defaultValue:"null"}]}]}}},{node:{fields:{meta:[{name:"Code",props:[]}]}}},{node:{fields:{meta:[{name:"H1",props:[]}]}}},{node:{fields:{meta:[{name:"Content",props:[]}]}}},{node:{fields:{meta:[{name:"Pre",props:[]}]}}},{node:{fields:{meta:[{name:"Bar",props:[{name:"loading",description:"trueの場合開始します",required:!0,type:"boolean",defaultValue:"false"},{name:"color",description:"バーの色の指定",required:!1,type:"string",defaultValue:"primary"},{name:"position",description:"バーのCSS positionの指定",required:!1,type:'"absolute" | "fixed" | "sticky"',defaultValue:"absolute"},{name:"background",description:"バーの背景の色の自由指定",required:!1,type:"string",defaultValue:"transparent"},{name:"size",description:"バーの縦幅の定義",required:!1,type:"string",defaultValue:"3px"},{name:"duration",description:"バーのアニメーションのduration指定 (単位：ms)",required:!1,type:"number",defaultValue:"150"}]}]}}},{node:{fields:{meta:[{name:"Card",props:[{name:"image",description:"レスポンシブなイメージを追加する",required:!1,type:"string",defaultValue:null},{name:"title",description:"タイトル",required:!1,type:"string",defaultValue:null},{name:"headerOptions",description:"ヘッダーの右側に追加する",required:!1,type:"ReactNode",defaultValue:null},{name:"horizontal",description:"header部分（イメージ）を横並びにする",required:!1,type:"boolean",defaultValue:null},{name:"footer",description:"footer",required:!1,type:"ReactNode",defaultValue:null},{name:"color",description:"色の指定",required:!1,type:"string",defaultValue:null},{name:"style",description:"カスタinline style",required:!1,type:"any",defaultValue:null}]}]}}},{node:{fields:{meta:[]}}},{node:{fields:{meta:[{name:"Checkbox",props:[{name:"name",description:"inputの対象名",required:!0,type:"string",defaultValue:"null"}]}]}}},{node:{fields:{meta:[{name:"Spinner",props:[{name:"color",description:"色の指定",required:!1,type:"string",defaultValue:null},{name:"width",description:"横幅",required:!1,type:"string",defaultValue:null},{name:"height",description:"縦幅",required:!1,type:"string",defaultValue:null},{name:"borderSize",description:"spinnerの太さ",required:!1,type:"string",defaultValue:null}]}]}}},{node:{fields:{meta:[{name:"Field",props:[]}]}}},{node:{fields:{meta:[{name:"Radio",props:[{name:"name",description:"inputの対象名",required:!0,type:"string",defaultValue:"null"}]}]}}},{node:{fields:{meta:[{name:"Select",props:[{name:"name",description:"inputの対象名",required:!0,type:"string",defaultValue:"null"}]}]}}},{node:{fields:{meta:[{name:"Switch",props:[{name:"name",description:"inputの対象名",required:!0,type:"string",defaultValue:null}]}]}}},{node:{fields:{meta:[{name:"TextInput",props:[{name:"type",description:"'text' | 'number' | 'password' | 'email' | 'phone'",required:!0,type:'"number" | "text" | "password" | "email" | "phone"',defaultValue:"text"},{name:"error",description:"エラーの発生時の表示テキスト",required:!1,type:"string",defaultValue:null},{name:"help",description:"捕捉テキスト",required:!1,type:"string",defaultValue:null},{name:"outline",description:"ボックス系のデザインでする",required:!1,type:"boolean",defaultValue:null},{name:"leftIcon",description:"左側のアイコン",required:!1,type:"any",defaultValue:null},{name:"rightIcon",description:"右側のアイコン",required:!1,type:"any",defaultValue:null},{name:"name",description:"inputの対象名",required:!0,type:"string",defaultValue:null}]}]}}},{node:{fields:{meta:[{name:"Textarea",props:[{name:"error",description:"エラーの発生時の表示テキスト",required:!1,type:"string",defaultValue:null},{name:"help",description:"捕捉テキスト",required:!1,type:"string",defaultValue:null},{name:"name",description:"inputの対象名",required:!0,type:"string",defaultValue:null}]}]}}},{node:{fields:{meta:[]}}},{node:{fields:{meta:[]}}},{node:{fields:{meta:[{name:"Form",props:[{name:"name",description:"inputの対象名",required:!0,type:"string",defaultValue:null}]}]}}},{node:{fields:{meta:[{name:"Container",props:[]}]}}},{node:{fields:{meta:[{name:"Col",props:[{name:"narrow",description:"固定の幅を指定する場合",required:!1,type:"boolean",defaultValue:null},{name:"size",description:"1-12のサイズ",required:!1,type:"ColSizeType",defaultValue:null},{name:"offset",description:"1-12の左のoffset",required:!1,type:"ColSizeType",defaultValue:null},{name:"auto",description:"1-12基準のサイズを画面サイズのよって可変にする",required:!1,type:"boolean",defaultValue:null}]}]}}},{node:{fields:{meta:[{name:"Row",props:[{name:"width",description:"固定幅",required:!1,type:"string",defaultValue:null},{name:"multiline",description:"向く数の行で対応できるようにする",required:!1,type:"boolean",defaultValue:null},{name:"vcenter",description:"縦の中央揃えにする",required:!1,type:"boolean",defaultValue:null},{name:"center",description:"横幅の中央揃えにする",required:!1,type:"boolean",defaultValue:null},{name:"noGutter",description:"Colの間隔をなくす",required:!1,type:"boolean",defaultValue:null}]}]}}},{node:{fields:{meta:[{name:"Hero",props:[{name:"color",description:"背景の色",required:!1,type:"string",defaultValue:null},{name:"size",description:"small | medium | large | full",required:!1,type:'"small" | "medium" | "large" | "full"',defaultValue:null},{name:"center",description:"childrenの中央揃え",required:!1,type:"boolean",defaultValue:null},{name:"header",description:"カスタムヘッダー",required:!1,type:"any",defaultValue:null}]}]}}},{node:{fields:{meta:[{name:"Progress",props:[{name:"value",description:"現状の進捗",required:!0,type:"number",defaultValue:null},{name:"max",description:"進捗の最大値",required:!0,type:"number",defaultValue:null},{name:"size",description:"バーのサイズ",required:!1,type:"SizeType",defaultValue:null},{name:"height",description:"sizeを使わないときの縦幅を指定する",required:!1,type:"string",defaultValue:null},{name:"color",description:"バーの色",required:!1,type:"string",defaultValue:"primary"}]}]}}},{node:{fields:{meta:[{name:"SideMenu",props:[]},{name:"MenuList",props:[]},{name:"MenuLabel",props:[]}]}}},{node:{fields:{meta:[{name:"Popover",props:[{name:"children",description:"内容のリスト",required:!1,type:"any",defaultValue:null},{name:"label",description:"ボタンの内容",required:!0,type:"any",defaultValue:null},{name:"color",description:"ボタンの色",required:!1,type:"string",defaultValue:null},{name:"right",description:"右の基準でリストを表示する",required:!1,type:"boolean",defaultValue:null},{name:"size",description:"ボタンのサイズ",required:!1,type:"SizeType",defaultValue:null},{name:"position",description:"吹き出しが表示される場所",required:!1,type:'"top-left" | "top" | "top-right" | "bottom-left" | "bottom" | "bottom-right"',defaultValue:"bottom-left"}]}]}}},{node:{fields:{meta:[{name:"Modal",props:[{name:"children",description:"モーダルのbodyに入れる内容",required:!1,type:"any",defaultValue:null},{name:"title",description:"ヘッダーのタイトル文言",required:!1,type:"any",defaultValue:null},{name:"size",description:"1~12のモーダルサイズ",required:!1,type:"ColSizeType",defaultValue:null},{name:"domId",description:"特定のdomで表示したい場合はそのidを指定してください",required:!1,type:"string",defaultValue:"modal"},{name:"show",description:"trueの場合、モーダルを表示します。",required:!1,type:"boolean",defaultValue:"false"},{name:"footer",description:"モーダルのfooterに入れる内容",required:!1,type:"any",defaultValue:null},{name:"color",description:"モーダルの色",required:!1,type:"string",defaultValue:"white"},{name:"closeModal",description:"モーダルを閉じる処理",required:!0,type:"() => void",defaultValue:null},{name:"closeOnOverlay",description:"オーバーレイのクリックでモーダルクローズ",required:!1,type:"boolean",defaultValue:null},{name:"closeOnEsc",description:"escボタンでクローズ",required:!1,type:"boolean",defaultValue:null}]}]}}},{node:{fields:{meta:[{name:"Table",props:[]}]}}},{node:{fields:{meta:[{name:"ToastItem",props:[{name:"id",description:"認識ID",required:!0,type:"string",defaultValue:null},{name:"message",description:"表示する内容",required:!1,type:"any",defaultValue:null},{name:"color",description:"背景の色",required:!1,type:"string",defaultValue:null},{name:"duration",description:"表示される時間 nullの場合は自動で閉じられません",required:!1,type:"number",defaultValue:"5000"}]},{name:"Toast",props:[{name:"toasts",description:"表示するToastのリスト",required:!0,type:"ToastType[]",defaultValue:null},{name:"clear",description:"toastを消すタイミングのコールバック",required:!0,type:"(id: string) => void",defaultValue:null},{name:"position",description:"top, top-right, top-left, bottom, bottom-right, bottom-left",required:!1,type:"PositionType",defaultValue:"top-right"},{name:"fixed",description:"スクロールしても固定として表示する",required:!1,type:"boolean",defaultValue:"false"}]}]}}},{node:{fields:{meta:[{name:"Tabs",props:[{name:"color",description:"色指定",required:!1,type:"string",defaultValue:null},{name:"align",description:"left | right | center",required:!1,type:"AlignType",defaultValue:null},{name:"maxItems",description:"一気に表示する最大の数の指定",required:!1,type:"number",defaultValue:"5"}]}]}}},{node:{fields:{meta:[{name:"Tooltip",props:[{name:"children",description:"マウスオーバーの対象になるelement",required:!0,type:"any",defaultValue:null},{name:"label",description:"吹き出しとして表示したい内容",required:!0,type:"any",defaultValue:null},{name:"color",description:"吹き出しの背景色の指定",required:!1,type:"string",defaultValue:"dark"},{name:"position",description:"表示される場所",required:!1,type:'"top" | "left" | "right" | "bottom"',defaultValue:"bottom"}]}]}}},{node:{fields:{meta:[{name:"Tag",props:[{name:"children",description:"タグの内容",required:!0,type:"any",defaultValue:"null"},{name:"onClose",description:"Xボタンの追加＋クリック時のイベントハンドラー",required:!1,type:"() => void",defaultValue:"null"},{name:"onClick",description:"クリック時のイベントハンドラー",required:!1,type:"() => void",defaultValue:"null"},{name:"color",description:"色の指定",required:!1,type:"string",defaultValue:"null"}]}]}}},{node:{fields:{meta:[]}}}]}}}}}]);
//# sourceMappingURL=component---cache-gatsby-mdx-mdx-wrappers-dir-c-8-a-300-f-6-e-0-a-1-f-0-a-8-a-21-b-8-f-93053-ba-1-ef-scope-hash-19-f-4-e-803-e-6862-f-642272-e-9167-ea-368-a-8-js-2da2cec490b96c9b4e03.js.map