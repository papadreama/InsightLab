
Create a [[YAML]] file. In my case, `title.txt`: 

```yaml
---
title: "Math, Music, and Coding Camp"
author: Dimitri Papadopoulos
date: "July 2023"
toc: true
rights: null
language: en-US
fontfamily: "Cormorant Garamond"
urlcolor: cyan
documentclass: report
header-includes: |
    \usepackage{fancyhdr, bookmark, pdfpages}
    \pagestyle{fancy}
---

\newpage
```

To start the table of contents on a new page:

```yaml
include-before: \newpage
```

Use a Python Script `MarkdownBook` to compile from a given contents file to a given pdf

Run the following in the terminal to compile the book.

```zsh
pandoc --toc -o MMC23.pdf title.txt\
 SoundChapter.md\
 PythagorusChapter.md\
 MusicTheoryChapter.md\
 SymmetryChapter.md\
 SamplingandSynthesisChapter.md\
 Appendix.md
```

I created an alias for a built-in python script for combining PDFs as an alternative option. 

```zsh
alias pdfjoin="/System/Library/Automator/Combine\ PDF\ Pages.action/Contents    /MacOS/join"
```

To add a PDF cover page (made in LaTeX), specify the name of the output file followed by the cover and the document itself. 

```zsh
pdfjoin -o MMC23Slides.pdf cover.pdf MMC23.pdf
```

To read the contents from a file: 
```zsh
pandoc -o RegularTest.pdf `tr '\n' ' ' < contents.md`
```

*Wrote this into a script that takes as its input a file/book name.*
```zsh
#!/bin/zsh

pandoc -o $1.pdf `tr '\n' ' ' < contents.md`
```

Setting the document class to report is a good look, too. This is like book but one-sided. 
```zsh
documentclass: report
```


## Resources + Tools
- [Flavio's Method](https://flaviocopes.com/how-to-create-ebooks-markdown/) using [Honkit](https://github.com/honkit/honkit) + GitHub
- [Pandoc Documentation](https://pandoc.org/epub.html) 
- 