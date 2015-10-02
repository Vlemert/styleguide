---
layout: page
title: Colors
title-prefix: 🎨
---

# Colors

<div class="lead">Colors can be applied in Sass and in HTML as text-color, border-color or background-color. We provide 
some useful helpers and functions so you always pick the right color!</div>

## Contents

- [Styleguide Colors](#styleguide-colors)
- [HTML Helpers](#html-helpers)
  - [Text colors](#text-colors)
  - [Background colors](#background-colors)
- [Sass function](#sass-function)

## Styleguide Colors

<div class="grid push-bottom">
  <div class="docs__color column column--one-sixth bg-color--black color--white">black</div>
  <div class="docs__color column column--one-sixth bg-color--dark color--white">dark</div>
  <div class="docs__color column column--one-sixth bg-color--dark-80 color--white">dark-80</div>
  <div class="docs__color column column--one-sixth bg-color--dark-60 color--white">dark-60</div>
  <div class="docs__color column column--one-sixth bg-color--dark-40 color--white">dark-40</div>
  <div class="docs__color column column--one-sixth bg-color--dark-20 color--white">dark-20</div>
</div>

<div class="grid push-bottom">
  <div class="docs__color column column--one-third bg-color--light-40">light-40</div>
  <div class="docs__color column column--one-third bg-color--light-20">light-20</div>
  <div class="docs__color column column--one-third bg-color--white">white</div>
</div>

<div class="grid push-bottom">
  <div class="docs__color column column--one-third bg-color--blue-light">blue-light</div>
  <div class="docs__color column column--one-third bg-color--blue color--white">blue</div>
  <div class="docs__color column column--one-third bg-color--blue-dark color--white">blue-dark</div>
</div>

<div class="grid push-bottom">
  <div class="docs__color column column--one-third bg-color--red-light">red-light</div>
  <div class="docs__color column column--one-third bg-color--red color--white">red</div>
  <div class="docs__color column column--one-third bg-color--red-dark color--white">red-dark</div>
</div>

<div class="grid push-bottom">
  <div class="docs__color column column--one-third bg-color--yellow-light">yellow-light</div>
  <div class="docs__color column column--one-third bg-color--yellow color--white">yellow</div>
  <div class="docs__color column column--one-third bg-color--yellow-dark color--white">yellow-dark</div>
</div>

<div class="grid push-bottom">
  <div class="docs__color column column--one-third bg-color--green-light">green-light</div>
  <div class="docs__color column column--one-third bg-color--green color--white">green</div>
  <div class="docs__color column column--one-third bg-color--green-dark color--white">green-dark</div>
</div>

## HTML Helpers

### Text colors

Give texts a color with the class names `.color--[color-name]`

{% example html %}
<div class="color--red">This is red text</div>
{% endexample %}

### Background colors

Give elements a background color with the class names `.bg-color--[color-name]`

{% example html %}
<div class="bg-color--blue-light color--white">This has a blue background color and white text</div>
{% endexample %}

## Sass function

You can use the colors as a variable, like `$red` or `$blue`, but we advise you to use the Sass function `color("red")` 
or `color("blue")` like in the example below;

{% highlight scss %}
.make-me-red {
  color: color("red");
}

.i-want-a-dark-blue-bg {
  background-color: color("blue-dark");
}
{% endhighlight %}
