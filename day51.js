//Part 1 of this page => different ways to render react 

/*  const page = (
    <div>
        <h1>untoldstory</h1>
        <h3>try until u suceed</h3>
        <ol>
            <li>cricket</li>
            <li>football</li>
            <li>e sports</li>
        </ol>
    </div>
)
ReactDOM.createRoot(document.getElementById('root')).render(page) //syntax for react 18 and above
ReactDOM.render(page, document.getElementById('root')) //for react 17
document.getElementById('root').append(page) // returns [object Object]
document.getElementById('root').append(JSON.stringify(page)) //returns a java script object
*/

//Part 2 of this page => My first simple webpage project 

const react = (
    <div>

        <img src="react.png" width="50px" height="50px"></img> 
        <img src="react.png" width="50px" height="50px" />
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k Stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprises apps, including mobile apps</li>
        </ul>

    </div>
)
//there are 2 ways of writing img tag ...ive written both on line 27 & 28
ReactDOM.createRoot(document.getElementById('root')).render(react)