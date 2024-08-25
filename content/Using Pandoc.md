
# Pandoc

> [!abstract]+ Summary
> Pandoc is a universal converter that allows for conversion between all sorts of file formats including markdown, pdf, html, epub, docx, rtf, etc.

## Markdown
### [[Yaml]] Options
- `fontfamily`: set the font family. 
	- Limited to .sty files
	- if using another engine, like `xelatex`, this needs to be changed to `mainfont`
- Heading stuff that appears in a PDF
	- `title`
	- `subtitle`
	- `author`
	- `date`
- `pagenumbering: gobble`: suppress pagination
- `header-includes` allows for adding latex pacakges

## Terminal Options
### Engine
It's possible to set the rendering engine to something other than the default `pdflatex`. For example, if one wants to use any font available system-wide, `xelatex` is a good option.

```shell
pandoc --pdf-engine=xelatex font-test.md -o out.pdf
```

## Related Notes
- [Obsidian](Obsidian.md)
- [Working in the Terminal](Working%20in%20the%20Terminal.md)
- [Creating a Book from Markdown](Creating%20a%20Book%20from%20Markdown.md)
- [[Converting academic markdown to web-ready]]

