import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTodo, updateSearchTerm } from '../redux/actions';

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      handleAddTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-6xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>TODO's for Today</h2>
      <div className="flex items-center mb-2 pl-5 pr-5">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={20} />
        </button>
      </div>

      <div className='flex sm:items-center items-end justify-end sm:justify-between py-2'>
      <p className="my-2 pl-6 text-xl italic hidden md:block">✍️ Enter Your Tasks Here...</p>
        <div className="flex flex-col items-end justify-between gap-1 px-5">
        <div className="flex items-center mb-2">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
        <FilterButtons />
      </div>
      </div>
      <p className="my-2 pl-5 text-xl italic md:hidden block">✍️ Enter Your Tasks Here...</p>
      <TodoList />
    </div>
  );
};

export default Todo;
