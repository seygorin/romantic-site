import React from 'react';

export const Favorite: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Favorite
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
