(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{kBgG:function(t,e,i){"use strict";i.r(e),i.d(e,"PatientContainerModule",function(){return L});var n=i("ofXK"),o=i("tyNb"),a=i("Vphj"),r=i("fXoL"),s=i("UDy1");let c=(()=>{class t{constructor(){this.role=a.a}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["app-patient-container"]],decls:2,vars:1,consts:[[3,"roleInput"]],template:function(t,e){1&t&&(r.Ob(0,"app-navigation-bar",0),r.Ob(1,"router-outlet")),2&t&&r.nc("roleInput",e.role.PATIENT)},directives:[s.a,o.d],styles:["nav[_ngcontent-%COMP%]{height:80px;width:100%}"]}),t})();var l=i("3Pt+"),b=i("33Jv"),u=i("GAii"),d=i("wd/R"),p=i("HndY"),m=i("5ZMJ"),v=i("UXJL"),g=i("KqrR"),h=i("82lM"),S=i("kmnG"),f=i("d3UM"),T=i("qFsG"),C=i("iadO"),O=i("r3oX"),D=i("NFeN"),P=i("FKr1"),R=i("bTqV");function y(t,e){if(1&t&&(r.Tb(0,"mat-option",23),r.Dc(1),r.Sb()),2&t){const t=e.$implicit;r.nc("value",t._id),r.Cb(1),r.Ec(t.name)}}function k(t,e){if(1&t&&(r.Tb(0,"mat-option",23),r.Dc(1),r.Sb()),2&t){const t=e.$implicit;r.nc("value",t._id),r.Cb(1),r.Ec(t.name)}}let B=(()=>{class t{constructor(t,e,i,n,o,a){this.formBuilder=t,this.clinicService=e,this.patientService=i,this.appointmentService=n,this.vaccineService=o,this.router=a,this.subSink=new b.a,this.currentDate=new Date,this.clinics=[]}ngOnInit(){this.createRequestApptForm(),this.subSink.add(this.clinicService.getClinics().subscribe(t=>{this.clinics=t})),this.subSink.add(this.vaccineService.getVaccines().subscribe(t=>{this.vaccines=t})),this.subSink.add(this.patientService.getPatient().subscribe(t=>this.patient=t))}ngOnDestroy(){this.subSink.unsubscribe()}createRequestApptForm(){this.requestApptForm=this.formBuilder.group({clinicId:["",l.v.required],preferredDate:["",l.v.required],preferredTime:["",l.v.required],vaccine:["",l.v.required],vaccineDose:["",l.v.required],reason:["",l.v.required]})}submitRequestApptForm(){if(console.log("submitted!"),this.requestApptForm.invalid)return void console.log("form invalid!");const{clinicId:t,preferredDate:e,preferredTime:i,vaccine:n,vaccineDose:o,reason:a}=this.requestApptForm.getRawValue(),r=Object(p.a)(),s=(d(i,["h:mm A"]).format(),{patient:null==r?void 0:r.userId,clinic:t,preferredDate:e,preferredTime:d(i,["h:mm A"]).format(),startTime:null,endTime:null,type:u.a.REQUESTED,reason:a,vaccine:n,vaccineDose:o,healthPractitioner:void 0});this.subSink.add(this.appointmentService.requestAppointment(s).subscribe(t=>{console.log(t),this.router.navigate(["/patient/dashboard"],{state:{appointment:t}})}))}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(l.e),r.Nb(m.a),r.Nb(v.a),r.Nb(g.a),r.Nb(h.a),r.Nb(o.b))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-request-appointment"]],decls:83,vars:7,consts:[[1,"content-container"],[1,"content"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["appearance","outline"],["formControlName","clinicId"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","preferredDate",3,"matDatepicker","min"],["matSuffix","",3,"for"],["picker",""],["matInput","","aria-label","12hr format","formControlName","preferredTime","readonly","",3,"ngxTimepicker"],["timeInput",""],["default",""],["matSuffix","",1,"time-icon",3,"click"],["formControlName","vaccine"],["formControlName","vaccineDose"],["value","Shot #1"],["value","Shot #2"],["value","Shot #3"],["matInput","","formControlName","reason","cdkAutosizeMinRows","5"],[1,"text-center","mt-3"],["mat-raised-button","","type","submit"],[3,"value"]],template:function(t,e){if(1&t){const t=r.Ub();r.Tb(0,"div",0),r.Tb(1,"div",1),r.Tb(2,"form",2),r.bc("ngSubmit",function(){return e.submitRequestApptForm()}),r.Tb(3,"div",3),r.Tb(4,"div",4),r.Tb(5,"mat-form-field",5),r.Tb(6,"mat-label"),r.Dc(7,"Clinic"),r.Sb(),r.Tb(8,"mat-select",6),r.Bc(9,y,2,2,"mat-option",7),r.Sb(),r.Tb(10,"mat-error"),r.Dc(11,"Clinic is "),r.Tb(12,"strong"),r.Dc(13,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(14,"div",3),r.Tb(15,"div",4),r.Tb(16,"mat-form-field",5),r.Tb(17,"mat-label"),r.Dc(18,"Preferred Date"),r.Sb(),r.Ob(19,"input",8),r.Ob(20,"mat-datepicker-toggle",9),r.Ob(21,"mat-datepicker",null,10),r.Tb(23,"mat-error"),r.Dc(24,"Preferred Date is "),r.Tb(25,"strong"),r.Dc(26,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(27,"div",3),r.Tb(28,"div",4),r.Tb(29,"mat-form-field",5),r.Tb(30,"mat-label"),r.Dc(31,"Preferred Time"),r.Sb(),r.Ob(32,"input",11,12),r.Ob(34,"ngx-material-timepicker",null,13),r.Tb(36,"mat-icon",14),r.bc("click",function(){return r.vc(t),r.sc(33).click()}),r.Dc(37,"alarm"),r.Sb(),r.Tb(38,"mat-error"),r.Dc(39,"Preferred Time is "),r.Tb(40,"strong"),r.Dc(41,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(42,"div",3),r.Tb(43,"div",4),r.Tb(44,"mat-form-field",5),r.Tb(45,"mat-label"),r.Dc(46,"Vaccine Type"),r.Sb(),r.Tb(47,"mat-select",15),r.Bc(48,k,2,2,"mat-option",7),r.Sb(),r.Tb(49,"mat-error"),r.Dc(50,"Vaccine Type is "),r.Tb(51,"strong"),r.Dc(52,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(53,"div",3),r.Tb(54,"div",4),r.Tb(55,"mat-form-field",5),r.Tb(56,"mat-label"),r.Dc(57,"Vaccine Dose"),r.Sb(),r.Tb(58,"mat-select",16),r.Tb(59,"mat-option",17),r.Dc(60,"Shot #1"),r.Sb(),r.Tb(61,"mat-option",18),r.Dc(62,"Shot #2"),r.Sb(),r.Tb(63,"mat-option",19),r.Dc(64,"Shot #3"),r.Sb(),r.Sb(),r.Tb(65,"mat-error"),r.Dc(66,"Vaccine Dose is "),r.Tb(67,"strong"),r.Dc(68,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(69,"div",3),r.Tb(70,"div",4),r.Tb(71,"mat-form-field",5),r.Tb(72,"mat-label"),r.Dc(73,"Reason of Appointment"),r.Sb(),r.Tb(74,"textarea",20),r.Dc(75,"            "),r.Sb(),r.Tb(76,"mat-error"),r.Dc(77,"Reason of Appointment is "),r.Tb(78,"strong"),r.Dc(79,"Required"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(80,"div",21),r.Tb(81,"button",22),r.Dc(82,"Send Appointment Request"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()}if(2&t){const t=r.sc(22),i=r.sc(35);r.Cb(2),r.nc("formGroup",e.requestApptForm),r.Cb(7),r.nc("ngForOf",e.clinics),r.Cb(10),r.nc("matDatepicker",t)("min",e.currentDate),r.Cb(1),r.nc("for",t),r.Cb(12),r.nc("ngxTimepicker",i),r.Cb(16),r.nc("ngForOf",e.vaccines)}},directives:[l.w,l.p,l.i,S.c,S.f,f.a,l.o,l.h,n.l,S.b,T.b,l.c,C.b,C.d,S.g,C.a,O.c,O.a,D.a,P.m,R.b],styles:[".content-container[_ngcontent-%COMP%]{display:grid;place-items:center}.content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:1rem 2rem;background:#fff;width:700px;height:670px;box-shadow:0 1px 3px rgba(0,0,0,.1607843137254902);border-radius:4px}mat-form-field[_ngcontent-%COMP%]{width:100%}.time-icon[_ngcontent-%COMP%]{margin-right:.5rem;cursor:pointer;color:#757575}button[_ngcontent-%COMP%]{background-color:#8f190a!important;color:#f6ea8c!important;width:250px;height:60px}"]}),t})();function F(t,e){if(1&t&&(r.Tb(0,"li"),r.Dc(1),r.Sb()),2&t){const t=r.fc();r.Cb(1),r.Fc(" You selected your age to be ",t.ineligible[null==t.navigationBehaviorOptions||null==t.navigationBehaviorOptions.state||null==t.navigationBehaviorOptions.state.age?null:t.navigationBehaviorOptions.state.age.value]," ")}}function A(t,e){if(1&t&&(r.Tb(0,"li"),r.Dc(1),r.Sb()),2&t){const t=r.fc();r.Cb(1),r.Fc(" You selected your eligibility group to be ",t.ineligible[null==t.navigationBehaviorOptions||null==t.navigationBehaviorOptions.state||null==t.navigationBehaviorOptions.state.eligibleGroup?null:t.navigationBehaviorOptions.state.eligibleGroup.value]," ")}}function w(t,e){if(1&t&&(r.Tb(0,"li"),r.Dc(1),r.Sb()),2&t){const t=r.fc();r.Cb(1),r.Fc(" You selected your chronic conditions to be ",t.ineligible[null==t.navigationBehaviorOptions||null==t.navigationBehaviorOptions.state||null==t.navigationBehaviorOptions.state.doesChronicConditionsPass?null:t.navigationBehaviorOptions.state.doesChronicConditionsPass.value]," ")}}function H(t,e){if(1&t&&(r.Tb(0,"li"),r.Dc(1),r.Sb()),2&t){const t=r.fc();r.Cb(1),r.Fc(" You selected your community of greater risk to be ",t.ineligible[null==t.navigationBehaviorOptions||null==t.navigationBehaviorOptions.state||null==t.navigationBehaviorOptions.state.doesGreaterRiskPass?null:t.navigationBehaviorOptions.state.doesGreaterRiskPass.value]," ")}}let M=(()=>{class t{constructor(t){this.router=t,this.navigationBehaviorOptions=this.router.getCurrentNavigation().extras,console.log("navigationBehaviorOptions",this.navigationBehaviorOptions)}ngOnInit(){this.ineligible={USF:"Under Seventy Five",O:"Other"}}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(o.b))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-failed-eligibility-check"]],decls:17,vars:4,consts:[[1,"content-container"],[1,"content"],[1,"row","text-center"],[1,"col"],[1,"row"],[4,"ngIf"]],template:function(t,e){1&t&&(r.Tb(0,"div",0),r.Tb(1,"div",1),r.Tb(2,"div",2),r.Tb(3,"div",3),r.Tb(4,"h3"),r.Dc(5,"Failed Eligibility"),r.Sb(),r.Sb(),r.Sb(),r.Tb(6,"div",2),r.Tb(7,"div",3),r.Tb(8,"h4"),r.Dc(9,"You Failed Eligibility For The Following Reasons:"),r.Sb(),r.Sb(),r.Sb(),r.Tb(10,"div",4),r.Tb(11,"div",3),r.Tb(12,"ul"),r.Bc(13,F,2,1,"li",5),r.Bc(14,A,2,1,"li",5),r.Bc(15,w,2,1,"li",5),r.Bc(16,H,2,1,"li",5),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&t&&(r.Cb(13),r.nc("ngIf",!(null!=e.navigationBehaviorOptions&&null!=e.navigationBehaviorOptions.state&&null!=e.navigationBehaviorOptions.state.age&&e.navigationBehaviorOptions.state.age.didPass)),r.Cb(1),r.nc("ngIf",!(null!=e.navigationBehaviorOptions&&null!=e.navigationBehaviorOptions.state&&null!=e.navigationBehaviorOptions.state.eligibleGroup&&e.navigationBehaviorOptions.state.eligibleGroup.didPass)),r.Cb(1),r.nc("ngIf",!(null!=e.navigationBehaviorOptions&&null!=e.navigationBehaviorOptions.state&&null!=e.navigationBehaviorOptions.state.doesChronicConditionsPass&&e.navigationBehaviorOptions.state.doesChronicConditionsPass.didPass)),r.Cb(1),r.nc("ngIf",!(null!=e.navigationBehaviorOptions&&null!=e.navigationBehaviorOptions.state&&null!=e.navigationBehaviorOptions.state.doesGreaterRiskPass&&e.navigationBehaviorOptions.state.doesGreaterRiskPass.didPass)))},directives:[n.m],styles:[".content-container[_ngcontent-%COMP%]{display:grid;place-items:center}.content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:1rem 2rem;background:#fff;width:700px;box-shadow:0 1px 3px rgba(0,0,0,.1607843137254902);border-radius:4px}h4[_ngcontent-%COMP%]{color:red}"]}),t})();var x=i("+0xr"),N=i("Wp6s"),q=i("cdYX");let _=(()=>{class t{constructor(t,e,i){var n;this.appointmentService=t,this.patientService=e,this.vaccineService=i,this.subSink=new b.a,this.role=null===(n=Object(p.a)())||void 0===n?void 0:n.type,this.role||(this.role=a.a.PATIENT),this.dataSource=new x.k,this.subSink.add(e.getPatient().subscribe(t=>{this.patient=t})),this.subSink.add(i.getVaccines().subscribe(t=>{console.log(t)})),this.getTableDataSource()}ngOnInit(){}ngOnDestroy(){this.subSink.unsubscribe()}getTableDataSource(){const t=Object(p.a)();this.subSink.add(this.appointmentService.getAppointmentsByPatient(null==t?void 0:t.userId).subscribe(t=>{console.log(t),this.dataSource=new x.k(t),console.log(this.dataSource)},t=>{console.log(t)}))}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(g.a),r.Nb(v.a),r.Nb(h.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-dashboard"]],decls:13,vars:3,consts:[["id","dashboard-container"],[1,"container-fluid"],[1,"row"],[1,"col-12"],[1,"col-lg"],[3,"roleInput","tableDataSource","modified"]],template:function(t,e){1&t&&(r.Tb(0,"div",0),r.Tb(1,"div",1),r.Tb(2,"div",2),r.Tb(3,"div",3),r.Tb(4,"div"),r.Tb(5,"h1"),r.Dc(6,"Patient Dashboard"),r.Sb(),r.Sb(),r.Sb(),r.Tb(7,"div",4),r.Tb(8,"mat-card"),r.Tb(9,"mat-card-content"),r.Tb(10,"h3"),r.Dc(11),r.Sb(),r.Tb(12,"app-appointment",5),r.bc("modified",function(){return e.getTableDataSource()}),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&t&&(r.Cb(11),r.Ec("List of Appointments"),r.Cb(1),r.nc("roleInput",e.role)("tableDataSource",e.dataSource))},directives:[N.a,N.c,q.a],styles:["[_nghost-%COMP%]   #dashboard-container[_ngcontent-%COMP%]{height:calc(100vh - 56px);display:flex;flex-direction:column;max-height:100%;position:relative}[_nghost-%COMP%]   #dashboard-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;overflow:auto}[_nghost-%COMP%]   #dashboard-container[_ngcontent-%COMP%]   #profile-section[_ngcontent-%COMP%]{width:400px}[_nghost-%COMP%]   #dashboard-container[_ngcontent-%COMP%]   #profile-section[_ngcontent-%COMP%]   #profile-image[_ngcontent-%COMP%]{background-image:url(profile.b395ec165888d56d6135.jpg);background-size:cover}"]}),t})();const I=[{path:"",component:c,children:[{path:"requestAppointment",component:B},{path:"eligibilityCheck",component:(()=>{class t{constructor(t,e){this.formBuilder=t,this.router=e,this.eligible=["ASF","FN","CHHR","LTCHRAS","ALRAS","RHRAS","ECFCHR","PSW","FHCW","OTR","HSCTR","PWNDIWRFMBC","HMDWTLY","KDWEGFR","BAORP","HSWHAOHROD","FHCW"],this.currentDate=new Date}ngOnInit(){this.createEligibilityForm()}get formControls(){return this.eligibilityForm.controls}createEligibilityForm(){this.eligibilityForm=this.formBuilder.group({age:["",l.v.required],eligibleGroup:["",l.v.required],chronicConditions:["",l.v.required],greaterRisk:["",l.v.required]})}submitEligibilityForm(){if(this.eligibilityForm.valid)if(this.eligible.includes(this.formControls.age.value)&&this.eligible.includes(this.formControls.eligibleGroup.value)&&this.eligible.includes(this.formControls.chronicConditions.value)&&this.eligible.includes(this.formControls.greaterRisk.value))this.router.navigate(["/patient/dashboard"]);else{const t={state:{age:{didPass:this.eligible.includes(this.formControls.age.value),value:this.formControls.age.value},eligibleGroup:{didPass:this.eligible.includes(this.formControls.eligibleGroup.value),value:this.formControls.eligibleGroup.value},doesChronicConditionsPass:{didPass:this.eligible.includes(this.formControls.chronicConditions.value),value:this.formControls.chronicConditions.value},doesGreaterRiskPass:{didPass:this.eligible.includes(this.formControls.greaterRisk.value),value:this.formControls.greaterRisk.value}}};this.router.navigate(["/patient/failedEligibilityCheck"],t)}}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(l.e),r.Nb(o.b))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-eligibility-check"]],decls:70,vars:1,consts:[[1,"content-container"],[1,"content"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["appearance","outline"],["formControlName","age"],["value","USF"],["value","ASF"],["formControlName","eligibleGroup"],["value","FN"],["value","CHHR"],["value","LTCHRAS"],["value","ALRAS"],["value","RHRAS"],["value","ECFCHR"],["value","PSW"],["value","FHCW"],["value","O"],["formControlName","chronicConditions"],["value","OTR"],["value","HSCTR"],["value","PWNDIWRFMBC"],["value","HMDWTLY"],["value","KDWEGFR"],["formControlName","greaterRisk"],["value","BAORP"],["value","HSWHAOHROD"],[1,"text-center","mt-3"],["mat-raised-button","","type","submit"]],template:function(t,e){1&t&&(r.Tb(0,"div",0),r.Tb(1,"div",1),r.Tb(2,"form",2),r.bc("ngSubmit",function(){return e.submitEligibilityForm()}),r.Tb(3,"div",3),r.Tb(4,"div",4),r.Tb(5,"mat-form-field",5),r.Tb(6,"mat-label"),r.Dc(7,"What is your age?"),r.Sb(),r.Tb(8,"mat-select",6),r.Tb(9,"mat-option",7),r.Dc(10,"Under Seventy Five"),r.Sb(),r.Tb(11,"mat-option",8),r.Dc(12,"Above Seventy Five"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(13,"div",3),r.Tb(14,"div",4),r.Tb(15,"mat-form-field",5),r.Tb(16,"mat-label"),r.Dc(17,"What Is Your Eligibility Group?"),r.Sb(),r.Tb(18,"mat-select",9),r.Tb(19,"mat-option",10),r.Dc(20,"First Nations"),r.Sb(),r.Tb(21,"mat-option",11),r.Dc(22,"Chronic Home Healthcare Recipients"),r.Sb(),r.Tb(23,"mat-option",12),r.Dc(24,"Long Term Care Home Residents And Staff"),r.Sb(),r.Tb(25,"mat-option",13),r.Dc(26,"Assisted Living Residents And Staff"),r.Sb(),r.Tb(27,"mat-option",14),r.Dc(28,"Retirement Home Resident And Staff"),r.Sb(),r.Tb(29,"mat-option",15),r.Dc(30,"Essential Caregivers For Care Home Residents"),r.Sb(),r.Tb(31,"mat-option",16),r.Dc(32,"Personal Support Workers"),r.Sb(),r.Tb(33,"mat-option",17),r.Dc(34,"Frontline Health Care Workers"),r.Sb(),r.Tb(35,"mat-option",18),r.Dc(36,"Other"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(37,"div",3),r.Tb(38,"div",4),r.Tb(39,"mat-form-field",5),r.Tb(40,"mat-label"),r.Dc(41,"Do You Have Any Of These Chronic Conditions?"),r.Sb(),r.Tb(42,"mat-select",19),r.Tb(43,"mat-option",20),r.Dc(44,"Organ Transplant Recipients"),r.Sb(),r.Tb(45,"mat-option",21),r.Dc(46,"Hematopoietic Stem Cell Transplant Recipients"),r.Sb(),r.Tb(47,"mat-option",22),r.Dc(48,"People With Neurological Diseases In Which Respiratory Function May Be Compromised"),r.Sb(),r.Tb(49,"mat-option",23),r.Dc(50,"Haematological Malignancy Diagnosed Within The Last Year"),r.Sb(),r.Tb(51,"mat-option",24),r.Dc(52,"Kidney Disease With Estimated Glomerular Filtration Rate (egfr) Under 30"),r.Sb(),r.Tb(53,"mat-option",18),r.Dc(54,"Other"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(55,"div",3),r.Tb(56,"div",4),r.Tb(57,"mat-form-field",5),r.Tb(58,"mat-label"),r.Dc(59,"Do You Belong To Below Mentioned Communities At Greater Risk?"),r.Sb(),r.Tb(60,"mat-select",25),r.Tb(61,"mat-option",26),r.Dc(62,"Black And Other Racialized Populations"),r.Sb(),r.Tb(63,"mat-option",27),r.Dc(64,"Hot Spots With Historic And Ongoing High Rates Of Death, Hospitalization And Transmission"),r.Sb(),r.Tb(65,"mat-option",18),r.Dc(66,"Other"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(67,"div",28),r.Tb(68,"button",29),r.Dc(69,"Check Eligibility"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&t&&(r.Cb(2),r.nc("formGroup",e.eligibilityForm))},directives:[l.w,l.p,l.i,S.c,S.f,f.a,l.o,l.h,P.m,R.b],styles:[".content-container[_ngcontent-%COMP%]{display:grid;place-items:center}.content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:1rem 2rem;background:#fff;width:700px;height:474px;box-shadow:0 1px 3px rgba(0,0,0,.1607843137254902);border-radius:4px}mat-form-field[_ngcontent-%COMP%]{width:100%}.time-icon[_ngcontent-%COMP%]{margin-right:.5rem;cursor:pointer;color:#757575}button[_ngcontent-%COMP%]{background-color:#8f190a!important;color:#f6ea8c!important;width:250px;height:60px}"]}),t})()},{path:"failedEligibilityCheck",component:M},{path:"dashboard",component:_}]}];let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({imports:[[o.c.forChild(I)],o.c]}),t})();var W=i("s1ZD"),E=i("PCNd");let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({imports:[[n.c,G,W.a,O.b,l.t,E.a]]}),t})()}}]);