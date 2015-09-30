---
layout: page
title: Layout
---

# Layout

<p class="lead">
  Layouts in Craft can be simple with plain page containers or more complicated with the grid system where you can 
  define the columns you'ld like in your styleguide. 
</p>

> You can find all layout related styles in the `scss/layout` directory.

## Contents

- [Container](#container)
  - [Variables](#variables)
  - [BEM Modifiers](#bem-modifiers)

## Container

Center your page's content with a `.container`.

{% highlight html %} 
<div class="container">
  <!-- content here -->
</div>
{% endhighlight %}

### Variables

| Sass Variable    | Default Value | Description |
|------------------------------------------------|
| `$container-width` | `960px`         | Sets the width of a container |
| `$container-sides-padding` | `padding()`         | The padding of a container when the screen is smaller than the max-width (only applicable if container-responsive is true) |
| `$enabled-container-responsive` | `true`         | If enabled, the container has a max-width and possibly a padding. If disabled, the container width is fixed |


### BEM Modifiers

| Class name    | Description |
|------------------------------------------------|
| `.container--left` | Aligns the container to the left side of your screen |
| `.container--right` | Aligns the container to the right side of your screen |
