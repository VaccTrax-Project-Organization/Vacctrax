(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5t9O":function(t,e,n){"use strict";n.r(e),n.d(e,"HealthPractitionerContainerModule",function(){return w});var i=n("ofXK"),a=n("tyNb"),c=n("Vphj"),o=n("fXoL"),r=n("UDy1");let s=(()=>{class t{constructor(){this.role=c.a}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Hb({type:t,selectors:[["app-health-practitioner-container"]],decls:2,vars:1,consts:[[3,"roleInput"]],template:function(t,e){1&t&&(o.Ob(0,"app-navigation-bar",0),o.Ob(1,"router-outlet")),2&t&&o.nc("roleInput",e.role.HEALTH_PRACTITIONER)},directives:[r.a,a.d],styles:[""]}),t})();var b=n("33Jv"),l=n("KqrR"),d=n("UXJL"),p=n("82lM"),u=n("Wp6s"),h=n("cdYX"),v=n("bKDK");let S=(()=>{class t{constructor(t,e,n){this.appointmentService=t,this.patientService=e,this.vaccineService=n,this.dataSource=[],this.subSink=new b.a,this.role=c.a.HEALTH_PRACTITIONER,this.subSink.add(e.getPatient().subscribe(t=>{this.patient=t})),this.subSink.add(n.getVaccines().subscribe(t=>{console.log(t)})),this.subSink.add(t.getAppointmentsByPatient().subscribe(t=>{console.log(t),this.dataSource=t},t=>{console.log(t)}))}ngOnInit(){}ngOnDestroy(){this.subSink.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(l.a),o.Nb(d.a),o.Nb(p.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-vaccine-history"]],inputs:{role:"role"},decls:21,vars:9,consts:[[1,"container-fluid"],[1,"row"],["id","profile-section",1,"col-auto","mb-2"],["mat-card-avatar","","id","profile-image"],[1,"col-lg"],[3,"roleInput","tableDataSource"]],template:function(t,e){1&t&&(o.Tb(0,"div",0),o.Ob(1,"div"),o.Tb(2,"div",1),o.Tb(3,"div",2),o.Tb(4,"mat-card"),o.Tb(5,"mat-card-header"),o.Ob(6,"div",3),o.Tb(7,"mat-card-title"),o.Dc(8),o.gc(9,"patientfullname"),o.Sb(),o.Tb(10,"mat-card-subtitle"),o.Tb(11,"div"),o.Dc(12),o.Sb(),o.Tb(13,"div"),o.Dc(14),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Tb(15,"div",4),o.Tb(16,"mat-card"),o.Tb(17,"mat-card-content"),o.Tb(18,"h3"),o.Dc(19),o.Sb(),o.Ob(20,"app-appointment",5),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb()),2&t&&(o.Cb(8),o.Gc("",o.hc(9,7,e.patient.account)," - #",null==e.patient.account?null:e.patient.account.accountId,""),o.Cb(4),o.Ec(null==e.patient.account?null:e.patient.account.email),o.Cb(2),o.Ec(e.patient.healthCardNo),o.Cb(5),o.Ec("List of Vaccine Appointments"),o.Cb(1),o.nc("roleInput",e.role)("tableDataSource",e.dataSource))},directives:[u.a,u.d,u.b,u.g,u.f,u.c,h.a],pipes:[v.a],styles:["[_nghost-%COMP%]   #profile-section[_ngcontent-%COMP%]{width:400px}[_nghost-%COMP%]   #profile-section[_ngcontent-%COMP%]   #profile-image[_ngcontent-%COMP%]{background-image:url(profile.b395ec165888d56d6135.jpg);background-size:cover}"]}),t})();var m=n("+0xr"),f=n("HndY");const T=[{path:"",component:s,children:[{path:"vaccineHistory",component:S},{path:"dashboard",component:(()=>{class t{constructor(t){var e;this.appointmentService=t,this.role=null===(e=Object(f.a)())||void 0===e?void 0:e.type,this.role||(this.role=c.a.HEALTH_PRACTITIONER),this.dataSource=new m.k}ngOnInit(){var t,e;(null===(t=Object(f.a)())||void 0===t?void 0:t.clinicId)&&this.appointmentService.getConfirmedAppointmentsByClinicId(null===(e=Object(f.a)())||void 0===e?void 0:e.clinicId).subscribe(t=>{this.dataSource=new m.k(t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(l.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-health-practitioner-dashboard"]],decls:12,vars:3,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12"],[1,"col-lg"],[3,"roleInput","tableDataSource","modified"]],template:function(t,e){1&t&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"div",2),o.Tb(3,"div"),o.Tb(4,"h1"),o.Dc(5,"Health Practitioner Dashboard"),o.Sb(),o.Sb(),o.Sb(),o.Tb(6,"div",3),o.Tb(7,"mat-card"),o.Tb(8,"mat-card-content"),o.Tb(9,"h3"),o.Dc(10),o.Sb(),o.Tb(11,"app-appointment",4),o.bc("modified",function(){return e.ngOnInit()}),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb()),2&t&&(o.Cb(10),o.Ec("List of Confirmed Appointments"),o.Cb(1),o.nc("roleInput",e.role)("tableDataSource",e.dataSource))},directives:[u.a,u.c,h.a],styles:[""]}),t})()}]}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({imports:[[a.c.forChild(T)],a.c]}),t})();var C=n("s1ZD"),O=n("PCNd"),I=n("3Pt+");let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({imports:[[i.c,g,C.a,O.a,a.c,I.t]]}),t})()}}]);