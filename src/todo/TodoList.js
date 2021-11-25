import React from "react";
import PropTypes from "prop-types"
import TodoItem from "./TodoItem";

const listStyle = {
    ul:{
        listStyle: 'none'
    }
}

function TodoList(props){
    return(
        <ul style={listStyle.ul}>
            {
                props.todos.map((todo, idx) => {
                    return (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            index={idx}
                            changed={props.onTrigger}/>
                    )
                })
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object.isRequired),
    onTrigger: PropTypes.func.isRequired
}

export default TodoList