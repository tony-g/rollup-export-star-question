# rollup-export-star-question

* See `bundle.js` for the output (`yarn build` runs rollup to produce the bundle)
* `src/doesnt-work` imports via `./selectors/index` and its `export *`
* `src/this-works` imports directly from `./selectors/calculation`
