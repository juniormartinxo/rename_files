const fs = require('fs').promises
const pathSep = require('path').sep

async function listFiles(path, files) {
  if (!files) files = []

  let fileList = await fs.readdir(path)

  for (let k in fileList) {
    let stat = await fs.stat(`${path}${pathSep}${fileList[k]}`)

    if (stat.isDirectory()) {
      await listFiles(`${path}${pathSep}${fileList[k]}`, files)
    } else {
      files.push(`${path}${pathSep}${fileList[k]}`)
    }
  }

  return files
}

async function renameFiles(path, suffix, replace, enumerate) {
  let list_files = await listFiles(path)

  const files = Object.values(list_files)

  let num = 1

  files.map(file => {
    const file_name = fileName(path, file, replace)
    const num2digits = num.toString()

    let file_name_final = `${suffix ?? ''}${file_name}`

    if (enumerate === 's') {
      file_name_final = `${num2digits.padStart(2, '0')} - ${file_name_final}`
    }

    fs.rename(`${file}`, `${path}/${file_name_final}`, function (err) {
      if (err) {
        console.log('ERROR: ' + err)
        console.log(`[Err!] (${file_name_final}) ${err}`)
      } else {
        console.log(`[Sucesso!] ${file_name_final}`)
      }
    })

    num++
  })

  return files
}

function fileName(path, file, replace) {
  const arrPaths = file.split('\\')
  const fileNameFull = arrPaths.pop()
  const arrName = fileNameFull.split('.')
  const ext = arrName.pop()

  let filename = arrName[0]
    .trim()
    .replace(path + '/', '')
    .replaceAll(/\s+/g, '_')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replaceAll(/[^0-9a-zA-Z.]+/g, '_')
    .replaceAll(/_{2,}/g, '_')
    .toLowerCase()

  if (replace !== undefined) {
    const regexReplace = new RegExp(replace, 'g')
    filename = filename.replaceAll(regexReplace, '').replaceAll(/_{2,}/g, '_')
  }

  return `${filename}.${ext}`.replaceAll('_.', '.')
}

function ext(file) {
  return file.split('.').pop()
}

function getProcess(params, argv) {
  const process = {
    path: argv.replace('--path=', ''),
    suffix: argv.replace('--suffix=', ''),
    replace: argv.replace('--replace=', ''),
    enumerate: argv.replace('--enumerate=', ''),
  }

  return process[params]
}

const path = getProcess('path', process.argv[2])
const suffix = getProcess('suffix', process.argv[3])
const replace = getProcess('replace', process.argv[4])
const enumerate = getProcess('enumerate', process.argv[5])

renameFiles(path, suffix, replace, enumerate)
