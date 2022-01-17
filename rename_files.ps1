$path = Get-Location
$path_app = Read-Host "Caminho do aplicativo"
$sufixo = Read-Host "Sufixo dos arquivos"
$replace = Read-Host "Palavras para limpar (REGEX)"

$extension = Read-Host "Extensao dos arquivos (deixe em branco para todos)"
if ($extension -eq '') {
	$extension = "all"
}

$enumerate = Read-Host "Enumerar [s|n]"
if ($enumerate -ieq 's') {
	Do { $numstart = Read-host "Enumerar a partir de"} 
	while ((1..999999) -notcontains $numstart)
}else{
	$numstart = 1
}

Do { $test = Read-host "Deseja testar? [s|n]"} 
while ( $test -notmatch 'n|s')

Set-Location $path_app

if($test -eq 's'){
	Write-Host "Confira abaixo como os seus arquivos serao renomeados"
	Write-Host "_____________________________________________________"
}else{
	Write-Host "Seus arquivos estao sendo renomeados"
	Write-Host "____________________________________"
}

node index --path=$path --suffix=$sufixo --replace=$replace --enumerate=$enumerate --numstart=$numstart --extension=$extension --test=$test
Set-Location $path