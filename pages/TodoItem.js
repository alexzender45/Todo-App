import React, {Component} from 'react';
import propTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
      return {
          
          background : 'blue',
          padding : '10px',
          borderBottom : '1px #ccc dotted', 
          textDecoration : this.props.todo.completed ? 
          'line-through' : 'none',
          marginRight : '600px',
          marginLeft : '600px',
          marginTop : '50px',
          marginBottom : '50px'
      }  
    }

   
    render(){
        const {id, title } = this.props.todo;
        return(
            <div style = {this.getStyle()}>
    <p>
        <input type = "checkbox" onChange = {this.props.markComplete.bind(this, id)} /> {' '}
         {title}
         <button onClick = {this.props.delTodo.bind(this, id)} style = {btnStyle}> Delete</button> 
         </p>
    </div>
        )
    }
}
// propTypes
TodoItem.propTypes = {
    todos : propTypes.object
}

const btnStyle = {
    background : '#ff0000',
    color : '#fff',
    border : 'none',
    padding : '5px 10px',
    borderRadius : '50%',
    cursor : 'pointer',
    float : 'right'
}

export default TodoItem;
