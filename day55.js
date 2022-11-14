function Header(){
    return(
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav--logo"/>
                <ul className="nav-items">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer(){
    return(
        <footer>
         <small>@2022 Merwin Rebello development .All rights reserved</small>
        </footer>
    )
}
function Maincontent(){
    return(
        <div>
            <h1> Reasons I'm excited to learn React</h1>
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