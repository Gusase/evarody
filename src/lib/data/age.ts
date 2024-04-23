import moment from "moment";

const birthYear: number = 2006;
const birthDayMonth: Array<number> = [22, 9];
const year: number = moment().year();
const date: Array<string> = moment().format("DD MM").split(" ");

export const yo = (): number => {
  const passedDate: boolean =
    (birthDayMonth[1] == parseInt(date[1]) ||
      birthDayMonth[1] < parseInt(date[1])) &&
    (birthDayMonth[0] == parseInt(date[0]) ||
      parseInt(date[0]) > birthDayMonth[0]);
  let age: number = year - birthYear;

  passedDate ? age : age--;

  return age;
};
