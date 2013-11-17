
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.ejs', { title: 'Hello world !' });
};

exports.demo = function(req, res){
  res.render(
      'demo.ejs', 
     { 
         title: 'This is Demo page',
         header: 'demo demo demo demo ...'
     });
};

exports.app = function(req, res){
  res.render(
      'bootstrap.ejs', 
     { 
         title: 'This is bootstrap',
         header: 'many many content ...'
     });
};