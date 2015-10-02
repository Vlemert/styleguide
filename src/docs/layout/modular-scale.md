---
layout: page
title: Modular Scale
---

# Modular Scale

<p class="lead">The Modular Scale system is by default used for scaling font-sizes, paddings and margins. 
The Modular Scale ratio we use according to our style-guide is <code>1.2</code>.</p>

## Contents

- [Variables](#variables)
- [Using Modular Scale in Sass](#using-modular-scale-in-sass)

## Variables

| Sass Variable        | Default Value | Description        |
|----------------------|---------------|--------------------|
| `$ms-base`            | `1rem`       | The Modular Scale base size. (1rem is based on `$base-font-size`) |
| `$ms-ratio`             | `1.2`      | The Modular Scale ratio. |

## Using Modular Scale in Sass

{% highlight scss %}
@function ms($size: 0, $font-size: $ms-base) {
  @return $font-size * power($ms-ratio, $size);
}

h1 {
  font-size: ms(6); // (Based on 1rem = 16px) 47.776px
}

h2 {
  font-size: ms(3, 16px); // 27.648px
}
{% endhighlight %}
