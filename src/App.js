import React, { useEffect } from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";
// import AddTodo from "./todo/AddTodo";
import Loader from "./Loader";
import Modal from "./modal/modal";

const AddTodo = React.lazy(() => new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./todo/AddTodo'))
    }, 2000)
}))

function App() {
    const [todos, setTodos] = React.useState(
        // [
        //     {id: 1, complete: false, title: "Сварить макароны"},
        //     {id: 2, complete: false, title: "Сварить гречу"},
        //     {id: 3, complete: false, title: "Поигарть в игры"},
        //     {id: 4, complete: false, title: "Создать гениальный проект"},
        // ]
        []
    )

    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 2000)
            })
    }, [])

    function trigger(id){
        setTodos(
            todos.map(todo => {
                if (todo.id === id){
                    console.log('Todo id', todo.id, 'item id', id)
                    todo.complete = !todo.complete
                    console.log('Todo changed', todo.complete)
                    // console.log('Todo', todo)
                }

                return todo
            })
        )
    }

    function removeTodo(id){
        setTodos(
            todos.filter(
                todo => todo.id !== id
            )
        )
    }

    function addTodo(title){
        setTodos(todos.concat(
            [{
                title,
                id: Date.now(),
                complete: false
            }]
        ))
    }

    return (
      <Context.Provider value={{removeTodo}}>
          <div className="wrapper">
              <h1>React tutorial</h1>
              <Modal/>
              <React.Suspense fallback={<div/>}>
                  <AddTodo onCreate={addTodo}/>
              </React.Suspense>
              {loading &&  <Loader/>}
              {todos.length
                  ? (<TodoList todos={todos} onTrigger={trigger}/>)
                  : (loading ? '' :  <p>No todos!</p>)}
          </div>
      </Context.Provider>
  );
}

export default App;
