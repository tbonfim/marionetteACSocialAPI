define(['backbone', 
  'marionette', 
  'models/userModel',
  'text!templates/UserTemplate'], 
function( Backbone, Marionette, UserModel, UserTemplate){
  return Marionette.ItemView.extend({
    template: function(data){
      return _.template(UserTemplate)(data);
    } , 
    templateHelper: function(){
      return this.model.attributes;
    }
  });

});