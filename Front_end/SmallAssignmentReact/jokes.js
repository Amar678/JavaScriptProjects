function Jokes(props){

     return(
        <div>
          {props.setup && <h3>setup: {props.setup}</h3>}
          <p>punchline: {props.punchline}</p>
          <hr />
        </div>
     )
}

function App(){
    return(
    <div>
     <Jokes 
        punchline="Some punchline without any setup."
    />  
    <Jokes 
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
    />
    <Jokes 
        setup=" How did the hacker escape the police?"
        punchline="He just ransomware!"
    />
    </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))
