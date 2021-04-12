(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{nR3k:function(t,e,n){"use strict";n.r(e),n.d(e,"MedicalAdminContainerModule",function(){return P});var i=n("ofXK"),o=n("PCNd"),a=n("tyNb"),c=n("Vphj"),r=n("fXoL"),b=n("UDy1");let s=(()=>{class t{constructor(){this.role=c.a}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["app-medical-admin-container"]],decls:2,vars:1,consts:[[3,"roleInput"]],template:function(t,e){1&t&&(r.Ob(0,"app-navigation-bar",0),r.Ob(1,"router-outlet")),2&t&&r.nc("roleInput",e.role.MEDICAL_ADMIN)},directives:[b.a,a.d],styles:[""]}),t})();var l=n("+0xr"),d=n("33Jv"),m=n("3Pt+"),p=n("kmnG"),u=n("d3UM"),f=n("FKr1"),S=n("qFsG"),T=n("iadO"),h=n("r3oX"),g=n("NFeN"),D=n("bTqV"),v=n("0IaG");let C=(()=>{class t{constructor(t){this.formBuilder=t}ngOnInit(){this.createModifyApptForm()}createModifyApptForm(){this.modifyApptForm=this.formBuilder.group({healthPractitioner:["",m.t.required],date:["",m.t.required],time:["",m.t.required],vaccineType:["",m.t.required],vaccineDose:["",m.t.required]})}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(m.d))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-modify-appointment-details"]],decls:83,vars:6,consts:[[1,"content-container"],[1,"content"],[1,"row"],[1,"col","text-center"],[3,"formGroup"],[1,"col"],["appearance","outline"],["formControlName","healthPractitioner"],["value","John Smith"],["value","Joe Smith"],["formControlName","date","matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["formControlName","time","matInput","","aria-label","12hr format","readonly","",3,"ngxTimepicker"],["timeInput",""],["default",""],["matSuffix","",1,"time-icon",3,"click"],["formControlName","vaccineType"],["value","Pfizer"],["value","Moderna"],["formControlName","vaccineDose"],["value","1"],["value","2"],["mat-raised-button","","type","button",1,"mr-5",3,"mat-dialog-close"],["mat-raised-button","","type","button",1,"ml-5",3,"mat-dialog-close"]],template:function(t,e){if(1&t){const t=r.Ub();r.Tb(0,"div",0),r.Tb(1,"div",1),r.Tb(2,"div",2),r.Tb(3,"div",3),r.Tb(4,"h3"),r.Dc(5," Modify Appointment Details "),r.Sb(),r.Sb(),r.Sb(),r.Tb(6,"form",4),r.Tb(7,"div",2),r.Tb(8,"div",5),r.Tb(9,"mat-form-field",6),r.Tb(10,"mat-label"),r.Dc(11,"Health Practitioner"),r.Sb(),r.Tb(12,"mat-select",7),r.Tb(13,"mat-option",8),r.Dc(14,"John Smith"),r.Sb(),r.Tb(15,"mat-option",9),r.Dc(16,"Joe Smith"),r.Sb(),r.Sb(),r.Tb(17,"mat-error"),r.Dc(18,"Health Practitioner is "),r.Tb(19,"strong"),r.Dc(20,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(21,"div",2),r.Tb(22,"div",5),r.Tb(23,"mat-form-field",6),r.Tb(24,"mat-label"),r.Dc(25,"Date"),r.Sb(),r.Ob(26,"input",10),r.Ob(27,"mat-datepicker-toggle",11),r.Ob(28,"mat-datepicker",null,12),r.Tb(30,"mat-error"),r.Dc(31,"Date is "),r.Tb(32,"strong"),r.Dc(33,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(34,"div",2),r.Tb(35,"div",5),r.Tb(36,"mat-form-field",6),r.Tb(37,"mat-label"),r.Dc(38,"Time"),r.Sb(),r.Ob(39,"input",13,14),r.Ob(41,"ngx-material-timepicker",null,15),r.Tb(43,"mat-icon",16),r.bc("click",function(){return r.vc(t),r.sc(40).click()}),r.Dc(44,"alarm"),r.Sb(),r.Tb(45,"mat-error"),r.Dc(46,"Time is "),r.Tb(47,"strong"),r.Dc(48,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(49,"div",2),r.Tb(50,"div",5),r.Tb(51,"mat-form-field",6),r.Tb(52,"mat-label"),r.Dc(53,"Vaccine Type"),r.Sb(),r.Tb(54,"mat-select",17),r.Tb(55,"mat-option",18),r.Dc(56,"Pfizer"),r.Sb(),r.Tb(57,"mat-option",19),r.Dc(58,"Moderna"),r.Sb(),r.Sb(),r.Tb(59,"mat-error"),r.Dc(60,"Vaccine Type is "),r.Tb(61,"strong"),r.Dc(62,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(63,"div",2),r.Tb(64,"div",5),r.Tb(65,"mat-form-field",6),r.Tb(66,"mat-label"),r.Dc(67,"Vaccine Dose"),r.Sb(),r.Tb(68,"mat-select",20),r.Tb(69,"mat-option",21),r.Dc(70,"1"),r.Sb(),r.Tb(71,"mat-option",22),r.Dc(72,"2"),r.Sb(),r.Sb(),r.Tb(73,"mat-error"),r.Dc(74,"Vaccine Dose is "),r.Tb(75,"strong"),r.Dc(76,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(77,"div",2),r.Tb(78,"div",3),r.Tb(79,"button",23),r.Dc(80,"Save"),r.Sb(),r.Tb(81,"button",24),r.Dc(82,"Cancel"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()}if(2&t){const t=r.sc(29),n=r.sc(42);r.Cb(6),r.nc("formGroup",e.modifyApptForm),r.Cb(20),r.nc("matDatepicker",t),r.Cb(1),r.nc("for",t),r.Cb(12),r.nc("ngxTimepicker",n),r.Cb(40),r.nc("mat-dialog-close",!0),r.Cb(2),r.nc("mat-dialog-close",!1)}},directives:[m.u,m.o,m.h,p.c,p.f,u.a,m.n,m.g,f.m,p.b,m.c,S.b,T.b,T.d,p.g,T.a,h.c,h.a,g.a,D.a,v.c],styles:[".content-container[_ngcontent-%COMP%]{display:grid;place-items:center}.content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:1rem 2rem;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.1607843137254902);border-radius:4px}mat-form-field[_ngcontent-%COMP%]{width:100%}.time-icon[_ngcontent-%COMP%]{margin-right:.5rem;cursor:pointer;color:#757575}button[_ngcontent-%COMP%]{background-color:#8f190a!important;color:#f6ea8c!important;width:250px;height:40px}"]}),t})();var y=n("JrUw"),w=n("nYR2"),k=n("KqrR"),M=n("Wp6s"),O=n("Xa2L"),I=n("cdYX");function A(t,e){1&t&&r.Ob(0,"mat-spinner",10)}function x(t,e){if(1&t){const t=r.Ub();r.Tb(0,"app-appointment",11),r.bc("modified",function(){return r.vc(t),r.fc().getTableData()}),r.Sb()}if(2&t){const t=r.fc();r.nc("roleInput",t.role)("tableDataSource",t.dataSource)}}const q=[{path:"",component:s,children:[{path:"dashboard",component:(()=>{class t{constructor(t,e){this.appointmentService=t,this.dialog=e,this.role=c.a.MEDICAL_ADMIN,this.showLoading=!1,this.subSink=new d.a,this.dataSource=new l.k,this.getTableData()}ngOnInit(){}ngOnDestroy(){this.subSink.unsubscribe()}getTableData(){this.showLoading=!0,this.subSink.add(this.appointmentService.getAppointmentsByClinic().pipe(Object(w.a)(()=>this.showLoading=!1)).subscribe(t=>{console.log(t),this.dataSource=new l.k(t)},t=>{console.log(t)})),this.subSink.add(this.appointmentService.getAppointmentsByClinic().subscribe(t=>{console.log(t),this.dataSource=new l.k(t),this.showLoading=!1},t=>{console.log(t),this.showLoading=!1}))}openModifyAppointmentDialog(){this.dialog.open(C,{panelClass:"dialog-panel-class",disableClose:!1,autoFocus:!1,height:"620px"}).afterClosed().subscribe(t=>{t&&this.getTableData()})}openDeclineAppointmentRequestDialog(){this.dialog.open(y.a,{panelClass:"dialog-panel-class",disableClose:!1,autoFocus:!1,height:"400px",width:"650px"})}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(k.a),r.Nb(v.b))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-medical-admin-dashboard"]],decls:24,vars:3,consts:[["id","dashboard-container"],[1,"container-fluid"],[1,"row"],[1,"col-12"],[1,"col-lg-6","mb-3"],[1,"row","justify-content-center","p-2"],["matSuffix","","mode","indeterminate","diameter","70",4,"ngIf"],[3,"roleInput","tableDataSource","modified",4,"ngIf"],[1,"col-lg-6"],["mat-raised-button","",3,"click"],["matSuffix","","mode","indeterminate","diameter","70"],[3,"roleInput","tableDataSource","modified"]],template:function(t,e){1&t&&(r.Tb(0,"div",0),r.Tb(1,"div",1),r.Tb(2,"div",2),r.Tb(3,"div",3),r.Tb(4,"div"),r.Tb(5,"h1"),r.Dc(6,"Medical Admin Dashboard"),r.Sb(),r.Sb(),r.Sb(),r.Tb(7,"div",4),r.Tb(8,"mat-card"),r.Tb(9,"mat-card-content"),r.Tb(10,"h3"),r.Dc(11),r.Sb(),r.Tb(12,"div",5),r.Bc(13,A,1,0,"mat-spinner",6),r.Sb(),r.Bc(14,x,1,2,"app-appointment",7),r.Sb(),r.Sb(),r.Sb(),r.Tb(15,"div",8),r.Tb(16,"mat-card"),r.Tb(17,"mat-card-content"),r.Tb(18,"h3"),r.Dc(19,"Inventory Statistics"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(20,"button",9),r.bc("click",function(){return e.openModifyAppointmentDialog()}),r.Dc(21," Open Modify Appointments\n"),r.Sb(),r.Tb(22,"button",9),r.bc("click",function(){return e.openDeclineAppointmentRequestDialog()}),r.Dc(23," Open Decline Appointment\n"),r.Sb()),2&t&&(r.Cb(11),r.Ec("List of Appointments"),r.Cb(2),r.nc("ngIf",e.showLoading),r.Cb(1),r.nc("ngIf",!e.showLoading))},directives:[M.a,M.c,i.m,D.a,O.b,p.g,I.a],styles:[""]}),t})()}]}];let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({imports:[[a.c.forChild(q)],a.c]}),t})();var N=n("s1ZD");let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({imports:[[L,i.c,o.a,a.c,N.a,h.b,m.s]]}),t})()}}]);