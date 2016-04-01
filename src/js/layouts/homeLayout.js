define(['marionette',
 'backbone',
 'models/userModel',
 'views/userView',
 'views/userListView',
 'collections/userCollection',
 'text!templates/homeTemplate'], 
function(Marionette, Backbone, UserModel, UserView, UserListView, UserCollection, HomeTemplate){
  return Marionette.LayoutView.extend({
    template: HomeTemplate,
    regions:{
      profile: '#profile',
      userList: '#userList'
    },

    initialize: function(){
      this.initProfile();
      this.initUserList();
    },
    showProfileView: function(){
      this.showChildView('profile', new UserView({
        model:this.userModel
      }));
    },
    initProfile: function(){
      this.userModel = new UserModel({
        id: 'me'
      });
      this.listenTo( this.userModel, 'sync', this.showProfileView);
      this.userModel.fetch({
        headers: {
          'Authorization' : 'bearer '+ sessionStorage.sessionId
        }
      });
    }, 
    initUserList: function(){
      this.userList = new UserCollection();
      this.listenTo(this.userList, 'sync', this.showUserListView);
      this.userList.getAllUsers();
    },
    showUserListView: function(){
      this.showChildView('userList', new UserListView({ collection : this.userList}));
    }

  });
});