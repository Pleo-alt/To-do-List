import StatusContainer from "../components/StatusContainer";
import TasksToday from "../components/TasksToday";
function Dashboard() {
  return (
    <div className="mt-18 p-2 md:p-6">
      <div className="text-left mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 md:gap-x-4">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              📋 Task Dashboard
            </h1>
            <p className="text-white">Stay organized and productive</p>
          </div>

          <button className="bg-[#58A0C8] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out w-full md:w-auto mt-4 md:mt-0">
            Add Task
          </button>
        </div>
      </div>

      <main className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 p-6">
          <StatusContainer />
        </div>

        <div className="flex-1 p-6">
          <TasksToday />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
