# Elenore Changelog

## 0.4.3

* Fix selected row on striped table

## 0.4.2

* Fix customize Elenore
* Fix loading select
* Fix control height
* Fix is-grouped control
* Fix checkbox/radio wrapping
* Feature has-icons placement
* Fix selected table row
* Add customize page
* Fix columns negative horizontal margin
* Fix pagination wrapping
* Fix color keys as strings

## 0.4.1

* Fix max-width container
* Fix notification delete
* Fix nav-right without nav-menu
* Fix hero and notification buttons
* Fix has-addons z-index
* Feature select color modifiers
* Fix -ms-expand
* Fix better `+center` mixin
* Fix `dl` styles
* Fix `pre` `margin-bottom`
* Fix icon alignment
* Fix bold nav menu
* Fix nav container
* Fix nav grouped buttons
* Fix container example
* Fix select expanded
* Fix separate animations

## 0.4.0

* **Default font-size is 16px**
* **New `.field` element ; `.control` repurposed**
* **New `.pagination` sizes**
* **New `$fullhd` breakpoint (1344px)**

* Remove monospace named fonts
* Remove icon spacing logic
* Split icon container dimensions and icon size
* Fix delete button by using pixels instead of (r)em
* Fix level on mobile
* Add new `.is-spaced` modifer for titles and subtitles

## 0.3.8

* Fixed: loading spinner color
* Fixed: invalid sass syntax
* Fixed: the name of the example section
* Added: !default to $button-shadow-inset
* Added: `lang` attribute to `html` tag

## 0.3.7

* Fixed: rem change breaks build

## 0.3.6

* Fixed: `.delete`
* Added: mixins documentation
* Added: functions documentation

## 0.3.5

*	Fixed: button spacing
* Added: image placeholders

## 0.3.4

* Fixed: `.columns`
* Fixed: `.tile`

## 0.3.3

* Fixed: `.panel`

## 0.3.2

* Fixed: `.pagination`
* Fixed: `.tabs`

## 0.3.1

* Added: invert outlined buttons
* Fixed: `.nav`

## 0.3.0

* Use `rem` and `em` (!)
* Fixed: Font Awesome icons in buttons (!)
* Fixed: message colors (!)
* Use `{% capture %}` to ensure same display as code snippet (!)

* Move variables to their own file
* Remove small tag
* Added: `:focus` state
* Fixed: table
* Remove table `.is-icon` and `.is-link`
* Added: `.content` table
* Fixed: inputs with icons
* Input icons require the `.icon` container
* Deprecate `.media-number`
* Fixed: `.level-item` height
* Fixed: `.menu` spacing
* Deprecate `.menu-nav`

## 0.2.0

* Fixed: remove multiple imports

## 0.1.8

* Fixed: new brand colors
* Fixed: remove modal example container class

## 0.1.7

* Fixed: container flex
* Fixed: nav-item flex
* Fixed: media-number flex

## 0.1.6

* Added: table variables

## 0.1.5

* Added: modularity

## 0.1.4

* Added: grid modules

## 0.1.3

* Added: docs folder
* Added: Illuminate.css
* Added: new colors
* Fixed: color luminance
* Remove: mixins

## 0.1.2

* Added: `.flex-shrink`

## 0.1.1

* Remove `flex: 1` shorthand

## 0.1.0

* BREAKING: `.control.is-grouped` now uses `.control` elements as direct children
* Huge bug fixes and code optimization

## 0.0.26

* Added: `.modal-card`
* Added: display responsive utilites
* Added: `.nav-center`
* Added: `.tabs ul` left center right
* Changed: `.navbar` renamed to `.level`
* Changed: `.header` renamed to `.nav`
* Deprecated: `.header`
* Deprecated: `.navbar`
* Fixed: `.hero` layout

## 0.0.25

* Added: `utilities/controls.sass` and `elements/form.sass`
* Added: new responsive classes
* Added: white/black and light/dark colors
* Changed: `.tabs` need `.icon` now

## 0.0.24

### Added

* `is-mobile` for the navbar

### Removed

* removed border between sections. Use `<hr class="is-marginless">` now

### Updated

* restructured files
* added back `inline-flex` for controls and tags

### Removed

* test tiles

## 0.0.23

### BREAKING

* `Elenore` folder renamed to `sass`
* `variables.sass` moved to `/utilities`
* almost everything is singular now
* **elements** only have one class
* **components** have at least one sub-class
* `.content` moved to elements
* `.table` moved to elements
* `.message` moved to components
* `.table-icon`, `.table-link`, `.table-narrow` are now called `.is-icon`, `.is-link`, `.is-narrow`

### Added

* all variables are now `!default` so you can set your custom variables before importing Elenore

## 0.0.22

### Fixed

* links in hero subtitle

## 0.0.21

### Added

* `.column.is-narrow` to make a column `flex: none`

## 0.0.20

### Added

* `.has-icon` support for different `.input` sizes

## 0.0.19

### NEW!!!

* `.tile`

### BREAKING

* `.is-third` renamed to `.is-one-third`
* `.is-quarter` renamed to `.is-one-quarter`

### Added

* `.is-two-thirds`
* `.is-three-quarters`

### Changed

* `.delete` in `.tag` has no red

## 0.0.18

### BREAKING

* `.is-text-*` renamed to `.has-text-*`
* removed `.is-fullwidth` helper

### Added

* **small tag**: `.tag.is-small`
* 12th column classes
* `*-full` column classes
* `$family-code`

### Fixed

* disabled input with element
* `.table` last row with `th`
* `.card` color in `.hero`
* `.columns.is-gapless`

### Removed

* removed `box-shadow` from `.tag`
* custom checkboxes and radio buttons

### Updated

* `.tag` uses `display: inline-flex` now

## 0.0.17

### Added

* **pagination**: `.pagination`
* **horizontal forms**: `.control.is-horizontal`
* **help** text for form controls: `.help`
* **progress bars**: `.progress`

### Updated

* `.button` uses `display: inline-flex` now
* `.button` needs an `.icon` now
* `.control.is-grouped` renamed to `.control.has-addons`
* `.control.is-inline` renamed to `.control.is-grouped`

### Removed

* **helpers** `.is-inline` and `.is-block`
