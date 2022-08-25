import React from "react";

export default function useBackdrop() {
  const backdropGameOverTimeLimit = {
    title: "O Tempo se esgotou.",
    message: "Você precisa ser mais rápido para avançar para o próximo nível.",
    primaryButton: { text: "Tentar Novamente" },
    secondaryButton: { text: "Sair" },
  };

  return { backdropGameOverTimeLimit };
}
