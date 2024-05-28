import fs from 'fs';
export const readfile = (req, res, next) => {
  fs.readFile('./public/example.txt', 'utf8', (error, data) => {
    if (error) {
      console.log('Error reading the file: ', error.message);
      return;
    }
    console.log(data);
    return res.send({ data });
  });
};

export const writeFile = (req, res) => {
  const content = '\nVishal Pal';
  fs.writeFile('./public/example.txt', content, 'utf8', (err) => {
    if (err) {
      console.log('Error Writing in file :', err.message);
    }
    console.log('Successfully write');
    return res.send('Successfully write');
  });
};

export const appendFile = (req, res) => {
  const addtionalContent = '\nGoapalapur Jaunpur';
  fs.appendFile('./public/example.txt', addtionalContent, (err) => {
    if (err) {
      console.log('Error when adding content');
      return;
    }
    console.log('Content added successfully done');
    return res.send('Content added successfully done');
  });
};
