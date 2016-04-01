define(['marionette', 'backbone'], function(){

  return  Marionette.LayoutView.extend({
    
    template: '<div>Hello Everyone! </div>',
    regions: { content :  '#content' }
  });

});