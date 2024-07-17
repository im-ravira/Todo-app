import { useDispatch } from 'react-redux';
import {
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../redux/actions';
import { FaTrash, FaCheck, FaTimes } from 'react-icons/fa';


const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 px-5 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">
          {index + 1}.
        </span>
        <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
      </div>
      <div className='sm:space-x-14 space-x-3 ml-8'>
        {!todo.completed && (
          <button
            className="text-sm bg-blue-600 text-white px-2 sm:px-10 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white px-2 sm:px-10 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
        <button
          className="mr-2 text-sm bg-red-500 text-white px-2 sm:px-10 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
