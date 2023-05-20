import React, { useState } from "react";
import Day from "./Day";
import CONSTANTS from "./Constants";

const WeekDayBar = () => {
  const weekDays = CONSTANTS.weekDays;
  const weekDayLabels = weekDays.map((weekday) => {
    return (
      <div key={weekday} aria-label={weekday} className="Weekday">
        {weekday.slice(0, 2)}
      </div>
    );
  });

  return <div className="WeekDayBar">{weekDayLabels}</div>;
};

export default WeekDayBar;
