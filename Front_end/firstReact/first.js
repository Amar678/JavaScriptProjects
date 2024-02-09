
// ReactDOM.render(<p>Hi, I am Amar.</p>,document.getElementById("root"))


// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

// function MainContent() {
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )


// const h1 = document.createElement("h1")
// h1.textContent = "this is an imperative way of prgmng"
// h1.className = "header"
// document.getElementById("root").append(h1)



// const page = (
// <div>
// <h1 className = "header">This is JSX!</h1>
// <p>Its a para</p>
// </div>)

// ReactDOM.render(page,
//     document.getElementById("root"))

Challenge: 

/*Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

// const navbar = (
//     <nav>
//         <h1>Amars Bistro</h1>
//       <ul>
//         <li>Pricing</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
// )
// ReactDOM.render(navbar,
//  document.getElementById("root"))  (old way of rendering version 18 
// is not supporting render directly it change to below syntax)

// ReactDOM.createRoot(document.getElementById("root")).render(navbar)



/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */
const variable = (
    <div>
        <h1>I am an h1</h1>
        <p>I am a para</p>
        <ol>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ol>
    </div>
 
)
ReactDOM.render(variable,document.getElementById("root"))