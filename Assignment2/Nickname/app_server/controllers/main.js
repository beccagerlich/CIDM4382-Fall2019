var axios = require('axios');

const getsyn = (words) => {
    return words[Math.floor(Math.random() * words.length)]
}

/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: "Nickname Generator"});
};

const BHL_KEY = process.env.BHL_KEY;

const nickname = (req, res) => {
    // console.log(req.body);
    // console.log(req.body.fname);
    // console.log(req.body.lname);
    // console.log(req.body.ptraits);
    // console.log(req.body.ntraits);

    let randnsyn = "";
    //let randnsyn = "";

    // https://words.bighugelabs.com/site/api
    axios.all([
        axios.get("https://words.bighugelabs.com/api/2/" + BHL_KEY + "/" + req.body.words + "/json"),
        //axios.get("https://words.bighugelabs.com/api/2/" + BHL_KEY + "/" + req.body.ntraits + "/json")
    ]).then((responses) => {

        //get response text
        // let synonyms = response.data.adjective.syn;
        // randsyn = synonyms[Math.floor(Math.random() * synonyms.length)];
        randnsyn = getsyn(responses[0].data.noun.syn);
        console.log(req.body.fname + ", the " + randnsyn.toUpperCase());

        // randnsyn = getsyn(responses[1].data.noun.syn);
        // console.log(req.body.fname + ", the " + randnsyn.toUpperCase());        

        res.render('results', { title: "Nickname Results", 
                                nickname: req.body.fname + " " + randnsyn.toUpperCase() + 
                                          ", " + " " + req.body.lname});
    })
    .catch((error) => {
        //handle error
        console.log(error);
    })
}

module.exports = {
    index,
    nickname
}
/* ES6 style */
// export default {
//     index
// }