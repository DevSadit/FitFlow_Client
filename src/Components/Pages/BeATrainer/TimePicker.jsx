/* eslint-disable react/prop-types */
// src/TimeRangePickerComponent.js

import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";

function TimePicker({ value, setValue }) {
  return (
    <div className="p-4">
      <TimeRangePicker
        onChange={setValue}
        value={value}
        className="border rounded px-2 py-1"
      />
    </div>
  );
}

export default TimePicker;
