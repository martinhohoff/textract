const textract = (input_folder, output_folder, single_output = false) => {
    const fs = require('fs');
    const files = fs.readdirSync(`${input_folder}`);

    files.forEach((file) => {
        //read:
        filepath = `./${input_folder}/${file}`
        const contents = fs.readFileSync(filepath, 'utf8');
        const pureText = contents.replace(/(<([^>]+)>)/ig,"");
    
        // if single output, output is given as arg) 
        // else, name is same as original with txt
        const target = (single_output) ? single_output : `${file.split('.')[0]}.txt`;
        
        // write:
        fs.appendFile(`${output_folder}/${single_output}`, `${pureText}\n`, function(err) {
            if(err) {
                return console.log(err);
            }

            console.log(`${file} was extracted in file ${target}!`);
        });
    })    
}

// to extract all text to a single file, 
// enter an output file name as 'single_output'

// use output folder = '.' to extract to current folder
textract(input_folder = 'input', output_folder = '.', single_output = 'result.txt');