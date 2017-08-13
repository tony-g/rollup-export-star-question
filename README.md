# rollup-export-star-question

* See `bundle.js` for the output (`yarn build` runs rollup to produce the bundle)
* `src/doesnt-work` imports via `./selectors/index` and its `export *`
* `src/this-works` imports directly from `./selectors/calculation`

This repo is an example for this question: https://github.com/rollup/rollup/issues/1550
