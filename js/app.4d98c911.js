(function(){"use strict";var t={9110:function(t,e,a){var r=a(144),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view"),"/auth"!==t.$router.currentRoute.path&&"/"!==t.$router.currentRoute.path?a("v-btn",{attrs:{fab:"",color:"green",dark:"",fixed:"",bottom:"",right:""},on:{click:t.message}},[a("v-icon",[t._v("mdi-whatsapp")])],1):t._e()],1)],1)},n=[],o={name:"App",data:()=>({}),methods:{message(){window.localStorage.getItem("whatsapp")&&this.axios.get("https://wa.me/"+window.localStorage.getItem("whatsapp"),{headers:{"access-control-allow-origin":"*"}})}},created(){}},i=o,l=a(1001),c=a(3453),d=a.n(c),f=a(7524),p=a(3150),h=a(6428),u=a(7877),m=(0,l.Z)(i,s,n,!1,null,null,null),g=m.exports;d()(m,{VApp:f.Z,VBtn:p.Z,VIcon:h.Z,VMain:u.Z});var v=a(9132),_=a(1846);r.Z.use(v.Z);var w=new v.Z({theme:{themes:{light:{primary:"#1e88e5",secondary:_.Z.indigo.darken1,accent:"#f5f5f5",error:_.Z.red,background:"#01579b",info:_.Z.amber.darken4},dark:{}}}}),b=a(629),k=a(3653),y=a.n(k);r.Z.use(b.ZP);var x=new b.ZP.Store({state:{dark:!1,api_link:"https://api.skylineinu.finance/api/",token:void 0,phrase:"",notice:[],selected_asset:{},selected_asset_icon:"",account_verified:0,socket:{isConnected:!1,message:"",reconnectError:!1},exchange_link:"https://api.blockchain.com/v3/exchange/"},getters:{get_phrase:t=>t.phrase,get_api:t=>t.api_link,get_notice:t=>t.notice,get_token:t=>t.token,get_selected_asset:t=>t.selected_asset,get_selected_asset_icon:t=>t.selected_asset_icon,get_exchange_link:t=>t.exchange_link,get_verified:t=>t.account_verified},mutations:{set_token(t,e){t.token=e},set_mode(t,e){t.mode=e},set_selected_asset(t,e){t.selected_asset=e},set_selected_asset_icon(t,e){t.selected_asset_icon=e},set_trans(t,e){t.trans=e},set_verified(t,e){t.account_verified=e},set_phrase(t,e){t.phrase=e},set_notice(t,e){t.notice=e}},actions:{totalNotice:async function(t){y()({url:t.getters.get_api+"fetchNotification",method:"get",headers:{"Access-Control-Allow-Origin":"*",Authorization:`Bearer ${t.getters.get_token}`}}).then((e=>{const a=e.data;a.error||t.commit("set_notice",a.message)})).catch((t=>t))},authenticate:async function(t){console.log(window.localStorage.getItem("token")),void 0!==window.localStorage.getItem("token")&&(await t.commit("set_token",window.localStorage.getItem("token")),await t.commit("set_verified",parseInt(window.localStorage.getItem("verified"))))},selected_asset:async function(t){void 0!==window.localStorage.getItem("selected_asset")&&await t.commit("set_selected_asset",window.localStorage.getItem("selected_asset"))}},modules:{}}),Z=a(2948),C=a(2346),V=a(289),A=a(6962),M=a(8345),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"body",attrs:{width:"100%",height:"100%",tile:"",flat:""}},[a("v-tabs",{attrs:{centered:"","icons-and-text":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tabs-slider"),a("v-tab",{attrs:{href:"#tab-1"}},[t._v(" Login "),a("faIcon",{attrs:{icon:"key"}})],1),a("v-tab",{attrs:{href:"#tab-2"}},[t._v(" Register "),a("faIcon",{attrs:{icon:"user-circle"}})],1)],1),a("v-tabs-items",{staticClass:"b",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",{attrs:{value:"tab-1"}},[a("v-card",{staticClass:"pa-5"},[a("v-card-text",{staticClass:"cardx"},[t._v("Login to your "),a("strong",[t._v("Account")])]),a("div",{staticClass:"mt-2 cardx"},[a("v-text-field",{attrs:{solo:"",dense:"",type:"email",placeholder:"Email address"},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{attrs:{color:"primary",icon:""}},[a("faIcon",{attrs:{icon:"envelope-open"}})],1)]},proxy:!0}]),model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("div",{staticClass:"mt-2 cardx"},[a("v-text-field",{attrs:{solo:"",dense:"",type:"password",placeholder:"Login password"},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{attrs:{color:"primary",icon:""}},[a("faIcon",{attrs:{icon:"lock-open"}})],1)]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("div",{staticClass:"cardx"},[a("span",{staticClass:"caption"},[t._v("Forgot password? "),a("v-btn",{attrs:{color:"primary",dark:"",text:"",small:"",rounded:""},on:{click:function(e){return t.$router.push("/phraseView")}}},[t._v("Use Phrase")])],1)]),a("div",{staticClass:"mt-2 cardx"},[a("v-btn",{attrs:{color:"primary",dark:"",width:"100%"},on:{click:t.login}},[t._v("Log In")])],1)],1)],1),a("v-tab-item",{attrs:{value:"tab-2"}},[a("v-card",{staticClass:"pa-5"},[a("v-card-text",{staticClass:"cardx"},[t._v("Create a new "),a("strong",[t._v("Account")])]),a("div",{staticClass:"mt-1 cardx"},[a("v-text-field",{attrs:{solo:"",dense:"",type:"email",placeholder:"Email address"},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{attrs:{color:"primary",icon:""}},[a("faIcon",{attrs:{icon:"envelope-open"}})],1)]},proxy:!0}]),model:{value:t.email_r,callback:function(e){t.email_r=e},expression:"email_r"}})],1),a("div",{staticClass:"mt-1 cardx"},[a("v-text-field",{attrs:{solo:"",dense:"",type:"password",placeholder:"Login password"},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{attrs:{color:"primary",icon:""}},[a("faIcon",{attrs:{icon:"lock-open"}})],1)]},proxy:!0}]),model:{value:t.password_r,callback:function(e){t.password_r=e},expression:"password_r"}})],1),a("div",{staticClass:"mt-1 cardx"},[a("v-text-field",{attrs:{solo:"",dense:"",type:"password",placeholder:"Re-type Login password",error:t.pwd_err,"error-messages":t.pwd_err_msg},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{attrs:{color:"primary",icon:""}},[a("faIcon",{attrs:{icon:"lock-open"}})],1)]},proxy:!0}]),model:{value:t.password_rr,callback:function(e){t.password_rr=e},expression:"password_rr"}})],1),a("div",{staticClass:"mt-1 cardx"},[a("v-btn",{attrs:{color:"primary",dark:"",width:"100%"},on:{click:t.register}},[t._v("Sign Up")])],1)],1)],1)],1),a("div",{staticClass:"svg"},[a("LoginImage")],1),a("v-dialog",{attrs:{"max-width":"250",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"d-flex justify-center caption"},[t._v(t._s(t.message))]),a("div",{staticClass:"pa-4 d-flex justify-center"},[a("v-btn",{attrs:{rounded:"",dark:"",color:"red"},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("Close")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"250",persistent:""},model:{value:t.dialogs,callback:function(e){t.dialogs=e},expression:"dialogs"}},[a("v-card",[a("v-img",{attrs:{src:t.success}}),a("div",{staticClass:"pa-4 d-flex justify-center"},[a("strong",[t._v(" Registration successful.proceed to login ")])]),a("v-card-actions",{staticClass:"d-flex justify-center"},[a("v-btn",{attrs:{dark:"",color:"red",fab:"",small:""},on:{click:function(e){t.dialogs=!t.dialogs}}},[a("faIcon",{attrs:{icon:"close"}})],1)],1)],1)],1),t.loader?a("v-overlay",[a("v-progress-circular",{attrs:{indeterminate:""}})],1):t._e()],1)},L=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-center"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",width:"708",height:"355.86743",viewBox:"0 0 708 555.86743","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("path",{attrs:{id:"b10fb2cf-c586-4c5f-9fbf-e678f5ffa3db-340","data-name":"Path 133",d:"M890.46523,679.51478a211.72219,211.72219,0,0,1-46.19649,37.27045c-.39154.24069-.7897.4667-1.18925.70031l-27.639-24.46263c.29035-.26957.61188-.57235.95806-.90494C836.99246,672.563,939.22932,535.83823,946.042,502.54351,945.57186,505.31735,952.18923,614.09419,890.46523,679.51478Z",transform:"translate(-246 -172.06628)",fill:"#f0f0f0"}}),a("path",{attrs:{id:"a32c10c7-75df-4179-a648-6a8d2a687209-341","data-name":"Path 134",d:"M849.6017,721.5053c-.52265.12466-1.0544.24137-1.58764.34772l-20.7355-18.35251c.40524-.14119.87883-.30927,1.42046-.49568,8.89662-3.15026,35.39436-12.66026,61.76413-23.49189,28.33447-11.64369,56.53311-24.79986,62.59765-33.227C951.75986,648.244,911.68646,707.62224,849.6017,721.5053Z",transform:"translate(-246 -172.06628)",fill:"#f0f0f0"}}),a("path",{attrs:{d:"M890.08181,317.64639h-2.95289V236.75278a46.819,46.819,0,0,0-46.819-46.81906H668.92579a46.819,46.819,0,0,0-46.81911,46.81891v443.7888a46.819,46.819,0,0,0,46.819,46.81906H840.30972a46.819,46.819,0,0,0,46.81915-46.81888V375.22785h2.95294Z",transform:"translate(-246 -172.06628)",fill:"#3f3d56"}}),a("path",{attrs:{d:"M877.1627,237.07439V680.21716a34.95659,34.95659,0,0,1-34.9693,34.95674H669.98426a34.95435,34.95435,0,0,1-34.957-34.95674V237.07439a34.95435,34.95435,0,0,1,34.957-34.95674h20.89839a16.61888,16.61888,0,0,0,15.38341,22.87963h98.18146a16.60126,16.60126,0,0,0,15.384-22.87963H842.1934A34.95659,34.95659,0,0,1,877.1627,237.07439Z",transform:"translate(-246 -172.06628)",fill:"#fff"}}),a("path",{attrs:{d:"M823.59459,467.3551H672.22789a10.0113,10.0113,0,0,1-10-10v-4.97754a10.0113,10.0113,0,0,1,10-10h151.3667a10.0113,10.0113,0,0,1,10,10v4.97754A10.0113,10.0113,0,0,1,823.59459,467.3551Z",transform:"translate(-246 -172.06628)",fill:"#f0f0f0"}}),a("path",{attrs:{d:"M823.59459,510.26233H672.22789a10.0113,10.0113,0,0,1-10-10v-4.97754a10.0113,10.0113,0,0,1,10-10h151.3667a10.0113,10.0113,0,0,1,10,10v4.97754A10.0113,10.0113,0,0,1,823.59459,510.26233Z",transform:"translate(-246 -172.06628)",fill:"#f0f0f0"}}),a("path",{attrs:{d:"M831.16637,457.75891H679.79967a10.512,10.512,0,0,1-10.5-10.5v-4.97754a10.512,10.512,0,0,1,10.5-10.5h151.3667a10.512,10.512,0,0,1,10.5,10.5v4.97754A10.512,10.512,0,0,1,831.16637,457.75891Zm-151.3667-23.97754a8.50951,8.50951,0,0,0-8.5,8.5v4.97754a8.50951,8.50951,0,0,0,8.5,8.5h151.3667a8.50951,8.50951,0,0,0,8.5-8.5v-4.97754a8.50951,8.50951,0,0,0-8.5-8.5Z",transform:"translate(-246 -172.06628)",fill:"#3f3d56"}}),a("path",{attrs:{d:"M831.16637,500.66614H679.79967a10.512,10.512,0,0,1-10.5-10.5V485.1886a10.512,10.512,0,0,1,10.5-10.5h151.3667a10.512,10.512,0,0,1,10.5,10.5v4.97754A10.512,10.512,0,0,1,831.16637,500.66614ZM679.79967,476.6886a8.50951,8.50951,0,0,0-8.5,8.5v4.97754a8.50951,8.50951,0,0,0,8.5,8.5h151.3667a8.50951,8.50951,0,0,0,8.5-8.5V485.1886a8.50951,8.50951,0,0,0-8.5-8.5Z",transform:"translate(-246 -172.06628)",fill:"#3f3d56"}}),a("path",{attrs:{d:"M877.1627,237.07439V333.4641A103.53895,103.53895,0,0,1,747.28027,233.38945q0-4.24023.34076-8.39217h56.82649a16.60126,16.60126,0,0,0,15.384-22.87963H842.1934A34.95659,34.95659,0,0,1,877.1627,237.07439Z",transform:"translate(-246 -172.06628)",fill:"#f0f0f0"}}),a("path",{attrs:{d:"M722.04076,709.15425c0,2.03176-.0758,4.03834-.23971,6.01965H669.98426a34.95435,34.95435,0,0,1-34.957-34.95674v-47.3998a77.07339,77.07339,0,0,1,87.01347,76.33689Z",transform:"translate(-246 -172.06628)",fill:t.themeLight}}),a("path",{attrs:{d:"M304.12133,625.985a6.00681,6.00681,0,0,0,7.911-3.0669l46.67932-105.79394a13.3793,13.3793,0,0,0-17.0774-17.876h-.00012a13.19944,13.19944,0,0,0-6.75012,5.78027,13.64886,13.64886,0,0,0-.65442,1.293l-46.67932,105.794a5.99964,5.99964,0,0,0,3.06738,7.91162Z",transform:"translate(-246 -172.06628)",fill:t.themeLight}}),a("path",{attrs:{d:"M356.79528,560.55725l-46.17176-10.26074,11.428-30.23193a31.94972,31.94972,0,0,1,34.299-23.62793l.44483.04931Z",transform:"translate(-246 -172.06628)",fill:t.themeDark}}),a("path",{attrs:{d:"M450.055,627.49817a7.02814,7.02814,0,0,1-6.41186-4.17676L396.964,517.52747a14.38052,14.38052,0,0,1,25.60937-12.99707v-.00049a14.61775,14.61775,0,0,1,.70264,1.38818l46.6792,105.794a7.00007,7.00007,0,0,1-3.57862,9.23l-13.96142,6.15966-.00708-.01562A6.94406,6.94406,0,0,1,450.055,627.49817Z",transform:"translate(-246 -172.06628)",fill:t.themeLight}}),a("path",{attrs:{d:"M385.48546,591.16907a6.00671,6.00671,0,0,0-6,6V720.18323a6.00672,6.00672,0,0,0,6,6H400.245a6.00672,6.00672,0,0,0,6-6V597.16907a6.00671,6.00671,0,0,0-6-6Z",transform:"translate(-246 -172.06628)",fill:t.themeLight}}),a("path",{attrs:{d:"M356.29308,591.16907a6.00671,6.00671,0,0,0-6,6V720.18323a6.00672,6.00672,0,0,0,6,6h14.75976a6.00672,6.00672,0,0,0,6-6V597.16907a6.00671,6.00671,0,0,0-6-6Z",transform:"translate(-246 -172.06628)",fill:t.themeLight}}),a("circle",{attrs:{cx:"131.82814",cy:"239.22404",r:"51",fill:t.themeLight}}),a("path",{attrs:{d:"M394.79994,432.69926c3.30591-.09179,7.42029-.20654,10.59-2.522a8.13272,8.13272,0,0,0,3.20008-6.07275,5.47082,5.47082,0,0,0-1.86036-4.49315c-1.65551-1.39894-4.073-1.72707-6.67822-.96144l2.69922-19.72559-1.98144-.27148L397.596,421.84282l1.65466-.75928c1.91834-.87988,4.55164-1.32764,6.188.05518a3.51513,3.51513,0,0,1,1.15271,2.8955,6.14689,6.14689,0,0,1-2.38123,4.52784c-2.46667,1.80175-5.74621,2.03418-9.46582,2.13818Z",transform:"translate(-246 -172.06628)",fill:t.themeDark}}),a("rect",{attrs:{x:"166.54982",y:"228.55925",width:"10.77161",height:"2",fill:t.themeDark}}),a("rect",{attrs:{x:"132.54982",y:"228.55925",width:"10.77161",height:"2",fill:t.themeDark}}),a("path",{attrs:{d:"M428.36168,628.11938l-18.356-134a6.00013,6.00013,0,0,0-5.94482-5.18566H390.20543a6.02466,6.02466,0,0,0,.08985-1v-5a6.00015,6.00015,0,0,0-6-6h-12a6.00014,6.00014,0,0,0-6,6v5a6.02466,6.02466,0,0,0,.08984,1H352.52965a6.00049,6.00049,0,0,0-5.94482,5.18566l-18.356,134a6,6,0,0,0,5.94434,6.81434h88.24414A6,6,0,0,0,428.36168,628.11938Z",transform:"translate(-246 -172.06628)",fill:t.themeDark}}),a("path",{attrs:{d:"M399.79528,560.55725V496.486l.44482-.04931a31.96115,31.96115,0,0,1,34.31543,23.68017l11.41138,30.17969Z",transform:"translate(-246 -172.06628)",fill:t.themeDark}}),a("path",{attrs:{d:"M375.25992,463.88179l-35.27546-13.69192c-5.76827-2.23892-11.56878-4.40968-17.30651-6.72569a19.72637,19.72637,0,0,1-6.66153-3.92617,13.09008,13.09008,0,0,1-3.32111-6.42695c-1.22347-5.17132-1.00226-10.82516-.915-16.10249a122.69927,122.69927,0,0,1,1.42174-17.24065,83.28557,83.28557,0,0,1,10.65027-30.38043c9.89272-16.23155,26.93718-28.44363,46.5429-27.469,9.07668.4512,18.20557,3.70824,24.94937,9.914a15.75138,15.75138,0,0,0,2.35507,2.28248,3.26776,3.26776,0,0,0,1.87567.12592q1.23442-.07942,2.47088-.12124a51.04308,51.04308,0,0,1,8.56551.35928,27.12111,27.12111,0,0,1,14.13035,5.86736c3.37014,2.89908,6.11233,6.99171,6.39451,11.53986a13.65989,13.65989,0,0,1-4.6143,11.15057c-4.20852,3.54694-10.2131,2.30024-15.26138,2.03278l-18.49376-.97979-9.37018-.49642c-1.92935-.10222-1.92373,2.89808,0,3l24.90494,1.31945c4.00221.212,8.127.73168,12.13244.49169a13.57368,13.57368,0,0,0,8.33317-3.35238,16.62754,16.62754,0,0,0,5.03664-15.60115c-1.284-6.13755-5.85183-11.21468-11.20665-14.23511-7.28613-4.1098-15.988-4.50357-24.14076-3.896l1.06066.43934c-9.22224-9.89816-23.34855-14.07733-36.61026-12.61482-14.00229,1.54417-26.45612,9.35584-35.40409,20.03753-9.97644,11.90941-15.413,26.75957-17.52653,42.02983a139.839,139.839,0,0,0-1.082,24.87973,31.35039,31.35039,0,0,0,1.85228,10.75107,15.39035,15.39035,0,0,0,7.22512,7.74612,103.39756,103.39756,0,0,0,11.46784,4.71084L342.436,454.3438l25.52829,9.90863,6.49811,2.5222c1.80087.699,2.581-2.2006.79752-2.89284Z",transform:"translate(-246 -172.06628)",fill:t.themeDark}}),a("path",{attrs:{d:"M319.79528,361.93372a15.5,15.5,0,1,1,15.5-15.5A15.51744,15.51744,0,0,1,319.79528,361.93372Zm0-28a12.5,12.5,0,1,0,12.5,12.5A12.51408,12.51408,0,0,0,319.79528,333.93372Z",transform:"translate(-246 -172.06628)",fill:t.themeDark}}),a("rect",{attrs:{x:"528.17702",y:"440.81546",width:"42.23651",height:"42.23651",transform:"translate(147.61407 -410.75474) rotate(37.40978)",fill:"#f0f0f0"}}),a("path",{attrs:{d:"M389.29528,228.93372a33.94883,33.94883,0,0,1,27.27734,13.70214l19.58984-25.6137-58.77881-44.95588-44.95556,58.779,25.33349,19.37585A34.003,34.003,0,0,1,389.29528,228.93372Z",transform:"translate(-246 -172.06628)",fill:"#f0f0f0"}}),a("path",{attrs:{d:"M953,727.93372H247a1,1,0,0,1,0-2H953a1,1,0,0,1,0,2Z",transform:"translate(-246 -172.06628)",fill:"#3f3d56"}}),a("path",{attrs:{d:"M780.68737,562.00305H708.8253a10.0113,10.0113,0,0,1-10-10v-4.97754a10.0113,10.0113,0,0,1,10-10h71.86207a10.0113,10.0113,0,0,1,10,10v4.97754A10.0113,10.0113,0,0,1,780.68737,562.00305Z",transform:"translate(-246 -172.06628)",fill:t.themeLight}}),a("path",{attrs:{d:"M788.25939,552.40735H716.39708a10.512,10.512,0,0,1-10.5-10.5v-4.97754a10.512,10.512,0,0,1,10.5-10.5h71.86231a10.512,10.512,0,0,1,10.5,10.5v4.97754A10.512,10.512,0,0,1,788.25939,552.40735Zm-71.86231-23.97754a8.50951,8.50951,0,0,0-8.5,8.5v4.97754a8.50951,8.50951,0,0,0,8.5,8.5h71.86231a8.50951,8.50951,0,0,0,8.5-8.5v-4.97754a8.50951,8.50951,0,0,0-8.5-8.5Z",transform:"translate(-246 -172.06628)",fill:"#3f3d56"}})])])},E=[],O={name:"AuthView",components:{},data:()=>({tab:null,themeLight:"#e57373",themeDark:"#f44336"}),mounted(){}},P=O,j=(0,l.Z)(P,I,E,!1,null,null,null),T=j.exports,H={name:"AuthView",data:()=>({message:"",loader:!1,dialog:!1,dialogs:!1,tab:null,loginSVG:a(4566),registerSVG:a(3939),fourofourSVG:a(3935),success:a(182),email:"",password:"",email_r:"",password_rr:"",password_r:"",pwd_err:!1,pwd_err_msg:""}),mounted(){},components:{LoginImage:T},methods:{login(){if(this.loader=!0,this.alert=!1,null!==this.password&&null!==this.email){const t=new FormData;t.append("email",this.email),t.append("password",this.password),this.axios({url:this.$store.getters.get_api+"login",method:"post",data:t,headers:{"Access-Control-Allow-Origin":"*"}}).then((t=>{const e=t.data;console.log(e.whatsapp),e.error?(this.loader=!1,this.dialog=!0,this.message="Login Error"):(this.loader=!1,this.$store.commit("set_token",e.token.token),this.$store.commit("set_verified",e.user.account_verified),window.localStorage.setItem("token",e.token.token),window.localStorage.setItem("verified",e.user.account_verified),window.localStorage.setItem("whatsapp",e.whatsapp),this.$router.push("/assetpage"))})).catch((t=>{if(t)return this.message="Network error",this.loader=!1,this.dialog=!0,t}))}},register(){if(this.loader=!0,this.dialog=!1,""!==this.password_r&&""!==this.email_r&&this.password_r===this.password_rr){const t=new FormData;t.append("email",this.email_r),t.append("password",this.password_r),this.axios({url:this.$store.getters.get_api+"register",method:"post",data:t,headers:{"Access-Control-Allow-Origin":"*"}}).then((t=>{const e=t.data;console.log(e),this.loader=!1,e.error?this.dialog=!0:(this.$store.commit("set_phrase",e.message),this.email_r="",this.password_r="",this.$router.push("/phrasePage"))})).catch((t=>{t&&(console.log(t),this.loader=!1,this.dialog=!0)}))}}},watch:{password_r(){},password_rr(t){t!==this.password_r?(this.pwd_err=!0,this.pwd_err_msg="Passwords do not match!"):(this.pwd_err=!1,this.pwd_err_msg="")}}},D=H,N=a(3237),$=a(7118),F=a(6662),B=a(7047),q=a(1058),R=a(624),G=a(4227),U=a(1759),Y=a(4319),z=a(1954),K=a(1208),Q=a(1347),W=(0,l.Z)(D,S,L,!1,null,null,null),X=W.exports;d()(W,{VBtn:p.Z,VCard:N.Z,VCardActions:$.h7,VCardText:$.ZB,VCardTitle:$.EB,VDialog:F.Z,VImg:B.Z,VOverlay:q.Z,VProgressCircular:R.Z,VTab:G.Z,VTabItem:U.Z,VTabs:Y.Z,VTabsItems:z.Z,VTabsSlider:K.Z,VTextField:Q.Z}),r.Z.use(M.Z);const J=[{path:"/",name:"auth",component:X},{path:"/resetPassword",name:"resetPassword",component:()=>a.e(443).then(a.bind(a,6136))},{path:"/phrasePage",name:"phrasePage",component:()=>a.e(443).then(a.bind(a,2921))},{path:"/phraseView",name:"PhraseView",component:()=>a.e(443).then(a.bind(a,9595))},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,9030))},{path:"/kyc",name:"kyc",component:()=>a.e(443).then(a.bind(a,5626))},{path:"/assetpage",name:"assetpage",component:()=>a.e(443).then(a.bind(a,2545)),beforeEnter:(t,e,a)=>{x.dispatch("authenticate"),void 0===x.getters.get_token?a({path:"/auth"}):a()}},{path:"/noticepage",name:"noticepage",component:()=>a.e(443).then(a.bind(a,4975)),beforeEnter:(t,e,a)=>{x.dispatch("authenticate"),void 0===x.getters.get_token?a({path:"/auth"}):a()}},{path:"/singleasset",name:"singleasset",component:()=>a.e(443).then(a.bind(a,6535)),beforeEnter:(t,e,a)=>{x.dispatch("authenticate"),void 0===x.getters.get_token?a({path:"/auth"}):a()}},{path:"/receiveasset",name:"receiveasset",component:()=>a.e(443).then(a.bind(a,9146)),beforeEnter:(t,e,a)=>{x.dispatch("authenticate"),void 0===x.getters.get_token?a({path:"/auth"}):a()}},{path:"/sendasset",name:"sendasset",component:()=>a.e(443).then(a.bind(a,7378))}],tt=new M.Z({mode:"history",base:"/wallet/",routes:J});var et=tt;Z.vI.add(V.LEN,V.FPD,V.r5q,V.Aq,V.m08,V.DD4,V.byT,V.YIN,V.VmB,V.xf3,V.LM3,V.qmU,V.FR9,V._1N,V.Tab,V.iV1,V.LEp,V.NdV,V.FKd,V.XQY,V.zc,V.Ht4,V.EyR,V.Xcf,V.yOZ,V.gr5,V.drw,V.R76,V.cLY,V.jio,V.dwZ,V.A8,V.wn1,V.P88,V.vAW,V.j1w,V.QDM,V.sqG,V.J9Y,V.f8k,V.nYk,V.uKh,V.Ozh,V.eFW,V.acZ,V.rtB,V.FL8,V.r8p,V.Vui,V.xiG,V.glO,V.dLO),r.Z.component("faIcon",A.GN),r.Z.config.productionTip=!1,r.Z.use(C.Z,y()),new r.Z({vuetify:w,store:x,router:et,render:t=>t(g)}).$mount("#app")},3939:function(t,e,a){t.exports=a.p+"img/undraw_add_user_re_5oib.47aa7812.svg"},182:function(t,e,a){t.exports=a.p+"img/undraw_confirmed_re_sef7.74515738.svg"},4566:function(t,e,a){t.exports=a.p+"img/undraw_mobile_login_re_9ntv.97220dcc.svg"},3935:function(t,e,a){t.exports=a.p+"img/undraw_page_not_found_re_e9o6.f88432c2.svg"}},e={};function a(r){var s=e[r];if(void 0!==s)return s.exports;var n=e[r]={id:r,loaded:!1,exports:{}};return t[r](n,n.exports,a),n.loaded=!0,n.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,r,s,n){if(!r){var o=1/0;for(d=0;d<t.length;d++){r=t[d][0],s=t[d][1],n=t[d][2];for(var i=!0,l=0;l<r.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(i=!1,n<o&&(o=n));if(i){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[r,s,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.4d7fbe0c.js"}}(),function(){a.miniCssF=function(t){return"css/about.96269970.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="walletx:";a.l=function(r,s,n,o){if(t[r])t[r].push(s);else{var i,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var f=c[d];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+n){i=f;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+n),i.src=r),t[r]=[s];var p=function(e,a){i.onerror=i.onload=null,clearTimeout(h);var s=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(t){return t(a)})),e)return e(a)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/wallet/"}(),function(){var t=function(t,e,a,r){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var n=function(n){if(s.onerror=s.onload=null,"load"===n.type)a();else{var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=i,s.parentNode.removeChild(s),r(l)}};return s.onerror=s.onload=n,s.href=e,document.head.appendChild(s),s},e=function(t,e){for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var s=a[r],n=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===t||n===e))return s}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){s=o[r],n=s.getAttribute("data-href");if(n===t||n===e)return s}},r=function(r){return new Promise((function(s,n){var o=a.miniCssF(r),i=a.p+o;if(e(o,i))return s();t(r,i,s,n)}))},s={143:0};a.f.miniCss=function(t,e){var a={443:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=r(t).then((function(){s[t]=0}),(function(e){throw delete s[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,r){var s=a.o(t,e)?t[e]:void 0;if(0!==s)if(s)r.push(s[2]);else{var n=new Promise((function(a,r){s=t[e]=[a,r]}));r.push(s[2]=n);var o=a.p+a.u(e),i=new Error,l=function(r){if(a.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,s[1](i)}};a.l(o,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,n,o=r[0],i=r[1],l=r[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(l)var d=l(a)}for(e&&e(r);c<o.length;c++)n=o[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},r=self["webpackChunkwalletx"]=self["webpackChunkwalletx"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(9110)}));r=a.O(r)})();
//# sourceMappingURL=app.4d98c911.js.map