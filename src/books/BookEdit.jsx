import {useEffect,useState} from 'react';
import { useParams, Link } from 'react-router-dom';

function BookEdit(props){
    //const [book, setBook] = useState(props.book); //sans le rooter

    //avec le rooter
    const {id} = useParams();
    //const [book, setBook] = useState(props.books.find(book=>book.id === Number(id))); //sans le serveur json
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

    const inputChangeHandler = ({target})=>{
        setBook({...book,[target.name] : target.value});
    }

    const editBook = (id)=>{
      //A faire
    }

    /*
    //Sans le rooter
    useEffect(
      ()=>{
        console.log("BookToEdit : " + JSON.stringify(props.book));
        setBook(props.book);
      },[props]);
    */

    return (<>
    <h2>Edition</h2>
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
        {/*<td><button type="button" className="btn btn-primary" onClick={()=>{props.editBookHandler(book);}}>Valider</button></td> //sans le serveur JSON*/}
        <td><button type="button" className="btn btn-primary" onClick={()=>{editBook(book);}}>Valider</button></td>
        <td><Link className="btn btn-danger" to={"/books"}>Annuler</Link></td> {/*avec le router*/}
        </tr>
        </table>
  </form>
  </>)
}

export default BookEdit;