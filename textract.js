
const textract = (input_folder, output_folder, single_output = false) => {
    const fs = require('fs');
    const files = fs.readdirSync(`${input_folder}`);

    if (single_output) {
        // add all output to one sinlge file. name is given as arg 'single_output'
        files.forEach((file) => {
            filepath = `./${input_folder}/${file}`
            const contents = fs.readFileSync(filepath, 'utf8');
        })

    } else {
        // create one file for every input. name is the same as original file
        files.forEach((file) => {
            filepath = `./${input_folder}/${file}`
            const contents = fs.readFileSync(filepath, 'utf8');
        })
    }    
}

// to extract all text to a single file, enter output file name as 'single_output'
textract(input_folder = 'input', output_folder = 'output', single_output = 'result.txt');