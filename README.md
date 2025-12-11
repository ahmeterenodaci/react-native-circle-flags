# circle-flags <img src="logo.svg" alt="circle-flags animated logo" align="right">

A collection of circular SVG country flags.

## Usage

```text
https://hatscripts.github.io/circle-flags/flags/xx.svg
```

(Where `xx` is the [ISO 3166-1 alpha-2 code](https://www.iso.org/obp/ui/#search/code/) of a country).

For example, the following code:

```html
<img src="https://hatscripts.github.io/circle-flags/flags/br.svg" width="48" />
<img src="https://hatscripts.github.io/circle-flags/flags/cn.svg" width="48" />
<img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" width="48" />
<img src="https://hatscripts.github.io/circle-flags/flags/id.svg" width="48" />
<img src="https://hatscripts.github.io/circle-flags/flags/in.svg" width="48" />
<img src="https://hatscripts.github.io/circle-flags/flags/ng.svg" width="48" />
<img src="https://hatscripts.github.io/circle-flags/flags/ru.svg" width="48" />
<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="48" />
```

...produces this:<br/><br/> <img src="https://hatscripts.github.io/circle-flags/flags/br.svg" width="48"> <img src="https://hatscripts.github.io/circle-flags/flags/cn.svg" width="48"> <img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" width="48"> <img src="https://hatscripts.github.io/circle-flags/flags/id.svg" width="48"> <img src="https://hatscripts.github.io/circle-flags/flags/in.svg" width="48"> <img src="https://hatscripts.github.io/circle-flags/flags/ng.svg" width="48"> <img src="https://hatscripts.github.io/circle-flags/flags/ru.svg" width="48"> <img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="48">

To view all the available flags, check [the gallery](https://hatscripts.github.io/circle-flags/gallery).

### React

If you're using [React](https://reactjs.org), you may want to try the [react-circle-flags](https://www.npmjs.com/package/react-circle-flags) package.

### SolidJS

If you're using [SolidJS](https://www.solidjs.com/), you may want to try the [solid-circle-flags](https://www.npmjs.com/package/solid-circle-flags) package.

### NPM

If you want to install this package as a dependency, you can install it from this GitHub repository:

```sh
npm install --save https://github.com/HatScripts/circle-flags
```

### Userscripts

- [Google Translate: Filter & Flags](https://github.com/HatScripts/google-translate-filter-and-flags) - Filters languages and shows country flags on Google Translate
- [Wiktionary: Filter & Flags](https://github.com/HatScripts/wiktionary-filter-and-flags) - Filters languages and shows country flags on Wiktionary

## Contributing

To contribute, you need to have the latest version of [svgo](https://github.com/svg/svgo) installed.

First, edit the relevant SVG files in the `flags/` directory.

Then run `svgo` to optimize the SVG files:

```sh
svgo ./flags --recursive --config=svgo.config.js
```

Then commit the changes, and submit them as a pull request.

### The color palette

Submitted flags should conform to the following color palette.<br/> Try to match the flag's original colors with the nearest color from the palette.

- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#eeeeee"></svg> `#eeeeee`: white
- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#acabb1"></svg> `#acabb1`: gray
- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#333333"></svg> `#333333`: black
- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#a2001d"></svg> `#a2001d`: dark red
- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#d80027"></svg> `#d80027`: red
- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#ff9811"></svg> `#ff9811`: orange
- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#ffda44"></svg> `#ffda44`: yellow
- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#6da544"></svg> `#6da544`: green
- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#496e2d"></svg> `#496e2d`: dark green
- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#338af3"></svg> `#338af3`: light blue
- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#0052b4"></svg> `#0052b4`: blue

Special cases:

- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#002266"></svg> `#002266`: dark blue (only two usages: [<img src="https://hatscripts.github.io/circle-flags/flags/td.svg" width="16"> Chad](https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/td.svg), to differentiate from [<img src="https://hatscripts.github.io/circle-flags/flags/ro.svg" width="16"> Romania](https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/ro.svg); and [<img src="https://hatscripts.github.io/circle-flags/flags/aq-true_south.svg" width="16"> True South (Antarctica)](https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/aq-true_south.svg))
- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#4a1f63"></svg> `#4a1f63`: purple (only one usage: [<img src="https://hatscripts.github.io/circle-flags/flags/es-ib.svg" width="16"> Balearic Islands](https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/es-ib.svg))
- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 2 2"><circle cx="1" cy="1" r="1" fill="#751a46"></svg> `#751a46`: dark pink (only one usage: [<img src="https://hatscripts.github.io/circle-flags/flags/qa.svg" width="16"> Qatar](https://github.com/HatScripts/circle-flags/blob/gh-pages/flags/qa.svg))

## License

This project is released under the [MIT license](LICENSE.md).
