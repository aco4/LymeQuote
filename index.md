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
      new Quote("Those who do not remember the past are condemned to repeat it.", "George Santayana"),
      new Quote("It is foolish to be convinced without evidence, but it is equally foolish to refuse to be convinced by real evidence", "Upton Sinclair"),

      new Quote("Be yourself; everyone else is already taken.", "Oscar Wilde"),
      new Quote("I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Marilyn Monroe"),
      new Quote("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"),
      new Quote("Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", "Bernard M. Baruch"),
      new Quote("“You only live once, but if you do it right, once is enough.", "Mae West"),
      new Quote("Be the change that you wish to see in the world.", "Mahatma Gandhi"),
      new Quote("In three words I can sum up everything I've learned about life: it goes on.", "Robert Frost"),
      new Quote("If you tell the truth, you don't have to remember anything.", "Mark Twain"),
      new Quote("I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Maya Angelou"),
      new Quote("A friend is someone who knows all about you and still loves you.", "Elbert Hubbard"),
      new Quote("To live is the rarest thing in the world. Most people exist, that is all.", "Oscar Wilde"),
      new Quote("Always forgive your enemies; nothing annoys them so much.", "Oscar Wilde"),
      new Quote("Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Gandhi"),
      new Quote("We accept the love we think we deserve.", "Stephen Chbosky", null, "From The Perks of Being a Wallflower"),
      new Quote("Without music, life would be a mistake.", "Friedrich Nietzsche", null, "From Twilight of the Idols"),
      new Quote("I am so clever that sometimes I don't understand a single word of what I am saying.", "Oscar Wilde", "From The Happy Prince and Other Stories"),
      new Quote("To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson"),

      new Quote("Can't fly an airplane while looking down","Logan Bennett"),
      new Quote("Big fat hairy deal lasagna time funny large orange cat","Garfield"),
      new Quote("allah cat allah cat","allah cat"),
      new Quote("THEY HIT THE PENTAGON", "Zach Hadel"),
      new Quote("Matt loves skin", "Anthony Gu", 2022),
      new Quote("Early bird gets the worm, but I am wolf not lion or tiger, I don't perform in circus", "Rich Richman McRibRicher", 1999),
      new Quote("It is only when mosquito land on your balls that you realize there is a way to solve problems without using violence.", "Confucius"),
      new Quote("I'd rather be hated for who I am than loved for who I am not.", "Kurt Cobain"),
      new Quote("Squangle beedorp wingle jangle bango bongo dagy your dad is now lady", "Matthew Schulte", 2022, "Haha loser u got trolled ur dad is actually man still quangle dongle i will find your location and fondle"),
      new Quote("I'm not a senior yet; however,", "Gabe Newell", 2022, "I should have burned this place down while I had the chance"),
      new Quote(
        "I miss the mask because I could say whatever I wanted to say and nobody could see me say it.",
        "Mr. Benfield",
        2022,
        "That's what the purpose of the mask is."
      ),
      new Quote("I was happy yesterday because I did not take a picture with crazy Julia for Human Encyclopedia.", "Minh Tran", 2022, "Julia Krazcek does not know anything except for classical music, literature, and diabetes."),
      new Quote("High school is a mega-pint of boring", "Josh Birch", 2022),
      new Quote("Sometimes, you just got to send it.", "Ryan Kohler", 2022),
      new Quote("Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.", "Master Oogway", null, "From Kung Fu Panda")

      new Quote(
        "Millions of people worldwide suffer from autoimmune disease and chronic illness. What is fueling this 21st-century pandemic?",
        "Chronic",
        2020,
        "As Dr. Steven Philips, MD reveals in his novel, 'Chronic', there is compelling evidence that Lyme disease is also the source of chronic disorders such as autoimmune conditions."
        ),
      new Quote(
        "Nothing is more agonizing than feeling inexplicably sick.",
        "Dr. Steven Philips and Dana Parish",
        2020,
        "This quote was excerpted from a novel titled 'Chronic: The Hidden Cause of the Autoimmune Pandemic and How to Get Healthy Again.'"
        ),
      new Quote(
        "As much as we love nature, it's become a veritable hazard zone throughout the world.",
        "Dr. Steven Philips and Dana Parish",
        2020,
        "Thanks to climate change, disease-carrying bugs have exploded in number and spread to places they could not have previously survived. For example, ticks, 50% of which carry pathogens (Dr. Steven Philips, MD). Ticks are especially dangerous for their likelihood to cause Lyme disease, a complex and poorly understood disease that can then cause autoimmune reactions. To read more about Lyme disease and its link to autoimmune disorders, read Dr. Steven Philips' novel, 'Chronic: The Hidden Cause of the Autoimmune Pandemic and How to Get Health Again'."
        ),
      new Quote(
        "[Jeffrey Wigand] became an informant for the media in the mid-1990s, exposing how Big Tobacco... promoted [cigarettes] knowing they were addictive and carcinogenic.",
        "Dr. Steven Philips and Dana Parish",
        2020,
        "There is compelling evidence that Lyme disease is also the source of chronic disorders such as autoimmune conditions. Dr. Steven Philips, MD and Dana Parish explore this topic in their novel, 'Chronic: The Hidden Cause of the Autoimmune Pandemic and How to Get Healthy Again'. One of their main topics is how the medical community shuns and silences Lyme disease and its victims. Why? Because immunosuppresants are expensive — and profitable."
      ),
      new Quote(
        "Lyme is known as The Great Imitator. But we consider Lyme, or more accurately Lyme+, \"The Great Cause.\"",
        "Dr. Steven Philips and Dana Parish",
        2020,
        "Lyme disease is a bacterial infection commonly transmitted through bug bites. However, Lyme disease is often accompanied by several other diseases — this cocktail of infections is what Dr. Steven Philips calls \"Lyme+.\" But calling these infections \"imitators\" misrepresents the truth: these infections actually cause a very wide range of chronic and autoimmune diseases."
      ),
      new Quote(
        "The vast majority of people also view Lyme as a problem confined to certain areas of the world, notably the northeastern U.S. Wrong. Wrong.",
        "Dr. Steven Philips and Dana Parish",
        2020,
        "Lyme disease has been reported in all 50 states except Hawaii. Additionally, Lyme disease is not just a \"tick-borne illness\"; it can also be transmitted via fleas, lice, sand flies, spiders, ants, even cat scratches/bites. Dr. Steven Philips and Dana Parish explore Lyme disease further in their eye-opening novel, 'Chronic: The Hidden Cause of the Autoimmune Pandemic and How to Get Healthy Again'"
      ),
      new Quote(
        "Semantics guide care.",
        "Dr. Steven Philips and Dana Parish",
        2020,
        "This quote was excerpted from a novel titled 'Chronic: The Hidden Cause of the Autoimmune Pandemic and How to Get Healthy Again.' This novel reveals many truths about Lyme disease, including the truth about \"Post-Treatment Lyme Disease Syndrome.\" The particular word choice of this phrase suggests that the symptoms after short-term Lyme therapy are not caused by an ongoing, unkilled infection — which is not the truth."
      ),
      new Quote(
        "No, you're not crazy. You know your body. You know something is not right and you're not getting the right attention. Follow your gut.",
        "Dr. Steven Philips and Dana Parish",
        2020,
        "This quote was excerpted from a novel titled 'Chronic: The Hidden Cause of the Autoimmune Pandemic and How to Get Healthy Again.' In this novel, Dr. Steven Philips, MD and Dana Parish provide compelling evidence that chronic Lyme disease exists, even when doctors around the world insist otherwise."
      ),
      new Quote(
        "Arrogance frequently goes hand in hand with ignorance.",
        "Dr. Steven Philips and Dana Parish",
        2020,
        "This quote was excerpted from a novel titled 'Chronic: The Hidden Cause of the Autoimmune Pandemic and How to Get Healthy Again.' In this novel, Dr. Steven Philips, MD and Dana Parish describe how the medical world suffers from the same vices as other areas of life. In this particular case, how many doctors in the medical world refuse to believe that Lyme disease can cause autoimmune disorders such as rheumatoid arthritis."
      )
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