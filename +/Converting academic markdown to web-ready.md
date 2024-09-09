---
title: Converting academic markdown to web-ready
draft: 
metadata: 
tags:
---
When writing [[Academic Markdown]] in [[Obsidian]] with citations, the citations don't render when converted to html. The following scripts does the trick: 

```bash
pandoc --bibliography ./bib.bib -t markdown-citations --citeproc test.md -o test_c.md

sed -i '' 's/{\#ref.*}//g' test_c.md
sed -i '' 's/::://g' test_c.md
```

