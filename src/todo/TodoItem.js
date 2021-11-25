import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";

const style = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '2px solid #000',
        borderRadius: '10px',
        marginBottom: '.5rem'
    },

    input: {
        margin: '.5rem'
    },
}

function TodoItem({todo, index, changed}){
    const {removeTodo} = useContext(Context)
    const classes = []

    if (todo.complete){
        classes.push('done')
    }

    return (
        <li style={style.li}>
            <span className={classes.join(' ')}>
                <input
                    type='checkbox'
                    style={style.input}
                    checked={todo.complete}
                    onChange={() => changed(todo.id)}/>
                &nbsp;
                <strong>{index + 1}</strong>&nbsp;{todo.title}
            </span>
            <button className='rm' onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    changed: PropTypes.func.isRequired
}

export default TodoItem