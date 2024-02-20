(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{367:function(s,t,a){"use strict";a.r(t);var r=a(5),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"背景介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景介绍"}},[s._v("#")]),s._v(" 背景介绍")]),s._v(" "),t("p",[s._v("项目中使用的UI组件库和SDK库分别为两个git,为了同一维护将两个git库合并为一个git库，为了出现问题时好排查问题，保留两个库原有的git提交记录")]),s._v(" "),t("h2",{attrs:{id:"修改方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改方式"}},[s._v("#")]),s._v(" 修改方式")]),s._v(" "),t("ol",[t("li",[s._v("创建新的库的目录，初始化git")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("git init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("添加要合并库的远程分支")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("git remote add origin_a https"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git\ngit remote add origin_b https"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("看下是否添加成功")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("git remote "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("拉去要合并库的分支，此处以master为例")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("git fetch origin_a master\ngit fetch origin_b master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("合并项目")])]),s._v(" "),t("p",[s._v("合并项目a")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("git merge origin_a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("master "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("allow"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("unrelated"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("histories\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("把拉取的文件放到想要放的文件夹中，.git文件不要放")]),s._v(" "),t("p",[s._v("然后提交此次修改")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("git add "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\ngit commit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"merge a_master"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("同理合并项目b")]),s._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[s._v("推送本地分支到远程")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("git remote add origin https"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git\ngit push "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"7"}},[t("li",[s._v("删除本地配置的远程a，b仓库")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("git remote rm origin_a\ngit remote rm origin_b\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);