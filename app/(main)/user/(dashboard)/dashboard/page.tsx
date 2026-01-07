import {LuShoppingBag} from "react-icons/lu";

function Page() {
    return (
        <>
            <section id="user-dashboard-section">
                <div className="container_full mt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div
                            className="col bg-white border border-gray-200 rounded p-6 flex flex-col items-center justify-center">
                            {/* Blue Circle Icon */}
                            <div
                                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                                <LuShoppingBag size={40} className="text-white"/>
                            </div>

                            {/* Static Label */}
                            <p className="text-gray-500 text-[16px] font-normal mb-2">
                                All Order
                            </p>

                            {/* Static Number */}
                            <h3 className="text-[25px] font-bold text-[#1a1a1a]">
                                1
                            </h3>
                        </div>
                        <div
                            className="col bg-white border border-gray-200 rounded p-6 flex flex-col items-center justify-center">
                            {/* Blue Circle Icon */}
                            <div
                                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                                <LuShoppingBag size={40} className="text-white"/>
                            </div>

                            {/* Static Label */}
                            <p className="text-gray-500 text-[16px] font-normal mb-2">
                                Completed Order
                            </p>

                            {/* Static Number */}
                            <h3 className="text-[25px] font-bold text-[#1a1a1a]">
                                1
                            </h3>
                        </div>
                        <div
                            className="col bg-white border border-gray-200 rounded p-6 flex flex-col items-center justify-center">
                            {/* Blue Circle Icon */}
                            <div
                                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                                <LuShoppingBag size={40} className="text-white"/>
                            </div>

                            {/* Static Label */}
                            <p className="text-gray-500 text-[16px] font-normal mb-2">
                                Processing Order
                            </p>

                            {/* Static Number */}
                            <h3 className="text-[25px] font-bold text-[#1a1a1a]">
                                5
                            </h3>
                        </div>
                        <div
                            className="col bg-white border border-gray-200 rounded p-6 flex flex-col items-center justify-center">
                            {/* Blue Circle Icon */}
                            <div
                                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                                <LuShoppingBag size={40} className="text-white"/>
                            </div>

                            {/* Static Label */}
                            <p className="text-gray-500 text-[16px] font-normal mb-2">
                                Canceled Order
                            </p>

                            {/* Static Number */}
                            <h3 className="text-[25px] font-bold text-[#1a1a1a]">
                                0
                            </h3>
                        </div>
                        <div
                            className="col bg-white border border-gray-200 rounded p-6 flex flex-col items-center justify-center">
                            {/* Blue Circle Icon */}
                            <div
                                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                                <LuShoppingBag size={40} className="text-white"/>
                            </div>

                            {/* Static Label */}
                            <p className="text-gray-500 text-[16px] font-normal mb-2">
                                Pending Order
                            </p>

                            {/* Static Number */}
                            <h3 className="text-[25px] font-bold text-[#1a1a1a]">
                                3
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;