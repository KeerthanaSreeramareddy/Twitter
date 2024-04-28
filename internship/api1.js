$(function () {
    // Grab the template script
    var theTemplateScript = $("#address-template").html();
    var url_string = window.location.href
    var url = new URL(url_string);
    var woeid = url.searchParams.get("woeid");
    var name = url.searchParams.get("name")
  
    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);
    fetch('http://localhost:8000/trending-topics?woeid=2295420')
    .then(function(response){
      return response.json();
      })
    .then (function(myjson){
          var data = {
              arr : myjson,
              name: name
          }
          var theCompiledHtml = theTemplate(data);
          $('.content-placeholder').html(theCompiledHtml);
   })
      .catch( (error) =>
      {
          console.error('error:',error);
      }
      )
    });