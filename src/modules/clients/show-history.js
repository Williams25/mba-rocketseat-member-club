const historyContainer = document.querySelector(".history-list");

export const showHistory = ({ history }) => {
  const itemDiv = document.createElement("div");
  itemDiv.className = "history-items";

  const pDate = document.createElement("p");
  pDate.className = "subtitle-sm";
  pDate.textContent = history.date;
  itemDiv.appendChild(pDate);

  const spanDate = document.createElement("span");
  spanDate.className = "subtitle-sm";
  spanDate.textContent = history.time;
  itemDiv.appendChild(spanDate);

  const imgCheck = document.createElement("img");
  imgCheck.src = "./src/assets/check.svg";
  imgCheck.alt = "check";
  itemDiv.appendChild(imgCheck);

  historyContainer.appendChild(itemDiv);
};
