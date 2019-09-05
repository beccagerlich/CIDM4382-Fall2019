//Modified Dr. Babb's code
function HandleSubmit(){
  var FName = document.getElementById("FName").value;
  alert(randomEl(adjectives)+' '+randomEl(nouns) + ' ' + FName);
  document.getElementById("FName").innerHTML = FName;}

function HandlePress(){
  var Lname = document.getElementById("LName").value;
  alert(randomEl(adjectives)+' '+randomEl(nouns) + ' ' + Lname);
  document.getElementById("Lname").innerHTML = Lname;
}


//Found code from https://jsfiddle.net/katowulf/3gtDf/
function randomEl(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}

function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}
// adjectives found at https://www.enchantedlearning.com/wordlist/adjectives.shtml
var adjectives = ["adventurous", "affectionate", "anxious", "artistic", "authentic", "average", "bewitched", "blissful", "bright", "buttery", "calm", "charming", "clueless", "clumsy", "complicated", "courageous", "cruel", "crazy", "deadly", "defiant", "dark", "dapper", "eager", "emotional", "envious", "evil", "exciting", "expensive", "fabulous", "failing", "fast", "fearful", "feisty", "gentle", "gleeful", "greedy", "healthy", "haunting", "honorable", "icky", "imaginative", "illiterate", "itchy", "international", "incredible", "jolly", "juicy", "jealous", "jumbo", "kooky", "late", "lazy", "little", "loud", "mad", "meaty", "mellow", "messy", "monstrous", "nasty", "noisy", "obese", "obedient", "overcooked", "peaceful", "phony", "pink", "poor", "profuse", "quaint", "quirky", "qualified", "quick-witted", "rare", "repulsive", "rich", "rowdy", "runny", "salty", "scholarly", "selfish", "shameless", "short", "shy", "single", "sneaky", "sticky", "tan", "thirsty", "tough", "trustworthy", "useless", "upbeat", "uxorious", "vague", "violent", "weepy", "worthwhile", "young", "zealous"];
//nouns taken from https://jsfiddle.net/katowulf/3gtDf/
var nouns = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "singer", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];
