$path = Get-Location
$path_app = "D:\webapps\rename_files"
#Read-Host "Caminho do aplicativo"
$sufixo = Read-Host "Sufixo dos arquivos"
$replace = Read-Host "Palavras para substituir (REGEX)"
$extension = Read-Host "Extensao dos arquivos (deixe em branco para todos)"
if ($extension -eq '') {
	$extension = "all"
}
$enumerate = Read-Host "Enumerar [s|n]"
if ($enumerate -ieq 's') {
	$numstart = Read-Host "Enumerar a partir de"
}else{
	$numstart = 1
}
Set-Location $path_app
node index --path=$path --suffix=$sufixo --replace=$replace --enumerate=$enumerate --numstart=$numstart --extension=$extension
Set-Location $path