(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{nR3k:function(t,e,n){"use strict";n.r(e),n.d(e,"MedicalAdminContainerModule",function(){return I});var o=n("ofXK"),i=n("PCNd"),a=n("tyNb"),c=n("Vphj"),r=n("fXoL"),b=n("UDy1");let l=(()=>{class t{constructor(){this.role=c.a}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["app-medical-admin-container"]],decls:2,vars:1,consts:[[3,"roleInput"]],template:function(t,e){1&t&&(r.Ob(0,"app-navigation-bar",0),r.Ob(1,"router-outlet")),2&t&&r.nc("roleInput",e.role.MEDICAL_ADMIN)},directives:[b.a,a.c],styles:[""]}),t})();var s=n("+0xr"),d=n("33Jv"),m=n("3Pt+"),p=n("kmnG"),u=n("d3UM"),S=n("FKr1"),f=n("qFsG"),T=n("iadO"),h=n("r3oX"),g=n("NFeN"),D=n("bTqV"),v=n("0IaG");let C=(()=>{class t{constructor(t){this.formBuilder=t}ngOnInit(){this.createModifyApptForm()}createModifyApptForm(){this.modifyApptForm=this.formBuilder.group({healthPractitioner:["",m.s.required],date:["",m.s.required],time:["",m.s.required],vaccineType:["",m.s.required],vaccineDose:["",m.s.required]})}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(m.d))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-modify-appointment-details"]],decls:83,vars:6,consts:[[1,"content-container"],[1,"content"],[1,"row"],[1,"col","text-center"],[3,"formGroup"],[1,"col"],["appearance","outline"],["formControlName","healthPractitioner"],["value","John Smith"],["value","Joe Smith"],["formControlName","date","matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["formControlName","time","matInput","","aria-label","12hr format","readonly","",3,"ngxTimepicker"],["timeInput",""],["default",""],["matSuffix","",1,"time-icon",3,"click"],["formControlName","vaccineType"],["value","Pfizer"],["value","Moderna"],["formControlName","vaccineDose"],["value","1"],["value","2"],["mat-raised-button","","type","button",1,"mr-5",3,"mat-dialog-close"],["mat-raised-button","","type","button",1,"ml-5",3,"mat-dialog-close"]],template:function(t,e){if(1&t){const t=r.Ub();r.Tb(0,"div",0),r.Tb(1,"div",1),r.Tb(2,"div",2),r.Tb(3,"div",3),r.Tb(4,"h3"),r.Dc(5," Modify Appointment Details "),r.Sb(),r.Sb(),r.Sb(),r.Tb(6,"form",4),r.Tb(7,"div",2),r.Tb(8,"div",5),r.Tb(9,"mat-form-field",6),r.Tb(10,"mat-label"),r.Dc(11,"Health Practitioner"),r.Sb(),r.Tb(12,"mat-select",7),r.Tb(13,"mat-option",8),r.Dc(14,"John Smith"),r.Sb(),r.Tb(15,"mat-option",9),r.Dc(16,"Joe Smith"),r.Sb(),r.Sb(),r.Tb(17,"mat-error"),r.Dc(18,"Health Practitioner is "),r.Tb(19,"strong"),r.Dc(20,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(21,"div",2),r.Tb(22,"div",5),r.Tb(23,"mat-form-field",6),r.Tb(24,"mat-label"),r.Dc(25,"Date"),r.Sb(),r.Ob(26,"input",10),r.Ob(27,"mat-datepicker-toggle",11),r.Ob(28,"mat-datepicker",null,12),r.Tb(30,"mat-error"),r.Dc(31,"Date is "),r.Tb(32,"strong"),r.Dc(33,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(34,"div",2),r.Tb(35,"div",5),r.Tb(36,"mat-form-field",6),r.Tb(37,"mat-label"),r.Dc(38,"Time"),r.Sb(),r.Ob(39,"input",13,14),r.Ob(41,"ngx-material-timepicker",null,15),r.Tb(43,"mat-icon",16),r.bc("click",function(){return r.vc(t),r.sc(40).click()}),r.Dc(44,"alarm"),r.Sb(),r.Tb(45,"mat-error"),r.Dc(46,"Time is "),r.Tb(47,"strong"),r.Dc(48,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(49,"div",2),r.Tb(50,"div",5),r.Tb(51,"mat-form-field",6),r.Tb(52,"mat-label"),r.Dc(53,"Vaccine Type"),r.Sb(),r.Tb(54,"mat-select",17),r.Tb(55,"mat-option",18),r.Dc(56,"Pfizer"),r.Sb(),r.Tb(57,"mat-option",19),r.Dc(58,"Moderna"),r.Sb(),r.Sb(),r.Tb(59,"mat-error"),r.Dc(60,"Vaccine Type is "),r.Tb(61,"strong"),r.Dc(62,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(63,"div",2),r.Tb(64,"div",5),r.Tb(65,"mat-form-field",6),r.Tb(66,"mat-label"),r.Dc(67,"Vaccine Dose"),r.Sb(),r.Tb(68,"mat-select",20),r.Tb(69,"mat-option",21),r.Dc(70,"1"),r.Sb(),r.Tb(71,"mat-option",22),r.Dc(72,"2"),r.Sb(),r.Sb(),r.Tb(73,"mat-error"),r.Dc(74,"Vaccine Dose is "),r.Tb(75,"strong"),r.Dc(76,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(77,"div",2),r.Tb(78,"div",3),r.Tb(79,"button",23),r.Dc(80,"Save"),r.Sb(),r.Tb(81,"button",24),r.Dc(82,"Cancel"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()}if(2&t){const t=r.sc(29),n=r.sc(42);r.Cb(6),r.nc("formGroup",e.modifyApptForm),r.Cb(20),r.nc("matDatepicker",t),r.Cb(1),r.nc("for",t),r.Cb(12),r.nc("ngxTimepicker",n),r.Cb(40),r.nc("mat-dialog-close",!0),r.Cb(2),r.nc("mat-dialog-close",!1)}},directives:[m.t,m.o,m.h,p.c,p.f,u.a,m.n,m.g,S.m,p.b,m.c,f.b,T.b,T.d,p.g,T.a,h.c,h.a,g.a,D.a,v.c],styles:[".content-container[_ngcontent-%COMP%]{display:grid;place-items:center}.content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:1rem 2rem;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.1607843137254902);border-radius:4px}mat-form-field[_ngcontent-%COMP%]{width:100%}.time-icon[_ngcontent-%COMP%]{margin-right:.5rem;cursor:pointer;color:#757575}button[_ngcontent-%COMP%]{background-color:#8f190a!important;color:#f6ea8c!important;width:250px;height:40px}"]}),t})(),y=(()=>{class t{constructor(){this.role=c.a.MEDICAL_ADMIN,this.note=new m.e}ngOnInit(){}ngOnDestroy(){this.subSink.unsubscribe()}save(){console.log(this.note.value)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["app-decline-requested-appointment-dialog"]],decls:16,vars:1,consts:[[1,"row"],[1,"col","text-center"],[1,"row","justify-content-center"],[1,"col-10"],["appearance","outline",2,"width","100%"],["matInput","","rows","8",2,"width","100%",3,"formControl"],["mat-raised-button","","type","button",1,"mr-5",3,"click"]],template:function(t,e){1&t&&(r.Tb(0,"div",0),r.Tb(1,"div",1),r.Tb(2,"h3"),r.Dc(3,"CANCEL / DECLINE APPOINTMENT"),r.Sb(),r.Sb(),r.Sb(),r.Tb(4,"div",2),r.Tb(5,"div",3),r.Dc(6," Reason For Cancellation "),r.Sb(),r.Sb(),r.Tb(7,"div",2),r.Tb(8,"div",3),r.Tb(9,"mat-form-field",4),r.Tb(10,"textarea",5),r.Dc(11,"\n      "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(12,"div",0),r.Tb(13,"div",1),r.Tb(14,"button",6),r.bc("click",function(){return e.save()}),r.Dc(15,"Cancel & Send Notification"),r.Sb(),r.Sb(),r.Sb()),2&t&&(r.Cb(10),r.nc("formControl",e.note))},directives:[p.c,f.b,m.c,m.n,m.f,D.a],styles:[".content-description[_ngcontent-%COMP%]{height:200px;justify-content:center;align-items:center}.content-description[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{max-width:75%}button[_ngcontent-%COMP%]{background-color:#8f190a!important;color:#f6ea8c!important;width:auto;height:60px}  .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}"]}),t})();var k=n("KqrR"),w=n("Wp6s"),M=n("cdYX");const O=[{path:"",component:l,children:[{path:"dashboard",component:(()=>{class t{constructor(t,e){this.appointmentService=t,this.dialog=e,this.role=c.a.MEDICAL_ADMIN,this.subSink=new d.a,this.dataSource=new s.k,this.subSink.add(t.getAppointmentsByClinic().subscribe(t=>{console.log(t),this.dataSource=new s.k(t)},t=>{console.log(t)}))}ngOnInit(){}ngOnDestroy(){this.subSink.unsubscribe()}openModifyAppointmentDialog(){this.dialog.open(C,{panelClass:"dialog-panel-class",disableClose:!1,autoFocus:!1,height:"620px"})}openDeclineAppointmentRequestDialog(){this.dialog.open(y,{panelClass:"dialog-panel-class",disableClose:!1,autoFocus:!1,height:"400px",width:"650px"})}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(k.a),r.Nb(v.b))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-medical-admin-dashboard"]],decls:22,vars:3,consts:[["id","dashboard-container"],[1,"container-fluid"],[1,"row"],[1,"col-12"],[1,"col-lg-6","mb-3"],[3,"roleInput","tableDataSource"],[1,"col-lg-6"],["mat-raised-button","",3,"click"]],template:function(t,e){1&t&&(r.Tb(0,"div",0),r.Tb(1,"div",1),r.Tb(2,"div",2),r.Tb(3,"div",3),r.Tb(4,"div"),r.Tb(5,"h1"),r.Dc(6,"Medical Admin Dashboard"),r.Sb(),r.Sb(),r.Sb(),r.Tb(7,"div",4),r.Tb(8,"mat-card"),r.Tb(9,"mat-card-content"),r.Tb(10,"h3"),r.Dc(11),r.Sb(),r.Ob(12,"app-appointment",5),r.Sb(),r.Sb(),r.Sb(),r.Tb(13,"div",6),r.Tb(14,"mat-card"),r.Tb(15,"mat-card-content"),r.Tb(16,"h3"),r.Dc(17,"Inventory Statistics"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(18,"button",7),r.bc("click",function(){return e.openModifyAppointmentDialog()}),r.Dc(19," Open Modify Appointments\n"),r.Sb(),r.Tb(20,"button",7),r.bc("click",function(){return e.openDeclineAppointmentRequestDialog()}),r.Dc(21," Open Decline Appointment\n"),r.Sb()),2&t&&(r.Cb(11),r.Ec("List of Appointments"),r.Cb(1),r.nc("roleInput",e.role)("tableDataSource",e.dataSource))},directives:[w.a,w.c,M.a,D.a],styles:[""]}),t})()}]}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({imports:[[a.b.forChild(O)],a.b]}),t})();var x=n("s1ZD");let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({imports:[[A,o.c,i.a,a.b,x.a,h.b,m.r]]}),t})()}}]);