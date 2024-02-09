function NavElements(){
    return(
        <nav>
         <img src="./React-icon.svg.png" width="40px" className = "nav-icon"/>
         <h3 className ="nav--logo_text">ReactFacts</h3>
         <h4 className = "nav--title">React Course - Project 1</h4>
      </nav>
    )
}
function MainContent(){
    return(
        <main>
            <h1 className = "main--title">Fun Facts About React</h1>
            <ul className ="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>            </ul>
        </main>
    )
}
function App(){
       return(
       <div>
             <NavElements />
             <MainContent />
     </div>
        )
   
}
ReactDOM.render(<App />,document.getElementById("container"))
