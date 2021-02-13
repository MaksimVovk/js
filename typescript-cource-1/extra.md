# Watch mode

> tsc app.ts -w

# tsconfig.json file

> tsc --init - *init "tsconfig.json" file*
> tsc -w - *wach mode for all file in a project*

### "exclude"
Exclude file or directory

> "exclude": ["./Basics", "app.ts"]

### "include"
Include file or directory

> "include": ["./Basics", "app.ts"]

### "target"
Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'.

> "target": "es6"

### "lib"
Specify library files to be included in the compilation.

> "lib": [ "dom", "DOM.Iterable", "es6", "scripthost" ]


### "allowJs"
Allow javascript files to be compiled.

> "allowJs": true

### "checkJs"
Report errors in .js files.

> "checkJs": true

### "jsx"
Specify JSX code generation: 'preserve', 'react-native', or 'react'.

> "jsx": "preserve"

### "declaration"
Generates corresponding '.d.ts' file.

> "declaration": true

### "declarationMap"
Generates corresponding '.d.ts' file.

> "declaration": true

### "declarationMap"
Generates a sourcemap for each corresponding '.d.ts' file.

> "declarationMap": true

### "sourceMap"
Generates corresponding '.map' file.

> "sourceMap": true
