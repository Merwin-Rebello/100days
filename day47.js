function Maincontent(){
    return(<div>
        <h1>my react website</h1>
        <h2> Merwin Rebello here!!!</h2>
        <p> using funcions in react for the first time</p>
    </div>
    )
}

function Main2(){
   return( <div>
        <h2> INDIA will win the world cup in 2022</h2>
        <ul>
            <li>i will be successfull</li>
            <li> i am happy and will follow my dream</li>
        </ul>
    </div>
   )
}
//in react use 'className' instead of 'class'
function Body(){
    return(
         <div>
         <h1 className='header'>this is my first react website usinf className</h1> 
         </div>
    )
 }



ReactDOM.render(
    <div>
        <Maincontent />
        <Main2 />
        <Body />
    </div>,
    document.getElementById('main')


)

