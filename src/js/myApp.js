define(['marionette', 'backbone', 'config/socialRouter'], function(Marionette, Backbone, SocialRouter){

  return Mn.Application.extend({
    initialize: function(){
      this.router = new SocialRouter();
      Backbone.history.start();
    }
  });
});