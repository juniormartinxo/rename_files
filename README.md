# Rename files
Um renomeador de arquivos utilizando Node e Powershell

## Instalação
- Aponte o path do Windows para o arquivo `rename_filer.ps1`
- Clone este projeto em qualquer lugar do seu computador

## Como utilizar
Abra o terminal na pasta onde estão os arquivos que você deseja renomear e digite `rename_files`

O prompt lhe fará 04 (quatro) perguntas:
1) `Caminho do aplicativo:` digite o caminho onde você clonou este projeto
2) `Sufixo dos arquivos:` caso você deseje renomear os arquivos colocando um sufixo preencha este campo com uma string qualquer
3) `Palavras para substituir (REGEX):` aqui você pode montar string REGEX que serão apagadas do novo nome do arquivo, por enquanto ele não substitui por novas, apenas limpa.
4) `Enumerar [s|n]:` caso você deseje que os arquivos sejam precedidos por uma numeração, basta marcar `s` nesta opção.

### ATENÇÃO
- Os arquivos serão renomeados em lowcase, sem acentos e espaços.
- O `enumerar` não suporta mais 99 (noventa e nove) arquivos por enquanto.
