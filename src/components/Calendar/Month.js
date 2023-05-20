import React, { useState } from "react";
import Day from "./Day";
import CONSTANTS from "./Constants";

const Month = ({ date, month, year, onDayClick }) => {
  const WEEK_LENGTH = CONSTANTS.WEEK_LENGTH;
  const [hoveredDate, sethoveredDate] = useState(null);

  function getWeeksForMonth(month, year) {
    const firstOfMonth = new Date(year, month, 1);
    const firstDayOfWeek = firstOfMonth.getDay();
    const weeks = [[]];

    let currentWeek = weeks[0];
    let currentDate = firstOfMonth;

    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null);
    }

    while (currentDate.getMonth() === month) {
      if (currentWeek.length === WEEK_LENGTH) {
        currentWeek = [];
        weeks.push(currentWeek);
      }

      currentWeek.push(currentDate);
      currentDate = new Date(year, month, currentDate.getDate() + 1);
    }

    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    return weeks;
  }

  function displayWeek(fullDate, dayIndex) {
    if (fullDate == null) {
      return <Day key={dayIndex} />;
    }
    return (
      <Day
        key={dayIndex}
        fullDate={fullDate}
        onClick={onDayClick}
        selected={fullDate.getDate() === date}
        hovering={fullDate.getDate() === hoveredDate}
        onMouseEnter={(date) => sethoveredDate(date)}
        onMouseLeave={() => sethoveredDate(null)}
      />
    );
  }

  const weeks = getWeeksForMonth(month, year);
  const displayMonth = weeks.map((week, index) => {
    return (
      <div role="row" className="Week" key={index}>
        {week.map(displayWeek)}
      </div>
    );
  });

  return <React.Fragment>{displayMonth}</React.Fragment>;
};

export default Month;
