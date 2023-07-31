# Boas-vindas ao repositório do exercício Products List!

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Neste exercício, você vai implementar de forma simplificada uma lista de produtos, utilizando React. A aplicação deve possuir um cabeçalho e uma lista de produtos.

Aviso: Você pode usar sua imaginação e estilizar a aplicação como desejar.Entretanto, é <strong>obrigatório</strong> que você implemente <strong>pelo menos</strong> estes dois componentes:
<ol>
  <li>
    <strong>ProductsList</strong>: esse componente representa a lista de produtos. Ele recebe como entrada uma lista de produtos para serem mostrados na tela. Para cada um desses produtos recebidos, o componente de lista chama o componente citado abaixo (Product).</li>
  <li>
    <strong>Product</strong>: como o próprio nome diz, esse componente representa um produto. Ele recebe como entrada um objeto que contém informações referentes a um produto específico. Esse componente precisa retornar as seguintes informações obrigatórias que serão mostradas para quem usar a aplicação:
    <ul>
      <li>nome do produto;</li>
      <li>preço do produto;</li>
      <li>imagem do produto.</li>
    </ul>
  </li>
</ol>

</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Criar componentes React reutilizáveis;

- Renderizar as informações contidas em um array em forma de componente;

</details>

## 1. Crie o componente `<Product />`

<details>
  <summary>Este componente deverá renderizar as informações de um produto</summary>
  
  - Ele deve ser criado dentro da pasta `src/components`.
  
  - Este componente deverá:
    - receber uma `prop` chamada `productInfo`, que será um objeto com as informações de um produto.

    - conter uma tag `li` que envolva todo o seu conteúdo.
  
  - Dentro dessa `li`, este componente deverá renderizar as seguintes informações (que estão dentro do objeto recebido via `props` chamada `productInfo`):

    - o nome do produto;
    - o preço do produto;
    - a imagem do produto.
      - Conter na imagem o atributo `alt` com o valor do nome do produto.
    
  <details>
    <summary><strong>Estrutura do objeto produto</strong></summary>

  ```js
  {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  }
  ```

  </details>
</details>

## 2. Crie o componente `<ProductsList />`

<details>
  <summary>Este componente deverá renderizar um título e uma <code>ul</code></summary>

  - Este componente deverá:

    - ser criado dentro da pasta `src/components`.

    - conter uma tag `h1` com o texto `Lista de produtos`.
  
    - conter uma tag `ul`. Por enquanto, essa lista estará vazia.

    - receber uma lista de produtos através da `props children`.
      - o `children` deve ser exibido dentro da tag `ul`

    > não se preocupe em passar essa lista de produtos por enquanto, isso será feito no requisito 3.

  - Ser renderizado dentro do `App.tsx`.
</details>

## 3. Renderize uma lista com as informações de cada Produto

<details>
  <summary>Renderize uma lista com as informações dos produtos dentro do componente <code>&lt;ProductList /&gt;</code></summary>

  - Você encontrará a lista com as informações dos produtos no arquivo `src/data.ts`.
  
  - Faça a importação do `src/data.ts` no componente `App.tsx`.

  - O componente `<ProductsList />` deve receber a lista de produtos por meio do `propsChildren`.

  - Cada produto da lista deverá ser renderizado pelo componente `Product`. Passe as informações do produto por meio da props `productInfo` que já existe nesse componente.
</details>

<details>
  <summary>💡dicas</summary>

  - Lembre-se de que, quando você está renderizando uma lista no React, é necessário adicionar um atributo `key` em cada elemento. Você pode usar o `id` do produto como `key`.
</details>

# Exercício extra

Estilize a aplicação adicionando classes que vão aprimorar seus componentes, de modo que cada conteúdo listado seja um card
