## Special Syntax
### Linebreaks in a string
Use the pipe `|` to add a line break in a string.

```yaml
title: |
	| The Main Title
	| The subtitle
```

### Converting to PDF
```YAML
fontfamily: "Cormorant Garamond"
geometry: margin=3.5cm
header-includes: |
	\usepackage{fancyhdr, bookmark}
	\pagestyle{fancy}
```

## Traditional Paragraph Indentation
```YAML
header-includes: |
	\setlength{\parindent}{4em}
	\setlength{\parskip}{0em}
```

## Font Example
```YAML
fontfamily: "Cormorant Garamond"
fontsize: 12pt
```
