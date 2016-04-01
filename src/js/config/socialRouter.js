define(['marionette', 
  'backbone', 
  'layouts/myAppMainLayout', 
  'layouts/loginLayout',
  'layouts/homeLayout'], 
  function(Marionette, Backbone, MyAppMainLayout, LoginLayout, HomeLayout){
    var SocialController = Marionette.Object.extend({
      initialize: function(){
        this.options.regionManager = new Marionette.RegionManager({
          regions: {
            main: 'body'
          }
        });
      },

      doLogin: function(){
        var layout = new LoginLayout();
        this.listenTo(layout, 'login:success', this.handleLoginSuccess);
        this.getOption('regionManager').get('main').show(new LoginLayout());
      },
      doHello: function(){
        this.getOption('regionManager').get('main').show(new MyAppMainLayout());
      },
      doHome: function(){
        this.getOption('regionManager').get('main').show(new HomeLayout());

      },
      handleLoginSuccess: function(model, response){
        alert(response);
        this.sessionId = response;
        sessionStorage.sessionId = response;
        Backbone.history.navigate('home', {trigger:true });
      }
    });
    
    return Marionette.AppRouter.extend({
      appRoutes: {
        'login' : 'doLogin',
        'home' : 'doHome',
        '*path' : 'doHello'
      },

      controller: new SocialController(),

      execute: function(callback, args, path){
        if( path !==  'doLogin' && !sessionStorage.sessionId){
          Backbone.history.navigate('login', {trigger: true});
          return false;
        }else if( path  === 'doLogin' && sessionStorage.sessionId){
          Backbone.history.navigate('', {trigger:true});
          return false;
        } else{
          if(callback){
            callback.apply(this, args);
          }
        }
      }
   
    });
});