# Ember-cli-photoswipe [![Build Status](https://travis-ci.org/poetic/ember-cli-photoswipe.svg)](https://travis-ci.org/poetic/ember-cli-photoswipe)

Ember-cli Addon adaptation of the popular photo gallery library
[Photoswipe](https://github.com/dimsemenov/PhotoSwipe).

## Usage

```html
{{#photo-swipe}}
  <a href="http://placekitten.com/g/600/400" data-width="600" data-height="400">
    <img src="http://placekitten.com/g/300/200" alt="kitty!">
  </a>
{{/photo-swipe}}
```

By wrapping your gallery in the component, the addon will take care of
instantiating Photoswipe for you and for calculating the thumbnail bounds so
you get the nice zoom in/out animations right out of the box. Easy, right?

Notice that you need to pass the attributes of `data-width` and `data-height`
to the `<a>` element in order for it to animate. This also works by using an `{{#each}}`
block to populate your thumbnails. See `tests/dummy/app/templates/application.hbs`
as an example of this.

If you want to instanciate a Photoswipe gallery from an action instead of a
thumbnail, you can also do the following:

```javascript
{{photo-swipe gallery=myGallery options=psOpts items=items}}
```

And then you can initialize it through an action in your controller like this:

``` javascript
actions: {
  initGallery: function() {
    this.get('myGallery').init();
  }
}
```

Any property bound to `gallery` will become the actual gallery object.
This is used to instanciate PhotoSwipe and to interact with the live instance.

Any photoswipe options can be passed to the `options` property of the component.
For now the history module is disabled since it breaks ember routing.

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

## Contributing

If you have ideas or feature needs that could be implemented, just submit an issue
or pull request.

## Installation

###### Ember-cli >= 0.1.5
As easy as running `ember install:addon ember-cli-photoswipe`, which will also
run the generator.

###### Ember-cli < 0.1.5
For versions under 0.1.5 you need to run `npm install ember-cli-photoswipe
--save-dev` and then run `ember g photoswipe` in your project.

## Running

To run the dummy app:

* `git clone https://github.com/DanyHunter/ember-cli-photoswipe.git`
* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
