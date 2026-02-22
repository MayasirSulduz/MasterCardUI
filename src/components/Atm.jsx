import { useState } from "react";

function Atm() {

    return (
        // <div className="text-4xl text-blue-500">
        // <div className="min-h-screen flex items-center justify-center text-4xl text-blue-500">
        <div className="w-150 h-80 bg-gray-900 rounded-2xl p-6 text-white">
            {/* ATM component */}
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold mb-4">MasterCard</h1>
                <div className="flex justify-start mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full"></div>
                    <div className="w-12 h-12 bg-red-500 rounded-full -ml-4"></div>
                </div>
                <h1 className="text-2xl font-bold mb-4">Chip</h1>
            </div>

        </div>

    )
}

export default Atm;;