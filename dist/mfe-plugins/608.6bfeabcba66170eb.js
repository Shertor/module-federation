(self.webpackChunkmfe_plugins=self.webpackChunkmfe_plugins||[]).push([[608],{9608:(d,o,t)=>{t.r(o),t.d(o,{Plugin1Component:()=>a});var s=t(1493),u=t(3970),e=t(6269),i=t(167);class a{constructor(n){this.sharedService=n,this.someValue$=new u.BehaviorSubject(0)}changeSomeValue(){this.someValue$.next(this.someValue$.getValue()+1)}get getSomeValue(){return this.someValue$.getValue()}onSharedServiceValueBtnPressed(){let n=this.sharedService.getValue().getValue();this.sharedService.changeValue(n+1)}static#e=this.\u0275fac=function(l){return new(l||a)(e.\u0275\u0275directiveInject(i.MfeShellExampleService))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["app-plugin1"]],standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:10,vars:4,consts:[[1,"plugin-container"],[3,"click"]],template:function(l,r){1&l&&(e.\u0275\u0275elementStart(0,"div",0)(1,"p"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",1),e.\u0275\u0275listener("click",function(){return r.changeSomeValue()}),e.\u0275\u0275text(4,"Set self value + 1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div"),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"button",1),e.\u0275\u0275listener("click",function(){return r.onSharedServiceValueBtnPressed()}),e.\u0275\u0275text(9," Set shared value + 1 "),e.\u0275\u0275elementEnd()()),2&l&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("Plugin value: ",r.getSomeValue,""),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate1("Value from shared service: ",e.\u0275\u0275pipeBind1(7,2,r.sharedService.getValue()),""))},dependencies:[s.CommonModule,s.AsyncPipe],styles:[".plugin-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;row-gap:.75rem;margin:.25rem .5rem;padding:1rem 1.25rem;border:1px dashed #666;border-radius:.25rem}"]})}}}]);