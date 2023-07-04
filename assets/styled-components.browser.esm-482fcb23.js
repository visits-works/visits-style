import{R as he,r as te}from"./index-8db94870.js";import{g as Et}from"./_commonjsHelpers-042e6b4d.js";var mt={exports:{}},I={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M=typeof Symbol=="function"&&Symbol.for,Ve=M?Symbol.for("react.element"):60103,Xe=M?Symbol.for("react.portal"):60106,Ie=M?Symbol.for("react.fragment"):60107,Ee=M?Symbol.for("react.strict_mode"):60108,Te=M?Symbol.for("react.profiler"):60114,$e=M?Symbol.for("react.provider"):60109,_e=M?Symbol.for("react.context"):60110,Ze=M?Symbol.for("react.async_mode"):60111,je=M?Symbol.for("react.concurrent_mode"):60111,Ne=M?Symbol.for("react.forward_ref"):60112,ze=M?Symbol.for("react.suspense"):60113,Tt=M?Symbol.for("react.suspense_list"):60120,De=M?Symbol.for("react.memo"):60115,Me=M?Symbol.for("react.lazy"):60116,$t=M?Symbol.for("react.block"):60121,_t=M?Symbol.for("react.fundamental"):60117,jt=M?Symbol.for("react.responder"):60118,Nt=M?Symbol.for("react.scope"):60119;function W(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case Ve:switch(e=e.type,e){case Ze:case je:case Ie:case Te:case Ee:case ze:return e;default:switch(e=e&&e.$$typeof,e){case _e:case Ne:case Me:case De:case $e:return e;default:return n}}case Xe:return n}}}function gt(e){return W(e)===je}I.AsyncMode=Ze;I.ConcurrentMode=je;I.ContextConsumer=_e;I.ContextProvider=$e;I.Element=Ve;I.ForwardRef=Ne;I.Fragment=Ie;I.Lazy=Me;I.Memo=De;I.Portal=Xe;I.Profiler=Te;I.StrictMode=Ee;I.Suspense=ze;I.isAsyncMode=function(e){return gt(e)||W(e)===Ze};I.isConcurrentMode=gt;I.isContextConsumer=function(e){return W(e)===_e};I.isContextProvider=function(e){return W(e)===$e};I.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ve};I.isForwardRef=function(e){return W(e)===Ne};I.isFragment=function(e){return W(e)===Ie};I.isLazy=function(e){return W(e)===Me};I.isMemo=function(e){return W(e)===De};I.isPortal=function(e){return W(e)===Xe};I.isProfiler=function(e){return W(e)===Te};I.isStrictMode=function(e){return W(e)===Ee};I.isSuspense=function(e){return W(e)===ze};I.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ie||e===je||e===Te||e===Ee||e===ze||e===Tt||typeof e=="object"&&e!==null&&(e.$$typeof===Me||e.$$typeof===De||e.$$typeof===$e||e.$$typeof===_e||e.$$typeof===Ne||e.$$typeof===_t||e.$$typeof===jt||e.$$typeof===Nt||e.$$typeof===$t)};I.typeOf=W;mt.exports=I;var Ke=mt.exports;function zt(e){function n(d,u,f,g,a){for(var x=0,s=0,j=0,P=0,O,y,F=0,Y=0,C,G=C=O=0,R=0,L=0,ve=0,B=0,Ae=f.length,Se=Ae-1,Q,h="",z="",Fe="",Le="",ae;R<Ae;){if(y=f.charCodeAt(R),R===Se&&s+P+j+x!==0&&(s!==0&&(y=s===47?10:47),P=j=x=0,Ae++,Se++),s+P+j+x===0){if(R===Se&&(0<L&&(h=h.replace(E,"")),0<h.trim().length)){switch(y){case 32:case 9:case 59:case 13:case 10:break;default:h+=f.charAt(R)}y=59}switch(y){case 123:for(h=h.trim(),O=h.charCodeAt(0),C=1,B=++R;R<Ae;){switch(y=f.charCodeAt(R)){case 123:C++;break;case 125:C--;break;case 47:switch(y=f.charCodeAt(R+1)){case 42:case 47:e:{for(G=R+1;G<Se;++G)switch(f.charCodeAt(G)){case 47:if(y===42&&f.charCodeAt(G-1)===42&&R+2!==G){R=G+1;break e}break;case 10:if(y===47){R=G+1;break e}}R=G}}break;case 91:y++;case 40:y++;case 34:case 39:for(;R++<Se&&f.charCodeAt(R)!==y;);}if(C===0)break;R++}switch(C=f.substring(B,R),O===0&&(O=(h=h.replace(b,"").trim()).charCodeAt(0)),O){case 64:switch(0<L&&(h=h.replace(E,"")),y=h.charCodeAt(1),y){case 100:case 109:case 115:case 45:L=u;break;default:L=me}if(C=n(u,L,C,y,a+1),B=C.length,0<X&&(L=t(me,h,ve),ae=l(3,C,L,u,Z,U,B,y,a,g),h=L.join(""),ae!==void 0&&(B=(C=ae.trim()).length)===0&&(y=0,C="")),0<B)switch(y){case 115:h=h.replace(re,c);case 100:case 109:case 45:C=h+"{"+C+"}";break;case 107:h=h.replace(A,"$1 $2"),C=h+"{"+C+"}",C=H===1||H===2&&o("@"+C,3)?"@-webkit-"+C+"@"+C:"@"+C;break;default:C=h+C,g===112&&(C=(z+=C,""))}else C="";break;default:C=n(u,t(u,h,ve),C,g,a+1)}Fe+=C,C=ve=L=G=O=0,h="",y=f.charCodeAt(++R);break;case 125:case 59:if(h=(0<L?h.replace(E,""):h).trim(),1<(B=h.length))switch(G===0&&(O=h.charCodeAt(0),O===45||96<O&&123>O)&&(B=(h=h.replace(" ",":")).length),0<X&&(ae=l(1,h,u,d,Z,U,z.length,g,a,g))!==void 0&&(B=(h=ae.trim()).length)===0&&(h="\0\0"),O=h.charCodeAt(0),y=h.charCodeAt(1),O){case 0:break;case 64:if(y===105||y===99){Le+=h+f.charAt(R);break}default:h.charCodeAt(B-1)!==58&&(z+=i(h,O,y,h.charCodeAt(2)))}ve=L=G=O=0,h="",y=f.charCodeAt(++R)}}switch(y){case 13:case 10:s===47?s=0:1+O===0&&g!==107&&0<h.length&&(L=1,h+="\0"),0<X*le&&l(0,h,u,d,Z,U,z.length,g,a,g),U=1,Z++;break;case 59:case 125:if(s+P+j+x===0){U++;break}default:switch(U++,Q=f.charAt(R),y){case 9:case 32:if(P+x+s===0)switch(F){case 44:case 58:case 9:case 32:Q="";break;default:y!==32&&(Q=" ")}break;case 0:Q="\\0";break;case 12:Q="\\f";break;case 11:Q="\\v";break;case 38:P+s+x===0&&(L=ve=1,Q="\f"+Q);break;case 108:if(P+s+x+ee===0&&0<G)switch(R-G){case 2:F===112&&f.charCodeAt(R-3)===58&&(ee=F);case 8:Y===111&&(ee=Y)}break;case 58:P+s+x===0&&(G=R);break;case 44:s+j+P+x===0&&(L=1,Q+="\r");break;case 34:case 39:s===0&&(P=P===y?0:P===0?y:P);break;case 91:P+s+j===0&&x++;break;case 93:P+s+j===0&&x--;break;case 41:P+s+x===0&&j--;break;case 40:if(P+s+x===0){if(O===0)switch(2*F+3*Y){case 533:break;default:O=1}j++}break;case 64:s+j+P+x+G+C===0&&(C=1);break;case 42:case 47:if(!(0<P+x+j))switch(s){case 0:switch(2*y+3*f.charCodeAt(R+1)){case 235:s=47;break;case 220:B=R,s=42}break;case 42:y===47&&F===42&&B+2!==R&&(f.charCodeAt(B+2)===33&&(z+=f.substring(B,R+1)),Q="",s=0)}}s===0&&(h+=Q)}Y=F,F=y,R++}if(B=z.length,0<B){if(L=u,0<X&&(ae=l(2,z,L,d,Z,U,B,g,a,g),ae!==void 0&&(z=ae).length===0))return Le+z+Fe;if(z=L.join(",")+"{"+z+"}",H*ee!==0){switch(H!==2||o(z,2)||(ee=0),ee){case 111:z=z.replace(_,":-moz-$1")+z;break;case 112:z=z.replace(D,"::-webkit-input-$1")+z.replace(D,"::-moz-$1")+z.replace(D,":-ms-input-$1")+z}ee=0}}return Le+z+Fe}function t(d,u,f){var g=u.trim().split(v);u=g;var a=g.length,x=d.length;switch(x){case 0:case 1:var s=0;for(d=x===0?"":d[0]+" ";s<a;++s)u[s]=r(d,u[s],f).trim();break;default:var j=s=0;for(u=[];s<a;++s)for(var P=0;P<x;++P)u[j++]=r(d[P]+" ",g[s],f).trim()}return u}function r(d,u,f){var g=u.charCodeAt(0);switch(33>g&&(g=(u=u.trim()).charCodeAt(0)),g){case 38:return u.replace(T,"$1"+d.trim());case 58:return d.trim()+u.replace(T,"$1"+d.trim());default:if(0<1*f&&0<u.indexOf("\f"))return u.replace(T,(d.charCodeAt(0)===58?"":"$1")+d.trim())}return d+u}function i(d,u,f,g){var a=d+";",x=2*u+3*f+4*g;if(x===944){d=a.indexOf(":",9)+1;var s=a.substring(d,a.length-1).trim();return s=a.substring(0,d).trim()+s+";",H===1||H===2&&o(s,1)?"-webkit-"+s+s:s}if(H===0||H===2&&!o(a,1))return a;switch(x){case 1015:return a.charCodeAt(10)===97?"-webkit-"+a+a:a;case 951:return a.charCodeAt(3)===116?"-webkit-"+a+a:a;case 963:return a.charCodeAt(5)===110?"-webkit-"+a+a:a;case 1009:if(a.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(a.charCodeAt(8)===45)return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(ue,"$1-webkit-$2")+a;break;case 932:if(a.charCodeAt(4)===45)switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(a.charCodeAt(8)!==99)break;return s=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+s+"-webkit-"+a+"-ms-flex-pack"+s+a;case 1005:return w.test(a)?a.replace($,":-webkit-")+a.replace($,":-moz-")+a:a;case 1e3:switch(s=a.substring(13).trim(),u=s.indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(u)){case 226:s=a.replace(N,"tb");break;case 232:s=a.replace(N,"tb-rl");break;case 220:s=a.replace(N,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+s+a;case 1017:if(a.indexOf("sticky",9)===-1)break;case 975:switch(u=(a=d).length-10,s=(a.charCodeAt(u)===33?a.substring(0,u):a).substring(d.indexOf(":",7)+1).trim(),x=s.charCodeAt(0)+(s.charCodeAt(7)|0)){case 203:if(111>s.charCodeAt(8))break;case 115:a=a.replace(s,"-webkit-"+s)+";"+a;break;case 207:case 102:a=a.replace(s,"-webkit-"+(102<x?"inline-":"")+"box")+";"+a.replace(s,"-webkit-"+s)+";"+a.replace(s,"-ms-"+s+"box")+";"+a}return a+";";case 938:if(a.charCodeAt(5)===45)switch(a.charCodeAt(6)){case 105:return s=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+s+"-ms-flex-"+s+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(V,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(V,"")+a}break;case 973:case 989:if(a.charCodeAt(3)!==45||a.charCodeAt(4)===122)break;case 931:case 953:if(ne.test(d)===!0)return(s=d.substring(d.indexOf(":")+1)).charCodeAt(0)===115?i(d.replace("stretch","fill-available"),u,f,g).replace(":fill-available",":stretch"):a.replace(s,"-webkit-"+s)+a.replace(s,"-moz-"+s.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(a.charCodeAt(5)===102?"-ms-"+a:"")+a,f+g===211&&a.charCodeAt(13)===105&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(k,"$1-webkit-$2")+a}return a}function o(d,u){var f=d.indexOf(u===1?":":"{"),g=d.substring(0,u!==3?f:10);return f=d.substring(f+1,d.length-1),ge(u!==2?g:g.replace(q,"$1"),f,u)}function c(d,u){var f=i(u,u.charCodeAt(0),u.charCodeAt(1),u.charCodeAt(2));return f!==u+";"?f.replace(ce," or ($1)").substring(4):"("+u+")"}function l(d,u,f,g,a,x,s,j,P,O){for(var y=0,F=u,Y;y<X;++y)switch(Y=K[y].call(S,d,F,f,g,a,x,s,j,P,O)){case void 0:case!1:case!0:case null:break;default:F=Y}if(F!==u)return F}function m(d){switch(d){case void 0:case null:X=K.length=0;break;default:if(typeof d=="function")K[X++]=d;else if(typeof d=="object")for(var u=0,f=d.length;u<f;++u)m(d[u]);else le=!!d|0}return m}function p(d){return d=d.prefix,d!==void 0&&(ge=null,d?typeof d!="function"?H=1:(H=2,ge=d):H=0),p}function S(d,u){var f=d;if(33>f.charCodeAt(0)&&(f=f.trim()),ye=f,f=[ye],0<X){var g=l(-1,u,f,f,Z,U,0,0,0,0);g!==void 0&&typeof g=="string"&&(u=g)}var a=n(me,f,u,0,0);return 0<X&&(g=l(-2,a,f,f,Z,U,a.length,0,0,0),g!==void 0&&(a=g)),ye="",ee=0,U=Z=1,a}var b=/^\0+/g,E=/[\0\r\f]/g,$=/: */g,w=/zoo|gra/,k=/([,: ])(transform)/g,v=/,\r+?/g,T=/([\t\r\n ])*\f?&/g,A=/@(k\w+)\s*(\S*)\s*/,D=/::(place)/g,_=/:(read-only)/g,N=/[svh]\w+-[tblr]{2}/,re=/\(\s*(.*)\s*\)/g,ce=/([\s\S]*?);/g,V=/-self|flex-/g,q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ne=/stretch|:\s*\w+\-(?:conte|avail)/,ue=/([^-])(image-set\()/,U=1,Z=1,ee=0,H=1,me=[],K=[],X=0,ge=null,le=0,ye="";return S.use=m,S.set=p,e!==void 0&&p(e),S}var Dt={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Mt(e){var n=Object.create(null);return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var Ft=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,nt=Mt(function(e){return Ft.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Qe=Ke,Lt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Bt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Gt={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Je={};Je[Qe.ForwardRef]=Gt;Je[Qe.Memo]=yt;function at(e){return Qe.isMemo(e)?yt:Je[e.$$typeof]||Lt}var Ht=Object.defineProperty,Yt=Object.getOwnPropertyNames,it=Object.getOwnPropertySymbols,Ut=Object.getOwnPropertyDescriptor,Wt=Object.getPrototypeOf,ot=Object.prototype;function vt(e,n,t){if(typeof n!="string"){if(ot){var r=Wt(n);r&&r!==ot&&vt(e,r,t)}var i=Yt(n);it&&(i=i.concat(it(n)));for(var o=at(e),c=at(n),l=0;l<i.length;++l){var m=i[l];if(!Bt[m]&&!(t&&t[m])&&!(c&&c[m])&&!(o&&o[m])){var p=Ut(n,m);try{Ht(e,m,p)}catch{}}}}return e}var Vt=vt;const Xt=Et(Vt);function J(){return(J=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var st=function(e,n){for(var t=[e[0]],r=0,i=n.length;r<i;r+=1)t.push(n[r],e[r+1]);return t},He=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ke.typeOf(e)},Pe=Object.freeze([]),ie=Object.freeze({});function de(e){return typeof e=="function"}function ct(e){return e.displayName||e.name||"Component"}function qe(e){return e&&typeof e.styledComponentId=="string"}var pe=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",et=typeof window<"u"&&"HTMLElement"in window,Zt=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),Kt={};function oe(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):""))}var Qt=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var n=e.prototype;return n.indexOfGroup=function(t){for(var r=0,i=0;i<t;i++)r+=this.groupSizes[i];return r},n.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,c=o;t>=c;)(c<<=1)<0&&oe(16,""+t);this.groupSizes=new Uint32Array(c),this.groupSizes.set(i),this.length=c;for(var l=o;l<c;l++)this.groupSizes[l]=0}for(var m=this.indexOfGroup(t+1),p=0,S=r.length;p<S;p++)this.tag.insertRule(m,r[p])&&(this.groupSizes[t]++,m++)},n.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r;this.groupSizes[t]=0;for(var c=i;c<o;c++)this.tag.deleteRule(i)}},n.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var i=this.groupSizes[t],o=this.indexOfGroup(t),c=o+i,l=o;l<c;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),xe=new Map,Re=new Map,be=1,Ce=function(e){if(xe.has(e))return xe.get(e);for(;Re.has(be);)be++;var n=be++;return xe.set(e,n),Re.set(n,e),n},Jt=function(e){return Re.get(e)},qt=function(e,n){n>=be&&(be=n+1),xe.set(e,n),Re.set(n,e)},er="style["+pe+'][data-styled-version="5.3.10"]',tr=new RegExp("^"+pe+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),rr=function(e,n,t){for(var r,i=t.split(","),o=0,c=i.length;o<c;o++)(r=i[o])&&e.registerName(n,r)},nr=function(e,n){for(var t=(n.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=t.length;i<o;i++){var c=t[i].trim();if(c){var l=c.match(tr);if(l){var m=0|parseInt(l[1],10),p=l[2];m!==0&&(qt(p,m),rr(e,p,l[3]),e.getTag().insertRules(m,r)),r.length=0}else r.push(c)}}},ar=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},St=function(e){var n=document.head,t=e||n,r=document.createElement("style"),i=function(l){for(var m=l.childNodes,p=m.length;p>=0;p--){var S=m[p];if(S&&S.nodeType===1&&S.hasAttribute(pe))return S}}(t),o=i!==void 0?i.nextSibling:null;r.setAttribute(pe,"active"),r.setAttribute("data-styled-version","5.3.10");var c=ar();return c&&r.setAttribute("nonce",c),t.insertBefore(r,o),r},ir=function(){function e(t){var r=this.element=St(t);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,c=0,l=o.length;c<l;c++){var m=o[c];if(m.ownerNode===i)return m}oe(17)}(r),this.length=0}var n=e.prototype;return n.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.getRule=function(t){var r=this.sheet.cssRules[t];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),or=function(){function e(t){var r=this.element=St(t);this.nodes=r.childNodes,this.length=0}var n=e.prototype;return n.insertRule=function(t,r){if(t<=this.length&&t>=0){var i=document.createTextNode(r),o=this.nodes[t];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},n.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),sr=function(){function e(t){this.rules=[],this.length=0}var n=e.prototype;return n.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ut=et,cr={isServer:!et,useCSSOMInjection:!Zt},Oe=function(){function e(t,r,i){t===void 0&&(t=ie),r===void 0&&(r={}),this.options=J({},cr,{},t),this.gs=r,this.names=new Map(i),this.server=!!t.isServer,!this.server&&et&&ut&&(ut=!1,function(o){for(var c=document.querySelectorAll(er),l=0,m=c.length;l<m;l++){var p=c[l];p&&p.getAttribute(pe)!=="active"&&(nr(o,p),p.parentNode&&p.parentNode.removeChild(p))}}(this))}e.registerId=function(t){return Ce(t)};var n=e.prototype;return n.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(J({},this.options,{},t),this.gs,r&&this.names||void 0)},n.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,c=r.target,t=i?new sr(c):o?new ir(c):new or(c),new Qt(t)));var t,r,i,o,c},n.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.registerName=function(t,r){if(Ce(t),this.names.has(t))this.names.get(t).add(r);else{var i=new Set;i.add(r),this.names.set(t,i)}},n.insertRules=function(t,r,i){this.registerName(t,r),this.getTag().insertRules(Ce(t),i)},n.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.clearRules=function(t){this.getTag().clearGroup(Ce(t)),this.clearNames(t)},n.clearTag=function(){this.tag=void 0},n.toString=function(){return function(t){for(var r=t.getTag(),i=r.length,o="",c=0;c<i;c++){var l=Jt(c);if(l!==void 0){var m=t.names.get(l),p=r.getGroup(c);if(m&&p&&m.size){var S=pe+".g"+c+'[id="'+l+'"]',b="";m!==void 0&&m.forEach(function(E){E.length>0&&(b+=E+",")}),o+=""+p+S+'{content:"'+b+`"}/*!sc*/
`}}}return o}(this)},e}(),ur=/(a)(d)/gi,lt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ye(e){var n,t="";for(n=Math.abs(e);n>52;n=n/52|0)t=lt(n%52)+t;return(lt(n%52)+t).replace(ur,"$1-$2")}var fe=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},bt=function(e){return fe(5381,e)};function wt(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(de(t)&&!qe(t))return!1}return!0}var lr=bt("5.3.10"),fr=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&wt(n),this.componentId=t,this.baseHash=fe(lr,t),this.baseStyle=r,Oe.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(n,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var c=se(this.rules,n,t,r).join(""),l=Ye(fe(this.baseHash,c)>>>0);if(!t.hasNameForId(i,l)){var m=r(c,"."+l,void 0,i);t.insertRules(i,l,m)}o.push(l),this.staticRulesId=l}else{for(var p=this.rules.length,S=fe(this.baseHash,r.hash),b="",E=0;E<p;E++){var $=this.rules[E];if(typeof $=="string")b+=$;else if($){var w=se($,n,t,r),k=Array.isArray(w)?w.join(""):w;S=fe(S,k+E),b+=k}}if(b){var v=Ye(S>>>0);if(!t.hasNameForId(i,v)){var T=r(b,"."+v,void 0,i);t.insertRules(i,v,T)}o.push(v)}}return o.join(" ")},e}(),dr=/^\s*\/\/.*$/gm,pr=[":","[",".","#"];function hr(e){var n,t,r,i,o=e===void 0?ie:e,c=o.options,l=c===void 0?ie:c,m=o.plugins,p=m===void 0?Pe:m,S=new zt(l),b=[],E=function(k){function v(T){if(T)try{k(T+"}")}catch{}}return function(T,A,D,_,N,re,ce,V,q,ne){switch(T){case 1:if(q===0&&A.charCodeAt(0)===64)return k(A+";"),"";break;case 2:if(V===0)return A+"/*|*/";break;case 3:switch(V){case 102:case 112:return k(D[0]+A),"";default:return A+(ne===0?"/*|*/":"")}case-2:A.split("/*|*/}").forEach(v)}}}(function(k){b.push(k)}),$=function(k,v,T){return v===0&&pr.indexOf(T[t.length])!==-1||T.match(i)?k:"."+n};function w(k,v,T,A){A===void 0&&(A="&");var D=k.replace(dr,""),_=v&&T?T+" "+v+" { "+D+" }":D;return n=A,t=v,r=new RegExp("\\"+t+"\\b","g"),i=new RegExp("(\\"+t+"\\b){2,}"),S(T||!v?"":v,_)}return S.use([].concat(p,[function(k,v,T){k===2&&T.length&&T[0].lastIndexOf(t)>0&&(T[0]=T[0].replace(r,$))},E,function(k){if(k===-2){var v=b;return b=[],v}}])),w.hash=p.length?p.reduce(function(k,v){return v.name||oe(15),fe(k,v.name)},5381).toString():"",w}var At=he.createContext();At.Consumer;var Ct=he.createContext(),mr=(Ct.Consumer,new Oe),Ue=hr();function kt(){return te.useContext(At)||mr}function xt(){return te.useContext(Ct)||Ue}var Pt=function(){function e(n,t){var r=this;this.inject=function(i,o){o===void 0&&(o=Ue);var c=r.name+o.hash;i.hasNameForId(r.id,c)||i.insertRules(r.id,c,o(r.rules,c,"@keyframes"))},this.toString=function(){return oe(12,String(r.name))},this.name=n,this.id="sc-keyframes-"+n,this.rules=t}return e.prototype.getName=function(n){return n===void 0&&(n=Ue),this.name+n.hash},e}(),gr=/([A-Z])/,yr=/([A-Z])/g,vr=/^ms-/,Sr=function(e){return"-"+e.toLowerCase()};function ft(e){return gr.test(e)?e.replace(yr,Sr).replace(vr,"-ms-"):e}var dt=function(e){return e==null||e===!1||e===""};function se(e,n,t,r){if(Array.isArray(e)){for(var i,o=[],c=0,l=e.length;c<l;c+=1)(i=se(e[c],n,t,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(dt(e))return"";if(qe(e))return"."+e.styledComponentId;if(de(e)){if(typeof(p=e)!="function"||p.prototype&&p.prototype.isReactComponent||!n)return e;var m=e(n);return se(m,n,t,r)}var p;return e instanceof Pt?t?(e.inject(t,r),e.getName(r)):e:He(e)?function S(b,E){var $,w,k=[];for(var v in b)b.hasOwnProperty(v)&&!dt(b[v])&&(Array.isArray(b[v])&&b[v].isCss||de(b[v])?k.push(ft(v)+":",b[v],";"):He(b[v])?k.push.apply(k,S(b[v],v)):k.push(ft(v)+": "+($=v,(w=b[v])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||$ in Dt||$.startsWith("--")?String(w).trim():w+"px")+";"));return E?[E+" {"].concat(k,["}"]):k}(e):e.toString()}var pt=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function tt(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return de(e)||He(e)?pt(se(st(Pe,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:pt(se(st(e,t)))}var Rt=function(e,n,t){return t===void 0&&(t=ie),e.theme!==t.theme&&e.theme||n||t.theme},br=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wr=/(^-|-$)/g;function Be(e){return e.replace(br,"-").replace(wr,"")}var rt=function(e){return Ye(bt(e)>>>0)};function ke(e){return typeof e=="string"&&!0}var We=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ar=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Cr(e,n,t){var r=e[t];We(n)&&We(r)?Ot(r,n):e[t]=n}function Ot(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];for(var i=0,o=t;i<o.length;i++){var c=o[i];if(We(c))for(var l in c)Ar(l)&&Cr(e,c[l],l)}return e}var we=he.createContext();we.Consumer;function Rr(e){var n=te.useContext(we),t=te.useMemo(function(){return function(r,i){if(!r)return oe(14);if(de(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?oe(8):i?J({},i,{},r):r}(e.theme,n)},[e.theme,n]);return e.children?he.createElement(we.Provider,{value:t},e.children):null}var Ge={};function It(e,n,t){var r=qe(e),i=!ke(e),o=n.attrs,c=o===void 0?Pe:o,l=n.componentId,m=l===void 0?function(A,D){var _=typeof A!="string"?"sc":Be(A);Ge[_]=(Ge[_]||0)+1;var N=_+"-"+rt("5.3.10"+_+Ge[_]);return D?D+"-"+N:N}(n.displayName,n.parentComponentId):l,p=n.displayName,S=p===void 0?function(A){return ke(A)?"styled."+A:"Styled("+ct(A)+")"}(e):p,b=n.displayName&&n.componentId?Be(n.displayName)+"-"+n.componentId:n.componentId||m,E=r&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,$=n.shouldForwardProp;r&&e.shouldForwardProp&&($=n.shouldForwardProp?function(A,D,_){return e.shouldForwardProp(A,D,_)&&n.shouldForwardProp(A,D,_)}:e.shouldForwardProp);var w,k=new fr(t,b,r?e.componentStyle:void 0),v=k.isStatic&&c.length===0,T=function(A,D){return function(_,N,re,ce){var V=_.attrs,q=_.componentStyle,ne=_.defaultProps,ue=_.foldedComponentIds,U=_.shouldForwardProp,Z=_.styledComponentId,ee=_.target,H=function(g,a,x){g===void 0&&(g=ie);var s=J({},a,{theme:g}),j={};return x.forEach(function(P){var O,y,F,Y=P;for(O in de(Y)&&(Y=Y(s)),Y)s[O]=j[O]=O==="className"?(y=j[O],F=Y[O],y&&F?y+" "+F:y||F):Y[O]}),[s,j]}(Rt(N,te.useContext(we),ne)||ie,N,V),me=H[0],K=H[1],X=function(g,a,x,s){var j=kt(),P=xt(),O=a?g.generateAndInjectStyles(ie,j,P):g.generateAndInjectStyles(x,j,P);return O}(q,ce,me),ge=re,le=K.$as||N.$as||K.as||N.as||ee,ye=ke(le),d=K!==N?J({},N,{},K):N,u={};for(var f in d)f[0]!=="$"&&f!=="as"&&(f==="forwardedAs"?u.as=d[f]:(U?U(f,nt,le):!ye||nt(f))&&(u[f]=d[f]));return N.style&&K.style!==N.style&&(u.style=J({},N.style,{},K.style)),u.className=Array.prototype.concat(ue,Z,X!==Z?X:null,N.className,K.className).filter(Boolean).join(" "),u.ref=ge,te.createElement(le,u)}(w,A,D,v)};return T.displayName=S,(w=he.forwardRef(T)).attrs=E,w.componentStyle=k,w.displayName=S,w.shouldForwardProp=$,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Pe,w.styledComponentId=b,w.target=r?e.target:e,w.withComponent=function(A){var D=n.componentId,_=function(re,ce){if(re==null)return{};var V,q,ne={},ue=Object.keys(re);for(q=0;q<ue.length;q++)V=ue[q],ce.indexOf(V)>=0||(ne[V]=re[V]);return ne}(n,["componentId"]),N=D&&D+"-"+(ke(A)?A:Be(ct(A)));return It(A,J({},_,{attrs:E,componentId:N}),t)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=r?Ot({},e.defaultProps,A):A}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&Xt(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var ht=function(e){return function n(t,r,i){if(i===void 0&&(i=ie),!Ke.isValidElementType(r))return oe(1,String(r));var o=function(){return t(r,i,tt.apply(void 0,arguments))};return o.withConfig=function(c){return n(t,r,J({},i,{},c))},o.attrs=function(c){return n(t,r,J({},i,{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)}))},o}(It,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ht[e]=ht(e)});var kr=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=wt(t),Oe.registerId(this.componentId+1)}var n=e.prototype;return n.createStyles=function(t,r,i,o){var c=o(se(this.rules,r,i,o).join(""),""),l=this.componentId+t;i.insertRules(l,l,c)},n.removeStyles=function(t,r){r.clearRules(this.componentId+t)},n.renderStyles=function(t,r,i,o){t>2&&Oe.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,r,i,o)},e}();function Or(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=tt.apply(void 0,[e].concat(t)),o="sc-global-"+rt(JSON.stringify(i)),c=new kr(i,o);function l(p){var S=kt(),b=xt(),E=te.useContext(we),$=te.useRef(S.allocateGSInstance(o)).current;return S.server&&m($,p,S,E,b),te.useLayoutEffect(function(){if(!S.server)return m($,p,S,E,b),function(){return c.removeStyles($,S)}},[$,p,S,E,b]),null}function m(p,S,b,E,$){if(c.isStatic)c.renderStyles(p,Kt,b,$);else{var w=J({},S,{theme:Rt(S,E,l.defaultProps)});c.renderStyles(p,w,b,$)}}return he.memo(l)}function Ir(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=tt.apply(void 0,[e].concat(t)).join(""),o=rt(i);return new Pt(o,i)}export{tt as C,Rr as F,ht as H,Ir as U,Or as W};
//# sourceMappingURL=styled-components.browser.esm-482fcb23.js.map