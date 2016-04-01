define(['backbone', 
        'marionette', 
        'views/userView', 
        'models/friendshipModel',
        'text!templates/userInteractiveTemplate'], 
  function(Backbone, Marionette, UserView, FrinedshipModel, UserInteractiveTemplate){  
    return UserView.extend({
      template: function(data){
        return _.template(UserInteractiveTemplate)(data);
      },
      events: {
        'click @ui.addFriendButton': 'addFriendHandler',
        'click @ui.acceptRequest': 'acceptRequestHandler'
      },
      ui:{
        addFriendButton: 'button#addFriend',
        waitingApprovalButton: 'button#waitingApproval',
        acceptRequestButton: 'button#acceptRequest',
        friendDisclaimer: 'span#friendDisclaimer'
      },
      initialize: function(){
        this.friendship =  new FrinedshipModel({
          id: this.model.get('idAttribute')
        });

        this.listenTo(this.friendship, 'sync', this.adjustFriendshipStatus);
        this.friendship.getFriendship();
      },
      addFriendHandler: function(){
        this.friendship.addFriend();
      },
      acceptRequestHandler: function(){
        this.friendship.acceptRequest();
      },
      adjustFriendshipStatus: function(){
        var friendshipStatusCode = this.friendship.get('status');
        _.each(this.ui, function(index, element, ui){
          ui[element].addClass('hide');
        });

        if(friendshipStatusCode === 0 && this.friendship.get('userRequested') != this.model.get('idAttribute')){
          this.ui.acceptRequestButton.removeClass('hide');
        }else if(friendshipStatusCode === 0){
          this.ui.waitingApprovalButton.removeClass('hide');
        }else if(friendshipStatusCode === 1){
          this.ui.friendDisclaimer.removeClass('hide');
        }else if(!friendshipStatusCode){
          this.ui.addFriendButton.removeClass('hide');
        }

      }

    }
  );

});