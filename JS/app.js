//if user want to add a note to the local storage,
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click" , function(e) {

    let add_note = document.getElementById("add_note");
    
    let notes = localStorage.getItem("notes");

    if(notes==null)
    {
         notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(add_note.value);

    notes = localStorage.setItem("notes" , JSON.stringify(notesObj));

    add_note.value = "";

    showNotes();
} )

function showNotes(){
    let notes = localStorage.getItem("notes");

    
    if(notes==null)
    {
         notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach( function(element , index) {
        html += `
        <div class="card">
            <div class="note">
                <h3 class="card_title">Note ${ index + 1}</h3>
                <p class="card_text">${element}</p>
                <div>
                    <button id = "${index}" onclick = "deleteNote(this.id)" class="btn">Delete Note</button>
                </div>
            </div>
        </div>       
        
               ` ;     

    });

    let notesElement = document.getElementById('notes');
    if(notesObj.length !=0)
    {
        notesElement.innerHTML = html;
    }else{
        notesElement.innerHTML = `Nothing to show ! , Please add some note by using above box and 'Add Note' button .`;
    }
}

// fun to delete notes from localstorage
 function deleteNote(index)
 {
    let notes = localStorage.getItem("notes");

    if(notes==null)
    {
         notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);

    notes = localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
 }