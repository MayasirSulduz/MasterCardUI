import { useState } from "react";

function Atm() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div style={{ perspective: "1000px" }}>
            <div
                onClick={() => setIsFlipped(!isFlipped)}
                style={{
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    position: "relative",
                    width: "520px",
                    height: "280px",
                    cursor: "pointer",
                }}
            >
                {/* FRONT */}
                <div
                    style={{ backfaceVisibility: "hidden" }}
                    className="absolute inset-0 w-full h-full bg-gray-900 rounded-2xl p-6 text-white flex flex-col justify-between"
                >
                    <div className="flex justify-between">
                        <div className="flex justify-start mb-4">
                            <div className="w-12 h-12 bg-red-500 rounded-full"></div>
                            <div className="w-12 h-12 bg-yellow-500 rounded-full -ml-4"></div>
                            <h1 className="text-2xl font-bold m-2">MasterCard</h1>
                        </div>
                        <img className="w-16 h-16 -mt-3" src="src/assets/chip.png" alt="Chip" />
                    </div>
                    <div className="flex justify-between m-4">
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

                {/* BACK */}
                <div
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                    className="absolute inset-0 w-full h-full bg-gray-800 rounded-2xl text-white flex flex-col items-center"
                >
                    <p className="text-sm text-gray-300 p-2 "> for service, please call (+1) 123-4567</p>
                    <div className="w-full h-12 bg-black"></div>
                    <div className="flex items-center gap-4 m-4 px-6 w-full">
                        {/* <div className="flex-1 bg-white h-10 rounded"></div> */}
                        <div className="flex-1 h-10 rounded bg-[repeating-linear-gradient(to_bottom,#ffffff_0,#ffffff_4px,#f1f1f1_4px,#f1f1f1_5px)]"></div>
                        <p className="text-gray-300 font-bold text-lg">123</p>
                    </div>
                    <p className="text-sm text-gray-300 p-3" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    );
}

export default Atm;