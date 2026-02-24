import { useState } from "react";

function Atm() {

    return (
        // <div className="text-4xl text-blue-500">
        // <div className="min-h-screen flex items-center justify-center text-4xl text-blue-500">
        <div className="w-130 h-70 bg-gray-900 rounded-2xl p-6 text-white flex flex-col justify-between">
            {/* ATM component */}
            <div className="flex justify-between">
                <div className="flex justify-start mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full "></div>
                    <div className="w-12 h-12 bg-yellow-500 rounded-full -ml-4"></div>
                    <h1 className="text-2xl font-bold m-2">MasterCard</h1>
                </div>
                <img className="w-16 h-16 " src="src/assets/chip.png" alt="Chip"/>
            </div>

            <div className="flex justify-between">
                <div>
                    <p className="text-sm text-gray-400">Card Number</p>
                    <p className="text-lg font-bold">5873 8903 5294 0836</p>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="text-sm text-gray-400">Card Holder</p>
                    <p className="text-lg font-bold">John Doe</p>
                </div>
                <div>
                    <p className="text-sm text-gray-400">Expires</p>
                    <p className="text-lg font-bold">12/24</p>
                </div>
            </div>

        </div>

    )
}

export default Atm;;