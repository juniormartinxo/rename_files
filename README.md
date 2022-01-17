# Rename files

Um renomeador de arquivos utilizando Node e Powershell

## Instalação

- Aponte o path do Windows para o arquivo `rename_filer.ps1`
- Clone este projeto em qualquer lugar do seu computador

## Como utilizar

Abra o terminal na pasta onde estão os arquivos que você deseja renomear e digite `rename_files`

O prompt lhe fará 04 (quatro) perguntas:

1. `Caminho do aplicativo:` digite o caminho onde você clonou este projeto
2. `Sufixo dos arquivos:` caso você deseje renomear os arquivos colocando um sufixo preencha este campo com uma string qualquer
3. `Palavras para substituir (REGEX):` aqui você pode montar string REGEX que serão apagadas do novo nome do arquivo, por enquanto ele não substitui por novas, apenas limpa.
4. `Extensão dos arquivos (deixe em branco para todos):` permite filtrar os arquivos que serão renomeados pela extensão.
5. `Enumerar [s|n]:` caso você deseje que os arquivos sejam precedidos por uma numeração, basta marcar `s` nesta opção.
   - `Enumerar a partir de:` caso a resposta tenha sido `s`em `Enumerar`, neste campo é possível indicar em qual número deverá iniciar a contagem.
6. `Deseja testar? [s|n]:` se a resposta for `s` será realizado apenas um teste mostrando o resultado. Serve para verificar se os novos nomes estão de acordo com o que o usuário deseja.

> #### ATENÇÃO
>
> - Os arquivos serão renomeados em lowcase, sem acentos e espaços.
