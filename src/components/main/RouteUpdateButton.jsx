import Link from 'next/link';
import React from 'react';

export default function RouteUpdateButton() {
  return (
    <div className="flex justify-center mt-4">
      <Link href="/update">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-colors duration-300">
          Изменить
        </button>
      </Link>
    </div>
  );
}
