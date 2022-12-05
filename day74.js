function Main({img,name,info}){
    return(
        <div className="main">            
                <img src={img}/>
                <div className="child"><h1>{name}</h1></div>
                <div className="info-group"><p>{info}</p></div>       
        </div>
    )
}

function Body(){
    return(
        <div className="Parent">    
             <Main 
             img="show.png"
             name="IDATEN JUMP"
             info="EMBLEMS"    
             />

             <Main 
             img="Arnold.jpg"
             name=" Arnold .S"
             info="Made of iron"
             />
        </div>
  
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Body/>)