---
layout: page
title: Typography
---

# Typography

<p class="lead">Headings, Paragraph styles, Blockquotes, Lists and many more. All typography related styles, you'll find here!</p>

> This documentation does not use all the default typography styles. 

## Contents

- [Variables](#variables)
- [Headings](#headings)
- [Body text](#body-text)
- [Lead paragraph](#lead-paragraph)
- [Inline text styles](#inline-text-styles)
- [Text alignment](#text-alignment)
- [Blockquote](#blockquote)
- [Lists](#lists)
   - [Unordered list](#unordered-list)
   - [Ordered list](#ordered-list)
   
## Variables

| Sass Variable    | Default Value | Description |
|------------------|---------------|-------------|
| `$base-font-size` | `16px` | The base font-size, by default all `rem` calculations are based on this value |
| `$base-font-family-sans-serif` | `"Helvetica Neue", Helvetica, Arial, sans-serif` | The base font-family for *sans-serif* fonts |
| `$base-font-family-serif` | `Georgia, "Times New Roman", Times, serif` | The base font-family for *serif* fonts |
| `$base-font-family-monospace` | `Menlo, Monaco, Consolas, "Courier New", monospace` | The base font-family for *monospace* fonts |
| `$base-font-family` | `$base-font-family-sans-serif` | The base font-family where you're application is based on. |
| `$base-text-color` | `color("dark-80")` | The base text color used in the website. *[Colors](/colors)* |

## Headings

### Variables

| Sass Variable    | Default Value | Description |
|------------------|---------------|-------------|
| `$heading-font-family` | `inherit` | The font-family for all headers |
| `$heading-font-weight` | `bold` | The default font-weight for all headers |
| `$heading-color` | `inherit` | The default text color for all headers |
| `$h1-font-size` | `3rem` | The default font-size for `H1` |
| `$h2-font-size` | `1.75rem` | The default font-size for `H2` |
| `$h3-font-size` | `1.5rem` | The default font-size for `H3` |
| `$h4-font-size` | `1.25rem` | The default font-size for `H4` |
| `$h5-font-size` | `1rem` | The default font-size for `H5` |
| `$h6-font-size` | `1rem` | The default font-size for `H6` |


{% example html %}
<h1>h1. Craft heading</h1>
<h2>h2. Craft heading</h2>
<h3>h3. Craft heading</h3>
<h4>h4. Craft heading</h4>
<h5>h5. Craft heading</h5>
<h6>h6. Craft heading</h6>
{% endexample %}

## Body text

{% example html %}
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself</p>
{% endexample %}

## Lead paragraph

Make a paragraph stand out, especially usefull for first paragraphs by adding `.lead`

{% example html %}
<p class="lead">
   One morning, when Gregor woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.
</p>
{% endexample %}

## Inline text styles

{% example html %}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
<p class="text-truncate" style="max-width: 400px">This line will be cutted once the 400px is extended. An ellipsis will be shown then.</p>
{% endexample %}

## Text alignment

{% example html %}
<div class="text-left">This text is aligned left</div>
<div class="text-center">This text is aligned center</div>
<div class="text-right">This text is aligned right</div>
{% endexample %}

## Blockquote

{% example html %}
<blockquote>
   <p>This is a Jenny in a block.</p>
</blockquote>
{% endexample %}

## Lists

### Unordered list

{% example html %}
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
{% endexample %}

### Ordered list

{% example html %}
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Nulla volutpat aliquam velit
    <ol>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ol>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>
{% endexample %}
