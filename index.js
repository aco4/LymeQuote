function random_quote() {
  old_index = index

  while (index == old_index) {
    index = Math.floor(Math.random() * quotes.length);
  }

  document.getElementById("quote").innerHTML = output_quote(index);
  document.getElementById("description").innerHTML = output_description(index);
}

function output_quote(index) {
  var quote = quotes[index].text

  if (quotes[index].author != null) {
    quote = quote + " — " + quotes[index].author;
  } else {
    quote = quote + " —  Unknown";
  }

  if (quotes[index].date != null) {
    quote = quote + ", " + quotes[index].date;
  }
}

function output_description(index) {
  description = ""

  if (quotes[index].description != null) {
    description = quotes[index].description;
  }
}

function mulberry32(a) {
  var t = a += 0x6D2B79F5;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
}


var index
var old_index
const date = new Date().getDate()

random_quote();

document.getElementById("daily_quote").innerHTML = output_quote(Math.floor(mulberry32(date) * quotes.length));
document.getElementById("daily_description").innerHTML = output_description(Math.floor(mulberry32(date) * quotes.length));
