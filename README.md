# flex-gap-property-mixin

## A gird-gap solution, working for Flexbox.

Sometimes I miss some things working with CSS (to be honest I work with SASS, haven’t used Vanilla CSS for a long time) — anyways, Since CSS is constantly being improved and further developed, these days we have wonderful stuff as like Custom Properties, Grid and Flexbox.

What is really cool in grid (in my opinion) is the ability to use the grid-gap property, which allows to set a gap, in between of a containers items, without having a gap to the container it self. So this article is related to [this pen](https://codepen.io/lazercaveman/pen/bGbMZgd), which is presenting an experimental "flex-gap" property based on a SASS mixin.

## Cool so let's use this everywhere!

I am so sorry to tell you - there is no flex-gap property yet. Maybe/Hopefully it will come some day (if you know something about it being in development, why it does not exist yet, or maybe why there should not be such a thing, just let me know). If you wanna do that in Flexbox for example (which could be a valid use case), you have to select the first- and last-child of an element, and set their margin to 0.

### or

Or you writhe that property on your own, by using a SASS mixin

### 🙌 OR

or just use mine instead! 🎉

## Using a SASS Mixin

Sooo, in SASS we're able to create Mixins, Functions, Loops and many other cool stuff, that we cannot use in CSS yet (I will also never become tired to say how much I love the tidy, clean look of SASS as well! 💘). Enough of the emojis! let's have a look at some code to realize, what I wrote about before.

```sass

// a mixin to add grid-gap to flexbox
=flexGap( $gap, $direction: row, $element: div )
  > #{$element}
    @if $direction == row
      margin: 0 $gap/2
      &:first-child
        margin-left: 0
      &:last-child
        margin-right: 0
    @if $direction == column
      margin: $gap/2 0
      &:first-child
        margin-top: 0
      &:last-child
        margin-bottom: 0

// easy to use by just adding it to the flex-container
.container
  display: flex
  +flexGap( 20px )

```

Okay, lets have a look at what I’ve done — what the mixin does is, to select each of the containers children (so you could use the mixin on a Flexbox-Container it self, just like the grid-gap property, not on its children, as you would do it by using margin), adds some margin to them, and removes the first- and last-child margin (left and right).

If you add a direction to the mixin (for example column, if your Flexbox-Containers flex-direction is setted to column, this would make sense), you could remove the children margin-top (first-child) or margin-bottom (last-child) — so the Mixin works with “flex-direction: column” as well.

```sass

// also supporting flex-directions
.container
  display: flex
  flex-direction: column
  +flexGap( 20px, column )
	
```

By default the mixin will effect all divs, which are children of the container. If your flex-container items are of another element-type you could use the Mixins $element statement to set the related element-type or a class or an id as a selector.

```sass

// If you just want to select an element you could write it plane into the mixin.
.container
  display: flex
  flex-direction: column
  +flexGap( 20px, column, span)
	
// If you want to select a class or an id you'd have to put the selector into quote marks.
.container
  display: flex
  flex-direction: column
  +flexGap( 20px, column, ".myClass")

```

By setting classes or id's to the flex-container-items you could also just give these different gaps, as well.

```sass

// different gaps for different classes
.container
  display: flex
  +flexGap( 10px, row, ".aClass")
  +flexGap( 20px, row, ".anotherClass")
  +flexGap( 30px, row, ".oneMoreClass")

```

By calling the mixin several times you wont overwrite the first call, instead SASS will generate several instances of the CSS result - so compiled SASS code above would look like the following in CSS:

```sass

// This is what the compiled SASS would look like within you CSS-File

.test > .aClass {
  margin: 0 5px; }
  .test > .aClass:first-child {
    margin-left: 0; }
  .test > .aClass:last-child {
    margin-right: 0; }

.test > .anotherClass {
  margin: 0 10px; }
    .test > .anotherClass:first-child {
      margin-left: 0; }
    .test > .anotherClass:last-child {
      margin-right: 0; }

.test > .oneMoreClass {
  margin: 0 15px; }
  .test > .oneMoreClass:first-child {
    margin-left: 0; }
  .test > .oneMoreClass:last-child {
    margin-right: 0; }

```

The gap within the flexGap-Mixin can be setted up as a static value (pixel, rem) or a dynamic value (percent, view-port-width), as well - also there is one little, kind of cool side effect! By changing the direction (from flex-row to flex-columns or vice versa) the container-items will have a little transition, if one sets a transition to it — of course this is optional by setting a transition.

![hehe ;)](https://media.giphy.com/media/VGs4AxrJBk9aw/giphy.gif)



## Conclusion

Here is some demonstration/example of how to use this — just play around, fork, comment, like — do what ever you want with [this pen](https://codepen.io/lazercaveman/pen/bGbMZgd). The flexGap-Mixin is very small, easy to use and it adds some additional functionality to Flexbox — if you would add some functionality or change any of its attribute just let me know how and why— if you’d like to use it just go for ist!

👏 If you found this article entertaining or helpful just leave a like, comment or share this article - just as you like...
