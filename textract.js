const textract = (input_folder, output_folder, single_output = false ) => {
    console.log(input_folder);
}

// change folder names here
const input_folder = 'input';
const output_folder = 'output';

// use single_output = true to extract all text to single file
// else, a new file will be created for each input file

textract(input_folder, output_folder, true);