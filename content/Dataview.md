## Basic Formatting 

### Query
```
TABLE|LIST|TASK <field> [AS "Column Name"], <field>, ..., <field>
FROM <source>
WHERE <expression>
SORT <expression> [ASC/DESC]
... other data commands
```

From [Denise Todd](https://denisetodd.medium.com/obsidian-dataview-for-beginners-a-checklist-to-help-fix-your-dataview-queries-11acc57f1e48)
- Format of a field `field-name:: field-value`
	- Can be defined in body of note or in front matter
- Dataview has two **valid names for any field include:**
	1) the original name and   
	2) all-lower-case-with-dashes-instead-of-spaces-and-no-special-characters.


### Using the link function
`link(source, display)` e.g, `link(file.link,string(file.day)`