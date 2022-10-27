import { useState, useEffect, useMemo } from "react";


let  SortFilteringMenu = (props) => {
  function onFilterValueChanged(event) {
    /*
     * The event has a target object with a value property... The value property stores the values of the list.
     * This value now needs to be passed to the parent component.
     */
   
    props.filterValueSelected(event.target.value);
  }

  return (
    <div className="bg-white p-3 mb-5">
      <ul className="flex justify-between">
        <li className="mr-3">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
            Top
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
            Hot
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2">
            Recent
          </button>
        </li>
        <li className="mr-3">
          <select
            onChange={onFilterValueChanged}
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="all">All categories</option>
            <option value="music">Music</option>
            <option value="film">Film</option>
            <option value="game-development">Game Development</option>
            <option value="web-development">Web Development</option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default SortFilteringMenu;
