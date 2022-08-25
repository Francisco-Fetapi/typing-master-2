import * as Backdrop from "../components/GameBackdrop";

export default function useBackdrop() {
  const gameOverTimeLimit: Backdrop.Props = {
    title: "O Tempo se esgotou.",
    message: "Você precisa ser mais rápido para avançar para o próximo nível.",
    primaryButton: { text: "Tentar Novamente" },
    secondaryButton: { text: "Sair" },
    open: true,
  };

  return { gameOverTimeLimit };
}
