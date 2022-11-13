 function Header(){   // this is the cild and it has been called in the main parent
    return (
            <header>
                <nav>
                    <img src="./react-logo.png"/>
                    <button>BELIEVE</button> 
                </nav>
            </header>
    )
}

function Footer(){ //childern component
    return(
        <footer>
        <small>@2022 Merwin Rebello ,ALL Rights reserved</small> 
        </footer>
    )
}
function Maincontent(){ //childen component
    return(
        <div>
                 <button>BELIEVE</button>
       <h1> Reasons why i want to learn REACT</h1>
       <ol>
       <li> its a popular library ,so to learn something interesing</li>
       <li>i am happy to learn something NEW!!!</li>
       </ol>
        </div>
        
    )
}


function Page(){ //this is the parent compenent
    return(
        <div>
            
        <Header /> {/* here we ave created the instance of the class that is we have create a child(object) */}
        <Maincontent/>  {/* these are all the children of the main Page */}
        <Footer/>
        </div>
    )
}
ReactDOM.render(<Page/>, document.getElementById("root"))