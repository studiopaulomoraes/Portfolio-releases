((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={aXk:function aXk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aXl:function aXl(){},aXm:function aXm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},aXi:function aXi(){},aXj:function aXj(){},GU:function GU(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.xM$=d
_.dP$=e
_.b3$=f
_.a=null},abR:function abR(d,e,f,g,h,i,j){var _=this
_.fH=d
_.y1=e
_.y2=f
_.dY$=g
_.aC$=h
_.dB$=i
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
_.dx=$},a59:function a59(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
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
_.a=x},adq:function adq(d,e,f){this.f=d
this.d=e
this.a=f},aad:function aad(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bKU(d){return new A.aac(d,null)},
aac:function aac(d,e){this.c=d
this.a=e},
aPu:function aPu(d){this.a=d},
IL:function IL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8w:function b8w(d,e){this.a=d
this.b=e},
b8v:function b8v(d,e){this.a=d
this.b=e},
b8u:function b8u(d,e){this.a=d
this.b=e}},D,E,F
B=c[0]
C=c[2]
A=a.updateHolder(c[7],A)
D=c[16]
E=c[11]
F=c[9]
A.aXk.prototype={
akA(d){var x=this.c
return d.wT(this.d,x,x)},
k(d){var x=this
return"SliverGridGeometry("+C.h.b6(B.b(["scrollOffset: "+B.o(x.a),"crossAxisOffset: "+B.o(x.b),"mainAxisExtent: "+B.o(x.c),"crossAxisExtent: "+B.o(x.d)],y.s),", ")+")"}}
A.aXl.prototype={}
A.aXm.prototype={
akO(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.o.eZ(d/x)-1)
return 0},
azA(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
LV(d){var x=this,w=x.a,v=C.m.b2(d,w)
return new A.aXk(C.m.eb(d,w)*x.b,x.azA(v*x.c),x.d,x.e)},
abd(d){var x
if(d===0)return 0
x=this.b
return x*(C.m.eb(d-1,this.a)+1)-(x-this.d)}}
A.aXi.prototype={}
A.aXj.prototype={
X1(d){var x=Math.max(0,d.w-36)/4,w=x/1
return new A.aXm(4,w+12,x+12,w,x,B.JA(d.x))}}
A.GU.prototype={
k(d){return"crossAxisOffset="+B.o(this.w)+"; "+this.apq(0)}}
A.abR.prototype={
hm(d){if(!(d.b instanceof A.GU))d.b=new A.GU(!1,null,null)},
sali(d){var x,w,v=this
if(v.fH===d)return
x=B.E(d)
w=B.E(v.fH)
if(x!==w)v.ai()
v.fH=d},
x6(d){var x=d.b
x.toString
x=y.w.a(x).w
x.toString
return x},
c2(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.S.a(B.H.prototype.gaa.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.fH.X1(a8)
t=u.b
s=t>1e-10?u.a*C.o.eb(w,t):0
r=isFinite(v)?u.akO(v):a7
if(a6.aC$!=null){q=a6.aaN(s)
a6.u9(q,r!=null?a6.aaO(r):0)}else a6.u9(0,0)
p=u.LV(s)
if(a6.aC$==null)if(!a6.Rk(s,p.a)){o=u.abd(a9.gx5())
a6.dy=B.iR(a7,a7,!1,a7,a7,o,0,0,0,o,a7,a7)
a9.ui()
return}n=p.a
m=n+p.c
t=a6.aC$
t.toString
t=t.b
t.toString
l=y.D
t=l.a(t).b
t.toString
k=t-1
t=y.w
j=a7
for(;k>=s;--k){i=u.LV(k)
h=i.c
g=a6.aem(a8.wT(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.aC$
h.toString
h.hX(p.akA(a8))
j=a6.aC$
h=j.b
h.toString
t.a(h)
h.a=n
h.w=p.b}h=j.b
h.toString
h=l.a(h).b
h.toString
k=h+1
h=B.p(a6).i("aI.1")
f=r!=null
while(!0){if(!(!f||k<=r)){d=!1
break}i=u.LV(k)
e=i.c
a0=a8.wT(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).b3$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.aek(a0,j)
if(g==null){d=!0
break}}else g.hX(a0)
a1=g.b
a1.toString
t.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
m=Math.max(m,a2+e);++k
j=g}t=a6.dB$
t.toString
t=t.b
t.toString
t=l.a(t).b
t.toString
a3=d?m:a9.Tk(a8,s,t,n,m)
a4=a6.u3(a8,Math.min(x,n),m)
a5=a6.wZ(a8,n,m)
a6.dy=B.iR(a5,a7,a3>a4||x>0||a8.f!==0,a7,a7,a3,0,a4,0,a3,a7,a7)
if(a3===m)a9.R8=!0
a9.ui()}}
A.a59.prototype={
aay(d){return new A.adq(this.rx,this.ry,null)}}
A.adq.prototype={
b9(d){var x=new A.abR(this.f,y.F.a(d),B.r(y.q,y.x),0,null,null,B.aw(y.v))
x.b8()
return x},
bf(d,e){e.sali(this.f)},
Tj(d,e,f,g,h){var x
this.apr(d,e,f,g,h)
x=this.f.X1(d).abd(this.d.gxG())
return x}}
A.aad.prototype={
C(d){var x=null,w=B.Z(d),v=B.cV(new B.ap(C.yF,B.cS(B.nk(this.c,x,x,x,x,C.hd,C.eU,x,x),x,x),x),1),u=w.ok.w
u=u==null?x:u.j3(C.J,C.bo)
return B.dD(!1,C.aw,!0,x,B.e5(C.aP,B.jf(!0,B.bc(B.b([v,new B.ap(C.adX,B.ai(this.d,2,C.b6,x,x,u,C.bf,x,x),x)],y.p),C.aa,C.M,C.V),!0,C.ag,!0),C.ax,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,C.bq),C.X,C.P,0,x,x,x,x,x,C.bH)}}
A.aac.prototype={
C(d){return B.dr(this.c,null,new A.aPu(this),y.W,y.B)}}
A.IL.prototype={
C(d){return B.e7(new A.b8w(this,C.b30))},
aNy(d){var x
if(d==="assets/logo_probox_studio.png")return"Probox Studio"
x=$.bAe().h(0,d)
return x==null?"":x}}
var z=a.updateTypes(["IL(F,mz)"])
A.aPu.prototype={
$2(d,e){var x=this.a.c
return new A.IL(e.a,x.gb_g(),x.gaQT(),null)},
$S:z+0}
A.b8w.prototype={
$2(d,e){var x=null,w=this.a,v=this.b,u=B.b([F.bnQ(new A.a59(D.a9_,new B.GT(new A.b8v(w,v),49,!0,!0,!0,x),C.ag,C.bz,!1,x,x,C.xA,x,!1,x,0,x,49,C.hX,C.ax,x,x,C.a6,C.aP,x),e.d)],y.p),t=w.c
if(t!=null){v=v[t]
u.push(B.hc(0,new A.aad(v,w.aNy(v),w.e,x),x))}return B.dF(C.bD,u,C.a6,C.br)},
$S:949}
A.b8v.prototype={
$2(d,e){var x=null,w=this.b[e],v=B.b7(14),u=B.b7(14),t=B.b([new B.cM(0,C.bA,C.P.av(0.18),C.vY,8)],y.V)
return B.dD(!1,C.aw,!0,x,B.iC(!1,v,!0,B.c8(B.nk(w,B.b7(14),x,x,x,C.bR,C.eB,x,x),new B.bh(x,x,x,u,t,x,C.a7),C.am),x,!0,x,x,x,x,x,x,x,x,new A.b8u(this.a,e),x,x,x,x,x,x,x),C.X,C.ah,0,x,x,x,x,x,C.bH)},
$S:950}
A.b8u.prototype={
$0(){return this.a.d.$1(this.b)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.I,[A.aXk,A.aXl,A.aXi])
w(A.aXm,A.aXl)
w(A.aXj,A.aXi)
w(A.GU,B.hM)
w(A.abR,B.pB)
w(A.a59,E.KL)
w(A.adq,B.pM)
x(B.U,[A.aad,A.aac,A.IL])
x(B.qG,[A.aPu,A.b8w,A.b8v])
w(A.b8u,B.oG)})()
B.tv(b.typeUniverse,JSON.parse('{"GU":{"hM":[],"fQ":["K"],"nG":[],"dW":[]},"abR":{"pB":[],"d5":[],"aI":["K","hM"],"H":[],"aF":[],"aI.1":"hM","aI.0":"K"},"a59":{"U":[],"d":[]},"adq":{"pM":[],"aG":[],"d":[]},"aad":{"U":[],"d":[]},"IL":{"U":[],"d":[]},"aac":{"U":[],"d":[]}}'))
var y=(function rtii(){var x=B.a2
return{v:x("fz"),V:x("u<cM>"),s:x("u<j>"),p:x("u<d>"),W:x("rz"),B:x("mz"),x:x("K"),S:x("pL"),w:x("GU"),F:x("Az"),D:x("hM"),q:x("n")}})();(function constants(){D.a9_=new A.aXj()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c26","bAe",()=>{var w,v,u,t,s=B.a2("j")
s=B.r(s,s)
for(w=B.bJf(C.AK,!0,B.a2("bT")),C.h.L(w,C.Sx),v=w.length,u=0;u<w.length;w.length===v||(0,B.w)(w),++u){t=w[u]
s.j(0,t.b,t.c)}return s})})()};
(a=>{a["FSwjtWHynkLdAs897Yr92rmA0d4="]=a.current})($__dart_deferred_initializers__);