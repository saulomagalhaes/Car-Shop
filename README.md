
# Car Shop

API RESTful construída para gerenciar uma concessionária de veículos utilizando Node, Express, Typescript, Mongoose, MongoDB e POO.

## Autor

- [@saulomagalhaes](https://www.linkedin.com/in/sauloam/)

## Aprendizados

Construção de uma API RESTful aplicando o padrão de arquitetura de software MSC
(Model-Service-Controller), utilização do Mongoose.

## Documentação Completa da API
Ao subir a aplicação acesse a documentação através da seguinte rota:

[http://localhost:3001/api-docs](http://localhost:3001/api-docs)

## Rodando aplicação
<details> 
  <summary>
    <strong>🐳 Rodando o servidor no Docker</strong>
  </summary>

Clone o projeto

```bash
  git clone git@github.com:saulomagalhaes/Car-Shop.git
```

Entre no diretório do projeto

```bash
  cd Car-Shop
```

Instale as dependências

```bash
  npm install
```

Suba o container Docker

```bash
  docker-compose up -d
```

Execute o container

```bash
   docker exec -it car_shop bash
```

Inicie o servidor dentro do container

```bash
   npm run dev
```
</details>

<details> 
  <summary>
    <strong>✅ Rodando localmente</strong>
  </summary>
  
  Caso não tenha o MongoDB instalado em sua máquina e deseje usar o Docker, é só seguir os passos a seguir:

  Baixe a imagem do MongoDB:
  
  ```bash
    docker pull mongo
  ```
  
  Crie o contêiner do MongoDB:
  
   ```bash
    docker run --name <nome-do-container> -p 27017:27017 -d mongo
   ```
   
  Confira se o contêiner está rodando:
  
   ```bash
    docker container ls
   ```
  Execute o servidor localmente:
    
   ```bash
    npm run dev
   ```
 
 </details>
 
 ## Rodando os testes

Para rodar os testes, execute o seguinte comando:

```bash
  npm run test:dev
```


