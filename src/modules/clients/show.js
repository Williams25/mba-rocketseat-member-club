import { swalAlert } from "../../libs/sweetalert";
import { recoverGift } from "../../utils/alerts";
import { showLoyaltyCards } from "../loyalty-card/show";
import { showAvatar } from "./show-avatar";
import { showHistory } from "./show-history";

const totalCuts = document.getElementById("total-cuts");
const currentUser = document.getElementById("currentUser");
const historyContainer = document.querySelector(".history-list");
const totalCutsBar = document.querySelector(".total-cuts-bar");
const clientNotFound = document.getElementById("client-not-found");
const avatar = document.getElementById("avatar");
const currentCuts = document.getElementById("current-cuts");
const cutsNeeded = document.getElementById("cuts-needed");
const receiveGift = document.getElementById("receive-gift");
const cutsRemaining = document.getElementById("cuts-remaining");
const section = document.querySelector("section");

const resetFields = () => {
  totalCuts.innerHTML = 0;
  currentUser.innerHTML = "";
  avatar.innerHTML = "";
  currentCuts.innerHTML = "";
  cutsNeeded.innerHTML = "";
  cutsRemaining.innerHTML = "";
  clientNotFound.innerHTML =
    "Nenhum cliente encontrado, verifique os ID's disponíveis.";
  clientNotFound.style.display = "block";
  clientNotFound.classList.add("section-show");
  section.classList.remove("section-show");
  section.classList.add("section-hidden");
};

export const clientShow = ({ client }) => {
  avatar.innerHTML = "";
  clientNotFound.innerHTML = "";
  historyContainer.innerHTML = "";
  if (!client?.id) {
    resetFields();
    return;
  }
  clientNotFound.classList.remove("section-show");
  clientNotFound.style.display = "none";
  section.classList.remove("section-hidden");
  section.classList.add("section-show");

  totalCuts.innerHTML = client.loyaltyCard.totalCuts;
  currentUser.innerHTML = client.id;

  showAvatar({ client });
  client.appointmentHistory.forEach((history) => {
    showHistory({ history });
  });
  showLoyaltyCards({
    totalChecked: client.loyaltyCard.totalCuts,
    cutsNeeded: client.loyaltyCard.cutsNeeded,
    client,
  });

  const percentage =
    (client.loyaltyCard.totalCuts / client.loyaltyCard.cutsNeeded) * 100;
  totalCutsBar.style.setProperty("--before-width", `${percentage}%`);

  currentCuts.innerHTML = client.loyaltyCard.totalCuts;
  cutsNeeded.innerHTML = client.loyaltyCard.cutsNeeded;
  cutsRemaining.innerHTML = client.loyaltyCard.cutsRemaining;

  if (client.loyaltyCard.totalCuts < client.loyaltyCard.cutsNeeded) {
    receiveGift.setAttribute("disabled", true);
    receiveGift.classList.remove("receive-gift-animation");
  } else {
    receiveGift.removeAttribute("disabled");
    receiveGift.classList.add("receive-gift-animation");

    receiveGift.addEventListener("click", () => {
      receiveGift.classList.remove("receive-gift-animation");
      recoverGift();
    });
  }
};
