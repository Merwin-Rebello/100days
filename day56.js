function Nav(){
    return(
        <nav>
       <img  id="logo" src="bccilogo.png" alt="LOL" />
        </nav>
    )
}
function Logo(){
    return(
        <div>
            <ol>
            <h1>T20 LIST OF PLAYERS</h1>
            <li>< a href="https://www.espncricinfo.com">Rohit Sharama(C)</a></li>
            <li>< a href="#"> Virat Kholi(VC)</a></li>
            <li>< a href="#"> Sanju Samson</a></li>
            <li>< a href="#">Rishabh Pant</a></li>
            <li>< a href="#">Merwin Rebello</a></li>
            <li>< a href="#">Axar Patel</a></li>
            <li>< a href="#">Ruturaj</a></li>
            <li>< a href="#">Ravi Bishnoi</a></li>
            <li>< a href="#">Arshdeep Shigh</a></li>
            <li>< a href="#"> Y.Chahal</a></li>
            <li>< a href="#">Kuldeep</a></li>
            </ol>
            <section className="sec1">
        <img  id="img2" src="" alt="body" />
        <br /><br /><br />
        <h3> For futher details... </h3>
        <p>Visit the site<a href="https://www.bcci.tv">BCCI</a></p>
      </section>
        </div>
    )
}
function Foot(){
    return(
        <footer>
            <small> @ BCCI all rights reserved, BCCI (BOARD OF CRICKET COUNCIL INDIA)</small>
        </footer>
    )
}
function Main(){
    return(
        <div>
             <Nav />
             <Logo />
             <Foot />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)