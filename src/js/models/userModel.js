define(['backbone'], function(Backbone){
  return Backbone.Model.extend({
    urlRoot: 'http://localhost:3000/users',
    parse: function(data){
      return {
        idAttribute : data._id, 
        name: data.name,
        email: data.email,
        image: 'http://www.gravatar.com/avatar/'+data._id+'?d=monsterid'
      }
    }
  });
});