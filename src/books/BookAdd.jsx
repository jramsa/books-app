import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BooksAdd(props){
    const [book, setBook] = useState({title: "", author:""});

    const navigate = useNavigate(); //avec serveur JSON

    /*const titleChangeHandler = (event)=>{
        console.log(event);
        setBook({...book,title : event.target.value})
    }

    const authorChangeHandler = (event)=>{
        console.log(event);
        setBook({...book,author : event.target.value})
    }*/

    const inputChangeHandler = ({target})=>{
        setBook({...book,[target.name] : target.value});
    }

    const addBook = async(book)=>{
      const settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book)
    };
        const response = await fetch("http://localhost:3001/books/", settings);
        console.log(response);
        if(response.ok){
          alert('Le livre a été ajouté')
          navigate("/books");
        }else
          alert('Attention : Le livre n\'a pas été ajouté')
        return response;
    }

    /*const addNewBook = (event) => {
        event.preventDefault();
        console.log("--Ajout--");
        console.log(event.target);
        props.addBookHandler(book);

    }*/

    return (<>
    <h2>Ajout</h2>
    <form> 
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Titre</label>
      <input type="text" className="form-control" id="title" name="title" value={book.title} onChange={inputChangeHandler}/>
    </div>
    <div className="mb-3">
      <label htmlFor="author" className="form-label">Auteur</label>
      <input type="text" className="form-control" id="author" name="author" value={book.author} onChange={inputChangeHandler}/>
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <input type="text" className="form-control" id="description" name="description" value={book.description} onChange={inputChangeHandler}/>
    </div>
    <div className="mb-3">
      <label htmlFor="price" className="form-label">Prix</label>
      <input type="number" className="form-control" id="price" name="price" value={book.price} onChange={inputChangeHandler}/>
    </div>
    <table>
      <tr>
      {/*<td><button type="button" className="btn btn-primary" onClick={()=>{props.addBookHandler(book);}}>Valider</button></td>//sans le serveur JSON*/}
      <td><button type="button" className="btn btn-primary" onClick={()=>{addBook(book);}}>Valider</button></td>
      <td><Link className="btn btn-danger" to={"/books"}>Annuler</Link></td> {/*avec le router*/}
      </tr>
    </table>
  </form>
  </>)
}

export default BooksAdd;