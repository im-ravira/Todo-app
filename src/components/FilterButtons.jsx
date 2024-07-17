import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos, completeAll } from '../redux/actions';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className="flex space-x-6 items-center">
      <select
        className="text-sm px-3 py-1 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      <button
        className="text-sm px-4 py-1 bg-purple-600 hover:bg-blue-500 focus:bg-blue-600 text-white rounded ml-2"
        onClick={() => dispatch(completeAll())}
      >
        Complete All
      </button>
    </div>
  );
};

export default FilterButtons;
