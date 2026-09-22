((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={afa:function afa(d,e,f){this.c=d
this.r=e
this.a=f},
aHN(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aj(0,e)
w=f.aj(0,e)
return e.Y(0,w.nS(A.S(x.un(w)/t,0,1)))},
bIH(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aj(0,q),o=e.b,n=o.aj(0,q),m=e.d,l=m.aj(0,q),k=p.un(n),j=n.un(n),i=p.un(l),h=l.un(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.aHN(d,q,o),B.aHN(d,o,x),B.aHN(d,x,m),B.aHN(d,m,q)]
v=A.bU()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bb()},
bOj(){var x=new A.bb(new Float64Array(16))
x.dv()
return new B.aeK(x,$.aM())},
bwb(d,e,f){return Math.log(f/d)/Math.log(e/100)},
bwN(d,e){var x,w,v,u,t,s,r=new A.bb(new Float64Array(16))
r.cg(d)
r.jG(r)
x=e.a
w=e.b
v=new A.cv(new Float64Array(3))
v.eD(x,w,0)
v=r.lc(v)
u=e.c
t=new A.cv(new Float64Array(3))
t.eD(u,w,0)
t=r.lc(t)
w=e.d
s=new A.cv(new Float64Array(3))
s.eD(u,w,0)
s=r.lc(s)
u=new A.cv(new Float64Array(3))
u.eD(x,w,0)
u=r.lc(u)
x=new A.cv(new Float64Array(3))
x.cg(v)
w=new A.cv(new Float64Array(3))
w.cg(t)
v=new A.cv(new Float64Array(3))
v.cg(s)
t=new A.cv(new Float64Array(3))
t.cg(u)
return new B.PX(x,w,v,t)},
bw3(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.D,w=0;w<4;++w){v=r[w]
u=B.bIH(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.h(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.h(x.a,t)}return B.blv(x)},
blv(d){return new A.h(A.blU(C.o.aK(d.a,9)),A.blU(C.o.aK(d.b,9)))},
bSx(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.cE:C.bz},
NC:function NC(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.x=h
_.at=i
_.ax=j
_.a=k},
Vc:function Vc(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.dX$=f
_.bv$=g
_.c=_.a=null},
b6s:function b6s(){},
alg:function alg(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aeK:function aeK(d,e){var _=this
_.a=d
_.V$=0
_.aA$=e
_.aB$=_.bi$=0},
UR:function UR(d,e){this.a=d
this.b=e},
aOW:function aOW(d,e){this.a=d
this.b=e},
YP:function YP(){},
bnS(d,e,f,g){return new B.Ki(f,e,d,g,null)},
Ki:function Ki(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
ahS:function ahS(d,e){var _=this
_.d=null
_.e=0
_.f=!1
_.r=0
_.ew$=d
_.bM$=e
_.c=_.a=null},
b0w:function b0w(d){this.a=d},
b0y:function b0y(d){this.a=d},
b0x:function b0x(d){this.a=d},
Yx:function Yx(){},
ayW:function ayW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2){var _=this
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
bLr(){var x,w=null,v=new B.aQk(),u=A.eA(w,w,C.fy,w,w,w,w,w,w,w,w,11,w,w,w,w,1.5,!0,w,w,w,w,w,w,w,w),t=v.$2(18,C.as),s=v.$2(14,C.as),r=v.$2(12,C.bo),q=v.$2(11,C.bo),p=v.$2(11,C.bo)
v=v.$2(11,C.bo)
x=u.e7(C.as)
return E.bjn(w,8,w,C.b1,w,w,w,w,C.b1,w,w,w,u.aRB(F.Gk),t,C.b1,D.adK,s,C.b1,D.adF,r,C.b1,D.adC,q,C.b1,D.adN,p,C.b1,w,v,C.b1,w,new A.bh(w,w,new A.ec(new A.bq(C.P.av(0.12),1,C.af,-1),C.Y,C.Y,C.Y),w,w,w,C.a7),w,u,w,18,C.b1,u,w,x,w,w,w,w,w,w,w,w,w,w,F.CL,C.b1,w,w,C.b1)},
aQk:function aQk(){},
aQs(d){if(d<600)return D.C2
if(d<960)return D.bhA
return D.bhB},
bLy(d){var x
switch(B.aQs(d).a){case 0:x=0
break
case 1:x=152
break
case 2:x=Math.min(220,d*0.2)
break
default:x=null}return x},
PP:function PP(d,e){this.a=d
this.b=e},
bLv(d,e){return new B.PO(e,d,null)},
PO:function PO(d,e,f){this.c=d
this.d=e
this.a=f},
anD:function anD(){this.d=!1
this.c=this.a=null},
b8X:function b8X(d,e,f){this.a=d
this.b=e
this.c=f},
b8W:function b8W(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b8T:function b8T(d,e,f){this.a=d
this.b=e
this.c=f},
b8U:function b8U(d,e,f){this.a=d
this.b=e
this.c=f},
b8V:function b8V(d){this.a=d},
aaE:function aaE(d,e,f){this.c=d
this.d=e
this.a=f},
aQp:function aQp(d,e,f){this.a=d
this.b=e
this.c=f},
ahh:function ahh(d,e,f){this.c=d
this.d=e
this.a=f},
bsI(d){return 76+A.bD(d,C.xj,y.w).w.w.d+16},
bLu(d){if(d)return 54
return 92},
aaF:function aaF(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aka:function aka(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bLx(d,e){var x,w
if(d.b===C.wa){x=d.r
w=x==null?null:C.n.a8(x)
if(w!=null&&w.length!==0)return w
return e.gah2()}x=d.r
w=x==null?null:C.n.a8(x)
if(w!=null&&w.length!==0)return w
return e.gagZ()},
bLw(d){var x
switch(d.a){case 0:x=D.zq
break
case 2:x=D.zq
break
case 1:x=D.afR
break
default:x=null}return x},
aaG:function aaG(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aQr:function aQr(d,e){this.a=d
this.b=e},
W7:function W7(d,e){this.c=d
this.a=e},
IN:function IN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
anE:function anE(){this.d=!1
this.c=this.a=null},
b9_:function b9_(d){this.a=d},
b8Z:function b8Z(d){this.a=d},
b90:function b90(d){this.a=d},
b8Y:function b8Y(d){this.a=d},
FE:function FE(d,e){this.c=d
this.a=e},
aQE:function aQE(d){this.a=d},
PX:function PX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btj(d){return new A.am(1/0,1/0,d,null)},
bpd(a5,a6,a7){var x,w,v,u,t=a5.gVy(),s=a5.gVz(),r=a5.VA(a7),q=a5.gVw(),p=a5.gVv(),o=a5.gVs(),n=a5.gVr(),m=a5.gVq(),l=a5.gVp(),k=a5.gVu(),j=a5.gVt(),i=a5.gVo(),h=a5.gL8(),g=a5.gL7(),f=a5.gagR(),e=a5.gagQ(),d=a5.gagV(),a0=a5.gah1(),a1=a5.gagY(),a2=a5.ahd(a7),a3=y.N,a4=A.r(a3,a3)
for(x=0;x<12;++x){w=C.cP[x]
a4.j(0,w.b,A.adf(a5,w))}v=A.r(a3,a3)
for(x=0;x<2;++x){u=C.PS[x]
v.j(0,u.b,A.bkd(a5,u))}return new B.ayW(a6,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a4,v,A.ak(["degree",a5.gT8(),"postGraduation",a5.gT9()],a3,a3))}},D,E,F
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[17]
E=c[10]
F=c[15]
B.afa.prototype={
C(d){var x,w,v,u,t,s,r=null
A.Z(d)
x=A.biz(d)
w=A.bkJ(d)
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
return new A.am(this.c,r,A.cS(A.jz(r,r,C.X,r,r,new A.bh(r,r,new A.ec(C.Y,C.Y,C.Y,A.bpQ(d,this.r,v)),u,r,r,C.a7),r,r,new A.et(0,t,0,s),r,r,r,v),r,r),r)}}
B.NC.prototype={
aq(){var x=null,w=y.z
return new B.Vc(new A.bx(x,w),new A.bx(x,w),x,x)}}
B.Vc.prototype={
gcW(){var x=this.d
if(x===$){this.a.toString
x=B.bOj()
this.d=x}return x},
gFb(){var x,w=$.a6.ao$.x.h(0,this.e).ga2()
w.toString
x=y.x.a(w).gv(0)
return this.a.f.K_(new A.G(0,0,0+x.a,0+x.b))},
gHO(){var x=$.a6.ao$.x.h(0,this.f).ga2()
x.toString
x=y.x.a(x).gv(0)
return new A.G(0,0,0+x.a,0+x.b)},
wn(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.D)){x=new A.bb(new Float64Array(16))
x.cg(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.bb(new Float64Array(16))
w.cg(a0)
w.dG(a1.a,a1.b,0,1)
v=B.bwN(w,d.gHO())
if(d.gFb().gaeL(0))return w
x=d.gFb()
u=d.ay
t=new A.bb(new Float64Array(16))
t.dv()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.dG(q/2,o/2,0,1)
t.yz(u)
t.dG(-q/2,-o/2,0,1)
u=new A.cv(new Float64Array(3))
u.eD(r,x,0)
u=t.lc(u)
q=new A.cv(new Float64Array(3))
q.eD(s,x,0)
q=t.lc(q)
x=new A.cv(new Float64Array(3))
x.eD(s,p,0)
x=t.lc(x)
s=new A.cv(new Float64Array(3))
s.eD(r,p,0)
s=t.lc(s)
r=new Float64Array(3)
new A.cv(r).cg(u)
u=new Float64Array(3)
new A.cv(u).cg(q)
q=new Float64Array(3)
new A.cv(q).cg(x)
x=new Float64Array(3)
new A.cv(x).cg(s)
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
x=new A.cv(new Float64Array(3))
x.eD(m,l,0)
u=new A.cv(new Float64Array(3))
u.eD(k,l,0)
s=new A.cv(new Float64Array(3))
s.eD(k,j,0)
r=new A.cv(new Float64Array(3))
r.eD(m,j,0)
q=new A.cv(new Float64Array(3))
q.cg(x)
x=new A.cv(new Float64Array(3))
x.cg(u)
u=new A.cv(new Float64Array(3))
u.cg(s)
s=new A.cv(new Float64Array(3))
s.cg(r)
i=new B.PX(q,x,u,s)
h=B.bw3(i,v)
if(h.l(0,C.D))return w
x=w.E5().a
u=x[0]
x=x[1]
g=a0.vm()
u-=h.a*g
x-=h.b*g
f=new A.bb(new Float64Array(16))
f.cg(a0)
s=new A.cv(new Float64Array(3))
s.eD(u,x,0)
f.XN(s)
e=B.bw3(i,B.bwN(f,d.gHO()))
if(e.l(0,C.D))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.bb(new Float64Array(16))
x.cg(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.bb(new Float64Array(16))
s.cg(a0)
r=new A.cv(new Float64Array(3))
r.eD(u,x,0)
s.XN(r)
return s},
Pf(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.bb(new Float64Array(16))
x.cg(d)
return x}w=q.gcW().a.vm()
x=q.gHO()
v=q.gFb()
u=q.gHO()
t=q.gFb()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.S(s,t.ax,t.at)/w
x=new A.bb(new Float64Array(16))
x.cg(d)
x.nR(r,r,r,1)
return x},
aFq(d,e,f){var x,w,v,u
if(e===0){x=new A.bb(new Float64Array(16))
x.cg(d)
return x}w=this.gcW().lb(f)
x=new A.bb(new Float64Array(16))
x.cg(d)
v=w.a
u=w.b
x.dG(v,u,0,1)
x.yz(-e)
x.dG(-v,-u,0,1)
return x},
FN(d){var x
$label0$0:{x=!0
if(D.bwo===d){x=!1
break $label0$0}if(D.xg===d){this.a.toString
break $label0$0}if(D.na===d||d==null){this.a.toString
break $label0$0}x=null}return x},
a2d(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.xg
else return D.na},
aGF(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.a()
w=x.r
if(w!=null&&w.a!=null){x.ha(0)
x=v.y
x.sB(0,x.a)
x=v.r
if(x!=null)x.a.T(0,v.gG3())
v.r=null}x=v.z
x===$&&A.a()
w=x.r
if(w!=null&&w.a!=null){x.ha(0)
x=v.z
x.sB(0,x.a)
x=v.w
if(x!=null)x.a.T(0,v.gG7())
v.w=null}v.Q=v.ch=null
v.at=v.gcW().a.vm()
v.as=v.gcW().lb(d.b)
v.ax=v.ay},
aGH(d){var x,w,v,u,t,s,r=this,q=r.gcW().a.vm(),p=r.x=d.c,o=r.gcW().lb(p),n=r.ch
if(n===D.na)n=r.ch=r.a2d(d)
else if(n==null){n=r.a2d(d)
r.ch=n}if(!r.FN(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gcW().sB(0,r.Pf(r.gcW().a,n*d.d/q))
x=r.gcW().lb(p)
n=r.gcW()
w=r.gcW().a
v=r.as
v.toString
n.sB(0,r.wn(w,x.aj(0,v)))
u=r.gcW().lb(p)
p=r.as
p.toString
if(!B.blv(p).l(0,B.blv(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gcW().sB(0,r.aFq(r.gcW().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.bSx(n,o)}n=r.as
n.toString
s=o.aj(0,n)
r.gcW().sB(0,r.wn(r.gcW().a,s))
r.as=r.gcW().lb(p)
break}r.a.toString},
aGD(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.T(0,m.gG3())
x=m.w
if(x!=null)x.a.T(0,m.gG7())
x=m.y
x===$&&A.a()
x.sB(0,x.a)
x=m.z
x===$&&A.a()
x.sB(0,x.a)
x=m.ch
if(!m.FN(x)){m.Q=null
return}$label0$0:{if(D.na===x){x=d.a.a
if(x.gdf()<50){m.Q=null
return}w=m.gcW().a.E5().a
v=w[0]
w=w[1]
m.a.toString
u=A.aFh(0.0000135,v,x.a,0)
m.a.toString
t=A.aFh(0.0000135,w,x.b,0)
x=x.gdf()
m.a.toString
s=B.bwb(x,0.0000135,10)
x=u.gxR()
r=t.gxR()
q=y.L
p=A.c4(C.h7,m.y,null)
m.r=new A.ac(p,new A.aN(new A.h(v,w),new A.h(x,r),q),q.i("ac<at.T>"))
m.y.e=A.es(0,C.o.aL(s*1000),0)
p.ak(0,m.gG3())
m.y.cY(0)
break $label0$0}if(D.xg===x){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.gcW().a.vm()
m.a.toString
n=A.aFh(0.0026999999999999997,o,x/10,0)
m.a.toString
s=B.bwb(w,0.0000135,0.1)
x=n.hL(0,s)
w=y.t
v=A.c4(C.h7,m.z,null)
m.w=new A.ac(v,new A.aN(o,x,w),w.i("ac<at.T>"))
m.z.e=A.es(0,C.o.aL(s*1000),0)
v.ak(0,m.gG7())
m.z.cY(0)
break $label0$0}break $label0$0}},
aEw(d){var x,w,v,u,t,s,r,q=this,p=d.ge8(),o=d.gc5(d)
if(y.C.b(d)){x=d.gdi(d)===C.cW
if(x)q.a.toString
if(x){q.a.toString
x=o.Y(0,d.gm2())
w=d.gm2()
v=A.zM(d.gcO(d),null,w,x)
if(!q.FN(D.na)){q.a.toString
return}u=q.gcW().lb(p)
t=q.gcW().lb(p.aj(0,v))
q.gcW().sB(0,q.wn(q.gcW().a,t.aj(0,u)))
q.a.toString
return}if(d.gm2().b===0)return
x=d.gm2()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.X.b(d))s=d.giS(d)
else return
q.a.toString
if(!q.FN(D.xg))return
u=q.gcW().lb(p)
q.gcW().sB(0,q.Pf(q.gcW().a,s))
r=q.gcW().lb(p)
q.gcW().sB(0,q.wn(q.gcW().a,r.aj(0,u)))
q.a.toString},
aBj(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.a()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.T(0,r.gG3())
r.r=null
q=r.y
q.sB(0,q.a)
return}q=r.gcW().a.E5().a
x=q[0]
q=q[1]
w=r.gcW()
v=r.gcW().a
u=r.gcW()
t=r.r
s=t.b
t=t.a
w.sB(0,r.wn(v,u.lb(s.aF(0,t.gB(t))).aj(0,r.gcW().lb(new A.h(x,q)))))},
aCE(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.a()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.T(0,s.gG7())
s.w=null
r=s.z
r.sB(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aF(0,r.gB(r))
r=s.gcW().a.vm()
x=s.gcW()
v=s.x
v===$&&A.a()
u=x.lb(v)
s.gcW().sB(0,s.Pf(s.gcW().a,w/r))
t=s.gcW().lb(s.x)
s.gcW().sB(0,s.wn(s.gcW().a,t.aj(0,u)))},
aDT(){this.aN(new B.b6s())},
aM(){var x=this,w=null
x.b5()
x.y=A.cd(w,w,w,w,x)
x.z=A.cd(w,w,w,w,x)
x.gcW().ak(0,x.ga3D())},
ba(d){this.bm(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.a()
w.m()
w=x.z
w===$&&A.a()
w.m()
x.gcW().T(0,x.ga3D())
x.a.toString
w=x.gcW()
w.aA$=$.aM()
w.V$=0
x.arg()},
C(d){var x,w=this,v=null,u=w.a.d,t=w.gcW().a,s=w.a,r=s.c
s=s.w
x=new B.alg(s,w.e,u,!1,t,r,v)
return A.ph(C.e2,A.e5(C.aP,x,C.ax,!1,v,v,v,v,v,v,v,v,v,v,w.gaGC(),w.gaGE(),w.gaGG(),v,v,v,v,v,v,v,v,v,v,v,!1,new A.h(0,-0.005)),w.f,v,v,v,v,w.gaEv(),v)}}
B.alg.prototype={
C(d){var x=this,w=A.a9F(C.d5,A.Hq(x.w,new A.iG(x.c,x.d),null,x.r,!0),1/0,1/0,0,0)
return A.hu(w,x.e,null)}}
B.aeK.prototype={
lb(d){var x=this.a,w=new A.bb(new Float64Array(16))
if(w.jG(x)===0)A.a4(A.fc(x,"other","Matrix cannot be inverted"))
x=new A.cv(new Float64Array(3))
x.eD(d.a,d.b,0)
x=w.lc(x).a
return new A.h(x[0],x[1])}}
B.UR.prototype={
H(){return"_GestureType."+this.b}}
B.aOW.prototype={
H(){return"PanAxis."+this.b}}
B.YP.prototype={
bS(){this.d0()
this.cP()
this.fa()},
m(){var x=this,w=x.bv$
if(w!=null)w.T(0,x.geX())
x.bv$=null
x.aW()}}
B.Ki.prototype={
aq(){return new B.ahS(null,null)}}
B.ahS.prototype={
ba(d){var x,w=this
w.bm(d)
x=w.a
if(d.c!==x.c||d.e!==x.e||!J.e(d.d,x.d)||d.r!==w.a.r){w.r=0
w.a7u()}},
aLi(d,e,f){var x=this
if(x.r===e&&x.f===f&&x.e===d)return
x.r=e
x.f=f
x.e=d
$.a6.RG$.push(new B.b0w(x))},
m(){var x=this.d
if(x!=null)x.m()
this.aqY()},
a7u(){var x,w=this,v=null,u=w.d
if(u==null)u=w.d=A.cd(v,v,v,v,w)
if(!w.f||!w.a.e||w.e<=0){u.ha(0)
u.sB(0,0)
return}u.e=A.es(0,C.m.a_(C.o.aL(w.e/w.a.r*1000),1500,3e4),0)
x=u.r
if(!(x!=null&&x.a!=null))u.b0M(0)},
C(d){if(this.a.c.length===0)return C.bd
return A.e7(new B.b0y(this))}}
B.Yx.prototype={
m(){var x=this,w=x.bM$
if(w!=null)w.T(0,x.ghQ())
x.bM$=null
x.aW()},
bS(){this.d0()
this.cP()
this.hR()}}
B.ayW.prototype={}
B.PP.prototype={
H(){return"PrinterLayoutMode."+this.b}}
B.PO.prototype={
aq(){return new B.anD()}}
B.anD.prototype={
ci(){var x,w,v=this
v.dV()
if(v.d)return
v.d=!0
x=v.c
x.toString
x=A.bI(x,C.an,y.J)
x.toString
w=B.bpd(x,v.c.az(y.l).r.f.gcZ(0),v.a.d)
v.a.c.KV(w,x.gDa())},
C(d){var x,w=A.bI(d,C.an,y.J)
w.toString
x=B.bpd(w,d.az(y.l).r.f.gcZ(0),this.a.d)
return A.dr(this.a.c,null,new B.b8X(this,w,x),y.B,y.A)}}
B.aaE.prototype={
C(d){var x=this.aHn(d),w=A.Z(d).ax.a===C.aD?C.ia:D.y_
return new A.fe(w,A.e7(new B.aQp(this,x,1122.942857142857)),null)},
aHn(d){var x
switch(B.aQs(A.bD(d,C.h2,y.w).w.a.a).a){case 0:x=8
break
case 1:x=16
break
case 2:x=24
break
default:x=null}return x}}
B.ahh.prototype={
C(d){var x=null,w=A.b7(4),v=A.b([new A.cM(0,C.bA,C.P.av(0.18),C.BG,18)],y.V)
return new A.am(794,x,new A.eN(new A.ag(0,1/0,this.d,1/0),A.c8(new A.ap(D.FL,E.bjm(this.c,!1,B.bLr()),x),new A.bh(C.J,x,x,w,v,x,C.a7),C.am),x),x)}}
B.aaF.prototype={
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.bI(d,C.an,y.J)
n.toString
x=A.Z(d)
w=p.c===D.C2
v=p.e?A.hx(n.gVl(),o,p.x,C.el):new B.aka(p.d,p.f,p.r,p.w,n.gagX(),n.gagU(),o)
u=w?B.bsI(d):A.bD(d,C.cu,y.w).w.r.d+12
n=p.y
if(n==null)n=x.fx
t=x.ch.av(0.25)
s=A.b([new A.cM(0,C.bA,C.P.av(x.ax.a===C.aD?0.35:0.08),F.ZN,10)],y.V)
r=w?16:20
q=w?16:20
return A.c8(new A.ap(new A.af(r,12,q,u),A.cS(v,o,o),o),new A.bh(n,o,new A.ec(new A.bq(t,1,C.af,-1),C.Y,C.Y,C.Y),o,s,o,C.a7),C.am)}}
B.aka.prototype={
C(d){var x=this,w=null,v=x.c,u=v&&x.d?x.f:w
u=A.hx(x.w,w,u,C.el)
v=v&&x.d?x.e:w
return A.lT(C.kS,A.b([u,A.hx(x.r,w,v,C.fB)],y.p),C.x6,8,8)}}
B.aaG.prototype={
C(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=A.bI(a0,C.an,y.J)
d.toString
x=A.Z(a0)
w=x.ax
v=f.e
u=f.r
t=y.p
s=A.b([new B.W7(A.b([new B.IN(D.zq,f.c,d.gagS(),v===C.wb,u,f.w,e)],t),e)],t)
if(f.y&&f.d.length!==0){r=d.gah_()
q=x.ok.ax
q=q==null?e:q.aSV(w.k3.av(0.55),C.as,0.6)
q=A.ai(r.toUpperCase(),e,e,e,e,q,e,e,e)
r=A.b([],t)
for(p=f.d,o=p.length,v=v===C.a2L,n=x.ch,m=f.f,l=0;l<o;++l){k=A.b([],t)
if(l>0)k.push(new A.Dx(1,e,n.av(0.18),e))
j=p[l]
i=B.bLw(j.b)
h=B.bLx(j,d)
g=v&&m===p[l].a
k.push(new B.IN(i,j.c,h,g,u,new B.aQr(f,l),e))
C.h.L(r,k)}C.h.L(s,A.b([D.blN,new A.ap(D.aee,q,e),new B.W7(r,e)],t))}return new A.fe(w.k2,E.brx(s,D.adQ),e)}}
B.W7.prototype={
C(d){var x,w=A.Z(d),v=w.ax,u=v.RG
v=(u==null?v.k2:u).av(0.45)
u=A.b7(12)
x=A.ht(w.ch.av(0.2),1)
return A.c8(A.oF(A.b7(12),A.bc(this.c,C.aL,C.M,C.ay),C.bK),new A.bh(v,null,x,u,null,null,C.a7),C.am)}}
B.IN.prototype={
aq(){return new B.anE()}}
B.anE.prototype={
C(d){var x,w,v,u,t,s,r=this,q=null,p=A.Z(d),o=p.ax,n=p.ok,m=n.x,l=m==null?q:m.j3(o.k3,C.bo)
n=n.Q
x=n==null?q:n.ca(o.k3.av(0.62))
n=r.a.f?o.b.av(0.12):C.ah
m=r.a
w=m.r?m.w:q
m=m.f?o.b.av(0.18):o.k3.av(0.06)
v=A.b7(8)
u=r.a
t=u.c
m=A.c8(new A.am(34,34,A.iy(t,u.f?o.b:o.k3.av(0.72),q,18),q),new A.bh(m,q,q,v,q,q,C.a7),C.am)
v=r.a
t=v.d
u=!v.f
t=B.bnS(!u||r.d,l,t,32)
v=v.e
s=y.p
s=A.b([m,C.Cy,A.cV(A.bc(A.b([t,C.mO,B.bnS(!u||r.d,x,v,28)],s),C.aK,C.M,C.ay),1)],s)
if(r.a.f)s.push(new A.ap(D.aec,A.iy(D.afY,o.b,q,18),q))
return A.dD(!1,C.aw,!0,q,A.ls(A.iC(!1,q,!0,new A.ap(D.adP,A.cm(s,C.aa,q,C.M,C.V,0,q),q),q,!0,q,q,q,q,q,q,q,q,w,q,q,q,q,q,q,q),C.dF,q,new B.b9_(r),new B.b90(r),q),C.X,n,0,q,q,q,q,q,C.bH)}}
B.FE.prototype={
C(d){var x=null,w=A.Z(d),v=this.aJb(d),u=w.ax.a===C.aD?C.ia:D.y_,t=w.ok.x
t=t==null?x:t.e7(C.as)
return new A.fe(u,A.bc(A.b([new A.ap(new A.af(v,20,v,0),A.ai(this.c,x,x,x,x,t,x,x,x),x),C.cq,A.cV(new A.ap(new A.af(v,0,v,0),A.e7(new B.aQE(w)),x),1)],y.p),C.aL,C.M,C.V),x)},
aJb(d){var x
switch(B.aQs(A.bD(d,C.h2,y.w).w.a.a).a){case 0:x=12
break
case 1:x=16
break
case 2:x=24
break
default:x=null}return x}}
B.PX.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.PX&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gt(d){var x=this
return A.a0(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["~()","~(QU)","~(QV)","~(Gn)","~(id)"])
B.b6s.prototype={
$0(){},
$S:0}
B.b0w.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.a7u()},
$S:3}
B.b0y.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=e.b
if(!isFinite(p)||p<=0){x=this.a.a
return A.ai(x.c,1,q,q,!1,x.d,q,q,q)}x=this.a
w=x.a
v=w.c
u=A.pZ(q,q,1,q,A.d1(q,q,q,q,w.d,v),C.by,d.az(y.I).w,q,C.fv,C.b3)
u.Kd(1/0)
t=u.b.c
s=t>p+0.5
if(s){x.a.toString
r=t+24}else r=0
x.aLi(r,p,s)
if(!s){x=x.a
return A.ai(x.c,1,q,q,!1,x.d,q,q,q)}w=x.d
if(w==null)w=x.d=A.cd(q,q,q,q,x)
if(!x.a.e){w.ha(0)
x.d.sB(0,0)
x=x.a
return new A.am(p,q,A.hu(new A.cp(C.cC,q,q,A.ai(x.c,1,C.c_,q,!1,x.d,q,q,q),q),C.a6,q),q)}return new A.am(p,u.b.a.c.f,A.hu(A.a9F(C.cC,A.i_(w,new B.b0x(x),q),q,t+24+t,q,q),C.a6,q),q)},
$S:42}
B.b0x.prototype={
$2(d,e){var x,w,v=null,u=this.a,t=u.d.x
t===$&&A.a()
x=t*u.e
w=isFinite(x)?x:0
u=u.a
t=u.c
u=u.d
return A.aZo(A.cm(A.b([A.ai(t,1,v,v,!1,u,v,v,v),new A.am(24,v,v,v),A.ai(t,1,v,v,!1,u,v,v,v)],y.p),C.aa,v,C.M,C.ay,0,v),new A.h(-w,0))},
$S:294}
B.aQk.prototype={
$2(d,e){var x=null
return A.eA(x,x,C.fy,x,x,x,x,x,x,x,x,d,x,x,e,x,1.25,!0,x,x,x,x,x,x,x,x)},
$S:946}
B.b8X.prototype={
$2(d,e){var x,w=this,v=null,u=e.a,t=u!==C.dV,s=B.bLu(t),r=B.bsI(d)
$label0$0:{if(C.a2M===u){u=new B.FE(w.b.gVm(),v)
break $label0$0}if(C.a2N===u){u=new B.FE(w.b.gagW(),v)
break $label0$0}x=C.dV===u
if(x&&C.n.a8(e.r).length!==0){u=new B.aaE(e.r,s+r,v)
break $label0$0}if(x){u=new B.FE(w.b.gVm(),v)
break $label0$0}u=v}return A.e7(new B.b8W(w.a,w.b,e,t,w.c,u))},
$S:947}
B.b8W.prototype={
$2(d,e){var x,w,v=this,u=null,t=e.b,s=B.aQs(t),r=s===D.C2,q=A.Z(d).ax.a===C.aD?C.ia:D.y_,p=v.b,o=p.gDa(),n=v.c,m=v.d,l=!m,k=v.a,j=v.e
p=r?new B.b8T(k,j,p):new B.b8U(k,j,p)
j=r?new B.b8V(k):k.a.c.galK()
x=new B.aaG(o,n.x,n.b,n.c,l,p,j,!r,u)
if(C.n.a8(n.r).length!==0)p=!r||n.y
else p=!1
k=k.a.c
o=r?q:u
w=new B.aaF(s,l,m,p,k.gaV5(),k.gaV3(),k.gaQm(),o,u)
if(r)return new A.fe(q,A.dF(C.bD,A.b([A.hc(0,n.y?B.btj(v.f):B.btj(x),u),A.eX(0,w,u,u,0,0,u,u)],y.p),C.a6,C.a4m),u)
p=y.p
return A.bc(A.b([A.cV(A.cm(A.b([new A.am(B.bLy(t),u,x,u),new B.afa(1,A.Z(d).ch.av(0.2),u),A.cV(v.f,1)],p),C.aL,u,C.M,C.V,0,u),1),w],p),C.aL,C.M,C.V)},
$S:323}
B.b8T.prototype={
$0(){var x=this.a
x.a.c.Xn(this.b,this.c.gDa())
x=x.a.c
x.aP(x.c.Sm(!0))},
$S:0}
B.b8U.prototype={
$0(){return this.a.a.c.Xn(this.b,this.c.gDa())},
$S:0}
B.b8V.prototype={
$1(d){var x=this.a
x.a.c.Xo(d)
x=x.a.c
x.aP(x.c.Sm(!0))},
$S:21}
B.aQp.prototype={
$2(d,e){var x,w,v=null,u=e.b
if(!isFinite(u)||u<=0)return C.bd
x=this.b
w=this.a
return new B.NC(C.d5,C.a6,new A.af(x,8,x,8+w.d),new A.am(C.o.a_(u-x*2,1,u),v,A.lc(C.d5,new B.ahh(w.c,this.c,v),C.E1),v),!1,3,1,v)},
$S:42}
B.aQr.prototype={
$0(){var x=this.a
return x.x.$1(x.d[this.b].a)},
$S:0}
B.b9_.prototype={
$1(d){var x=this.a
return x.aN(new B.b8Z(x))},
$S:46}
B.b8Z.prototype={
$0(){return this.a.d=!0},
$S:0}
B.b90.prototype={
$1(d){var x=this.a
return x.aN(new B.b8Y(x))},
$S:40}
B.b8Y.prototype={
$0(){return this.a.d=!1},
$S:0}
B.aQE.prototype={
$2(d,e){var x=null,w=A.b7(4),v=A.b([new A.cM(0,C.bA,C.P.av(0.12),D.bdx,16)],y.V),u=this.a.ok,t=u.z,s=u.w
return new A.cp(C.ez,x,x,A.lc(C.ez,A.lU(A.jz(x,A.bc(A.b([A.aqX(u.f,3),C.cq,A.aqX(t,8),C.dz,A.aqX(s,2),C.cA,A.bkS(5,t),C.dz,A.aqX(s,2),C.cA,A.bkS(4,t)],y.p),C.aK,C.M,C.ay),C.X,x,new A.ag(0,1/0,1122.942857142857,1/0),new A.bh(C.J,x,x,w,v,x,C.a7),x,x,x,D.FL,x,x,794),!0),C.E1),x)},
$S:948};(function aliases(){var x=B.YP.prototype
x.arg=x.m
x=B.Yx.prototype
x.aqY=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Vc.prototype,"gaGE","aGF",1)
x(v,"gaGG","aGH",2)
x(v,"gaGC","aGD",3)
x(v,"gaEv","aEw",4)
w(v,"gG3","aBj",0)
w(v,"gG7","aCE",0)
w(v,"ga3D","aDT",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.U,[B.afa,B.alg,B.aaE,B.ahh,B.aaF,B.aka,B.aaG,B.W7,B.FE])
w(A.a3,[B.NC,B.Ki,B.PO,B.IN])
w(A.a9,[B.YP,B.Yx,B.anD,B.anE])
v(B.Vc,B.YP)
w(A.oG,[B.b6s,B.b8T,B.b8U,B.aQr,B.b8Z,B.b8Y])
v(B.aeK,A.cF)
w(A.Ic,[B.UR,B.aOW,B.PP])
v(B.ahS,B.Yx)
w(A.m8,[B.b0w,B.b8V,B.b9_,B.b90])
w(A.qG,[B.b0y,B.b0x,B.aQk,B.b8X,B.b8W,B.aQp,B.aQE])
w(A.I,[B.ayW,B.PX])
x(B.YP,A.em)
x(B.Yx,A.fJ)})()
A.tv(b.typeUniverse,JSON.parse('{"afa":{"U":[],"d":[]},"NC":{"a3":[],"d":[]},"Vc":{"a9":["NC"]},"alg":{"U":[],"d":[]},"aeK":{"cF":["bb"],"ay":[]},"Ki":{"a3":[],"d":[]},"ahS":{"a9":["Ki"]},"PO":{"a3":[],"d":[]},"anD":{"a9":["PO"]},"aaE":{"U":[],"d":[]},"ahh":{"U":[],"d":[]},"aaF":{"U":[],"d":[]},"aka":{"U":[],"d":[]},"IN":{"a3":[],"d":[]},"aaG":{"U":[],"d":[]},"W7":{"U":[],"d":[]},"anE":{"a9":["IN"]},"FE":{"U":[],"d":[]}}'))
var y=(function rtii(){var x=A.a2
return{J:x("jv"),I:x("jD"),V:x("u<cM>"),p:x("u<d>"),z:x("bx<a9<a3>>"),w:x("lo"),X:x("zQ"),C:x("vp"),B:x("rK"),A:x("lC"),x:x("K"),N:x("j"),L:x("aN<h>"),t:x("aN<P>"),l:x("Bj")}})();(function constants(){D.y_=new A.M(1,0.8980392156862745,0.8980392156862745,0.9176470588235294,C.A)
D.adC=new A.af(0,10,0,4)
D.adF=new A.af(0,12,0,6)
D.adK=new A.af(0,4,0,8)
D.adN=new A.af(0,8,0,4)
D.adP=new A.af(10,10,10,10)
D.adQ=new A.af(10,12,10,12)
D.aec=new A.af(4,0,0,0)
D.FL=new A.af(54,54,54,54)
D.aee=new A.af(6,0,6,8)
D.zq=new A.dM(61112,"MaterialIcons",null,!1)
D.afR=new A.dM(61358,"MaterialIcons",null,!1)
D.afY=new A.dM(63029,"MaterialIcons",null,!1)
D.bdx=new A.h(0,6)
D.by4=new B.aOW(3,"free")
D.C2=new B.PP(0,"phone")
D.bhA=new B.PP(1,"tablet")
D.bhB=new B.PP(2,"desktop")
D.blN=new A.am(null,14,null,null)
D.na=new B.UR(0,"pan")
D.xg=new B.UR(1,"scale")
D.bwo=new B.UR(2,"rotate")})()};
(a=>{a["/Xx/bM6b1P8EAbOoTeg0RZJfY8s="]=a.current})($__dart_deferred_initializers__);