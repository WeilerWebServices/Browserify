git clone https://github.com/browserify/browserify.git
git clone https://github.com/browserify/events.git
git clone https://github.com/browserify/detective.git
git clone https://github.com/browserify/resolve.git
git clone https://github.com/browserify/http-browserify.git
git clone https://github.com/browserify/wzrd.in.git
git clone https://github.com/browserify/vm-browserify.git
git clone https://github.com/browserify/timers-browserify.git
git clone https://github.com/browserify/syntax-error.git
git clone https://github.com/browserify/browserify-website.git
git clone https://github.com/browserify/console-browserify.git
git clone https://github.com/browserify/browser-pack.git
git clone https://github.com/browserify/module-deps.git
git clone https://github.com/browserify/browser-resolve.git
git clone https://github.com/browserify/insert-module-globals.git
git clone https://github.com/browserify/brfs.git
git clone https://github.com/browserify/watchify.git
git clone https://github.com/browserify/deps-sort.git
git clone https://github.com/browserify/static-eval.git
git clone https://github.com/browserify/webworkify.git
git clone https://github.com/browserify/commonjs-assert.git
git clone https://github.com/browserify/node-util.git
git clone https://github.com/browserify/path-browserify.git
git clone https://github.com/browserify/stream-browserify.git
git clone https://github.com/browserify/tty-browserify.git
git clone https://github.com/browserify/browser-unpack.git
git clone https://github.com/browserify/factor-bundle.git
git clone https://github.com/browserify/browserify-zlib.git
git clone https://github.com/browserify/static-module.git
git clone https://github.com/browserify/browserify-handbook.git
git clone https://github.com/browserify/stream-splicer.git
git clone https://github.com/browserify/labeled-stream-splicer.git
git clone https://github.com/browserify/bundle-collapser.git
git clone https://github.com/browserify/ify-loader.git
git clone https://github.com/browserify/awesome-browserify.git
git clone https://github.com/browserify/common-shakeify.git
git clone https://github.com/browserify/discuss.git
git clone https://github.com/browserify/admin.git
git clone https://github.com/browserify/tinyify.git
git clone https://github.com/browserify/rustify.git
git clone https://github.com/browserify/detective-esm.git
git clone https://github.com/browserify/acorn5-object-spread.git
git clone https://github.com/browserify/acorn-node.git
git clone https://github.com/browserify/perf-hooks-browserify.git

curl "https://api.github.com/orgs/browserify/repos?per_page=1000" | grep -o 'git@[^"]*' | xargs -L1 git clone

read -r -p "Change All .git > DOTgit? [Y/n]" response
response=${response,,} #   <-- tolower
if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
   find . -depth -type d | while read FNAME; do mv "$FNAME" "${FNAME//.git/DOTgit}"; done
fi

read -r -p "Remove All .git? [Y/n]" response
response=${response,,} #   <-- tolower
if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
   find . -depth -type d -name ".git" -exec rm -rf {} \; && find . -depth -type d -name ".github" -exec rm -rf {} \;
fi
