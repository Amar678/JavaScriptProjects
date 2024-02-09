function Navbar(){
    return(
        <nav>
            <img src="airbnb-logo.png" className = "Logo" />
        </nav>
    )
}
function Hero(){
    return(
        <section className="hero_section">
            <img src="photo-grid.png" className="hero--photo"/>
          <h1 className="hero--header">Online Experiences</h1>
          <p className="hero--text">Join unique interactive activities led by
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
function Card(props){
    return(
        <div className="card">

                <img src={`${props.img}`} className="card--image"/>
                <div className="card--stats">
                     <img src="Star 1.png" className="card--star"/>
                     <span>{props.rating}</span>
                     <span className="gray">({props.reviewCount}).</span>
                     <span className="gray">{props.country}</span>
                  </div>
                  <p>{props.title}</p>
                  <p><span className="bold">From ${props.price}</span>/ Person</p>
        </div>
    
    )
}
function App(){
    return(
        <div>
          <Navbar />
          <Hero />
          <Card
            img="Katie-Zaferes.jpeg"
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
          />
        </div>
    )
}


ReactDOM.render(<App />,document.getElementById("root"))





/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
// one way
// const array1 = nums.map(x => x**2)
// console.log(array)
// 2nd way using function
const array1 = nums.map(function(x){
    return(x*x)
})
console.log(array1)




/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const CapitalizedName = names.map( x=> x[0].toUpperCase() + x.slice(1) 
)
console.log(CapitalizedName)




/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const array2 =pokemon.map(x =>  `<p>${x}</p>`
)
console.log(array2)


































/*
Quiz(my answers)
*1. What do props help us accomplish?
we can pass parameters to create different instaces and call them 


2. How do you pass a prop into a component?
we just call the instance


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   no beacuse it is considered as html text before curly braces


4. How do I receive props in a component?
function Navbar(props) {
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
an object */