function SortFilteringMenu() {
  return (
    <div className="bg-white p-3 m-10">
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
          <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="">Categories</option>
            <option value="for-rent">Music</option>
            <option value="for-sale">Film</option>
            <option value="for-sale">Game Development</option>
            <option value="for-sale">Web Development</option>
          </select>
        </li>        
      </ul>
    </div>
  );
}

export default SortFilteringMenu;
