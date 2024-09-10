---
title: Academic Markdown
draft: 
tags:
---

> **Summary**
> We can use Markdown in conjunction with BibTex to generate academic papers with citations. This is preferable to writing in LaTeX for a few reasons. First, Markdown is much simpler to write and easier to read. Secondly, Markdown is lighter and much more flexible, allowing easy conversion/rendering to PDF, HTML, DOCX, etc. 

## Setup
To generate citations, we need a `.bib` file, formatted appropriately. To write the `.bib` file *by hand*, we can pull the citations from [Google Scholar](https://scholar.google.com). For example, 

```latex
@article{hegg2018preservice,
title={Preservice teacher proficiency with transformations-based congruence proofs after a college proof-based geometry class},
author={Hegg, Meredith and Papadopoulos, Dimitri and Katz, Brian and Fukawa-Connelly, Timothy},
journal={The Journal of Mathematical Behavior},
volume={51},
pages={56--70},
year={2018},
publisher={Elsevier}
}
```

In this example, `hegg2018preservice` is the citation key that we'll use in our markdown file to refer to this citation. We can make it whatever we like.

## Pandoc
To get started, the following terminal command will generate a PDF (or HTML) file using the selected `.bib` file:

```shell
pandoc TestPaper.md --bibliography biblio.bib -o out.pdf 
```

This will place the works cited at the end of the document. To create a separate works cited page, we can add the following to the bottom of our document: 

```markdown
\newpage
## Works Cited
```

### Styles
The default citation style for pandoc is Chicago. We can add the `--csl` option to our pandoc command to select an alternative citation style. 

```shell
--csl=/Users/chris/Documents/writing/chicago.csl
```

## Citations
### In-Line
We can generate standard in-line citations by using brackets: `[@hegg2018preservice]`. This will add the appropriately formatted citation - e.g., if using MLA, APA, or Chicago, it'll drop a parenthetical reference. 

Another option for in-line citations is to include them mid-sentence without the brackets. 

```markdown
As discussed in @hegg2018preservice, yadda, yadda, yadda...
```

### Footnotes
To include a citation as a footnote, we use the following syntax. 
- Add `[^1]` where the superscript ought to go. 
- Include the citation as a footnote anywhere in the document in the following form 
	- `[^1]: [@hegg2018preservice]`

## Options
We can include page numbers, paragraph numbers, and comments in in-line citations. 

```markdown
[@hegg2018preservice, p. 18 - 23]
```

## Document formatting
To get things double-spaced, include this in the header:

```yaml
---
geometry: margin=1in
header-includes:
    - \usepackage{setspace}
    - \doublespacing
---
```


