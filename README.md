# Mercado Livre Clone

Link do site: https://ericalandev.github.io/Mercado-Livre/

---

## Tecnologias Utilizadas

- React.js  
- Tailwind CSS  
- Swiper.js  
- React Context API (para gerenciamento do carrinho)  

---

Guia de Arquivos e Componentes do Projeto
/src/principal/
Hero.jsx
Componente que exibe o banner principal do site, com um slider usando Swiper para apresentar imagens promocionais e ícones informativos. Responsivo para dispositivos móveis e desktop.

Recentes.jsx (chamado PraVoce)
Componente para mostrar produtos ou seções de produtos recentes, embora você não tenha compartilhado esse código completo, assume-se que é uma seção de recomendação.

UltimoVisto.jsx
Componente que exibe uma galeria de produtos vistos recentemente pelo usuário, usando Swiper para desktop e uma grade responsiva para mobile. Usa o contexto de carrinho para permitir adicionar produtos diretamente ao carrinho.

UltimoSlide.jsx (chamado SlideFinal)
Slider com informações sobre formas de pagamento, frete grátis e segurança, exibindo cards informativos com ícones e textos explicativos.

/src/components/
ProductCard.jsx
Componente reutilizável para renderizar cartões de produtos. Recebe props para imagem, nome, preço, preço com desconto, descrição e tamanhos de imagem e do card. Usado em várias partes para exibir produtos de forma consistente.

/src/context/
CartContext.jsx
Context API para gerenciar o estado global do carrinho de compras. Proporciona funções para adicionar, remover itens e limpar o carrinho. Usado para compartilhar o estado do carrinho entre componentes sem precisar passar props manualmente.

/src/Main.jsx
Componente principal que monta a página inicial, importando e renderizando os principais componentes (Hero, PraVoce, UltimoVisto, SlideFinal). Serve como ponto de entrada da UI da página principal.


**Todas as fotos são /public
