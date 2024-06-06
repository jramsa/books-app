import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"

function BookDetails(props){
    const {id} = useParams();
    //const[book, setBook] = useState(props.books.find(b=>b.id===+id)) //sans le serveur json
    const[book, setBook]=useState([]); //avec le serveur json
  
  useEffect(
    ()=>{
      const getData = async()=>{
        const response = await fetch("http://localhost:3001/books/"+id);
        const data = await response.json();
        setBook(data);
      }
      getData();
    },[]
  ) //avec le serveur json

    return(
        <>
        <div>
            <h2>Description : {book.title}</h2>
        <ul>
            <li>Id : {book.id}</li>
            <li>Auteur : {book.author}</li>
            <li>Titre : {book.title}</li>
            <li>Description : {book.description}</li>
            <li>Prix : {book.price}</li>
        </ul>
        <Link className="btn btn-danger" to={"/books"}>Retour</Link>
        </div>
        </>
    )
}

export default BookDetails;