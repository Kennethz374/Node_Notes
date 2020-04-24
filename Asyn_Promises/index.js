const fs = require('fs');
const superagent = require('superagent');
//callback hell
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`bread: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       if (err) return console.log(err.message);
//       console.log(res.body.message);

//       fs.writeFile(`dog-img.txt`, res.body.message, err => {
//         if (err) return console.log(err.message);
//         console.log(`random image file saved`);
//       });
//     });
// });

//Promises
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`bread: ${data}`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`) // this will immediately return a promise use .then to consume the promise
//     .then(res => {
//       if (err) return console.log(err.message);
//       console.log(res.body.message);

//       fs.writeFile(`dog-img.txt`, res.body.message, err => {
//         if (err) return console.log(err.message);
//         console.log(`random image file saved`);
//       });
//     })
//     .catch(err => {
//       console.log(err.message);
//     });
// });

//Build own promise
const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(`I could not find that file`);
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject(`I could not write file`);
      resolve('success');
    });
  });
};
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`bread: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    await writeFilePro(`dog-img.txt`, res.body.message);
    console.log(`random image file saved`);
  } catch (err) {
    console.log(err);
  }
};

getDogPic();

// readFilePro(`${__dirname}/dog.txt`)
//   .then(data => {
//     console.log(`bread: ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`); //the return will return a promise
//   })
//   .then(res => {
//     console.log(res.body.message);
//     return writeFilePro(`dog-img.txt`, res.body.message);
//     // fs.writeFile(`dog-img.txt`, res.body.message, err => {
//     //   if (err) return console.log(err.message);
//     //   console.log(`random image file saved`);
//     // });
//   })
//   .then(() => {
//     console.log(`random image file saved`);
//   })
//   .catch(err => {
//     console.log(err);
//   });
