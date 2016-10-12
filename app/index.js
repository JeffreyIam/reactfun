var React = require('react')
var ReactDOM = require('react-dom')

var App = React.createClass({
  getInitialState: function () {
    return {
      todos: []
    }
  },
  addToDo: function (ev) {
    ev.preventDefault()
    var todo = this.input.value
    this.setState({
      todos: [...this.state.todos, todo],
      isEditing : false
    })
    this.input.value = ''
  },
  removeToDo: function (index) {
    var {todos} = this.state
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    })
  },
  editToDo: function (index) {
    var {isEditing, todos} = this.state
    if (!isEditing) {
    this.setState({
      isEditing: !isEditing
    })
    } else {
      todos[index] = this.change.value
      this.setState({
        isEditing: !isEditing,
        todos: todos
      })
      this.change.value = ''
    }
  },
  render: function () {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo, index) =>
            <li key={index}>{this.state.isEditing ? <input ref={(edit) => this.change = edit} placeholder={todo} />  : todo}
              <button onClick={() => this.removeToDo(index)}>Delete</button>
              <button onClick={() => this.editToDo(index)}>{this.state.isEditing ? 'Save' : 'Edit'}</button>
            </li>
          )}
        </ul>
        <form onSubmit={this.addToDo}>
          <input
          placeholder="To Do"
          ref={(item) => {this.input = item
          }}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))