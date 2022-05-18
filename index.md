## Welcome to LymeQuote

LymeQuote is a project created for the Biomedical Science program at Bel Air High School.


<script type="text/javascript" src="./quotes.js"></script>

<script>
  var index
  var old_index
  
  function random_quote() {
    old_index = index

    while (index == old_index) {
      index = Math.floor(Math.random() * quotes.length);
    }

    if (quotes[index].author != null) {
      quote = quote + " — " + quotes[index].author;
    } else {
      quote = quote + " —  Unknown";
    }

    if (quotes[index].date != null) {
      quote = quote + ", " + quotes[index].date;
    }

    description = ""

    if (quotes[index].description != null) {
      description = quotes[index].description;
    }

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("description").innerHTML = description;
  }
  
  random_quote();
</script>