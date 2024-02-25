"use client"

import React, { useState } from 'react';

export const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 px-3">
      <div className="relative">
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="border-2 border-gray-200 rounded-full p-2 pl-8 outline-none" 
          placeholder="Search..."
        />
        <button type="submit" className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
};