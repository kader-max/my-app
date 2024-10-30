//import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Post from './Post'
import Side from './Side'
let C = '1'
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display:'flex', justifyContent:'center'}}>
      {/*counainer*/}
      <div style={{display:'flex',width:'70%'}}>
        {/*Posts*/}
        <div style={{width:"55%"}}>
          <Post PTitle='PURPOSE 01' PBody='100 Push up' />
          <Post PTitle='PURPOSE 02' PBody='100 Squad' />
          <Post PTitle='PURPOSE 03' PBody='100 Pull up' />

    
          
        </div>
        {/*sides*/}
        <div style={{width:'45%'}} >
          <Cond />
        </div>
      </div>
      {/*counainer*/}
      </div>
    </div>
  );
}
function Cond(){
  if(C === '1'){
    return(
      <Side/>
    )
  }else{
    return(
      <h1>NONE SIDE</h1>
    )
  }
}
















/*
<header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Header />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/ 

export default App;
