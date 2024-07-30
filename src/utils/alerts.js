import { swalAlert } from "../libs/sweetalert";

export const recoverGift = () =>
  swalAlert({
    confirmButtonText: "Confirmar",
    icon: "success",
    text: "Parabéns! Seu próximo corte é gratuito!",
    title: "Parabéns!",
  });

export const errorSearchUserbyId = () =>
  swalAlert({
    confirmButtonText: "Fechar",
    icon: "error",
    text: "Não foi possível encontrar o cliente.",
    title: "Erro ao buscar cliente! ",
  });

export const errorCheckCard = () =>
  swalAlert({
    confirmButtonText: "Fechar",
    icon: "error",
    text: "Não foi possível marcar o Cartão Fidelidade.",
    title: "Erro ao marcar o Cartão Fidelidade! ",
  });

export const invalidID = () =>
  swalAlert({
    confirmButtonText: "Fechar",
    icon: "error",
    text: "Informe um ID do válido!",
    title: "Erro ao buscar cliente! ",
  });
