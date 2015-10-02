---
layout: page
title: Spacing
---

# Spacing

<p class="lead">
  Spacing gives you helpers to apply paddings and margins to your html elements. TL;DR, by default `padding` is called 
  `soft` and `margin` is called `push`. By default the modifiers make use of the Modular Scale, defined in `$ms-ratio`
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
| `$margin-modifiers`  | [`(...)`](#default-available-modifiers) | A Sass key-value list to define the margin modifier naming and value per modifier. |
| `$padding-modifiers` | `$margin-modifiers`                     | A Sass key-value list to define the padding modifier naming and value per modifier. |

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
<div class="bg-color--blue-light push-bottom--tiny">.push-bottom--tiny</div>
<div class="bg-color--blue-light push-bottom--small">.push-bottom--small</div>
<div class="bg-color--blue-light push-bottom">.push-bottom</div>
<div class="bg-color--blue-light push-bottom--large">.push-bottom--large</div>
<div class="bg-color--blue-light push-bottom--huge">.push-bottom--huge</div>
<div class="bg-color--blue-light push-bottom--clear">.push-bottom--clear</div>
{% endexample %}

### Margin Helper

{% highlight scss %}
$margin-modifiers: (
  "clear" : 0,
  "tiny"  : ms(-4),
  "small" : ms(-2),
  null    : ms(0),
  "large" : ms(2),
  "huge"  : ms(4),
);

@function margin($modifier: null) {
  @return unquote(map-get($margin-modifiers, $modifier));
}
{% endhighlight %}

## Padding

{% example html %}
<div class="bg-color--blue-light push-bottom--tiny soft-bottom--tiny">.soft-bottom--tiny</div>
<div class="bg-color--blue-light push-bottom--tiny soft-bottom--small">.soft-bottom--small</div>
<div class="bg-color--blue-light push-bottom--tiny soft-bottom">.soft-bottom</div>
<div class="bg-color--blue-light push-bottom--tiny soft-bottom--large">.soft-bottom--large</div>
<div class="bg-color--blue-light push-bottom--tiny soft-bottom--huge">.soft-bottom--huge</div>
<div class="bg-color--blue-light push-bottom--tiny soft-bottom--clear">.soft-bottom--clear</div>
{% endexample %}

### Padding Helper

{% highlight scss %}
$padding-modifiers: (
 "clear" : 0,
 "tiny"  : ms(-4),
 "small" : ms(-2),
 null    : ms(0),
 "large" : ms(2),
 "huge"  : ms(4),
);

@function padding($modifier: null) {
  @return unquote(map-get($padding-modifiers, $modifier));
}
{% endhighlight %}
