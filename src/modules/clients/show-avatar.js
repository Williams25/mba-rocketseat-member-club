const avatar = document.getElementById("avatar");

export const showAvatar = ({ client }) => {
  const imageBoxDiv = document.createElement("div");
  imageBoxDiv.className = "image-box";

  const img = document.createElement("img");
  img.src = client.avatar;
  img.alt = "avatar";
  imageBoxDiv.appendChild(img);

  const infoDiv = document.createElement("div");

  const title = document.createElement("h1");
  title.className = "title-md";
  title.textContent = client.name;

  const spanText = document.createElement("span");
  spanText.className = "text-xs";

  const dateSpan = document.createElement("span");
  dateSpan.textContent = client.clientSince;

  spanText.textContent = `Cliente deste `;
  spanText.appendChild(dateSpan);

  infoDiv.appendChild(title);
  infoDiv.appendChild(spanText);

  avatar.appendChild(imageBoxDiv);
  avatar.appendChild(infoDiv);
};
