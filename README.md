# Wallet Test

## Descrição

Esse é um aplictivo em React Native feito para um teste efetuado em um dos meus processo seletivos.

## Pré-requisitos
É necessário ter seguido o passo-a-passo da configuração do React Native. Caso não tenha feito, [clique aqui](https://reactnative.dev/docs/environment-setup).

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/noah-bergamo/WalletTest.git
   cd WalletTest
   ```

2. Instale todas as dependências:

   ```
   yarn
   ```

   ou, se preferir o npm:

   ```
   npm install
   ```

   execute o seguinte comando para resolver as dependências do iOS:

   ```
   npx pod-install ios
   ```

   3. Abra um novo terminal na pasta do projeto e, em seguida, entre na pasta **database** e execute o servidor

   ```
   cd database && json-server --watch db.json && cd ..
   ```

3. Rode o projeto:

   **Android**

   ***Atenção! Para o app android conseguir acessar o servidor local (localhost:3000), precisamos liberar a porta 3000 para os emuladores.
   antes de rodar o projeto, rode o seguinte comando:***

   ```
   adb reverse tcp:3000 tcp:3000
   ```

   ```
   yarn android
   npm run android
   ```

   **iOS**

   ```
   yarn ios
   npm run ios
   ```
