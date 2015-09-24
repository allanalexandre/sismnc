NewspaperLatest = ApplicationController.extend();

Router.route('/jornal-meionorte/ultimas', {
  name: 'newspaperLatest',
  yieldRegions: {
    'headerNewspaperLatest': {to: 'header'},
    'searchNewspaper': {to: 'search'}
  },
  fastRender: true
});

Template.newspaperLatest.onRendered(function(){

  document.querySelector('body').classList.add('show-tabs');

  $('.modal-trigger').leanModal({
    dismissible: true,
    opacity:1,
    in_duration: 300,
    out_duration: 200,
    ready: function() {

    },
    complete: function() {

    }
  });

});

Template.newspaperLatest.onDestroyed(function(){

  document.querySelector('body').classList.remove('show-tabs');

});