function Contact(props){
    return(
        <div className="contacts">       
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
        </div>
    )
}

                                     //Properties/Props

function Body(){
    return(

        <div className="contacts">
        <Contact 
            img="mr-whiskerson.png"
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
        />
        <Contact 
            img="fluffykins.png"
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@me.com"
        />
        <Contact 
            img="felix.png"
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
        />
        <Contact 
            img="pumpkin.png"
            name="Pumpkin"
            phone="(0800) CAT KING"
            email="pumpkin@scrimba.com"
        />
        </div>
    
  

ReactDOM.createRoot(document.getElementById('root')).render(<Body />)