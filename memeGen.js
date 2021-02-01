document.addEventListener("DOMContentLoaded", function() {
// Traverse the dom and set variables
    let memeForm = document.getElementById("meme-form");
    let listGallery = document.querySelector(".gallery");
// On submit prevent the page from resetting
    memeForm.addEventListener("submit", function(event){
        event.preventDefault();

// Make the li element to append memes to
        let memeLi = document.createElement('li');
        memeLi.classList.add("meme-img");

// Make a canvas for placing the img background on
        let urlInput = document.getElementById("uploaded-img").value,
        src = urlInput,
        img = document.createElement("img");
        img.src = src;
        img.width = "500";

// Create a new div for the upper text
        let topTextDiv = document.createElement('div');
        topTextDiv.classList.add("text", "top");
        topTextDiv.innerText = document.getElementById("text-top").value;
// Create a new div for the bottom text
        let bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add("text", "bottom");
        bottomTextDiv.innerText = document.getElementById("text-bottom").value;
// Create a div for the red delete icon
        let removeDiv = document.createElement('div');
        removeDiv.classList.add("deleteBtn");
        removeDiv.innerText = "Delete";
        removeDiv.style.color = "red";

// Create the memes with the delete button!
        listGallery.appendChild(memeLi);
        memeLi.appendChild(img);
        memeLi.appendChild(topTextDiv);
        memeLi.appendChild(bottomTextDiv);
        memeLi.appendChild(removeDiv);

// Reset the meme form on submission
        memeForm.reset();
    });

// Create the meme Li deletion function
    function remove(event) {
        event.target.parentNode.remove();
    }

// On click, delete the meme
    listGallery.addEventListener('click', remove, false);

});