import React, { useState } from "react";

interface Event {
    date: number;
    name: string;
}

const Calendar = ({ events = [] }: { events: Event[] }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
        days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    const weeks = [];
    while (days.length) {
        weeks.push(days.splice(0, 7));
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold text-center mb-4">
                {currentDate.toLocaleString("default", { month: "long" })} {year}
            </h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                            <th key={day} className="border border-gray-300 p-2 text-center">
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, index) => (
                        <tr key={index}>
                            {week.map((day, idx) => {
                                const event = events.find(e => e.date === day);
                                return (
                                    <td
                                        key={idx}
                                        className={`border border-gray-300 p-4 text-center ${!event ? 'bg-gray-600' : ''}`}
                                    >
                                        {day || ""}
                                        {event && (
                                            <div className="text-xs text-red-500 mt-1">{event.name}</div>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;
