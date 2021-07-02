console.log(' wlecome to notes app. this is app.ja ');
showNotes();
// creating the notes
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = [];
    // console.log(notes);
    showNotes();

})
// show notes
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class="cardBody mx-2 my-2 card" style="width: 18rem;">
        <div class=" card-body">
          <h5 class="card-title">Notes ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button  id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>
    </div>`;

    });
    let notesElm = document.getElementById('notes');
    if (notesobj.length!=0) {
        notesElm.innerHTML = html;
    }
    else{
        
        notesElm.innerHTML ='plz create your first notes ';
    }

}

// deleting the notes
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
};

// handling the search part

let searchTxt=document.getElementById("searchTxt");
searchTxt.addEventListener("input", function(){
    // console.log("event fired");
    let inpVal=searchTxt.value;
    let noteCard=document.getElementsByClassName('cardBody');
    Array.from(noteCard).forEach(function(element){

        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt);
        if(cardTxt.includes(inpVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }

    });
});

