---
layout: page
title: Spacing
---

# Spacing

<p class="lead">
  Spacing gives you helpers to apply paddings and margins to your html elements. TL;DR, by default `padding` is called 
  `soft` and `margin` is called `push`. By default the modifiers make use of the Golden Ratio.
</p>

## Contents

- [Variables](#variables)
- [Margin](#margin)
  - [Margin helper](#margin-helper)
- [Padding](#padding)
  - [Padding helper](#padding-helper)
- [Default available modifiers](#default-available-modifiers)

## Variables

| Sass Variable        | Default Value                           | Description        |
|----------------------|-----------------------------------------|--------------------|
| `$margin`            | `1.5rem`                                | The default margin |
| `$golden-ratio`      | `1.618`                                 | The golden ratio used to calculate margin modifiers |
| `$margin-modifiers`  | [`(...)`](#default-available-modifiers) | A Sass key-value list to define the margin modifier naming and value per modifier |
| `$padding-modifiers` | `$margin-modifiers`                     | A Sass key-value list to define the padding modifier naming and value per modifier |

## Margin

The default available margins are:

| Class name     | Sides                       |
|----------------|-----------------------------|
| `.push`        | top / right / bottom / left |
| `.push-top`    | top                         |
| `.push-right`  | right                       |
| `.push-bottom` | bottom                      |
| `.push-left`   | left                        |
| `.push-sides`  | left / right                |
| `.push-ends`   | top / bottom                |

### Demo

{% example html %}
<div class="bg-color--accent-80 push-bottom--tiny">push-bottom--tiny</div>
<div class="bg-color--accent-80 push-bottom--small">push-bottom--small</div>
<div class="bg-color--accent-80 push-bottom">push-bottom</div>
<div class="bg-color--accent-80 push-bottom--large">push-bottom--large</div>
<div class="bg-color--accent-80 push-bottom--huge">push-bottom--huge</div>
<div class="bg-color--accent-80 push-bottom--clear">push-bottom--clear</div>
{% endexample %}

### Margin Helper

{% highlight scss %}
$margin-modifiers: (
  "clear" : 0,
  "tiny"  : $margin / ($golden-ratio * 2),
  "small" : $margin / $golden-ratio,
  null    : $margin,
  "large" : $margin * $golden-ratio,
  "huge"  : $margin * ($golden-ratio * 2),
);

@function margin($modifier: null) {
  @return unquote(map-get($margin-modifiers, $modifier));
}
{% endhighlight %}

## Padding

{% example html %}
<div class="bg-color--accent-80 push-bottom--tiny soft-bottom--tiny">soft-bottom--tiny</div>
<div class="bg-color--accent-80 push-bottom--tiny soft-bottom--small">soft-bottom--small</div>
<div class="bg-color--accent-80 push-bottom--tiny soft-bottom">soft-bottom</div>
<div class="bg-color--accent-80 push-bottom--tiny soft-bottom--large">soft-bottom--large</div>
<div class="bg-color--accent-80 push-bottom--tiny soft-bottom--huge">soft-bottom--huge</div>
<div class="bg-color--accent-80 push-bottom--tiny soft-bottom--clear">soft-bottom--clear</div>
{% endexample %}

### Padding Helper

{% highlight scss %}
$padding-modifiers: (
  "clear" : 0,
  "tiny"  : $padding / ($golden-ratio * 2),
  "small" : $padding / $golden-ratio,
  null    : $padding,
  "large" : $padding * $golden-ratio,
  "huge"  : $padding * ($golden-ratio * 2),
);

@function padding($modifier: null) {
  @return unquote(map-get($padding-modifiers, $modifier));
}
{% endhighlight %}

## Default available modifiers

| Modifier    | Based on `$margin: 1.5rem` |
|-------------|----------------------------|
| `.*--clear` | `0`                        |
| `.*--tiny`  | `0.46354rem`               |
| `.*--small` | `0.92707rem`               |
| `.*`        | `1.5rem`                   |
| `.*--large` | `2.427rem`                 |
| `.*--huge`  | `4.854rem`                 |

{% highlight scss %}
$margin-modifiers: (
  "clear" : 0,
  "tiny"  : $margin / ($golden-ratio * 2),
  "small" : $margin / $golden-ratio,
  null    : $margin,
  "large" : $margin * $golden-ratio,
  "huge"  : $margin * ($golden-ratio * 2),
) !default;

$padding-modifiers: $margin-modifiers !default;
{% endhighlight %}
