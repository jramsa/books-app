import {useEffect,useState} from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';

function BookEdit(props){
    //const [book, setBook] = useState(props.book); //sans le rooter

    //avec le rooter
    const {id} = useParams();
    //const [book, setBook] = useState(props.books.find(book=>book.id === Number(id))); //sans serveur JSON
    const[book, setBook]=useState([]); //avec serveur JSON

    const navigate = useNavigate();
  
  useEffect(
    ()=>{
      const getData = async()=>{
        const response = await fetch("http://localhost:3001/books/"+id);
        const data = await response.json();
        setBook(data);
      }
      getData();
    },[]
  ) //avec serveur JSON

    const inputChangeHandler = ({target})=>{
        setBook({...book,[target.name] : target.value});
    }

    //avec serveur JSON
    const editBook = async(book)=>{
        const settings = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book)
        };
            const response = await fetch("http://localhost:3001/books/"+book.id, settings);
            console.log(response);
            if(response.ok){
              alert('Le livre a été modifié')
              navigate("/books");
            }else
              alert('Attention : Le livre n\'a pas été modifié')
            return response;
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
        {/*<td><button type="button" className="btn btn-primary" onClick={()=>{props.editBookHandler(book);}}>Valider</button></td> //sans serveur JSON*/}
        <td><button type="button" className="btn btn-primary" onClick={()=>editBook(book)}>Valider</button></td>
        <td><Link className="btn btn-danger" to={"/books"}>Annuler</Link></td> {/*avec le router*/}
        </tr>
        </table>
  </form>
  </>)
}

export default BookEdit;