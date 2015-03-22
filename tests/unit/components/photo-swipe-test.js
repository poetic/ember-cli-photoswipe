import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('photo-swipe', 'PhotoSwipeComponent');

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('it renders the photoswipe template', function() {
  expect(1);
  this.append();
  var component = this.subject();
  var photoswipe = component.$('.pswp');

  equal(photoswipe[0], component.get('pswpEl'));
});

test('the gallery attribute should be empty on insert.', function() {
  expect(1);
  this.append();
  var component = this.subject();

  equal(component.get('gallery'), undefined, 'should not be set yet.');
});

test('the gallery attribute should be set when you pass items', function() {
  expect(2);
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
  this.append();
  ok(component.get('gallery'));
  equal(typeof component.get('gallery'), 'object');
});
