
# Using ABC [[Music]] Notation

## Basic Syntax
Add `music-abc` after ` ``` `:

```
X:1
T:A Little Tune
M:4/4
L:1/8
R:
K:G
"GMaj7" GA "G7" B6|"CMaj9" D2E4D2]
"G"D D2 E | G2 A G | d d2 B | G2] 
w:1.~I know a place 'bout a mile down the road
```

```music-abc
X:1
T:A Little Tune
M:4/4
L:1/8
R:
K:G
"GMaj7" GA "G7" B6|"CMaj9" D2E4D2| "Am9" a8| "B7" a/2b/2 a6 z2]|
```


## Notes
- Middle C: `C` (`CDEFGABC`)
- One octave higher: lower case (`cdefgabc`)
- Two octaves higher: add apostrophe (`c'd'e'f'g'a'b'c`)
- One octave Lower: add comma (`C,D,E,F,G,A,B,`)

```music-abc
X: 1
T: Notes
M: 4/4
L: 1/8
K: C
||CDEF GABc|cdef gabc'|c'd'e'f' g'a'b'c''|C,D,E,F, G,A,B,C|]
```

[![pitches.0000.png](https://abcnotation.com/wiki/_media/abc:standard:pitches.0000.png?cache=&w=531&h=121&tok=ed78e3 "pitches.0000.png")](https://abcnotation.com/wiki/_media/abc:standard:pitches.0000.png?cache= "View original file")
## Chords
- In quotes `Bm7add13`

## Lyrics
- Mark with `w:` under melody
```music-abc
X: 1
T: Amazing Grace
M: 4/4
L: 1/8
K: C
"G7" z3 G, | C5/2 ED E5/2 D | C5/3]
w: A- ma- zi- ing grace how sweet
```

```
X: 1
T: Amazing Grace
M: 4/4
L: 1/8
K: C
"G7" z3 G, | C5/2 ED E5/2 D | C5/3]
w: A- ma- zi- ing grace how sweet
```

## Rhythm and Fill/Improvisations
```music-abc
M:4/4
L:1/4
K: style=rhythm
"I6" B0 B0 "biiio" B0 B0 | "ii" B0 B0 "biiio" B0 B0 | "I6" B0 B0 B0 B0 ||
```


```bash
M:4/4
L:1/4
K: style=rhythm
"I6" B0 B0 "biiio" B0 B0 | "ii" B0 B0 "biiio" B0 B0 | "I6" B0 B0 B0 B0 ||
```

```music-abc
M:4/4
L:1/8
K: style=rhythm
e2 e4 e4 e2 
```
