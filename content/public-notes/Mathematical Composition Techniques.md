
# Composition Techniques

---
## Introduction

- In this section we are going to look at a few mathematical composition techniques.
+ An *abstract algebraic* view of the relationships between chords
+ Species counterpoint
+ Composing with magic squares


---
## Symmetry

Music theory is full of patterns

$$major: \langle N, N+4, N+7 \rangle \quad minor: \langle N, N+3, N+7 \rangle$$

+ While all of mathematics could be said to be about structure and pattern, the field of abstract algebra, which is the study of algebraic structures, is particularly well suited to exploring the relationships among a given set of *objects* and the operations that can be performed on them. 
+ That said, abstract algebra can provide a great framework for analyzing music and abstracting the relationships found in modern (Western) music theory to uncover other possible musics. Let's start with a basic introduction to Abstract Algebra.

---

## Some Preliminaries

---

### Definition: What is a set?
A set is an **unordered collection of mathematical objects, without repetition**. 
+ We can have finite sets like *the numbers 1 - 10* 
+ We can have infinite sets like *all odd numbers*
+ We can have a set of functions like *all quadratic functions*

---

### Notation
- Representation
	+ We'll represent sets with curly braces $\{\}$. 
+ Naming
	+ We'll name sets with single letters, just like regular variables. 
+ Examples 
	+ $A = \{1,2,3,4,5,6,7,8,9\}$
	+ $B = \{2,4,6,8,10\}$

---

### Applying our definition
+ In our definition, we said two important things:
	+ Sets aren't ordered
	+ Sets don't have repeated elements
+ Examples: 
	+ $\{1,2,3\} = \{2,3,1\} = \{1,3,2\}$
		+ We've changed the order, but the set is the same set. 
	+ $\{1,2,3\} = \{1,1,2,3,3,3,3,3\}$
		+ Repeated elements "don't count"
---
### Elements
- We'll refer to the objects that make up a set as *elements*. 
	+ E.g., $5$ is an element of the set $\{1,2,3,4,5,6,7,8,9\}$
+ Writing "...is an element of the set..." would get tedious, so we'll introduce some new notation.
	+ $\in$ = "...is an element of..."
	+ E.g., $5 \in \{1,2,3,4,5,6,7,8,9\}$
		+ But, $12 \notin \{1,2,3,4,5,6,7,8,9\}$
---
### Special Sets
##### Some sets come up often, so they get dedicated names. 
+ Integers: $\mathbb{Z} = \{\dots,-3,-2,-1,0,1,2,3,\dots\}$
+ Natural Numbers: $\mathbb{N} = \{0,1,2,3,\dots\}$
+ Rational Numbers: $\mathbb{Q} = \;?$
+ Real Numbers: $\mathbb{R} = \;?$
---
### Hard-to-write sets
- How do we write out the set of *rational numbers*? 
+ We can't list them and use ellipses (...) like we did with integers and natural numbers because for any two rational numbers, there's always another one in between them. How do we know?
	+ Go halfway between. 
	+ Consider $1/8$ and $1/4$. Between them we have $3/16$. 
+ With the reals, this gets even worse!

---
#### Set-builder notation
- Say we want to write out the set of *even natural numbers*
	+ So, we want all the non-negative even numbers
+ We could write $E = \{0,2,4,6,8,\dots\}$
+ That's **okay**, but it leaves it to the reader to figure out the pattern we're trying to convey. 
+ Here's a better, much less ambiguous way, to write it: 
	+ $E = \{x \in \mathbb{N} : \exists \; n \in \mathbb{N}\; (x = 2n)\}$
+ Huh?
---
##### Unpacking set-builder notation
- What does $E = \{x \in \mathbb{N} : \exists \; n \in \mathbb{N}\; (x = 2n)\}$ mean? 
+ The colon (`:`) means "such that"
+ Left of (`:`) tells us what kinds things are in the set or what form they take
	+ In this case, $x$ is a *natural number*
+ Right of the (`:`) gives us constraints
	+ $x$ is a natural number such that for some other natural number $n$, $x = 2n$. 
+ Put it all together...
	+ $E$ is the set of even natural numbers. 
---
#### Examples (Finite Sets)
Let's look at some finite sets in set-builder notation and see if we can list their elements. 
- $A = \{x\in\mathbb{Z}:-2\leq x\leq 3\}$
	+ $x$ is an *integer* such that $-2\leq x\leq 3$ 
	+ $\boxed{A = \{-2, -1, 0,1,2,3\}}$
+ $B = \{n \in \mathbb{N} : n \lt 5\}$
	+ $n$ is a natural number such that $n\lt5$
	+ $\boxed{B = \{0,1,2,3,4\}}$
---
#### One more finite example
- $C = \{1/n : n\in\mathbb{N} \text{ and } 1 \leq n \leq  4\}$
	+ This one's a little trickier! 
	+ The elements all take the form $1/n$, where $n$ is a natural numbers **and** is between 1 and 4
	+ $\boxed{C = \{1, 1/2, 1/3, 1/4\}}$
---
#### Example (Infinite Sets)
Now let's do the same for some infinite sets. 
- $D = \{1/n^{2} : n \in \mathbb{N} \text{ and } n \gt 0\}$ 
	+ All the elements in our set take the form $1/n^2$ where $n$ is a natural number. 
	+ $D = \{1/1^2, 1/2^2,1/3^2, 1/4^2,\dots \}$
	+ Simplified: $D = \left\{1, \frac14, \frac19, \frac1{16},\dots\right\}$
---
### Subsets
+ We say that $A$ is a *subset* of $B$ provided that every element of $A$ is an element of $B$. 
	+ You can think of this as meaning $A$ is contained within $B$
	+ $A$ is a subset of $B$ if **for all** $x\in A$, $x\in B$. 
+ Notation: 
	+ $A \subseteq B$ (if $A$ might be equal to $B$)
	+ $A\subset B$ (if $A$ is definitely not equal to $B$)
---
#### Examples
+ $\{1,2,3,4\} \subset \{0,1,2,3,4,5,6\}$
+ $\mathbb{N} \subset \mathbb{R}$
+ $\{1,2\} \subseteq \{1,2\}$
+ $\mathbb{Z} \not\subset \mathbb{N}$. 
+ $\{\} \subset \{1,2,3\}$
	+ The *empty set* is a subset of any set. Why?
	+ $\{\} \subset \{1,2,3\}$ means that if $x\in\{\}$ then $x \in\{1,2,3\}$. This is *vacuously true*. 
---
### Power Set
+ Given a set $A$, the *power set* of $A$, written $\mathcal{P}(A)$, is the **set of all subsets** of $A$. 
	+ $\mathcal{P}(A) = \{X: X\subseteq A\}$
+ Example: Let $A = \{1,2,3\}$
	+ $\mathcal{P}(A) = \{\{\},\{1\}, \{2\}, \{3\}, \{1,2\}, \{1,3\}, \{2,3\}, \{1,2,3\}\}$ 
---
#### How big is the power set?
+ Question: for a finite set $A$, how many elements are in $\mathcal{P}(A)$? Or, what is $|\mathcal{P}(A)|$?
	+ Answer: $|\mathcal{P}(A)| = 2^{|A|}$
	+ Why?
		+ To write any subset of $A$, we have to make a choice for each element of $A$: "include" or "don't include". That's two choices for each element. 
		+ So, for $|A|$ many elements, we get $2\cdot2\cdot2\cdots2 = 2^{|A|}$ 
---
### Cardinality
- The *cardinality* of a set is the number of elements it contains, or its *size*. 
+ Notation: we denote cardinality with *absolute value bars* 
	+ E.g., If $A = \{2,4,6,8\}$, then $|A| = 4$ (the cardinality of $A$ is 4)
	+ **Recall:** repeated elements don't count! So, if someone writes a set like $B = \{1,1,1,1,2,2,2,2\}$, we still only have two distinct elements, so $|B| = 2$. 
---
#### Infinite Sets
+ Many sets have infinite cardinality: 
	+ E.g., $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$
		+ It's possibly to categorize *infinites*, but that's for another course. 
		+ You might consider why $\mathbb{R}$ is in a different category of *infinite-ness* than $\mathbb{Z}$. 

---
### Operations on Sets
#### Unions and Intersections
+ The first two operations we'll define are *union* ($\cup$) and *intersection* ($\cap$)
+ *Union*: $A \cup B = \{x : x\in A \text{ or } x \in B\}$
	+ The union of $A$ and $B$ is the set of all elements that are in wither $A$ or in $B$.
+ *Intersection:* $A \cap B = \{x : x\in A \text{ and } x \in B\}$
	+ The intersection of $A$ and $B$ is the set of all elements that are in both $A$ and $B$>  

---
#### Venn Diagrams

![[content/assets/Union.png]]

--

![[content/assets/Intersection.png]]

---
#### Example
+ Let $A = \{1,2,3,4,5\}$ and $B = \{2,4,6, 8\}$
	+ $A \cup B = \{1,2,3,4,5,6,8\}$
		+ Each of these elements is in either $A$ or $B$.
	+ $A\cap B = \{2,4\}$
		+ Each of these elements is in **both** $A$ and $B$
---
#### Example
- Let $A = \{x \in \mathbb{N} : x \leq 20\}$ and $B = \{x \in \mathbb{N} : x \text{ is prime}\}$ 
+ What is $|A\cap B|$? 
	+ $A$ is the set of all natural numbers less than or equal to $20$: $\{0,1,2,\dots, 20\}$
	+ $B$ is the set of all natural numbers that are *prime*.
	+ The intersection of $A$ and $B$ is all natural numbers that are less than or equal to $20$ **AND** are also prime. 
	+ $A \cap B = \{2, 3, 7, 11, 13, 17, 19\}$


---

### Clocks, Triangles, and Integers
+ What do clocks, triangles, and the set of integers have in common?
+ The branch of mathematics known as abstract algebra looks at the common features of seemingly very different mathematical objects. 
+ The foundational concept in that of the group.
+ Might go back to the 17th century but its genesis is usually attributed to Cauchy and Galois in the mid 1800s
+ Applications in quantum physics, cryptography, computer science…

---

### Clock Arithmetic
+ Suppose we have a clock with only 5 hours on it.
+ Number the hours 0 - 4
+ What happens when we do addition with the hours on the clock?
+ We “wrap around.”
+ 3 + 4 = 2
+ 4 + 1 = 0
+ 2 + 5 = 2
+ 1 + 2 = 3
+ This is called *modular arithmetic* (mod 5)

---

#### Notation
+ We write $\boxed{a \equiv b \mod{n}}$ if $a - b$ is divisible by $n$.
	+ $n | a - b$ : "$n$ divides $a - b$"
+ On the previous slide, it would be better to write...
	+ $3 + 4 \equiv 2 \mod{5}$ 
	+ $4 + 1 \equiv 0 \mod{5}$ 
	+ $2 + 4 \equiv 1 \mod{5}$

---

#### Congruence/Residue Classes
+ $[a] = \{ b \in \mathbb{Z} : a \equiv b \mod{n}\} = \{a + kn : k \in \mathbb{Z}\}$
	+ For example, if we consider $\mod{5}$, what is $[2]$?
		+ $[2] = \{2, 7, 12, 17, 22, \dots\}$
	+ How many distinct congruence classes do we get with $\mod{5}$ arithmetic?
		+ $\{[0], [1], [2], [3], [4]\}$
+ Can we prove that if $a \equiv b \mod{n}$, then $[a] = [b]$?
	+ Hint: show $[a] \subseteq [b]$ and $[b] \subseteq [a]$ 

---

#### Features of Modular Arithmetic
+ Inverses: For any number $a\in\mathbb{Z}$, we can find it's *additive inverse*, $a^{-1}$ such that $a + a^{-1} = 0 \mod{n}$
	+ Examples?
	+ $1 + 4 \equiv 0 \mod{5}$
	+ $3 + 2 \equiv 0 \mod{5}$
+ Identity: The additive identity is $0$ because for any $a\in\mathbb{Z}$, $a + 0 \equiv a \mod{n}$ 
+ Associativity: $a + (b+c) \equiv (a + b) + c \mod{n}$ 

---

#### MIDI Modular Arithmetic

| C |  C# |  D  | D#|   E   |F|   F#|   G   |G#|   A  | A#|   B |   C|
|---| ----| ---| ----| ---| ---| ----| ---| ----| ---| ----| ----| ---|
| 0 |  1|    2|   3|    4|   5|   6|    7|   8|    9|   10|   11|   0|

$$M = (\mathbb{Z}_{12}, +)$$
+ $60 \equiv 0 \mod{12} \Longrightarrow 60_{MIDI} = C$
+ $75 \equiv 3 \mod{12} \Longrightarrow 75_{MIDI} = D\#$

---

### Symmetry
+ What is symmetry?
	+ ... symmetric means something like well-proportioned, well-balanced, and symmetry denotes that sort of concordance of several parts by which they integrate into a whole. Beauty is bound up with symmetry. - Hermann Weyl 
+ In mathematics, we define *a symmetry* to be an undetectable motion of a geometric object. 
	+ E.g., consider a rectangle. How many ways can we move, flip, rotate a rectangle so that someone looking at the before-and-after wouldn’t be able to tell anything was done?

---

![](Assets/Screenshot%202023-07-12%20at%206.40.32%20AM.png)

---

#### Multiplication (Cayley) Table
In each cell, enter the result of performing the operation in the row followed by the operation in the column (row • col)

|       | $e$ | $r_1$ | $r_2$ | $r_3$ |
| ----- | --- | ----- | ----- | ---- |
| $e$   |     |       |       |      |
| $r_1$ |     |       |       |      |
| $r_2$ |     |       |       |      |
| $r_3$ |     |       |       |      |


---

### Symmetries of an Equilateral Triangle
+ Let’s define the symmetries of an equilateral triangle.
+ How many distinct symmetries can you think of?
	+ $e$: no motion
	+ $r$: rotation by 120 deg
	+ $r^{2}$: rotation by 240 deg
	+ $f_1$: flip over vertical axis
	+ $f_2$: flip over left vertex axis
	+ $f_3$: flip over right vertex axis

---

![](Assets/Screenshot%202023-07-12%20at%208.52.06%20AM.png)

---

![](Assets/Screenshot%202023-07-12%20at%2010.56.30%20AM.png)


---

#### What do you notice?
+ Notice, each row contains each of the six elements. So does each column. 
+ The symmetries are not commutative
+ $x\cdot y \neq y \cdot x$ for all $x$ and $y$. 
	+ E.g., $r\cdot f_1 = f_2$ but $f_1\cdot r = f_3$
+ How about associativity?
	+ Sure! $r(f_1\cdot f_2) = r(r^2) = e = (r\cdot f_1)f_2 = (f_2)f_2$

---

#### Only Two Basic Motions
+ We could have worked with two basic motions (and the non motion, e)
	+ Rotation: $r$
		+ $r^{3} = e$
	+ Flipping over the vertical axis: $f$
		+ $f^{2} = e$
+ Why are these enough?
+ Def: relabel vertices starting at $0$
	+ $r_n(x) = x + n \mod{3}$
	+ $f_n(x) = -x + n \mod 3$
+ Ex: $r_2(2) = 1$
+ Ex: $f_1(2) = -2 + 1 = -1 \mod{3} = 2$

---

### Dihedral Groups
+ For an n-sided polygon, the dihedral group of order 2n is generated by two elements (operations/motions), r and f, such that…
	+ $r^{n} = e$ (identity) 
	+ $f^{2} = e$
	+ $frf = r^{-1}$  (try this one)
+ So, the symmetries of all regular polygons can be characterized in the same way

---

### Integers Under Addition
+ Let $\mathbb{Z} = \{\dots, -3, -2, -1, 0, 1, 2, 3, \dots \}$ (the set of all integers)
+ What happens when we add any two integers?
+ We get another integer.
+ We have an identity element: $0$ 
	+ $0 + x = x = x + 0$ for all $x$ (or $\forall x$)
+ Every integer has an additive inverse: $x + (-x) = 0$ for any $x$. 
+ We have associativity since $a + (b + c) = (a + b) + c$

---

## Groups
+ We’ve looks at three examples of a group. 
	+ Modular arithmetic
	+ Symmetries of an equilateral triangle
	+ Integers under addition 
+ Properties in common: 
	+ **A set with an operation**
	+ Closure: we always get elements in the set
	+ Identity: there’s an element that “doesn’t do anything” when added/multiplied
	+ Inverses: every element has an inverse
	+ Associativity: we can group operations however we like (in same order)

---

### More Examples
+ The *positive* real numbers, with multiplication as the operation.
+ The integers under subtraction.
+ $\mathbb{Z}_{p}^{\times} = \{[1], [2], \dots, [p-1]\}$ (under multiplication)

---

## Musical Actions of Dihedral Groups
+ The *dihedral group of order 24* is the group of symmetries of a regular 12-sided polygon. Algebraically, the dihedral group of order 24 is generated by two elements, $s$ and $t$, such that 
	+ $s^{12} = 1, \quad t^{2} = 1, \quad tst = s^{-1}$
+ Let's take some time to make sense of these properties in terms of symmetries. 
	+ The operation $s$, is rotation by $\left(\frac{360}{n}\right)^{\circ}$ 
	+ The operation $t$ is reflection about an axis.

---

### First Musical Action
+ The first musical action of the dihedral group of order 24 we consider arises via the familiar compositional techniques of transposition and inversion. 
+ A transposition moves a sequence of pitches up or down. 
	+ When singers decide to sing a song in a higher register, for example, they do this by transposing the melody. 
+ An inversion, on the other hand, reflects a melody about a fixed axis, just as the face of a clock can be reflected about the 0-6 axis. 
	+ Often, musical inversion turns upward melodic motions into downward melodic motions.

---
#### Defining Transposition and Inversion

$$
\begin{cases}
T_n: \mathbb{Z} \to \mathbb{Z}\cr
T_n(x) := x+n \;mod\;12
\end{cases}
$$

$$
\begin{cases}
I_n: \mathbb{Z} \to \mathbb{Z}\cr
I_n(x) := -x+n \;mod\;12
\end{cases}
$$

---

### Negative Harmony
+ The inversion operation $I_7$ gives us something called *negative harmony*
+ Negative harmony is an approach to crafting chord progressions
	+ In a major key, we can *borrow* chords from the *parallel minor* key to make more interesting progressions
+ Example in C major
	+ Take $C = 0$
	+ What happens to the chord F-major (F-A-C)?
		+ F: $-5 + 7 = 2$ (D)
		+ A: $-9 + 7 = -2 \mod{12} = 10$ (Bb)
		+ C: $0 + 7 = 7$ (G)
		+ G-Bb-D is a G-minor

---

#### Let's write a negative harmony calculator in Sonic Pi

---

## The PLR-Group
+ The second action of the dihedral group of order 24 that we explore has only come to the attention of music theorists in the past two decades. 
+ Its origins lie in the $P$, $L$, and $R$ operations of the 19th-century music theorist Hugo Riemann. 
+ The parallel operation $P$ maps a major triad to its parallel minor and vice versa. The leading tone exchange operation $L$ takes a major triad to the minor triad obtained by lowering only the root note by a semitone. The operation $L$ raises the fifth note of a minor triad by a semitone. The relative operation R maps a major triad to its relative minor, and vice versa. 

---

#### Example
- $P(C-major)$ = $c-minor$
- $L(C-major) = e-minor$
- $R(C-major) = a-minor$

---

### Formalizing PLR
+ Another way of navigating the major and minor triads is through the *PLR-group*, initiated by David Lewin. As we'll find, the PLR-group has a beautiful geometric depiction called the Tonnetz.
+ Consider the three functions $P,L,R\;:S\to S$ defined as follows:
	+ $P\langle y_1, y_2, y_3\rangle = I_{y_1+y_3}\langle y_1, y_2, y_3\rangle$
	+ $L\langle y_1, y_2, y_3\rangle = I_{y_2+y_3}\langle y_1, y_2, y_3\rangle$
	+ $R\langle y_1, y_2, y_3\rangle = I_{y_1+y_2}\langle y_1, y_2, y_3\rangle$

---

#### Theorem: The PLR-group is generated by L and R and is dihedral of order 24.
+ **Recall:** The dihedral group of order 24 is the group of symmetries of a regular 12-sided polygon. Algebraically, the dihedral group of order 24 is generated by two elements, $s$ and $t$, such that
	+ $s^{12} = 1, \quad t^{2} = 1, \quad tst = s^{-1}$
+ **Proof:** Closure should be clear. Now let's consider a sequence of triads starting on C-major and then alternately applying $R$ and $L$.
	+ $C, a, F, d, B\flat, g, E\flat, c, A\flat, f, D\flat, b\flat, G\flat$
	+ $e\flat, B, g\#, E, c\#, A, f\#, D, b, G, e, C$
+ This tells us that the 24 bijections (reversible operations) are distinct and that we get at least 24 elements in our $PLR$-group.
	+ $R, LR, RLR, \dots, R(LR)^{11}, (LR)^{12} = 1$

---

+ Can we define $P$ in terms of $L$ and $R$? (Look at the sequence we generated above.)
	+ $P = R(LR)^{3}$
+ Now, set $s=LR$ and $t = L$. Then, $s^{12} = 1$ and $t^{2} = 1$. Lastly, confirm that $tst = s^{-1}$.
	+ $tst = L(LR)L = RL = s^{-1}$
+ Fascinatingly, the progression we looked at above (in our proof) can be found in Beethoven's 9th (2nd movement, measures 143-176).

---

#### The Tonnetz

The PLR actions can be visualized as movements about a *Tonnetz*. And so, Beethoven's 9th (or that particular segment of it) can be viewed as a path traced along a Tonnetz.

![](Assets/Tonnetz.gif)

---

#### Building the Tonnetz
![](Assets/TonnetzConstruction.png)


---

## Counterpoint

---

### Species Counterpoint
+ Species counterpoint is a step-by-step method for learning to write melodies and to combine them.
+ Consonance and dissonance:
	+ Perfect consonances: perfect unisons, fifths, and octaves
	+ Imperfect consonances: major and minor thirds and sixths
	+ Dissonances: all seconds, sevenths, and diminished and augmented intervals

---

+ Types of two-part motion:
	+ Contrary: the two parts move in opposite directions (one up, the other down
	+ Similar: the two parts move in the same direction (both up or both down)
	+ Parallel: the two parts move in the same direction (both up or both down) by the same distance, such that the starting and ending intervals are of the same type (e.g., parallel thirds)
	+ Oblique: one part moves, the other stays on the same pitch


---

#### First Species Counterpoint
The Rules
+ Begin on a perfect unison, fifth, or octave.
+ Both voices move at exactly the same rate and have no rhythmic variety (for example, all notes are whole notes).
+ Harmonically, the intervals between the two voices are all consonances.
+ Melodically, prefer stepwise motion and leap only occasionally. Melodic leaps of a tritone or seventh are forbidden.
+ Parallel perfect consonances are forbidden.
+ End with a perfect unison or octave.

---

### Activity: Compose a simple melody with counterpoint
- Compose a very simple melody of at least 7 notes in a key of your choosing 
- Follow the rules of first species counterpoint to create a harmony line
- Implement in Sonic Pi

```ruby
melody       = [60, 62, 65, 64, 69, 71, 72]
counterpoint = [67, 65, 69, 67, 72, 74, 72]

melody.length.times do |i|
	play [melody[i], counterpoint[i]]
	sleep 1
end	
```

--- 

## Magic Squares

---

## Definition

A *magic square* is an $n \times n$ array containing the numbers 

$$1, 2, 3, \dots, n^{2} - 1, n^{2}$$
each occurring once, and having each row, column, and main diagonal sum to the same value. 

| 8     | 1     | 6     |
| ----- | ----- | ----- |
| **3** | **5** | **7** |
| **4** | **9** | **2** |
<!-- element class="fragment" -->

---

| 16    | 3      | 2      | 13     |
| :-----: | :------: | :------: | :------: |
| **5** | **10** | **11** | **8**  |
| **9** | **6**  | **7**  | **12** |
| **4** | **15** | **14** | **1**  |

---

## Practice: Complete the Square

|        | 13    | 11    |        |
| :------: | :-----: | :-----: | :------: |
| **7**  |       |       | **1**  |
| **14** |       |       | **12** |
|        | **8** | **2** |        |

---

## The Magic Constant

$$M_{n} = \frac{n(n^{2} + 1)}{2}$$

---

### Proof

- Lemma: $1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}$
+ Let $S =  1 + 2 + 3 + \cdots + (n - 2) + (n - 1) + n$
+ Add $S$ to itself

$$
\begin{aligned}
S &= 1 + 2 + 3 + \cdots + (n - 2) + (n - 1) + n\cr
S &= n + (n - 1) + (n - 2) + \cdots + 3 + 2 + 1 \cr
\end{aligned}
$$

+ $2S = (n+1) + (n+1) + (n+1) + \cdots + (n+1)$ 
+ $2S = n(n+1) \Longrightarrow S=\frac{n(n+1)}{2}$

---

+ For a magic square, the sum of all the values is given by...
+ $\displaystyle  1 + 2 + 3 + \cdots + (n^{2} - 1) + n^{2} = \frac{n^{2}(n^{2} + 1)}{2}$
+ There are $n$ rows. Let $S$ be the common sum for each row. 
+ Then the sum of all the rows ($nS$) must equal the sum of all the values in the square
+ $\displaystyle nS = \frac{n^{2}(n^{2} + 1)}{2}$ 
+ $\displaystyle \boxed{S = \frac{n(n^{2} + 1)}{2}}$ 

---

### A Mirror of Whitening Light

+ *A Mirror of Whitening Light*, op. 75 was composed by Peter Maxwell Davies in 1977
+ Commissioned by London Sinfonietta. 
+ About 22 minutes long
+ All of the notes and their durations were created entirely from an $8 \times 8$ magic square. 

---

![](../Assets/Pasted%20image%2020240717094215.png)

---

### Davies' Process

+ Write out an $n \times n$ magic square
+ Write a melody of length $n$ 
+ Place your melody along the top row and leftmost column of a blank $n \times n$ square
+ Transpose your melody so it begins with the first note of each row
+ Number the squares $1 - n^{2}$
+ Map the notes from your square onto the magic square
+ Take the magic square's elements mod 8 to determine the length of each note

