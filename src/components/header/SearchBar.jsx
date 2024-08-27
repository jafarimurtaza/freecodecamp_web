import React from 'react'

export default function SearchBar() {
    return (
        <div>
            <input
                type="text"
                className="w-full px-4 py-2 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Search..." />
        </div>
    )
}
