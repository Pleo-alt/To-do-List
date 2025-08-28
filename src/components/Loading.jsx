function Loading() {
  return (
    <div className="w-full max-w-xl mx-auto px-2 sm:px-4">
      <div className="w-full rounded-lg border border-blue-300 p-6 shadow-sm animate-pulse">
        <div className="space-y-4">
          <div className="h-4 w-3/4 rounded bg-gray-200"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-3 rounded bg-gray-200"></div>
              <div className="col-span-1 h-3 rounded bg-gray-200"></div>
            </div>
            <div className="h-3 w-5/6 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
