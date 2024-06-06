import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BookList(props) {

  const[books, setBooks]=useState([]); //avec le serveur json
  
  useEffect(
    ()=>{
      const getData = async()=>{
        const response = await fetch("http://localhost:3001/books");
        const data = await response.json();
        setBooks(data);
      }
      getData();
    },[]
  ) //avec le serveur json

  const deleteBook = (id)=>{
    //A faire
  }

  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Titre</th>
      <th scope="col">Auteur</th>
      <th scope="col">Description</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {
        /*props.books.map(book=> sans le serveur JSON*/
        books.map(book=>
    <tr key={book.id}>
      <th scope="row">{book.id}</th>
      <td>{book.title}</td>
      <td>{book.author}</td>
      {/*<td><button className="btn btn-primary" onClick={()=>props.showFormHandler("edit",book.id)}>Editer</button></td> //sans le router*/}
      <td><Link className="btn btn-info" to={"/books/"+book.id}>Voir détails</Link></td> {/*avec le router*/}
      <td><Link className="btn btn-primary" to={"/books/edit/"+book.id}>Editer</Link></td> {/*avec le router*/}
      {/*<td><button className="btn btn-danger" onClick={()=>props.deleteBookHandler(book.id)}>Supprimer</button></td> //sans le serveur JSON*/}
      <td><button className="btn btn-danger" onClick={deleteBook(book.id)}>Supprimer</button></td>
    </tr>
        )}
  </tbody>
</table>
<Link className='btn btn-success' to="/books/add">Ajouter un livre</Link>
</>
  );
}

export default BookList;
