import moment from "moment";

const BIRTH_YEAR: number = 2006;
const BIRTH_DAY: number = 22;
const BIRTH_MONTH: number = 9;

export const yo = (): number => {
  const currentDate = moment();
  const currentYear: number = currentDate.year();
  const currentDay: number = currentDate.date();
  const currentMonth: number = currentDate.month() + 1; // moment months are 0-indexed

  const hasBirthdayPassed: boolean =
    currentMonth > BIRTH_MONTH ||
    (currentMonth === BIRTH_MONTH && currentDay >= BIRTH_DAY);

  let currentAge: number = currentYear - BIRTH_YEAR;

  if (!hasBirthdayPassed) {
    currentAge--;
  }

  return currentAge;
};
