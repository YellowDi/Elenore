# Elenore Changelog

## 1.3.4

* Fixed: spacing of the delete button in notification element
* Fixed: missing use of `$pagination-color` variable
* Fixed: navbar-menu background-color
* Fixed: `media-content` overflow
* Fixed: change dropdown-menu `padding-top: unset` to support IE11

## 1.3.3

* Added: New Rounded buttons, inputs, pagination and toggle tabs
* Added: New `.is-italic` helper
* Added: `sub` and `sup` title sizes
* Added: `.is-expanded` modifier for `navbar-item`
* Added: `.is-centered` and `.is-right` modifiers for `tags`
* Added: `.is-empty` modifier for `file`
* Added: `.is-selected` class allow on `<td>` and `<th>` tags

* Fixed: `$variable-columns` to disable `--columnGap`
* Fixed: Bug dropdown in `hero` (primary) menu items not visible
* Fixed: Safari momentum translation

## 1.3.2

### New features

* Support for five column grid: `.is-one-fifth, .is-two-fifths, .is-three-fifths, .is-four-fifths`

### Fixed

* Fixed: progress bar colors in IE

## 1.3.1

### New features

* [List of buttons](https://yellowdi.github.io/Elenore/documentation/elements/button/#list-of-buttons)
* New `.is-invisible` helper

### Improvements

* Improve: `tag > icon` spacing
* Improve: `hamburger` alignment

### Fixed

* Fixed: able `is-selected` and `is-hoverable` styling issue

## 1.3.0

### Breaking changes

* The new `$link` color is part of the `$colors` map. As a result, `.button.is-link` is a colored button now. Use `.button.is-text` if you want the underlined button.
* The deprecated `variables.sass` file has been removed.
* The deprecated `nav.sass` file has been removed.

### New features

* New [Divider](https://yellowdi.github.io/Elenore/documentation/layout/divider)

### Improvements

* The `$link` color is used instead of `$primary` in the following components:

<table>
  <tr>
    <th>Variable</th>
    <th>Old value</th>
    <th>New value</th>
  </tr>
  <tr>
    <td><code>$dropdown-item-active-color</code></td>
    <td><code>$primary-invert</code></td>
    <td><code>$link-invert</code></td>
  </tr>
  <tr>
    <td><code>$dropdown-item-active-background-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$navbar-tab-hover-border-bottom-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$navbar-tab-active-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$navbar-tab-active-border-bottom-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$navbar-dropdown-item-active-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$tabs-link-active-border-bottom-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$tabs-link-active-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$tabs-toggle-link-active-background-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$tabs-toggle-link-active-border-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$tabs-toggle-link-active-color</code></td>
    <td><code>$primary-invert</code></td>
    <td><code>$link-invert</code></td>
  </tr>
</table>

## 1.2.3

* Added: `.badge` can display an outlined by using `.is-badge-outlined` modifier
* Added: `.dropdown` now supports `.is-up` modifier
* Added: `.table` hover effect is opt-in, by using the `.is-hoverable` modifier class
* Added: color is consistent with $input-color

## 1.2.2

* Added: `.card-header-title` can be centered with `.is-centered`
* Added: `.input` readonly and `.is-static`
* Added: `.textarea` readonly

## 1.2.1

* Added: `.has-text-justified` support

* Fixed: `.message .tag` combination
* Fixed: `pre code`
* Fixed: `.breadcrumb` alignment

## 1.2.0

* Added: Support for third party icons
* Added: Navbar tabs
* Added: `text-size-adjust: 100%` to `html`
* Added: `navbar` color modifiers
* Added: `icon` color modifiers

* Fixed: Undefined variable: `$navbar-item`
* Fixed: Font awesome custom `font-size`
* Fixed: Font awesome stacked icons

* Removed: `vertical-align: top` for icons
* Removed: gap between tag and delete button
* Removed: unwanted margin-right on `.level-item` at mobile breakpoint

## 1.1.1

* Added: `$button-focus-box-shadow-size` and `$button-focus-box-shadow-color` for customization
* Added: `$input-focus-box-shadow-size` and `$input-focus-box-shadow-color` for customization
* Added: `.is-narrow` modifier for `.hero` layout
* Added: type to Email input
* Added: a new modifier class for disabling resizability of a textarea
* Added: `!important` to non responsive display helpers
* Fixed: `.navbar-item img` max height
* Fixed: `$family-primary` customisation

## 1.1.0

* New [Color](https://yellowdi.github.io/Elenore/documentation/overview/colors)
* Added: responsive helpers to text-align helpers
* Fixed: `.pagination` isn't using `$pagination-background`
* Fixed: `.navbar-dropdown` with **right** alignment
* Fixed: Text case helpers

## 1.0.0

### Added

* New [List of tags](https://yellowdi.github.io/Elenore/documentation/elements/tag/#list-of-tags)
* New [File upload element](https://yellowdi.github.io/Elenore/documentation/form/file/)
* New `$container-offset` variable to determine the `.container` breakpoints
* New **variable naming system**: `component`-`subcomponent`-`state`-`property`
* Improved **customization** thanks to new set of variables

### Changed

Variable name changes (mostly appending `-color`):

<table>
<tr><th>From</th><th>To</th></tr>
<tr><td><code>$card</code></td><td><code>$card-color</code></td></tr>
<tr><td><code>$card-background</code></td><td><code>$card-background-color</code></td></tr>
<tr><td><code>$card-header</code></td><td><code>$card-header-color</code></td></tr>
<tr><td><code>$dropdown-item</code></td><td><code>$dropdown-item-color</code></td></tr>
<tr><td><code>$dropdown-content-background</code></td><td><code>$dropdown-content-background-color</code></td></tr>
<tr><td><code>$dropdown-item-hover-background</code></td><td><code>$dropdown-item-hover-background-color</code></td></tr>
<tr><td><code>$dropdown-item-hover</code></td><td><code>$dropdown-item-hover-color</code></td></tr>
<tr><td><code>$dropdown-item-active-background</code></td><td><code>$dropdown-item-active-background-color</code></td></tr>
<tr><td><code>$dropdown-item-active</code></td><td><code>$dropdown-item-active-color</code></td></tr>
<tr><td><code>$dropdown-divider-background</code></td><td><code>$dropdown-divider-background-color</code></td></tr>
<tr><td><code>$menu-item</code></td><td><code>$menu-item-color</code></td></tr>
<tr><td><code>$menu-item-hover</code></td><td><code>$menu-item-hover-color</code></td></tr>
<tr><td><code>$menu-item-hover-background</code></td><td><code>$menu-item-hover-background-color</code></td></tr>
<tr><td><code>$menu-item-active</code></td><td><code>$menu-item-active-color</code></td></tr>
<tr><td><code>$menu-item-active-background</code></td><td><code>$menu-item-active-background-color</code></td></tr>
<tr><td><code>$menu-label</code></td><td><code>$menu-label-color</code></td></tr>
<tr><td><code>$message-background</code></td><td><code>$message-background-color</code></td></tr>
<tr><td><code>$message-header-background</code></td><td><code>$message-header-background-color</code></td></tr>
<tr><td><code>$navbar-background</code></td><td><code>$navbar-background-color</code></td></tr>
<tr><td><code>$navbar-item</code></td><td><code>$navbar-item-color</code></td></tr>
<tr><td><code>$navbar-item-hover</code></td><td><code>$navbar-item-hover-color</code></td></tr>
<tr><td><code>$navbar-item-hover-background</code></td><td><code>$navbar-item-hover-background-color</code></td></tr>
<tr><td><code>$navbar-item-active</code></td><td><code>$navbar-item-active-color</code></td></tr>
<tr><td><code>$navbar-item-active-background</code></td><td><code>$navbar-item-active-background-color</code></td></tr>
<tr><td><code>$navbar-tab-hover-background</code></td><td><code>$navbar-tab-hover-background-color</code></td></tr>
<tr><td><code>$navbar-tab-hover-border-bottom</code></td><td><code>$navbar-tab-hover-border-bottom-color</code></td></tr>
<tr><td><code>$navbar-tab-active</code></td><td><code>$navbar-tab-active-color</code></td></tr>
<tr><td><code>$navbar-tab-active-background</code></td><td><code>$navbar-tab-active-background-color</code></td></tr>
<tr><td><code>$navbar-divider-background</code></td><td><code>$navbar-divider-background-color</code></td></tr>
<tr><td><code>$navbar-dropdown-item-hover</code></td><td><code>$navbar-dropdown-item-hover-color</code></td></tr>
<tr><td><code>$navbar-dropdown-item-hover-background</code></td><td><code>$navbar-dropdown-item-hover-background-color</code></td></tr>
<tr><td><code>$navbar-dropdown-item-active</code></td><td><code>$navbar-dropdown-item-active-color</code></td></tr>
<tr><td><code>$navbar-dropdown-item-active-background</code></td><td><code>$navbar-dropdown-item-active-background-color</code></td></tr>
<tr><td><code>$pagination</code></td><td><code>$pagination-color</code></td></tr>
<tr><td><code>$pagination-hover</code></td><td><code>$pagination-hover-color</code></td></tr>
<tr><td><code>$pagination-hover-border</code></td><td><code>$pagination-hover-border-color</code></td></tr>
<tr><td><code>$pagination-focus</code></td><td><code>$pagination-focus-color</code></td></tr>
<tr><td><code>$pagination-focus-border</code></td><td><code>$pagination-focus-border-color</code></td></tr>
<tr><td><code>$pagination-active</code></td><td><code>$pagination-active-color</code></td></tr>
<tr><td><code>$pagination-active-border</code></td><td><code>$pagination-active-border-color</code></td></tr>
<tr><td><code>$pagination-disabled</code></td><td><code>$pagination-disabled-color</code></td></tr>
<tr><td><code>$pagination-disabled-background</code></td><td><code>$pagination-disabled-background-color</code></td></tr>
<tr><td><code>$pagination-disabled-border</code></td><td><code>$pagination-disabled-border-color</code></td></tr>
<tr><td><code>$pagination-current</code></td><td><code>$pagination-current-color</code></td></tr>
<tr><td><code>$pagination-current-background</code></td><td><code>$pagination-current-background-color</code></td></tr>
<tr><td><code>$pagination-current-border</code></td><td><code>$pagination-current-border-color</code></td></tr>
<tr><td><code>$pagination-ellipsis</code></td><td><code>$pagination-ellipsis-color</code></td></tr>
<tr><td><code>$box</code></td><td><code>$box-color</code></td></tr>
<tr><td><code>$box-background</code></td><td><code>$box-background-color</code></td></tr>
<tr><td><code>$button</code></td><td><code>$button-color</code></td></tr>
<tr><td><code>$button-background</code></td><td><code>$button-background-color</code></td></tr>
<tr><td><code>$button-border</code></td><td><code>$button-border-color</code></td></tr>
<tr><td><code>$button-link</code></td><td><code>$button-link-color</code></td></tr>
<tr><td><code>$button-link-hover-background</code></td><td><code>$button-link-hover-background-color</code></td></tr>
<tr><td><code>$button-link-hover</code></td><td><code>$button-link-hover-color</code></td></tr>
<tr><td><code>$button-disabled-background</code></td><td><code>$button-disabled-background-color</code></td></tr>
<tr><td><code>$button-disabled-border</code></td><td><code>$button-disabled-border-color</code></td></tr>
<tr><td><code>$button-static</code></td><td><code>$button-static-color</code></td></tr>
<tr><td><code>$button-static-background</code></td><td><code>$button-static-background-color</code></td></tr>
<tr><td><code>$button-static-border</code></td><td><code>$button-static-border-color</code></td></tr>
<tr><td><code>$input</code></td><td><code>$input-color</code></td></tr>
<tr><td><code>$input-background</code></td><td><code>$input-background-color</code></td></tr>
<tr><td><code>$input-border</code></td><td><code>$input-border-color</code></td></tr>
<tr><td><code>$input-hover</code></td><td><code>$input-hover-color</code></td></tr>
<tr><td><code>$input-hover-border</code></td><td><code>$input-hover-border-color</code></td></tr>
<tr><td><code>$input-focus</code></td><td><code>$input-focus-color</code></td></tr>
<tr><td><code>$input-focus-border</code></td><td><code>$input-focus-border-color</code></td></tr>
<tr><td><code>$input-disabled</code></td><td><code>$input-disabled-color</code></td></tr>
<tr><td><code>$input-disabled-background</code></td><td><code>$input-disabled-background-color</code></td></tr>
<tr><td><code>$input-disabled-border</code></td><td><code>$input-disabled-border-color</code></td></tr>
<tr><td><code>$input-icon</code></td><td><code>$input-icon-color</code></td></tr>
<tr><td><code>$input-icon-active</code></td><td><code>$input-icon-active-color</code></td></tr>
<tr><td><code>$title</code></td><td><code>$title-color</code></td></tr>
<tr><td><code>$subtitle</code></td><td><code>$subtitle-color</code></td></tr>
<tr><td><code>$card-footer-border</code></td><td><code>$card-footer-border-top</code></td></tr>
<tr><td><code>$menu-list-border</code></td><td><code>$menu-list-border-left</code></td></tr>
<tr><td><code>$navbar-tab-hover-border</code></td><td><code>$navbar-tab-hover-border-bottom-color</code></td></tr>
<tr><td><code>$navbar-tab-active-border</code></td><td><code>$navbar-tab-active-border-bottom</code></td></tr>
<tr><td><code>$table-border</code></td><td><code>$table-cell-border</code></td></tr>
<tr><td><code>$table-row-even-background</code></td><td><code>$table-striped-row-even-background-color</code></td></tr>
<tr><td><code>$table-row-even-hover-background</code></td><td><code>$table-striped-row-even-hover-background-color</code></td></tr>
</table>

### Fixed

* Fixed: box missing variables
* Fixed: `.dropdown` wrapping
* Fixed: missing default statements to box and image
* Fixed: `.is-size-7` helper is missing
* Fixed: Tabs sass file throwing error with `!important`
* Fixed: Variable `$table-head-color` isn't used
* Fixed: `navbar-brand` overflowing on mobile

## 0.4.5

### Changed

* The breakpoints and `.container` **gap** can be customized with the new `$gap` variable
* The `.container` has 2 new modifiers: `.is-widescreen` and `.is-fullhd`

### Added

* New [dropdown button](https://yellowdi.github.io/Elenore/documentation/components/dropdown/)!
* New [badge](https://yellowdi.github.io/Elenore/documentation/components/badge/)!
* Added: modifiers in `.navbar`

### Fixed

* Fixed: Textarea now respects rows attribute
* Fixed: `body` scrollbar
* Fixed: `.help` class behaviour in horizontal form `is-grouped` field
* Fixed: Pagination disabled border
* Fixed: Box in hero as text and background white
* Fixed: #1 Card header icon position
* Fixed: JavaScript `.nav-burger` example
* Fixed: Notification strong color

## 0.4.4

* Added: New navbar with dropdown support
* Added: new feature: Breadcrumb component
* Added: responsive `is-*-touch` tags for .column sizes
* Added: `is-hidden` to helpers in docs
* Added: figure/figcaption as content element
* Added: <sup> and <sub> support to content
* Added: `is-halfheight` to hero
* Fixed: Breadcrumb and Navbar in docs
* Fixed: Code examples broken because of `text-align: center`
* Fixed: Loading spinner resizes with controls
* Fixed: Remove `height: auto` from media elements
* Fixed: Documentation typo
* Fixed: Make use of +fullhd mixin for columns
* Fixed: Add min/max height/width to delete class size modifiers
* Fixed: Section docs update

## 0.4.3

* Fixed: selected row on striped table
* Fixed: remove flex-shrink for is-expanded
* Added: icons support for select dropdown
* Fixed: delete button as flexbox item
* Added: static button

## 0.4.2

* Fixed: customize Elenore
* Fixed: loading select
* Fixed: control height
* Fixed: is-grouped control
* Fixed: checkbox/radio wrapping
* Feature has-icons placement
* Fixed: selected table row
* Added: customize page
* Fixed: columns negative horizontal margin
* Fixed: pagination wrapping
* Fixed: color keys as strings

## 0.4.1

* Fixed: max-width container
* Fixed: notification delete
* Fixed: nav-right without nav-menu
* Fixed: hero and notification buttons
* Fixed: has-addons z-index
* Feature select color modifiers
* Fixed: -ms-expand
* Fixed: better `+center` mixin
* Fixed: `dl` styles
* Fixed: `pre` `margin-bottom`
* Fixed: icon alignment
* Fixed: bold nav menu
* Fixed: nav container
* Fixed: nav grouped buttons
* Fixed: container example
* Fixed: select expanded
* Fixed: separate animations

## 0.4.0

* **Default font-size is 16px**
* **New `.field` element ; `.control` repurposed**
* **New `.pagination` sizes**
* **New `$fullhd` breakpoint (1344px)**

* Removed: monospace named fonts
* Removed: icon spacing logic
* Changed: Split icon container dimensions and icon size
* Fixed: delete button by using pixels instead of (r)em
* Fixed: level on mobile
* Added: new `.is-spaced` modifer for titles and subtitles

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
