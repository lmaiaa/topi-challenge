
# Desafio topI

## Sobre o Projeto

O projeto é um livro de receitas onde é possível a realização da busca das receita pelo nome. Foi criado uma API para o consumo e tratamento da API externa chamada [TheMealDb](https://www.themealdb.com/) para o consumo dos dados dos cards das receitas e foi criado um PWA responsivo e intuitivo.

O projeto foi hospedado no Google Firebase e pode ser acessado por [aqui](https://topi-challenge-2b316.web.app/)

**Tecnologias**: 
- **VueJs** - na versão 2.x (utilizando a [composition-api](https://composition-api.vuejs.org/) + typescript) (Framework JavaScript).

- **VueCLI** - Já exposto, foi utilizado framework VueJs e para inicialização do projeto foi utilizado seu [CLI](https://cli.vuejs.org/).
- **NodeJS**
- **[Google Firebase](https://firebase.google.com/)** - para hospedagem do front-end no Firebase Hosting e do back-end no Firebase Fucntions.
- **[Lightning Design](http://lightningdesignsystem.com/)** 
- **Github Actions** - Implementado ferramenta de CI para deploy automático no Firebase Hosting.

## Requisitos necessários

É necessário a instalação do NodeJs 12.X e GIT para inicialização do projeto.

- **Instalação do NodeJs:** [Acesse aqui](https://nodejs.org/en/download/) e realize o download do NodeJs 12.X
- **Instalação do GIT:** Realize o download [aqui](https://git-scm.com/downloads) e realize a instalção.

Realizado as configurações vamos para a próxima etapa.

## Incializando o projeto

Acesse o [repositório](https://github.com/lmaiaa/topi-challenge) do meu desafio

Execute o comando

```
git clone https://github.com/lmaiaa/topi-challenge.git
```

Acesse a pasta clonada e instale as dependências

```
cd topi-challenge

```

Após isso o projeto está pronto para ser inicializado.
Para inicializar do front-end execute o comando:

```
cd client
npm run serve
```
Para inicializar do back-end execute o comando:

```
cd functions
npm run serve
```
## Projeto inicializado

Ao inicializar o projeto:

- O front-end pode ser acessado em: **http://localhost:8080**
- O back-end pode ser acessado em: **http://localhost:5001/topi-challenge-2b316/us-central1/api**

## Melhorias futuras

- Filtros de categoria e area. No projeto já foi feito ajustado no backend para receber tais filtros, no front-end já havia sido criado o select default para busca, só não foi implementado, visto que, o payload não vinha completo, tendo um custo de tempo de implementação para ajustar tais filtros.
- Guardar criar páginas com mais informações da receita, incluindo seus vídeos de preparação.
- Teste no front-end;
