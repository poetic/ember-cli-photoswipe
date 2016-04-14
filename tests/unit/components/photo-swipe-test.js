import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('photo-swipe', 'PhotoSwipeComponent', {
  unit: true
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  equal(component._state, 'inDOM');
});

test('it renders the photoswipe template', function() {
  expect(1);
  this.render();
  var component = this.subject();
  var photoswipe = component.$('.pswp');

  equal(photoswipe[0], component.get('pswpEl'));
});

test('the gallery attribute should be empty on insert.', function() {
  expect(1);
  var component = this.subject();

  Ember.run(function () {
    equal(component.get('gallery'), undefined, 'should not be set yet.');
  });
});

test('the gallery attribute should be set when you pass items', function() {
  expect(2);

  Ember.run(() => {
    var component = this.subject();
    component.set('items', [
      {
        src: 'http://placekitten.com/g/600/400',
        w: 600,
        h: 400,
        title: 'whooa'
      },
      {
        src: 'http://placekitten.com/g/1200/900',
        w: 1200,
        h: 900
      }
    ]);

    this.render();

    var gallery = component.get('gallery');
    ok(gallery);
    equal(typeof gallery, 'object');
  });
});

test('the reinit action should be called when the gallery items change', function() {
  // reinit will be called 3 times in the test
  // Once when setting the setting the properties
  // Second when you render the Component
  // Third when you change the items array
  expect(6);

  Ember.run(()=> {
    var component = this.subject();
    component.setProperties({
      reinit: function(gallery){
        ok(gallery);
        equal(typeof gallery, 'object');
      },
      items: [
        {
          src: 'http://placekitten.com/g/600/400',
          w: 600,
          h: 400,
          title: 'whooa'
        },
        {
          src: 'http://placekitten.com/g/1200/900',
          w: 1200,
          h: 900
        }
      ]
    });

    this.render();

    component.set('items', []);
  });
});
