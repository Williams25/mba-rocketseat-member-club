import { swalAlert } from "../libs/sweetalert";
import { errorSearchUserbyId } from "../utils/alerts";
import { handleSortDate } from "../utils/sort-date";
import { apiConfig } from "./api-config";

export const getUserById = async ({ id }) => {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    return {
      ...data,
      appointmentHistory: handleSortDate({
        appointmentHistory: data.appointmentHistory,
      }),
    };
  } catch (error) {
    errorSearchUserbyId();
    console.error(error);
  }
};
