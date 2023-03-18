styled components, facilitando a formatação de acordo com as props recebidas.


export const ButtonContainer =          styled.button
                    |                             |
            > Nome do Container CSS     objeto do HTML do qual estou herdando


Os styles components, necessitam de interface, 
Podem acessar as props no CSS 


Ajuda  a  criar os temas !


Macete para  fazer o themes mostrar as props, declarando uma nova interface, 
sobrescrevendo a tipagem 

//testando o tslint após instalação das  extensões e também do layout pronto da rocketseat
// poderia rodar o eslini init , mas com layout pronto fica mais simples. 


npx eslint src --ext .ts,.tsx

ContextApi!   Usar o estado no componente por volta dos componentes com os quais preciso  compartilhar informações, então usar a context api 
o Context.provider, é o que recebe as variaveis que quero compartilhar