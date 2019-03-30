import React, { Component }  from 'react'

export default class AddTodo extends Component {
    state = {
        title : ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }
    
    onChange = (e) => this.setState({ [e.target.name]: 
        e.target.value});
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display : 'flex'}}>
<input type = "text"
 name = "title"
 style = {{ flex : '10', paddind : '5px'}}
 placeholder ="Add Todo .."
 value = {this.state.title} 
 onChange = {this.onChange}
 />
 <div style = {sub}>
<input 
type = "submit"
value = "submit"
className = "btn"
style ={{flex : '1'}}
/>
</div>
            </form>
        )
    }
}

const sub = {
    background : 'blue',
    color : 'blue',
    border : 'none',
    borderRadius : '50%',
    marginLeft : '20px'
}