(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{332:function(s,t,e){"use strict";e.r(t);var a=e(7),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"遇到问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遇到问题"}},[s._v("#")]),s._v(" 遇到问题")]),s._v(" "),t("p",[s._v("应用使用过程中发现长时间操作之后，页面操作卡顿")]),s._v(" "),t("h2",{attrs:{id:"分析问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分析问题"}},[s._v("#")]),s._v(" 分析问题")]),s._v(" "),t("ol",[t("li",[s._v("内存泄漏")])]),s._v(" "),t("p",[s._v("首先想到的是内存泄漏导致内存不断增长导致，经过对内存泄漏的修复后发现操作依旧卡顿")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("页面渲染太过频繁")])]),s._v(" "),t("p",[s._v("使用的时vue, 之前遇到过栏位上快速输入字符卡顿的问题，当时的解决方法是去掉组件中使用的"),t("code",[s._v("$attr")]),s._v("和"),t("code",[s._v("$listener")]),s._v("\n因为在vue源码中发现以下的注释")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $attrs & $listeners are exposed for easier HOC creation.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// they need to be reactive so that HOCs using them are always updated")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这次去掉"),t("code",[s._v("$attr")]),s._v("和"),t("code",[s._v("$listener")]),s._v(" 后操作依旧卡顿")]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("页面回流和重绘的元素过多")])]),s._v(" "),t("p",[s._v("通过对页面元素的观察，发现页面上的style标签居然有上万条，css规则过多，一旦有需要回流的元素，那么重新匹配css规则就会很慢，导致页面操作卡顿\n手动删除style标签后，发现操作不再卡顿，最后判断操作卡顿的最终原因就是"),t("code",[s._v("style标签过多导致")])]),s._v(" "),t("h2",{attrs:{id:"解决问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决问题"}},[s._v("#")]),s._v(" 解决问题")]),s._v(" "),t("p",[s._v("style标签过多的原因，我们使用的框架中每次打开页面时都会加载当前页面上的css样式，通过style-loader抽成了style标签加载到了页面上，由于有dev环境下需要热更新的原因，所以每次加载时没有使用缓存，导致每次加载都会重读加载css，现在增加了环境的判断，当时生产环境时，就使用缓存不再重复加载样式，解决问题")])])}),[],!1,null,null,null);t.default=r.exports}}]);