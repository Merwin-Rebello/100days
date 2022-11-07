// vanilla js
// const h1= document.createElement("h1")
// h1.textContent ="this is an imperative way to program"
// h1.className="header"
// document.getElementById("root").append(h1)
// console.log(h1)

// const element =<h1 className="header">this is jsx</h1>
// console.log(element)
// //  this will print {
// //  type: "h1",
// //  key: null,
// //  ref:null;
// //   props: {className: "header", children: "This is JSX"}, _owner: null, _store: {}}

// //  }

// ReactDOM.render(element, document.getElementById("root"))
// ReactDOM.render(
//     //  <h1 className="header">This is JSX</h1><p>hello</p>, 
//     //this will show error ...you cannot put elements like this...always wrap them inside of a parent like div
//     <div>
//      <h1 className="header">This is JSX</h1> //this is the  prarent
//      <p>HEllo</p>         
//     </div>,
//     //rendering one parent element ...It does not matter how many children we are putting as long as they are inside the parent element
//  document.getElementById('root')
//   )


//Declaring JSX as a variable
// const page = (   
//     <div>
//        <h1>This is JSX</h1>
//        <p>HEllO</p>         
//     </div>
// )
// //console.log(page)

// ReactDOM.render(
//    page,
//    document.getElementById('root')
// )

const navbar= (
    <div>
        <nav>
            <button><a href="https://www.google.com/">Google</a></button>
            <button><a href="https://www.yahoo.com/">Yahoo</a></button>
            <button><a href="https://www.instagram.com/">instagram</a></button>
        </nav>
    </div>
 )

 ReactDOM.render(
    navbar,
    document.getElementById('root')
 )
  //if you declare the HTML as various functions then you can add all the functions in the parent element
 //if you declare the JSX as variables then you can only add one inside the ReactDOM..only the latest one will appear as the output