import './App.css';
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Title } from './components/title';

const todos = [
  {
    text : 'Make dishes',
    completed: true
  },
  {
    text : 'Wash teeths',
    completed: false
  },
  {
    text : 'Take a snap',
    completed: true
  }
]

function App() {
  return (
    <div className="App">
      <Title />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (<TodoItem 
        key={todo.text}
        text={todo.text}
        completed = {todo.completed} />))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
