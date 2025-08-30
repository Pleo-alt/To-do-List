function TasksToday() {
  return (
    <>
<div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-full">
  <h3 className="text-3xl font-semibold mb-6 text-white">Tasks for Today</h3>
  <ul className="space-y-4">
    <li className="flex items-start text-lg text-gray-300 border-b border-gray-600 pb-4">
      <span className="w-full break-words text-ellipsis">
        Complete a React component using hooks and make sure the code is optimized for performance.
      </span>
    </li>
    <li className="flex items-start text-lg text-gray-300 border-b border-gray-600 pb-4">
      <span className="w-full break-words text-ellipsis">
        Read up on React Router for navigation and understand how to handle dynamic routes properly.
      </span>
    </li>
    <li className="flex items-start text-lg text-gray-300 border-b border-gray-600 pb-4">
      <span className="w-full break-words text-ellipsis">
        Build a small project using Context API to manage global state and improve state management across components.
      </span>
    </li>
    <li className="flex items-start text-lg text-gray-300">
      <span className="w-full break-words text-ellipsis">
        Review React documentation for best practices, especially hooks, and functional components.
      </span>
    </li>
  </ul>
</div>



    </>
  );
}
export default TasksToday
