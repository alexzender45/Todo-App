import React, {Component} from 'react';
import Todo from './Todo';
import Header from './Header';
import AddTodo from './AddTodo';
import uuid from 'uuid';
 export default class index extends Component {
    state = {
    todos : [ ]
    }
// Toggle complete
    markComplete = (id) => {
        this.setState({ todo : this.state.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        }) }); 
    }
    //Delete Todo
    delTodo = (id) => {
        this.setState({ todos : [...this.state.todos.filter(todo => todo.id
        !== id)]})
    }
    //Add Todo
    addTodo = (title) => {
        const newTodo ={
            id : uuid.v4(),
            title,
            completed : false
        }
        this.setState({ todos: [...this.state.todos,newTodo]});
    }
   
    render(){
        return (
            <div style = {all}>
            <div className= "index">
            <div className = "container">
            <Header />
            <div  style = {make}>
            <AddTodo addTodo={this.addTodo}/>
            </div>
         <Todo todos = {this.state.todos} markComplete = {this.markComplete}
         delTodo = {this.delTodo} />
         </div>
        </div>
        </div>
        );
    }
}
const make = {
    paddingTop : '15px',
    marginLeft : '500px',
    marginRight : '500px'
}

const all = {
    margin : 'auto'
}
