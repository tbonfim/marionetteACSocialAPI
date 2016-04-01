
define(['myApp', 'layouts/myAppMainLayout'], function(MyApp, MyLayout){
  var app = new MyApp(),
      layout = new MyLayout();;
  
  app.start({
    optionA: 'This',
    optionB: 'Is',
    optionC: 'SPARTAAAAA!',
    optionD: 'Hello',
    optionE: 'World'
  });

  
  app.rootView = layout;

});