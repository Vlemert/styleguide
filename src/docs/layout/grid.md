---
layout: page
title: Grid
---

# Grid

<p class="lead">
  Craft's Grid system is pretty advanced. The grid system is flexible built and you can customize it for every application.
  The columns within a <code>.grid</code> block are always bound to the <code>width</code> of <code>.grid</code>, you can use the default <code>.grid</code> settings
  or overwrite it in your own (s)css.
</p>

## Contents

- [Variables](#variables)
- [Demo - Base grid](#demo---base-grid)
  - [Mix columns if you'ld like](#mix-columns-if-yould-like)
- [Demo - Flex grid](#demo---flex-grid)
- [Demo - Responsive grid](#demo---responsive-grid)
- [Default available columns](#default-available-columns)


## Variables

| Sass Variable    | Default Value | Description |
|------------------|---------------|-------------|
| `$grid-gutter` | `1.5rem` | The grid gutter is the padding between two columns. |
| `$grid-columns` | `12` | The maximum amount of columns for your grid. |
| `$grid-columns-tablet` | `$grid-column` | The maximum amount of columns for your grid when responsive state is tablet. |
| `$grid-columns-mobile` | `3` | The maximum amount of columns for your grid when responsive state is mobile (phones). |
| `$grid-gutter-type` | `margin` | - `Margin` make the gutter a margin between columns;<br>- `Padding` will make the gutter a padding added to columns;<br>- `None` will remove margins and paddings from columns. |
| `$enable-grid-debug` | `false` | Toggle the debug mode for your grid by applying a background color to your columns, so columns will be visible. |
| `$grid-debug-color` | `rgba(0, 0, 0, 0.05)` | The background color of a column in debug mode. |
| `$columns` | `(...)` | Sass key-value list with the available grid columns. [See Default Available columns](#default-available-columns) 

## Demo - Base Grid

The grid is fully based on `display: flex` with fallbacks to older browsers, The column modifiers go up to 12 but it's up 
to you to play with the grid and align your columns the way you like!

{% example html %}
<div class="grid">
  <div class="column column--one">1/12</div>
  <div class="column column--one">1/12</div>
  <div class="column column--one">1/12</div>
  <div class="column column--one">1/12</div>
  <div class="column column--one">1/12</div>
  <div class="column column--one">1/12</div>
  <div class="column column--one">1/12</div>
  <div class="column column--one">1/12</div>
  <div class="column column--one">1/12</div>
  <div class="column column--one">1/12</div>
  <div class="column column--one">1/12</div>
  <div class="column column--one">1/12</div>
</div>
{% endexample %}

### Mix columns if you'd like

{% example html %}
<div class="grid">
  <div class="column column--six">1/6</div>
  <div class="column column--two">1/2</div>
  <div class="column column--three">1/3</div>
</div>

<div class="grid">
  <div class="column column--one">1/12</div>
  <div class="column column--two">2/12</div>
  <div class="column column--three">3/12</div>
  <div class="column column--four">4/12</div>
</div>

<div class="grid">
  <div class="column column--one">1/12</div>
  <div class="column column--two">2/12</div>
  <div class="column column--three">3/12</div>
  <div class="column column--four">4/12</div>
  <div class="column column--two">2/12</div>
</div>
{% endexample %}

## Demo - Grid with gutter

{% example html %}
<div class="grid grid--gutter">
  <div class="column column--three">3/12</div>
  <div class="column column--four">4/12</div>
  <div class="column column--five">5/12</div>
</div>
{% endexample %}

## Demo - Grid with flexible columns

{% example html %}
<div class="grid grid--gutter">
  <div class="column column--two">Special content<br>With multi-<br>line :)</div>
  <div class="column column--one">Small with same height</div>
  <div class="column column--four">Bigger stuff</div>
</div>

<div class="grid grid--gutter grid--valign-top">
  <div class="column column--two">Special content<br>With multi-<br>line :)</div>
  <div class="column column--one">Small</div>
  <div class="column column--four">Bigger stuff</div>
</div>

<div class="grid grid--gutter grid--valign-center">
  <div class="column column--two">Special content<br>With multi-<br>line :)</div>
  <div class="column column--one">Small</div>
  <div class="column column--four">Bigger stuff</div>
</div>

<div class="grid grid--gutter grid--valign-bottom">
  <div class="column column--two">Special content<br>With multi-<br>line :)</div>
  <div class="column column--one">Small</div>
  <div class="column column--four">Bigger stuff</div>
</div>
{% endexample %}

## Demo - Responsive grid

We know you probably don't want your 12 columns grid on both desktop and mobile devices. So with the following modifiers 
you can control your columns to do the right thing on the right device.

{% example html %}
<div class="grid">
  <div class="column column--two column-m--twelve">Column</div>
  <div class="column column--five column-m--three">Column</div>
  <div class="column column--one column-m--two">Column</div>
</div>
{% endexample %}

> Make your browser smaller to see the responsiveness of the grid

## Default available columns

You are fully able to customize the grid and it's naming. These are the default installed columns:

{% highlight scss %}
@function grid-column-width($col: 1, $columns: $grid-columns) {
  $col-width: unquote(($col * 100 / $columns) + "%");
  @return if($grid-gutter-type == "padding", $col-width, calc(#{$col-width} - #{$grid-gutter}));
}

$columns: (
  "one-whole": grid-column-width(1, 1),
  "one-half": grid-column-width(1, 2),
  "one-third": grid-column-width(1, 3),
  "two-third": grid-column-width(2, 3),
  "one-quarter": grid-column-width(1, 4),
  "three-quarter": grid-column-width(3, 4),
  "one-fifth": grid-column-width(1, 5),
  "two-fifth": grid-column-width(2, 5),
  "three-fifth": grid-column-width(3, 5),
  "four-fifth": grid-column-width(4, 5),
  "one-sixth": grid-column-width(1, 6),
  "two-sixth": grid-column-width(2, 6),
  "four-sixth": grid-column-width(4, 6),
  "five-sixth": grid-column-width(5, 6),
  "one-twelfth": grid-column-width(1, 12),
  "two-twelfth": grid-column-width(2, 12),
  "three-twelfth": grid-column-width(3, 12),
  "four-twelfth": grid-column-width(4, 12),
  "five-twelfth": grid-column-width(5, 12),
  "seven-twelfth": grid-column-width(7, 12),
  "eight-twelfth": grid-column-width(8, 12),
  "nine-twelfth": grid-column-width(9, 12),
  "ten-twelfth": grid-column-width(10, 12),
  "eleven-twelfth": grid-column-width(11, 12),
);
{% endhighlight %}

| Modifier | Device | Description |
|----------|--------|-------------|
|`.column--*`| Tablet/Desktop | This column setting only applies on mobile resolution. |
|`.column-sm--*`| Mobile/Tablet | This column setting only applies on mobile and tablet resolution. |
|`.column-m--*`| Mobile | This column setting only applies on mobile resolution. |
|`.column-t--*`| Tablet | This column setting only applies on tablet resolution. |

> Where * is the column-name defined in `$columns`
