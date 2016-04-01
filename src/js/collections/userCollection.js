define(['marionette',
 'backbone',
 'models/userModel'], 
function(Marionette, Backbone, UserModel){
  return Backbone.Collection.extend({
    url: 'http://localhost:3000/users/',
    model: UserModel,
    getAllUsers: function(){
      this.fetch({
        headers: {
          'Authorization' : 'bearer '+ sessionStorage.sessionId
        }
      });
    }

  });
});