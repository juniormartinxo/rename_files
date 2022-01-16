$path = Get-Location
$path_app = Read-Host "Caminho do aplicativo"
$sufixo = Read-Host "Sufixo dos arquivos"
$replace = Read-Host "Palavras para substituir (REGEX)"
$enumerate = Read-Host "Enumerar? [s|n]"
Set-Location $path_app
node index --path=$path --suffix=$sufixo --replace=$replace --enumerate=$enumerate
Set-Location $path