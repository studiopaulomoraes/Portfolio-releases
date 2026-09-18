((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={aXp:function aXp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aXq:function aXq(){},aXr:function aXr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},aXn:function aXn(){},aXo:function aXo(){},GX:function GX(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.xM$=d
_.dP$=e
_.b3$=f
_.a=null},abT:function abT(d,e,f,g,h,i,j){var _=this
_.fH=d
_.y1=e
_.y2=f
_.dZ$=g
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
_.dx=$},a5b:function a5b(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
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
_.a=x},ads:function ads(d,e,f){this.f=d
this.d=e
this.a=f},aae:function aae(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bKY(d){return new A.aad(d,null)},
aad:function aad(d,e){this.c=d
this.a=e},
aPC:function aPC(d){this.a=d},
IO:function IO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8y:function b8y(d,e){this.a=d
this.b=e},
b8x:function b8x(d,e){this.a=d
this.b=e},
b8w:function b8w(d,e){this.a=d
this.b=e}},D,E,F
B=c[0]
C=c[2]
A=a.updateHolder(c[7],A)
D=c[16]
E=c[11]
F=c[9]
A.aXp.prototype={
akE(d){var x=this.c
return d.wT(this.d,x,x)},
k(d){var x=this
return"SliverGridGeometry("+C.h.b6(B.b(["scrollOffset: "+B.o(x.a),"crossAxisOffset: "+B.o(x.b),"mainAxisExtent: "+B.o(x.c),"crossAxisExtent: "+B.o(x.d)],y.s),", ")+")"}}
A.aXq.prototype={}
A.aXr.prototype={
akS(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.o.eZ(d/x)-1)
return 0},
azG(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
LX(d){var x=this,w=x.a,v=C.m.b2(d,w)
return new A.aXp(C.m.ec(d,w)*x.b,x.azG(v*x.c),x.d,x.e)},
abh(d){var x
if(d===0)return 0
x=this.b
return x*(C.m.ec(d-1,this.a)+1)-(x-this.d)}}
A.aXn.prototype={}
A.aXo.prototype={
X5(d){var x=Math.max(0,d.w-36)/4,w=x/1
return new A.aXr(4,w+12,x+12,w,x,B.JD(d.x))}}
A.GX.prototype={
k(d){return"crossAxisOffset="+B.o(this.w)+"; "+this.apv(0)}}
A.abT.prototype={
hm(d){if(!(d.b instanceof A.GX))d.b=new A.GX(!1,null,null)},
salo(d){var x,w,v=this
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
u=a6.fH.X5(a8)
t=u.b
s=t>1e-10?u.a*C.o.ec(w,t):0
r=isFinite(v)?u.akS(v):a7
if(a6.aC$!=null){q=a6.aaR(s)
a6.u9(q,r!=null?a6.aaS(r):0)}else a6.u9(0,0)
p=u.LX(s)
if(a6.aC$==null)if(!a6.Rn(s,p.a)){o=u.abh(a9.gx5())
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
for(;k>=s;--k){i=u.LX(k)
h=i.c
g=a6.aer(a8.wT(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.aC$
h.toString
h.hX(p.akE(a8))
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
break}i=u.LX(k)
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
if(a1){g=a6.aep(a0,j)
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
a3=d?m:a9.Tn(a8,s,t,n,m)
a4=a6.u3(a8,Math.min(x,n),m)
a5=a6.wZ(a8,n,m)
a6.dy=B.iR(a5,a7,a3>a4||x>0||a8.f!==0,a7,a7,a3,0,a4,0,a3,a7,a7)
if(a3===m)a9.R8=!0
a9.ui()}}
A.a5b.prototype={
aaC(d){return new A.ads(this.rx,this.ry,null)}}
A.ads.prototype={
b9(d){var x=new A.abT(this.f,y.F.a(d),B.q(y.q,y.x),0,null,null,B.aw(y.v))
x.b8()
return x},
bf(d,e){e.salo(this.f)},
Tm(d,e,f,g,h){var x
this.apw(d,e,f,g,h)
x=this.f.X5(d).abh(this.d.gxG())
return x}}
A.aae.prototype={
C(d){var x=null,w=B.Z(d),v=B.cV(new B.ap(C.yF,B.cS(B.nj(this.c,x,x,x,x,C.hd,C.eU,x,x),x,x),x),1),u=w.ok.w
u=u==null?x:u.j3(C.J,C.bo)
return B.dD(!1,C.aw,!0,x,B.e5(C.aP,B.jf(!0,B.bc(B.b([v,new B.ap(C.adY,B.ak(this.d,2,C.b6,x,x,u,C.bf,x,x),x)],y.p),C.aa,C.M,C.V),!0,C.ag,!0),C.ax,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,C.bq),C.X,C.P,0,x,x,x,x,x,C.bH)}}
A.aad.prototype={
C(d){return B.ds(this.c,null,new A.aPC(this),y.W,y.B)}}
A.IO.prototype={
C(d){return B.e7(new A.b8y(this,C.b31))},
aNE(d){var x
if(d==="assets/logo_probox_studio.png")return"Probox Studio"
x=$.bAh().h(0,d)
return x==null?"":x}}
var z=a.updateTypes(["IO(F,mz)"])
A.aPC.prototype={
$2(d,e){var x=this.a.c
return new A.IO(e.a,x.gb_o(),x.gaQZ(),null)},
$S:z+0}
A.b8y.prototype={
$2(d,e){var x=null,w=this.a,v=this.b,u=B.b([F.bnV(new A.a5b(D.a90,new B.GW(new A.b8x(w,v),49,!0,!0,!0,x),C.ag,C.bz,!1,x,x,C.xA,x,!1,x,0,x,49,C.hX,C.ax,x,x,C.a6,C.aP,x),e.d)],y.p),t=w.c
if(t!=null){v=v[t]
u.push(B.hc(0,new A.aae(v,w.aNE(v),w.e,x),x))}return B.dF(C.bD,u,C.a6,C.br)},
$S:948}
A.b8x.prototype={
$2(d,e){var x=null,w=this.b[e],v=B.b7(14),u=B.b7(14),t=B.b([new B.cN(0,C.bA,C.P.av(0.18),C.vY,8)],y.V)
return B.dD(!1,C.aw,!0,x,B.iC(!1,v,!0,B.c8(B.nj(w,B.b7(14),x,x,x,C.bR,C.eC,x,x),new B.bh(x,x,x,u,t,x,C.a7),C.am),x,!0,x,x,x,x,x,x,x,x,new A.b8w(this.a,e),x,x,x,x,x,x,x),C.X,C.ah,0,x,x,x,x,x,C.bH)},
$S:949}
A.b8w.prototype={
$0(){return this.a.d.$1(this.b)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.J,[A.aXp,A.aXq,A.aXn])
w(A.aXr,A.aXq)
w(A.aXo,A.aXn)
w(A.GX,B.hM)
w(A.abT,B.pB)
w(A.a5b,E.KO)
w(A.ads,B.pM)
x(B.U,[A.aae,A.aad,A.IO])
x(B.qG,[A.aPC,A.b8y,A.b8x])
w(A.b8w,B.oG)})()
B.tw(b.typeUniverse,JSON.parse('{"GX":{"hM":[],"fQ":["K"],"nF":[],"dW":[]},"abT":{"pB":[],"d5":[],"aI":["K","hM"],"H":[],"aF":[],"aI.1":"hM","aI.0":"K"},"a5b":{"U":[],"d":[]},"ads":{"pM":[],"aG":[],"d":[]},"aae":{"U":[],"d":[]},"IO":{"U":[],"d":[]},"aad":{"U":[],"d":[]}}'))
var y=(function rtii(){var x=B.a2
return{v:x("fy"),V:x("u<cN>"),s:x("u<k>"),p:x("u<d>"),W:x("rA"),B:x("mz"),x:x("K"),S:x("pL"),w:x("GX"),F:x("AB"),D:x("hM"),q:x("n")}})();(function constants(){D.a90=new A.aXo()})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c29","bAh",()=>{var w,v,u,t,s=B.a2("k")
s=B.q(s,s)
for(w=B.bJk(C.AK,!0,B.a2("bT")),C.h.J(w,C.Sx),v=w.length,u=0;u<w.length;w.length===v||(0,B.w)(w),++u){t=w[u]
s.j(0,t.b,t.c)}return s})})()};
(a=>{a["t4qKVgz3T/e08qEaOm+DfECYO18="]=a.current})($__dart_deferred_initializers__);