"use client";

import React from 'react';

export default function MonthlyEarningsReport() {
    const data = [
        {label: 'Jan', value: '৳1050'},
        {label: 'Feb', value: '৳3080'},
        {label: 'Mar', value: '৳1080'},
        {label: 'Apr', value: '৳2090'},
        {label: 'May', value: '৳1070'},
        {label: 'Jun', value: '৳1080'},
        {label: 'Jul', value: '৳2080'},
        {label: 'Aug', value: '৳6800'},
        {label: 'Sep', value: '৳2000'},
        {label: 'Oct', value: '৳3080'},
        {label: 'Nov', value: '৳2070'},
        {label: 'Dec', value: '৳1000'},
    ];

    // 1. Convert string values to numbers for calculations
    const numericData = data.map(item => ({
        ...item,
        numValue: Number(item.value.replace(/[^0-9]/g, ''))
    }));

    // 2. Dynamic Max Value (Finds the highest value and rounds up for the grid)
    const rawMax = Math.max(...numericData.map(d => d.numValue));
    const maxValue = rawMax > 400 ? Math.ceil(rawMax / 1000) * 1000 : 400;

    // 3. Generate 5 grid lines based on the max value
    const gridLines = Array.from({length: 5}, (_, i) => Math.round((maxValue / 4) * (4 - i)));

    return (
        <div className="w-full p-4  bg-white rounded border border-gray-200">
            <h2 className="text-[16px] font-bold text-gray-800 border-b border-gray-100 pb-4 mb-8">
                Monthly Earnings Report
            </h2>

            {/* Main Chart Wrapper */}
            <div className="relative h-[200px] w-full flex flex-col">

                {/* Y-Axis & Grid Lines Layer */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {gridLines.map((line) => (
                        <div key={line} className="flex items-center w-full h-0">
                            <span className="w-12 text-[11px] text-gray-400 font-medium">
                                {line >= 1000 ? `${(line / 1000).toFixed(1)}k` : line}
                            </span>
                            <div className="flex-1 h-[1px] bg-gray-50"></div>
                        </div>
                    ))}
                </div>

                {/* Bars Layer */}
                <div className="relative flex-1 flex justify-around items-end ml-12 h-full">
                    {numericData.map((item, index) => {
                        // Calculate percentage height
                        const barHeight = (item.numValue / maxValue) * 100;

                        return (
                            <div
                                key={index}
                                className="group relative flex flex-col items-center flex-1 h-full justify-end"
                            >
                                {/* Tooltip on Hover */}
                                <div
                                    className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 -top-10 bg-gray-800 text-white text-[10px] px-2 py-1 rounded shadow-xl z-20 pointer-events-none whitespace-nowrap">
                                    {item.value}
                                    {/* Small arrow below tooltip */}
                                    <div
                                        className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                                </div>

                                {/* The Bar */}
                                <div
                                    className="w-[3px] md:w-2 bg-red-400 rounded-full transition-all duration-500 ease-out hover:brightness-110 cursor-pointer"
                                    style={{height: `${barHeight}%`}}
                                ></div>

                                {/* X-Axis Labels */}
                                <div className="absolute -bottom-6">
                                    <span className="text-[7px] md:text-[10px] text-gray-500">
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Extra spacing at bottom for labels */}
            <div className="h-8"></div>
        </div>
    );
}