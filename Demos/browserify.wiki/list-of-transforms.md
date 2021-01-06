Here is a list of browserify transforms:

You should also consult the [packages on npm with the browserify-transform tag](https://npmjs.org/browse/keyword/browserify-transform).

* [aliasify](https://github.com/benbria/aliasify) - remap require calls at build time.
* [babelify](https://github.com/babel/babelify) (formerly "6to5ify") - turn ES6+ code into readable vanilla ES5 with source maps
* [blissify](https://github.com/agilemd/blissify) - compile `.html` files written using [bliss](https://github.com/cstivers78/bliss)
* [bpb](https://github.com/zenflow/bpb) - browserify transform to safely replace `process.browser` with `true` by working on the Abstract Syntax Tree (AST)
* [brfs](https://github.com/substack/brfs) - inline `fs.readFileSync()` calls with file contents
* [browserify-casesensitiverequire](https://github.com/peteward44/browserify-casesensitiverequire) - Emits warnings if the same file is require()'d using different casing from different files (causing it to build the same file multiple times on Windows, same code would fail on linux)
* [browserify-compile-templates](https://github.com/robrichard/browserify-compile-templates) - require `.html` file snippets to precompile [Underscore](https://github.com/jashkenas/underscore) templates.
* [browserify-cdnjs](https://github.com/dsdenes/browserify-cdnjs) - Browserify transform to require libraries from jsDelivr
* [browserify-css](https://github.com/cheton/browserify-css) - transform for bundling, rebasing, inlining, and minifying CSS files
* [browserify-istanbul](https://github.com/devongovett/browserify-istanbul) - a transform for the istanbul code coverage tool
* [browserify-markdown](https://github.com/lapwinglabs/browserify-markdown) - compile markdown for the browser
* [browserify-ng-html2js](https://www.npmjs.org/package/browserify-ng-html2js) - compile angular templates into angular modules. 
* [browserify-package-json](https://www.npmjs.com/package/browserify-package-json) - remove not public values from package.json
* [browserify-postcss](https://github.com/zoubin/browserify-postcss) - PostCSS precompiler and CSS handler. `require` the contents of CSS files as a string and/or automatically inject them into a document at runtime.
* [browserify-shim](https://github.com/thlorenz/browserify-shim) - make commonJS-incompatible libraries/files browserifyable
* [Browserify Substitution Mass Confusion](https://github.com/moll/browserify-substitution-mass-confusion) — Makes the `browser` field in `package.json` work in nested dependencies.
* [browserify-window-context](https://github.com/vintikzzz/browserify-window-context) - sets Window context to a shimmed module
* [browserify-swap](https://github.com/thlorenz/browserify-swap) - swaps out modules according to a config in your package.json selected via an environment variable
* [browserify-versionify](https://github.com/webpro/versionify) - Browserify transform to replace placeholder with package version
* [bulkify](https://github.com/substack/bulkify) - bulk require whole directories into nested objects using globs
* [cacheify](https://github.com/bockit/cacheify) - wraps around other transforms, caching their results to speed up bundling.
* [caching-coffeeify](https://github.com/thlorenz/caching-coffeeify) - coffeeify version that caches previously compiled files to optimize the compilation step
* [cocoify](https://github.com/superjoe30/cocoify) - transform for [coco](https://github.com/satyr/coco), unfancy coffeescript
* [coffee-reactify](https://github.com/jsdf/coffee-reactify) - compile `.coffee` and `.cjsx` files with CJSX (a superset of coffeescript used with the [react](http://facebook.github.io/react/) UI library) to javascript
* [coffeeify](https://github.com/jnordberg/coffeeify) - compile `.coffee` files to javascript automatically
* [combynify](https://github.com/chesles/combynify) - precompile [combyne](https://github.com/tbranyen/combyne) templates
* [commandify](https://github.com/thlorenz/commandify) - executes a command whenever the bundle is created
* [concatenify](https://github.com/trodrigues/concatenify) - concatenate files into a bundle
* [configurify](https://github.com/fgnass/configurify) - evaluate dynamic expressions on the server and expose the result as static snapshot
* [continuatify](https://github.com/alhimik45/continuatify) - a compiler for JavaScript asynchronous Continuation-Passing Style transformation ([continuation.js](https://github.com/BYVoid/continuation/))
* [cssify](https://github.com/davidguttman/cssify) - require `.css` files to add styles to the page
* [cssnextify](https://github.com/cssnext/cssnextify) - require css & [cssnext](http://cssnext.io/) 
* [css-modulesify](https://github.com/css-modules/css-modulesify) - locally-scope your css with [CSS Modules](https://github.com/css-modules/css-modules).
* [csvify](https://npmjs.org/package/node-csvify) - CSV and TSV transformations
* [dbify](https://github.com/mathisonian/dbify) - inline the results of database queries
* [deAMDify](https://github.com/jaredhanson/deamdify) - translate AMD modules to Node-style modules automatically
* [deassertify](https://github.com/node-opcua/deassertify) - comment 'assert' statements out of your production code.
* [debowerify](https://github.com/eugeneware/debowerify) - use [bower](http://bower.io) client packages more easily with browserify.
* [decomponentify](https://github.com/eugeneware/decomponentify) - use [component](https://github.com/component/component) client packages seamlessly with browserify.
* [deproptypeify](https://github.com/yaycmyk/deproptypeify) - analyzes your code to strip out <class>.propTypes declarations (React components); useful for production builds of bundled code
* [detabbify](https://www.npmjs.com/package/detabbify) - strip tabs and replace them with spaces
* [detachkify](https://github.com/adnanh/detachkify) - allow usage of absolute paths in require statements
* [dustify](https://github.com/alexgorbatchev/dustify) - converts Dust.js templates to JavaScript modules.
* [envify](https://github.com/hughsk/envify) - Selectively replace Node-style environment variables (`process.env`) with plain strings.
* [envlocalify](https://github.com/serapath/envlocalify) - Selectively replace Node-style environment variables (`process.env`) with plain strings, but loads them from specified files
* [es6ify](https://github.com/thlorenz/es6ify) - compile ES6 files to ES5 javascript automatically
* [eslintify](https://github.com/yaycmyk/eslintify) - applies eslint, respecting .eslintrc and .eslintignore
* [espowerify](https://github.com/twada/espowerify) - Weave [power-assert](https://github.com/twada/power-assert) feature into test code.
* [exposify](https://github.com/thlorenz/exposify) expose globals added via a script tag as modules so they can be required (used by [browserify-shim](https://github.com/thlorenz/browserify-shim))
* [extensify](https://github.com/oliverwoodings/extensify) - require files other than .js without specifying the extension (e.g .jsx files)
* [falafelify](https://github.com/KenPowers/falafelify) Run your modules through [falafel](https://github.com/substack/node-falafel) while bundling.
* [folderify](https://github.com/parroit/folderify) - inline content of a directory imported using [include-folder](https://github.com/parroit/include-folder). Files content is inlined using [brfs](https://github.com/substack/brfs)
* [forgetify](https://github.com/jsonmaur/forgetify) - invalidate files from the Browserify cache
* [glslify](https://github.com/chrisdickinson/glslify) - use npm modules in WebGL GLSL shaders
* [gorillaify](https://github.com/unc0/gorillaify) - compile `.gs`([gorillascript](http://ckknight.github.io/gorillascript)) files to javascript automatically
* [gppfy](https://github.com/Softmotions/gppfy) - HTML and JS preprocessor based on [GPP](http://files.nothingisreal.com/software/gpp/gpp.html)
* [graspify](https://github.com/dfcreative/graspify) - replace code via grasp
* [haribotify](https://github.com/nanila/haribotify) - merges HTML files and require it
* [hbsfy](https://github.com/epeli/node-hbsfy) - precompile handlebars templates to javascript functions automatically
* [hintify](https://github.com/ansis/hintify) - applies jshint, respecting .jshintrc and .jshintignore
* [html-minifyify](https://github.com/kesla/html-minifyify) - Inline calls to [html-minifier](https://github.com/kangax/html-minifier).
* [html2js](https://github.com/featurist/html2js-browserify) - Turn crummy HTML into beautiful Javascript: `var myHtml = require('./my.html')`.
* [icsify](https://github.com/maxtaco/icsify) - compile `.iced` IcedCoffeeScript files to javascript automatically
* [installify](https://github.com/hughsk/installify) - automatically installs your missing dependencies for you.
* [jadeify](https://github.com/domenic/jadeify) - include Jade files as compiled js templates.
* [jedify](https://github.com/tellnes/jedify) - transform po files to [Jed](http://slexaxton.github.io/Jed/) instances.
* [jisonify](https://github.com/schmich/jisonify) - include [Jison](https://github.com/zaach/jison) parsers in your project
* [jstify](https://github.com/zertosh/jstify) - require `.jst`/`.tpl` files to precompile [Underscore](https://github.com/jashkenas/underscore) and [Lo-Dash](https://github.com/lodash/lodash) templates (with [HTML minification](https://github.com/kangax/html-minifier))
* [jstransformify](https://github.com/andreypopp/jstransformify) - apply source to source AST transformations and generate source maps for them
* [lessify](https://npmjs.org/package/node-lessify) - LESS precompiler and CSS plugin
* [less-modulesify](https://github.com/wujohns/less-modulesify) - browserify plugin support css module for less
* [licensify](https://github.com/twada/licensify) - prepend license header to your bundle (Actually a plugin, not a transform.)
* [lispyscriptify](https://github.com/TehShrike/lispyscriptify) - require `.ls` files to import [Lispyscript](http://lispyscript.com/)
* [liveify](https://github.com/quarterto/liveify) - compile livescript files to javascript automatically
* [loaderify](https://github.com/swimmadude66/loaderify) - run operations on the contents of `require()`'d files, based on the filename. Similar to webpack loaders.
* [mithrilify](https://github.com/sectore/mithrilify) - converting [Mithril](http://lhorie.github.io/mithril/index.html) view templates based on [msx](https://github.com/insin/msx)
* [mithril-objectify](https://www.npmjs.com/package/mithril-objectify) - optimize [Mithril](http://mithril.js.org) `m(<tag>)` function calls into static objects
* [modcss](https://github.com/jameswomack/modcss) - turn CSS or Stylus into JSON for React components
* [modular-css](https://www.npmjs.com/package/modular-css) - Streamlined CSS Modules implementation
* [ngify](https://www.npmjs.com/package/ngify) - load HTML files into Angular's $templateCache and eliminate hard Angular dependency in JavaScript files by using annotations.
* [nunjucksify](https://github.com/rotundasoftware/nunjucksify) - precompile [nunjucks](http://mozilla.github.io/nunjucks/) templates.
* [package-json-versionify](https://github.com/nolanlawson/package-json-versionify) - `require('./package.json').version` and strip everything else from `package.json`.
* [partialify](https://github.com/bclinkinbeard/partialify) - `require()`-able HTML, CSS, JSON and (potentially) more
* [pathmodify](https://github.com/jmm/pathmodify) - Rewrite (alias, map) `require()` calls to avoid `../` and `./` relative paths and still use programmatic transforms. Also dynamically control module exposure. (Actually a plugin, not a transform.)
* [phantomjsify](https://github.com/twolfson/phantomjsify) - shim out node.js core for [PhantomJS](http://phantomjs.org/)
* [pkgify](https://github.com/oliverwoodings/pkgify) - more efficient and extensive alternative to aliasify and remapify
* [pogoify](https://github.com/featurist/pogoify) - compile [pogoscript](http://pogoscript.org/) files.
* [ractivate](https://github.com/jrajav/ractivate) - pre-parse [Ractive.js](http://www.ractivejs.org/) templates
* [reactify](https://github.com/andreypopp/reactify) - compile JSX (superset of javascript used in [react](http://facebook.github.io/react/) UI library) files to javascript
* [redirectify](https://github.com/lukehansell-hx/redirectify) - redirect require statements during bundle() if specified override folder is found
* [require-globify](https://github.com/capaj/require-globify) - require many js files easily with globbing expressions
* [requirish](https://github.com/enricostara/requirish) - tool for avoiding the ../../../ relative paths problem and includes a browserify-transform to rewrites require() for browser
* [rewireify](https://github.com/i-like-robots/rewireify) - a port of Rewire that adds setter and getter methods to each module so that their behaviour can be modified for better unit testing.
* [rfileify](https://github.com/ForbesLindesay/rfileify) - inline `rfile(path)` calls with file contents (also supports `ruglify` and any other `rfile` derivatives)
* [rfolderify](https://github.com/quarterto/rfolderify) - turn calls to rfolder into a map of requires of the files in the thing
* [riotify](https://github.com/jhthorsen/riotify) - pre-compile [Riot.js](https://github.com/muut/riotjs) templates
* [scssify](https://github.com/cody-greene/scssify) - Sass transform. `require` the contents of Sass files as a string and optionally inject them into a document using a link or style tag. Plus watchify support!
* [sassify](https://github.com/davidguttman/sassify) - SASS precompiler and CSS handler. `require` the contents of (S)CSS files as a string and/or automatically inject them into a document at runtime by using the option --auto-inject.
* [shortify](https://github.com/bodokaiser/node-shortify) - rewrites `require('./foo/../baz')` to `require('./../../foo/bar/../baz')` or however defined per options
* [stringify](https://github.com/JohnPostlethwait/stringify) - require() text files (templates) inside of your client-side JavaScript files.
* [stripify](https://github.com/alanshaw/stripify) - strip `console.log` lines from your code
* [stylify](https://github.com/DamonOehlman/stylify) - for Stylus
* [sveltify](https://github.com/tehshrike/sveltify) - require [Svelte](https://svelte.technology/) components
* [svg-reactify](https://github.com/coma/svg-reactify) - transform SVG files into React elements.
* [sweetify](https://github.com/andreypopp/sweetify) - transform for loading and transforming code with [Sweet.js](http://sweetjs.org/) macros
* [swcify](https://github.com/dy/swcify) - process files with [SWC](https://github.com/swc-project/swc) compiler.
* [swigify](https://github.com/bodokaiser/node-swigify) - precompiles `include` and `extends` tags in swig templates
* [transfigurify](https://github.com/thlorenz/transfigurify) - configure which transforms get applied to your package via an environment variable
* [turn](https://github.com/juliangruber/turn) - minimal modules for a hypothetical es6 with lua's return
* [tsify](https://github.com/TypeStrong/tsify) - compile typescript files to javascript
* [tscriptify](https://github.com/semurgx/tscriptify) - typescript transform
* [unassertify](https://github.com/twada/unassertify) - remove assertions from code to encourage Design by Contract (DbC)
* [unflowify](https://github.com/leebyron/unflowify) - remove Flow type annotations
* [unreachable-branch-transform](https://github.com/zertosh/unreachable-branch-transform) - comments out unreachable code branches in `if` statements, ternaries `?`, and logical operations `||` `&&`
* [varify](https://github.com/thlorenz/varify) - converts all `const` assignments to `var` assignments.
* [vee-cee-ellify](https://github.com/lordvlad/vee-cee-ellify) - injects styles compiled from `styl` files using [vcl](https://github.com/lordvlad/vee-cee-ellify/blob/master/package.json)'s preprocessor
* [viralify](https://github.com/thlorenz/viralify) - injects browserify transforms into specified dependencies of a package recursively
* [vueify](https://github.com/vuejs/vueify) - transform for Vue.js components, with scoped CSS and component hot-reloading.
* [yamlify](https://github.com/dmapper/yamlify) - YAML support for browserify and node.js
* [weexify](https://www.npmjs.com/package/weexify)  -  Weex support for browserify