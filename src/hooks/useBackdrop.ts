import * as Backdrop from "../components/GameBackdrop";

export default function useBackdrop() {
  const gameOverTimeLimit: Backdrop.Props = {
    title: "O Tempo se esgotou.",
    message: "Você precisa ser mais rápido para avançar para o próximo nível.",
    primaryButton: { text: "Tentar Novamente" },
    secondaryButton: { text: "Sair" },
    open: true,
    type: "error",
  };
  const gameOverAllWordsTyped: Backdrop.Props = {
    title: "Nivel finalizado.",
    message: "Parabéns, você terminou este nível com sucesso.",
    primaryButton: { text: "Próximo nível" },
    secondaryButton: { text: "Sair" },
    open: true,
    type: "success",
  };

  return { gameOverTimeLimit, gameOverAllWordsTyped };
}
