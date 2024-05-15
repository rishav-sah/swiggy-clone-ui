const CardSkeleton = () => {
  return (
    <div className="h-80 w-64 animate-pulse rounded shadow">
      <div className="mb-4 h-48 rounded-md bg-gray-200"></div>
      <div className="ml-4">
        <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200"></div>
        <div className="mb-4 h-2 w-24 rounded-full bg-gray-200"></div>
        <div className="mb-4 h-2 w-24 rounded-full bg-gray-200"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
