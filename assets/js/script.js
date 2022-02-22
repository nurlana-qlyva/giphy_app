document.querySelector(".js-go").addEventListener('click', function(e){
    e.preventDefault();
    var inputValue = document.querySelector(".js-userinput").value;
    searchGiphy(inputValue);
})

function searchGiphy(searchQuery) {
    var url ="https://api.giphy.com/v1/gifs/search?api_key=D8qD6rZhkZBNGI2Ly5guCB0BBAmayxsE&q="
    + searchQuery;
        
    // AJAX Request
      
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open("GET", url);
    GiphyAJAXCall.send();
    
    GiphyAJAXCall.addEventListener("load", function (data) {
      var actualData = data.target.response;
      pushToDOM(actualData);
      console.log(actualData);
        
    });
}
function pushToDOM(response) {
  
    response = JSON.parse(response);
      
    var images = response.data;
    
    var container = document.querySelector(".js-container");

    var inputValue = document.querySelector(".js-userinput").value;

    var button = document.createElement('BUTTON');
    button.classList.add('button-giph');
    button.innerHTML = inputValue;
    document.querySelector('.giphBtns').appendChild(button);

    container.innerHTML = '';
    
    images.forEach(function (image) {
    
        var src = image.images.fixed_height.url;

        var div = document.createElement('DIV');
        div.classList.add('image-box');
        div.innerHTML = "<img src='" + src + "' class='container-image' />";;
        
        container.appendChild(div);

    });
}