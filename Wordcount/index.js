var txt;
var counts = {};
var keys = [];
function preload() {
  txt = loadStrings("text.txt");
}

function setup() {
  var allWords = txt.join("\n");
  var tokens = allWords.split(/\W+/);
  //console.log(tokens);
  for (var i = 0; i < tokens.length; i++) {
    var words = tokens[i].toLowerCase();
    if (!/\d+/.test(words)) {
      //console.log(words);
      if (counts[words] === undefined) {
        counts[words] = 1;
        keys.push(words);
      } else {
        counts[words] = counts[words] + 1;
      }
    }
  }

  keys.sort(compare);
  function compare(a, b) {
    var countA = counts[a];
    var countB = counts[b];
    return countB - countA;
  }
  console.log(keys);
  for (var i = 0; i < keys.length; i++) {
    const o = keys[i] + " " + counts[keys[i]];
    console.log(o);
    //const order = o.sort((a, b) => a - b);
    createDiv(o);
  }
  noCanvas();
}

function draw() {}
