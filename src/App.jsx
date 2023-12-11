import './App.css';
import { postari } from './data';


function Click(){
    alert("Hello World");
}



function App() {


  return (
    <div>
        <h1>Blogul Meu</h1>
        <p className='ciobri'>Ciobris</p>
        <button className='btn' onClick={Click}>whatev</button>

        <div className='postCont'>
          {/* <Post title="Postare 1" desc="desc 1"/> */}
          {/* <Post title="Postare 2" desc="desc 2"/> */}
          {
            postari.map((postare_curenta)=>{
              return(
                <Post title={postare_curenta.title} desc={postare_curenta.desc}/>
              )
            })
          }
        </div>
    </div>
  );

}

function Post(props) {
  return(
    <div className='post'>
              <h2>{props.title}</h2>
              <p>{props.desc}</p>
            </div>
  )
}

export default App;
