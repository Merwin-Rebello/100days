// creating /using functions so that we can call them again and again and reuse it 

// function TemporaryName(){ // ALWAYS REMEMBER THAT THE NAME OF FUNCTIONS AND VARIABLES SHOULD BEGIN WITHH CAPTIAL(PASCAL)
//     return {
//         <div>
//         <img src="./react-logo.png" width="50px" />
//         <h1>fun facts about react</h1>
//         <ul>
//             <li>Was released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k Stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprises apps, including mobile apps</li>
//         </ul>
//         </div>
//     }
// }
//  ReactDOM.render(<TemporaryName/>,document.getElementById("root"))// The name of the funct called should be given as here

function Page(){
    return(
        <div>
            <button>BELIEVE</button>
            <header>
                <nav>
                    <img src="./react-logo.png"/>
                    
                </nav>
            </header>
            <h1> Reasons why i want to learn REACT</h1>
        <ol>
            <li> its a popular library ,so to learn something interesing</li>
            <li>i am happy to learn something NEW!!!</li>
        </ol>
        <footer>
           <small>@2022 Merwin Rebello ,ALL Rights reserved</small> 
        </footer>
        </div>
    )
}
ReactDOM.render(<Page/>, document.getElementById("root"))