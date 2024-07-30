import { swalAlert } from "../../libs/sweetalert";
import { markGitftByUser } from "../../services/mark-gitft-by-user";
import { recoverGift } from "../../utils/alerts";

export const loyaltyCardsCheckBoxId = "loyaltyCard";

const loyaltyCardContainer = document.querySelector(".loyalty-card-content");

export const showLoyaltyCards = ({ totalChecked, cutsNeeded = 10, client }) => {
  loyaltyCardContainer.innerHTML = "";
  "*"
    .repeat(cutsNeeded)
    .split("")
    .map((_, index) => ({
      checked: false,
      id: `${loyaltyCardsCheckBoxId}-${index + 1}`,
    }))
    .forEach((checkBox, index) => {
      const label = document.createElement("label");
      label.htmlFor = checkBox.id;
      const inputCheckbox = document.createElement("input");
      inputCheckbox.type = "checkbox";
      inputCheckbox.checked = index < totalChecked;

      inputCheckbox.id = checkBox.id;
      const checkImage = document.createElement("div");
      checkImage.classList.add(
        index + 1 < cutsNeeded ? "check-image" : "last-gift"
      );

      if (index < totalChecked || index > totalChecked) {
        checkImage.classList.remove("gift-animation");
        label.classList.remove("next-gift");
        inputCheckbox.disabled = true;
      } else {
        label.classList.add("next-gift");
        const lastChecked = totalChecked + 1 === cutsNeeded;
        if (lastChecked) checkImage.classList.add("gift-animation");

        inputCheckbox.addEventListener("click", () => {
          markGitftByUser({ client });
          if (lastChecked) recoverGift();
        });
      }

      label.append(inputCheckbox, checkImage);

      loyaltyCardContainer.append(label);
    });
};
