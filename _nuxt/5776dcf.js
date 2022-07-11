(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9],{262:function(t,n,e){"use strict";e.r(n);var r={name:"WarningText",props:{message:{type:String,default:null}}},o=e(24),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("span",{staticClass:"text-red-500"},[n("svg",{staticClass:"ml-2 h-6 w-6 inline",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}})]),t._v("\n    "+t._s(this.message)+"\n")])}),[],!1,null,null,null);n.default=component.exports},263:function(t,n,e){var r=e(3);t.exports=r(1..valueOf)},266:function(t,n,e){var content=e(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(109).default)("8ce182dc",content,!0,{sourceMap:!1})},271:function(t,n,e){"use strict";var r=e(2),o=e(3),l=e(44),c=e(263),d=e(187),f=e(4),v=RangeError,_=String,h=Math.floor,x=o(d),y=o("".slice),m=o(1..toFixed),w=function(t,n,e){return 0===n?e:n%2==1?w(t,n-1,e*t):w(t*t,n/2,e)},k=function(data,t,n){for(var e=-1,r=n;++e<6;)r+=t*data[e],data[e]=r%1e7,r=h(r/1e7)},C=function(data,t){for(var n=6,e=0;--n>=0;)e+=data[n],data[n]=h(e/t),e=e%t*1e7},D=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var n=_(data[t]);s=""===s?n:s+x("0",7-n.length)+n}return s};r({target:"Number",proto:!0,forced:f((function(){return"0.000"!==m(8e-5,3)||"1"!==m(.9,0)||"1.25"!==m(1.255,2)||"1000000000000000128"!==m(0xde0b6b3a7640080,0)}))||!f((function(){m({})}))},{toFixed:function(t){var n,e,r,o,d=c(this),f=l(t),data=[0,0,0,0,0,0],h="",m="0";if(f<0||f>20)throw v("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return _(d);if(d<0&&(h="-",d=-d),d>1e-21)if(e=(n=function(t){for(var n=0,e=t;e>=4096;)n+=12,e/=4096;for(;e>=2;)n+=1,e/=2;return n}(d*w(2,69,1))-69)<0?d*w(2,-n,1):d/w(2,n,1),e*=4503599627370496,(n=52-n)>0){for(k(data,0,e),r=f;r>=7;)k(data,1e7,0),r-=7;for(k(data,w(10,r,1),0),r=n-1;r>=23;)C(data,1<<23),r-=23;C(data,1<<r),k(data,1,1),C(data,2),m=D(data)}else k(data,0,e),k(data,1<<-n,0),m=D(data)+x("0",f);return m=f>0?h+((o=m.length)<=f?"0."+x("0",f-o)+m:y(m,0,o-f)+"."+y(m,o-f)):h+m}})},272:function(t,n,e){"use strict";e(266)},273:function(t,n,e){var r=e(108)((function(i){return i[1]}));r.push([t.i,'.customtooltip{position:relative;display:inline-block;border-bottom:1px dotted #000}.customtooltip .customtooltiptext{visibility:hidden;width:150px;background-color:#555;color:#fff;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;bottom:125%;left:50%;margin-left:-60px;opacity:0;transition:opacity .3s}.customtooltip .customtooltiptext:after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border:5px solid transparent;border-top-color:#555}.customtooltip:hover .customtooltiptext{visibility:visible;opacity:1}',""]),r.locals={},t.exports=r},289:function(t,n,e){"use strict";e.r(n);e(271);var r=e(262),o={name:"AnalysisData",props:{analysisData:{type:Object,default:null}},components:{WarningText:r.default},data:function(){return{articulationHighTrigger:4.75,articulationLowTrigger:3.75,balanceWarningTrigger:.8,balanceRounded:null}},mounted:function(){this.balanceRounded=100*this.analysisData.balance.toFixed(2)}},l=(e(272),e(24)),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("div",[n("ul",{staticClass:"bg-white rounded-lg border border-gray-200 text-gray-900"},[n("li",{staticClass:"px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"},[t._v("\n            Number of syllables:\n            "+t._s(this.analysisData.number_of_syllables)+"\n        ")]),t._v(" "),n("li",{staticClass:"px-6 py-2 border-b border-gray-200 w-full"},[t._v("\n            Number of pauses:\n            "+t._s(this.analysisData.number_of_pauses)+"\n        ")]),t._v(" "),n("li",{staticClass:"px-6 py-2 border-b border-gray-200 w-full"},[t._v("\n            Speaking duration:\n            "+t._s(this.analysisData.speaking_duration)+"\n            seconds\n        ")]),t._v(" "),n("li",{staticClass:"px-6 py-2 border-b border-gray-200 w-full"},[t._v("\n            Audio duration:\n            "+t._s(this.analysisData.original_duration)+"\n            seconds\n        ")]),t._v(" "),n("li",{staticClass:"px-6 py-2 border-b border-gray-200 w-full"},[t._m(0),t._v("\n            "+t._s(this.analysisData.balance)+"\n            "),this.analysisData.balance<this.balanceWarningTrigger?n("WarningText",{attrs:{message:100-this.balanceRounded+"% of the audio contains no dialogue."}}):t._e()],1),t._v(" "),n("li",{staticClass:"px-6 py-2 w-full rounded-b-lg"},[t._m(1),t._v("\n            "+t._s(this.analysisData.articulation_rate)+"\n            "),this.analysisData.articulation_rate<this.articulationLowTrigger?n("WarningText",{attrs:{message:"You are speaking slower than the average!"}}):t._e(),t._v(" "),this.analysisData.articulation_rate>this.articulationHighTrigger?n("WarningText",{attrs:{message:"You are speaking faster than the average!"}}):t._e(),t._v(" "),n("span",{staticClass:"text-gray-500 text-xs"},[t._v("The average value for Articulation Rate in the English\n                language is 4 syllables per second.")])],1)])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"customtooltip"},[t._v("\n                Speaking ratio:\n                "),n("span",{staticClass:"customtooltiptext"},[t._v("speaking duration/original duration")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"customtooltip"},[t._v("\n                Articulation rate:\n                "),n("span",{staticClass:"customtooltiptext"},[t._v("syllables/sec speaking duration")])])}],!1,null,null,null);n.default=component.exports}}]);