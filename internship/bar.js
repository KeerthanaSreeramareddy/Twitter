
$(function () {
    // Grab the template script
    var theTemplateScript = $("#address-template").html();
  
    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);
  
    // Define our data object
    var context={
      "city": "London",
      "street": "Baker Street",
      "number": "221B"
      fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => {
        
        return response.json()
        })
        .then(data => {
          // Work with JSON data here
          console.log("data")
         
            data.forEach(movie => {
              const card = document.createElement('div')
              card.setAttribute('class', 'card')
        
              const h1 = document.createElement('h1')
              h1.textContent = movie.title
        
              const p = document.createElement('p')
              movie.description = movie.description.substring(0, 300)
              p.textContent = `${movie.description}...`
        
              container.appendChild(card)
              card.appendChild(h1)
              card.appendChild(p)
            })
          
        }
        )
        .catch(err => {
          // Do something for an error here
          const errorMessage = document.createElement('marquee')
            errorMessage.textContent = `Gah, it's not working!`
            app.appendChild(errorMessage)
      
        }
        )
    };
  
    // Pass our data to the template
    var theCompiledHtml = theTemplate(context);
    
    // Add the compiled html to the page
    $('.content-placeholder').html(theCompiledHtml);
  });
