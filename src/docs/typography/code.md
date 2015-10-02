---
layout: page
title: Code
---

# Code

<p class="lead">Code and Pre blocks are there to show of code snippets on the page. We use them in the documentation a 
lot. But they also can be usefull in your application when you're presenting Api documentation for example.</p>

> This documentation does not use all the default code styles. 

## Contents

- [Variables](#variables)
- [Code](#code)
- [Pre](#pre)

## Variables

| Sass Variable    | Default Value | Description |
|------------------|---------------|-------------|
| `$code-background` | `color("light-20")` | The color of the `code` element background. |
| `$code-padding` | `0.2rem` | The padding in a `code` element to give some spacing around inline text. |
| `$code-font-size` | `0.875rem` | The font-size for the `code` element, it may differ from default font-size because a monospace font is used. |

## Code

You the `code` element to show a little piece of code inline in your text.

{% example html %}
<p>This is a code example about a <code>.class-name</code> element.</p> 
{% endexample %}

## Pre

Use `pre` to mark a piece of code as a code block. Use the `code` tag within to apply the `code` styling.

{% example html %}
<pre>
  <code>
    code {
      @include border-radius();
      font-family: $base-font-family-monospace;
      font-size: $code-font-size;
      background: $code-background;
      padding: $code-padding;
    
      pre > {
        background-color: transparent;
        padding: 0;
        margin: 0;
      }
    }  
  </code>
</pre>
{% endexample %}
