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





