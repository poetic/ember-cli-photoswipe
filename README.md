# Ember-cli-photoswipe

This addon lets you implement [Photoswipe](https://github.com/dimsemenov/PhotoSwipe) on any ember-cli project by just including the addon. Usage is as follows:

```javascript
{{photo-swipe gallery=myGallery options=psOpts items=items}}
```

Any property bound to `gallery` will become the actual gallery object.
This is optional and used only when you want to interact with the photoswipe
instance of your gallery.

Any photoswipe options can be passed to the `options` property of the component.
For now the history module is disabled, otherwise it breaks Ember routing.

Finally, the `items` property is required and an array of objects should be
passed to it. For example:

```javascript
items = [
  {
    src: 'http://placekitten.com/g/600/400',
    w: 600,
    h: 400,
    title: 'whooa'
  }
]
```

More functionality is on the way, this is a work in progress. You can find
photoswipe documentation [here](http://photoswipe.com/).

Ideally, I want to get it to the point where you can pass a block of images to
the `photo-swipe` component and it will take care of animations - from thumbnail
to gallery - and to automatically pick up the source, width, height and title if
available.

Got any ideas? Please submit an issue and we can talk it out.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
