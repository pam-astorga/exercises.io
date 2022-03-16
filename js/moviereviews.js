let movieReviews = [];
let addReview = document.querySelector("#addReview");

const addMovieReview = (event) => {
    event.preventDefault();
    let movieReview = {
        id: Date.now(),
        title: document.querySelector("#title").value,
        yearShown: document.querySelector("#year-shown").value, //add year validation
        review: document.querySelector("#review").value
    }
    movieReviews.push(movieReview);
    document.querySelector('#reviewForm').reset();
    console.table(movieReviews);

    let display = document.querySelector("#display pre");
    display.textContent = "\n" + JSON.stringify(movieReviews, null, 2);
    //storing data in localStorage
    localStorage.setItem("Movie Reviews", JSON.stringify(movieReviews));
} 


//retrieve data from localStorage
let retrieve = document.querySelector("#retrievebtn");
    
const retrieveMovieReviews = () => {
    let arr1 = new Array;
    arr1 = JSON.parse(localStorage.getItem("Movie Reviews"));
    let reviewTable = document.getElementById("tablereview");

    for(let i = reviewTable.rows.length - 1; i > 0; i--) reviewTable,
    deleteRow(i);
    //iterate through array
    arr1.forEach(review => {
        row = reviewTable.insertRow();
        //iterate through object
        for(let part in review) {
            let cell = row.insertCell();
            cell.textContent = review[part];
        }
    });
}

addReview.addEventListener('click', addMovieReview);
retrieve.addEventListener('click', retrieveMovieReviews);