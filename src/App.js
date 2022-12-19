
import './App.css';
import { useState } from "react";
function App(){
  const url=Object.freeze({URL1:"",URL2:"",URL3:""});
   const [msg,finalMsg]=useState(url);
   const [array,setarray]=useState([])
   const handleChange=(e)=>{finalMsg({...msg,[e.target.name]:e.target.value.trim()});
   }
   const handleSubmit=(e)=>{e.preventDefault();

    let URL1=msg.URL1;
    let URL2=msg.URL2;
    let URL3=msg.URL3;
    setarray([...array,{URL1,URL2,URL3}])
    console.log(msg);
   }
   return(
    <div className="App">
      
        <h1>Image Loader</h1>
        <div className="fix-table">
        <p>Image URL 1</p>
        <input type={Text} name='URL1' onChange={handleChange} placeholder="Enter the image url 1"></input><br></br>

        <p>Image URL 2</p>
        <input type={Text} name='URL2' onChange={handleChange} placeholder="Enter the image url 2"></input><br></br>

        <p>Image URL 3</p>
        <input type={Text} name='URL3' onChange={handleChange} placeholder="Enter the image url 3"></input><br></br>

        <button onClick={handleSubmit}>create</button>
      </div>
      <h1>Image List</h1>
      <div className="fit-image">
        <div>
          {
            array.map((figure,id)=>{
                return(
                  
                    <div key={id}>
                    <div className="set"> 
                    <img src={figure.URL1} />
                    </div>

                    <div className="set">
                    <img src={figure.URL2} />
                    </div>

                    <div className="set">
                    <img src={figure.URL3} />
                    </div>
                    </div>    
                )
              }
            )
          }
        </div>
      </div>
    </div>
   );
}
export default App;
