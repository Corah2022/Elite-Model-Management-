var f=function(){var F=function(input,parent){if(!input)return;this.input=input;if(typeof input==="string")try{this.items=(parent?parent:document).querySelectorAll(input)}catch(err){this.items=[input]}else if(Array.isArray(input))this.items=input;else if(typeof input==="object")this.items=[input];Object.defineProperty(this,"item",{get:function(){return this.items[0]}})};F.prototype.prototype=function(){return F.prototype};var _f=function(input,parent){return new F(input,parent)};return _f}();
(function(){f().prototype().each=function(callback){if(!callback||typeof callback!=="function"||!this.items)return;for(var i=0;i<this.items.length;i++)callback(this.items[i],i);return this};f().prototype().closest=function(selector){return f(this.item.closest(selector))};f().prototype().find=function(selector){return f(selector,this.items[0])};f().prototype().html=function(html){var result=this;this.each(function(item){if(html===undefined)result=item.innerHTML;else item.innerHTML=html});return result};
f().prototype().text=function(html){var result=this;this.each(function(item){if(html===undefined)result=item.innerText;else item.innerText=html});return result};f().prototype().id=function(){return"id_"+Math.random().toString(36).substr(2,9)}})();
(function(){f().prototype().addClass=function(className){this.each(function(item){item.offsetHeight;item.classList.add(className)});return this};f().prototype().removeClass=function(className){this.each(function(item){item.offsetHeight;item.classList.remove(className)});return this};f().prototype().toggleClass=function(className){this.each(function(item){item.offsetHeight;item.classList.toggle(className)});return this};f().prototype().hasClass=function(className){return this.item.classList.contains(className)}})();
(function(){var api={};f().prototype().api=function(input,channel){if(!channel)channel="web";if(typeof input=="function"){var headers={};if(api.k){var token={t:(new Date).getTime(),token:localStorage.getItem(channel)};f(JSON.stringify(token)).apiEncrypt(function(base64){headers.token=localStorage.getItem(channel);headers.sign=base64;input(headers)})}else input(headers)}else if(input&&input.uri&&input.uri.indexOf("handshake")>0){if(input.uri.indexOf("http")!=0)if(input.uri.indexOf("/")!=0)input.uri=
      "/"+input.uri;crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},true,["deriveKey"]).then(function(key){crypto.subtle.exportKey("raw",key.publicKey).then(function(bytes){f().http({method:"POST",url:input.uri,onsuccess:function(event){var json=JSON.parse(event.target.responseText);localStorage.setItem(input.channel,json.d);crypto.subtle.importKey("spki",base64ToArrayBuffer(json.k),{name:"ECDH",namedCurve:"P-256"},true,[]).then(function(publicKey){crypto.subtle.deriveKey({name:"ECDH","public":publicKey},
  key.privateKey,{name:"AES-CTR",length:256},false,["encrypt","decrypt"]).then(function(secretKey){api.k=secretKey;api.t=json.t;api.u=json.u;input.onsuccess()})})},params:{k:arrayBufferToBase64(bytes),t:(new Date).getTime(),d:localStorage.getItem(input.channel),c:input.channel}})})})}else{var json={authenticated:api.u};return json}return this};f().prototype().decodeBase64=function(){return arrayBufferToString(base64ToArrayBuffer(this.input))};f().prototype().encodeBase64=function(){return arrayBufferToBase64(stringToArrayBuffer(this.input))};
  function arrayBufferToBase64(buffer){var binary="";var bytes=new Uint8Array(buffer);var len=bytes.byteLength;for(var i=0;i<len;i++)binary+=String.fromCharCode(bytes[i]);return window.btoa(binary)}function base64ToArrayBuffer(base64){var binary_string=window.atob(base64);var len=binary_string.length;var bytes=new Uint8Array(len);for(var i=0;i<len;i++)bytes[i]=binary_string.charCodeAt(i);return bytes}function stringToArrayBuffer(str){var arr=new Uint8Array(str.length);for(var i=str.length;i--;)arr[i]=
    str.charCodeAt(i);return arr.buffer}function arrayBufferToString(buffer){var arr=new Uint8Array(buffer);var str=String.fromCharCode.apply(String,arr);return str}f().prototype().arrayBufferToBase64=arrayBufferToBase64;f().prototype().base64ToArrayBuffer=base64ToArrayBuffer;f().prototype().stringToArrayBuffer=stringToArrayBuffer;f().prototype().arrayBufferToString=arrayBufferToString;f().prototype().apiDecrypt=function(callback){crypto.subtle.decrypt({name:"AES-CTR",length:128,counter:new Uint8Array([0,
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])},api.k,base64ToArrayBuffer(this.input)).then(function(bytes){callback(arrayBufferToString(bytes))});return this};f().prototype().apiEncrypt=function(callback){crypto.subtle.encrypt({name:"AES-CTR",length:128,counter:new Uint8Array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])},api.k,stringToArrayBuffer(this.input)).then(function(bytes){callback(arrayBufferToBase64(bytes))});return this}})();
(function(){var colors={"blue":"rgb(0, 122, 255)","green":"rgb(52, 199, 89)","indigo":"rgb(88, 86, 214)","orange":"rgb(255, 149, 0)","pink":"rgb(255, 45, 85)","purple":"rgb(175, 82, 222)","red":"rgb(255, 59, 48)","teal":"rgb(90, 200, 250)","yellow":"rgb(255, 204, 0)","gray-5":"rgb(0, 0, 0)","gray-4":"rgb(28, 28, 30)","gray-3":"rgb(44, 44, 46)","gray-2":"rgb(58, 58, 60)","gray-1":"rgb(72, 72, 74)","gray0":"rgb(99, 99, 102)","gray1":"rgb(142, 142, 147)","gray2":"rgb(174, 174, 178)","gray3":"rgb(199, 199, 204)",
    "gray4":"rgb(209, 209, 214)","gray5":"rgb(229, 229, 234)","gray6":"rgb(242, 242, 247)","gray7":"rgb(255, 255, 255)","darkBlue":"rgb(10, 132, 255)","darkGreen":"rgb(48, 209, 88)","darkIndigo":"rgb(94, 92, 230)","darkOrange":"rgb(255, 159, 10)","darkPink":"rgb(255, 55, 95)","darkPurple":"rgb(191, 90, 242)","darkRed":"rgb(255, 69, 58)","darkTeal":"rgb(100, 210, 255)","darkYellow":"rgb(255, 214, 10)","darkGray-5":"rgb(255, 255, 255)","darkGray-4":"rgb(242, 242, 247)","darkGray-3":"rgb(229, 229, 234)",
  "darkGray-2":"rgb(209, 209, 214)","darkGray-1":"rgb(199, 199, 204)","darkGray0":"rgb(174, 174, 178)","darkGray1":"rgb(142, 142, 147)","darkGray2":"rgb(99, 99, 102)","darkGray3":"rgb(72, 72, 74)","darkGray4":"rgb(58, 58, 60)","darkGray5":"rgb(44, 44, 46)","darkGray6":"rgb(28, 28, 30)","darkGray7":"rgb(0, 0, 0)"};f().prototype().color=function(name,isDark){if(isDark===true)name="dark"+name.charAt(0).toUpperCase()+name.slice(1);return colors[name]};f().prototype().colors=function(){return colors};f().prototype().isDark=
function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return true;else return false}})();
(function(){function fcolor(color,elmnt){if(!(this instanceof fcolor))return new fcolor(color,elmnt);if(typeof color=="object")return color;this.attachValues(toColorObject(color));if(elmnt)elmnt.style.backgroundColor=this.toRgbString()}fcolor.prototype={toRgbString:function(){return"rgb("+this.red+", "+this.green+", "+this.blue+")"},toRgbaString:function(){return"rgba("+this.red+", "+this.green+", "+this.blue+", "+this.opacity+")"},toHwbString:function(){return"hwb("+this.hue+", "+Math.round(this.whiteness*
      100)+"%, "+Math.round(this.blackness*100)+"%)"},toHwbStringDecimal:function(){return"hwb("+this.hue+", "+this.whiteness+", "+this.blackness+")"},toHwbaString:function(){return"hwba("+this.hue+", "+Math.round(this.whiteness*100)+"%, "+Math.round(this.blackness*100)+"%, "+this.opacity+")"},toHslString:function(){return"hsl("+this.hue+", "+Math.round(this.sat*100)+"%, "+Math.round(this.lightness*100)+"%)"},toHslStringDecimal:function(){return"hsl("+this.hue+", "+this.sat+", "+this.lightness+")"},toHslaString:function(){return"hsla("+
    this.hue+", "+Math.round(this.sat*100)+"%, "+Math.round(this.lightness*100)+"%, "+this.opacity+")"},toCmykString:function(){return"cmyk("+Math.round(this.cyan*100)+"%, "+Math.round(this.magenta*100)+"%, "+Math.round(this.yellow*100)+"%, "+Math.round(this.black*100)+"%)"},toCmykStringDecimal:function(){return"cmyk("+this.cyan+", "+this.magenta+", "+this.yellow+", "+this.black+")"},toNcolString:function(){return this.ncol+", "+Math.round(this.whiteness*100)+"%, "+Math.round(this.blackness*100)+"%"},
    toNcolStringDecimal:function(){return this.ncol+", "+this.whiteness+", "+this.blackness},toNcolaString:function(){return this.ncol+", "+Math.round(this.whiteness*100)+"%, "+Math.round(this.blackness*100)+"%, "+this.opacity},toName:function(){var r,g,b,colorhexs=getColorArr("hexs");for(i=0;i<colorhexs.length;i++){r=parseInt(colorhexs[i].substr(0,2),16);g=parseInt(colorhexs[i].substr(2,2),16);b=parseInt(colorhexs[i].substr(4,2),16);if(this.red==r&&this.green==g&&this.blue==b)return getColorArr("names")[i]}return""},
    toHexString:function(){var r=toHex(this.red);var g=toHex(this.green);var b=toHex(this.blue);return"#"+r+g+b},toRgb:function(){return{r:this.red,g:this.green,b:this.blue,a:this.opacity}},toHsl:function(){return{h:this.hue,s:this.sat,l:this.lightness,a:this.opacity}},toHwb:function(){return{h:this.hue,w:this.whiteness,b:this.blackness,a:this.opacity}},toCmyk:function(){return{c:this.cyan,m:this.magenta,y:this.yellow,k:this.black,a:this.opacity}},toNcol:function(){return{ncol:this.ncol,w:this.whiteness,
      b:this.blackness,a:this.opacity}},isDark:function(n){var m=n||128;return(this.red*299+this.green*587+this.blue*114)/1E3<m},saturate:function(n){var x,rgb,color;x=n/100||.1;this.sat+=x;if(this.sat>1)this.sat=1;rgb=hslToRgb(this.hue,this.sat,this.lightness);color=colorObject(rgb,this.opacity,this.hue,this.sat);this.attachValues(color)},desaturate:function(n){var x,rgb,color;x=n/100||.1;this.sat-=x;if(this.sat<0)this.sat=0;rgb=hslToRgb(this.hue,this.sat,this.lightness);color=colorObject(rgb,this.opacity,
    this.hue,this.sat);this.attachValues(color)},lighter:function(n){var x,rgb,color;x=n/100||.1;this.lightness+=x;if(this.lightness>1)this.lightness=1;rgb=hslToRgb(this.hue,this.sat,this.lightness);color=colorObject(rgb,this.opacity,this.hue,this.sat);this.attachValues(color)},darker:function(n){var x,rgb,color;x=n/100||.1;this.lightness-=x;if(this.lightness<0)this.lightness=0;rgb=hslToRgb(this.hue,this.sat,this.lightness);color=colorObject(rgb,this.opacity,this.hue,this.sat);this.attachValues(color)},
    attachValues:function(color){this.red=color.red;this.green=color.green;this.blue=color.blue;this.hue=color.hue;this.sat=color.sat;this.lightness=color.lightness;this.whiteness=color.whiteness;this.blackness=color.blackness;this.cyan=color.cyan;this.magenta=color.magenta;this.yellow=color.yellow;this.black=color.black;this.ncol=color.ncol;this.opacity=color.opacity;this.valid=color.valid}};function toColorObject(c){var x,y,typ,arr=[],arrlength,i,opacity,match,a,hue,sat,rgb,colornames=[],colorhexs=
    [];c=ftrim(c.toLowerCase());x=c.substr(0,1).toUpperCase();y=c.substr(1);a=1;if((x=="R"||x=="Y"||x=="G"||x=="C"||x=="B"||x=="M"||x=="W")&&!isNaN(y))if(c.length==6&&c.indexOf(",")==-1);else c="ncol("+c+")";if(c.length!=3&&c.length!=6&&!isNaN(c))c="ncol("+c+")";if(c.indexOf(",")>0&&c.indexOf("(")==-1)c="ncol("+c+")";if(c.substr(0,3)=="rgb"||c.substr(0,3)=="hsl"||c.substr(0,3)=="hwb"||c.substr(0,4)=="ncol"||c.substr(0,4)=="cmyk"){if(c.substr(0,4)=="ncol"){if(c.split(",").length==4&&c.indexOf("ncola")==
        -1)c=c.replace("ncol","ncola");typ="ncol";c=c.substr(4)}else if(c.substr(0,4)=="cmyk"){typ="cmyk";c=c.substr(4)}else{typ=c.substr(0,3);c=c.substr(3)}arrlength=3;opacity=false;if(c.substr(0,1).toLowerCase()=="a"){arrlength=4;opacity=true;c=c.substr(1)}else if(typ=="cmyk"){arrlength=4;if(c.split(",").length==5){arrlength=5;opacity=true}}c=c.replace("(","");c=c.replace(")","");arr=c.split(",");if(typ=="rgb"){if(arr.length!=arrlength)return emptyObject();for(i=0;i<arrlength;i++){if(arr[i]==""||arr[i]==
          " ")arr[i]="0";if(arr[i].indexOf("%")>-1){arr[i]=arr[i].replace("%","");arr[i]=Number(arr[i]/100);if(i<3)arr[i]=Math.round(arr[i]*255)}if(isNaN(arr[i]))return emptyObject();if(parseInt(arr[i])>255)arr[i]=255;if(i<3)arr[i]=parseInt(arr[i]);if(i==3&&Number(arr[i])>1)arr[i]=1}rgb={r:arr[0],g:arr[1],b:arr[2]};if(opacity==true)a=Number(arr[3])}if(typ=="hsl"||typ=="hwb"||typ=="ncol"){while(arr.length<arrlength)arr.push("0");if(typ=="hsl"||typ=="hwb")if(parseInt(arr[0])>=360)arr[0]=0;for(i=1;i<arrlength;i++){if(arr[i].indexOf("%")>
          -1){arr[i]=arr[i].replace("%","");arr[i]=Number(arr[i]);if(isNaN(arr[i]))return emptyObject();arr[i]=arr[i]/100}else arr[i]=Number(arr[i]);if(Number(arr[i])>1)arr[i]=1;if(Number(arr[i])<0)arr[i]=0}if(typ=="hsl"){rgb=hslToRgb(arr[0],arr[1],arr[2]);hue=Number(arr[0]);sat=Number(arr[1])}if(typ=="hwb")rgb=hwbToRgb(arr[0],arr[1],arr[2]);if(typ=="ncol")rgb=ncolToRgb(arr[0],arr[1],arr[2]);if(opacity==true)a=Number(arr[3])}if(typ=="cmyk"){while(arr.length<arrlength)arr.push("0");for(i=0;i<arrlength;i++){if(arr[i].indexOf("%")>
          -1){arr[i]=arr[i].replace("%","");arr[i]=Number(arr[i]);if(isNaN(arr[i]))return emptyObject();arr[i]=arr[i]/100}else arr[i]=Number(arr[i]);if(Number(arr[i])>1)arr[i]=1;if(Number(arr[i])<0)arr[i]=0}rgb=cmykToRgb(arr[0],arr[1],arr[2],arr[3]);if(opacity==true)a=Number(arr[4])}}else if(c.substr(0,3)=="ncs")rgb=ncsToRgb(c);else{match=false;colornames=getColorArr("names");for(i=0;i<colornames.length;i++)if(c.toLowerCase()==colornames[i].toLowerCase()){colorhexs=getColorArr("hexs");match=true;rgb={r:parseInt(colorhexs[i].substr(0,
    2),16),g:parseInt(colorhexs[i].substr(2,2),16),b:parseInt(colorhexs[i].substr(4,2),16)};break}if(match==false){c=c.replace("#","");if(c.length==3)c=c.substr(0,1)+c.substr(0,1)+c.substr(1,1)+c.substr(1,1)+c.substr(2,1)+c.substr(2,1);for(i=0;i<c.length;i++)if(!isHex(c.substr(i,1)))return emptyObject();arr[0]=parseInt(c.substr(0,2),16);arr[1]=parseInt(c.substr(2,2),16);arr[2]=parseInt(c.substr(4,2),16);for(i=0;i<3;i++)if(isNaN(arr[i]))return emptyObject();rgb={r:arr[0],g:arr[1],b:arr[2]}}}return colorObject(rgb,
    a,hue,sat)}function colorObject(rgb,a,h,s){var hsl,hwb,cmyk,ncol,color,hue,sat;if(!rgb)return emptyObject();if(a===null)a=1;hsl=rgbToHsl(rgb.r,rgb.g,rgb.b);hwb=rgbToHwb(rgb.r,rgb.g,rgb.b);cmyk=rgbToCmyk(rgb.r,rgb.g,rgb.b);hue=h||hsl.h;sat=s||hsl.s;ncol=hueToNcol(hue);color={red:rgb.r,green:rgb.g,blue:rgb.b,hue:hue,sat:sat,lightness:hsl.l,whiteness:hwb.w,blackness:hwb.b,cyan:cmyk.c,magenta:cmyk.m,yellow:cmyk.y,black:cmyk.k,ncol:ncol,opacity:a,valid:true};color=roundDecimals(color);return color}function emptyObject(){return{red:0,
    green:0,blue:0,hue:0,sat:0,lightness:0,whiteness:0,blackness:0,cyan:0,magenta:0,yellow:0,black:0,ncol:"R",opacity:1,valid:false}}function getColorArr(x){if(x=="names")return["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen",
    "DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow",
    "LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod",
    "PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];if(x=="hexs")return["f0f8ff","faebd7","00ffff","7fffd4","f0ffff","f5f5dc","ffe4c4",
    "000000","ffebcd","0000ff","8a2be2","a52a2a","deb887","5f9ea0","7fff00","d2691e","ff7f50","6495ed","fff8dc","dc143c","00ffff","00008b","008b8b","b8860b","a9a9a9","a9a9a9","006400","bdb76b","8b008b","556b2f","ff8c00","9932cc","8b0000","e9967a","8fbc8f","483d8b","2f4f4f","2f4f4f","00ced1","9400d3","ff1493","00bfff","696969","696969","1e90ff","b22222","fffaf0","228b22","ff00ff","dcdcdc","f8f8ff","ffd700","daa520","808080","808080","008000","adff2f","f0fff0","ff69b4","cd5c5c","4b0082","fffff0","f0e68c",
    "e6e6fa","fff0f5","7cfc00","fffacd","add8e6","f08080","e0ffff","fafad2","d3d3d3","d3d3d3","90ee90","ffb6c1","ffa07a","20b2aa","87cefa","778899","778899","b0c4de","ffffe0","00ff00","32cd32","faf0e6","ff00ff","800000","66cdaa","0000cd","ba55d3","9370db","3cb371","7b68ee","00fa9a","48d1cc","c71585","191970","f5fffa","ffe4e1","ffe4b5","ffdead","000080","fdf5e6","808000","6b8e23","ffa500","ff4500","da70d6","eee8aa","98fb98","afeeee","db7093","ffefd5","ffdab9","cd853f","ffc0cb","dda0dd","b0e0e6","800080",
  "663399","ff0000","bc8f8f","4169e1","8b4513","fa8072","f4a460","2e8b57","fff5ee","a0522d","c0c0c0","87ceeb","6a5acd","708090","708090","fffafa","00ff7f","4682b4","d2b48c","008080","d8bfd8","ff6347","40e0d0","ee82ee","f5deb3","ffffff","f5f5f5","ffff00","9acd32"]}function roundDecimals(c){c.red=Number(c.red.toFixed(0));c.green=Number(c.green.toFixed(0));c.blue=Number(c.blue.toFixed(0));c.hue=Number(c.hue.toFixed(0));c.sat=Number(c.sat.toFixed(2));c.lightness=Number(c.lightness.toFixed(2));c.whiteness=
  Number(c.whiteness.toFixed(2));c.blackness=Number(c.blackness.toFixed(2));c.cyan=Number(c.cyan.toFixed(2));c.magenta=Number(c.magenta.toFixed(2));c.yellow=Number(c.yellow.toFixed(2));c.black=Number(c.black.toFixed(2));c.ncol=c.ncol.substr(0,1)+Math.round(Number(c.ncol.substr(1)));c.opacity=Number(c.opacity.toFixed(2));return c}function hslToRgb(hue,sat,light){var t1,t2,r,g,b;hue=hue/60;if(light<=.5)t2=light*(sat+1);else t2=light+sat-light*sat;t1=light*2-t2;r=hueToRgb(t1,t2,hue+2)*255;g=hueToRgb(t1,
    t2,hue)*255;b=hueToRgb(t1,t2,hue-2)*255;return{r:r,g:g,b:b}}function hueToRgb(t1,t2,hue){if(hue<0)hue+=6;if(hue>=6)hue-=6;if(hue<1)return(t2-t1)*hue+t1;else if(hue<3)return t2;else if(hue<4)return(t2-t1)*(4-hue)+t1;else return t1}function hwbToRgb(hue,white,black){var i,rgb,rgbArr=[],tot;rgb=hslToRgb(hue,1,.5);rgbArr[0]=rgb.r/255;rgbArr[1]=rgb.g/255;rgbArr[2]=rgb.b/255;tot=white+black;if(tot>1){white=Number((white/tot).toFixed(2));black=Number((black/tot).toFixed(2))}for(i=0;i<3;i++){rgbArr[i]*=1-
      white-black;rgbArr[i]+=white;rgbArr[i]=Number(rgbArr[i]*255)}return{r:rgbArr[0],g:rgbArr[1],b:rgbArr[2]}}function cmykToRgb(c,m,y,k){var r,g,b;r=255-Math.min(1,c*(1-k)+k)*255;g=255-Math.min(1,m*(1-k)+k)*255;b=255-Math.min(1,y*(1-k)+k)*255;return{r:r,g:g,b:b}}function ncolToRgb(ncol,white,black){var letter,percent,h,w,b;h=ncol;if(isNaN(ncol.substr(0,1))){letter=ncol.substr(0,1).toUpperCase();percent=ncol.substr(1);if(percent=="")percent=0;percent=Number(percent);if(isNaN(percent))return false;if(letter==
    "R")h=0+percent*.6;if(letter=="Y")h=60+percent*.6;if(letter=="G")h=120+percent*.6;if(letter=="C")h=180+percent*.6;if(letter=="B")h=240+percent*.6;if(letter=="M")h=300+percent*.6;if(letter=="W"){h=0;white=1-percent/100;black=percent/100}}return hwbToRgb(h,white,black)}function hueToNcol(hue){while(hue>=360)hue=hue-360;if(hue<60)return"R"+hue/.6;if(hue<120)return"Y"+(hue-60)/.6;if(hue<180)return"G"+(hue-120)/.6;if(hue<240)return"C"+(hue-180)/.6;if(hue<300)return"B"+(hue-240)/.6;if(hue<360)return"M"+
    (hue-300)/.6}function ncsToRgb(ncs){var black,chroma,bc,percent,black1,chroma1,red1,factor1,blue1,red1,red2,green2,blue2,max,factor2,grey,r,g,b;ncs=ftrim(ncs).toUpperCase();ncs=ncs.replace("(","");ncs=ncs.replace(")","");ncs=ncs.replace("NCS","NCS ");ncs=ncs.replace(/  /g," ");if(ncs.indexOf("NCS")==-1)ncs="NCS "+ncs;ncs=ncs.match(/^(?:NCS|NCS\sS)\s(\d{2})(\d{2})-(N|[A-Z])(\d{2})?([A-Z])?$/);if(ncs===null)return false;black=parseInt(ncs[1],10);chroma=parseInt(ncs[2],10);bc=ncs[3];if(bc!="N"&&bc!=
    "Y"&&bc!="R"&&bc!="B"&&bc!="G")return false;percent=parseInt(ncs[4],10)||0;if(bc!=="N"){black1=1.05*black-5.25;chroma1=chroma;if(bc==="Y"&&percent<=60)red1=1;else if(bc==="Y"&&percent>60||bc==="R"&&percent<=80){if(bc==="Y")factor1=percent-60;else factor1=percent+40;red1=(Math.sqrt(14884-Math.pow(factor1,2))-22)/100}else if(bc==="R"&&percent>80||bc==="B")red1=0;else if(bc==="G"){factor1=percent-170;red1=(Math.sqrt(33800-Math.pow(factor1,2))-70)/100}if(bc==="Y"&&percent<=80)blue1=0;else if(bc==="Y"&&
      percent>80||bc==="R"&&percent<=60){if(bc==="Y")factor1=percent-80+20.5;else factor1=percent+20+20.5;blue1=(104-Math.sqrt(11236-Math.pow(factor1,2)))/100}else if(bc==="R"&&percent>60||bc==="B"&&percent<=80){if(bc==="R")factor1=percent-60-60;else factor1=percent+40-60;blue1=(Math.sqrt(1E4-Math.pow(factor1,2))-10)/100}else if(bc==="B"&&percent>80||bc==="G"&&percent<=40){if(bc==="B")factor1=percent-80-131;else factor1=percent+20-131;blue1=(122-Math.sqrt(19881-Math.pow(factor1,2)))/100}else if(bc==="G"&&
      percent>40)blue1=0;if(bc==="Y")green1=(85-17/20*percent)/100;else if(bc==="R"&&percent<=60)green1=0;else if(bc==="R"&&percent>60){factor1=percent-60+35;green1=(67.5-Math.sqrt(5776-Math.pow(factor1,2)))/100}else if(bc==="B"&&percent<=60){factor1=1*percent-68.5;green1=(6.5+Math.sqrt(7044.5-Math.pow(factor1,2)))/100}else if(bc==="B"&&percent>60||bc==="G"&&percent<=60)green1=.9;else if(bc==="G"&&percent>60){factor1=percent-60;green1=(90-1/8*factor1)/100}factor1=(red1+green1+blue1)/3;red2=(factor1-red1)*
      (100-chroma1)/100+red1;green2=(factor1-green1)*(100-chroma1)/100+green1;blue2=(factor1-blue1)*(100-chroma1)/100+blue1;if(red2>green2&&red2>blue2)max=red2;else if(green2>red2&&green2>blue2)max=green2;else if(blue2>red2&&blue2>green2)max=blue2;else max=(red2+green2+blue2)/3;factor2=1/max;r=parseInt(red2*factor2*(100-black1)/100*255,10);g=parseInt(green2*factor2*(100-black1)/100*255,10);b=parseInt(blue2*factor2*(100-black1)/100*255,10);if(r>255)r=255;if(g>255)g=255;if(b>255)b=255;if(r<0)r=0;if(g<0)g=
    0;if(b<0)b=0}else{grey=parseInt((1-black/100)*255,10);if(grey>255)grey=255;if(grey<0)grey=0;r=grey;g=grey;b=grey}return{r:r,g:g,b:b}}function rgbToHsl(r,g,b){var min,max,i,l,s,maxcolor,h,rgb=[];rgb[0]=r/255;rgb[1]=g/255;rgb[2]=b/255;min=rgb[0];max=rgb[0];maxcolor=0;for(i=0;i<rgb.length-1;i++){if(rgb[i+1]<=min)min=rgb[i+1];if(rgb[i+1]>=max){max=rgb[i+1];maxcolor=i+1}}if(maxcolor==0)h=(rgb[1]-rgb[2])/(max-min);if(maxcolor==1)h=2+(rgb[2]-rgb[0])/(max-min);if(maxcolor==2)h=4+(rgb[0]-rgb[1])/(max-min);
    if(isNaN(h))h=0;h=h*60;if(h<0)h=h+360;l=(min+max)/2;if(min==max)s=0;else if(l<.5)s=(max-min)/(max+min);else s=(max-min)/(2-max-min);s=s;return{h:h,s:s,l:l}}function rgbToHwb(r,g,b){var h,w,bl;r=r/255;g=g/255;b=b/255;max=Math.max(r,g,b);min=Math.min(r,g,b);chroma=max-min;if(chroma==0)h=0;else if(r==max)h=(g-b)/chroma%6*360;else if(g==max)h=((b-r)/chroma+2)%6*360;else h=((r-g)/chroma+4)%6*360;w=min;bl=1-max;return{h:h,w:w,b:bl}}function rgbToCmyk(r,g,b){var c,m,y,k;r=r/255;g=g/255;b=b/255;max=Math.max(r,
g,b);k=1-max;if(k==1){c=0;m=0;y=0}else{c=(1-r-k)/(1-k);m=(1-g-k)/(1-k);y=(1-b-k)/(1-k)}return{c:c,m:m,y:y,k:k}}function toHex(n){var hex=n.toString(16);while(hex.length<2)hex="0"+hex;return hex}function cl(x){console.log(x)}function ftrim(x){return x.replace(/^\s+|\s+$/g,"")}function isHex(x){return"0123456789ABCDEFabcdef".indexOf(x)>-1}window.fcolor=fcolor})();
function fSetColorsByAttribute(){var z,i,att;z=document.getElementsByTagName("*");for(i=0;i<z.length;i++){att=z[i].getAttribute("data-f-color");if(att)z[i].style.backgroundColor=fcolor(att).toRgbString()}};
(function(){var faBase="fal";f().prototype().fa=function(base){if(!base)return faBase;faBase=base;return this}})();
(function(){var httpOnTimeout=0;f().prototype().http=function(input){if(!input.method)input.method="GET";var params=[];var r20=/%20/g;function addParam(key,value){value=typeof value==="function"?value():value==null?"":value;params[params.length]=encodeURIComponent(key)+"\x3d"+encodeURIComponent(value)}function httpEnd(){httpRequest.onloadend=function(){};httpRequest.onerror=function(){};httpRequest.ontimeout=function(){};httpRequest.onprogress=function(){};httpRequest.onabort=function(){};httpOnTimeout=
      setTimeout(function(){f("http-off").emit({url:input.url})},500)}function httpSetHeaders(){httpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset\x3dUTF-8");if(input.headers instanceof Object)f(Object.keys(input.headers)).each(function(key){httpRequest.setRequestHeader(key,input.headers[key])})}var httpRequest=new XMLHttpRequest;httpRequest.onloadend=function(event){httpEnd();if(event.target.status==200){f("http-off").emit({url:input.url});try{input.onsuccess(event)}catch(err){console.log(err,
    event)}}else try{input.onerror(event)}catch(err){console.log(err,event)}};httpRequest.onerror=function(event){httpEnd();try{input.onerror(event)}catch(err){console.log(err,event)}};httpRequest.ontimeout=function(event){httpEnd();try{input.ontimeout(event)}catch(err){console.log(err,event)}};httpRequest.onabort=function(event){httpEnd();try{input.onabort(event)}catch(err){console.log(err,event)}};httpRequest.onprogress=function(event){try{input.onprogress(event)}catch(err){}};clearTimeout(httpOnTimeout);
    f("http-on").emit({url:input.url});if(this.input instanceof Element&&this.input.tagName.toLowerCase()=="form"){var elements=this.input.elements;for(var i=0;i<elements.length;i++){var element=elements[i];if(!element.disabled)if(element.type=="radio"||element.type=="checkbox"){if(element.checked)addParam(element.name,element.value)}else addParam(element.name,element.value)}if(input.params instanceof Object)f(Object.keys(input.params)).each(function(key){addParam(key,input.params[key])});var url;try{url=
      new URL(input.url)}catch(err){if(input.url.indexOf("http")>0)url=new URL(input.url);else{var pathname=document.location.pathname;pathname=pathname.substring(0,pathname.indexOf("/web.app"));if(pathname.charAt(0)=="/")pathname=pathname.substring(1);if(pathname!="")pathname+="/";url=new URL(document.location.protocol+"//"+document.location.host+"/"+pathname+input.url)}}httpRequest.open(input.method,url);httpSetHeaders();httpRequest.timeout=input.timeout?input.timeout:0;httpRequest.send(params.join("\x26").replace(r20,
      "+"))}else if(this.input instanceof Object){var url;try{url=new URL(input.url)}catch(err){if(input.url.indexOf("http")>0)url=new URL(input.url);else{var pathname=document.location.pathname;pathname=pathname.substring(0,pathname.indexOf("/web.app"));if(pathname.charAt(0)=="/")pathname=pathname.substring(1);if(pathname!="")pathname+="/";url=new URL(document.location.protocol+"//"+document.location.host+"/"+pathname+input.url)}}if(input.params instanceof Object)f(Object.keys(input.params)).each(function(key){url.searchParams.set(key,
        input.params[key])});httpRequest.open(input.method,url);httpSetHeaders();httpRequest.timeout=input.timeout?input.timeout:0;httpRequest.send(JSON.stringify(this.input))}else{if(input.method.toLowerCase()=="get"){var url;try{url=new URL(input.url)}catch(err){if(input.url.indexOf("http")>0)url=new URL(input.url);else{var baseURL=document.location.protocol+"//"+document.location.host;url=new URL(baseURL+"/"+input.url)}}if(input.params instanceof Object)f(Object.keys(input.params)).each(function(key){url.searchParams.set(key,
        input.params[key])});httpRequest.open(input.method,url);httpSetHeaders();httpRequest.timeout=input.timeout?input.timeout:0;httpRequest.send()}if(input.method.toLowerCase()=="post"){if(Array.isArray(input.params))f(input.params).each(function(item){addParam(item.name,item.value)});else if(input.params instanceof Object)f(Object.keys(input.params)).each(function(key){addParam(key,input.params[key])});httpRequest.open(input.method,input.url);httpSetHeaders();httpRequest.timeout=input.timeout?input.timeout:
0;httpRequest.send(params.join("\x26").replace(r20,"+"))}}return this};function ascii7(text){var ascii7text="";for(var i=0;i<text.length;i++){var charCode=text.codePointAt(i);if(charCode<127)ascii7text+=String.fromCodePoint(charCode);else{var c=String.fromCodePoint(charCode);i+=c.length-1;ascii7text+="\x26#"+charCode+";"}}return ascii7text}})();
(function(){f().prototype().interactive=function(settings){this.each(function(item){var boundingRect=item.getBoundingClientRect();var mouseDown=false;function pos(boundingRect,event){var x=event.clientX-boundingRect.x;var y=event.clientY-boundingRect.y;return{x:x,y:y}}function down(settings,event){mouseDown=true;if(settings.down){var context=pos(boundingRect,event);context.down=mouseDown;settings.down(event,context)}}function up(settings,event){mouseDown=false;if(settings.up){var context=pos(boundingRect,
      event);context.down=mouseDown;settings.up(event,context)}}function move(settings,event){if(settings.move){var context=pos(boundingRect,event);context.down=mouseDown;settings.move(event,context)}}f(item).on("mousedown",function(event){if(event.button===0)down(settings,event)},true);f(item).on("mouseup",function(event){if(event.button===0)up(settings,event)},true);f(item).on("mousemove",function(event){move(settings,event)},true);f(item).on("touchstart",function(event){down(settings,event.touches[0])},
true);f(item).on("touchend",function(event){up(settings,event)},true);f(item).on("touchcancel",function(event){up(settings,event)},true);f(item).on("touchmove",function(event){move(settings,event.touches[0])},true)});return this}})();
(function(){f().prototype().on=function(what,callback,replace){this.each(function(item){var currentOn=item["on"+what];item["on"+what]=function(event){if(typeof currentOn==="function"&&!replace)currentOn(event);callback(event)}});return this}})();
(function(){var slots=[];window.addEventListener("message",function(event){slots.forEach(function(slot){if(event.data.what==slot.what)slot.callback(event.data.data,event)})},false);f().prototype().emit=function(data){postMessage({what:this.input,data:data},document.location.href);return this};f().prototype().slot=function(callback){var otherSlots=[];var me=this;f(slots).each(function(slot){if(slot.what!=me.input)otherSlots.push(slot)});slots=otherSlots;slots.push({what:this.input,callback:callback});
    return this};f().prototype().unslot=function(){var newSlots=[];var what=this.input;f(slots).each(function(slot){if(what!=slot.what)newSlots.push(slot)});slots=newSlots;return this};document.addEventListener("keyup",function(event){f("keyup").emit({keyCode:event.keyCode,key:event.key,shiftKey:event.shiftKey,altKey:event.altKey,composed:event.composed,ctrlKey:event.ctrlKey,metaKey:event.metaKey,repeat:event.repeat,which:event.which,type:event.type})});document.addEventListener("keydown",function(event){f("keydown").emit({keyCode:event.keyCode,
key:event.key,shiftKey:event.shiftKey,altKey:event.altKey,composed:event.composed,ctrlKey:event.ctrlKey,metaKey:event.metaKey,repeat:event.repeat,which:event.which,type:event.type})})})();
(function(){var uiPlugins=[];var uiOnReadyPlugins=[];f().prototype().uiReady=function(){for(var i=0;i<uiOnReadyPlugins.length;i++)uiOnReadyPlugins[i]()};function renderUi(context){var renderDiv=context.div;var onready=context.callback;var plugin;for(var i=0;i<uiPlugins.length;i++)if(i==0)plugin=new Promise(function(resolve,reject){uiPlugins[i](resolve,{div:renderDiv,i:0,callback:onready})});else plugin=plugin.then(function(context){return new Promise(function(resolve,reject){uiPlugins[++context.i](resolve,
    context)})});plugin.then(function(context){var ok=true;f('[class^\x3d"f__"]').each(function(item){ok=false;item.classList.forEach(function(className){if(className.indexOf("f__")==0){item.classList.remove(className);item.classList.add(className.replace("f__","f_"))}})});if(ok){onready();f().uiReady()}else renderUi(context)})}function renderDiv(target,html,options){var renderDiv=document.createElement("div");renderDiv.classList.add("f_");document.body.appendChild(renderDiv);f(renderDiv).html(html);
  renderUi({div:renderDiv,callback:function(){f(target).html("");while(renderDiv.childNodes.length>0)target.appendChild(renderDiv.childNodes[0]);try{renderDiv.parentElement.removeChild(renderDiv)}catch(err){}if(options.onready)options.onready()}})}f().prototype().uiRender=function(callback){renderUi({div:this.item,callback:callback})};f().prototype().uiPlugins=function(){return uiPlugins};f().prototype().uiOnReadyPlugins=function(){return uiOnReadyPlugins};f().prototype().uiPlugin=function(name,plugin,
  uiOnReadyPlugin){var uiPlugin=function(resolve,context){var item=f(context.div).find(".f_"+name).item;if(item){eval("var json \x3d"+item.innerText);json.onready=function(){renderUi(context)};f(item).addClass("f-"+name);plugin(item,json);f(item).removeClass("f_"+name)}else resolve(context)};uiPlugins.push(uiPlugin);if(uiOnReadyPlugin)uiOnReadyPlugins.push(uiOnReadyPlugin)};f().prototype().ui=function(options){options=options||{};if(this.item)this.items.forEach(function(item){renderDiv(item.parentElement,
      item.parentElement.innerHTML,options)});else if(options.url){var template;try{template=f().t(options.url)}catch(err){}if(template){var html=template.render(f().appSession());renderDiv(f(options.target).item,html,options)}else f().http({url:options.url,headers:{pragma:"no-cache","Cache-Control":"no-cache"},onsuccess:function(event){var html=event.target.responseText;html=f(html).t(f().appSession());renderDiv(f(options.target).item,html,options)},onerror:function(event){renderDiv(f(options.target).item,
"",options)}})}else{var target=f(options.target).item;var url=target.getAttribute("data-resource");if(url)this.ui({url:url,target:target,onready:options.onready?options.onready:function(){}})}return this}})();
(function(){var _serverURL;f().prototype().serverURL=function(serverURL){if(!serverURL)if(_serverURL)return _serverURL;else{if(document.location){var url=document.location.protocol+"//"+document.location.hostname;if(document.location.port&&document.location.port!=""){url+=":";url+=document.location.port}url+="/";_serverURL=serverURL}return url}else _serverURL=serverURL};String.prototype.equals=function(compare){try{return this.toString()===compare.toString()}catch(e){return false}};String.prototype.equalsIgnoreCase=
  function(compare){try{return this.toLowerCase().equals(compare.toLowerCase())}catch(e){return false}};String.prototype.contains=function(compare){try{return this.indexOf(compare)!=-1}catch(e){return false}};String.prototype.containsIgnoreCase=function(compare){try{return this.toLowerCase().contains(compare.toLowerCase())}catch(e){return false}};String.prototype.startsWith=function(compare){try{return this.indexOf(compare)==0}catch(e){return false}};String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+
    this.slice(1)};Date.parse=function(date){try{if(typeof date=="string"){var o=date.split(/[^0-9]/);var year=o[0];var month=o.length>1?o[1]-1:0;var day=o.length>2?o[2]:0;var hour=o.length>3?o[3]:0;var minute=o.length>4?o[4]:0;var second=o.length>5?o[5]:0;return new Date(year,month,day,hour,minute,second)}else return new Date(date)}catch(e){return new Date}};Date.prototype.isInvalid=function(){if(isNaN(this.getTime()))return true;return false};Date.prototype.getTimestamp=function(){return this.getTime()/
  1E3};Date.prototype.getISOTimestamp=function(){return Date.parse(this.toISOString()).getTime()/1E3};Date.prototype.add=function(what,time){var minute=6E4;if(what=="minutes")this.setTime(this.getTime()+time*minute);else if(what=="hours")this.setTime(this.getTime()+time*(60*minute));else if(what=="days")this.setTime(this.getTime()+time*(24*(60*minute)));return this};Date.prototype.clone=function(){return new Date(this)};Date.prototype.yesterday=function(){this.setDate(this.getDate()-1);return this};
  Date.prototype.tomorrow=function(){this.setDate(this.getDate()+1);return this};Date.prototype.prevYear=function(){var currentYear=this.getFullYear();while(currentYear==this.getFullYear())this.setFullYear(this.getFullYear()-1);return this};Date.prototype.nextYear=function(){var currentYear=this.getFullYear();while(currentYear==this.getFullYear())this.setFullYear(this.getFullYear()+1);return this};Date.prototype.prevMonth=function(){var currentMonth=this.getMonth();do this.setMonth(this.getMonth()-
  1);while(currentMonth==this.getMonth());return this};Date.prototype.nextMonth=function(){var currentMonth=this.getMonth();do this.setMonth(this.getMonth()+1);while(currentMonth==this.getMonth());return this};Date.prototype.changeMonth=function(n){if(n<0)for(var j=n;j<0;j++)this.prevMonth();if(n>0)for(var j=0;j<n;j++)this.nextMonth();return this};Date.prototype.changeWeek=function(n){if(n<0)for(var j=n;j<0;j++)this.prevWeek();if(n>0)for(var j=0;j<n;j++)this.nextWeek();return this};Date.prototype.prevWeek=
  function(){var currentDay=this.getDay();do this.setDate(this.getDate()-1);while(currentDay!=this.getDay());return this};Date.prototype.nextWeek=function(){var currentDay=this.getDay();do this.setDate(this.getDate()+1);while(currentDay!=this.getDay());return this};Date.prototype.dayStart=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);return this};Date.prototype.dayEnd=function(){this.setHours(23);this.setMinutes(59);this.setSeconds(59);return this};Date.prototype.monthStart=function(){this.setDate(1);
    this.dayStart();return this};Date.prototype.monthEnd=function(){this.setDate(this.getMaxDayOfMonth());this.dayEnd();return this};Date.prototype.getMaxDayOfMonth=function(){var date=new Date(this.getFullYear(),this.getMonth(),1);var dayOfMonth=0;while(date.getMonth()==this.getMonth()){dayOfMonth++;date.tomorrow()}return dayOfMonth};Date.prototype.getStartOfWeek=function(){while(this.getDay()!=1)this.setDate(this.getDate()-1);return this};Date.prototype.getWeeksInMonth=function(){return Math.ceil(this.getMaxDayOfMonth()/
    7)};Date.prototype.getWeeksInYear=function(){var date=new Date(this.getFullYear(),0,1);var dayOfYear=0;while(date.getFullYear()==this.getFullYear()){dayOfYear+=date.getMaxDayOfMonth();date.nextMonth()}return Math.round(dayOfYear/7)};Date.prototype.getMonthMonday=function(){this.setDate(1);this.getStartOfWeek();return this};Date.prototype.format=function(options,language){if(options){language=language||"en";return this.toLocaleDateString(language,options)}else{var month=("000"+(this.getMonth()+1)).slice(-2);
  var date=("000"+this.getDate()).slice(-2);var hour=("000"+this.getHours()).slice(-2);var minute=("000"+this.getMinutes()).slice(-2);var second=("000"+this.getSeconds()).slice(-2);return this.getFullYear()+"-"+month+"-"+date+" "+hour+":"+minute+":"+second}};Date.prototype.datetimeAsParam=function(){return this.format()};Date.prototype.dateAsParam=function(){var month=("000"+(this.getMonth()+1)).slice(-2);var date=("000"+this.getDate()).slice(-2);return this.getFullYear()+"-"+month+"-"+date};Date.prototype.datetimeAsParam=
  function(){var month=("000"+(this.getMonth()+1)).slice(-2);var date=("000"+this.getDate()).slice(-2);var hour=("000"+this.getHours()).slice(-2);var minute=("000"+this.getMinutes()).slice(-2);return this.getFullYear()+"-"+month+"-"+date+" "+hour+":"+minute};Date.prototype.time=function(options,language){options=options||{};language=language||"en";return this.toLocaleTimeString(language,options)};Date.prototype.calendarMonth=function(){var data={};var day=this.clone();data.day=day.datetimeAsParam();
    data.dayStart=day.dayStart().datetimeAsParam();day.setDate(1);day.getStartOfWeek();data.dayStart=day.dayStart().datetimeAsParam();day.setDate(day.getDate()+6+7*5);data.dayEnd=day.dayEnd().datetimeAsParam();return data};Date.prototype.calendarWeek=function(){var data={};var day=this.clone();data.day=day.datetimeAsParam();data.dayStart=day.dayStart().datetimeAsParam();day.getStartOfWeek();data.dayStart=day.dayStart().datetimeAsParam();day.setDate(day.getDate()+6);data.dayEnd=day.dayEnd().datetimeAsParam();
    return data};String.prototype.normalize=function(){var string=this;var newString="";for(var i=0;i<string.length;i++){var character=string.charAt(i);if(isNaN(character)&&character==character.toUpperCase())newString+="-"+character.toLowerCase();else newString+=character}return newString};String.prototype.replaceAll=function(search,replacement){return this.split(search).join(replacement)};JSON.parse=function(jsonAsString){eval("var json \x3d "+jsonAsString);return json};function stageReady(){f(".f-overlay").each(function(overlay){if(overlay.dataset.background)overlay.style.backgroundImage=
    "url("+overlay.dataset.background+")"})}function stageResize(){f(".f-a4h").each(function(item,index){var rect=item.parentElement.getBoundingClientRect();item.style.height=Math.round(rect.width*2100/2970)+"px"});f(".f-a4v").each(function(item,index){var rect=item.parentElement.getBoundingClientRect();item.style.height=Math.round(rect.width*2970/2100)+"px"});f(".f-16_9").each(function(item,index){var rect=item.parentElement.getBoundingClientRect();item.style.height=Math.round(rect.width*9/16)+"px"});
    f(".f-square").each(function(item,index){var rect=item.parentElement.getBoundingClientRect();item.style.height=Math.round(rect.width)+"px"});f(".f-stage").each(function(item,index){var rect=item.parentElement.getBoundingClientRect();var stagew=parseInt(item.getAttribute("data-width"));var stageh=parseInt(item.getAttribute("data-height"));var parentw=rect.width;var parenth=rect.height;var scale=parentw/stagew;if(parentw/parenth>stagew/stageh)scale=parenth/stageh;item.style.position="absolute";item.style.top=
"50%";item.style.left="50%";item.style.width=stagew+"px";item.style.height=stageh+"px";item.style.transform="translate(-50%,-50%) scale("+scale+","+scale+")";item.setAttribute("scale",scale)})}f(window).on("resize",function(){stageResize()});f().uiOnReadyPlugins().push(stageResize);f().uiOnReadyPlugins().push(stageReady)})();
(function(){var noParseDelimiters=["~{~","~}~"];var libTemplates={};function tc(src,options){if(!options)options={delimiters:["[%","%]"],comments:true};if(options.comments===true){var _scripts={};var _src="";src.split("\n").forEach(function(line){if(line.trim().indexOf("//")!=0)_src+=line+"\n"});src=_src;var x1;while((x1=src.indexOf("/*"))>=0){var x2=src.indexOf("*/",x1);src=src.substring(0,x1)+src.substring(x2+2)}while((x1=src.indexOf("\x3c!--"))>=0){var x2=src.indexOf("--\x3e",x1);src=src.substring(0,
      x1)+src.substring(x2+3)}}var scriptIndex=0;x1=0;while((x1=src.indexOf("\x3cscript name\x3d",x1))>=0){x1=src.indexOf("\x3e",x1)+1;var x2=src.indexOf("\x3c/script\x3e",x1);var script=src.substring(x1,x2);script=script.split(options.delimiters[0]).join(noParseDelimiters[0]);script=script.split(options.delimiters[1]).join(noParseDelimiters[1]);src=src.substring(0,x1)+script+src.substring(x2)}var t="";t+='(function(model){if(model)for(var key in model) eval("var "+key+"\x3dmodel."+key);';t+='var _\x3d"";';
  var x1;while((x1=src.indexOf(options.delimiters[0]))>=0){var x2=src.indexOf(options.delimiters[1],x1);var html=JSON.stringify(src.substring(0,x1));if(html!='""')t+="_+\x3d"+html+";";html=src.substring(x1+2,x2);if(html.charAt(0)=="\x3d"){html=html.substring(1);t+="_+\x3d "+html+";"}else if(html!="")t+=html+";";src=src.substring(x2+2)}t+="_+\x3d"+JSON.stringify(src)+";";t+="return _;});\n";try{t=t.split(noParseDelimiters[0]).join(options.delimiters[0]);t=t.split(noParseDelimiters[1]).join(options.delimiters[1])}catch(err){}return eval(t)}
  f().prototype().tc=tc;f().prototype().t=function(data,options){if(Array.isArray(data)){f(data).each(function(template){libTemplates[template.url]=f(template.code).t()});return}if(libTemplates[data])return libTemplates[data];if(data)return tc(this.input,options)(data);else return{render:tc(this.input,options)}};function renderTemplate(item,url,target,context){if(libTemplates[url]){var template=libTemplates[url];var data=f().appSession();if(target)data=f().app().get(target);var html=template.render(data);
  f(item).html(html);if(context)f(context.div).uiRender(context.callback)}else f().http({url:url,headers:{pragma:"no-cache","Cache-Control":"no-cache"},onsuccess:function(event){var template=event.target.responseText;libTemplates[url]=f(template).t();var data=f().appSession();if(target)data=f().app().get(target);var html=libTemplates[url].render(data);f(item).html(html);f(context.div).uiRender(context.callback)},onerror:function(event){f(context.div).uiRender(context.callback)}})}function tService(service,
  signedHeaders,url,model,target,item,context){signedHeaders["pragma"]="no-cache";signedHeaders["Cache-Control"]="no-cache";f().http({url:service,headers:signedHeaders,onsuccess:function(event){var json=JSON.parse(event.target.responseText);f().app().set(model,json);renderTemplate(item,url,target,context)},onerror:function(event){renderTemplate(item,url,target,context)}})}var tPlugin=function(resolve,context){var item=f(context.div).find(".f_t").item;if(item){f(item).removeClass("f_t").addClass("f-t");
var url=item.getAttribute("data-resource");var service=item.getAttribute("data-service");var secure=item.getAttribute("data-secure");var model=item.getAttribute("data-model");var target=item.getAttribute("data-target");if(service)if(secure=="true")f().api(function(apiHeaders){tService(service,apiHeaders,url,model,target,item,context)},item.getAttribute("data-channel"));else tService(service,{},url,model,target,item,context);else renderTemplate(item,url,target,context)}else resolve(context)};f().uiPlugins().push(tPlugin)})();
(function(){var templatesvg=f().tc('  \x3csvg viewBox\x3d"0,0,[%\x3dw%],[%\x3dh%]" xmlns\x3d"http://www.w3.org/2000/svg" xmlns:xlink\x3d"http://www.w3.org/1999/xlink"\x3e  [%if(r){%]    \x3cg transform\x3d"rotate([%\x3dr%] [%\x3dw/2%] [%\x3dh/2%])"\x3e  [%}%]  [%if(typeof tx !\x3d\x3d \'undefined\' \x26\x26 typeof ty !\x3d\x3d \'undefined\' \x26\x26 (tx !\x3d 0 || ty !\x3d 0)) { %]    \x3cg transform\x3d"translate([%\x3dtx%] [%\x3dty%])"\x3e  [%}%]  [%if(clipRect) { var clipRectUid \x3d Math.random().toString(36).substr(2, 9); %]    \x3cclipPath id\x3d"clip-rect-[%\x3dclipRectUid%]"\x3e    \x3crect x\x3d"[%\x3dclipRect.x%]" y\x3d"[%\x3dclipRect.y%]" width\x3d"[%\x3dclipRect.w%]" height\x3d"[%\x3dclipRect.h%]" /\x3e    \x3c/clipPath\x3e    \x3cg clip-path\x3d"url(#clip-rect-[%\x3dclipRectUid%])"\x3e  [%}%]  [%  var svgId \x3d Math.random().toString(36).substr(2, 9);  var grouped \x3d false;  %]  [%f(paths).each(function(path, index){    var uid \x3d Math.random().toString(36).substr(2, 9);    %]    [%if(path.type \x3d\x3d \'text\'){%]      \x3cg [%if(path.settings.transform){%]class\x3d"[%\x3dpath.settings.class%]"[%}%] [%if(path.settings.transform){%] transform\x3d"[%\x3dpath.settings.transform%]"[%}%] fill\x3d"[%\x3dpath.settings.fill%]" [%if(!isNaN(path.size)){%]style\x3d"font-size:[%\x3dpath.size%]px"[%}%]\x3e      [%      var lines \x3d path.text.split(\'\\n\');      var offsetY \x3d (path.h-lines.length*path.size)/2-path.size/8;      %]      [%f(lines).each(function(line, index) {%]        [%if(path.textAlign \x3d\x3d 1){%]          \x3ctext \x3c!--textLength\x3d"[%\x3dpath.w%]" lengthAdjust\x3d"spacingAndGlyphs"--\x3e x\x3d"[%\x3dpath.x%]" y\x3d"[%\x3doffsetY+path.y+path.size*(index+1)%]" style\x3d"text-anchor: start"\x3e[%\x3dline%]\x3c/text\x3e        [%}%]        [%if(path.textAlign \x3d\x3d 2){%]          \x3ctext \x3c!--textLength\x3d"[%\x3dpath.w%]" lengthAdjust\x3d"spacingAndGlyphs"--\x3e x\x3d"[%\x3dpath.x+path.w/2%]" y\x3d"[%\x3doffsetY+path.y+path.size*(index+1)%]" style\x3d"text-anchor: middle"\x3e[%\x3dline%]\x3c/text\x3e        [%}%]        [%if(path.textAlign \x3d\x3d 3){%]          \x3ctext \x3c!--textLength\x3d"[%\x3dpath.w%]" lengthAdjust\x3d"spacingAndGlyphs"--\x3e x\x3d"[%\x3dpath.x+path.w%]" y\x3d"[%\x3doffsetY+path.y+path.size*(index+1)%]" style\x3d"text-anchor: end"\x3e[%\x3dline%]\x3c/text\x3e        [%}%]      [%})%]      \x3c/g\x3e    [%}else if(path.type \x3d\x3d \'transform-start\'){%]      \x3cg transform\x3d"[%\x3dpath.value%]"\x3e      \x3c!-- \x3cg transform\x3d"translate([%\x3d202%] [%\x3d(path.ty)%]) rotate(-90 1050 1485)"\x3e --\x3e    [%}else if(path.type \x3d\x3d \'transform-end\'){%]      \x3c/g\x3e    [%}else if(path.type \x3d\x3d \'image\'){%]      \x3cg [%if(path.settings.transform){%] transform\x3d"[%\x3dpath.settings.transform%]"[%}%]\x3e      \x3cimage xlink:href\x3d"[%\x3dpath.url%]" x\x3d"[%\x3dpath.x%]" y\x3d"[%\x3dpath.y%]" width\x3d"[%\x3dpath.w%]" height\x3d"[%\x3dpath.h%]" [%if(path.settings.mask){%] mask\x3d"url(#[%\x3dpath.settings.mask%]_[%\x3dsvgId%])"[%}%]\x3e\x3c/image\x3e      \x3c/g\x3e    [%}else if(path.type \x3d\x3d \'shape\'){%]      \x3cg [%if(path.settings.transform){%] transform\x3d"[%\x3dpath.settings.transform%]"[%}%]\x3e      \x3cpath d\x3d"[%\x3dpath.shape%]" fill\x3d"[%\x3dpath.settings.fill%]" fill-opacity\x3d"[%\x3dpath.settings.fillOpacity%]" stroke\x3d"[%\x3dpath.settings.stroke%]" stroke-opacity\x3d"[%\x3dpath.settings.strokeOpacity%]"\x3e\x3c/path\x3e      \x3c/g\x3e    [%}else{%]      [%if(path.special \x3d\x3d\x3d true){%]        [%if(path.type \x3d\x3d \'group-start\'){ grouped \x3d true; %] \x3cg [%}%]        [%if(path.type \x3d\x3d \'group-end\'){ grouped \x3d false; %] \x3c/g [%}%]        [%if(path.type \x3d\x3d \'defs-start\'){ %] \x3cdefs  [%}%]        [%if(path.type \x3d\x3d \'defs-end\'){ %] \x3c/defs [%}%]        [%if(path.type \x3d\x3d \'mask-start\'){ %] \x3cmask id\x3d"[%\x3dpath.id%]_[%\x3dsvgId%]" [%}%]        [%if(path.type \x3d\x3d \'mask-end\'){ %] \x3c/mask [%}%]        [%if(path.type \x3d\x3d \'clip-start\'){ %] \x3cclipPath id\x3d"[%\x3dpath.id%]_[%\x3dsvgId%]" [%}%]        [%if(path.type \x3d\x3d \'clip-end\'){ %] \x3c/clipPath [%}%]      [%}else{%]        [%if(path.type \x3d\x3d \'rect\'){%]          \x3crect x\x3d"[%\x3dpath.x%]" y\x3d"[%\x3dpath.y%]" rx\x3d"[%\x3dpath.rx%]" ry\x3d"[%\x3dpath.ry%]" width\x3d"[%\x3dpath.w%]" height\x3d"[%\x3dpath.h%]"        [%}else if(path.type \x3d\x3d \'circle\'){%]          \x3ccircle cx\x3d"[%\x3dpath.x%]" cy\x3d"[%\x3dpath.y%]" r\x3d"[%\x3dpath.r%]"        [%}else if(path.type \x3d\x3d \'ellipse\'){%]          \x3cellipse cx\x3d"[%\x3dpath.x%]" cy\x3d"[%\x3dpath.y%]" rx\x3d"[%\x3dpath.x1%]" ry\x3d"[%\x3dpath.y1%]"        [%}else{%]          \x3cdefs\x3e          [%f(markers).each(function(marker, index){ %]            \x3cmarker            id\x3d"[%\x3dmarker.name%]_[%\x3duid%]"            [%if(marker.r){%]              refX\x3d"[%\x3dmarker.r%]"              refY\x3d"[%\x3dmarker.r%]"              viewBox\x3d"0 0 [%\x3dmarker.r*2%] [%\x3dmarker.r*2%]"              markerWidth\x3d"[%\x3dmarker.r*2%]"              markerHeight\x3d"[%\x3dmarker.r*2%]"            [%}else{%]              refX\x3d"[%\x3dmarker.w/2%]"              refY\x3d"[%\x3dmarker.h/2%]"              viewBox\x3d"0 0 [%\x3dmarker.w%] [%\x3dmarker.h%]"              markerWidth\x3d"[%\x3dmarker.w%]"              markerHeight\x3d"[%\x3dmarker.h%]"            [%}%]            orient\x3d"auto"\x3e            [%if(marker.r){%]              \x3ccircle cx\x3d"[%\x3dmarker.x%]" cy\x3d"[%\x3dmarker.y%]" r\x3d"[%\x3dmarker.r%]" fill\x3d"[%\x3dpath.settings.stroke%]" [%if(path.settings.strokeOpacity){%] fill-opacity\x3d"[%\x3dpath.settings.strokeOpacity%]"[%}%]\x3e\x3c/circle\x3e            [%}else{%]              \x3cpath d\x3d"[%\x3dmarker.d%]" fill\x3d"[%\x3dpath.settings.stroke%]" [%if(path.settings.strokeOpacity){%] fill-opacity\x3d"[%\x3dpath.settings.strokeOpacity%]"[%}%]\x3e\x3c/path\x3e            [%}%]            \x3c/marker\x3e          [%})%]          \x3c/defs\x3e          \x3cpath d\x3d"[%f(path.d).each(function(point, index){%][%if(index !\x3d 0){%] [%}%][%\x3dpoint.type%][%if(point.type \x3d\x3d "M" || point.type \x3d\x3d "L"){%][%\x3dpoint.x%],[%\x3dpoint.y%][%}%][%if(point.type \x3d\x3d "C"){%][%\x3dpoint.x2%],[%\x3dpoint.y2%],[%\x3dpoint.x3%],[%\x3dpoint.y3%],[%\x3dpoint.x1%],[%\x3dpoint.y1%] [%}%][%if(point.type \x3d\x3d "S"){%][%\x3dpoint.x%],[%\x3dpoint.y%],[%\x3dpoint.x1%],[%\x3dpoint.y1%][%}%][%if(point.type \x3d\x3d "Q"){%][%\x3dpoint.x2%],[%\x3dpoint.y2%] [%\x3dpoint.x1%],[%\x3dpoint.y1%][%}%][%if(point.type \x3d\x3d "T"){%][%\x3dpoint.x%],[%\x3dpoint.y%][%}%][%if(point.type \x3d\x3d "A"){%][%\x3dpoint.rx%],[%\x3dpoint.ry%],[%\x3dpoint.a%],[%\x3dpoint.laf%],[%\x3dpoint.sf%],[%\x3dpoint.x%],[%\x3dpoint.y%][%}%][%});%]"        [%}%]      [%}%]      [%if((grouped \x26\x26 path.special \x3d\x3d\x3d true) || (!grouped \x26\x26 !path.special)){%]        [%if(path.settings.fill){%] fill\x3d"[%\x3dpath.settings.fill%]"[%}%]        [%if(path.settings.stroke){%] stroke\x3d"[%\x3dpath.settings.stroke%]"[%}%]        [%if(path.settings.strokeWidth){%] stroke-width\x3d"[%\x3dpath.settings.strokeWidth%]"[%}%]        [%if(path.settings.strokeOpacity){%] stroke-opacity\x3d"[%\x3dpath.settings.strokeOpacity%]"[%}%]        [%if(path.settings.strokeDashArray){%] stroke-dasharray\x3d"[%\x3dpath.settings.strokeDashArray%]"[%}%]        [%if(path.settings.strokeLinecap){%] stroke-linecap\x3d"[%\x3dpath.settings.strokeLinecap%]"[%}%]        [%if(path.settings.strokeLinejoin){%] stroke-linejoin\x3d"[%\x3dpath.settings.strokeLinejoin%]"[%}%]        [%if(path.settings.fillOpacity){%] fill-opacity\x3d"[%\x3dpath.settings.fillOpacity%]"[%}%]        [%if(path.settings.clip){%] clip-path\x3d"url(#[%\x3dpath.settings.clip%]_[%\x3dsvgId%])"[%}%]        [%if(path.settings.mask){%] mask\x3d"url(#[%\x3dpath.settings.mask%]_[%\x3dsvgId%])"[%}%]        [%if(path.settings.transform){%] transform\x3d"[%\x3dpath.settings.transform%]"[%}%]        [%if(path.settings.opacity){%] opacity\x3d"[%\x3dpath.settings.opacity%]"[%}%]        [%if(path.settings.class){%] class\x3d"[%\x3dpath.settings.class%]"[%}%]        [%if(path.settings.markerStart){%] marker-start\x3d"url(#[%\x3dpath.settings.markerStart%]_[%\x3duid%])"[%}%]        [%if(path.settings.markerEnd){%] marker-end\x3d"url(#[%\x3dpath.settings.markerEnd%]_[%\x3duid%])"[%}%]      [%}%]      [%if(path.special \x3d\x3d\x3d true){%]        \x3e      [%}else{  %]        [%if(path.animateTransform){  %]          \x3e\x3canimatetransform attributeName\x3d"transform" from\x3d"[%\x3dpath.animateTransform.from%]" to\x3d"[%\x3dpath.animateTransform.to%]" attributeType\x3d"XML" type\x3d"[%\x3dpath.animateTransform.type%]" dur\x3d"[%\x3dpath.animateTransform.dur%]" repeatCount\x3d"[%\x3dpath.animateTransform.repeatCount%]"/\x3e          [%if(path.type \x3d\x3d \'rect\'){%]            \x3c/rect\x3e          [%}else if(path.type \x3d\x3d \'circle\'){%]            \x3c/circle\x3e          [%}else if(path.type \x3d\x3d \'ellipse\'){%]            \x3c/ellipse\x3e          [%}else{%]            \x3c/path\x3e          [%}%]        [%}else{%]          /\x3e        [%}%]      [%}%]    [%}%]  [%});%]  [%if(clipRect) { %]\x3c/g\x3e[%}%]  [%if(r){%]\x3c/g\x3e[%}%]  [%if(typeof tx !\x3d\x3d \'undefined\' \x26\x26 typeof ty !\x3d\x3d \'undefined\' \x26\x26 (tx !\x3d 0 || ty !\x3d 0)) { %]\x3c/g\x3e[%}%]  \x3c/svg\x3e');
  var svgs={};f().prototype().svg=function(w,h,tx,ty,r,clipRect){var svg={};var path={};svg.clipRect=clipRect;svg.w=w;svg.h=h;svg.r=r;svg.tx=tx;svg.ty=ty;svg.paths=[];svg.markers=[];svg.settings={};svg.init=function(){svg.settings={};path.settings={}};svg.set=function(name,value){if(name){path.settings=JSON.parse(JSON.stringify(path.settings));if(value)path.settings[name]=value;else delete path.settings[name]}else path.settings={};svg.settings=JSON.parse(JSON.stringify(path.settings));return svg};svg.circle=
    function(x,y,r){path={type:"circle",x:x,y:y,r:r,settings:svg.settings};return svg.end()};svg.image=function(x,y,w,h,url){path={type:"image",x:x,y:y,w:w,h:h,url:url,settings:svg.settings};return svg.end()};svg.ellipse=function(x,y,x1,y1){path={type:"ellipse",x:x,y:y,x1:x1,y1:y1,settings:svg.settings};return svg.end()};svg.rect=function(x,y,w,h,rx,ry,name,target){path={target:target,name:name,type:"rect",x:x,y:y,w:w,h:h,rx:rx?rx:0,ry:ry?ry:0,settings:svg.settings};return svg.end()};svg.text=function(x,
    y,w,h,size,text,textAlign){path={type:"text",x:x,y:y,w:w,h:h,size:size,text:text,textAlign:textAlign,settings:svg.settings};return svg.end()};svg.shape=function(shape){path={type:"shape",shape:shape,settings:svg.settings};return svg.end()};svg.move=function(x,y){var point={type:"M",x:x,y:y};path.d.push(point);path.type=point.type;return svg};svg.marker=function(marker){svg.markers.push(marker)};svg.line=function(x,y){var point={type:"L",x:x,y:y};path.d.push(point);path.type=point.type;return svg};
    svg.arc=function(rx,ry,a,laf,sf,x,y){var point={type:"A",rx:rx,ry:ry,a:a,laf:laf,sf:sf,x:x,y:y};path.d.push(point);path.type=point.type;return svg};svg.cubic=function(x1,y1,x2,y2,x3,y3){var point={type:"C",x1:x1,y1:y1,x2:x2,y2:y2,x3:x3,y3:y3};path.d.push(point);path.type=point.type;return svg};svg.quadratic=function(x1,y1,x2,y2){var point={type:"Q",x1:x1,y1:y1,x2:x2,y2:y2};path.d.push(point);path.type=point.type;return svg};svg.close=function(){var point={type:"Z"};path.d.push(point);return svg.end()};
    svg.add=function(x,y,x1,y1){if(path.type=="C"){var point={type:"S",x:x1,y:y1,x1:x,y1:y};path.d.push(point)}if(path.type=="Q"){var point={type:"T",x:x,y:y};path.d.push(point)}if(path.type=="M"||path.type=="L")return svg.line(x,y);return svg};svg.transformStart=function(value){path={type:"transform-start",value:value};return svg.end()};svg.transformEnd=function(){path={type:"transform-end"};return svg.end()};svg.maskStart=function(id){path={special:true,type:"mask-start",id:id,settings:svg.settings};
      return svg.end()};svg.maskEnd=function(){path={special:true,type:"mask-end",settings:svg.settings};return svg.end()};svg.clipStart=function(id){path={special:true,type:"clip-start",id:id,settings:svg.settings};return svg.end()};svg.clipEnd=function(){path={special:true,type:"clip-end",settings:svg.settings};return svg.end()};svg.groupStart=function(){path={special:true,type:"group-start",settings:svg.settings};return svg.end()};svg.groupEnd=function(){path={special:true,type:"group-end",settings:svg.settings};
    return svg.end()};svg.defsStart=function(){path={special:true,type:"defs-start",settings:svg.settings};return svg.end()};svg.defsEnd=function(){path={special:true,type:"defs-end",settings:svg.settings};return svg.end()};svg.end=function(){svg.paths.push(path);path={d:[],settings:svg.settings};return svg};svg.markerEnd=function(name){path.markerEnd=name;return svg};svg.markerStart=function(name){path.markerStart=name;return svg};svg.clear=function(){svg.paths=[];path={d:[],settings:svg.settings};return svg};
    svg.animate=function(type,duration,repeatCount,from,to){path.animateTransform={};if(type)path.animateTransform.type=type;else path.animateTransform.type="";if(duration)path.animateTransform.dur=duration;if(repeatCount)path.animateTransform.repeatCount=repeatCount;if(from)path.animateTransform.from=from;if(to)path.animateTransform.to=to;return svg};svg.render=function(){var html=templatesvg(svg);var _html="";html.split("\n").forEach(function(line){if(line.trim()!="")_html+=line});html=_html;svg.clear();
      return html};return svg.clear()};f().prototype().renderSvg=function(){this.each(function(item){f(item).removeClass("f_svg").addClass("f-svg");f().http({url:item.getAttribute("data-resource"),headers:{pragma:"no-cache","Cache-Control":"no-cache"},onsuccess:function(event){var html=event.target.responseText;f(item).html(html)}})})};var svgPlugin=function(resolve,context){var item=f(context.div).find(".f_svg").item;if(item){var url=item.getAttribute("data-resource");f(item).removeClass("f_svg").addClass("f-svg");
if(svgs[url])setTimeout(function(){var html=svgs[url];f(item).html(html);f(context.div).uiRender(context.callback)},0);else f().http({url:url,headers:{pragma:"no-cache","Cache-Control":"no-cache"},onsuccess:function(event){var html=event.target.responseText;svgs[url]=html;f(item).html(html);f(context.div).uiRender(context.callback)}})}else resolve(context)};f().uiPlugins().push(svgPlugin)})();
(function(){var smoothing=.15;function line(pointA,pointB){var lengthX=pointB[0]-pointA[0];var lengthY=pointB[1]-pointA[1];return{length:Math.sqrt(Math.pow(lengthX,2)+Math.pow(lengthY,2)),angle:Math.atan2(lengthY,lengthX)}}function controlPoint(current,previous,next,reverse){var p=previous||current;var n=next||current;var o=line(p,n);var angle=o.angle+(reverse?Math.PI:0);var length=o.length*smoothing;var x=current[0]+Math.cos(angle)*length;var y=current[1]+Math.sin(angle)*length;return[x,y]}function bezierCommand(point,
  i,a){var cps=controlPoint(a[i-1],a[i-2],point);var cpe=controlPoint(point,a[i-1],a[i+1],true);return"C "+cps[0]+","+cps[1]+" "+cpe[0]+","+cpe[1]+" "+point[0]+","+point[1]}function svgPath(points){return points.reduce(function(acc,point,i,a){return i==1?"M "+point[0]+","+point[1]:acc+bezierCommand(point,i,a)})}f().prototype().chart=function(options){var chart={};chart.options=options;chart.render=function(){return renderChart(chart.options)};return chart};function renderValues(json,values,colors){if(!values)return"";
    var labelSizeX=json.labelSizeX;var labelSizeY=json.labelSizeY;var size=json.size;var prevX;var prevY;var svg='\x3cg clip-path\x3d"url(#clip-path-'+json.id+')"\x3e';var points=[];var fontSize=Math.min(Math.max(9,size/2),15);f(values).each(function(value,index){var x=json.width*labelSizeX+index*size;if(json.type=="bar")x=json.width*labelSizeX+index*size+size/2;var y=json.height*(1-labelSizeY);var hmax=json.height*(1-labelSizeY*2);y=hmax-value/json.max*hmax+json.height*labelSizeY;if(json.type=="bezier"){if(index==
      0)points.push([x,y]);points.push([x,y])}x=x.toFixed(2);y=y.toFixed(2);if(json.type=="line"||json.type=="bezier"){if(json.type=="line")if(index>0)svg+='\x3cpath stroke-linecap\x3d"round" stroke-width\x3d"'+Math.min(4,size/4)+'" stroke-opacity\x3d"0.75" stroke\x3d"'+colors[index%colors.length]+'" fill\x3d"none" d\x3d"M'+prevX+","+prevY+"L"+x+","+y+'"/\x3e';svg+='\x3ccircle fill\x3d"'+colors[index%colors.length]+'" cx\x3d"'+x+'" cy\x3d"'+y+'" r\x3d"'+Math.min(3,size/6)+'"/\x3e'}if(json.type=="bar")svg+=
    '\x3cpath stroke-width\x3d"'+size*.8+'" stroke-opacity\x3d"0.75" stroke\x3d"'+colors[index%colors.length]+'" d\x3d"M'+x+","+y+"L"+x+","+json.height*(1-labelSizeY)+'"/\x3e';prevX=x;prevY=y});if(json.type=="bezier")svg+='\x3cpath stroke-width\x3d"'+Math.min(4,size/4)+'" stroke-opacity\x3d"0.75" stroke\x3d"'+colors[0]+'" fill\x3d"none" d\x3d"'+svgPath(points)+'"/\x3e';svg+="\x3c/g\x3e";return svg}function renderChart(json){if(!json.width)return"";var chartLabelsColor="var(--color-gray1)";var chartAxisColor=
    "var(--color-gray1)";var chartGridColor="var(--color-gray4)";if(!json.chartLabelsColor)json.chartLabelsColor=chartLabelsColor;if(!json.chartAxisColor)json.chartAxisColor=chartAxisColor;if(!json.chartGridColor)json.chartGridColor=chartGridColor;if(!json.isPercentage)json.isPercentage=false;var id=Math.random().toString(36).substr(2,9);var svg="";var labelSizeX=.15;var labelSizeY=.15;if(!json.labels){labelSizeX=3/json.width;labelSizeY=3/json.height}else{labelSizeX=Math.min(.15,96/json.width);labelSizeY=
    Math.min(.15,96/json.height)}var size=json.width*(1-labelSizeX*2)/(json.values.length-1);if(json.type=="bar")size=json.width*(1-labelSizeX*2)/json.values.length;json.labelSizeX=labelSizeX;json.labelSizeY=labelSizeY;json.size=size;json.id=id;json.x0=Math.round(json.width*labelSizeX);json.y0=Math.round(json.height*labelSizeY);json.x1=Math.round(json.width*(1-labelSizeX));json.y1=Math.round(json.height*(1-labelSizeY));svg+='\x3cdiv style\x3d"position:relative;width:100%;height:'+json.height+'px;"\x3e';
    for(var i=0;i<json.yaxis;i++){var x0=json.x0;var y0=json.y0-6+json.height*(1-labelSizeY*2)*i/json.yaxis;if(json.labels)svg+='\x3cdiv class\x3d"chart-labels" style\x3d"width:'+json.x0+"px;text-align:right;position:absolute;font-size:12px;line-height:12px;left:0px;top:"+y0+"px;color:"+json.chartLabelsColor+'"\x3e'+Math.round(json.max*(1-i/json.yaxis))+(json.isPercentage?" %":"")+"\x26nbsp;\x26nbsp;\x3c/div\x3e"}f(json.labels).each(function(value,index){var fontSize=Math.min(Math.max(9,size/2),15);var x=
      json.width*labelSizeX+index*size-fontSize/2+2;if(json.type=="bar")x=json.width*labelSizeX+index*size+size/2-fontSize/2+2;if(window.navigator)svg+='\x3cdiv class\x3d"chart-labels" style\x3d"writing-mode:tb-rl;width:'+fontSize+"px;height:"+json.y0+"px;position:absolute;font-size:"+fontSize+"px;line-height:"+fontSize+"px;left:"+x+"px;top:"+json.height*(1-labelSizeY)+"px;color:"+json.chartLabelsColor+'"\x3e\x26nbsp;\x26nbsp;'+value+"\x3c/div\x3e";else svg+='\x3ctable style\x3d"position:absolute;left:'+
    x+"px;top:"+json.height*(1-labelSizeY)+'px;"\x3e\x3ctr\x3e\x3ctd class\x3d"chart-labels" style\x3d"writing-mode:tb-rl;width:'+fontSize+"px;height:"+json.y0*2+"px;font-size:"+fontSize+"px;line-height:"+fontSize+"px;color:"+json.chartLabelsColor+'"\x3e\x26nbsp;\x26nbsp;'+value+"\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e"});svg+='\x3csvg viewBox\x3d"0,0,'+json.width+","+json.height+'" width\x3d"'+json.width+'" height\x3d"'+json.height+'"\x3e';for(var i=0;i<json.yaxis;i++){var x0=json.x0;var y0=Math.round(json.height*
    labelSizeY+json.height*(1-labelSizeY*2)*i/json.yaxis);var x1=json.x1;var y1=y0;svg+='\x3cpath class\x3d"chart-grid" fill\x3d"none" stroke\x3d"'+json.chartGridColor+'" stroke-width\x3d"1" d\x3d"M'+x0+","+y0+"L"+x1+","+y1+'"/\x3e'}if(json.type=="line"||json.type=="bezier")svg+='\x3cpath class\x3d"chart-axis" fill\x3d"none" stroke-width\x3d"3" stroke-linecap\x3d"round" stroke\x3d"'+json.chartAxisColor+'" d\x3d"M'+json.x0+","+json.y0+"L"+json.x0+","+json.y1+"L"+json.x1+","+json.y1+'"/\x3e';svg+=renderValues(json,
  json.values,json.colors);svg+=renderValues(json,json.values1,json.colors1);svg+=renderValues(json,json.values2,json.colors2);svg+=renderValues(json,json.values3,json.colors3);if(json.type=="bar")svg+='\x3cpath class\x3d"chart-axis" fill\x3d"none" stroke-width\x3d"3" stroke-linecap\x3d"round" stroke\x3d"'+json.chartAxisColor+'" d\x3d"M'+json.x0+","+json.y0+"L"+json.x0+","+json.y1+"L"+json.x1+","+json.y1+'"/\x3e';svg+="\x3c/svg\x3e";svg+="\x3c/div\x3e";return svg}function resizeCharts(){f(".f-chart").each(function(item,
  index){var rect=item.getBoundingClientRect();var json=JSON.parse(item.dataset.json);json.width=rect.width;f(item).html(f().chart(json).render())})}f(window).on("resize",resizeCharts);var chartPlugin=function(resolve,context){var item=f(context.div).find(".f_chart").item;if(item){f(item).addClass("f-chart");var json=JSON.parse(f(item).html());item.dataset.json=JSON.stringify(json);f(context.div).uiRender(context.callback);f(item).removeClass("f_chart")}else resolve(context)};f().uiPlugins().push(chartPlugin);
  f().uiOnReadyPlugins().push(resizeCharts);function polarToCartesian(centerX,centerY,radius,angleInDegrees){var angleInRadians=(angleInDegrees-90)*Math.PI/180;return{x:centerX+radius*Math.cos(angleInRadians),y:centerY+radius*Math.sin(angleInRadians)}}function describeArc(startAngle,endAngle){var start=polarToCartesian(50,50,50,endAngle);var end=polarToCartesian(50,50,50,startAngle);var largeArcFlag=endAngle-startAngle<=180?"0":"1";var d=["M",start.x,start.y,"A",50,50,0,largeArcFlag,0,end.x,end.y,"L",
50,50,"Z"].join(" ");return d}})();
(function(){var icons={};var iconsReady=false;f().prototype().icon=function(name,code){if(iconsReady===false){iconsReady=true;setupIcons(false);setupIcons(true)}if(code)icons[name]=code;else return icons[name]};function setupIcons(isDark){{var svg=f().svg(100,100);renderSun(svg,80,isDark);f().icon("clear-sky"+(isDark?"-dark":""),svg.render())}{var svg=f().svg(100,100);renderCloud(svg,100,0,0,false,isDark);f().icon("few-clouds"+(isDark?"-dark":""),svg.render())}{var svg=f().svg(100,100);renderCloud(svg,
      100,0,0,true,isDark);f().icon("scattered-clouds"+(isDark?"-dark":""),svg.render())}{var svg=f().svg(100,100);renderCloud(svg,95,5,0,false,isDark,true);renderCloud(svg,95,0,5,false,isDark);f().icon("broken-clouds"+(isDark?"-dark":""),svg.render())}{var svg=f().svg(100,100);renderCloud(svg,100,0,-10,false,isDark);for(var i=0;i<4;i++)renderDrop(svg,15,20+i*15,74,isDark);f().icon("shower-rain"+(isDark?"-dark":""),svg.render())}{var svg=f().svg(100,100);renderCloud(svg,100,0,-10,true,isDark);for(var i=
      1;i<3;i++)renderDrop(svg,15,20+i*15,74,isDark);svg.set();f().icon("rain"+(isDark?"-dark":""),svg.render())}{var svg=f().svg(100,100);renderCloud(svg,100,0,-10,false,isDark);for(var i=.5;i<3.5;i+=2)renderDrop(svg,15,20+i*15,74,isDark);renderBolt(svg,40,30,59,isDark);f().icon("thunderstorm"+(isDark?"-dark":""),svg.render())}{var svg=f().svg(100,100);renderCloud(svg,100,0,-10,false,isDark);renderMist(svg,30,35,66.75,isDark);f().icon("mist"+(isDark?"-dark":""),svg.render())}{var svg=f().svg(100,100);
    renderSnow(svg,80,10,10,isDark);f().icon("snow"+(isDark?"-dark":""),svg.render())}{var svg=f().svg(100,100);svg.set("class","f-logo");svg.set("fill","none");svg.set("stroke",f().color("gray0",isDark));svg.set("strokeWidth","1");svg.set("class","f-cnt");svg.groupStart();svg.rect(42,12,16,16);svg.circle(50,40,8);svg.rect(42,52,16,16);svg.circle(50,80,8);svg.groupEnd();svg.set("strokeWidth","0.5");svg.groupStart();svg.set();svg.move(42,12).line(58,28).end();svg.move(58,12).line(42,28).end();svg.move(50,
      12).line(50,28).end();svg.move(42,20).line(58,20).end();svg.circle(50,40,3);svg.move(42+16/3,52).line(42+16/3,68).end();svg.move(42+16*2/3,52).line(42+16*2/3,68).end();svg.move(42,52+16/3).line(58,52+16/3).end();svg.move(42,52+16*2/3).line(58,52+16*2/3).end();for(var i=0;i<5;i++){svg.set("transform","rotate("+i*72+" 50 80)");svg.groupStart();svg.move(50,80).line(50,72).end();svg.groupEnd()}svg.groupEnd();f().icon("cnt"+(isDark?"-dark":""),svg.render())}{var svg=f().svg(100,100);svg.defsStart();svg.maskStart("mask1");
      svg.set();svg.set("fill","white");svg.rect(0,0,100,100);svg.set("fill","none");svg.set("stroke","black");svg.set("strokeWidth","15");svg.move(20,95).cubic(80,5,65,65,35,35).end();svg.maskEnd();svg.clipStart("mask2");svg.set();svg.set("fill","black");svg.rect(0,45,100,10);svg.clipEnd();svg.maskStart("mask3");svg.set();svg.set("fill","black");svg.rect(0,0,100,100);svg.set("fill","white");svg.circle(50,50,37.5);svg.maskEnd();svg.maskStart("mask4");svg.set();svg.set("fill","black");svg.rect(0,0,100,100);
      svg.set("fill","white");svg.circle(50,50,47.5);svg.maskEnd();svg.defsEnd();svg.set();svg.set("fill","none");svg.set("class","f-logo");svg.set("stroke",f().color("gray0",isDark));svg.set("strokeOpacity",.5);svg.set("strokeWidth",10);svg.set("mask","mask3");svg.groupStart();for(var i=-5;i<10;i++){var x=i*10;svg.move(x,95).cubic(x+60,5,x+45,65,x+15,35).end()}svg.groupEnd();svg.set();svg.set("class","f-logo");svg.set("stroke",f().color("gray0",isDark));svg.set("fill","none");svg.set("mask","mask4");svg.set("strokeLinecap",
    "square");svg.set("strokeWidth",10);svg.move(20,95).cubic(80,5,65,65,35,35).end();svg.set("clip","mask2");svg.set("strokeWidth",10);svg.move(25,95).cubic(85,5,70,65,40,35).end();svg.set();svg.set("fill","none");svg.set("strokeWidth",5);svg.set("class","f-logo");svg.set("stroke",f().color("gray0",isDark));svg.set("mask","mask1");svg.circle(50,50,45);f().icon("f"+(isDark?"-dark":""),svg.render())}}function renderDrop(svg,size,x,y,isDark){var percentage=size/100;svg.set("class","f-drop");svg.set("transform",
  "translate("+x+" "+y+")");svg.set("strokeWidth","0");svg.set("fill",f().color("teal",isDark));svg.move(20*percentage,60*percentage);svg.quadratic(50*percentage,10*percentage,20*percentage,40*percentage);svg.quadratic(80*percentage,60*percentage,80*percentage,40*percentage);svg.move(80*percentage,60*percentage).cubic(20*percentage,60*percentage,80*percentage,100*percentage,20*percentage,100*percentage);svg.close();svg.set("transform","")}function renderCloud(svg,size,x,y,sun,isDark,isDouble){var percentage=
    size/100;svg.set("transform","translate("+x+" "+y+")");svg.set("strokeWidth","0");var offset=-2.5*percentage;if(sun===true){svg.set("class","f-sun");svg.set("fill",f().color("yellow",isDark));svg.circle(22.5*percentage,47.5*percentage,15*percentage)}if(isDouble===true){svg.set("class","f-cloud");svg.set("fill",f().color("gray1",isDark));svg.set("class","f-cloud-1")}else{svg.set("fill",f().color("gray0",isDark));svg.set("class","f-cloud")}svg.groupStart();svg.set();svg.circle(25*percentage+offset,
  62.5*percentage,15*percentage);svg.circle(50*percentage+offset,47.5*percentage,25*percentage);svg.circle(75*percentage+offset,57.5*percentage,20*percentage);svg.rect(25*percentage+offset,60*percentage,50*percentage,17.5*percentage);svg.groupEnd()}function renderSun(svg,size,x,y,isDark){var percentage=size/100;svg.set("class","f-sun");svg.set("strokeLinecap","round");svg.set("strokeWidth","0");svg.set("fill",f().color("red",isDark));svg.rect(50,50,10,10);svg.set("fill",f().color("yellow",isDark));
    svg.circle(62.5*percentage,62.5*percentage,20*percentage);if(size>=80){svg.set("stroke",f().color("yellow",isDark));svg.set("strokeWidth",7*percentage);for(var i=0;i<8;i++){svg.set("transform","rotate("+i*45+" "+62.5*percentage+" "+62.5*percentage+")");svg.move(62.5*percentage,22.5*percentage).line(62.5*percentage,30*percentage).end()}}}function renderSnow(svg,size,x,y,isDark){var percentage=size/100;svg.set("class","f-snow");svg.set("strokeLinecap","round");svg.set("stroke",f().color("gray0",isDark));
  svg.set("strokeWidth",7*percentage);svg.set("transform");for(var i=0;i<3;i++){svg.set("transform","rotate("+i*60+" "+62.5*percentage+" "+62.5*percentage+")");svg.move(62.5*percentage,22.5*percentage).line(62.5*percentage,102.5*percentage).end()}for(var r=0;r<7;r++){svg.set("transform","rotate("+r*60+" "+62.5*percentage+" "+62.5*percentage+")");svg.move(62.5*percentage,42.5*percentage).line(50*percentage,30*percentage).end();svg.move(62.5*percentage,42.5*percentage).line(75*percentage,30*percentage).end()}}
  function renderBolt(svg,size,x,y,isDark){var percentage=size/100;svg.set("class","f-bolt");svg.clipStart("clip");svg.rect(0*percentage,0*percentage,100,50*percentage);svg.clipEnd();svg.set("transform","translate("+x+" "+y+")");svg.set("strokeWidth","0");svg.set("fill",f().color("yellow",isDark));svg.set("clip","clip");svg.move(40*percentage,10*percentage).line(60*percentage,10*percentage).line(35*percentage,70*percentage).close();svg.set("clip");svg.move(45*percentage,30*percentage).line(65*percentage,
    30*percentage).line(40*percentage,90*percentage).close()}function renderStar(svg,size,x,y,isDark){var percentage=size/100;svg.set("class","cloud");svg.set("strokeWidth","0");svg.set("fill",f().color("gray1",isDark));svg.move(50,10).line(60,40).line(90,50).line(60,60).line(50,90).line(40,60).line(10,50).line(40,40).close()}function renderMist(svg,size,x,y,isDark){var percentage=size/100;svg.set("class","f-mist");svg.set("strokeLinecap","round");svg.set("transform","translate("+x+" "+y+")");svg.set("stroke",
f().color("gray1",isDark));svg.set("strokeWidth",7*percentage);for(var i=0;i<3;i++)svg.move(10*percentage,36.5*percentage+i*14.5*percentage).line(90*percentage,36.5*percentage+i*14.5*percentage).end()}})();
(function(){var dragInfo=undefined;var dragObject=undefined;function handleDragStart(event){event.dataTransfer.clearData();dragObject=undefined;dragInfo={};dragInfo.from=JSON.parse(JSON.stringify(event.currentTarget.dataset));dragInfo.type="start";f("drag-move").emit(dragInfo);f(event.currentTarget).addClass("f-drag")}function handleDragEnd(event){dragInfo.type="end";f("drag-move").emit(dragInfo);dragInfo=undefined;var from=f(".f-drag").closest(".f-draggable").item;if(dragObject)f("drag").emit({from:JSON.parse(JSON.stringify(from.dataset)),
      to:JSON.parse(JSON.stringify(dragObject.dataset))});else f("drag").emit({from:JSON.parse(JSON.stringify(from.dataset))});f(event.target).removeClass("f-drag");f(".f-droparea-after").removeClass("on");f(".f-droparea-before").removeClass("on");f(".f-drop").removeClass("f-drop");event.preventDefault()}function handleDragEnter(event){handleDragLeave(event);var from=f(".f-drag").closest(".f-draggable").item;var to=f(event.target).closest(".f-draggable").item;if(to.dataset.drop){var toDrops=to.dataset.drop.split(",");
      f(toDrops).each(function(toDrop){if(from.dataset.what==toDrop)if(from.dataset.id!=to.dataset.id&&from.dataset.what==to.dataset.what||from.dataset.what!=to.dataset.what){dragObject=to;f(to).addClass("f-drop");to.dataset["type"]="drop"}})}else if(from.dataset.what==to.dataset.what){if(from.dataset.id!=to.dataset.id){dragObject=to;var position=from.compareDocumentPosition(to);if(position&Node.DOCUMENT_POSITION_PRECEDING)f(to.parentElement).find(".f-droparea-before").addClass("on");if(position&Node.DOCUMENT_POSITION_FOLLOWING)f(to.parentElement).find(".f-droparea-after").addClass("on")}to.dataset["type"]=
    "drag"}}function handleDropEnter(event){handleDragLeave(event);var from=f(".f-drag").closest(".f-draggable").item;var to=f(event.target).closest(".f-droppable").item;if(to.dataset.drop){var toDrops=to.dataset.drop.split(",");f(toDrops).each(function(toDrop){if(from.dataset.what==toDrop)if(from.dataset.id!=to.dataset.id&&from.dataset.what==to.dataset.what||from.dataset.what!=to.dataset.what){dragObject=to;f(to).addClass("f-drop");to.dataset["type"]="drop"}})}}function handleDragLeave(event){dragObject=
    undefined;f(".f-droparea-after").removeClass("on");f(".f-droparea-before").removeClass("on");f(".f-drop").removeClass("f-drop")}function handleDragOver(event){event.preventDefault();event.dataTransfer.dropEffect="move";dragInfo.type="start";dragInfo.to=JSON.parse(JSON.stringify(event.target.dataset));for(var k in event)if(k.endsWith("X")||k.endsWith("Y"))dragInfo[k]=event[k];f("drag-move").emit(dragInfo)}function dragInit(){f(".f-draggable").each(function(item){var f_item=f(item);if(!f_item.hasClass("f-draggable-ok")){f_item.addClass("f-draggable-ok");
  item.setAttribute("draggable","true");item.addEventListener("dragstart",handleDragStart,false);item.addEventListener("dragend",handleDragEnd,false);item.addEventListener("dragenter",handleDragEnter,false);item.addEventListener("dragover",handleDragOver,false)}});f(".f-droppable").each(function(item){var f_item=f(item);if(!f_item.hasClass("f-droppable-ok")){f_item.addClass("f-droppable-ok");item.addEventListener("dragenter",handleDropEnter,false);item.addEventListener("dragover",handleDragOver,false)}})}
f().uiOnReadyPlugins().push(dragInit)})();
(function(){function renderWeatherIcon(icon,settings){var html="";if(icon=="01d"||icon=="01n")html+=f().icon("clear-sky");else if(icon=="02d"||icon=="02n")html+=f().icon("few-clouds");else if(icon=="03d"||icon=="03n")html+=f().icon("scattered-clouds");else if(icon=="04d"||icon=="04n")html+=f().icon("broken-clouds");else if(icon=="09d"||icon=="09n")html+=f().icon("shower-rain");else if(icon=="10d"||icon=="10n")html+=f().icon("rain");else if(icon=="11d"||icon=="11n")html+=f().icon("thunderstorm");else if(icon==
    "13d"||icon=="13n")html+=f().icon("snow");else if(icon=="50d"||icon=="50n")html+=f().icon("mist");html+="";return html}f().prototype().widgetWeather=function(settings){var me=f(this.item);var db=f("f_weather").db([{name:"location",key:"q"}],function(event){if(settings.provider=="openweathermap")db.dbGet("location",settings.location.toLowerCase(),function(result){var minutes=0;var json={};if(result){json=JSON.parse(result.data);minutes=((new Date).getTime()-json.timestamp)/6E4}if(result&&minutes<30){if(settings.showInfo){var html=
          '\x3cdiv class\x3d"weather-icon"\x3e'+renderWeatherIcon(json.weather[0].icon,settings)+"\x3c/div\x3e";html+='\x3cdiv class\x3d"weather-info"\x3e\x3cspan class\x3d"weather-temp"\x3e'+Math.ceil(json.main.temp)+'\x26#176;\x26nbsp;\x26nbsp;\x3c/span\x3e\x3cspan class\x3d"weather-city"\x3e'+json.name+"\x3c/span\x3e\x3c/div\x3e";me.html(html)}else me.html(renderWeatherIcon(json.weather[0].icon,settings));if(typeof settings.onready=="function")settings.onready()}else{var url="https://api.openweathermap.org/data/2.5/weather?q\x3d"+
          encodeURIComponent(settings.location)+"\x26appid\x3d"+encodeURIComponent(settings.token)+"\x26mode\x3djson\x26units\x3dmetric\x26lang\x3d"+encodeURIComponent(settings.language)+"";f().http({url:url,timeout:500,onsuccess:function(event){json=JSON.parse(event.target.responseText);json.timestamp=(new Date).getTime();db.dbPut("location",{q:settings.location.toLowerCase(),data:JSON.stringify(json)});if(settings.showInfo){var html='\x3cdiv class\x3d"weather-icon"\x3e'+renderWeatherIcon(json.weather[0].icon,
                settings)+"\x3c/div\x3e";html+='\x3cdiv class\x3d"weather-info"\x3e\x3cspan class\x3d"weather-temp"\x3e'+Math.ceil(json.main.temp)+'\x26#176;\x26nbsp;\x26nbsp;\x3c/span\x3e\x3cspan class\x3d"weather-city"\x3e'+json.name+"\x3c/span\x3e\x3c/div\x3e";me.html(html)}else me.html(renderWeatherIcon(json.weather[0].icon,settings));if(typeof settings.onready=="function")settings.onready()},onerror:function(event){try{json=JSON.parse(result.data)}catch(e){}if(result){if(settings.showInfo){var html='\x3cdiv class\x3d"weather-icon"\x3e'+
                  renderWeatherIcon(json.weather[0].icon,settings)+"\x3c/div\x3e";html+='\x3cdiv class\x3d"weather-info"\x3e\x3cspan class\x3d"weather-temp"\x3e'+Math.ceil(json.main.temp)+'\x26#176;\x26nbsp;\x26nbsp;\x3c/span\x3e\x3cspan class\x3d"weather-city"\x3e'+json.name+"\x3c/span\x3e\x3c/div\x3e";me.html(html)}else me.html(renderWeatherIcon(json.weather[0].icon,settings));if(typeof settings.onready=="function")settings.onready()}},ontimeout:function(event){try{json=JSON.parse(result.data)}catch(e){}if(result){if(settings.showInfo){var html=
                  '\x3cdiv class\x3d"weather-icon"\x3e'+renderWeatherIcon(json.weather[0].icon,settings)+"\x3c/div\x3e";html+='\x3cdiv class\x3d"weather-info"\x3e\x3cspan class\x3d"weather-temp"\x3e'+Math.ceil(json.main.temp)+'\x26#176;\x26nbsp;\x26nbsp;\x3c/span\x3e\x3cspan class\x3d"weather-city"\x3e'+json.name+"\x3c/span\x3e\x3c/div\x3e";me.html(html)}else me.html(renderWeatherIcon(json.weather[0].icon,settings));if(typeof settings.onready=="function")settings.onready()}},onabort:function(event){try{json=JSON.parse(result.data)}catch(e){}if(result){if(settings.showInfo){var html=
  '\x3cdiv class\x3d"weather-icon"\x3e'+renderWeatherIcon(json.weather[0].icon,settings)+"\x3c/div\x3e";html+='\x3cdiv class\x3d"weather-info"\x3e\x3cspan class\x3d"weather-temp"\x3e'+Math.ceil(json.main.temp)+'\x26#176;\x26nbsp;\x26nbsp;\x3c/span\x3e\x3cspan class\x3d"weather-city"\x3e'+json.name+"\x3c/span\x3e\x3c/div\x3e";me.html(html)}else me.html(renderWeatherIcon(json.weather[0].icon,settings));if(typeof settings.onready=="function")settings.onready()}}})}})});return this};var weatherPlugin=function(resolve,
context){var item=f(context.div).find(".f_weather").item;if(item){var json=JSON.parse(item.innerHTML);item.innerHTML="";json.onready=function(){f(context.div).uiRender(context.callback)};f(item).addClass("f-weather").widgetWeather(json).removeClass("f_weather")}else resolve(context)};f().uiPlugins().push(weatherPlugin)})();
(function(){function renderClock(settings){var d=new Date;var svg=f().svg(100,100);svg.set("class","f-widget-clock");svg.set("stroke",f().color("gray0"));svg.set("strokeLinecap",settings.cap?settings.cap:"butt");svg.set("strokeLinejoin","miter");for(var i=0;i<60;i+=5){svg.set("transform","rotate("+i*6+" 50 50)");svg.set("strokeWidth",.75);svg.move(50,10).line(50,15).end()}for(var i=0;i<60;i++){svg.set("transform","rotate("+i*6+" 50 50)");svg.set("strokeWidth",.25);svg.move(50,10).line(50,12.5).end()}var start=
    (d.getHours()+d.getMinutes()/60+d.getSeconds()/3600)*360/12;if(settings.animated!="no")svg.animate("rotate","43200s","indefinite",start+" 50 50",start+360+" 50 50");svg.set("class","f-hours");svg.set("stroke",f().color("gray1"));svg.set("fill",f().color("gray1"));svg.set("strokeWidth",4);svg.set("transform","rotate("+start+" 50 50)");svg.move(50,50).line(50,30).end();var start=(d.getMinutes()+d.getSeconds()/60)*360/60;if(settings.animated!="no")svg.animate("rotate","3600s","indefinite",start+" 50 50",
    start+360+" 50 50");svg.set("class","f-minutes");svg.set("stroke",f().color("gray2"));svg.set("fill",f().color("gray2"));svg.set("strokeWidth",2);svg.set("transform","rotate("+start+" 50 50)");svg.move(50,50).line(50,20).end();svg.circle(50,50,3);if(settings.showSeconds!="no"){var start=(d.getSeconds()+d.getMilliseconds()/1E3)*360/60;if(settings.animated!="no")svg.animate("rotate","60s","indefinite",start+" 50 50",start+360+" 50 50");svg.set("class","f-seconds");svg.set("stroke",f().color("gray3"));
    svg.set("fill",f().color("gray3"));svg.set("strokeWidth",1);svg.set("transform","rotate("+start+" 50 50)");svg.move(50,50).line(50,10).end();svg.animate();svg.set("class","f-seconds");svg.circle(50,50,1.5)}return svg.render()}f().prototype().widgetClock=function(settings){var me=f(this.item);me.html(renderClock(settings));return this};var clockPlugin=function(resolve,context){var item=f(context.div).find(".f_clock").item;if(item)f(item).widgetClock(JSON.parse(JSON.stringify(item.dataset))).removeClass("f_clock").addClass("f-clock");
resolve(context)};f().uiPlugins().push(clockPlugin)})();
(function(){var app={};var _session=JSON.parse(sessionStorage.getItem("session"));if(!_session)_session={};var session=_session;try{session=new Proxy(_session,{set:function(target,prop,value){var result=Reflect.set(target,prop,value);sessionStorage.setItem("session",JSON.stringify(target));return result},deleteProperty:function(target,prop){var result=Reflect.deleteProperty(target,prop);sessionStorage.setItem("session",JSON.stringify(target));return result}})}catch(err){}app.session=session;app.set=
  function(name,value){var path=name.split(".");var target=app.session;for(var i=0;i<path.length;i++)if(i<path.length-1){var o=target[path[i]];if(!o)target=target[path[i]]={};else target=o}else target=target[path[i]]=value;app.session.t=(new Date).getTime()};app.clear=function(name){if(!name)for(a in app.session)delete app.session[a];else app.set(name)};app.get=function(name,defaultValue){var path=name.split(".");var target=app.session;var value;for(var i=0;i<path.length;i++)if(i<path.length-1){var o=
target[path[i]];if(!o)target=target[path[i]]={};else target=o}else value=target[path[i]];if(value==undefined){value=defaultValue;app.set(name,value)}return value};f().prototype().app=function(){return app};f().prototype().appSession=function(){return JSON.parse(JSON.stringify(app.session))}})();
(function(){f().prototype().fileupload=function(options){options=options||{};this.each(function(item){if(!item.getAttribute("fileupload")){item.onchange=function(){var input=this;var files=input.files;var url=input.getAttribute("data-url");var json=undefined;try{json=JSON.parse(input.getAttribute("data-json"))}catch(err){}f().api(function(headers){for(var i=0;i<files.length;i++){var file=files[i];var request=new XMLHttpRequest;var formData=new FormData;if(json!==undefined){var blob=new Blob([JSON.stringify(json)],
                {type:"application/json"});formData.append("json",blob)}formData.set(input.name,file,file.name);if(typeof options.timeout!="undefined")request.timeout=options.timeout;if(typeof options.progress=="function")request.onprogress=options.progress;request.onloadend=function(event){if(typeof options.stop=="function")setTimeout(function(){options.stop(event)},0);if(json!==undefined){try{json.info=JSON.parse(event.target.responseText)}catch(err){}delete json.progress;f("upload-complete").emit(json)}input.value=
          ""};if(typeof options.start=="function")request.onloadstart=options.start;request.open("POST",url);f(Object.keys(headers)).each(function(key){request.setRequestHeader(key,headers[key])});request.upload.addEventListener("progress",function(evt){if(evt.lengthComputable){var percentComplete=evt.loaded/evt.total;if(json!==undefined){json.progress=percentComplete;f("upload-progress").emit(json)}}},false);request.send(formData);if(json!==undefined){delete json.progress;f("upload-start").emit(json)}}});
item.blur()};item.setAttribute("fileupload",true)}})}})();
(function(){var templateform=f().tc('  \x3cform\x3e  [%if(data.id){%]    \x3cinput type\x3d"hidden" name\x3d"id" value\x3d"[%\x3ddata.id%]"\x3e  [%}%]  [%f(data.elements).each(function(row,i){%]    \x3cdiv class\x3d"f-form-row"\x3e    [%f(row).each(function(item,j){%]      \x3cdiv class\x3d"f-form-col f-form-[%\x3ditem.type%]"\x3e      \x3cdiv class\x3d"f-form-item[%if(item.type \x3d\x3d "password"){%] secure[%}%][%if(item.readonly \x3d\x3d\x3d true){%] readonly[%}%]"\x3e      [% if(item.type !\x3d \'hidden\'){ %]        \x3cdiv class\x3d"f-form-label"\x3e\x3cspan class\x3d"f-tr"\x3e[%\x3d\'label.\'+item.name%]\x3c/span\x3e\x3c/div\x3e        [%if(item.type \x3d\x3d "password"){%]          \x3cdiv class\x3d"f-form-input-mask"\x3e\x3c/div\x3e          \x3cdiv class\x3d"f-form-eye-icon"\x3e\x3c/div\x3e        [%}%]        [%if(item.type \x3d\x3d \'select\'){%]          \x3cdiv class\x3d"f-form-input f-form-input-select"\x3e          \x3cselect onchange\x3d"f(\'form-select\').emit({name:\'[%\x3ditem.name%]\', value:this.value});f(this).closest(\'.f-form-item\').find(\'.f-form-error\').html(\'\');f(this).closest(\'.f-form-item\').removeClass(\'error\').find(\'input\').items[0].value\x3dthis.value;"\x3e          \x3coption disabled selected\x3e-\x3c/option\x3e          [% item.options.forEach(function(option){ %]            \x3coption value\x3d"[%\x3doption.value%]"\x3e[%\x3doption.label%]\x3c/option\x3e          [% }); %]          \x3c/select\x3e          \x3cdiv class\x3d"f-form-input-select-icon"\x3e\x3ci class\x3d"fas fa-caret-down"\x3e\x3c/i\x3e\x3c/div\x3e          \x3c/div\x3e        [%}else if(item.type \x3d\x3d \'search\'){ %]          \x3cdiv class\x3d"f-form-input-wrap"\x3e          \x3cdiv class\x3d"f-form-input f-form-input-search"\x3e\x26nbsp;\x3c/div\x3e          \x3cdiv class\x3d"f-form-input-search-icon"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-search"\x3e\x3c/i\x3e\x3c/div\x3e          \x3c/div\x3e          \x3cdiv class\x3d"f-form-box-component f-form-box-search hide"\x3e          \x3cdiv class\x3d"f-form-times"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-times"\x3e\x3c/i\x3e\x3c/div\x3e          \x3cdiv\x3e          \x3cdiv class\x3d"f-form-box-search-content"\x3e          \x3cdiv class\x3d"component-search"\x3e          {"name":"form-[%\x3ditem.name%]"}          \x3c/div\x3e          \x3cdiv class\x3d"component-pagination"\x3e          {            "name":"[%\x3ditem.name%]",            "url":"[%\x3ditem.service%]",            "secure":true,            "fields":[            {"name":"id", "width":"10%","sortable":"string","sort":"asc"},            {"name":"name", "width":"30%","sortable":"string"}            ],            "search":{              "source":"form-[%\x3ditem.name%]",              "name":"text"            },            "limit":25,            "template": "[%\x3ditem.template%]",            "mode":"list",            "switchMode":"no"          }          \x3c/div\x3e          \x3c/div\x3e          \x3c/div\x3e          \x3c/div\x3e        [%}else if(item.type \x3d\x3d \'radio\'){%]          \x3cdiv class\x3d"f-form-input f-form-input-radio"\x3e          [% item.options.forEach(function(option){ %]            \x3clabel\x3e            \x3cinput type\x3d"radio" name\x3d"[%\x3ditem.name%]" value\x3d"[%\x3doption.value%]"/\x3e            \x3cspan\x3e[%\x3doption.label%]\x3c/span\x3e            \x3c/label\x3e          [% }); %]          \x3c/div\x3e        [%}%]        [%if(item.type \x3d\x3d "date" || item.type \x3d\x3d "datetime" ||  item.type \x3d\x3d "time"){%]          \x3cdiv class\x3d"f-form-input-group f-form-input-group-[%\x3ditem.type%]"\x3e          [%if(item.type \x3d\x3d "date" || item.type \x3d\x3d "datetime"){%]            \x3cdiv class\x3d"f-form-datepicker"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-calendar-alt"\x3e\x3c/i\x3e\x3c/div\x3e            \x3cdiv class\x3d"f-form-input f-form-input-2 f-form-input-day" tip\x3d"tip.input.day" contenteditable\x3d"plaintext-only" spellcheck\x3d"false"\x3e\x3c/div\x3e            \x3cdiv class\x3d"f-form-sep"\x3e/\x3c/div\x3e            \x3cdiv class\x3d"f-form-input f-form-input-2 f-form-input-month" tip\x3d"tip.input.month" contenteditable\x3d"plaintext-only" spellcheck\x3d"false"\x3e\x3c/div\x3e            \x3cdiv class\x3d"f-form-sep"\x3e/\x3c/div\x3e            \x3cdiv class\x3d"f-form-input f-form-input-4 f-form-input-year" tip\x3d"tip.input.year" contenteditable\x3d"plaintext-only" spellcheck\x3d"false"\x3e\x3c/div\x3e          [%}%]          [%if(item.type \x3d\x3d "datetime" || item.type \x3d\x3d "time"){%]            \x3cdiv class\x3d"f-form-sep"\x3e\x3c/div\x3e            \x3cdiv class\x3d"f-form-input f-form-input-2 f-form-input-hour" tip\x3d"tip.input.hour" contenteditable\x3d"plaintext-only" spellcheck\x3d"false"\x3e\x3c/div\x3e            \x3cdiv class\x3d"f-form-sep"\x3e:\x3c/div\x3e            \x3cdiv class\x3d"f-form-input f-form-input-2 f-form-input-minute" tip\x3d"tip.input.minute" contenteditable\x3d"plaintext-only" spellcheck\x3d"false"\x3e\x3c/div\x3e          [%}%]          \x3cdiv class\x3d"f-form-datepicker-clean hide"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-times"\x3e\x3c/i\x3e\x3c/div\x3e          \x3c/div\x3e          \x3cdiv class\x3d"f-form-box-component f-form-box-datepicker hide"\x3e          \x3cdiv class\x3d"f-form-times"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-times"\x3e\x3c/i\x3e\x3c/div\x3e          \x3cdiv\x3e          \x3cdiv class\x3d"f-form-box-datepicker-content"\x3e          \x3cdiv class\x3d"component-datepicker"\x3e          {"name":"form-[%\x3ditem.name%]"}          \x3c/div\x3e          \x3c/div\x3e          \x3c/div\x3e          \x3c/div\x3e        [%}else if(item.type !\x3d \'select\' \x26\x26 item.type !\x3d \'radio\' \x26\x26 item.type !\x3d \'search\'){%]          \x3cdiv class\x3d"f-form-input" contenteditable\x3d"plaintext-only" spellcheck\x3d"false" name\x3d"[%\x3ditem.name%]" multiline\x3d"[%\x3ditem.multiline%]" type\x3d"[%\x3ditem.type%]"\x3e[%if(item.value){%][%\x3ditem.value%][%}%]\x3c/div\x3e        [%}%]        [%if(item.type \x3d\x3d "date" || item.type \x3d\x3d "datetime" || item.type \x3d\x3d "time"){%]          \x3cdiv class\x3d"f-form-tip"\x3e\x26nbsp;\x3c/div\x3e          \x3cdiv class\x3d"f-form-value"\x3e\x26nbsp;\x3c/div\x3e        [%}%]        \x3cdiv class\x3d"f-form-error"\x3e\x3c/div\x3e        \x3cdiv class\x3d"f-form-field-warning"\x3e\x3c/div\x3e      [% } %]      [% if(item.type \x3d\x3d \'hidden\'){ %]        \x3cdiv class\x3d"f-form-input f-form-input-hidden"\x3e\x3c/div\x3e      [% } %]      [% if(item.type !\x3d \'radio\'){ %]        \x3cinput type\x3d"hidden" name\x3d"[%\x3ditem.name%]"\x3e      [% } %]      \x3c/div\x3e      \x3c/div\x3e    [%});%]    \x3c/div\x3e  [%});%]  \x3cdiv class\x3d"f-form-warning"\x3e\x3c/div\x3e  \x3c/form\x3e');
  function formSubmit(form,data){f().api(function(headers){form.http({url:data.url,method:"POST",headers:headers,onsuccess:function(event){var json=JSON.parse(event.target.responseText);if(json.errors){f(json.errors).each(function(error,index){form.find("input").each(function(item,index){if(item.name==error.name){var e=f(item).closest(".f-form-item").find(".f-form-error");e.html('\x3cspan class\x3d"f-tr"\x3e'+error.error+"\x3c/span\x3e");f(item).closest(".f-form-item").removeClass("error").addClass("error")}});
    form.tr()});f("form-ko").emit({form:data,response:json})}else f("form-ok").emit({form:data,response:json})},onerror:function(event){f("form-ko").emit({form:data})}})})}function handleDateValue(item,group,part,len){var value="";group.find(".f-form-input").each(function(groupItem){if(f(groupItem).hasClass("f-form-input-"+part)){value=groupItem.innerText;if(value.length>len)groupItem.innerText=value="";else value=("0000"+value).slice(-len)}});return value}function handleDate(item,group){var dateAsString=
    "";var year=handleDateValue(item,group,"year",4);if(year!=""){dateAsString+=year;var month=handleDateValue(item,group,"month",2);if(month!=""){dateAsString+="-"+month;var day=handleDateValue(item,group,"day",2);if(day!="")dateAsString+="-"+day}else handleDateValue(item,group,"day",2);var hour=handleDateValue(item,group,"hour",2);if(hour!=""){dateAsString+=" "+hour;var minute=handleDateValue(item,group,"minute",2);if(minute!="")dateAsString+=":"+minute}else handleDateValue(item,group,"minute  ",2)}else{var today=
    new Date;var mm=("0000"+(today.getMonth()+1)).slice(-2);var dd=("0000"+today.getDate()).slice(-2);dateAsString=today.getFullYear()+"-"+mm+"-"+dd;var hour=handleDateValue(item,group,"hour",2);if(hour!=""){dateAsString+=" "+hour;var minute=handleDateValue(item,group,"minute",2);if(minute!="")dateAsString+=":"+minute}}return dateAsString}function setEndOfContenteditable(contentEditableElement){var range=document.createRange();range.selectNodeContents(contentEditableElement);range.collapse(false);var selection=
    window.getSelection();selection.removeAllRanges();selection.addRange(range)}function ascii7(text){return ascii(text,127)}function ascii8(text){return ascii(text,255)}function ascii7i(text){var asciitext="";var x0=0,x1=0,x2=0;while((x1=text.indexOf("\x26#",x1))>=0){asciitext+=text.substring(x0,x1);x1+=2;x2=x1;x0=x2;x2=text.indexOf(";",x2);try{asciitext+=String.fromCodePoint(parseInt(text.substring(x1,x2)));x0=x2+1}catch(err){}}asciitext+=text.substring(x0);return asciitext}function ascii(text,limit){var asciitext=
    "";for(var i=0;i<text.length;i++){var charCode=text.codePointAt(i);if(charCode<=limit)asciitext+=String.fromCodePoint(charCode);else{var char=String.fromCodePoint(charCode);i+=char.length-1;asciitext+="\x26#"+charCode+";"}}return asciitext}f().prototype().form=function(data){this.html(templateform({data:data}));var me=this;f("form-submit").unslot();f("form-submit").slot(function(){formSubmit(f(me.find("form").items[0]),data)});f(me.input).find(".f-form-eye-icon").on("click",function(event){var item=
      f(event.target).closest(".f-form-item");if(item.hasClass("show-password"))item.removeClass("show-password");else item.addClass("show-password")});f(".f-form-input-search-clean").each(function(item,i){f(item).on("click",function(event){f(item).closest(".f-form-item").find(".f-form-input-search").html("\x26nbsp;");f(item).closest(".f-form-item").find('input[type\x3d"hidden"]').items[0].value="";f(item).addClass("hide");event.stopPropagation()})});f(".f-form-datepicker-clean").each(function(item,i){f(item).on("click",
      function(event){f(item).closest(".f-form-item").find(".f-form-input").html("");f(item).addClass("hide");event.stopPropagation()})});f(".f-form-times").each(function(item,i){f(item).on("click",function(event){var box=f(item).closest(".f-form-box-component");box.addClass("hide");box.closest(".form-modal").removeClass("form-modal-pagination").removeClass("form-modal-datepicker");event.stopPropagation()})});f(".f-form-search").each(function(item,i){f(item).on("click",function(event){var box=f(item).find(".f-form-box-search");
        if(box.hasClass("hide")){var ok=false;try{var search=box.find(".component-search");if(!search.hasClass("f-search")){search.addClass("f_search");ok=true}}catch(e){}try{var pagination=box.find(".component-pagination");if(!pagination.hasClass("f-pagination")){pagination.addClass("f_pagination");ok=true}}catch(e){}if(ok)box.find(".f-form-box-search-content").ui({onready:function(){box.find(".component-search").removeClass("component-search");box.find(".component-pagination").removeClass("component-pagination");
        box.closest(".form-modal").addClass("form-modal-pagination");box.removeClass("hide");setTimeout(function(){if(box.closest(".form-panel").item)box.closest(".form-panel").item.scrollTop=0},0)}});else{box.closest(".form-modal").addClass("form-modal-pagination");box.removeClass("hide");setTimeout(function(){if(box.closest(".form-panel").item)box.closest(".form-panel").item.scrollTop=0},0)}}})});f(".f-form-datepicker").each(function(item,i){f(item).on("click",function(event){var formItem=f(item).closest(".f-form-item");
        var input=formItem.find('[type\x3d"hidden"]').items[0];var box=formItem.find(".f-form-box-datepicker");if(box.hasClass("hide")){var defaultDate=null;if(input.value)defaultDate=Date.parse(input.value);var ok=false;try{var datepicker=box.find(".component-datepicker");if(!datepicker.hasClass("f-datepicker")){datepicker.addClass("f_datepicker");ok=true}}catch(e){}if(ok)box.find(".f-form-box-datepicker-content").ui({onready:function(){if(defaultDate&&!defaultDate.isInvalid())f().datepicker({channel:"form-"+
            input.name,what:"defaultDate",value:defaultDate.toISOString()});box.find(".component-datepicker").removeClass("component-datepicker");box.closest(".form-modal").addClass("form-modal-datepicker");box.removeClass("hide");setTimeout(function(){if(box.closest(".form-panel").item)box.closest(".form-panel").item.scrollTop=0},0)}});else{if(defaultDate&&!defaultDate.isInvalid())f().datepicker({channel:"form-"+input.name,what:"defaultDate",value:defaultDate.toISOString()});box.closest(".form-modal").addClass("form-modal-datepicker");
        box.removeClass("hide");setTimeout(function(){if(box.closest(".form-panel").item)box.closest(".form-panel").item.scrollTop=0},0)}}})});f(".f-form-input").each(function(item,i){var fItem=f(item);if(!fItem.hasClass("f-form-input-search")&&!fItem.hasClass("f-form-input-select")&&!fItem.hasClass("f-form-input-radio")){fItem.closest(".f-form-item").on("click",function(event){f(item).closest(".f-form-item").find(".f-form-input").items[0].focus()});fItem.on("click",function(event){event.stopPropagation()});
        fItem.on("focus",function(event){setEndOfContenteditable(event.target);var tip=event.target.getAttribute("tip");if(tip)f(item).closest(".f-form-item").find(".f-form-tip").html(f().tr(tip));f(item).closest(".f-form-item").addClass("active").removeClass("error").find(".f-form-error").html("")});fItem.on("blur",function(event){f(item).closest(".f-form-item").removeClass("active").find(".f-form-tip").html("\x26nbsp;");if(window.getSelection)window.getSelection().removeAllRanges();else if(document.selection)document.selection.empty()});
        var observer=new MutationObserver(function(mutations){observer.disconnect();var value=ascii7(item.innerText.trim());var currentValue=value;value=value.replaceAll("\x26#778;","\x26#730;");if(currentValue!=value)item.innerHTML=value;value=ascii8(ascii7i(item.innerText));observer.observe(item,{childList:true,subtree:true,characterData:true,attributes:true});if(item.getAttribute("multiline")!=="true"&&(item.innerText.match(/\n/)||item.innerText.match(/\r/))){item.innerText=value=value.replace(/\r?\n/g,
            "").trim();item.blur();formSubmit(f(item).closest("form"),data)}if(item.getAttribute("type")=="password"&&value.match(/ /)){item.innerText=value=value.replace(/ /g,"").trim();item.blur()}var mask="";for(var i=0;i<value.length;i++)mask+="\x26bull;";f(item.parentElement).find(".f-form-input-mask").html(mask);var group=f(item.parentElement).closest(".f-form-input-group");if(group.items){value=handleDate(item,f(item.parentElement).closest(".f-form-input-group"));var userEnteredDate=new Date(Date.parse(value));
            var localDateString=""+userEnteredDate.toLocaleDateString(f("html").item.getAttribute("lang"),{weekday:"long",day:"numeric",month:"long",year:"numeric"});if(group.hasClass("f-form-input-group-datetime"))localDateString+=' \x3ci class\x3d"fal fa-clock"\x3e\x3c/i\x3e '+userEnteredDate.toLocaleTimeString(f("html").item.getAttribute("lang"),{hour12:false,timeStyle:"short"});if(group.hasClass("f-form-input-group-time"))localDateString='\x26nbsp; \x3ci class\x3d"fal fa-clock"\x3e\x3c/i\x3e '+userEnteredDate.toLocaleTimeString(f("html").item.getAttribute("lang"),
      {hour12:false,timeStyle:"short"});if(isNaN(userEnteredDate.getTime())){value="";f(item).closest(".f-form-item").find(".f-form-value").item.innerHTML="\x26nbsp;"}else f(item).closest(".f-form-item").find(".f-form-value").item.innerHTML=localDateString}var input=f(item).closest(".f-form-item").find("input").item;input.value=value;f("form-change").emit({form:data})});observer.observe(item,{childList:true,subtree:true,characterData:true,attributes:true})}if(data.values[item.getAttribute("name")])item.innerText=
      data.values[item.getAttribute("name")];else{var name=f(item).closest(".f-form-item").find("input").items[0].name;if(data.values[name]!=null&&typeof data.values[name]!="undefined"){var value=data.values[name];if(f(item).hasClass("f-form-input-day")){item.innerText=(new Date(Date.parse(value))).getDate();f(item).closest(".f-form-item").find(".f-form-datepicker-clean").removeClass("hide")}if(f(item).hasClass("f-form-input-month"))item.innerText=(new Date(Date.parse(value))).getMonth()+1;if(f(item).hasClass("f-form-input-year"))item.innerText=
          (new Date(Date.parse(value))).getFullYear();if(f(item).hasClass("f-form-input-hour"))item.innerText=("00"+(new Date(Date.parse(value))).getHours()).slice(-2);if(f(item).hasClass("f-form-input-minute"))item.innerText=("00"+(new Date(Date.parse(value))).getMinutes()).slice(-2);if(f(item).hasClass("f-form-input-hidden"))f(item).closest(".f-form-item").find("input").items[0].value=value;if(f(item).hasClass("f-form-input-select")){f(item).find("select").items[0].value=value;f(item).closest(".f-form-item").find("input").items[0].value=
            value}if(f(item).hasClass("f-form-input-radio"))try{f(item).find('input[type\x3d"radio"][value\x3d"'+value+'"]').items[0].checked=true}catch(e){}if(f(item).hasClass("f-form-input-search")){f(item).closest(".f-form-item").find("input").items[0].value=value;f(item).closest(".f-form-item").find(".f-form-input-search-clean").removeClass("hide");var checkName=name.replace("Id","Name");if(data.values[checkName]!=null&&typeof data.values[checkName]!="undefined")value=data.values[checkName];item.innerText=
            value}}}if(data.values&&data.values.warnings&&data.fieldWarning){var input=f(item).closest(".f-form-item").find("input").items[0];if(input)f(data.values.warnings).each(function(warning){if(input.name==warning.name){warning.id=data.id;warning["class"]=data.values["class"];var e=f(item).closest(".f-form-item").find(".f-form-field-warning");var modelName="formWarning."+warning.name;f().app().set(modelName,{data:warning});e.html('\x3cdiv class\x3d"f_t" data-resource\x3d"'+data.fieldWarning+'" data-target\x3d"'+
    modelName+'"\x3e\x3c/div\x3e');f(item).closest(".f-form-item").removeClass("warning").addClass("warning")}})}});if(data.values&&data.values.warnings&&data.formWarning){var e=f(me.input).find(".f-form-warning");var modalName="formWarning."+f().app().get("form");f().app().set(modalName,{data:data.values});e.html('\x3cdiv class\x3d"f_t" data-resource\x3d"'+data.formWarning+'" data-target\x3d"'+modalName+'"\x3e\x3c/div\x3e')}};var formPlugin=function(resolve,context){var item=f(context.div).find(".f_form").item;
    if(item){f(item).removeClass("f_form").addClass("f-form");f().http({url:item.getAttribute("data-resource"),onsuccess:function(event){var json=JSON.parse(event.target.responseText);json.url=json.uri;if(item.getAttribute("data-server"))json.url=item.getAttribute("data-server")+json.uri;var dataset=JSON.parse(JSON.stringify(item.dataset));if(item.getAttribute("data-id")){if(json.uri.indexOf("/add")>=0){json.uri=json.uri.replace("/add","/edit");json.url=json.url.replace("/add","/edit")}else{json.uri=
              json.uri+"/edit";json.url=json.url+"/edit"}json.id=item.getAttribute("data-id");var editUrl=json.url.substring(0,json.url.lastIndexOf("/")+1)+item.getAttribute("data-id");f().api(function(headers){f().http({url:editUrl,headers:headers,onsuccess:function(event){json.values=JSON.parse(event.target.responseText);json.values=Object.assign(dataset,json.values);f(item).form(json);f(context.div).uiRender(context.callback)}})})}else{if(json.uri&&json.uri.indexOf("/add")<0){json.uri=json.uri+"/add";json.url=
json.url+"/add"}json.id=null;json.values=Object.assign(json.values,dataset);f(item).form(json);f(context.div).uiRender(context.callback)}},onerror:function(){f(context.div).uiRender(context.callback)}})}else resolve(context)};f().uiPlugins().push(formPlugin)})();
(function(){var templatedatepicker=f().tc('[%var today \x3d new Date();var viewDate \x3d new Date(data.viewDate);var defaultDate \x3d data.defaultDate ? new Date(data.defaultDate) : null;var minDate \x3d data.minDate ? new Date(data.minDate) : null;var maxDate \x3d data.maxDate ? new Date(data.maxDate) : null;var monthMonday \x3d new Date(viewDate).getMonthMonday();var weekday \x3d new Date(viewDate).getStartOfWeek();var day \x3d new Date(monthMonday);%]\x3cdiv class\x3d"[%\x3ddata.name%]"\x3e\t\x3cdiv class\x3d"ui-row mobile ui-datepicker-toolbar"\x3e\t\t\x3cdiv class\x3d"ui-column ui-column-fit ui-datepicker-prev"\t\t\tonclick\x3d"f(event).datepicker({channel:\'[%\x3ddata.name%]\',what:\'prev\'})"\x3e\t\t\t\x3ci class\x3d"fas fa-chevron-left"\x3e\x3c/i\x3e\t\t\x3c/div\x3e\t\t\x3cdiv class\x3d"ui-column ui-datepicker-today"\t\t\tonclick\x3d"f(event).datepicker({channel:\'[%\x3ddata.name%]\',what:\'today\'})"\x3e\t\t\t[%\x3dviewDate.format({month:\'long\',year:\'numeric\'})%]\t\t\x3c/div\x3e\t\t\x3cdiv class\x3d"ui-column ui-column-fit ui-datepicker-next"\t\t\tonclick\x3d"f(event).datepicker({channel:\'[%\x3ddata.name%]\',what:\'next\'})"\x3e\t\t\t\x3ci class\x3d"fas fa-chevron-right"\x3e\x3c/i\x3e\t\t\x3c/div\x3e\t\x3c/div\x3e\t\x3cdiv class\x3d"ui-datepicker"\x3e\t\t\x3cdiv class\x3d"ui-datepicker-row"\x3e\t\t[%for(var j\x3d1; j\x3c\x3d 7; j++){%]\t\t\x3cdiv class\x3d"ui-datepicker-column"\x3e\t\t\t\x3cdiv class\x3d"ui-weekday"\x3e[%\x3d weekday.format({weekday:\'short\'}) %]\x3c/div\x3e\t\t\x3c/div\x3e\t\t[% weekday.tomorrow(); %]\t\t[%}%]\t\x3c/div\x3e\t[%for(var i\x3d1; i\x3c\x3d6; i++){%]    \x3cdiv class\x3d"ui-datepicker-row"\x3e        [%for(var j\x3d1; j\x3c\x3d 7; j++){%]        \x3cdiv class\x3d"ui-datepicker-column[%if(day.format({}) \x3d\x3d today.format({})){%] ui-today[%}%][%if(defaultDate \x26\x26 day.format({})\x3d\x3ddefaultDate.format({})){%] ui-selected[%}%][%if(day.format({month:\'numeric\',year:\'numeric\'})\t\t\t\t!\x3dviewDate.format({month:\'numeric\',year:\'numeric\'})){%] ui-disable[%}%] [%if((maxDate !\x3d null \x26\x26 maxDate.getTime() \x3c\x3d day.getTime()) || (minDate !\x3d null \x26\x26 minDate.getTime() \x3e\x3d day.getTime())){%] ui-disable ui-event-none[%}%]"\x3e\t\t\t\t\x3cdiv class\x3d"ui-day"\t\t\t\t\tonclick\x3d"f(event).datepicker({channel:\'[%\x3ddata.name%]\',what:\'select\',value:\'[%\x3dday.toISOString()%]\'})"\x3e\t\t\t\t\t[%\x3d day.getDate() %]\t\t\t\t\x3c/div\x3e\t\t\x3c/div\x3e\t\t[% day.tomorrow(); %]\t\t[%}%]\t\x3c/div\x3e\t[%}%]\x3c/div\x3e\x3c/div\x3e');
  function datepickerRender(container,json,callback){f().app().set("datepicker."+json.name,json);f(container).html(templatedatepicker({data:json}));if(typeof callback=="function")callback(container)}f().prototype().datepicker=function(container,json){json=json||{};if(container.constructor==={}.constructor){var command=container;var sender=this;f(".f-datepicker ."+command.channel).each(function(item){var datepicker=f().app().get("datepicker."+command.channel);var me=item;if(command.what=="prev"){var viewDate=
          new Date(datepicker.viewDate);datepicker.viewDate=viewDate.prevMonth().toISOString()}if(command.what=="next"){var viewDate=new Date(datepicker.viewDate);datepicker.viewDate=viewDate.nextMonth().toISOString()}if(command.what=="today")datepicker.viewDate=(new Date).toISOString();if(command.what=="defaultDate"){datepicker.defaultDate=command.value;datepicker.viewDate=command.value}if(command.what=="viewDate")datepicker.viewDate=command.value;if(command.what=="select"){datepicker.defaultDate=command.value;
          datepicker.viewDate=command.value;try{var target=sender.input.target;var formItem=f(item).closest(".f-form-item");if(formItem.items.length!=0){var date=new Date(command.value);date.setHours(12);date.setMinutes(0);date.setSeconds(0);formItem.find(".f-form-input-day").html(date.getDate());formItem.find(".f-form-input-month").html(date.getMonth()+1);formItem.find(".f-form-input-year").html(date.getFullYear());formItem.find(".f-form-input-hour").html(date.getHours());formItem.find(".f-form-input-minute").html(date.getMinutes());
  formItem.find(".f-form-datepicker-clean").removeClass("hide");f(item).closest(".f-form-box-datepicker").addClass("hide");f(item).closest(".form-modal").removeClass("form-modal-datepicker");sender.input.stopImmediatePropagation()}}catch(e){}f("datepicker").emit(command)}datepickerRender(item.parentElement,datepicker)})}else{if(!json.viewDate)json.viewDate=(new Date).toISOString();if(json.defaultDate)json.viewDate=json.defaultDate;datepickerRender(container,json,json.onready)}return this};var datepickerPlugin=
function(resolve,context){var item=f(context.div).find(".f_datepicker").item;if(item){var json=JSON.parse(item.innerText);json.onready=function(){f(context.div).uiRender(context.callback)};f(item).addClass("f-datepicker").datepicker(item,json).removeClass("f_datepicker")}else resolve(context)};f().uiPlugins().push(datepickerPlugin)})();
(function(){function updateCollapse(collapse){var height=0;collapse.find(".f-body").each(function(body){height=body.children[0].getBoundingClientRect().height});collapse.find(".f-body").each(function(body){if(collapse.hasClass("f-on"))body.style.height=height+"px";else body.style.height=0+"px";app.collapses=app.collapses});collapse.find(".f-header").find(".f-icon").each(function(icon){icon.innerHTML='\x3ci class\x3d"'+f().fa()+' fa-angle-down"\x3e\x3c/i\x3e'})}f().prototype().collapse=function(json){if(json)this.each(function(item){f(item).find(".f-body").each(function(body){body.children[0].addEventListener("DOMSubtreeModified",
function(event){var collapse=f(event.target).closest(".f-collapse");updateCollapse(collapse)})});f(item).find(".f-header").on("click",function(event){var collapse=f(event.target).closest(".f-collapse");collapse.toggleClass("f-on");updateCollapse(collapse)})});f(".f-collapse").each(function(collapse){updateCollapse(f(collapse))});if(json)json.onready();return this}})();
(function(){var templatepagination=f().tc('[% var pagination \x3d f().app().get(\'pagination.\'+conf.name) %]\x3cdiv class\x3d"toolbar"\x3e\x3cdiv class\x3d"toolbar-mode"\x3e[%if(pagination.switchMode \x3d\x3d \'yes\'){%]  [%if(pagination.mode \x3d\x3d \'list\'){%]    \x3cdiv onclick\x3d"f(event).pagination({channel:\'[%\x3dconf.name%]\',what:\'mode\',value:\'grid\'})"\x3e\x3cdiv\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-table"\x3e\x3c/i\x3e\x3c/div\x3e\x3c/div\x3e  [%}else{%]    \x3cdiv onclick\x3d"f(event).pagination({channel:\'[%\x3dconf.name%]\',what:\'mode\',value:\'list\'})"\x3e\x3cdiv\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-grip-horizontal"\x3e\x3c/i\x3e\x3c/div\x3e\x3c/div\x3e  [%}%][%}%]\x3c/div\x3e\x3cdiv class\x3d"toolbar-navigator"\x3e[%if(conf.size \x3e 1){%]  [%if(conf.n \x3e 2){%]    \x3cdiv onclick\x3d"f(event).pagination({channel:\'[%\x3dconf.name%]\',what:\'page-first\'})"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-chevron-double-left"\x3e\x3c/i\x3e\x3c/div\x3e  [%}else{%]    \x3cdiv class\x3d"off"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-chevron-double-left"\x3e\x3c/i\x3e\x3c/div\x3e  [%}%]  [%if(conf.n \x3e 1){%]    \x3cdiv onclick\x3d"f(event).pagination({channel:\'[%\x3dconf.name%]\',what:\'page-prev\'})"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-chevron-left"\x3e\x3c/i\x3e\x3c/div\x3e  [%}else{%]    \x3cdiv class\x3d"off"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-chevron-left"\x3e\x3c/i\x3e\x3c/div\x3e  [%}%]  [%for(var i\x3d-2;i\x3cconf.size+2;i++){ if(Math.abs(i-conf.n+1) \x3c 3){ %]      [%if(i \x3e\x3d 0 \x26\x26 i\x3cconf.size){%]        \x3cdiv class\x3d"btn-page [%if(i+1 \x3d\x3d conf.n){%]active[%}%]" onclick\x3d"f(event).pagination({channel:\'[%\x3dconf.name%]\',what:\'page\',value:[%\x3d(i+1)%]})"\x3e\x3cdiv\x3e[%\x3d(i+1)%]\x3c/div\x3e\x3c/div\x3e      [%}else{%]        \x3cdiv class\x3d"btn-page off"\x3e\x3c/div\x3e      [%}%]  [%}}%]  [%if(conf.size - conf.n \x3e 0){ %]    \x3cdiv onclick\x3d"f(event).pagination({channel:\'[%\x3dconf.name%]\',what:\'page-next\'})"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-chevron-right"\x3e\x3c/i\x3e\x3c/div\x3e  [%}else{ Math.ceil(count/limit)%]    \x3cdiv class\x3d"off"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-chevron-right"\x3e\x3c/i\x3e\x3c/div\x3e  [%}%]  [%if(conf.size - conf.n \x3e 1){ %]    \x3cdiv onclick\x3d"f(event).pagination({channel:\'[%\x3dconf.name%]\',what:\'page-last\'})"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-chevron-double-right"\x3e\x3c/i\x3e\x3c/div\x3e  [%}else{ Math.ceil(count/limit)%]    \x3cdiv class\x3d"off"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-chevron-double-right"\x3e\x3c/i\x3e\x3c/div\x3e  [%}%][%}%]\x3c/div\x3e\x3cdiv class\x3d"toolbar-info"\x3e\x3cspan class\x3d"f-tr"\x3e[%if(conf.size \x3e 1){%]label.page\x3c/span\x3e\x26nbsp;\x3cb\x3e[%\x3dconf.n%]\x3c/b\x3e/\x3cb\x3e[%\x3dconf.size%]\x3c/b\x3e,\x26nbsp;\x3cb\x3e[%\x3dfrom%]\x3c/b\x3e-[%}%]\x3cb\x3e[%\x3dfrom+Math.min(limit,size)%]\x3c/b\x3e\x26nbsp;\x3cspan class\x3d"f-tr"\x3elabel.of\x3c/span\x3e\x26nbsp;\x3cb\x3e[%\x3dcount%]\x3c/b\x3e\x26nbsp;\x26nbsp;\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"[%\x3dconf.name%] view-[%\x3dpagination.mode%]"\x3e[%if(conf.template){%]  [%    var html;    try {      html \x3d conf.template({data:{items:items, conf:conf}});    } catch(err) {      html \x3d err;    }  %]  [%\x3d html %][%}else if(pagination.mode \x3d\x3d \'list\') {%]  \x3ctable\x3e  [%  var sortableCount \x3d 0;  f(conf.fields).each(function(field) {    if(field.sortable){      sortableCount++;    }  });  %]  [%f(conf.fields).each(function(field) {%]    [%    var sort \x3d \'\';    var sortClass \x3d \'\';    if(field.sortable) {      if(pagination.sort.indexOf(field.name) \x3d\x3d 0){        if(pagination.sort.indexOf(\'asc\') \x3e 0){          sort \x3d \'-up\';          sortClass \x3d \'sort-up\';        }else{          sort \x3d \'-down\';          sortClass \x3d \'sort-down\';        }      }else{      }    }    %]    [%if(field.sortable || pagination.mode \x3d\x3d \'list\'){%]      \x3cth style\x3d"width:[%\x3dfield.width%]" class\x3d"[%\x3dsortClass%]" [%if(field.sortable){%]onclick\x3d"f(event).pagination({channel:\'[%\x3dconf.name%]\',what:\'sort\',name:\'[%\x3dfield.name%]\'})"[%}%]\x3e      \x3cspan class\x3d"f-tr" code\x3d"label.[%\x3dfield.name%]"\x3e[%\x3dfield.name%]\x3c/span\x3e      [%if(field.sortable){%]        \x3ci class\x3d"[%\x3df().fa()%] fa-sort[%\x3dsort%]"\x3e\x3c/i\x3e      [%}%]      \x3c/th\x3e    [%}%]  [%});%]  [%f(items).each(function(item) {    var me \x3d item;    %]    \x3ctr onclick\x3d"f(event).pagination({channel:\'[%\x3dconf.name%]\',what:\'select\',id:\'[%\x3ditem.id%]\'})"\x3e    [%f(conf.fields).each(function(field) {%]      [%if(field.template){        var html;        try {          html \x3d field.template({data:item});        } catch(err) {          html \x3d err;        }        %]        \x3ctd style\x3d"width:[%\x3dfield.width%]"\x3e\x3cdiv class\x3d"[%\x3dconf.name%]-[%\x3dfield.name%]"\x3e[%\x3dhtml%]\x3c/div\x3e\x3c/td\x3e      [%}else{%]        \x3ctd style\x3d"width:[%\x3dfield.width%]"\x3e\x3cdiv class\x3d"[%\x3dconf.name%]-[%\x3dfield.name%]"\x3e[%\x3ditem[field.name]%]\x3c/div\x3e\x3c/td\x3e      [%}%]    [%});%]    \x3c/tr\x3e  [%});%]  \x3c/table\x3e[%}else{%]  \x3cdiv class\x3d"grid [%if(conf.width \x3d\x3d\x3d \'2x\'){%]grid-2x[%}%]"\x3e  [%f(items).each(function(item) {    var html;    try {      html \x3d conf.grid({data:item});    } catch(err) {      html \x3d err;    }    %]    \x3cdiv class\x3d"grid-item" data-id\x3d"[%\x3ditem.id%]" onclick\x3d"f(event).pagination({channel:\'[%\x3dconf.name%]\',what:\'select\',id:\'[%\x3ditem.id%]\'})"\x3e      \x3cdiv class\x3d"grid-item-content"\x3e[%\x3dhtml%]\x3c/div\x3e    \x3c/div\x3e  [%});%]  \x3c/div\x3e[%}%]\x3c/div\x3e');
  function paginationRender(container,json,callback){var sortName=f().app().get("pagination."+json.name+".sort")||"";var params={from:f().app().get("pagination."+json.name+".from",0),limit:json.limit};if(sortName)params.sort=sortName;var searchText="";if(json.search){searchText=f().app().get("search."+json.search.source,"");params[json.search.name]=searchText}if(json.params)for(key in json.params)params[key]=json.params[key];if(json.secure)f().api(function(headers){f().http({url:json.url,headers:headers,
        params:params,onsuccess:function(event){var data=JSON.parse(event.target.responseText);f().app().set("pagination."+json.name+".conf",json);f().app().set("pagination."+json.name+".data",data);if(!data.limit)data.limit=Number.MAX_SAFE_INTEGER;if(!data.from)data.from=0;json.n=data.from/data.limit+1;if(data.count/data.limit==Math.floor(data.count/data.limit))json.size=Math.floor(data.count/data.limit);else json.size=Math.floor(data.count/data.limit)+1;data.conf=json;f(container).html(templatepagination(data));
          f(container).item.setAttribute("name",json.name);f("pagination-changed").emit({name:json.name});if(typeof callback=="function")callback(container)}})})}f().prototype().pagination=function(container,json){if(container.constructor==={}.constructor){var command=container;var sender=this;f(".f-pagination ."+command.channel).each(function(item){var pagination=f().app().get("pagination."+command.channel);var me=item;if(command.what=="sort"){var sort="asc";if(f(sender.input.target).closest("th").hasClass("sort-up"))sort=
        "desc";pagination.sort=command.name+"|"+sort;pagination.from=0}if(isNaN(pagination.from))pagination.from=0;if(command.what=="page-first")pagination.from=0;if(command.what=="update")pagination.from=0;if(command.what=="page-prev")pagination.from=pagination.from-pagination.data.limit;if(command.what=="page-next")pagination.from=pagination.from+pagination.data.limit;if(command.what=="page-last")pagination.from=pagination.data.limit*Math.floor(pagination.data.count/pagination.data.limit);if(command.what==
        "page")pagination.from=pagination.data.limit*(command.value-1);if(command.what=="mode")pagination.mode=command.value;if(command.what=="select"){try{var target=sender.input.target;var formItem=f(item).closest(".f-form-item");if(formItem.items.length!=0){if(command.value)formItem.find(".f-form-input-search").html(command.value);else{if(!target.onclick)target=f(target).closest("a").items[0];formItem.find(".f-form-input-search").html(target.innerText.trim())}formItem.find('input[type\x3d"hidden"]').items[0].value=
          command.id;formItem.find(".f-form-input-search-clean").removeClass("hide");f(item).closest(".f-form-box-search").addClass("hide");f(item).closest(".form-modal").removeClass("form-modal-pagination");sender.input.stopImmediatePropagation()}}catch(e){}f("pagination").emit(command)}else paginationRender(item.parentElement,pagination.conf,function(container){f(".f-pagination").tr();f(container).find(".f_svg").renderSvg()})})}else{var sort="";try{json.grid=f().tc(f(container).find("script[name\x3dtemplate-grid]").html())}catch(err){}f(json.fields).each(function(field){try{field.template=
          f().tc(f(container).find("script[name\x3d"+field.name+"]").html())}catch(err){}json.mode=f().app().get("pagination."+json.name+".mode",json.mode);json.switchMode=f().app().get("pagination."+json.name+".switchMode",json.switchMode?json.switchMode:"yes");if(field.sort)json.sort=f().app().get("pagination."+json.name+".sort",field.name+"|"+field.sort);json.search=f().app().get("pagination."+json.name+".search",json.search)});if(json.template)f().http({url:json.template,onsuccess:function(event){var text=
event.target.responseText;try{json.template=f().tc(text)}catch(e){}paginationRender(container,json,json.onready)}});else paginationRender(container,json,json.onready)}return this};var paginationPlugin=function(resolve,context){var item=f(context.div).find(".f_pagination").item;if(item){var json=JSON.parse(item.innerText);json.onready=function(){f(context.div).uiRender(context.callback)};f(item).addClass("f-pagination").pagination(item,json).removeClass("f_pagination")}else resolve(context)};f().uiPlugins().push(paginationPlugin)})();
(function(){var templatesearch=f().tc('\x3cdiv class\x3d"f-search-input [%\x3dname%]"\x3e\x3cdiv class\x3d"icon"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-search"\x3e\x3c/i\x3e\x3c/div\x3e\x3cdiv class\x3d"input" contenteditable\x3d"plaintext-only" spellcheck\x3d"false"\x3e\x3c/div\x3e\x3cdiv class\x3d"clear"\x3e\x3ci class\x3d"[%\x3df().fa()%] fa-times"\x3e\x3c/i\x3e\x3c/div\x3e\x3c/div\x3e');var searchTimeout=0;function emitSearch(name,event){var pagination=f().app().get("pagination",{});for(var key in pagination)if(pagination[key].search){var search=
      pagination[key].search;if(search.source==name)f().pagination({channel:key,what:"update"})}f("search").emit({name:name,value:f().app().get("search."+name)})}f().prototype().search=function(data){this.html(templatesearch(data));var item=this.items[0];var me=this;var input=me.find(".input").items[0];me.find(".clear").addClass("off").on("click",function(){input.innerText=""});f(item).on("click",function(){input.focus()});input.innerText=f().app().get("search."+data.name,"");(new MutationObserver(function(event){var value=
    input.innerText.trim();if(input.innerText.match(/\n/)||input.innerText.match(/\r/))input.blur();if(value=="")me.find(".clear").addClass("off");else me.find(".clear").removeClass("off");f().app().set("search."+data.name,value);clearTimeout(searchTimeout);searchTimeout=setTimeout(function(){emitSearch(data.name,event)},input.innerText==""?0:500)})).observe(input,{childList:true,subtree:true,characterData:true,attributes:true});if(input.innerText=="")me.find(".clear").addClass("off");else me.find(".clear").removeClass("off");
data.onready();return this};var searchPlugin=function(resolve,context){var item=f(context.div).find(".f_search").item;if(item){var json=JSON.parse(item.innerText);json.onready=function(){f(context.div).uiRender(context.callback)};f(item).addClass("f-search").search(json).removeClass("f_search")}else resolve(context)};f().uiPlugins().push(searchPlugin)})();
(function(){var templateselect=f().tc('\x3cdiv class\x3d"f-select-input"\x3e\x3cdiv class\x3d"f-select-choose f-on"\x3e\x3cspan\x3e\x3c/span\x3e\x26nbsp;\x26nbsp;\x3ci class\x3d"[%\x3df().fa()%] fa-caret-down fa-fw"\x3e\x3c/i\x3e\x3c/div\x3e\x3cdiv class\x3d"f-select-panel"\x3e[%f(items).each(function(item){%]  \x3cdiv class\x3d"f-select-option[%if(item.disable){%] f-select-option-disable[%}%]"\x3e  \x3cdiv class\x3d"f-select-label"\x3e[%\x3ditem.label%]\x26nbsp;\x26nbsp;\x3c/div\x3e  \x3c/div\x3e[%})%]\x3c/div\x3e\x3c/div\x3e');
  function updateSelectors(name,value){f().app().set("select."+name,value)}function renderSelect(item,json){try{var value=f().app().get("select."+json.name);if(json.selected===undefined&&value)json.selected=value}catch(err){}var span=f(item).find(".f-select-choose").find("span").item;span.innerHTML="";if(json.selected)for(var i=0;i<json.items.length;i++){var option=json.items[i];if(option.value==json.selected){span.innerHTML=option.label;updateSelectors(json.name,option.value)}}if(span.innerHTML==""&&
    json.items.length!=0){var option=json.items[0];json.selected=option.value;span.innerHTML=option.label;updateSelectors(json.name,option.value)}if(span.innerHTML==""){var text=f().tr("choose."+json.name);span.innerHTML=text===undefined?"choose."+json.name:text}}f().prototype().select=function(json){this.each(function(item){f(item).html(templateselect(json));var width=0;f(item).find(".f-select-label").each(function(item){var rect=item.getBoundingClientRect();if(rect.width>width)width=Math.ceil(rect.width)});
      item.style.width=width+"px";f(item).on("click",function(event){var me=f(event.target).closest(".f-select").item;var options=f(me).find(".f-select-option");options.each(function(option,index){var rect=option.getBoundingClientRect();if(event.clientY>rect.top&&event.clientY<rect.top+rect.height){json.selected=json.items[index].value;renderSelect(item,json);f("select").emit({name:json.name,value:json.items[index].value,info:json.info})}});f(".f-select").each(function(item){if(item!=me)f(item).removeClass("f-on");
      else f(item).toggleClass("f-on")});var height=options.item.getBoundingClientRect().height;if(f(item).hasClass("f-on"))f(item).find(".f-select-panel").item.style.height=height*json.items.length+"px";else f(item).find(".f-select-panel").item.style.height=0+"px";event.stopPropagation()});renderSelect(item,json)});return this};var selectPlugin=function(resolve,context){var item=f(context.div).find(".f_select").item;if(item){f(item).removeClass("f_select").addClass("f-select");f(item).select(JSON.parse(item.innerHTML));
f(context.div).uiRender(context.callback)}else resolve(context)};f().uiPlugins().push(selectPlugin)})();
(function(){var languages={it:{"btn.checkout":"Invia Ordine","btn.yes":"Si","btn.no":"No","btn.ok":"OK","btn.back":"Torna indietro","btn.cancel":"Annulla","btn.delete":"Elimina","btn.signin":"Accedi","btn.signup":"Iscriviti","btn.signforgot":"Recupera Password","btn.signout":"Esci","goto.sign":"Accedi","goto.signin":"Sei un utente registrato?","goto.signup":"Non hai un account? Crealo ora","goto.signforgot":"Hai dimenticato la password?","label.name":"Nome","label.surname":"Cognome","label.username":"Username",
      "label.email":"Email","label.password":"Password","label.confirmpassword":"Conferma password","label.title":"Titolo","label.description":"Descrizione","label.date":"Data","label.duedate":"Data di scadenza","label.birthdate":"Data di nascita","label.noaccess":"No Access","label.readaccess":"Read Only","label.readwriteaccess":"Read / Write","error.bad":"Il valore inserito non \u00e8 corretto","error.empty":"Il valore non pu\u00f2 essere vuoto","error.bad.email":"La Email inserita non \u00e8 corretta",
      "error.empty.email":"\u00c8 necessario inserire una Email","error.tooshort":"Il valore inserito \u00e8 troppo corto","error.different":"La conferma inserita non \u00e8 corretta","error.conflict":"Il valore inserito \u00e8\u00a0utilizzato","facebook.connect":"Continua con Facebook","tip.input.year":"Inserisci l'anno utilizzando 4 cifre","tip.input.month":"Inserisci il mese utilizzando un numero da 1 a 12","tip.input.day":"Inserisci il numero del giorno","tip.input.hour":"Inserisci l'ora utilizzando un numero da 0 a 23",
    "tip.input.minute":"Inserisci i minuti utilizzando un numero da 0 a 59"},en:{"message.confirm":"Are you sure?","btn.checkout":"Checkout","btn.yes":"Yes","btn.no":"No","btn.ok":"OK","btn.back":"Back","btn.edit":"Edit","btn.close":"Close","btn.saveandclose":"Save and close","btn.cancel":"Cancel","btn.delete":"Delete","btn.signin":"Sign In","btn.signup":"Sign Up","btn.signforgot":"Forgot Password","btn.signout":"Sign Out","btn.sync":"Sync","goto.sign":"Sign","goto.signin":"Are you a registered user?",
      "goto.signup":"Do you want to register as a new user?","goto.signforgot":"Did you forget your password?","label.page":"page","label.of":"of","label.name":"Name","label.surname":"Surname","label.username":"Username","label.email":"Email","label.password":"Password","label.confirmpassword":"Confirm password","label.title":"Title","label.description":"Description","label.date":"Date","label.duedate":"Due Date","label.birthdate":"Birth Date","label.noaccess":"No Access","label.readaccess":"Read Only",
      "label.readwriteaccess":"Read / Write","label.readwritedownloadaccess":"Read / Write / Download","label.creationdate":"Creation Date","label.startdate":"Start Date","label.enddate":"End Date","label.note":"Notes","error.bad":"The value entered is incorrect","error.empty":"A value must be entered","error.bad.email":"The Email entered is incorrect","error.empty.email":"Email must be entered","error.tooshort":"The value entered is too short","error.different":"The confirm value entered is incorrect",
    "error.conflict":"The value entered is already used","tip.input.year":"Enter the year using a 4-digit numbers","tip.input.month":"Enter the month using a number between 1 and 12","tip.input.day":"Enter the day number","tip.input.hour":"Enter the hour using a number between 0 and 23","tip.input.minute":"Enter the minute using a number between 0 and 59"},icon:{"label.startdate":"fa-calendar","label.enddate":"fa-calendar","label.note":"fa-comment","btn.checkout":"fa-shopping-basket","btn.sync":"fa-sync",
      "btn.yes":"fa-check","btn.no":"fa-times","btn.ok":"fa-check-circle","btn.edit":"fa-pencil","btn.back":"fa-chevron-left","btn.cancel":"fa-times-circle","btn.delete":"fa-trash","btn.close":"fa-times","btn.saveandclose":"fa-check","btn.signin":"fa-sign-in","btn.signout":"fa-sign-out","btn.signup":"fa-user-plus","btn.signforgot":"fa-unlock","goto.signin":"fa-sign-in","goto.signup":"fa-user-plus","goto.signforgot":"fa-unlock","label.username":"fa-user-circle","label.email":"fa-envelope","label.password":"fa-unlock",
      "label.confirmpassword":"fa-lock","label.date":"fa-calendar","label.creationdate":"fa-calendar-star","label.duedate":"fa-calendar-times","label.birthdate":"fa-calendar-star","facebook.connect":"fab fa-facebook-square"}};f().prototype().tr=function(code,texts){code=code||"";code=code.toLowerCase();if(!code&&!texts){var language="it";try{language=f("html").items[0].getAttribute("lang")}catch(err){}this.each(function(container){f(container).find(".f-tr").each(function(item,i){var code=item.getAttribute("code");
          if(!code){code=item.innerText||item.textContent;item.setAttribute("code",code)}var item=f(item);item.html(item.tr(code))});f(container).find(".f-date").each(function(item,i){var code=item.getAttribute("code");if(!code){code=item.innerText||item.textContent;item.setAttribute("code",code)}var item=f(item);var date=new Date(Date.parse(code));var dateString=""+date.toLocaleDateString(language,{weekday:"short",day:"numeric",month:"short",year:"numeric"});dateString+=" "+date.toLocaleTimeString(language,
          {hour12:false,timeStyle:"short"});item.html(dateString)})})}try{if(languages[code]){if(texts)for(key in texts)languages[code][key.toLowerCase()]=texts[key];else f("html").items[0].setAttribute("lang",code);return this}var language="it";try{language=f("html").items[0].getAttribute("lang");if(!language)language="it"}catch(err){}var label=languages[language][code];if(f().fa()!=""){var icon=languages.icon[code];if(icon){if(icon.indexOf(" ")<0)icon=f().fa()+" "+icon;label='\x3ci class\x3d"'+icon+'"\x3e\x3c/i\x3e\x26nbsp;\x26nbsp;'+
(typeof label=="string"?label:code)}}if(!label){var parts=code.split(".");if(parts.length==4){label=this.tr("error."+parts[1]+"."+parts[3]);if(!label)return this.tr("error."+parts[1]);else return label}}return label}catch(err){return code}};var trPlugin=function(resolve,context){f(context.div).tr();resolve(context)};f().uiPlugins().push(trPlugin)})();
(function(){var infoX={};function easeOutCubic(t){return 1-Math.pow(1-t,3)}function scrollXcallback(timestamp){if(infoX.item){if(!infoX.start)infoX.start=timestamp;infoX.progress=easeOutCubic((timestamp-infoX.start)/infoX.duration);if(infoX.progress>=1||infoX.targetX==infoX.value){infoX.item.scrollLeft=infoX.targetX;infoX={}}else{if(infoX.inc===true)infoX.item.scrollLeft=infoX.value+infoX.progress*(infoX.targetX-infoX.value);else infoX.item.scrollLeft=infoX.value-infoX.progress*(infoX.value-infoX.targetX);
        window.requestAnimationFrame(scrollXcallback)}}}f().prototype().scrollX=function(x,duration){{infoX={};infoX.targetX=x;infoX.duration=duration;infoX.item=this.item;infoX.value=this.item.scrollLeft;if(infoX.targetX>infoX.value)infoX.inc=true;else infoX.inc=false;window.requestAnimationFrame(scrollXcallback)}return this};var scrollX={};var plugin=function(resolve,context){f(context.div).find(".f_scrollx").each(function(item){item.addEventListener("mousedown",function(event){var scroll=f(event.target).closest(".f-scrollx");
        scrollX={value:scroll.item.scrollLeft,x0:event.clientX,item:scroll.item,delta:0}});f(item).removeClass("f_scrollx").addClass("f-scrollx")});resolve(context)};f().uiPlugins().push(plugin);function initScrollX(){f("body").item.addEventListener("mousemove",function(event){if(scrollX.item){scrollX.delta=scrollX.item.scrollLeft-(scrollX.value-(event.clientX-scrollX.x0));scrollX.item.scrollLeft=scrollX.value-(event.clientX-scrollX.x0);f(".f-scrollx \x3e div").each(function(item,index){item.style.pointerEvents=
"none"})}});f("body").item.addEventListener("mouseup",function(event){if(scrollX.item&&Math.abs(scrollX.delta)>1)f(scrollX.item).scrollX(scrollX.item.scrollLeft-scrollX.delta*32,1E3);setTimeout(function(){f(".f-scrollx \x3e div").each(function(item,index){item.style.pointerEvents="all"})},0);scrollX={}})}f().uiOnReadyPlugins().push(initScrollX)})();
window.addEventListener('resize', resizeUi, false);
window.addEventListener('scroll', scrollUi, false);
window.addEventListener('load', loadUi, false);
function loadUi() {
  document.body.classList.add('is-ready');
  setTimeout(setupUi, 0);
}

function setupUi() {
  attachEventsListener();
  if(document.body.classList.contains("tag-page")){
    tagLazyStart();
  } else{
    lazyStart();
  }
  idleClock();
  evalEventListener('resize');
  evalEventListener('scroll');
  if ($('#map.local').length > 0) {
    initContactMap();
  }
}

function resizeUi() {
  evalEventListener('resize');
}

function scrollUi(e) {
  evalEventListener('scroll');
  if(document.body.classList.contains("tag-page")){
    setTimeout(function(){
      tagLazyVisibles();
    }, 1000);
  }
}

function setEnv() {
}

function showGallery() {
  $("#tag-index").fadeOut();
}

function showIndex() {
  $("#tag-index").fadeIn();
}

function filterTalents(elem) {
  genderCode = $('header input[name="filter-gender"]:checked').data('code');
  tagCode = $('header input[name="filter-tag"]:checked').data('code');
  if ($(window).width() < 1025) {
    $('#mobile-tag-menu ul:last-child li').removeClass('is-active');
    $(elem).parents('li').addClass('is-active');
    genderCode = $('#mobile-tag-menu input[name="filter-gender"]:checked').data('code');
    tagCode = $('#mobile-tag-menu input[name="filter-tag"]:checked').data('code');
  }
  if ($('#tag-index').is(':visible')) {
    $('#tag-index .index-item').removeClass('selected');
    if (genderCode == "0") {
      $('#tag-index .index-item[data-tags*="' + tagCode + '"]').addClass('selected');
    } else {
      $('#tag-index .index-item[data-gender="' + genderCode + '"][data-tags*="' + tagCode + '"]').addClass('selected');
    }
  } else {
    if ($(elem).hasClass('tag-input')) {
      var tagPermalink = $(elem).data('permalink');
      window.location.href = tagPermalink;
      return;
    }
    if (genderCode == "0") {
      $('#tag-items .item').show();
    } else {
      $('#tag-items .item').hide();
      $('#tag-items .item[data-gender="' + genderCode + '"]').show();
    }
    showTalentsInTagPage();
  }
}

function showTalentPreview(elem) {
  $('#talent-preview').hide();
  $('#talent-preview').css('top', 0);
  $('#talent-preview').css('left', 0);
  elemOffset = $(elem).offset();
  $('#talent-preview').css('top', elemOffset.top - 100);
  $('#talent-preview').css('left', elemOffset.left - 20);
  $('#talent-preview').css('background-image', 'url(' + $(elem).data('thumbnail') + ')');
  $('#talent-preview').show();
}

function goToChar0(elem, firstChar) {
  if (!$('#tag-index').is(':visible')) {
    // grid case
    $('html, body').animate({
      scrollTop: $("#tag-items .item[data-char0='" + firstChar + "']").first().offset().top
    }, 2000);
  } else{
    // index case
    $('html, body').animate({
      scrollTop: ($("#tag-index .index-item[data-char0='" + firstChar + "']").first().offset().top - 80)
    }, 2000);
  }
  $('.alphabet-wrap .letter').removeClass('active');
  $(elem).addClass('active');
}

function toggleGrid(elem) {
  $('video').trigger('pause');
  if ($('#talent-grid').is(':visible')) {
    showBooks();
  } else {
    showGrid();
  }
}

function showGrid() {
  $('#talent-books').hide();
  $('.arrow-left').hide();
  $('.arrow-right').hide();
  $('.current-slide').hide();
  $('.total-slide').hide();
  $('#talent-grid').show();
  $('.section-center ul li').removeClass('is-active');
  $('.section-center ul li').first().addClass('is-active');
}

function showBooks() {
  $('#talent-grid').hide();
  $('#talent-books').show();
  $('.arrow-left').show();
  $('.arrow-right').show();
  $('.current-slide').show();
  $('.total-slide').show();
  showGallery('portfolio');
}

function toggleDownloadView(bookName) {
  if ($('#download-view').is(':visible')) {
    $('#download-view').hide();
  } else {
    $('#download-view-content li').removeClass('is-active');
    swiperBookName = $('.swiper:visible').data('book');
    if (swiperBookName != undefined) {
      bookName = swiperBookName;
    }
    $('#download-view-content li[data-book="' + bookName + '"]').addClass('is-active');
    $('#download-view').show();
  }
}

function changeDownloadBook(elem) {
  $('#download-view-content li').removeClass('is-active');
  $(elem).parent().addClass('is-active');
}

function changeDownloadQuality(elem) {
  $(elem).addClass('is-active');
  $(elem).siblings().removeClass('is-active');
}

function downloadBook(elem) {
  city = $(elem).data('city');
  talent = $(elem).data('talent');
  book = $('#download-view-content li.is-active').first().data('book');
  quality = $('.toggle.is-active').first().data('quality');
  url = '/' + city + '/book-' + book + '/' + talent + '.pdf?quality=' + quality + "&book=" + book;
  var win = window.open(url, '_blank');
  if (win) {
    //Browser has allowed it to be opened
    win.focus();
  } else {
    //Browser has blocked it
    alert('Please allow popups for this website');
  }
}

function toggleCitiesMenu() {
  $('#cities-menu').fadeToggle();
}

function toggleBio() {
  if ($(window).width() < 1025) {
    if ($('#bio').is(':visible')) {
      $('.bio-button').html('Bio <span class="plus-svg"></span>');
    } else {
      $('.bio-button').html('Bio <span class="minus-svg"></span>');
    }
    $('#bio').fadeToggle();
  } else {
    // desktop
    if ($('#bio-desktop').is(':visible')) {
      $('.bio-button-desktop').html('Bio <span class="plus-svg-black"></span>');
    } else {
      $('.bio-button-desktop').html('Bio <span class="minus-svg-black"></span>');
    }
    $('#bio-desktop').fadeToggle();
  }
}

function toggleMobileTalentMenu() {
  $('#mobile-talent-menu').toggleClass('open');
}

function toggleMobileTagMenu() {
  $('#mobile-tag-menu').toggleClass('open');
}

function changeTagBackground(code) {
  $('.image-tag-background').hide();
  if ($(window).width() < $(window).height()) {
    $('.image-tag-background.mobile-background[data-tagcode="' + code + '"]').show();
  } else {
    $('.image-tag-background.desktop-background[data-tagcode="' + code + '"]').show();
  }
}

function changeTagBackgroundOnMobile(code) {
  if ($(window).width() < $(window).height()) {
    $('.image-tag-background').hide();
    $('.image-tag-background.mobile-background[data-tagcode="' + code + '"]').show();
  }
}

function toggleMobileGrid(book) {
  var container = $('#' + book + '-mobile-gallery');
  if (container.find('.mobile-book').is(':visible')) {
    showMobileGrid(container);
  } else {
    showMobileBook(container);
  }
}

function showMobileBook(container) {
  container.find('.mobile-grid').hide();
  container.find('.mobile-book').fadeIn();
}

function showMobileGrid(container) {
  container.find('.mobile-book').hide();
  container.find('.mobile-grid').fadeIn();
}

function toggleMobileMenu() {
  $('#mobile-menu').fadeToggle();
}

function waitOn() {
  document.getElementById('page').classList.add('spinner-on');
  console.log("waitOn");
}

function waitOff() {
  document.getElementById('page').classList.remove('spinner-on');
  console.log("waitOff");
}

function initContactMap() {
  mapLat = $("#map").attr("data-lat");
  mapLng = $("#map").attr("data-lng");
  initContactMapByParams(mapLat, mapLng);
}

function initContactMapByParams(mapLat, mapLng){
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(mapLat, mapLng),
    styles:
    [
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
      {
        "saturation": 36
      },
      {
        "color": "#333333"
      },
      {
        "lightness": 40
      }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#ffffff"
      },
      {
        "lightness": 16
      }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
      {
        "color": "#fefefe"
      },
      {
        "lightness": 20
      }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
      {
        "color": "#fefefe"
      },
      {
        "lightness": 17
      },
      {
        "weight": 1.2
      }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.icon",
      "stylers": [
      {
        "color": "#bd081c"
      }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#f5f5f5"
      },
      {
        "lightness": 20
      }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#f5f5f5"
      },
      {
        "lightness": 21
      }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#dedede"
      },
      {
        "lightness": 21
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 17
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 29
      },
      {
        "weight": 0.2
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 18
      }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 16
      }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#f2f2f2"
      },
      {
        "lightness": 19
      }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#e9e9e9"
      },
      {
        "lightness": 17
      }
      ]
    }
    ],
    mapTypeControl: false,
    overviewMapControl: false,
    panControl: false,
    scaleControl: false,
    streetViewControl: false,
    scrollwheel: false,
    draggable: false,
    disableDoubleClickZoom: true,
    zoomControl: false,
  };
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
}

function toggleTermsText(){
  $('#terms-text').fadeToggle();
}

function isVisibleInViewport(el) {
  var customOffset = 750;
  var rect = el.getBoundingClientRect();
  return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (customOffset + (window.innerHeight || document.documentElement.clientHeight)) &&
  rect.right <= (customOffset + (window.innerWidth || document.documentElement.clientWidth))
  );
}

function tagLazyStart(){
  // console.log("tagLazyStart - start");
  var placeholder = '/ui/images/placeholder.jpg';
  var image = new Image();
  image.onload = function(){
    document.querySelectorAll('[data-lazy-src]').forEach(function(element){
      element.src = placeholder;
    });
  };
  image.src = placeholder;
  // console.log("tagLazyStart - end");
}

function tagLazyVisibles(){
  // console.log("tagLazyVisibles - start");
  document.querySelectorAll('[data-lazy-src]').forEach(function(element){
    // console.log(element);
    if(isVisibleInViewport(element)){
      var src = element.getAttribute('data-lazy-src');
      element.removeAttribute('data-lazy-src');
      element.addEventListener('load', tagLazyLoad, false);
      element.addEventListener('error', tagLazyError, false);
      element.src = src;
    }
  });
  // console.log("tagLazyVisibles - end");
}

function tagLazyLoad(){
  tagLazyVisibles();
}

function tagLazyError(){
  tagLazyVisibles();
}

function lazyStart(){
  var placeholder = '/ui/images/placeholder.jpg';
  var image = new Image();
  image.onload = function(){
    document.querySelectorAll('[data-lazy-src]').forEach(function(element){
      if(element instanceof HTMLVideoElement){
      }else if(element instanceof HTMLImageElement){
        element.src = placeholder;
      }else if(element instanceof HTMLDivElement){
        element.style.backgroundImage = 'url('+placeholder+')';
      }
    });
    setTimeout(lazyNext,0);
  };
  image.src = placeholder;
}

function lazyNext(){
  var element = document.querySelector('[data-lazy-src]');
  if(element){
    var src = element.getAttribute('data-lazy-src');
    element.removeAttribute('data-lazy-src');
    if(element instanceof HTMLVideoElement){
      element.addEventListener('loadeddata', lazyLoad, false);
      element.addEventListener('error', lazyError, false);
      element.src = src;
    }else if(element instanceof HTMLImageElement){
      element.addEventListener('load', lazyLoad, false);
      element.addEventListener('error', lazyError, false);
      element.src = src;
    }else if(element instanceof HTMLDivElement){
      var image = new Image();
      image.addEventListener('load', function(){
        element.style.backgroundImage = 'url('+src+')';
        lazyNext();
      }, false);
      image.addEventListener('error', lazyError, false);
      image.src = src;
    }
  }
}

function lazyLoad(){
  lazyNext();
}

function lazyError(){
  lazyNext();
}

function request(json){
  var params = (json.params || {});
  var headers = (json.headers || {});
  var formData = new FormData();
  var urlSearch = '?t='+new Date().getTime();
  Object.keys(params).forEach(function(key){
    formData.append(key,params[key]);
    urlSearch += '&'+key+'='+params[key];
  });
  var xhr = new XMLHttpRequest();
  xhr.onload = function(response){
    var jsonResponse = {};
    try{
      jsonResponse = JSON.parse(response.target.responseText);
    }catch(e){
    }
    if(typeof(json.callback) == 'function'){
      json.callback(jsonResponse);
    }
  };
  var method = (json.method || 'GET').toUpperCase();
  if(method == 'GET'){
    xhr.open(method, json.url+urlSearch);
  }else{
    xhr.open(method, json.url);
  }
  Object.keys(headers).forEach(function(key){
    xhr.setRequestHeader(key, heaaders[key]);
  });
  xhr.send(formData);
}

function findParent(element, className){
  if(element.classList.contains(className)){
    return element;
  }else if(element.parentElement){
    return findParent(element.parentElement, className);
  }
  return element;
}

var idleClockTimeout = 0;
function idleClock(){
  document.querySelectorAll('[data-clock]').forEach(function(element){
    var formatter = new Intl.DateTimeFormat([], {timeZone: element.getAttribute('data-timezone'), hour: 'numeric', minute: 'numeric'});
    element.innerHTML = formatter.format(new Date());
  });
  clearTimeout(idleClockTimeout);
  idleClockTimeout = setTimeout(idleClock,1000);
}

function attachEventsListener(){
  document.querySelectorAll('[data-action]').forEach(function(element){
    var actions = element.getAttribute('data-action');
    var name = element.getAttribute('data-name');
    actions.split(',').forEach(function(action){
      var func = eventsListener[action][name];
      if(action == 'click'){
        element.removeEventListener('click', func);
        element.addEventListener('click', func);
      }else if(action == 'hover'){
        element.removeEventListener('mouseover', func);
        element.removeEventListener('mouseout', func);
        element.addEventListener('mouseover',func);
        element.addEventListener('mouseout', func);
      }else if(action == 'keyup'){
        element.removeEventListener('keyup', func);
        element.addEventListener('keyup',func);
      }
    });
  });
}

function evalEventListener(what){
  Object.keys(eventsListener[what]).forEach(function(key){
    var func = eventsListener[what][key];
    func();
  });
}

var eventsListener = {
  click:{},
  hover:{},
  scroll:{},
  resize:{},
  keyup: {}
};function setForceFocus(element){

  var tmp = document.createElement('input')
  tmp.setAttribute('type', 'text')
  tmp.style.position = 'absolute'
  tmp.style.opacity = 0;
  tmp.style.height = 0;
  tmp.style.fontSize = '12px';
  document.body.prepend(tmp);
  tmp.focus()
  setTimeout(function(){
    element.focus();
    tmp.remove();
  },100);
}

eventsListener.click.openSearch = function(){
  document.body.classList.add('open-search');
  setTimeout(function(){
    setForceFocus(document.querySelector('.section-search input'));
  },500);
};

eventsListener.click.closeSearch = function(){
  document.body.classList.remove('open-search');
  document.querySelector('.section-search input').blur();
};

var doSearchTimeout = 0;
eventsListener.keyup.doSearch = function(event){
  clearTimeout(doSearchTimeout);
  doSearchTimeout = setTimeout(function(){
    var templateName = $('#section-search').data('template');
    var target = event.target;
    request({
      url:'/search.json',
      params: {results: 100, query:target.value.toLowerCase(), templateName: templateName, exc:'login,dob,id,registered'},
      callback: function(response){
        console.log(response);
        // var target = event.target;
        // var response = target.responseText || '';
        // var json = JSON.parse(response);
        $('#search-results .items').html(renderSectionTalents(response.items));
        // setupUi();
      }
    })
  },350)
};

function renderSectionTalents(talents){
  result = '';
  if(talents != undefined && talents.length > 0){
    for(i=0; i<talents.length; i++){
      console.log(talents);
      if(talents[i].tagPermalink != undefined){
        city = talents[i].city.toLowerCase();
        city = city.replace(/\s/g, '');
        if(city == "newyork"){
          url = talents[i].externalWebsite + '/' + 'search' + '/' + talents[i].permalink + '.web?fromSearch=1';
        } else{
          url = '/' + city + '/' + talents[i].tagPermalink + '/' + talents[i].permalink + '.web?fromSearch=1';
        }
        result += '<div class="item">';
        if(city == "newyork"){
          result += '<a href="' + url + '" target="_blank">';
        } else{
          result += '<a href="' + url + '">';
        }
        result += '<div class="title is-size-3" style="text-transform: capitalize">' + talents[i].fullname +'</div>';
        result += '<div class="subtitle is-size-6"  style="text-transform: capitalize">' + talents[i].city + '</div>';
        result += '</div>';
        result += '</a>';
        result += '</div>';
      }
    }
  } else{
    result = '<div id="search-not-found">Sorry, no talents found.</div>';
  }
  return result;
}eventsListener.hover.selectCategory = function(event){

  var target = findParent(event.target, 'a-category');
  var ul = target.closest('ul');
  if(event.type == 'mouseover'){
    ul.querySelectorAll('a').forEach(function(a){
      a.classList.add('is-opacity');
    });
    target.classList.remove('is-opacity');
  }else{
    ul.querySelectorAll('a').forEach(function(a){
      a.classList.remove('is-opacity');
    });
  }
};

eventsListener.click.menu = function(){
  var navbar =  document.querySelector('.navbar');
  if(navbar){
    if(navbar.classList.contains('is-open')){
      navbar.classList.remove('is-open');
    }else{
      navbar.classList.add('is-open');
    }
  }
}

eventsListener.scroll.header = function(){
  var scrollY = window.scrollY;
  var header = document.querySelector('.header');
  if(header){
    resizeHeader(scrollY, header);
    hideOnScroll(scrollY, header);
  }
};

function resizeHeader(scrollY, header){
  var container = header.querySelector('.container');
  var desiredHeight = (window.innerWidth > 768 ? 80 : 80);
  var height = Math.max(desiredHeight, (container.offsetHeight-scrollY));
  var translateY = Math.min(12, scrollY)*-1;
  translateY = translateY ? translateY : 0;
  header.style.height = height+'px';
  // container.style.transform = 'translateY('+translateY+'px)';
}

function hideOnScroll(scrollY, header){
  var opacity = 0;
  var top = 0;
  if(scrollY > 30){ top = Math.min(0, (scrollY-30)*-1); }
  if(scrollY > 60){ opacity = Math.min(1, (scrollY-60)*0.01); }
  header.querySelectorAll('.hide-on-scroll').forEach(function(element){
    if(element.hasAttribute('data-scroll-name')){
      showOnScroll(header, element, opacity);
    }
    element.style.transform = 'translateY('+top+'px)';
  });
}

function showOnScroll(header, element, opacity){
  var item = header.querySelector('.show-on-scroll[data-scroll-name="'+element.getAttribute('data-scroll-name')+'"]')
  if(item != null){
    if(opacity){
      item.style.visibility = 'visible';
    }else{
      item.style.visibility = 'hidden';
    }
    item.style.width = element.offsetWidth+'px';
    item.style.left = element.offsetLeft+'px';
    item.style.top = element.offsetTop+'px';
    item.style.opacity = opacity;
  }
}eventsListener.scroll.models = function() {

  showTalentsInTagPage();
};

function showTalentsInTagPage(){
  var scrollY = window.scrollY;
  var alphabet = document.querySelector('.models .alphabet');
  var models = document.querySelectorAll('.models .item');
  var perc = (window.innerHeight * 80) / 100;
  var scrollTop = (scrollY + perc);
  if (alphabet) {
    if (scrollTop >= alphabet.offsetTop) {
      if (!alphabet.classList.contains('is-view')) {
        alphabet.classList.add('is-view');
      }
      var header = document.querySelector('header');
      var wrap = alphabet.querySelector('.alphabet-wrap');
      if (wrap) {
        if ((scrollY + header.offsetHeight) >= alphabet.offsetTop) {
          var top = alphabet.offsetTop;
          var left = alphabet.offsetLeft;
          var width = alphabet.offsetWidth;
          var height = alphabet.offsetHeight;
          alphabet.style.height = height + 'px';
          wrap.style.position = 'fixed';
          wrap.style.top = header.offsetHeight + 'px';
          wrap.style.left = left + 'px';
          wrap.style.width = width + 'px';
          wrap.style.bottom = '0px';
          wrap.style.zIndex = '99';
          wrap.classList.add('expand');
          var footer = document.querySelector('footer');
          if (footer) {
            var y = scrollY + window.innerHeight;
            var x = y - footer.offsetTop;
            if (x < 0) { x = 0; }
            wrap.style.bottom = x + 'px';
          }
        } else {
          alphabet.style.height = 'auto';
          wrap.removeAttribute('style');
          wrap.classList.remove('expand');
        }
      }
    }
  }
  if (models.length) {
    setTimeout(function(){
      models.forEach(function(model) {
        if (scrollTop >= model.offsetTop - 2000) {
          if (!model.classList.contains('is-view')) {
            model.classList.add('is-view');
          }
        }
      });
    }, 400);
  }
}function setupInputs() {

  var items = document.querySelectorAll('input,select');
  items.forEach(function(item) {
    if (item.files) {
      var parent = item.parentElement;
      var text = parent.querySelector('span.text');
      if (text) {
        text.innerText = item.getAttribute('data-label') || '';
      } else {
        var span = document.createElement('span');
        span.classList.add('text');
        span.innerText = item.getAttribute('data-label') || '';
        parent.append(span);
      }
    }
    item.removeEventListener('change', inputChange);
    item.addEventListener('change', inputChange);
  });
}

function inputChange() {
  var item = this;
  if (item.files) {
    changeFile(item);
  } else {
    var parent = f(item).closest('.form-group').item;
    if (parent) {
      parent.classList.remove('has-error');
    }
  }
}

function fieldAppendError(field, text) {
  field.classList.add('has-error');
  var div = field.querySelector('div.error');
  if (div) {
    div.innerText = text;
  } else {
    var error = document.createElement('div');
    error.innerText = text;
    error.classList.add('error');
    field.append(error);
  }
}

function changeFile(input) {
  var byte = 1024;
  var allowSizeMax = 5; // MB
  var allowType = ['png', 'jpg', 'jpeg', 'JPG', 'PNG', 'JPEG'];
  var files = input.files;
  var label = input.parentElement.querySelector('span');
  var parent = f(input).closest('.form-group').item;
  parent.classList.remove('has-error');
  label.innerText = input.getAttribute('data-label');
  if (files.length != 0) {
    var file = files[0];
    var filename = file.name;
    var extension = filename.substring(filename.lastIndexOf('.') + 1);
    if (allowType.indexOf(extension) != -1) {
      if (file.size <= ((byte * byte) * allowSizeMax)) {
        label.innerText = filename;
        $(input).parents('.btn').addClass('with-file');
      } else {
        input.value = '';
        fieldAppendError(parent, 'Invalid file size (Allow ' + allowSizeMax + 'MB)');
        $(input).parents('.btn').removeClass('with-file');
      }
    } else {
      input.value = '';
      text = 'Invalid file type<br>(Allow ';
      allowType.forEach(function(type, i) {
        text += type;
        if ((allowType.length - 1) != i) {
          text += ', ';
        }
      });
      text += ')';
      fieldAppendError(parent, text);
      $(input).parents('.btn').removeClass('with-file');
    }
  }
}

function buildFormData(form, onElement) {
  var onElement = onElement || function() { };
  var formData = new FormData();
  var elements = form.elements;
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.name) {
      if (element.type == 'file') {
        if (element.files[0]) {
          formData.set(element.name, element.files[0], element.files[0].name);
        }
        onElement(element);
      } else if (element.type == 'radio') {
        formData.set(element.name, element.form.elements[element.name].value);
        onElement(element);
      } else if (element.type == 'checkbox') {
        formData.set(element.name, element.checked ? 1 : 0);
        element.value = element.value || 'on';
        onElement(element);
      } else if (element.type == 'hidden') {
        formData.set(element.name, element.value);
      } else if (element.type == 'submit') {
      } else {
        formData.set(element.name, element.value);
        onElement(element);
      }
    }
  }
  return formData;
}

function inputRequired(element) {
  var parent = f(element).closest('.form-group').item;
  parent.classList.remove('has-error');
  if (element.hasAttribute('data-required')) {
    if (element.type == 'file') {
      if (!element.files[0]) {
        fieldAppendError(parent, 'Please select a file.');
        return false;
      }
    } else if (element.type == 'radio') {
      if (!element.form.elements[element.name].value) {
        fieldAppendError(parent, 'Please select one of these options.');
        return false;
      }
    } else if (element.type == 'checkbox') {
      if (!element.checked) {
        fieldAppendError(parent, 'Please tick this box if you want to proceed.');
        return false;
      }
    } else if (!element.value) {
      if (element.type == 'select-one') {
        fieldAppendError(parent, 'Please select an item in the list');
        return false;
      } else {
        fieldAppendError(parent, 'Please fill in this field.');
        return false;
      }
    }
  }
  if (element.hasAttribute('data-email')) {
    if (element.type == 'text') {
      if (element.value && !hasEmail(element.value)) {
        fieldAppendError(parent, 'Please include an @ in the email address');
        return false;
      }
    }
  }
  return true;
}

function getAge(date) {
  var ageDifMs = Date.now() - date.getTime();
  var ageDate = new Date(ageDifMs);
  return ageDate.getUTCFullYear() - 1970;
}

function hasEmail(value) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

function checkModelAge(value, datepicker_instance) {
  alert(value);
  return;
  var date = $.datepicker.parseDate("yy-mm-dd", value);
  alert(date);
  $('#birthdate').val(date);
  var age = getAge(date);
  var parentFields = document.getElementById('parent-fields');
  var parentMandatory = (age < 18);
  if (parentMandatory) {
    parentFields.classList.add('on');
  } else {
    parentFields.classList.remove('on');
  }
  parentFields.querySelectorAll('input').forEach(function(element) {
    if (parentMandatory) {
      element.setAttribute('data-required', true);
    } else {
      element.removeAttribute('data-required');
    }
  });
}

function submitApplication(form) {
  waitOn();
  console.log('submitApplication - start');
  $('#generic-errors').hide();
  try {
    var send = true;
    console.log('submitApplication - buildFormData - start');
    var formData = buildFormData(form, function(element) {
      if (!inputRequired(element)) send = false;
    });
    console.log('submitApplication - buildFormData - end');
    console.log('submitApplication - send: ' + send);
    if (send) {
      console.log('submitApplication - requestWithHeaders - start');
      requestWithHeaders('become-model.json', 'POST', { clientCaptcha: getCookie('serverCaptcha') }, formData, function(event) {
        try {
          var target = event.target;
          var response = JSON.parse(target.responseText || '{}');
          if (response.code == 200) {
            submitApplicationSuccess();
          } else if (response.errors) {
            submitApplicationErrors(response.errors);
          }
          console.log('submitApplication - requestWithHeaders - end');
          waitOff();
          console.log('submitApplication - end');
        } catch (e) {
          console.error(e);
          submitApplicationErrors(['Exception: ' + e]);
        }
      });
    } else {
      $('#generic-errors').show();
      waitOff();
      console.log('submitApplication - end');
    }
  } catch (e) {
    console.error(e);
    waitOff();
    console.log('submitApplication - end');
  }
  return false;
}

function submitApplicationSuccess() {
  // preNavigateTo({ href: window.location.href, title: 'Waiting...', headers: { becomeModel: true } }, false, true);
  $('#submit-application-form').hide();
  $('#submit-application-success').fadeIn();
}

function submitApplicationErrors(errors) {
  var errors = (errors || [])
  var html = '';
  if (errors.length) {
    errors.forEach(function(error) {
      if (error.indexOf('Exception:') != -1) {
        html += '<div>' + error + '</div>';
      } else {
        html += '<div>' + getLookup('error.' + error) + '</div>';
      }
    });
  }
  document.getElementById('become-model-errors').innerHTML = html;
}

function submitApplicationBack() {
  preNavigateTo({ href: window.location.href, title: document.title }, true, true);
}

function preNavigateTo(conf, animationBack, noHistory, callback) {
  if (typeof (conf) != 'string' && conf && conf.title) {
    showCategoryName(conf.title, animationBack, function(hideCallback) {
      navigateTo(conf, animationBack, noHistory, function() {
        hideCallback();
        if (typeof (callback) == 'function') {
          callback();
        }
      });
    });
  } else {
    navigateTo(conf, animationBack, noHistory, callback);
  }
}

function becomeModelRequest(url, method, data, callback) {
  requestWithHeaders(url, method, null, data, callback);
}

function requestWithHeaders(url, method, headers, data, callback) {
  var headers = headers || {};
  var req = new XMLHttpRequest();
  req.onload = function(event) {
    if (typeof (callback) == 'function') {
      callback(event);
    }
  }
  req.open(method, url);
  Object.keys(headers).forEach(function(key) {
    req.setRequestHeader(key, headers[key]);
  });
  req.send(data);
}

function changeCountry(name) {
  if (name == 'United States') {
    $('#usa-states').fadeIn();
    $('#usa-states select').attr('data-required', true);
  } else {
    $('#usa-states').fadeOut();
    $('#usa-states select').removeAttr('data-required');
  }
}

function toggleTermsConditions(mode) {
  if (mode) {
    $('#terms-conditions').slideDown();
  } else {
    $('#terms-conditions').slideUp();
  }
}

function getLookup(code, lang) {
  try {
    var lang = lang || document.documentElement.lang;
    console.log(lang);
    console.log(code);
    return lookups[lang][code] || code;
  } catch (e) {
    return code;
  }
}

function getCookie(c_name) {
  try {
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + "=");
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1;
        c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1) {
          c_end = document.cookie.length;
        }
        return unescape(document.cookie.substring(c_start, c_end));
      }
    }
  } catch (e) {
  }
  return "";
}

function updateGenderSelect(elem){
  selected = $(elem).val();
  // amsterdam
  if(selected == 5){
    $('#gender-male-option').hide();
  } else{
    $('#gender-male-option').show();
  }
  setTimeout(function(){
    $("#gender").val($("#gender option:first").val());
  }, 100);
}var lookups = {

  'en':{
    'label.network':'Network',
    'label.language':'Language',
    'label.boardList':'Board list',
    'label.importantNoticeHtml':'Important notice (html)',
    'label.male':'Male',
    'label.female':'Female',
    'label.nonBinary':'Non binary',
    'label.firstName':'Name',
    'label.lastName':'Surname',
    'label.email':'Email',
    'label.phone':'Phone',
    'label.instagram':'Instagram',
    'label.birthDate':'Birth of date',
    'label.address':'Address',
    'label.city':'City',
    'label.country':'Country',
    'label.state':'State',
    'label.zipCode':'Zip Code',
    'label.height':'Height',
    'label.waist':'Waist',
    'label.bust':'Bust/Chest',
    'label.hips':'Hips',
    'label.shoeSize':'Shoe Size',
    'label.dress':'Dress',
    'label.hairColor':'Hair Color',
    'label.eyeColor':'Eye Color',
    'label.agency':'Agency (if modelling already)',
    'label.parentDescription':'Parent or guardian details for minors',
    'label.parentName':'Name and Surname',
    'label.parentEmail':'Email',
    'label.parentPhone':'Phone',
    'label.imageSizeEach':'Photo (up to 5MB each)',
    'label.imageGuide':'Guide for images',
    'label.imageGuide.1':'Please submit a full-length, waist-up, close-up, and profile',
    'label.imageGuide.2':'Do not wear makeup',
    'label.imageGuide.3':'Take images in front facing natural dayligth',
    'label.imageGuide.4':'Clean and simple images are best!',
    'btn.uploadPhoto':'Upload Photo',
    'btn.submitApplication':'Submit Application',
    'btn.submitApplicationBack':'Back',
    'label.submitApplicationSuccess':'Thanks, the application will be reviewed as soon as possible.',
    'label.parent.ko': 'Ops, something went wrong',
    'label.parent.ok': 'Application sent correctly',
    'checkbox.terms1':'I have read and I accept',
    'checkbox.terms2':'Terms & Conditions.',
    'checkbox.newsletter':'I understand and agree that, upon my acceptance (that is not compulsory) you will also send me information by email and/or SMS about existing and new services and special offers.',
    'checkbox.thirdparty':'I understand and agree that upon my acceptance (that is not compulsory) you will be entitled to transfer my data to third parties with whom you have a contractual relationship (partners, sponsors, etc.) so that I may receive special offers or other information from them.',
    'error.parentName':'Parent name and surname is mandatory',
    'error.parentPhone':'Parent phone is mandatory',
    'error.parentEmail':'Parent email is mandatory',
    'error.domainId':'Domain error',
    'error.email':'Invalid email',
    'error.emailduplicate':'Email address already exists',
    'error.filesize1':'Photo 1: size up to 5MB',
    'error.filesize2':'Photo 2: size up to 5MB',
    'error.filesize3':'Photo 3: size up to 5MB',
  },
  'it':{
    'label.male':'Maschio',
    'label.female':'Femmina',
    'label.firstName':'Nome',
    'label.lastName':'Cognome',
    'label.email':'Email',
    'label.phone':'Telefono',
    'label.instagram':'Instagram',
    'label.birthDate':'Data di nascita',
    'label.address':'Indirizzo',
    'label.city':'Città',
    'label.country':'Paese',
    'label.state':'Stato',
    'label.zipCode':'Cap',
    'label.height':'Altezza',
    'label.waist':'Vita',
    'label.bust':'Busto',
    'label.hips':'Fianchi',
    'label.shoeSize':'Misura scarpa',
    'label.dress':'Taglia',
    'label.hairColor':'Colore capelli',
    'label.eyeColor':'Colore occhi',
    'label.parentDescription':'Dati del genitore o del tutore per i minori',
    'label.parentName':'Nome e Cognome',
    'label.parentEmail':'Telefono',
    'label.parentPhone':'Email',
    'label.imageSizeEach':'Foto (max. 5MB per ognuna)',
    'btn.uploadPhoto':'Carica Foto',
    'btn.submitApplication':'Invia',
    'btn.submitApplicationBack':'Back',
    'checkbox.terms':'Ho letto e accetto le Informazioni per i candidati',
    'checkbox.newsletter':'Comprendo che con la mia accettazione (non obbligatoria) potrete inviarmi anche informazioni via e-mail e/o SMS sui servizi esistenti e nuovi e sulle offerte speciali.',
    'checkbox.thirdparty':' Comprendo che con la mia accettazione (non obbligatoria) avrete il diritto di trasferire i miei dati a terzi con i quali avete un rapporto contrattuale (partner, sponsor ...) in modo che io possa ricevere offerte speciali o altre informazioni da loro.',
    'label.submitApplicationSuccess':'Thanks, the application will be reviewed as soon as possible.',
    'label.parent.ko': 'Ops, something went wrong',
    'label.parent.ok': 'Thanks, the application will be reviewed as soon as possible.'
  },
  'es':{
    'label.submitApplicationSuccess':'Thanks, the application will be reviewed as soon as possible.',
    'label.parent.ko': 'Ops, something went wrong',
    'label.parent.ok': 'Thanks, the application will be reviewed as soon as possible.'
  },
  'fr':{
    'label.submitApplicationSuccess':'Thanks, the application will be reviewed as soon as possible.',
    'label.parent.ko': 'Ops, something went wrong',
    'label.parent.ok': 'Thanks, the application will be reviewed as soon as possible.'
  },
  'nl':{
    'label.submitApplicationSuccess':'Thanks, the application will be reviewed as soon as possible.',
    'label.parent.ko': 'Ops, something went wrong',
    'label.parent.ok': 'Thanks, the application will be reviewed as soon as possible.'
  },
  'dk':{
    'label.submitApplicationSuccess':'Thanks, the application will be reviewed as soon as possible.',
    'label.parent.ko': 'Ops, something went wrong',
    'label.parent.ok': 'Thanks, the application will be reviewed as soon as possible.'
  },
  'sk':{
    'label.submitApplicationSuccess':'Thanks, the application will be reviewed as soon as possible.',
    'label.parent.ko': 'Ops, something went wrong',
    'label.parent.ok': 'Thanks, the application will be reviewed as soon as possible.'
  },
  'cz':{
    'label.submitApplicationSuccess':'Thanks, the application will be reviewed as soon as possible.',
    'label.parent.ko': 'Ops, something went wrong',
    'label.parent.ok': 'Thanks, the application will be reviewed as soon as possible.'
  }
};

var heightLookups = [
"150 cm - 4'11''",
"151 cm - 4'11'' 1/2",
"152 cm - 4'12''",
"153 cm - 5'",
"154 cm - 5' 1/2",
"155 cm - 5'1''",
"156 cm - 5'1'' 1/2",
"157 cm - 5'2''",
"158 cm - 5'2''",
"159 cm - 5'2'' 1/2",
"160 cm - 5'3''",
"161 cm - 5'3'' 1/2",
"162 cm - 5'4''",
"163 cm - 5'4''",
"164 cm - 5'4'' 1/2",
"165 cm - 5'5''",
"166 cm - 5'5'' 1/2",
"167 cm - 5'5'' 1/2",
"168 cm - 5'6''",
"169 cm - 5'6'' 1/2",
"170 cm - 5'7''",
"171 cm - 5'7'' 1/2",
"172 cm - 5'7'' 1/2",
"173 cm - 5'8''",
"174 cm - 5'8'' 1/2",
"175 cm - 5'9''",
"176 cm - 5'9'' 1/2",
"177 cm - 5'9'' 1/2",
"178 cm - 5'10''",
"179 cm - 5'10'' 1/2",
"180 cm - 5'11''",
"181 cm - 5'11'' 1/2",
"182 cm - 5'11'' 1/2",
"183 cm - 6'",
"184 cm - 6' 1/2",
"185 cm - 6'1''",
"186 cm - 6'1''",
"187 cm - 6'1'' 1/2",
"188 cm - 6'2''",
"189 cm - 6'2'' 1/2",
"190 cm - 6'3''",
"191 cm - 6'3''",
"192 cm - 6'3'' 1/2",
"193 cm - 6'4''",
"194 cm - 6'4'' 1/2",
"195 cm - 6'5''",
"196 cm - 6'5''",
"197 cm - 6'5'' 1/2",
"198 cm - 6'6''",
"199 cm - 6'6'' 1/2",
"200 cm - 6'6'' 1/2",
];
var googleMapStyles = [
{
  "elementType": "geometry",
  "stylers": [
  {
    "color": "#f5f5f5"
  }
  ]
},

{
  "elementType": "labels.icon",
  "stylers": [
  {
    "visibility": "off"
  }
  ]
},

{
  "elementType": "labels.text.fill",
  "stylers": [
  {
    "color": "#616161"
  }
  ]
},

{
  "elementType": "labels.text.stroke",
  "stylers": [
  {
    "color": "#f5f5f5"
  }
  ]
},

{
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [
  {
    "color": "#bdbdbd"
  }
  ]
},

{
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [
  {
    "color": "#eeeeee"
  }
  ]
},

{
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [
  {
    "color": "#757575"
  }
  ]
},

{
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [
  {
    "color": "#e5e5e5"
  }
  ]
},

{
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [
  {
    "color": "#9e9e9e"
  }
  ]
},

{
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [
  {
    "color": "#ffffff"
  }
  ]
},

{
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [
  {
    "color": "#757575"
  }
  ]
},

{
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [
  {
    "color": "#dadada"
  }
  ]
},

{
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [
  {
    "color": "#616161"
  }
  ]
},

{
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [
  {
    "color": "#9e9e9e"
  }
  ]
},

{
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [
  {
    "color": "#e5e5e5"
  }
  ]
},

{
  "featureType": "transit.station",
  "elementType": "geometry",
  "stylers": [
  {
    "color": "#eeeeee"
  }
  ]
},

{
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [
  {
    "color": "#c9c9c9"
  }
  ]
},

{
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [
  {
    "color": "#9e9e9e"
  }
  ]
}

];var countries = {"items": [
  {
    "code": "AF",
    "name": "Afghanistan"
  },
  {
    "code": "AL",
    "name": "Albania"
  },
  {
    "code": "DZ",
    "name": "Algeria"
  },
  {
    "code": "AS",
    "name": "American Samoa"
  },
  {
    "code": "AD",
    "name": "Andorra"
  },
  {
    "code": "AO",
    "name": "Angola"
  },
  {
    "code": "AI",
    "name": "Anguilla"
  },
  {
    "code": "AG",
    "name": "Antigua and Barbuda"
  },
  {
    "code": "AR",
    "name": "Argentina"
  },
  {
    "code": "AM",
    "name": "Armenia"
  },
  {
    "code": "AW",
    "name": "Aruba"
  },
  {
    "code": "AU",
    "name": "Australia"
  },
  {
    "code": "AT",
    "name": "Austria"
  },
  {
    "code": "AZ",
    "name": "Azerbaijan"
  },
  {
    "code": "BS",
    "name": "Bahamas"
  },
  {
    "code": "BH",
    "name": "Bahrain"
  },
  {
    "code": "BD",
    "name": "Bangladesh"
  },
  {
    "code": "BB",
    "name": "Barbados"
  },
  {
    "code": "BY",
    "name": "Belarus"
  },
  {
    "code": "BE",
    "name": "Belgium"
  },
  {
    "code": "BZ",
    "name": "Belize"
  },
  {
    "code": "BJ",
    "name": "Benin"
  },
  {
    "code": "BM",
    "name": "Bermuda"
  },
  {
    "code": "BT",
    "name": "Bhutan"
  },
  {
    "code": "BO",
    "name": "Bolivia"
  },
  {
    "code": "BA",
    "name": "Bosnia"
  },
  {
    "code": "BW",
    "name": "Botswana"
  },
  {
    "code": "BR",
    "name": "Brazil"
  },
  {
    "code": "IO",
    "name": "British Indian Ocean Territory"
  },
  {
    "code": "BN",
    "name": "Brunei Darussalam"
  },
  {
    "code": "BG",
    "name": "Bulgaria"
  },
  {
    "code": "BF",
    "name": "Burkina Faso"
  },
  {
    "code": "BI",
    "name": "Burundi"
  },
  {
    "code": "KH",
    "name": "Cambodia"
  },
  {
    "code": "CM",
    "name": "Cameroon"
  },
  {
    "code": "CA",
    "name": "Canada"
  },
  {
    "code": "CV",
    "name": "Cape Verde"
  },
  {
    "code": "KY",
    "name": "Cayman Islands"
  },
  {
    "code": "CF",
    "name": "Central African"
  },
  {
    "code": "TD",
    "name": "Chad"
  },
  {
    "code": "CL",
    "name": "Chile"
  },
  {
    "code": "CN",
    "name": "China"
  },
  {
    "code": "CX",
    "name": "Christmas Island"
  },
  {
    "code": "CC",
    "name": "Cocos (Keeling) Islands"
  },
  {
    "code": "CO",
    "name": "Colombia"
  },
  {
    "code": "KM",
    "name": "Comoros"
  },
  {
    "code": "CG",
    "name": "Congo"
  },
  {
    "code": "CD",
    "name": "Congo-K."
  },
  {
    "code": "CK",
    "name": "Cook Islands"
  },
  {
    "code": "CR",
    "name": "Costa Rica"
  },
  {
    "code": "HR",
    "name": "Croatia"
  },
  {
    "code": "CU",
    "name": "Cuba"
  },
  {
    "code": "CY",
    "name": "Cyprus"
  },
  {
    "code": "CZ",
    "name": "Czech R."
  },
  {
    "code": "CI",
    "name": "Côte D'Ivoire"
  },
  {
    "code": "DK",
    "name": "Denmark"
  },
  {
    "code": "DJ",
    "name": "Djibouti"
  },
  {
    "code": "DM",
    "name": "Dominica"
  },
  {
    "code": "DO",
    "name": "Dominican"
  },
  {
    "code": "EC",
    "name": "Ecuador"
  },
  {
    "code": "EG",
    "name": "Egypt"
  },
  {
    "code": "SV",
    "name": "El Salvador"
  },
  {
    "code": "GQ",
    "name": "Equatorial"
  },
  {
    "code": "ER",
    "name": "Eritrea"
  },
  {
    "code": "EE",
    "name": "Estonia"
  },
  {
    "code": "ET",
    "name": "Ethiopia"
  },
  {
    "code": "FK",
    "name": "Falkland Islands  (Malvinas)"
  },
  {
    "code": "FO",
    "name": "Faroe Islands"
  },
  {
    "code": "FJ",
    "name": "Fiji"
  },
  {
    "code": "FI",
    "name": "Finland"
  },
  {
    "code": "FR",
    "name": "France"
  },
  {
    "code": "GF",
    "name": "French Guiana"
  },
  {
    "code": "PF",
    "name": "French Polynesia"
  },
  {
    "code": "GA",
    "name": "Gabon"
  },
  {
    "code": "GM",
    "name": "Gambia"
  },
  {
    "code": "GE",
    "name": "Georgia"
  },
  {
    "code": "DE",
    "name": "Germany"
  },
  {
    "code": "GH",
    "name": "Ghana"
  },
  {
    "code": "GI",
    "name": "Gibraltar"
  },
  {
    "code": "GR",
    "name": "Greece"
  },
  {
    "code": "GL",
    "name": "Greenland"
  },
  {
    "code": "GD",
    "name": "Grenada"
  },
  {
    "code": "GP",
    "name": "Guadeloupe"
  },
  {
    "code": "GU",
    "name": "Guam"
  },
  {
    "code": "GT",
    "name": "Guatemala"
  },
  {
    "code": "GG",
    "name": "Guernsey"
  },
  {
    "code": "GN",
    "name": "Guinea"
  },
  {
    "code": "GW",
    "name": "Guinea-Bissau"
  },
  {
    "code": "GY",
    "name": "Guyana"
  },
  {
    "code": "HT",
    "name": "Haiti"
  },
  {
    "code": "VA",
    "name": "Holy See (Vatican City State)"
  },
  {
    "code": "HN",
    "name": "Honduras"
  },
  {
    "code": "HK",
    "name": "Hong Kong"
  },
  {
    "code": "HU",
    "name": "Hungary"
  },
  {
    "code": "IS",
    "name": "Iceland"
  },
  {
    "code": "IN",
    "name": "India"
  },
  {
    "code": "ID",
    "name": "Indonesia"
  },
  {
    "code": "IR",
    "name": "Iran"
  },
  {
    "code": "IQ",
    "name": "Iraq"
  },
  {
    "code": "IE",
    "name": "Ireland"
  },
  {
    "code": "IM",
    "name": "Isle of Man"
  },
  {
    "code": "IL",
    "name": "Israel"
  },
  {
    "code": "IT",
    "name": "Italy"
  },
  {
    "code": "JM",
    "name": "Jamaica"
  },
  {
    "code": "JP",
    "name": "Japan"
  },
  {
    "code": "JE",
    "name": "Jersey"
  },
  {
    "code": "JO",
    "name": "Jordan"
  },
  {
    "code": "KZ",
    "name": "Kazakhstan"
  },
  {
    "code": "KE",
    "name": "Kenya"
  },
  {
    "code": "KI",
    "name": "Kiribati"
  },
  {
    "code": "KW",
    "name": "Kuwait"
  },
  {
    "code": "KG",
    "name": "Kyrgyzstan"
  },
  {
    "code": "LA",
    "name": "Laos"
  },
  {
    "code": "LV",
    "name": "Latvia"
  },
  {
    "code": "LB",
    "name": "Lebanon"
  },
  {
    "code": "LS",
    "name": "Lesotho"
  },
  {
    "code": "LR",
    "name": "Liberia"
  },
  {
    "code": "LY",
    "name": "Libya"
  },
  {
    "code": "LI",
    "name": "Liechtenstein"
  },
  {
    "code": "LT",
    "name": "Lithuania"
  },
  {
    "code": "LU",
    "name": "Luxembourg"
  },
  {
    "code": "MO",
    "name": "Macao"
  },
  {
    "code": "MK",
    "name": "Macedonia"
  },
  {
    "code": "MG",
    "name": "Madagascar"
  },
  {
    "code": "MW",
    "name": "Malawi"
  },
  {
    "code": "MY",
    "name": "Malaysia"
  },
  {
    "code": "MV",
    "name": "Maldives"
  },
  {
    "code": "ML",
    "name": "Mali"
  },
  {
    "code": "MT",
    "name": "Malta"
  },
  {
    "code": "MH",
    "name": "Marshall Islands"
  },
  {
    "code": "MQ",
    "name": "Martinique"
  },
  {
    "code": "MR",
    "name": "Mauritania"
  },
  {
    "code": "MU",
    "name": "Mauritius"
  },
  {
    "code": "YT",
    "name": "Mayotte"
  },
  {
    "code": "MX",
    "name": "Mexico"
  },
  {
    "code": "FM",
    "name": "Micronesia, Federated States Of"
  },
  {
    "code": "MD",
    "name": "Moldova"
  },
  {
    "code": "MC",
    "name": "Monaco"
  },
  {
    "code": "MN",
    "name": "Mongolia"
  },
  {
    "code": "ME",
    "name": "Montenegro"
  },
  {
    "code": "MS",
    "name": "Montserrat"
  },
  {
    "code": "MA",
    "name": "Morocco"
  },
  {
    "code": "MZ",
    "name": "Mozambique"
  },
  {
    "code": "MM",
    "name": "Myanmar"
  },
  {
    "code": "NA",
    "name": "Namibia"
  },
  {
    "code": "NR",
    "name": "Nauru"
  },
  {
    "code": "NP",
    "name": "Nepal"
  },
  {
    "code": "NL",
    "name": "Netherlands"
  },
  {
    "code": "NC",
    "name": "New Caledonia"
  },
  {
    "code": "NZ",
    "name": "New Zealand"
  },
  {
    "code": "NI",
    "name": "Nicaragua"
  },
  {
    "code": "NE",
    "name": "Niger"
  },
  {
    "code": "NG",
    "name": "Nigeria"
  },
  {
    "code": "NU",
    "name": "Niue"
  },
  {
    "code": "NF",
    "name": "Norfolk Island"
  },
  {
    "code": "KP",
    "name": "North Korea"
  },
  {
    "code": "MP",
    "name": "Northern Mariana Islands"
  },
  {
    "code": "NO",
    "name": "Norway"
  },
  {
    "code": "OM",
    "name": "Oman"
  },
  {
    "code": "PK",
    "name": "Pakistan"
  },
  {
    "code": "PW",
    "name": "Palau"
  },
  {
    "code": "PS",
    "name": "Palestinian Territory, Occupied"
  },
  {
    "code": "PA",
    "name": "Panama"
  },
  {
    "code": "PG",
    "name": "Papua New Guinea"
  },
  {
    "code": "PY",
    "name": "Paraguay"
  },
  {
    "code": "PE",
    "name": "Peru"
  },
  {
    "code": "PH",
    "name": "Philippines"
  },
  {
    "code": "PN",
    "name": "Pitcairn"
  },
  {
    "code": "PL",
    "name": "Poland"
  },
  {
    "code": "PT",
    "name": "Portugal"
  },
  {
    "code": "PR",
    "name": "Puerto Rico"
  },
  {
    "code": "QA",
    "name": "Qatar"
  },
  {
    "code": "RO",
    "name": "Romania"
  },
  {
    "code": "RU",
    "name": "Russian"
  },
  {
    "code": "RW",
    "name": "Rwanda"
  },
  {
    "code": "RE",
    "name": "Réunion"
  },
  {
    "code": "BL",
    "name": "Saint Barthélemy"
  },
  {
    "code": "SH",
    "name": "Saint Helena, Ascension and Tristan Da Cunha"
  },
  {
    "code": "KN",
    "name": "Saint Kitts And Nevis"
  },
  {
    "code": "LC",
    "name": "Saint Lucia"
  },
  {
    "code": "MF",
    "name": "Saint Martin (French Part)"
  },
  {
    "code": "PM",
    "name": "Saint Pierre And Miquelon"
  },
  {
    "code": "VC",
    "name": "Saint Vincent And The Grenadines"
  },
  {
    "code": "WS",
    "name": "Samoa"
  },
  {
    "code": "SM",
    "name": "San Marino"
  },
  {
    "code": "ST",
    "name": "Sao Tome and Principe"
  },
  {
    "code": "SA",
    "name": "Saudi Arabia"
  },
  {
    "code": "SN",
    "name": "Senegal"
  },
  {
    "code": "RS",
    "name": "Serbia"
  },
  {
    "code": "SC",
    "name": "Seychelles"
  },
  {
    "code": "SL",
    "name": "Sierra Leone"
  },
  {
    "code": "SG",
    "name": "Singapore"
  },
  {
    "code": "SK",
    "name": "Slovakia"
  },
  {
    "code": "SI",
    "name": "Slovenia"
  },
  {
    "code": "SB",
    "name": "Solomon Islands"
  },
  {
    "code": "SO",
    "name": "Somalia"
  },
  {
    "code": "ZA",
    "name": "South Africa"
  },
  {
    "code": "KR",
    "name": "South Korea"
  },
  {
    "code": "ES",
    "name": "Spain"
  },
  {
    "code": "LK",
    "name": "Sri Lanka"
  },
  {
    "code": "SD",
    "name": "Sudan"
  },
  {
    "code": "SR",
    "name": "Suriname"
  },
  {
    "code": "SJ",
    "name": "Svalbard And Jan Mayen"
  },
  {
    "code": "SZ",
    "name": "Swaziland"
  },
  {
    "code": "SE",
    "name": "Sweden"
  },
  {
    "code": "CH",
    "name": "Switzerland"
  },
  {
    "code": "SY",
    "name": "Syrian Arab"
  },
  {
    "code": "TW",
    "name": "Taiwan, Province Of China"
  },
  {
    "code": "TJ",
    "name": "Tajikistan"
  },
  {
    "code": "TZ",
    "name": "Tanzania"
  },
  {
    "code": "TH",
    "name": "Thailand"
  },
  {
    "code": "TL",
    "name": "Timor-Leste"
  },
  {
    "code": "TG",
    "name": "Togo"
  },
  {
    "code": "TK",
    "name": "Tokelau"
  },
  {
    "code": "TO",
    "name": "Tonga"
  },
  {
    "code": "TT",
    "name": "Trinidad and Tobago"
  },
  {
    "code": "TN",
    "name": "Tunisia"
  },
  {
    "code": "TR",
    "name": "Turkey"
  },
  {
    "code": "TM",
    "name": "Turkmenistan"
  },
  {
    "code": "TC",
    "name": "Turks and Caicos Islands"
  },
  {
    "code": "TV",
    "name": "Tuvalu"
  },
  {
    "code": "UG",
    "name": "Uganda"
  },
  {
    "code": "UA",
    "name": "Ukraine"
  },
  {
    "code": "AE",
    "name": "United Arab Emirates"
  },
  {
    "code": "GB",
    "name": "United Kingdom"
  },
  {
    "code": "US",
    "name": "United States"
  },
  {
    "code": "UM",
    "name": "United States Minor Outlying Islands"
  },
  {
    "code": "UY",
    "name": "Uruguay"
  },
  {
    "code": "UZ",
    "name": "Uzbekistan"
  },
  {
    "code": "VU",
    "name": "Vanuatu"
  },
  {
    "code": "VE",
    "name": "Venezuela"
  },
  {
    "code": "VN",
    "name": "Viet Nam"
  },
  {
    "code": "VG",
    "name": "Virgin Islands, British"
  },
  {
    "code": "VI",
    "name": "Virgin Islands, U.S."
  },
  {
    "code": "WF",
    "name": "Wallis and Futuna"
  },
  {
    "code": "EH",
    "name": "Western Sahara"
  },
  {
    "code": "YE",
    "name": "Yemen"
  },
  {
    "code": "ZM",
    "name": "Zambia"
  },
  {
    "code": "ZW",
    "name": "Zimbabwe"
  },
  {
    "code": "AX",
    "name": "Åland Islands"
  }
]};
var states = {"items": [
  {
    "code": "US-AL",
    "name": "Alabama"
  },
  {
    "code": "US-AK",
    "name": "Alaska"
  },
  {
    "code": "US-AZ",
    "name": "Arizona"
  },
  {
    "code": "US-AR",
    "name": "Arkansas"
  },
  {
    "code": "US-CA",
    "name": "California"
  },
  {
    "code": "US-CO",
    "name": "Colorado"
  },
  {
    "code": "US-CT",
    "name": "Connecticut"
  },
  {
    "code": "US-DE",
    "name": "Delaware"
  },
  {
    "code": "US-DC",
    "name": "District of Columbia"
  },
  {
    "code": "US-FL",
    "name": "Florida"
  },
  {
    "code": "US-GA",
    "name": "Georgia"
  },
  {
    "code": "US-HI",
    "name": "Hawaii"
  },
  {
    "code": "US-ID",
    "name": "Idaho"
  },
  {
    "code": "US-IL",
    "name": "Illinois"
  },
  {
    "code": "US-IN",
    "name": "Indiana"
  },
  {
    "code": "US-IA",
    "name": "Iowa"
  },
  {
    "code": "US-KS",
    "name": "Kansas"
  },
  {
    "code": "US-KY",
    "name": "Kentucky"
  },
  {
    "code": "US-LA",
    "name": "Louisiana"
  },
  {
    "code": "US-ME",
    "name": "Maine"
  },
  {
    "code": "US-MD",
    "name": "Maryland"
  },
  {
    "code": "US-MA",
    "name": "Massachusetts"
  },
  {
    "code": "US-MI",
    "name": "Michigan"
  },
  {
    "code": "US-MN",
    "name": "Minnesota"
  },
  {
    "code": "US-MS",
    "name": "Mississippi"
  },
  {
    "code": "US-MO",
    "name": "Missouri"
  },
  {
    "code": "US-MT",
    "name": "Montana"
  },
  {
    "code": "US-NE",
    "name": "Nebraska"
  },
  {
    "code": "US-NV",
    "name": "Nevada"
  },
  {
    "code": "US-NH",
    "name": "New Hampshire"
  },
  {
    "code": "US-NJ",
    "name": "New Jersey"
  },
  {
    "code": "US-NM",
    "name": "New Mexico"
  },
  {
    "code": "US-NY",
    "name": "New York"
  },
  {
    "code": "US-NC",
    "name": "North Carolina"
  },
  {
    "code": "US-ND",
    "name": "North Dakota"
  },
  {
    "code": "US-OH",
    "name": "Ohio"
  },
  {
    "code": "US-OK",
    "name": "Oklahoma"
  },
  {
    "code": "US-OR",
    "name": "Oregon"
  },
  {
    "code": "US-PA",
    "name": "Pennsylvania"
  },
  {
    "code": "US-RI",
    "name": "Rhode Island"
  },
  {
    "code": "US-SC",
    "name": "South Carolina"
  },
  {
    "code": "US-SD",
    "name": "South Dakota"
  },
  {
    "code": "US-TN",
    "name": "Tennessee"
  },
  {
    "code": "US-TX",
    "name": "Texas"
  },
  {
    "code": "US-UT",
    "name": "Utah"
  },
  {
    "code": "US-VT",
    "name": "Vermont"
  },
  {
    "code": "US-VA",
    "name": "Virginia"
  },
  {
    "code": "US-WA",
    "name": "Washington"
  },
  {
    "code": "US-WV",
    "name": "West Virginia"
  },
  {
    "code": "US-WI",
    "name": "Wisconsin"
  },
  {
    "code": "US-WY",
    "name": "Wyoming"
  }
]};