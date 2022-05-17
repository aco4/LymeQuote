## Welcome to LymeQuote

LymeQuote is a project created for the Biomedical Science program at Bel Air High School.

<script>
  class Quote {
    constructor(text = null, author = null, date = null, description = null) {
      if (text != null) {
        this.text = String(text);
      }
      
      if (author != null) {
        this.author = String(author);
      }
      
      if (date != null) {
        this.date = Number(date);
      }
  
      if (description != null) {
        this.description = String(description);
      }
    }
  }
  
  quotes = [
      new Quote("Education is the most powerful weapon which you can use to change the world.", "Nelson Mandela"), 
      new Quote("Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.", "Edwin Hubbel Chapin"),
      new Quote("Three things cannot long be hidden: the sun, the moon, and the truth.","Buddha"),
      new Quote("Wisdom begins in wonder.","Socrates"),
      new Quote("Can't fly an airplane while looking down","Logan Bennett"),
      new Quote("Big fat hairy deal","Garfield"),
      new Quote("allah cat allah cat","allah cat"),
      new Quote("THEY HIT THE PENTAGON", "Zach Hadel"),
      new Quote("Millions of people worldwide suffer from autoimmune disease and chronic illness. What is fueling this 21st-century pandemic?", null, 2020),
      new Quote("Matt loves skin", "Anthony Gu", 2022),
      new Quote("Early bird gets the worm"),
      new Quote("It is only when mosquito land on your balls that you realize there is a way to solve problems without using violence.", "Confucius"),
      new Quote("It is better to be hated for who you are then love for who you're not.","Kurt Cobain"),
      new Quote("Squangle beedorp wingle jangle bango bongo your dad is now lady", "Matthew Schulte", 2022, "Haha loser u got trolled ur dad is actually man still quangle dongle i will find your location and fondle")
    ]
  
  function print_quotes() {
    for (let i = 0; i < quotes.length; i++) {
      document.write(quotes[i].text + " - " + quotes[i].author + ", " + quotes[i].date + "<br>");
    }
  }
  
  var index
  var old_index
  function random_quote() {
    old_index = index
    
    while (index == old_index) {
      index = Math.floor(Math.random() * quotes.length);
    }
  
    // document.write(quotes[index].text + quotes[index].author + quotes[index].date);

    quote = quotes[index].text;
  
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

    // document.getElementById("quote").innerHTML = quotes[index].text + " — " + quotes[index].author + ", " + quotes[index].date "<br>";
  }
  
  random_quote();
</script>