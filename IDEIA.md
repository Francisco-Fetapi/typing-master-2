# Frases

Timer deve ser definido automaticamente.
Considerando o num de caracteres e o nivel.

Implementar frases reais. (+30 em Championship)
Implementar frases reais. (+30 em Training)

dicas de frases:

Hoje eh dia X de X de 202X
Hoje eh quinta-feira

Frases de pensadores, vers. biblicos.

Colocar algumas frases em outros idiomas em niveis maisavancados.

# Outras questoes

Desabilitar a utilizacao das Arrows, errou, apaga tudo que vem depois ate chegar ao erro.

# NAO URGENTES

Um gif ao iniciar com um texto acima e um degrade black com baixa opacidade. Demore apenas 2s e so depois iniciar a aplicao.

- Apresentar lista de frases disponiveis em um List>ListItem.

Um Checkbox com "Salvar esta frase."
As frases adicionais devem ser deletaveis.
guardar a frase com Tipo Phrase = {text:string,maxLevel:ILevel}

refatorar (useTimer -> useGameLoop)

# Typing Master

Anotações escritas na fase de desenvolvimento para melhor esclarecer até onde quero chegar com a aplicação. Já que não entendo nada sobre `engenharia de software`, então é assim que geralmente eu arquiteto meus apps para estudo.

## Iniciar (score,level)

`Contra relogio`

- Frase por nivel V
- Frases mais complicadas por nivel V
- Ranking X (should have backend)
- pts level up V

## Treino (like the last) (x0 pts)

- Digitar a propria frase
- Gerar aleatoriamente V

_mostrar status no final_

nivel 1 - principiante 1
nivel 2 - principiante 2
nivel 3 - principiante 3

nivel 4 - amador 1
nivel 5 - amador 2
nivel 6 - amador 3

...

## Modo infinito

Sem frase.
Palavra por palavra (timer por Palavra)
Pts++ por cada palavra digitada
O jogo nunca termina

## Seção de configs

Case sensitive - true or false
Sinais de pontuação - true or false
Exibir letras erradas em tempo real - true or false
Mostrar palavra a ser digitada abaixo do input - true or false
Concluir digitacao apos clicar na tecla (Espaco,Enter,Automaticamente)

---

Algumas configs farao o usuario ganhar X vezes mais pontos.

funcao random na classe Level, para embaralhar a frase.

_Em Treino_
tabela de palavras que mais erraste.
Treinar aquele palavra em especifico num certo timer com base no numero de letras.

BTN -> Treinar todas essas palavras de uma vez
Treinar frase personalizada

## Sobre

info.
instrucoes

# Implementados

botao resetar tudo e paused. (repetir nivel, pausar relogio)

aumentar pontos com base no numero de letras da palavras digitada.

Criar pagina Treino.

- Criar propria frase.
- Gerar automaticamente.

Backdrop treino, nivel, definir proeficiencia do usuario.
btn treinar mais no backdrop.

Testes

- Um Formulario para se digitar uma frase personalizada

aumentar pontos apenas depois de passar de nivel.
(numPalavras \* nivel[1,2,3])

comecar timer depois da primeira letra digitada.
