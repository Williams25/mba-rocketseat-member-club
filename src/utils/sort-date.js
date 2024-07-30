import dayjs from "dayjs";

const formatedDateToEn = ({ date, time }) => {
  const [day, month, year] = date.split("/");

  return `${year}-${month}-${day} ${time}:00`;
};

export const handleSortDate = ({ appointmentHistory = [] }) => {
  return appointmentHistory
    .map((item) => {
      const formatedDate = formatedDateToEn(item);
      return {
        ...item,
        formatedDate: dayjs(formatedDate, "YYYY-MM-DD HH:mm:ss").format(
          "YYYY-MM-DD HH:mm:ss"
        ),
      };
    })
    .sort((a, b) => dayjs(b.formatedDate).diff(dayjs(a.formatedDate)));
};
