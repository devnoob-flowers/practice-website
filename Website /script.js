/* practice page for events and onclick */

let learnMore = document.getElementById('learn-more');
let moreInfo = document.getElementById('more-info');
let closeButton = document.getElementById('close-button');

/* open and hide funciton using display block => none */

let open = function() {
    moreInfo.style.display = 'block';
    closeButton.style.display = 'block';
    learnMore.style.display = 'none';
};


let hide = function() {
    moreInfo.style.display = 'none';
    closeButton.style.display = 'none';
    learnMore.style.display = 'block';
};

learnMore.onclick = open;
closeButton.onclick = hide;






/* simple working click function of information 

learnMore.onclick = function() {
    moreInfo.style.display = 'block';
  }

*/

 