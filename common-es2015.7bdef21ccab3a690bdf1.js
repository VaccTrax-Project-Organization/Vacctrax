(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{UXJL:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var a=n("LRne"),i=n("z6cu"),r=n("JIr8"),s=n("gRi2"),o=n("fXoL"),c=n("tk/3");let p=(()=>{class t extends s.a{constructor(t){super(),this.http=t,this.mockPatient={_id:"",account:null,appointments:[],healthCardNo:"123456-7890"}}getPatient(){return this.http.get(this.url,{headers:this.httpHeader}),Object(a.a)(this.mockPatient)}getPatientAppointments(){return this.http.get(this.url+"/getAllAppointmentsByPatientId/6060df3ac0edd45cd49d2f5a",{headers:this.httpHeader}).pipe(Object(r.a)(t=>Object(i.a)(t)))}}return t.\u0275fac=function(e){return new(e||t)(o.Xb(c.a))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);