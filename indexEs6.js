class Book{
    constructor (name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display{
    //add
    add(book) {

        let tBody = document.getElementById('tBody')
        let uiString = `<tr>                    
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
        </tr>`;
        tBody.innerHTML += uiString;
    }

//clearing function
clear() {
    let libararyForm = document.getElementById('libararyForm');
    libararyForm.reset();
}

//implementing the validate function
validate(book) {
    if (book.name.length < 2 || book.name.author < 2) { return false; }
    else { return true; }
};

//show function
show(type, msg) {
    let massege = document.getElementById('msg');
    massege.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Massege!</strong>${msg}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
    setTimeout(() => {
        massege.innerHTML = '';
    }, 5000);
}


}   


//add event letionar to the form control
let libararyForm = document.getElementById('libararyForm');
libararyForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault()
    console.log('you have submited the form');
    var name = document.getElementById('bookName').value;
    var author = document.getElementById('bookAuthor').value;
    var type;
    let fiction = document.getElementById('friction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    let d = new Display()
    if (d.validate(book)) {
        d.add(book);
        d.clear();
        d.show('success', 'You have Succcessfully Added The Book');

    }
    else {
        d.show('danger', 'Something Went Wrong');
    }

    console.log(book);
}