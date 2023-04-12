export const generateFitCalendar = () => {
  const currentDate = new Date();

  const calendar = new Array(3).fill("").map((_, id) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() - 1 + id;
    const days = new Date(year, month, 0).getDate();

    const workOutDaysCount = getRandomArbitrary(0, days);
    const workOutDays = getWorkOutArray(workOutDaysCount, days);

    return {
      year,
      month,
      workOutDays,
    };
  });

  return calendar;
};

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getWorkOutArray(workOutDays: number, maxDay: number) {
  const days = new Set();

  while (days.size < workOutDays) {
    days.add(getRandomArbitrary(0, maxDay));
  }

  return [...days];
}
