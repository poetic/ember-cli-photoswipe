import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: EmberCliPhotoswipe', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function() {
  visit('/');

  andThen(function() {
    equal(find('button.btn').length, 1, 'Page contains button');
    click(find('button.btn'));

    equal(find('img.thumb').length, 2);
  });

  andThen(function() {
    equal(find('.pswp__button--arrow--right').length, 2, 'Page contains arrow button');
    click(find('.pswp__button--arrow--right').first());
  });

  andThen(function() {
    expect(find('.pswp__button--close').length, 1, 'Page contains close button');
    click('.pswp__button--close');
  });

  andThen(function() {
    equal(find('button.change-btn').length, 1, 'Page contains change button');
    click(find('button.change-btn'));
  });

  andThen(function() {
    equal(find('img.thumb').length, 1);
  });
});
