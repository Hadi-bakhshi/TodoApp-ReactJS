const Todo = ({todo}) => {
    return (
        <div>
            <div key={todo.id}>
          <div>{todo.text}</div>
          <div>
            <button>Edit</button>
            <button>Complete</button>
          </div>
        </div>
        </div>
    )
}

export default Todo
