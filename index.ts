import inquirer from 'inquirer'
import path from 'path'
import fs from 'fs'
const csvToJson = require('convert-csv-to-json')

inquirer.prompt([
  {
    type: 'input',
    name: 'input_file_name',
    message: 'CSV file path:'
  },
]).then(res => {
  const filePath = path.resolve(__dirname, '..', 'data', `${res.input_file_name}.csv`)

  try {
    fs.existsSync(filePath)
    csvToJson.generateJsonFileFromCsv(filePath, path.resolve(__dirname, '..', 'data', `${res.input_file_name}.json`));
  } catch (error) {
    console.log('Arquivo não encontrado. Interrompendo programa.')
  }
})
