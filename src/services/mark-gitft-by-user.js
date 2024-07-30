import dayjs from "dayjs";
import { swalAlert } from "../libs/sweetalert";
import { clientShow } from "../modules/clients/show";
import { apiConfig } from "./api-config";
import { errorCheckCard } from "../utils/alerts";
import { handleSortDate } from "../utils/sort-date";

export const markGitftByUser = async ({ client }) => {
  try {
    const today = dayjs(new Date());
    const totalCuts = client.loyaltyCard.totalCuts + 1;
    const cutsNeeded = client.loyaltyCard.cutsNeeded + 1;
    const cutsRemaining = client.loyaltyCard.cutsRemaining - 1;
    const appointmentHistory = [...client.appointmentHistory];
    appointmentHistory.push({
      date: today.format("DD/MM/YYYY"),
      time: today.format("HH:mm"),
    });
    const payload = {
      ...client,
      appointmentHistory: handleSortDate({
        appointmentHistory,
      }),
      loyaltyCard: {
        ...client.loyaltyCard,
        totalCuts: totalCuts <= cutsNeeded ? totalCuts : cutsNeeded,
        cutsRemaining: cutsRemaining >= 0 ? cutsRemaining : 0,
      },
    };

    await fetch(`${apiConfig.baseURL}/clients/${client.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    clientShow({ client: payload });
  } catch (error) {
    errorCheckCard();
    console.error(error);
  }
};
