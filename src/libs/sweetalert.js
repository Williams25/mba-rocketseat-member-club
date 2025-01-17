import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export const swalAlert = ({ title, text, icon, confirmButtonText }) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
  });
};
