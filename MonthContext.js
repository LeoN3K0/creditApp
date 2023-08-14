import React, { createContext, useState, useContext } from 'react';

const MonthContext = createContext();

export const useMonthContext = () => useContext(MonthContext);

export const MonthProvider = ({ children }) => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const setMonth = (month) => {
    setSelectedMonth(month);
  };

  const value = {
    selectedMonth,
    setMonth,
  };

  return (
    <MonthContext.Provider value={value}>
      {children}
    </MonthContext.Provider>
  );
};
