export default function MonthlySalesReport() {
    const data = [
        {label: 'Jan', value: 150},
        {label: 'Feb', value: 380},
        {label: 'Mar', value: 180},
        {label: 'Apr', value: 290},
        {label: 'May', value: 170},
        {label: 'Jun', value: 180},
        {label: 'Jul', value: 280},
        {label: 'Aug', value: 100},
        {label: 'Sep', value: 200},
        {label: 'Oct', value: 380},
        {label: 'Nov', value: 270},
        {label: 'Dec', value: 100},
    ];

    const maxValue = 400;
    const gridLines = [400, 300, 200, 100, 0];

    return (
        <div className="w-full p-4 bg-white rounded border border-gray-200">
            <h2 className="text-[16px] font-bold text-gray-800 border-b border-gray-200 pb-4 mb-8">
                Monthly Sales
            </h2>

            {/* Main Chart Wrapper - Defined Height is Crucial */}
            <div className="relative h-[200px] w-full flex flex-col">

                {/* Y-Axis & Grid Lines Layer */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {gridLines.map((line) => (
                        <div key={line} className="flex items-center w-full h-0">
                            <span className="w-12 text-sm text-slate-400">{line}</span>
                            <div className="flex-1 h-[1px] bg-slate-100"></div>
                        </div>
                    ))}
                </div>

                {/* Bars Layer */}
                <div className="relative flex-1 flex justify-around items-end ml-12 h-full">
                    {data.map((item, index) => {
                        // Calculate height percentage
                        const barHeight = (item.value / maxValue) * 100;

                        return (
                            <div key={index}
                                 className="group relative flex flex-col items-center flex-1 h-full justify-end">
                                {/* Tooltip */}
                                <div
                                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded z-10">
                                    {item.value}
                                </div>

                                {/* The Bar - Use primary color class */}
                                <div
                                    className="w-[3px] md:w-2 bg-primary rounded-full transition-all duration-700 ease-in-out hover:opacity-80 cursor-pointer"
                                    style={{height: `${barHeight}%`}}
                                ></div>

                                {/* X-Axis Labels */}
                                <div className="absolute -bottom-6">
                                  <span
                                      className="text-[7px] md:text-[10px] text-gray-800 font-medium whitespace-nowrap">
                                    {item.label}
                                  </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Padding for Labels */}
            <div className="h-8"></div>
        </div>
    );
}