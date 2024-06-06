import {useState} from 'react';
import { Link } from 'react-router-dom';

function BooksAdd(props){
    const [book, setBook] = useState({title: "", author:""});

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
    <table>
      <tr>
      <td><button type="button" className="btn btn-primary" onClick={()=>{props.addBookHandler(book);}}>Valider</button></td>
      <td><Link className="btn btn-danger" to={"/books"}>Annuler</Link></td> {/*avec le router*/}
      </tr>
    </table>
  </form>
  </>)
}

export default BooksAdd;