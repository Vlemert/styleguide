---
layout: page
title: Scaffolding
---

# Scaffolding

Scaffolding refers to the global resets and depedencies Craft is built upon.

## Contents

- [HTML5 Doctype](#html5-doctype)
- [Box-sizing](#box-sizing)
- [Build on (S)CSS-Wipe](#build-on-scss-wipe)
 
## HTML5 Doctype 

Craft makes use of certain HTML elements and CSS properties that *require* the use of the HTML5 doctype. Include it at
the beginning of all your pages

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}

## Box-sizing

We reset `box-sizing` to `border-box` for every element in Craft. This allows us to more easily assign widths to elements
that also have `padding` and `border`s.

## Build on (S)CSS-Wipe

For improved cross-browser rendering, we use [SCSS-Wipe](https://www.npmjs.com/package/scss-wipe), which is a SCSS port
for [CSS-Wipe](https://www.npmjs.com/package/css-wipe).

Some features of CSS-Wipe are:

- removes all padding, margin and border
- wipes decorations
- sets box-sizing: border-box for predictable size calculations
- resets list style types
- reset styles on bleeding edge webkit elements
