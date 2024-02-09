
// function TempName(){
//     return(
//         <div>
//         <img src="./React-icon.svg.png" width="40px"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>
//                 Was first released in 2013 
//             </li>
//             <li>
//                 Was originally created by Jordan Walke
//             </li>
//             <li>
//                 Has well over 100K stars on Github
//             </li>
//             <li>
//                 Is maintained by Facebook
//             </li>
//             <li>
//                 Powers thousands of enterprise apps, including mobile apps
//             </li>
//         </ul>
//         </div>
//     )
// }
// ReactDOM.render(<TempName />,document.getElementById("root"))
// import React from "react"
// import ReactDOM from "react-dom" 
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))