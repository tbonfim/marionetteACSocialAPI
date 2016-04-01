define(['backbone', 'marionette', 'views/userInteractiveView'], function(Backbone, Marionette, UserInteractiveView){  
    return Marionette.CollectionView.extend({
      childView: UserInteractiveView
    });

});