# Case77sol

Para iniciar a aplicação é necessário o node.js instalado, que pode ser baixado diretamente no site do node (https://nodejs.org/pt-br/download)
é recomendado que seja instalado a versão LTS para o seu sistema operacional.

Após feito a instalação do node é necessário instalar as dependencias da aplicação rodando no terminal "npm i" ou "npm install"

Com as dependencias instaladas a aplicação está pronta para rodar, para isso utilize o comando "npm run dev" este comando se encontra no arquivo ""pachage.json" caso
seja necessário alguma alteração no mesmo.

Também é possivel rodar o StoryBook pelo comando "npm run storybook"

---

a estrutura das pastas da aplicação foi feita por componentes, na pasta "src" que é a pasta raiz do projeto encontramos a pasta "assets" que se encontram as imagens utilizadas no projeto,

COMPONENTS
a pasta **components** contem todos os componentes da plicação e é separada por: **elements** que são os componentes que são reutilizaveis dentro da aplicação como por exemplo botões, inputs, headers.
a pasta **Propose** é a pasta que mostra o componente **Propose** que é o principal componente da aplicação e é mostrado assim que a mesma é aberta no navegador e por fim a pasta **proposeData** é
responsável por mostrar um componente que mostra as informações obtidas pelo backend após o envio de dados para o mesmo.

a estrutura das pastas é feita para que os arquivos onde há funcionalidades que necessitam de informações externas a aplicação, essas funcionalidades ficam dentro da pasta **containers**
e os arquivos que tem funcionalidades de manuseio de componentes e dados existentes na aplicação ficam na pasta **components**

SERVICES
a pasta services é responsável pelas chamadas que a aplicação faz a API's externas, nesse caso existe somente um arquivo chamado **api.ts** que é onde está a chamada para a api da 77sol.

STORIES
pasta padrão criada pelo storybook onde existe um componente de exemplo para a criação das histórias

UTILS
é responsável por guardar funcionalidades que são utilizadas em toda a aplicação com uma funcionalidade expecífica, como por exemplo a funcionalidade **zipCodeMask** que cria uma mascara para
mostrar o cep da seguinte forma: **000.000.000-00**
