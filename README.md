# Elenore

[![npm](https://img.shields.io/npm/v/elenore.svg)](https://www.npmjs.com/package/elenore)

Elenore is a modern CSS framework based on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes).

[![Elenore: a Flexbox CSS framework](https://raw.githubusercontent.com/YellowDi/Elenore/master/images/elenore-logo.png)](https://yellowdi.github.io/Elenore/)

## Quick install

Elenore is in early but active development! Try it out now:

### NPM

```sh
npm install elenore
```
**or**

### Bower

```sh
bower install elenore
```

## CSS only

Elenore is a **CSS** framework. As such, the sole output is a single CSS file: [Elenore.css](https://github.com/YellowDi/Elenore/blob/master/css/Elenore.css)

You can either use that file, "out of the box", or download the Sass source files to customize the variables

There is **no** JavaScript included. People generally want to use their own JS implementation (and usually already have one). Elenore can be considered "environment agnostic": it's just the style layer on top of the logic.

## Browser Support

Elenore uses [autoprefixer](https://github.com/postcss/autoprefixer) to make (most) Flexbox features compatible with earlier browser versions. According to [Can I use](http://caniuse.com/#feat=flexbox), Elenore is compatible with:

* Chrome
* Edge
* Firefox
* Opera
* Safari

Internet Explorer (10+) is only partially supported.

## Documentation

The documentation resides in the [docs](docs) directory, and is built with the Ruby-based [Jekyll](https://jekyllrb.com/) tool.

Browse the [online documentation here.](https://yellowdi.github.io/Elenore/)

## Copyright and license

Code copyright 2017 YellowDi. Code released under [the MIT license](https://github.com/YellowDi/Elenore/blob/master/LICENSE).
