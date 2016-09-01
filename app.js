//
var HolaMundo = React.createClass({
    //displayname es una propiedad creada
    displayName : "HolaMundo",
    render: function(){
        return(
            React.createElement('div', null,
                React.createElement('h1',null,'Mi primer app con React'),
                React.createElement('div', null, 'en area 51'),
                React.createElement('p', null, 'Alumno: ' + this.props.name)
            )
        )
    }
})

//this.props.name
ReactDOM.render(
    React.createElement(HolaMundo, {
        name: 'a.guzman@costamar.com'
    }),
    document.getElementById("main")
)
