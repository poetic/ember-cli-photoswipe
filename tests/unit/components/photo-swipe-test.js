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
