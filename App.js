const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"chaild"},[
        React.createElement("h1",{},"jhsgdf"),
        React.createElement("h1",{},"jhsgdf")
    ])
]) 


console.log("object", parent)

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)