PROJETO 04 

AULA 01 :  NEXT.JS
PROPÓSITO DO NEXT -> 
  no SPA, não temos maneira simples de trabalhar com indexação dentro do google

NEXT => SSR ( Sever side rendering)
NEXT => É um servidor NODE

SSG -> Static Site generation
Deixa as páginas em cache  de acordo com um determinado  INTERVALO, ficando mais 
accessível a página exigindo menos da interação server / back 


------------------------------------------------------------------------

Aula 02 : Setando projeto 
npx create-next-app@latest

------------------------------------------------------------------------

Aula 03 : criando-rotas-da-aplicacao

File system routing ( roteamento baseado em arquivos físicos)
todo arquivo dentro de pages é uma rota com mesmo nome do arquivo
exemplo de rotas com param routes

------------------------------------------------------------------------

AULA 04 : configurando-documento-htm
no next, tudo são componentes
importo fontes no _document.tsx no Head component da lib next/documento
estrutura do _document
toda vez que alterar o _document, reiniciar o server
deletar a pasta .next que possui cache se necessário
Tudo que estiver dentro do _documento, será importado em todas páginas da app 

------------------------------------------------------------------------

AULA 05 : configurando-stitches
Uma  alternativa ao styled componentes
npm i @stitches/react
padrão de export do stitches
usa sintaxe JS no css
para usar SSR, é necessário uma config que está na pág. do stitcher
importar tag style do _document.tsx

AULA 06: estilos-globais

o App é um component que é carregado dentro da minha app. 
importar dentro do _app.tsx
configurar no styles\global.ts e  index.ts


AULA06 - cabecalho-da-aplicacao

tudo que for no _app.tsx, fica como "global"

