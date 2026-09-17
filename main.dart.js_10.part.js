((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={aW6:function aW6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aW7:function aW7(){},aW8:function aW8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},aW4:function aW4(){},aW5:function aW5(){},GB:function GB(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.xK$=d
_.dM$=e
_.b2$=f
_.a=null},abh:function abh(d,e,f,g,h,i,j){var _=this
_.fE=d
_.y1=e
_.y2=f
_.dV$=g
_.aB$=h
_.dw$=i
_.b=_.dy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},a4F:function a4F(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
_.rx=d
_.ry=e
_.db=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.as=q
_.at=r
_.ax=s
_.ay=t
_.ch=u
_.CW=v
_.cx=w
_.a=x},acQ:function acQ(d,e,f){this.f=d
this.d=e
this.a=f},a9J:function a9J(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJl(d){return new A.a9I(d,null)},
a9I:function a9I(d,e){this.c=d
this.a=e},
aOD:function aOD(d){this.a=d},
Ir:function Ir(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b77:function b77(d,e){this.a=d
this.b=e},
b76:function b76(d,e){this.a=d
this.b=e},
b75:function b75(d,e){this.a=d
this.b=e}},D,E,F
B=c[0]
C=c[2]
A=a.updateHolder(c[7],A)
D=c[16]
E=c[11]
F=c[9]
A.aW6.prototype={
ajP(d){var x=this.c
return d.wQ(this.d,x,x)},
k(d){var x=this
return"SliverGridGeometry("+C.h.bc(B.b(["scrollOffset: "+B.o(x.a),"crossAxisOffset: "+B.o(x.b),"mainAxisExtent: "+B.o(x.c),"crossAxisExtent: "+B.o(x.d)],y.s),", ")+")"}}
A.aW7.prototype={}
A.aW8.prototype={
ak2(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.o.eX(d/x)-1)
return 0},
ayP(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
LM(d){var x=this,w=x.a,v=C.m.b1(d,w)
return new A.aW6(C.m.e9(d,w)*x.b,x.ayP(v*x.c),x.d,x.e)},
aaD(d){var x
if(d===0)return 0
x=this.b
return x*(C.m.e9(d-1,this.a)+1)-(x-this.d)}}
A.aW4.prototype={}
A.aW5.prototype={
WJ(d){var x=Math.max(0,d.w-36)/4,w=x/1
return new A.aW8(4,w+12,x+12,w,x,B.Jg(d.x))}}
A.GB.prototype={
k(d){return"crossAxisOffset="+B.o(this.w)+"; "+this.aoF(0)}}
A.abh.prototype={
hi(d){if(!(d.b instanceof A.GB))d.b=new A.GB(!1,null,null)},
saky(d){var x,w,v=this
if(v.fE===d)return
x=B.D(d)
w=B.D(v.fE)
if(x!==w)v.ah()
v.fE=d},
x3(d){var x=d.b
x.toString
x=y.w.a(x).w
x.toString
return x},
c2(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.S.a(B.H.prototype.ga9.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.fE.WJ(a8)
t=u.b
s=t>1e-10?u.a*C.o.e9(w,t):0
r=isFinite(v)?u.ak2(v):a7
if(a6.aB$!=null){q=a6.aac(s)
a6.u4(q,r!=null?a6.aad(r):0)}else a6.u4(0,0)
p=u.LM(s)
if(a6.aB$==null)if(!a6.R9(s,p.a)){o=u.aaD(a9.gx0())
a6.dy=B.iP(a7,a7,!1,a7,a7,o,0,0,0,o,a7,a7)
a9.ue()
return}n=p.a
m=n+p.c
t=a6.aB$
t.toString
t=t.b
t.toString
l=y.D
t=l.a(t).b
t.toString
k=t-1
t=y.w
j=a7
for(;k>=s;--k){i=u.LM(k)
h=i.c
g=a6.adJ(a8.wQ(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.aB$
h.toString
h.hT(p.ajP(a8))
j=a6.aB$
h=j.b
h.toString
t.a(h)
h.a=n
h.w=p.b}h=j.b
h.toString
h=l.a(h).b
h.toString
k=h+1
h=B.q(a6).i("aI.1")
f=r!=null
while(!0){if(!(!f||k<=r)){d=!1
break}i=u.LM(k)
e=i.c
a0=a8.wQ(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).b2$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.adH(a0,j)
if(g==null){d=!0
break}}else g.hT(a0)
a1=g.b
a1.toString
t.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
m=Math.max(m,a2+e);++k
j=g}t=a6.dw$
t.toString
t=t.b
t.toString
t=l.a(t).b
t.toString
a3=d?m:a9.T5(a8,s,t,n,m)
a4=a6.tZ(a8,Math.min(x,n),m)
a5=a6.wW(a8,n,m)
a6.dy=B.iP(a5,a7,a3>a4||x>0||a8.f!==0,a7,a7,a3,0,a4,0,a3,a7,a7)
if(a3===m)a9.R8=!0
a9.ue()}}
A.a4F.prototype={
a9Y(d){return new A.acQ(this.rx,this.ry,null)}}
A.acQ.prototype={
b7(d){var x=new A.abh(this.f,y.F.a(d),B.r(y.q,y.x),0,null,null,B.aw(y.v))
x.b6()
return x},
bf(d,e){e.saky(this.f)},
T4(d,e,f,g,h){var x
this.aoG(d,e,f,g,h)
x=this.f.WJ(d).aaD(this.d.gxE())
return x}}
A.a9J.prototype={
C(d){var x=null,w=B.Z(d),v=B.cS(new B.ap(C.yB,B.cR(B.nd(this.c,x,x,x,x,C.h9,C.eS,x,x),x,x),x),1),u=w.ok.w
u=u==null?x:u.j_(C.J,C.bn)
return B.dI(!1,C.aw,!0,x,B.eg(C.aR,B.jT(!0,B.bc(B.b([v,new B.ap(C.adG,B.al(this.d,2,C.b5,x,x,u,C.bp,x,x),x)],y.p),C.aa,C.M,C.V),!0,C.ag,!0),C.ax,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,C.bt),C.Y,C.P,0,x,x,x,x,x,C.bG)}}
A.a9I.prototype={
C(d){return B.dD(this.c,null,new A.aOD(this),y.W,y.B)}}
A.Ir.prototype={
C(d){return B.e4(new A.b77(this,C.b2N))},
aMC(d){var x
if(d==="assets/logo_probox_studio.png")return"Probox Studio"
x=$.byH().h(0,d)
return x==null?"":x}}
var z=a.updateTypes(["Ir(G,ms)"])
A.aOD.prototype={
$2(d,e){var x=this.a.c
return new A.Ir(e.a,x.gaZc(),x.gaPU(),null)},
$S:z+0}
A.b77.prototype={
$2(d,e){var x=null,w=this.a,v=this.b,u=B.b([F.bmr(new A.a4F(D.a8K,new B.GA(new A.b76(w,v),49,!0,!0,!0,x),C.ag,C.bz,!1,x,x,C.xv,x,!1,x,0,x,49,C.hT,C.ax,x,x,C.a6,C.aR,x),e.d)],y.p),t=w.c
if(t!=null){v=v[t]
u.push(B.ia(0,new A.a9J(v,w.aMC(v),w.e,x),x))}return B.dN(C.bH,u,C.a6,C.bu)},
$S:925}
A.b76.prototype={
$2(d,e){var x=null,w=this.b[e],v=B.b6(14),u=B.b6(14),t=B.b([new B.cK(0,C.bA,C.P.au(0.18),C.vU,8)],y.V)
return B.dI(!1,C.aw,!0,x,B.iA(!1,v,!0,B.c7(B.nd(w,B.b6(14),x,x,x,C.bR,C.ez,x,x),new B.bh(x,x,x,u,t,x,C.a7),C.am),x,!0,x,x,x,x,x,x,x,x,new A.b75(this.a,e),x,x,x,x,x,x,x),C.Y,C.ah,0,x,x,x,x,x,C.bG)},
$S:926}
A.b75.prototype={
$0(){return this.a.d.$1(this.b)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.I,[A.aW6,A.aW7,A.aW4])
w(A.aW8,A.aW7)
w(A.aW5,A.aW4)
w(A.GB,B.hI)
w(A.abh,B.pz)
w(A.a4F,E.Kp)
w(A.acQ,B.pK)
x(B.U,[A.a9J,A.a9I,A.Ir])
x(B.qE,[A.aOD,A.b77,A.b76])
w(A.b75,B.oD)})()
B.ts(b.typeUniverse,JSON.parse('{"GB":{"hI":[],"fM":["J"],"nB":[],"dU":[]},"abh":{"pz":[],"d3":[],"aI":["J","hI"],"H":[],"aF":[],"aI.1":"hI","aI.0":"J"},"a4F":{"U":[],"d":[]},"acQ":{"pK":[],"aG":[],"d":[]},"a9J":{"U":[],"d":[]},"Ir":{"U":[],"d":[]},"a9I":{"U":[],"d":[]}}'))
var y=(function rtii(){var x=B.a1
return{v:x("fv"),V:x("u<cK>"),s:x("u<k>"),p:x("u<d>"),W:x("rw"),B:x("ms"),x:x("J"),S:x("pJ"),w:x("GB"),F:x("As"),D:x("hI"),q:x("m")}})();(function constants(){D.a8K=new A.aW5()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c0n","byH",()=>{var w,v,u,t,s=B.a1("k")
s=B.r(s,s)
for(w=B.bHH(C.AD,!0,B.a1("bT")),C.h.L(w,C.Sm),v=w.length,u=0;u<w.length;w.length===v||(0,B.w)(w),++u){t=w[u]
s.j(0,t.b,t.c)}return s})})()};
(a=>{a["rl7ZqggWEfyihRtUpnCSLmR7ycM="]=a.current})($__dart_deferred_initializers__);