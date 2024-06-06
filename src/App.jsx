import './App.css';
import {useEffect,useState} from 'react';
import BooksList from './books/BookList';
import BooksAdd from './books/BookAdd';
import BooksEdit from './books/BookEdit';
import BooksDetails from './books/BookDetails';
import { Navigate, Routes, Route, Link, useNavigate,  } from 'react-router-dom';

function App() {

  //const [action, setAction] = useState(""); //sans le router
  //const [bookToEdit, setBookToEdit] = useState({}); //sans le router
  
  /*
  const init =[
      {id: 1, title: "Le couteau", author: "Jo Nesbo", description: "Après la conclusion dramatique La Soif, Le Couteau voit Harry Hole se réveiller avec une gueule de bois féroce, ses mains et ses vêtements recouverts de sang...Non seulement Harry est sur le point de faire face à un vieil ennemi mortel, mais aussi à son plus sombre défi personnel.", price: 11.00},
      {id: 2, title: "Mort sur le Nil", author: "Agatha Christie", description: "A venir", price: 14.50},
      {id: 3, title: "A dance of dragon", author: "GRR Martin", description: "A venir", price: 27.00},
    ];

    const [books, setBooks] = useState(
      (window.localStorage.getItem("books") !== undefined) ?JSON.parse(window.localStorage.getItem("books")):init // Chargement avec le localStorage
      //init //Chargement sans le localStorage
    );

    useEffect(
      ()=>{
        window.localStorage.setItem("books", JSON.stringify(books));
      },[books]);
  */

  /*
  //Sans le router
  const showForm = (actionToDo, id)=>{
    setAction(actionToDo);
    if(id !== undefined){
      getBookToEdit(id);
    }
  }*/

  //avec le router
  /*const navigate = useNavigate();

  const addBook =(book)=>{
    book.id = books.length>0?books[books.length-1].id+1:1;
    setBooks([...books,book]);
    //setAction(""); //sans le rooter
    navigate("/books"); //avec le router
  }

  const editBook = (book)=>{
    setBooks(books.map(b=>b.id===book.id?book:b));
    //setAction(""); //sans le router
    navigate("/books"); //avec le router
  }*/

  /*
  //sans le router 
  const getBookToEdit = (id)=>{
    setBookToEdit(books.find(book=>book.id===id));
  }*/

  /*const deleteBook = (id)=>{
    if(window.confirm("Etes-vous sûr de supprimer ce livre ?"))
      setBooks(books.filter(book=>book.id!==id));
  }*/

  /*
  //sans le router
  useEffect(
    ()=>{
      console.log("BookToEdit : " + JSON.stringify(bookToEdit))
    }
  )*/

  //Avec le router, stockage dans le localStorage
  

  return (
    <div className='container'>
      <h1>Ma bibliothèque</h1>
      {/* Sans le router
      <BooksList books={books} showFormHandler={showForm} deleteHandler={deleteBook}/>
      <button className='btn btn-success' onClick={()=>showForm("add")}>Ajouter un livre</button>
      { action === "add" && <BooksAdd addBookHandler={addBook} />}
      { action === "edit" && <BooksEdit editBookHandler={editBook} book={{...bookToEdit}} />}
  */}
  {/* Avec le router
  <Routes>
    <Route path='/' element={<Navigate to ='/books' replace='' />} />
    <Route path='/books' exact element={<BooksList books={books} deleteBookHandler={deleteBook}/>} />
    <Route path='/books/add' exact element={<BooksAdd addBookHandler={addBook} />} />
    <Route path='/books/edit/:id' exact element={<BooksEdit editBookHandler={editBook} books={books} />} />
    <Route path='/books/:id' exact element={<BooksDetails books={books} />} />
</Routes>*/}

{/*AVec le rooter + server JSON*/}
<Routes>
    <Route path='/' element={<Navigate to ='/books' replace='' />} />
    <Route path='/books' exact element={<BooksList />} />
    <Route path='/books/add' exact element={<BooksAdd />} />
    <Route path='/books/edit/:id' exact element={<BooksEdit />} />
    <Route path='/books/:id' exact element={<BooksDetails />} />
</Routes>
    </div>
  );
}

export default App;
