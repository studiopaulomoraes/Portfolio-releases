((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,A={aUT:function aUT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aUU:function aUU(){},aUV:function aUV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},aUR:function aUR(){},aUS:function aUS(){},Gc:function Gc(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.xI$=d
_.dG$=e
_.b1$=f
_.a=null},aaD:function aaD(d,e,f,g,h,i,j){var _=this
_.fC=d
_.y1=e
_.y2=f
_.dO$=g
_.av$=h
_.dl$=i
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
_.dx=$},a3Y:function a3Y(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
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
_.a=x},aca:function aca(d,e,f){this.f=d
this.d=e
this.a=f},a97:function a97(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bHx(d){return new A.a96(d,null)},
a96:function a96(d,e){this.c=d
this.a=e},
aNJ:function aNJ(d){this.a=d},
I4:function I4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b5N:function b5N(d,e){this.a=d
this.b=e},
b5M:function b5M(d,e){this.a=d
this.b=e},
b5L:function b5L(d,e){this.a=d
this.b=e}},E
B=c[0]
C=c[2]
D=c[8]
A=a.updateHolder(c[7],A)
E=c[12]
A.aUT.prototype={
aiM(d){var x=this.c
return d.wO(this.d,x,x)},
l(d){var x=this
return"SliverGridGeometry("+C.h.bb(B.b(["scrollOffset: "+B.o(x.a),"crossAxisOffset: "+B.o(x.b),"mainAxisExtent: "+B.o(x.c),"crossAxisExtent: "+B.o(x.d)],y.s),", ")+")"}}
A.aUU.prototype={}
A.aUV.prototype={
aj_(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.n.eX(d/x)-1)
return 0},
axG(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Li(d){var x=this,w=x.a,v=C.m.b0(d,w)
return new A.aUT(C.m.dW(d,w)*x.b,x.axG(v*x.c),x.d,x.e)},
a9F(d){var x
if(d===0)return 0
x=this.b
return x*(C.m.dW(d-1,this.a)+1)-(x-this.d)}}
A.aUR.prototype={}
A.aUS.prototype={
W2(d){var x=Math.max(0,d.w-36)/4,w=x/1
return new A.aUV(4,w+12,x+12,w,x,B.IT(d.x))}}
A.Gc.prototype={
l(d){return"crossAxisOffset="+B.o(this.w)+"; "+this.anu(0)}}
A.aaD.prototype={
hj(d){if(!(d.b instanceof A.Gc))d.b=new A.Gc(!1,null,null)},
sajv(d){var x,w,v=this
if(v.fC===d)return
x=B.E(d)
w=B.E(v.fC)
if(x!==w)v.ah()
v.fC=d},
x_(d){var x=d.b
x.toString
x=y.w.a(x).w
x.toString
return x},
c0(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.S.a(B.F.prototype.ga8.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.fC.W2(a8)
t=u.b
s=t>1e-10?u.a*C.n.dW(w,t):0
r=isFinite(v)?u.aj_(v):a7
if(a6.av$!=null){q=a6.a9e(s)
a6.u1(q,r!=null?a6.a9f(r):0)}else a6.u1(0,0)
p=u.Li(s)
if(a6.av$==null)if(!a6.QF(s,p.a)){o=u.a9F(a9.gwZ())
a6.dy=B.iE(a7,a7,!1,a7,a7,o,0,0,0,o,a7,a7)
a9.ue()
return}n=p.a
m=n+p.c
t=a6.av$
t.toString
t=t.b
t.toString
l=y.D
t=l.a(t).b
t.toString
k=t-1
t=y.w
j=a7
for(;k>=s;--k){i=u.Li(k)
h=i.c
g=a6.acR(a8.wO(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.av$
h.toString
h.hQ(p.aiM(a8))
j=a6.av$
h=j.b
h.toString
t.a(h)
h.a=n
h.w=p.b}h=j.b
h.toString
h=l.a(h).b
h.toString
k=h+1
h=B.q(a6).i("aG.1")
f=r!=null
while(!0){if(!(!f||k<=r)){d=!1
break}i=u.Li(k)
e=i.c
a0=a8.wO(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).b1$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.acP(a0,j)
if(g==null){d=!0
break}}else g.hQ(a0)
a1=g.b
a1.toString
t.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
m=Math.max(m,a2+e);++k
j=g}t=a6.dl$
t.toString
t=t.b
t.toString
t=l.a(t).b
t.toString
a3=d?m:a9.SA(a8,s,t,n,m)
a4=a6.tW(a8,Math.min(x,n),m)
a5=a6.wU(a8,n,m)
a6.dy=B.iE(a5,a7,a3>a4||x>0||a8.f!==0,a7,a7,a3,0,a4,0,a3,a7,a7)
if(a3===m)a9.R8=!0
a9.ue()}}
A.a3Y.prototype={
a9_(d){return new A.aca(this.rx,this.ry,null)}}
A.aca.prototype={
b7(d){var x=new A.aaD(this.f,y.F.a(d),B.r(y.q,y.x),0,null,null,B.at(y.v))
x.b6()
return x},
bg(d,e){e.sajv(this.f)},
Sz(d,e,f,g,h){var x
this.anv(d,e,f,g,h)
x=this.f.W2(d).a9F(this.d.gxB())
return x}}
A.a97.prototype={
C(d){var x=null,w=B.a2(d),v=B.db(new B.aA(C.yg,B.cX(B.n9(this.c,x,x,x,x,C.h1,C.eI,x,x),x,x),x),1),u=w.ok.w
u=u==null?x:u.jz(C.K,C.bV)
return B.dF(!1,C.at,!0,x,B.eh(C.aS,B.kA(!0,B.bg(B.b([v,new B.aA(C.adl,B.al(this.d,2,C.bn,x,x,u,C.bi,x,x),x)],y.p),C.ae,C.O,C.V),!0,C.aH,!0),C.av,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x),C.a_,C.P,0,x,x,x,x,x,C.bA)}}
A.a96.prototype={
C(d){return B.dR(this.c,null,new A.aNJ(this),y.W,y.B)}}
A.I4.prototype={
C(d){return B.eB(new A.b5N(this,C.b2r))},
aL8(d){var x
if(d==="assets/logo_probox_studio.png")return"Probox Studio"
x=$.bwZ().h(0,d)
return x==null?"":x}}
var z=a.updateTypes(["I4(H,mn)"])
A.aNJ.prototype={
$2(d,e){var x=this.a.c
return new A.I4(e.a,x.gaXz(),x.gaOn(),null)},
$S:z+0}
A.b5N.prototype={
$2(d,e){var x=null,w=this.a,v=this.b,u=B.b([D.bkO(new A.a3Y(E.a8s,new B.Gb(new A.b5M(w,v),49,!0,!0,!0,x),C.aH,C.bv,!1,x,x,C.xc,x,!1,x,0,x,49,C.hL,C.av,x,x,C.a9,C.aS,x),e.d)],y.p),t=w.c
if(t!=null){v=v[t]
u.push(B.iz(0,new A.a97(v,w.aL8(v),w.e,x),x))}return B.dV(C.bS,u,C.a9,C.bs)},
$S:914}
A.b5M.prototype={
$2(d,e){var x=null,w=this.b[e],v=B.bc(14),u=B.bc(14),t=B.b([new B.cW(0,C.bK,C.P.aC(0.18),C.vD,8)],y.V)
return B.dF(!1,C.at,!0,x,B.iZ(!1,v,!0,B.ck(B.n9(w,B.bc(14),x,x,x,C.bM,C.er,x,x),new B.bx(x,x,x,u,t,x,C.ad),C.ap),x,!0,x,x,x,x,x,x,x,x,new A.b5L(this.a,e),x,x,x,x,x,x,x),C.a_,C.al,0,x,x,x,x,x,C.bA)},
$S:915}
A.b5L.prototype={
$0(){return this.a.d.$1(this.b)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.J,[A.aUT,A.aUU,A.aUR])
w(A.aUV,A.aUU)
w(A.aUS,A.aUR)
w(A.Gc,B.hD)
w(A.aaD,B.pt)
w(A.a3Y,D.K2)
w(A.aca,B.pD)
x(B.W,[A.a97,A.a96,A.I4])
x(B.xm,[A.aNJ,A.b5N,A.b5M])
w(A.b5L,B.tJ)})()
B.ID(b.typeUniverse,JSON.parse('{"Gc":{"hD":[],"fI":["K"],"ny":[],"dM":[]},"aaD":{"pt":[],"cZ":[],"aG":["K","hD"],"F":[],"aD":[],"aG.1":"hD","aG.0":"K"},"a3Y":{"W":[],"d":[]},"aca":{"pD":[],"aE":[],"d":[]},"a97":{"W":[],"d":[]},"I4":{"W":[],"d":[]},"a96":{"W":[],"d":[]}}'))
var y=(function rtii(){var x=B.a_
return{v:x("fH"),V:x("t<cW>"),s:x("t<l>"),p:x("t<d>"),W:x("rp"),B:x("mn"),x:x("K"),S:x("pC"),w:x("Gc"),F:x("Ae"),D:x("hD"),q:x("m")}})();(function constants(){E.a8s=new A.aUS()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bZ3","bwZ",()=>{var w,v,u,t,s=B.a_("l")
s=B.r(s,s)
for(w=B.bFV(C.Ai,!0,B.a_("bQ")),C.h.K(w,C.RZ),v=w.length,u=0;u<w.length;w.length===v||(0,B.w)(w),++u){t=w[u]
s.j(0,t.b,t.c)}return s})})()};
(a=>{a["s23P6tArrl8rYFO+qNsSzIiyd7s="]=a.current})($__dart_deferred_initializers__);