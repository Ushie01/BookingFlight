import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { TimeCalendarDate } from "@heathmont/moon-icons-tw";

export const DateInput = ({
  label,
  onChange,
}) => {
  const [selectedDate, setSelectedDate] = useState();
//   useEffect(() => {
//     const formattedDate = formatDate(selectedDate);
//     onChange(formattedDate);
//   }, [selectedDate, onChange]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

//   const formatDate = (date) => {
//     const formattedDate = date.toLocaleDateString("en-US", {
//       day: "numeric",
//       month: "numeric",
//       year: "numeric",
//     });
//     return formattedDate;
//   };

  return (
    <div className="flex flex-col  items-start justify-center w-full h-16 p-3 space-y-2 rounded-xl border">
      <p className={`pl-2 pr-2 -mt-8 bg-gray-100`}>{label}</p>
      <div className="flex flex-row items-start justify-center w-full  space-x-3 pl-2">
        <TimeCalendarDate height={30} width={30}/>
        <DatePicker
          selected={selectedDate || undefined}
          onChange={handleDateChange}
          className={`w-[100%] borderless-input`}
        />
      </div>
    </div>
  );
};
