((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={aez:function aez(d,e,f){this.c=d
this.r=e
this.a=f},
aGZ(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.ai(0,e)
w=f.ai(0,e)
return e.Y(0,w.nO(A.R(x.uj(w)/t,0,1)))},
bH8(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.ai(0,q),o=e.b,n=o.ai(0,q),m=e.d,l=m.ai(0,q),k=p.uj(n),j=n.uj(n),i=p.uj(l),h=l.uj(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.aGZ(d,q,o),B.aGZ(d,o,x),B.aGZ(d,x,m),B.aGZ(d,m,q)]
v=A.bU()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.ba()},
bMG(){var x=new A.bb(new Float64Array(16))
x.ds()
return new B.ae8(x,$.aM())},
buF(d,e,f){return Math.log(f/d)/Math.log(e/100)},
bvf(d,e){var x,w,v,u,t,s,r=new A.bb(new Float64Array(16))
r.cj(d)
r.jD(r)
x=e.a
w=e.b
v=new A.ct(new Float64Array(3))
v.eB(x,w,0)
v=r.lb(v)
u=e.c
t=new A.ct(new Float64Array(3))
t.eB(u,w,0)
t=r.lb(t)
w=e.d
s=new A.ct(new Float64Array(3))
s.eB(u,w,0)
s=r.lb(s)
u=new A.ct(new Float64Array(3))
u.eB(x,w,0)
u=r.lb(u)
x=new A.ct(new Float64Array(3))
x.cj(v)
w=new A.ct(new Float64Array(3))
w.cj(t)
v=new A.ct(new Float64Array(3))
v.cj(s)
t=new A.ct(new Float64Array(3))
t.cj(u)
return new B.Pz(x,w,v,t)},
bux(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.D,w=0;w<4;++w){v=r[w]
u=B.bH8(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.h(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.h(x.a,t)}return B.bk5(x)},
bk5(d){return new A.h(A.bkt(C.o.aK(d.a,9)),A.bkt(C.o.aK(d.b,9)))},
bQT(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.cB:C.bz},
Nf:function Nf(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.x=h
_.at=i
_.ax=j
_.a=k},
UN:function UN(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.dU$=f
_.bv$=g
_.c=_.a=null},
b53:function b53(){},
akF:function akF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ae8:function ae8(d,e){var _=this
_.a=d
_.V$=0
_.az$=e
_.aA$=_.bi$=0},
Ur:function Ur(d,e){this.a=d
this.b=e},
aO2:function aO2(d,e){this.a=d
this.b=e},
Yp:function Yp(){},
bmt(d,e,f,g){return new B.JY(f,e,d,g,null)},
JY:function JY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
ahg:function ahg(d,e){var _=this
_.d=null
_.e=0
_.f=!1
_.r=0
_.eu$=d
_.bM$=e
_.c=_.a=null},
b_f:function b_f(d){this.a=d},
b_h:function b_h(d){this.a=d},
b_g:function b_g(d){this.a=d},
Y7:function Y7(){},
ay7:function ay7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w
_.db=x
_.dx=a0
_.dy=a1
_.fr=a2},
bJT(){var x,w=null,v=new B.aPt(),u=A.ex(w,w,C.fx,w,w,w,w,w,w,w,w,11,w,w,w,w,1.5,!0,w,w,w,w,w,w,w,w),t=v.$2(18,C.av),s=v.$2(14,C.av),r=v.$2(12,C.bn),q=v.$2(11,C.bn),p=v.$2(11,C.bn)
v=v.$2(11,C.bn)
x=u.ea(C.av)
return E.bhW(w,8,w,C.b0,w,w,w,w,C.b0,w,w,w,u.aQC(F.G8),t,C.b0,D.adt,s,C.b0,D.ado,r,C.b0,D.adl,q,C.b0,D.adw,p,C.b0,w,v,C.b0,w,new A.bh(w,w,new A.e9(new A.bp(C.P.au(0.12),1,C.af,-1),C.X,C.X,C.X),w,w,w,C.a7),w,u,w,18,C.b0,u,w,x,w,w,w,w,w,w,w,w,w,w,F.CD,C.b0,w,w,C.b0)},
aPt:function aPt(){},
aPB(d){if(d<600)return D.BV
if(d<960)return D.bgR
return D.bgS},
bJZ(d){var x
switch(B.aPB(d).a){case 0:x=0
break
case 1:x=152
break
case 2:x=Math.min(220,d*0.2)
break
default:x=null}return x},
Pr:function Pr(d,e){this.a=d
this.b=e},
bJX(d,e){return new B.Pq(e,d,null)},
Pq:function Pq(d,e,f){this.c=d
this.d=e
this.a=f},
an2:function an2(){this.d=!1
this.c=this.a=null},
b7y:function b7y(d,e,f){this.a=d
this.b=e
this.c=f},
b7x:function b7x(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b7u:function b7u(d,e,f){this.a=d
this.b=e
this.c=f},
b7v:function b7v(d,e,f){this.a=d
this.b=e
this.c=f},
b7w:function b7w(d){this.a=d},
aaa:function aaa(d,e,f){this.c=d
this.d=e
this.a=f},
aPy:function aPy(d,e,f){this.a=d
this.b=e
this.c=f},
agG:function agG(d,e,f){this.c=d
this.d=e
this.a=f},
brg(d){return 76+A.bF(d,C.xe,y.w).w.w.d+16},
bJW(d){if(d)return 54
return 92},
aab:function aab(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
ajz:function ajz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bJY(d,e){var x=d.r,w=x==null?null:C.n.am(x)
if(w!=null&&w.length!==0)return w
return e.gagj()},
aac:function aac(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aPA:function aPA(d,e){this.a=d
this.b=e},
VH:function VH(d,e){this.c=d
this.a=e},
It:function It(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
an3:function an3(){this.d=!1
this.c=this.a=null},
b7B:function b7B(d){this.a=d},
b7A:function b7A(d){this.a=d},
b7C:function b7C(d){this.a=d},
b7z:function b7z(d){this.a=d},
Fq:function Fq(d,e){this.c=d
this.a=e},
aPG:function aPG(d){this.a=d},
Pz:function Pz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
brQ(d){return new A.ak(1/0,1/0,d,null)},
bnO(a5,a6,a7){var x,w,v,u,t=a5.gVg(),s=a5.gVh(),r=a5.Vi(a7),q=a5.gVe(),p=a5.gVd(),o=a5.gVa(),n=a5.gV9(),m=a5.gV8(),l=a5.gV7(),k=a5.gVc(),j=a5.gVb(),i=a5.gV6(),h=a5.gL_(),g=a5.gKZ(),f=a5.gagb(),e=a5.gaga(),d=a5.gagf(),a0=a5.gagm(),a1=a5.gagi(),a2=a5.agx(a7),a3=y.N,a4=A.r(a3,a3)
for(x=0;x<12;++x){w=C.cL[x]
a4.j(0,w.b,A.acF(a5,w))}v=A.r(a3,a3)
for(x=0;x<2;++x){u=C.PF[x]
v.j(0,u.b,A.biM(a5,u))}return new B.ay7(a6,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a4,v,A.ah(["degree",a5.gSU(),"postGraduation",a5.gSV()],a3,a3))}},D,E,F
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[17]
E=c[10]
F=c[15]
B.aez.prototype={
C(d){var x,w,v,u,t,s,r=null
A.Z(d)
x=A.bh7(d)
w=A.bji(d)
v=x.c
if(v==null){u=w.c
u.toString
v=u}t=x.d
if(t==null){u=w.d
u.toString
t=u}s=x.e
if(s==null){u=w.e
u.toString
s=u}u=x.f
if(u==null)u=w.f
return new A.ak(this.c,r,A.cR(A.jw(r,r,C.Y,r,r,new A.bh(r,r,new A.e9(C.X,C.X,C.X,A.boq(d,this.r,v)),u,r,r,C.a7),r,r,new A.eq(0,t,0,s),r,r,r,v),r,r),r)}}
B.Nf.prototype={
aq(){var x=null,w=y.z
return new B.UN(new A.bx(x,w),new A.bx(x,w),x,x)}}
B.UN.prototype={
gcU(){var x=this.d
if(x===$){this.a.toString
x=B.bMG()
this.d=x}return x},
gF4(){var x,w=$.a6.ao$.x.h(0,this.e).ga2()
w.toString
x=y.x.a(w).gu(0)
return this.a.f.JR(new A.F(0,0,0+x.a,0+x.b))},
gHF(){var x=$.a6.ao$.x.h(0,this.f).ga2()
x.toString
x=y.x.a(x).gu(0)
return new A.F(0,0,0+x.a,0+x.b)},
wk(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.D)){x=new A.bb(new Float64Array(16))
x.cj(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.bb(new Float64Array(16))
w.cj(a0)
w.dD(a1.a,a1.b,0,1)
v=B.bvf(w,d.gHF())
if(d.gF4().gae6(0))return w
x=d.gF4()
u=d.ay
t=new A.bb(new Float64Array(16))
t.ds()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.dD(q/2,o/2,0,1)
t.yx(u)
t.dD(-q/2,-o/2,0,1)
u=new A.ct(new Float64Array(3))
u.eB(r,x,0)
u=t.lb(u)
q=new A.ct(new Float64Array(3))
q.eB(s,x,0)
q=t.lb(q)
x=new A.ct(new Float64Array(3))
x.eB(s,p,0)
x=t.lb(x)
s=new A.ct(new Float64Array(3))
s.eB(r,p,0)
s=t.lb(s)
r=new Float64Array(3)
new A.ct(r).cj(u)
u=new Float64Array(3)
new A.ct(u).cj(q)
q=new Float64Array(3)
new A.ct(q).cj(x)
x=new Float64Array(3)
new A.ct(x).cj(s)
s=r[0]
p=u[0]
o=q[0]
n=x[0]
m=Math.min(s,Math.min(p,Math.min(o,n)))
r=r[1]
u=u[1]
q=q[1]
x=x[1]
l=Math.min(r,Math.min(u,Math.min(q,x)))
k=Math.max(s,Math.max(p,Math.max(o,n)))
j=Math.max(r,Math.max(u,Math.max(q,x)))
x=new A.ct(new Float64Array(3))
x.eB(m,l,0)
u=new A.ct(new Float64Array(3))
u.eB(k,l,0)
s=new A.ct(new Float64Array(3))
s.eB(k,j,0)
r=new A.ct(new Float64Array(3))
r.eB(m,j,0)
q=new A.ct(new Float64Array(3))
q.cj(x)
x=new A.ct(new Float64Array(3))
x.cj(u)
u=new A.ct(new Float64Array(3))
u.cj(s)
s=new A.ct(new Float64Array(3))
s.cj(r)
i=new B.Pz(q,x,u,s)
h=B.bux(i,v)
if(h.l(0,C.D))return w
x=w.E_().a
u=x[0]
x=x[1]
g=a0.vj()
u-=h.a*g
x-=h.b*g
f=new A.bb(new Float64Array(16))
f.cj(a0)
s=new A.ct(new Float64Array(3))
s.eB(u,x,0)
f.Xt(s)
e=B.bux(i,B.bvf(f,d.gHF()))
if(e.l(0,C.D))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.bb(new Float64Array(16))
x.cj(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.bb(new Float64Array(16))
s.cj(a0)
r=new A.ct(new Float64Array(3))
r.eB(u,x,0)
s.Xt(r)
return s},
P6(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.bb(new Float64Array(16))
x.cj(d)
return x}w=q.gcU().a.vj()
x=q.gHF()
v=q.gF4()
u=q.gHF()
t=q.gF4()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.R(s,t.ax,t.at)/w
x=new A.bb(new Float64Array(16))
x.cj(d)
x.nN(r,r,r,1)
return x},
aEE(d,e,f){var x,w,v,u
if(e===0){x=new A.bb(new Float64Array(16))
x.cj(d)
return x}w=this.gcU().la(f)
x=new A.bb(new Float64Array(16))
x.cj(d)
v=w.a
u=w.b
x.dD(v,u,0,1)
x.yx(-e)
x.dD(-v,-u,0,1)
return x},
FG(d){var x
$label0$0:{x=!0
if(D.bvE===d){x=!1
break $label0$0}if(D.xb===d){this.a.toString
break $label0$0}if(D.n5===d||d==null){this.a.toString
break $label0$0}x=null}return x},
a1O(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.xb
else return D.n5},
aFR(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.a()
w=x.r
if(w!=null&&w.a!=null){x.h8(0)
x=v.y
x.sB(0,x.a)
x=v.r
if(x!=null)x.a.T(0,v.gFX())
v.r=null}x=v.z
x===$&&A.a()
w=x.r
if(w!=null&&w.a!=null){x.h8(0)
x=v.z
x.sB(0,x.a)
x=v.w
if(x!=null)x.a.T(0,v.gG0())
v.w=null}v.Q=v.ch=null
v.at=v.gcU().a.vj()
v.as=v.gcU().la(d.b)
v.ax=v.ay},
aFT(d){var x,w,v,u,t,s,r=this,q=r.gcU().a.vj(),p=r.x=d.c,o=r.gcU().la(p),n=r.ch
if(n===D.n5)n=r.ch=r.a1O(d)
else if(n==null){n=r.a1O(d)
r.ch=n}if(!r.FG(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gcU().sB(0,r.P6(r.gcU().a,n*d.d/q))
x=r.gcU().la(p)
n=r.gcU()
w=r.gcU().a
v=r.as
v.toString
n.sB(0,r.wk(w,x.ai(0,v)))
u=r.gcU().la(p)
p=r.as
p.toString
if(!B.bk5(p).l(0,B.bk5(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gcU().sB(0,r.aEE(r.gcU().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.bQT(n,o)}n=r.as
n.toString
s=o.ai(0,n)
r.gcU().sB(0,r.wk(r.gcU().a,s))
r.as=r.gcU().la(p)
break}r.a.toString},
aFP(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(0,m.gFX())
x=m.w
if(x!=null)x.a.T(0,m.gG0())
x=m.y
x===$&&A.a()
x.sB(0,x.a)
x=m.z
x===$&&A.a()
x.sB(0,x.a)
x=m.ch
if(!m.FG(x)){m.Q=null
return}$label0$0:{if(D.n5===x){x=d.a.a
if(x.gdd()<50){m.Q=null
return}w=m.gcU().a.E_().a
v=w[0]
w=w[1]
m.a.toString
u=A.aEu(0.0000135,v,x.a,0)
m.a.toString
t=A.aEu(0.0000135,w,x.b,0)
x=x.gdd()
m.a.toString
s=B.buF(x,0.0000135,10)
x=u.gxP()
r=t.gxP()
q=y.L
p=A.c3(C.h4,m.y,null)
m.r=new A.ab(p,new A.aN(new A.h(v,w),new A.h(x,r),q),q.i("ab<at.T>"))
m.y.e=A.ep(0,C.o.aL(s*1000),0)
p.aj(0,m.gFX())
m.y.cW(0)
break $label0$0}if(D.xb===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gcU().a.vj()
m.a.toString
n=A.aEu(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.buF(w,0.0000135,0.1)
x=n.hI(0,s)
w=y.t
v=A.c3(C.h4,m.z,null)
m.w=new A.ab(v,new A.aN(o,x,w),w.i("ab<at.T>"))
m.z.e=A.ep(0,C.o.aL(s*1000),0)
v.aj(0,m.gG0())
m.z.cW(0)
break $label0$0}break $label0$0}},
aDL(d){var x,w,v,u,t,s,r,q=this,p=d.ge6(),o=d.gc5(d)
if(y.C.b(d)){x=d.gdf(d)===C.cT
if(x)q.a.toString
if(x){q.a.toString
x=o.Y(0,d.glZ())
w=d.glZ()
v=A.zG(d.gcL(d),null,w,x)
if(!q.FG(D.n5)){q.a.toString
return}u=q.gcU().la(p)
t=q.gcU().la(p.ai(0,v))
q.gcU().sB(0,q.wk(q.gcU().a,t.ai(0,u)))
q.a.toString
return}if(d.glZ().b===0)return
x=d.glZ()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.X.b(d))s=d.giO(d)
else return
q.a.toString
if(!q.FG(D.xb))return
u=q.gcU().la(p)
q.gcU().sB(0,q.P6(q.gcU().a,s))
r=q.gcU().la(p)
q.gcU().sB(0,q.wk(q.gcU().a,r.ai(0,u)))
q.a.toString},
aAy(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.a()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.T(0,r.gFX())
r.r=null
q=r.y
q.sB(0,q.a)
return}q=r.gcU().a.E_().a
x=q[0]
q=q[1]
w=r.gcU()
v=r.gcU().a
u=r.gcU()
t=r.r
s=t.b
t=t.a
w.sB(0,r.wk(v,u.la(s.aE(0,t.gB(t))).ai(0,r.gcU().la(new A.h(x,q)))))},
aBT(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.a()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(0,s.gG0())
s.w=null
r=s.z
r.sB(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aE(0,r.gB(r))
r=s.gcU().a.vj()
x=s.gcU()
v=s.x
v===$&&A.a()
u=x.la(v)
s.gcU().sB(0,s.P6(s.gcU().a,w/r))
t=s.gcU().la(s.x)
s.gcU().sB(0,s.wk(s.gcU().a,t.ai(0,u)))},
aD7(){this.aN(new B.b53())},
aP(){var x=this,w=null
x.b4()
x.y=A.cd(w,w,w,w,x)
x.z=A.cd(w,w,w,w,x)
x.gcU().aj(0,x.ga3d())},
bb(d){this.bo(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.a()
w.m()
w=x.z
w===$&&A.a()
w.m()
x.gcU().T(0,x.ga3d())
x.a.toString
w=x.gcU()
w.az$=$.aM()
w.V$=0
x.aqu()},
C(d){var x,w=this,v=null,u=w.a.d,t=w.gcU().a,s=w.a,r=s.c
s=s.w
x=new B.akF(s,w.e,u,!1,t,r,v)
return A.pe(C.e0,A.eg(C.aR,x,C.ax,!1,v,v,v,v,v,v,v,v,v,v,w.gaFO(),w.gaFQ(),w.gaFS(),v,v,v,v,v,v,v,v,v,v,v,!1,new A.h(0,-0.005)),w.f,v,v,v,v,w.gaDK(),v)}}
B.akF.prototype={
C(d){var x=this,w=A.a9a(C.d4,A.H7(x.w,new A.iF(x.c,x.d),null,x.r,!0),1/0,1/0,0,0)
return A.hq(w,x.e,null)}}
B.ae8.prototype={
la(d){var x=this.a,w=new A.bb(new Float64Array(16))
if(w.jD(x)===0)A.a4(A.f7(x,"other","Matrix cannot be inverted"))
x=new A.ct(new Float64Array(3))
x.eB(d.a,d.b,0)
x=w.lb(x).a
return new A.h(x[0],x[1])}}
B.Ur.prototype={
H(){return"_GestureType."+this.b}}
B.aO2.prototype={
H(){return"PanAxis."+this.b}}
B.Yp.prototype={
bS(){this.cZ()
this.cN()
this.fa()},
m(){var x=this,w=x.bv$
if(w!=null)w.T(0,x.geV())
x.bv$=null
x.aV()}}
B.JY.prototype={
aq(){return new B.ahg(null,null)}}
B.ahg.prototype={
bb(d){var x,w=this
w.bo(d)
x=w.a
if(d.c!==x.c||d.e!==x.e||!J.e(d.d,x.d)||d.r!==w.a.r){w.r=0
w.a6Z()}},
aKo(d,e,f){var x=this
if(x.r===e&&x.f===f&&x.e===d)return
x.r=e
x.f=f
x.e=d
$.a6.RG$.push(new B.b_f(x))},
m(){var x=this.d
if(x!=null)x.m()
this.aqc()},
a6Z(){var x,w=this,v=null,u=w.d
if(u==null)u=w.d=A.cd(v,v,v,v,w)
if(!w.f||!w.a.e||w.e<=0){u.h8(0)
u.sB(0,0)
return}u.e=A.ep(0,C.m.a_(C.o.aL(w.e/w.a.r*1000),1500,3e4),0)
x=u.r
if(!(x!=null&&x.a!=null))u.b_K(0)},
C(d){if(this.a.c.length===0)return C.be
return A.e4(new B.b_h(this))}}
B.Y7.prototype={
m(){var x=this,w=x.bM$
if(w!=null)w.T(0,x.ghN())
x.bM$=null
x.aV()},
bS(){this.cZ()
this.cN()
this.hO()}}
B.ay7.prototype={}
B.Pr.prototype={
H(){return"PrinterLayoutMode."+this.b}}
B.Pq.prototype={
aq(){return new B.an2()}}
B.an2.prototype={
ck(){var x,w,v=this
v.dS()
if(v.d)return
v.d=!0
x=v.c
x.toString
x=A.bM(x,C.aq,y.J)
x.toString
w=B.bnO(x,v.c.aw(y.l).r.f.gcX(0),v.a.d)
v.a.c.KM(w,x.gD5())},
C(d){var x,w=A.bM(d,C.aq,y.J)
w.toString
x=B.bnO(w,d.aw(y.l).r.f.gcX(0),this.a.d)
return A.dD(this.a.c,null,new B.b7y(this,w,x),y.B,y.A)}}
B.aaa.prototype={
C(d){var x=this.aGz(d),w=A.Z(d).ax.a===C.aD?C.i6:D.xV
return new A.fu(w,A.e4(new B.aPy(this,x,1122.942857142857)),null)},
aGz(d){var x
switch(B.aPB(A.bF(d,C.h_,y.w).w.a.a).a){case 0:x=8
break
case 1:x=16
break
case 2:x=24
break
default:x=null}return x}}
B.agG.prototype={
C(d){var x=null,w=A.b6(4),v=A.b([new A.cK(0,C.bA,C.P.au(0.18),C.By,18)],y.V)
return new A.ak(794,x,new A.eK(new A.ag(0,1/0,this.d,1/0),A.c7(new A.ap(D.Fz,E.bhV(this.c,!1,B.bJT()),x),new A.bh(C.J,x,x,w,v,x,C.a7),C.am),x),x)}}
B.aab.prototype={
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.bM(d,C.aq,y.J)
n.toString
x=A.Z(d)
w=p.c===D.BV
v=p.e?A.j1(n.gag9(),o,p.x,C.eD):new B.ajz(p.d,p.f,p.r,p.w,n.gagh(),n.gage(),o)
u=w?B.brg(d):A.bF(d,C.ct,y.w).w.r.d+12
n=p.y
if(n==null)n=x.fx
t=x.ch.au(0.25)
s=A.b([new A.cK(0,C.bA,C.P.au(x.ax.a===C.aD?0.35:0.08),F.ZC,10)],y.V)
r=w?16:20
q=w?16:20
return A.c7(new A.ap(new A.af(r,12,q,u),A.cR(v,o,o),o),new A.bh(n,o,new A.e9(new A.bp(t,1,C.af,-1),C.X,C.X,C.X),o,s,o,C.a7),C.am)}}
B.ajz.prototype={
C(d){var x=this,w=null,v=x.c,u=v&&x.d?x.f:w
u=A.j1(x.w,w,u,C.eD)
v=v&&x.d?x.e:w
return A.lN(C.kL,A.b([u,A.j1(x.r,w,v,C.i9)],y.p),C.x1,8,8)}}
B.aac.prototype={
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=A.bM(d,C.aq,y.J)
e.toString
x=A.Z(d)
w=x.ax
v=g.e
u=g.r
t=y.p
s=A.b([new B.VH(A.b([new B.It(D.afA,g.c,e.gagc(),v===C.w6,u,g.w,f)],t),f)],t)
if(g.y&&g.d.length!==0){r=e.gagk()
q=x.ok.ax
q=q==null?f:q.aRV(w.k3.au(0.55),C.av,0.6)
q=A.al(r.toUpperCase(),f,f,f,f,q,f,f,f)
r=A.b([],t)
for(p=g.d,o=p.length,v=v===C.a2z,n=x.ch,m=g.f,l=0;l<o;++l){k=A.b([],t)
if(l>0)k.push(new A.Dk(1,f,n.au(0.18),f))
j=p[l]
i=B.bJY(j,e)
h=v&&m===p[l].a
k.push(new B.It(D.afB,j.c,i,h,u,new B.aPA(g,l),f))
C.h.L(r,k)}C.h.L(s,A.b([D.bl2,new A.ap(D.adY,q,f),new B.VH(r,f)],t))}return new A.fu(w.k2,E.bq6(s,D.adz),f)}}
B.VH.prototype={
C(d){var x,w=A.Z(d),v=w.ax,u=v.RG
v=(u==null?v.k2:u).au(0.45)
u=A.b6(12)
x=A.hp(w.ch.au(0.2),1)
return A.c7(A.oC(A.b6(12),A.bc(this.c,C.aL,C.M,C.ay),C.bK),new A.bh(v,null,x,u,null,null,C.a7),C.am)}}
B.It.prototype={
aq(){return new B.an3()}}
B.an3.prototype={
C(d){var x,w,v,u,t,s,r=this,q=null,p=A.Z(d),o=p.ax,n=p.ok,m=n.x,l=m==null?q:m.j_(o.k3,C.bn)
n=n.Q
x=n==null?q:n.ca(o.k3.au(0.62))
n=r.a.f?o.b.au(0.12):C.ah
m=r.a
w=m.r?m.w:q
m=m.f?o.b.au(0.18):o.k3.au(0.06)
v=A.b6(8)
u=r.a
t=u.c
m=A.c7(new A.ak(34,34,A.iw(t,u.f?o.b:o.k3.au(0.72),q,18),q),new A.bh(m,q,q,v,q,q,C.a7),C.am)
v=r.a
t=v.d
u=!v.f
t=B.bmt(!u||r.d,l,t,32)
v=v.e
s=y.p
s=A.b([m,C.Cq,A.cS(A.bc(A.b([t,C.mJ,B.bmt(!u||r.d,x,v,28)],s),C.aK,C.M,C.ay),1)],s)
if(r.a.f)s.push(new A.ap(D.adW,A.iw(D.afI,o.b,q,18),q))
return A.dI(!1,C.aw,!0,q,A.lm(A.iA(!1,q,!0,new A.ap(D.ady,A.cl(s,C.aa,q,C.M,C.V,0,q),q),q,!0,q,q,q,q,q,q,q,q,w,q,q,q,q,q,q,q),C.dE,q,new B.b7B(r),new B.b7C(r),q),C.Y,n,0,q,q,q,q,q,C.bG)}}
B.Fq.prototype={
C(d){var x=null,w=A.Z(d),v=this.aIh(d),u=w.ax.a===C.aD?C.i6:D.xV,t=w.ok.x
t=t==null?x:t.ea(C.av)
return new A.fu(u,A.bc(A.b([new A.ap(new A.af(v,20,v,0),A.al(this.c,x,x,x,x,t,x,x,x),x),C.cp,A.cS(new A.ap(new A.af(v,0,v,0),A.e4(new B.aPG(w)),x),1)],y.p),C.aL,C.M,C.V),x)},
aIh(d){var x
switch(B.aPB(A.bF(d,C.h_,y.w).w.a.a).a){case 0:x=12
break
case 1:x=16
break
case 2:x=24
break
default:x=null}return x}}
B.Pz.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.Pz&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gt(d){var x=this
return A.a0(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["~()","~(Qw)","~(Qx)","~(G7)","~(i9)"])
B.b53.prototype={
$0(){},
$S:0}
B.b_f.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.a6Z()},
$S:3}
B.b_h.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=e.b
if(!isFinite(p)||p<=0){x=this.a.a
return A.al(x.c,1,q,q,!1,x.d,q,q,q)}x=this.a
w=x.a
v=w.c
u=A.pX(q,q,1,q,A.cZ(q,q,q,q,w.d,v),C.by,d.aw(y.I).w,q,C.fu,C.b3)
u.K4(1/0)
t=u.b.c
s=t>p+0.5
if(s){x.a.toString
r=t+24}else r=0
x.aKo(r,p,s)
if(!s){x=x.a
return A.al(x.c,1,q,q,!1,x.d,q,q,q)}w=x.d
if(w==null)w=x.d=A.cd(q,q,q,q,x)
if(!x.a.e){w.h8(0)
x.d.sB(0,0)
x=x.a
return new A.ak(p,q,A.hq(new A.cq(C.cW,q,q,A.al(x.c,1,C.c_,q,!1,x.d,q,q,q),q),C.a6,q),q)}return new A.ak(p,u.b.a.c.f,A.hq(A.a9a(C.cW,A.hW(w,new B.b_g(x),q),q,t+24+t,q,q),C.a6,q),q)},
$S:39}
B.b_g.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.d.x
t===$&&A.a()
x=t*u.e
w=isFinite(x)?x:0
u=u.a
t=u.c
u=u.d
return A.aYb(A.cl(A.b([A.al(t,1,v,v,!1,u,v,v,v),new A.ak(24,v,v,v),A.al(t,1,v,v,!1,u,v,v,v)],y.p),C.aa,v,C.M,C.ay,0,v),new A.h(-w,0))},
$S:294}
B.aPt.prototype={
$2(d,e){var x=null
return A.ex(x,x,C.fx,x,x,x,x,x,x,x,x,d,x,x,e,x,1.25,!0,x,x,x,x,x,x,x,x)},
$S:922}
B.b7y.prototype={
$2(d,e){var x,w=this,v=null,u=e.a,t=u!==C.dx,s=B.bJW(t),r=B.brg(d)
$label0$0:{if(C.a2A===u){u=new B.Fq(w.b.gV4(),v)
break $label0$0}if(C.a2B===u){u=new B.Fq(w.b.gagg(),v)
break $label0$0}x=C.dx===u
if(x&&C.n.am(e.r).length!==0){u=new B.aaa(e.r,s+r,v)
break $label0$0}if(x){u=new B.Fq(w.b.gV4(),v)
break $label0$0}u=v}return A.e4(new B.b7x(w.a,w.b,e,t,w.c,u))},
$S:923}
B.b7x.prototype={
$2(d,e){var x,w,v=this,u=null,t=e.b,s=B.aPB(t),r=s===D.BV,q=A.Z(d).ax.a===C.aD?C.i6:D.xV,p=v.b,o=p.gD5(),n=v.c,m=v.d,l=!m,k=v.a,j=v.e
p=r?new B.b7u(k,j,p):new B.b7v(k,j,p)
j=r?new B.b7w(k):k.a.c.gakY()
x=new B.aac(o,n.x,n.b,n.c,l,p,j,!r,u)
if(C.n.am(n.r).length!==0)p=!r||n.y
else p=!1
k=k.a.c
o=r?q:u
w=new B.aab(s,l,m,p,k.gaU1(),k.gaU_(),k.gaPp(),o,u)
if(r)return new A.fu(q,A.dN(C.bH,A.b([A.ia(0,n.y?B.brQ(v.f):B.brQ(x),u),A.eU(0,w,u,u,0,0,u,u)],y.p),C.a6,C.a4a),u)
p=y.p
return A.bc(A.b([A.cS(A.cl(A.b([new A.ak(B.bJZ(t),u,x,u),new B.aez(1,A.Z(d).ch.au(0.2),u),A.cS(v.f,1)],p),C.aL,u,C.M,C.V,0,u),1),w],p),C.aL,C.M,C.V)},
$S:319}
B.b7u.prototype={
$0(){var x=this.a
x.a.c.X4(this.b,this.c.gD5())
x=x.a.c
x.aH(x.c.S8(!0))},
$S:0}
B.b7v.prototype={
$0(){return this.a.a.c.X4(this.b,this.c.gD5())},
$S:0}
B.b7w.prototype={
$1(d){var x=this.a
x.a.c.E9(d)
x=x.a.c
x.aH(x.c.S8(!0))},
$S:17}
B.aPy.prototype={
$2(d,e){var x,w,v=null,u=e.b
if(!isFinite(u)||u<=0)return C.be
x=this.b
w=this.a
return new B.Nf(C.d4,C.a6,new A.af(x,8,x,8+w.d),new A.ak(C.o.a_(u-x*2,1,u),v,A.l7(C.d4,new B.agG(w.c,this.c,v),C.DT),v),!1,3,1,v)},
$S:39}
B.aPA.prototype={
$0(){var x=this.a
return x.x.$1(x.d[this.b].a)},
$S:0}
B.b7B.prototype={
$1(d){var x=this.a
return x.aN(new B.b7A(x))},
$S:49}
B.b7A.prototype={
$0(){return this.a.d=!0},
$S:0}
B.b7C.prototype={
$1(d){var x=this.a
return x.aN(new B.b7z(x))},
$S:42}
B.b7z.prototype={
$0(){return this.a.d=!1},
$S:0}
B.aPG.prototype={
$2(d,e){var x=null,w=A.b6(4),v=A.b([new A.cK(0,C.bA,C.P.au(0.12),D.bcN,16)],y.V),u=this.a.ok,t=u.z,s=u.w
return new A.cq(C.ex,x,x,A.l7(C.ex,A.lO(A.jw(x,A.bc(A.b([A.aql(u.f,3),C.cp,A.aql(t,8),C.dV,A.aql(s,2),C.cy,A.bjr(5,t),C.dV,A.aql(s,2),C.cy,A.bjr(4,t)],y.p),C.aK,C.M,C.ay),C.Y,x,new A.ag(0,1/0,1122.942857142857,1/0),new A.bh(C.J,x,x,w,v,x,C.a7),x,x,x,D.Fz,x,x,794),!0),C.DT),x)},
$S:924};(function aliases(){var x=B.Yp.prototype
x.aqu=x.m
x=B.Y7.prototype
x.aqc=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.UN.prototype,"gaFQ","aFR",1)
x(v,"gaFS","aFT",2)
x(v,"gaFO","aFP",3)
x(v,"gaDK","aDL",4)
w(v,"gFX","aAy",0)
w(v,"gG0","aBT",0)
w(v,"ga3d","aD7",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.U,[B.aez,B.akF,B.aaa,B.agG,B.aab,B.ajz,B.aac,B.VH,B.Fq])
w(A.a3,[B.Nf,B.JY,B.Pq,B.It])
w(A.a8,[B.Yp,B.Y7,B.an2,B.an3])
v(B.UN,B.Yp)
w(A.oD,[B.b53,B.b7u,B.b7v,B.aPA,B.b7A,B.b7z])
v(B.ae8,A.cE)
w(A.HT,[B.Ur,B.aO2,B.Pr])
v(B.ahg,B.Y7)
w(A.m1,[B.b_f,B.b7w,B.b7B,B.b7C])
w(A.qE,[B.b_h,B.b_g,B.aPt,B.b7y,B.b7x,B.aPy,B.aPG])
w(A.I,[B.ay7,B.Pz])
x(B.Yp,A.ek)
x(B.Y7,A.fF)})()
A.ts(b.typeUniverse,JSON.parse('{"aez":{"U":[],"d":[]},"Nf":{"a3":[],"d":[]},"UN":{"a8":["Nf"]},"akF":{"U":[],"d":[]},"ae8":{"cE":["bb"],"ay":[]},"JY":{"a3":[],"d":[]},"ahg":{"a8":["JY"]},"Pq":{"a3":[],"d":[]},"an2":{"a8":["Pq"]},"aaa":{"U":[],"d":[]},"agG":{"U":[],"d":[]},"aab":{"U":[],"d":[]},"ajz":{"U":[],"d":[]},"It":{"a3":[],"d":[]},"aac":{"U":[],"d":[]},"VH":{"U":[],"d":[]},"an3":{"a8":["It"]},"Fq":{"U":[],"d":[]}}'))
var y=(function rtii(){var x=A.a1
return{J:x("jt"),I:x("jA"),V:x("u<cK>"),p:x("u<d>"),z:x("bx<a8<a3>>"),w:x("li"),X:x("zK"),C:x("vk"),B:x("rH"),A:x("lv"),x:x("J"),N:x("k"),L:x("aN<h>"),t:x("aN<P>"),l:x("Bb")}})();(function constants(){D.xV=new A.M(1,0.8980392156862745,0.8980392156862745,0.9176470588235294,C.A)
D.adl=new A.af(0,10,0,4)
D.ado=new A.af(0,12,0,6)
D.adt=new A.af(0,4,0,8)
D.adw=new A.af(0,8,0,4)
D.ady=new A.af(10,10,10,10)
D.adz=new A.af(10,12,10,12)
D.adW=new A.af(4,0,0,0)
D.Fz=new A.af(54,54,54,54)
D.adY=new A.af(6,0,6,8)
D.afA=new A.dH(61112,"MaterialIcons",null,!1)
D.afB=new A.dH(61358,"MaterialIcons",null,!1)
D.afI=new A.dH(63029,"MaterialIcons",null,!1)
D.bcN=new A.h(0,6)
D.bxi=new B.aO2(3,"free")
D.BV=new B.Pr(0,"phone")
D.bgR=new B.Pr(1,"tablet")
D.bgS=new B.Pr(2,"desktop")
D.bl2=new A.ak(null,14,null,null)
D.n5=new B.Ur(0,"pan")
D.xb=new B.Ur(1,"scale")
D.bvE=new B.Ur(2,"rotate")})()};
(a=>{a["ymhyuAXN5BBYfXMpw2wzxX1bCQY="]=a.current})($__dart_deferred_initializers__);