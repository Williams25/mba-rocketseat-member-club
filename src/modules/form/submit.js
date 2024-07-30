import { swalAlert } from "../../libs/sweetalert";
import { getUserById } from "../../services/get-user-by-id";
import { errorSearchUserbyId } from "../../utils/alerts";
import { clientShow } from "../clients/show";

const form = document.querySelector("form");
const userId = document.getElementById("userId");

userId.addEventListener("input", (event) => {
  let { value } = event.target;
  value = value.replace(/\D/g, "");

  if (value.length > 12) {
    value = value.substring(0, 12);
  }

  let formattedValue = value;
  if (value.length > 8) {
    formattedValue = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(
      6,
      9
    )}-${value.slice(9)}`;
  } else if (value.length > 5) {
    formattedValue = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(
      6
    )}`;
  } else if (value.length > 2) {
    formattedValue = `${value.slice(0, 3)}-${value.slice(3)}`;
  }
  event.target.value = formattedValue;
});

const resetInputs = () => {
  userId.value = "";
};

form.onsubmit = async (event) => {
  event.preventDefault();
  try {
    const idUser = userId?.value?.trim();

    if (!idUser) {
      return swalAlert({
        confirmButtonText: "Fechar",
        icon: "error",
        text: "Informe o ID do cliente!",
        title: "Erro ao buscar cliente! ",
      });
    }

    const data = await getUserById({ id: idUser });
    clientShow({ client: data });
    resetInputs();
  } catch (error) {
    errorSearchUserbyId();
    console.error(error);
    clientShow({ client: null });
  }
};
