(window.webpackJsonp=window.webpackJsonp||[]).push([[7,10],{263:function(t,e,n){"use strict";n.r(e);var o=n(10),r=(n(58),n(261),n(18),n(34),n(1)),d={audioSrc:{type:String,default:null},audioSinkDeviceId:{type:String,default:null},refLink:{type:String,default:null},audioControls:{type:Boolean,default:!0},corsAnonym:{type:Boolean,default:!1},audioClass:{type:String,default:null},canvHeight:{type:Number,default:80},canvClass:{type:String,default:null},canvTop:{type:Boolean,default:!1},canvFillColor:{type:[String,Array],default:null},canvId:{type:String}},l={createHTMLElements:function(){var t=document.createElement("canvas"),e=document.createElement("div"),n=null,audio=null,o="             width: "+(window.innerWidth-170)+"px;             margin-top: 8px;";this.refLink?audio=this.$parent.$refs[this.refLink]:(audio=document.createElement("audio"),n=document.createElement("div"),audio.setAttribute("src",this.audioSrc),audio.setAttribute("style",o),this.audioControls&&audio.setAttribute("controls",!0),this.audioClass&&audio.setAttribute("class",this.audioClass),this.corsAnonym&&(audio.crossOrigin="anonymous"),n.appendChild(audio),this.$el.appendChild(n)),this.canvClass&&t.setAttribute("class",this.canvClass),this.canvId&&t.setAttribute("id",this.canvId),this.canvWidth&&t.setAttribute("width",this.canvWidth),this.canvHeight&&t.setAttribute("height",this.canvHeight),e.appendChild(t),this.canvTop?this.$el.insertBefore(e,n):this.$el.appendChild(e),this.ctxWrapper=t,this.ctx=t.getContext("2d"),this.audio=audio,this.audio.load()},setAnalyser:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,audio;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.audioCtx=t.audioCtx||new AudioContext,t.analyser=t.analyser||t.audioCtx.createAnalyser(),n=t.audioCtx.createMediaElementSource(t.audio),o=t.audioCtx.createMediaStreamDestination(),n.connect(t.analyser),t.analyser.fftSize=t.fftSize,t.analyser.connect(o),(audio=new Audio).srcObject=o.stream,!t.audioSinkDeviceId){e.next=12;break}return e.next=12,audio.setSinkId(t.audioSinkDeviceId);case 12:audio.play();case 13:case"end":return e.stop()}}),e)})))()},fillGradient:function(t){var e=this.canvWidth,n=this.canvHeight,o=this.ctx.createLinearGradient(e/2,0,e/2,n),r=0;return t.forEach((function(e){o.addColorStop(r,e),r+=1/t.length})),o},getAudioElement:function(){return this.audio},resizeCanvas:function(){this.canvWidth=window.innerWidth-170;var t=document.getElementById(this.canvId);t&&t.getContext("2d").clearRect(0,0,this.canvWidth,this.canvHeight)}},c=r["h"[0]];e.default={props:d,expose:["getAudioElement"],render:function(t){return c?c("div"):t("div")},data:function(){return{canvWidth:null}},mounted:function(){var t=this;this.resizeCanvas(),this.createHTMLElements(),this.audio.onclick=function(){t.audioCtx||t.setAnalyser()},this.audio.onplay=function(){t.$emit("playing"),t.audioCtx||t.setAnalyser(),t.mainLoop(),t.audioCtx&&t.audioCtx.resume()},this.audio.onpause=function(){t.$emit("paused"),t.audioCtx&&(t.audioCtx.suspend(),cancelAnimationFrame(t.animId))},this.audio.onended=function(){t.$emit("ended")}},beforeDestroy:function(){this.audioCtx&&this.audioCtx.suspend(),cancelAnimationFrame(this.animId)},methods:l}},265:function(t,e,n){"use strict";n.r(e);n(261),n(59),n(18),n(34),n(107);var o=n(266),r=n.n(o),d=n(263),l={canvHeight:{type:Number,default:80},playedLineWidth:{type:Number,default:.5},playedLineColor:{type:String,default:"navy"},noplayedLineWidth:{type:Number,default:.5},noplayedLineColor:{type:String,default:"blue"},playtime:{type:Boolean,default:!0},playtimeWithMs:{type:Boolean,default:!0},playtimeFontSize:{type:Number,default:12},playtimeFontFamily:{type:String,default:"monospace"},playtimeFontColor:{type:String,default:"grey"},playtimeTextBottom:{type:Boolean,default:!1},playtimeSlider:{type:Boolean,default:!0},playtimeSliderColor:{type:String,default:"red"},playtimeSliderWidth:{type:Number,default:1},playtimeClickable:{type:Boolean,default:!0},requester:{type:Function,default:r.a},drawMode:{type:String,default:"normal"},diarizationWindows:{type:Array,default:function(){return[]}},diarizationColors:{type:Array,default:function(){return[]}}},c={name:"av-waveform",mixins:[d.default],props:l,data:function(){return{animId:null,ctxWrapper:null,ctx:null,audio:null,duration:null,peaks:[]}},mounted:function(){this.init()},methods:{init:function(){var t=this,e={responseType:"arraybuffer",onDownloadProgress:this.downloadProgress};this.requester.get(this.audio.src,e).then((function(e){return t.decode(e)})).catch((function(e){console.error("Failed to get file '".concat(t.audio.src,"'")),console.log(e)})),this.audio.onplay=function(){t.animId=requestAnimationFrame(t.waveformAnim)},this.audio.onpause=function(){cancelAnimationFrame(t.animId),t.animId=null}},setAnalyser:function(){return null},mainLoop:function(){return null},decode:function(t){var e=this;(new AudioContext).decodeAudioData(t.data,(function(t){e.setPeaks(t)}),(function(t){console.error("Failed to decode audio data."),console.log(t)}))},setPeaks:function(t){var e=this,n=[],o=0,r=0,d=0,l=0,c=Math.ceil(t.length/this.canvWidth),h=this.canvWidth,m=this.canvHeight;this.duration=t.duration;for(var f=0;f<t.numberOfChannels;f++)for(var data=t.getChannelData(f),s=0;s<h;s++){var v=~~(s*c),y=~~(v+c);o=0,r=0;for(var i=v;i<y;i++)o=data[i]<o?data[i]:o,r=data[i]>r?data[i]:r;n[s]&&(n[s][0]=n[s][0]<r?r:n[s][0],n[s][1]=n[s][1]>o?o:n[s][1]),n[s]=[r,o]}for(var x=0;x<n.length;x++)d=m/2-(r=n[x][0])*m/2,l=m/2-(o=n[x][1])*m/2,n[x]=[d,l===d?d+1:l];this.peaks=n,this.playtimeClickable&&this.ctxWrapper.addEventListener("click",(function(t){return e.updateTime(t)})),this.waveform()},waveform:function(){var t=this.peaks,time=this.audio.currentTime,e=this.playX(time),n=0;if(this.ctx.clearRect(0,0,this.canvWidth,this.canvHeight),"normal"==this.drawMode)n=this.draw(t.slice(0,e),this.playedLineWidth,this.playedLineColor,n),this.draw(t.slice(e),this.noplayedLineWidth,this.noplayedLineColor,n);else if("diarization"==this.drawMode){var o=0,r=0;for(var i in this.diarizationWindows){var d=this.diarizationWindows[i],l=d.speaker_id,c=d.start,h=d.end;c>o&&(r=this.draw(t.slice(this.playX(o),this.playX(c)),this.noplayedLineWidth,"grey",r),o=c),r=this.draw(t.slice(this.playX(o),this.playX(h)),this.noplayedLineWidth,this.diarizationColors[l],r),o=h}}this.drawSlider(time),this.playtime&&this.drawTime(time)},waveformAnim:function(){this.waveform(),this.animId=requestAnimationFrame(this.waveformAnim)},draw:function(data,t,e,n){var o=this;return this.ctx.lineWidth=t,this.ctx.strokeStyle=e,this.ctx.beginPath(),data.forEach((function(t){o.ctx.moveTo(n,o.canvHeight),o.ctx.lineTo(n,o.canvHeight-t[1]+t[0]),n++})),this.ctx.stroke(),n},timeFormat:function(t){var e="",time=parseFloat(t);if(isNaN(time))return e;var n=~~(time/60),o=~~(time%60),r=~~(time%1*1e3);return e=n<10?"0".concat(n,":"):"".concat(n,":"),e+="0".concat(o).substr(-2),this.playtimeWithMs&&(e+="."+"00".concat(r).substr(-3)),e},drawTime:function(time){var t=this.timeFormat(time),e=~~this.ctx.measureText(t).width,n=this.playX(time),o=n>this.canvWidth-e-3?n-e-3:n+3,r=this.playtimeTextBottom?this.canvHeight-this.playtimeFontSize+3:this.playtimeFontSize+3;this.ctx.fillStyle=this.playtimeFontColor,this.ctx.font="".concat(this.playtimeFontSize,"px ").concat(this.playtimeFontFamily),this.ctx.fillText(t,o,r)},drawSlider:function(time){var t=this.playX(time);this.ctx.lineWidth=this.playtimeSliderWidth,this.ctx.strokeStyle=this.playtimeSliderColor,this.ctx.beginPath(),this.ctx.moveTo(t,0),this.ctx.lineTo(t,this.canvHeight),this.ctx.stroke()},playX:function(time){return~~(time/this.duration*this.canvWidth)},updateTime:function(t){this.audio.currentTime=t.offsetX/this.canvWidth*this.duration,this.animId||this.waveform()},downloadProgress:function(t){var e=Math.round(t.loaded/t.total*this.canvWidth);this.ctx.clearRect(0,0,this.canvWidth,this.canvHeight),this.ctx.beginPath(),this.ctx.strokeStyle=this.noplayedLineColor,this.ctx.moveTo(0,this.canvHeight/2),this.ctx.lineTo(e,this.canvHeight/2),this.ctx.stroke()}}};e.default=c},268:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=["https://",".s3.",".amazonaws.com"]},288:function(t,e,n){"use strict";n.r(e);var o=n(265),r=n(268),d={name:"DiarizationData",props:{id:{type:String,default:null},audioId:{type:String,default:null},extraInfo:{type:String,default:null},diarizationWindows:{type:Array,default:function(){return[]}},originalDbBySpeaker:{type:Object,default:function(){return[]}},finalDbBySpeaker:{type:Object,default:function(){return[]}}},components:{AvWaveform:o.default},data:function(){return{originalAudio:null,filteredAudio:null,auphonicAudio:null,renderAudioWave:!1,playerHeight:200,diarizationColors:["blue","red","green","yellow","orange"],awsBucketUrl:r.a[0]+"rsscom-better-audio-showcase"+r.a[1]+"eu-west-3"+r.a[2]}},created:function(){this.originalAudio=this.awsBucketUrl+"/"+this.audioId+"/original.mp3",this.filteredAudio=this.awsBucketUrl+"/"+this.audioId+"/final.mp3",this.auphonicAudio=this.awsBucketUrl+"/"+this.audioId+"/auphonic.mp3"},mounted:function(){this.renderAudioWave=!0}},l=n(24),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mb-4"},[n("h4",{staticClass:"font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600"},[t._v("About "+t._s(t.audioId)+":")]),t._v(" "),n("p",[t._v(t._s(this.extraInfo))])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"mt-6 mb-6"},[n("h3",{staticClass:"font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600"},[t._v("\n            Original audio\n        ")]),t._v(" "),t.renderAudioWave?n("av-waveform",{staticClass:"grid place-items-center",attrs:{"canv-id":this.id+"original_canv","draw-mode":"diarization","canv-top":!0,"diarization-windows":this.diarizationWindows,"diarization-colors":this.diarizationColors,"canv-height":this.playerHeight,"audio-src":this.originalAudio}}):t._e(),t._v(" "),n("h5",{staticClass:"mt-4 ml-2 font-medium leading-tight text-xl mb-2 text-blue-600"},[t._v("Average Speakers dB:")]),t._v(" "),t._l(t.originalDbBySpeaker,(function(e,o){return n("h4",{key:o+"original",staticClass:"ml-4",style:{color:t.diarizationColors[o]}},[t._v("\n            Speaker "+t._s(o)+": "+t._s(e)+" dB\n        ")])}))],2),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"mt-6 mb-6"},[n("h3",{staticClass:"font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600"},[t._v("\n            Filtered audio\n        ")]),t._v(" "),t.renderAudioWave?n("av-waveform",{staticClass:"grid place-items-center",attrs:{"canv-id":this.id+"filtered_canv","canv-top":!0,"draw-mode":"diarization","diarization-windows":this.diarizationWindows,"diarization-colors":this.diarizationColors,"canv-height":this.playerHeight,"audio-src":this.filteredAudio}}):t._e(),t._v(" "),n("h5",{staticClass:"mt-4 ml-4 font-medium leading-tight text-xl mb-2 text-blue-600"},[t._v("Average Speakers dB:")]),t._v(" "),t._l(t.finalDbBySpeaker,(function(e,o){return n("h4",{key:o+"filtered",staticClass:"ml-8",style:{color:t.diarizationColors[o]}},[t._v("\n            Speaker "+t._s(o)+": "+t._s(e)+" dB\n        ")])}))],2),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"mt-6"},[n("h3",{staticClass:"font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600"},[t._v("\n            Auphonic audio\n        ")]),t._v(" "),t.renderAudioWave?n("av-waveform",{staticClass:"grid place-items-center",attrs:{"canv-id":this.id+"auphonic_canv","draw-mode":"diarization","canv-top":!0,"diarization-windows":this.diarizationWindows,"diarization-colors":this.diarizationColors,"canv-height":this.playerHeight,"audio-src":this.auphonicAudio}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports}}]);