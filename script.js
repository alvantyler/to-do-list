//variables 

const title = document.getElementById('title');
const author = document.getElementById("author")
const isbn = document.getElementById('isbn');
const submit = document.querySelector('.btn');
const booklist = document.getElementById("book-list");


submit.addEventListener('click', function(event){
    event.preventDefault()
})


submit.addEventListener('click', function(){
   if(title.value =="" && author.value=="" && isbn.value==""){
       alert("Enter Input");
   } else {
       const booklistRow = document.createElement('tr')

       const newTitle = document.createElement('th');
       newTitle.innerHTML = title.value;
       booklistRow.appendChild(newTitle);
       
       const newAuthor = document.createElement('th');
       newAuthor.innerHTML = author.value;
       booklistRow.appendChild(newAuthor);

       const newIsbn = document.createElement('th');
       newIsbn.innerHTML = isbn.value;
       booklistRow.appendChild(newIsbn);
    

       booklist.appendChild(booklistRow);
   }
});
