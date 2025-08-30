function StatusContainer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 h-full">
  {/* Active Projects */}
  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 card-hover">
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-yellow-500">
        <span className="text-white text-xl">💻</span>
      </div>
      <span className="text-green-500 text-sm font-semibold">+10%</span>
    </div>
    <h3 className="text-2xl font-bold mb-1 text-white">5</h3>
    <p className="text-gray-300">Active Projects</p>
  </div>

  {/* Code Reviews */}
  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 card-hover">
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
        <span className="text-white text-xl">📝</span>
      </div>
      <span className="text-green-500 text-sm font-semibold">+15%</span>
    </div>
    <h3 className="text-2xl font-bold mb-1 text-white">12</h3>
    <p className="text-gray-300">Code Reviews</p>
  </div>

  {/* Pull Requests */}
  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 card-hover">
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center">
        <span className="text-white text-xl">🔄</span>
      </div>
      <span className="text-green-500 text-sm font-semibold">+8%</span>
    </div>
    <h3 className="text-2xl font-bold mb-1 text-white">7</h3>
    <p className="text-gray-300">Open Pull Requests</p>
  </div>

  {/* Learning Progress */}
  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 card-hover">
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center">
        <span className="text-white text-xl">📚</span>
      </div>
      <span className="text-green-500 text-sm font-semibold">+20%</span>
    </div>
    <h3 className="text-2xl font-bold mb-1 text-white">75%</h3>
    <p className="text-gray-300">Learning Progress</p>
  </div>
</div>

    </>
  );
}
export default StatusContainer;
