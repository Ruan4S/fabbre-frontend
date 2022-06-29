"use strict";(self.webpackChunkfabbre_frontend=self.webpackChunkfabbre_frontend||[]).push([[13],{13:(Z,p,a)=>{a.r(p),a.d(p,{AbreviacaoModule:()=>P});var u=a(9808),g=a(9764),d=a(861),x=a(3806),c=a(6696),m=a(655),s=a(5374),f=a(4004),h=a(262),b=a(9646),o=a(5e3),y=a(6037);class r{constructor(e,n,l){this.abreviacaoService=e,this.router=n,this.sessionSt=l}canActivate(e){return this.abreviacaoService.obterAbreviacaoPorSlug(e.params.slug).pipe((0,f.U)(n=>n?(this.abreviacao=n,!0):(this.sessionSt.clear(),this.router.navigateByUrl("/"),!1)),(0,h.K)(()=>(this.router.navigateByUrl("/"),(0,b.of)(!1))))}}r.\u0275fac=function(e){return new(e||r)(o.LFG(y.n),o.LFG(c.F0),o.LFG(s.uR))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),(0,m.gn)([(0,s.xg)()],r.prototype,"abreviacao",void 0);var C=a(2313),v=a(7093);let M=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-exemplo"]],inputs:{obj:"obj"},decls:2,vars:1,consts:[[3,"innerHTML"]],template:function(n,l){1&n&&(o._UZ(0,"p",0),o._uU(1,"\n")),2&n&&o.Q6J("innerHTML",l.obj,o.oJD)},styles:['@charset "UTF-8";[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;flex:1 1 250px;min-height:170px;max-width:300px;padding:20px;border-radius:8px;position:relative;background-color:var(--color-primary);filter:brightness(.92);transition:ease .6s}[_nghost-%COMP%]:before, [_nghost-%COMP%]:after{position:absolute;opacity:.1;color:var(--color-secondary);font-size:4rem;line-height:2rem;transition:ease .6s}[_nghost-%COMP%]:before{content:"\\275d";top:16px;left:6px}[_nghost-%COMP%]:after{content:"\\275e";bottom:-16px;right:6px}p[_ngcontent-%COMP%]{text-align:center;font-style:italic;transition:ease .6s}@media (max-width: 768px){[_nghost-%COMP%]{max-width:unset}}']}),t})();function A(t,e){1&t&&o._UZ(0,"app-exemplo",6),2&t&&o.Q6J("obj",e.$implicit)}class i{constructor(e,n){this.titleService=e,this.sessionSt=n}ngOnInit(){this.titleService.setTitle(`${this.abreviacao.nome} | Fabbre`)}ngOnDestroy(){this.sessionSt.clear()}}i.\u0275fac=function(e){return new(e||i)(o.Y36(C.Dx),o.Y36(s.uR))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-abreviacao"]],decls:25,vars:4,consts:[[1,"container"],[1,"titulo"],[3,"innerHTML"],[1,"exemplos-container"],["fxLayout","row wrap","fxLayoutAlign","center",1,"exemplos"],[3,"obj",4,"ngFor","ngForOf"],[3,"obj"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0),o._uU(1,"\n  "),o.TgZ(2,"div",1),o._uU(3,"\n    "),o.TgZ(4,"h1"),o._uU(5),o.qZA(),o._uU(6,"\n    "),o.TgZ(7,"span"),o._uU(8),o.qZA(),o._uU(9,"\n  "),o.qZA(),o._uU(10,"\n\n  "),o._UZ(11,"p",2),o._uU(12,"\n\n  "),o.TgZ(13,"div",3),o._uU(14,"\n    "),o.TgZ(15,"h2"),o._uU(16,"Exemplos"),o.qZA(),o._uU(17,"\n\n    "),o.TgZ(18,"div",4),o._uU(19,"\n      "),o.YNc(20,A,1,1,"app-exemplo",5),o._uU(21,"\n    "),o.qZA(),o._uU(22,"\n  "),o.qZA(),o._uU(23,"\n"),o.qZA(),o._uU(24,"\n")),2&e&&(o.xp6(5),o.Oqu(n.abreviacao.nome),o.xp6(3),o.Oqu(n.abreviacao.significado),o.xp6(3),o.Q6J("innerHTML",n.abreviacao.descricao,o.oJD),o.xp6(9),o.Q6J("ngForOf",n.abreviacao.exemplos))},directives:[v.xw,v.Wh,u.sg,M],styles:["[_nghost-%COMP%]{display:block;flex:1;min-height:calc(100vh - 207px)}.container[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px}.titulo[_ngcontent-%COMP%]{text-align:center}.titulo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{opacity:.3}p[_ngcontent-%COMP%]{margin:50px 0 80px}.exemplos-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-bottom:10px;border-bottom:1px solid var(--color-secondary);margin-bottom:40px}.exemplos-container[_ngcontent-%COMP%]   .exemplos[_ngcontent-%COMP%]{gap:40px 130px}"]}),(0,m.gn)([(0,s.xg)()],i.prototype,"abreviacao",void 0);const O=[{path:"",component:i,canActivate:[r],data:{title:"Abrevia\xe7\xe3o"}}];let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[c.Bz.forChild(O)],c.Bz]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[u.ez,U,d.m8,g.o9,x.q]]}),t})()}}]);