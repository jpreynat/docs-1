# Install

Make sure you have Python and pip

```pip install mkdocs-material```

When in the root of the repo type:

```mkdocs serve```

Any changes made in the docs will reload immediately in browser

To develop docs faster, use `mkdocs serve --dirtyreload` - this won't build the search index and a handful of other things, but will make it far less annoying to wait for each little change to build the whole stack

### Partial Section Reloads (Developing)

Since our page density is so large - rebuilding the whole docs can take considerable amount of time, we have a build script which will read the `mkdocs.yml.master` file and take in an arugment to build a specific top-level section

Example of this usage is 

```
node build.js build Server
```

If you don't have `nodejs` installed, make sure you have it installed and perform a `npm install` from within the docs directory to install the `build.js` dependencies

Example output

```
node build.js build Server
Building docs for section 'Server'
INFO    -  Building documentation...
WARNING -  A 'dirty' build is being performed, this will likely lead to inaccurate navigation and other links within your site. This option is designed for site development purposes only.
[I 180501 00:40:46 server:283] Serving on http://127.0.0.1:8000
[I 180501 00:40:46 handlers:60] Start watching changes
[I 180501 00:40:46 handlers:62] Start detecting changes
```

The page tree for `Server` should at this point take a split second and you can continue writing your pages

### Build All Docs

* This is not a production build command - this will build just the page and nav structure for development purposes still. Search does not get built

```
node build.js build all
```

### Deploy

To do a full deploy - assuming you have the `site_dir` set in `mkdocs.yml.master` - you can deploy via

```
node build.js deploy
```