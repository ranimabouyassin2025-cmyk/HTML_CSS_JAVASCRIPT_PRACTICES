const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208,
    available: true,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    pages: 320,
    available: false,
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    available: true,
  },
  {
    id: 4,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    pages: 352,
    available: true,
  },
];
function getBookStatus(available){
    if(typeof available !=="boolean"){
        throw new Error("The value is not a boolean")
    
    }
    if(available==true)
        return "Available";
    else
        return "Borrowed";
}
//console.log(getBookStatus(false));
function displayBooks(bookArray){
    const list=document.querySelector("#bookList");
bookArray.forEach((book)=>{
    
    const article= document.createElement("article");
    article.textContent=`Author: ${book.author}
    Pages: ${book.pages}
    Status: ${getBookStatus(book.available)}`;
    list.appendChild(article);

});
}
function getAvailableBooks(books){
const available=books.filter((book)=>{return book.available==true});
return available;
}
function getLongestBooks(books){
const longest=books.reduce((max,current)=>{
if(current.pages>max)
    return current;
},0)
}
//displayBooks(books);
//console.log(getAvailableBooks(books));
console.log(getLongestBooks(books))