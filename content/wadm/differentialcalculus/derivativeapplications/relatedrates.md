---
title: Related Rates
weight: 41
math: true
---

# Related Rates

{{< hint "info" >}}

In most related rates problems, we have an equation that relates a bunch of quantities that are changing over time. For example, suppose we have a right triangle whose base and height are getting longer. Let's say the base is getting longer at a rate of 3 in/sec and the height is getting longer at a rate of 4 in/sec. 

{{< /hint >}}

### Applying Implicit Differentiation

![Triangle Diagram](/images/rttri.png)

If the base and height start from 0 in, then after 3 seconds, $a=9$ and
$b=12$. Using the pythagorean theorem, we get that $c=15$.

Suppose I want to know how fast the area of the triangle is growing at
that moment. The formula for area is $A=\frac{1}{2}ab$. Since $A$, $a$,
and $b$ are all growing over time, we can take the derivative of both
sides with respect to $t$ (implicit differentiation).

$$\begin{aligned}
A&=\frac{1}{2}ab\cr
\frac{dA}{d t}&=\frac{1}{2}\frac{da}{d t}b + \frac{1}{2}a\frac{db}{d t}\end{aligned}$$

Notice that we used the **product rule** on the right hand side and
**treated each letter as a function of $t$**.

**What do $\frac{dA}{d t}$, $\frac{da}{d t}$, and $\frac{db}{d t}$
represent?**

They are the rates of change of $A$, $a$, and $b$, respectively. So,
$\frac{da}{d t} = 3$ and $\frac{db}{d t} = 4$ because we said that these
sides are growing at those rates. $\frac{dA}{d t}$ is the rate of change
of the area with respect to time. This is what we want to know.

We can find how fast the area is growing at 3 seconds by plugging
everything into that differentiated equation:

$$\begin{aligned}
\frac{dA}{d t}&=\frac{1}{2}\frac{da}{d t}b + \frac{1}{2}a\frac{db}{d t}\cr
& = \frac{1}{2}(3)(12) + \frac{1}{2}(9)(4)\cr
& = \boxed{36 \text{ in}^2/\text{sec}}\end{aligned}$$

### Example: Oil Spill

Oil spilled from a ruptured tanker spreads in a circle whose area
increases at a constant rate of 6 mi$^2$/hr. How fast is the radius of
the spill increasing when the area is 9 mi$^2$?

*The following steps are intended to provide a framework for solving
these types of problems. You do not have to work through these problems
in exactly the same order, but having a systematic approach that works
for you is very important.*

STEP 1: Start by drawing a picture.

![Oil Spill](/images/tanker.png)

STEP 2: Variables

We have two quantities varying here: area and radius. Let $r$ be the
radius of the spill and $A$ be the area of the spill.

STEP 3: Phrasing the given information and the question in term of the
variables We are told that the area increases at a constant rate of
6mi$^2$/hr. This is a change in area/change in time
$\to \frac{dA}{d t}$. So, we have $\frac{dA}{d t} = 6$.

We are asked "How fast is the radius of the spill increasing when the
area is 9 mi$^2$?" This can be rephrased with our variable and their
derivatives as "What is $\frac{d r}{d t}$ when $A= 9$mi$^2$?"

STEP 4: Relevant formulas

What are the relevant formulas?

Since we're dealing with a circle, there are only two options:
$A=\pi r^2$ and $C=2\pi r$. Since there's no mention of circumference,
we can disregard the latter formula.

STEP 5: Differentiate and solve

$$\begin{aligned}
A&=\pi r^2\cr
\frac{dA}{d t} &= \pi (2r) \frac{d r}{d t}\end{aligned}$$

Notice that in order to solve for $\frac{d r}{d t}$ we need to plug in
$\frac{dA}{d t}$ and $r$. $\frac{dA}{d t}$ is given, but we still need
$r$.

Find $r$ when $A = 9$.

$$\begin{aligned}
A&=\pi r^2\cr
9&=\pi r^2\cr
\frac{9}{\pi}&=r^2\cr
r &= \frac{3}{\sqrt{\pi}}\end{aligned}$$

And now, finally, we can solve:

$$\begin{aligned}
\frac{dA}{d t} &= \pi (2r) \frac{d r}{d t}\cr
6 &= \pi (2)\left(\frac{3}{\sqrt{\pi}}\right)\left(\frac{d r}{d t}\right)\cr
6 &= 6\sqrt{\pi}\frac{d r}{d t}\cr
\frac{d r}{d t} &= \frac{6}{6\sqrt{\pi}}\cr
&=\boxed{\frac{1}{\sqrt{\pi}} \text{ mi/hr}}\end{aligned}$$

### Example: Softball Diamond
A softball diamond is a square whose sides are 60 ft long. Suppose that
a player running from first to second base has a speed of 25 ft/s at the
instant when she is 10 ft from second base. At what rate is the players
distance from home plate changing at that instant?

Draw a picture and label variables

![Softball Diamond](/images/baseball.png)

I've called the distance from the origin $D$ and the distance between
the player and first base $y$. The distance between home and first
doesn't need a name since it isn't changing. Rephrasing We are told that
$\frac{d y}{d t} = 25$.

We want to find $\frac{dD}{d t}$ when $y=50$.

Relevant formulas

We have a right triangle. Since there's no mention of angle, lets use
the pythagorean theorem: $60^2 + y^2 = D^2$.

Differentiate and solve

$$
\begin{aligned}
60^2 + y^2 &= D^2\cr
2y\frac{d y}{d t} &= 2D\frac{dD}{d t}
\end{aligned}
$$
 
We'll need $D$ when
$y=50$. So we plug into the original equation:

$$60^2 + (50)^2 = D^2$$ 

$$D = \sqrt{6100} = 10\sqrt{61}$$

Now, we plug everything into the differentiated formula:

$$2(50)(25) = 2\sqrt{6100}\frac{dD}{d t}$$

$$\frac{dD}{d t} = \frac{1250}{10\sqrt{61}} = \frac{125}{\sqrt{61}}$$


### Exercise: Spherical Baloon

Air is being pumped into a spherical balloon at a rate of 7 cubic
centimeters per second. What is the rate of change of the radius at the
instant the volume is 36$\pi$? The volume of a sphere of radius $r$ is
$\frac{4\pi}{3}r^3$.

{{< details "Solution" >}}

Let's differentiate first (remember to treat each variable as a function
of $t$):

$$V = \frac{4}{3}\pi r^3 \Longrightarrow \text{ implicit differentiation } \Longrightarrow \frac{dV}{d t} = 4\pi r^2\frac{d r}{d t}$$

We need to find $\frac{d r}{d t}$ at the instant when $V=36\pi$. We
already know that $\frac{dV}{d t} = 7$ from the problem statement (that's
the rate of change of the volume). But we also need to plug in for $r$.
To find the value of $r$ at the instant when $V=36\pi$, we can use the
original volume formula.

$$\begin{aligned}
    V &= \frac{4}{3}\pi r^3\cr
    36\pi &= \frac{4}{3}\pi r^3\cr 
    r &= 3
    \end{aligned}$$

Now we plug everything in and solve:

$$\begin{aligned}
    \frac{dV}{d t} &= 4\pi r^2\frac{d r}{d t}\cr
    7 &= 4\pi (3)^2\frac{d r}{d t}\cr
    \frac{d r}{d t} &= \boxed{\frac{7}{36\pi}\text{ cm}^3/\text{sec}}
    \end{aligned}$$

{{< /details >}}

### Exercise: Sliding Ladder

A young woman and her boyfriend plan to elope, but she must first rescue
him from his mother who has locked him in his room. The young woman has
placed a 20 foot long ladder against his house and is knocking on his
window when his mother starts pulling the bottom of the ladder away from
the house at a constant rate of 3 feet per second. How fast is the top
of the ladder (and the young couple) falling when the bottom of the
ladder is 12 feet from the bottom of the wall?

{{< details "Solution" >}}

We'll use the following variables:

-   $x$: the distance from the bottom of the ladder to the wall

-   $y$: the distance from the top of the ladder to the ground

We're given $\frac{dx}{d t} = 3$. We want to find $\frac{d y}{d t}$ when
$x=12$.

Let's first differentiate $x^2 + y^2 = 20^2$ with respect to $t$:

$$2x\frac{dx}{d t} + 2y\frac{d y}{d t} = 0$$

We already know what to plug in for $x$ and $\frac{dx}{d t}$ ,but we also
need to plug in for $y$. When $x=12$ we have:

$$12^2 + y^2 = 20^2$$ 

$$y=16$$

Finally, we have:

$$2(12)(3) + 2(16)\frac{d y}{d t} = 0$$
$$\frac{d y}{d t} = \boxed{-\frac{9}{4} ft/sec}$$ 

{{< /details >}}


### Exercise: Conical Tank

A conical water tank has a height of 20 ft and a radius of 10 ft at the
top. If water is being poured into the tank at a rate of 10 ft$^3$/min,
how quickly is the depth of the water increasing when the water is 8 ft
deep? when the water is 12 ft deep?

{{< details "Solution" >}}

![Cone](/images/cone.png)

In this problem, the first thing we want to do is simplify the volume
formula so that it depends only on the height. Notice that, because the
liquid in the tank takes the shape of the conical tank, they must be
similar cones. Just like similar triangles, they must be proportional.

$$\frac{r}{h} = \frac{10}{20} \Longrightarrow r=\frac{1}{2}h$$

Now, we can rewrite the formula for volume. $V=\frac{1}{3}\pi r^2h$
becomes
$$V=\frac{1}{3}\pi\left(\frac{1}{2}h\right)^2h \Longrightarrow \text{ simplify } \Longrightarrow V=\frac{1}{12}\pi h^3$$

Now, when we differentiate, we don't have to use the product rule.

$$\frac{dV}{d t} = \frac{1}{12}\pi (3h^2)\frac{dh}{d t} \Longrightarrow \text{ simplify } \Longrightarrow \frac{dV}{d t} = \frac{1}{4}\pi h^2\frac{dh}{d t}$$

We know $\frac{dV}{d t} = 10$ and want $\frac{dh}{d t}$ when $h=8$, so we
have

$$10 = \frac{1}{4}\pi(8)^2\frac{dh}{d t} \text{ simplify } \Longrightarrow \frac{dh}{d t} = \boxed{\frac{5}{8\pi}ft/min}$$

If we want $\frac{dh}{d t}$ when $h=12$, we get

$$10 = \frac{1}{4}\pi(12)^2\frac{dh}{d t} \text{ simplify } \Longrightarrow \frac{dh}{d t} = \boxed{\frac{5}{18\pi}ft/min}$$

{{< /details >}}

### Exercise: Rocket Camera

A camera is mounted 4000 ft from the base of a rocket launching pad. If
the rocket is rising vertically at 1000 ft/sec when it is 3000 ft above
the launching pad, how fast must the camera elevation angle change at
that instant to keep the rocket in sight? How fast is the camera-rocket
distance changing at that same moment?

{{< details "Solution" >}}

![Rocket-Camera](/images/rocket.png)

Let's use $\tan{\theta} = \frac{y}{4000}$ to find the rate of change of
the elevation angle (You could use any trig function, but this equation
uses mostly stuff we know already).

$$\tan{\theta} = \frac{y}{4000} \Longrightarrow \text{ differentiate } \Longrightarrow \sec^2{\theta}\frac{d\theta}{d t} = \frac{1}{4000}\frac{d y}{d t}$$

We want $\frac{d\theta}{d t}$ and already know $\frac{d y}{d t}$.
$\sec\theta$ can just be read from the triangle:

$$\sec\theta = \frac{hyp}{adj} = \frac{5000}{4000} = \frac54$$ 

So we
have

$$\left(\frac54\right)^2\frac{d\theta}{d t} = \frac{1}{4000}(1000) \Longrightarrow \frac{d\theta}{d t} = \boxed{\frac{4}{25} rad/sec}$$

To find the camera-rocket distance, we can just use the Pythagorean
theorem:

$$4000^2 + y^2 = R^2 \Longrightarrow \text{ differentiate } \Longrightarrow 2y\frac{d y}{d t} = 2R\frac{dR}{d t}$$

Plug in what we know:

$$2(3000)(1000) = 2(5000)\frac{dR}{d t}$$
$$\frac{dR}{d t} = \boxed{600 ft/sec}$$

{{< /details >}}

### Exercise: Street Light Shadow

A street light is mounted at the top of a 12 ft pole. A 4 ft child walks
away from the pole at a speed of 3 ft/sec. How fast is the tip of her
shadow moving?

{{< details "Solution" >}}

Our setup looks like this:

![Lamppost](/images/lamp.png)

The rate at which her shadow is moving is $\frac{dx}{d t}$ - this is what
we want to solve for.

Using similar triangles, we have $\frac{x}{12} = \frac{b}{4}$.
Alternatively, we can write $\frac{a + b}{12} = \frac{b}{4}$

Simplifying that, we're left with $a = 2b$. Differentiating both sides
with respect to $t$ yields

$$\frac{da}{d t} = 2\frac{db}{d t}$$

Plugging in what we know, we get $3 = 2\frac{db}{d t}$ so
$\frac{db}{d t} = \frac32$.

Since $x = a + b$,
$$\frac{dx}{d t} = \frac{da}{d t} + \frac{db}{d t} = 3 + \frac32 = \boxed{9/2\text{ ft/sec}}$$

{{< /details >}}
