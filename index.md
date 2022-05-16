## Welcome to LymeQuote

LymeQuote is a project created for the Biomedical Science program at Bel Air High School.

<script>
class Quote {
  constructor(text = null, author = null, date = null) {
    this.text = String(text);
    this.author = String(author);
    this.date = Number(date);
  }
}

quotes = [
    new Quote("Education is the most powerful weapon which you can use to change the world.", "Nelson Mandela", null), 
    new Quote("Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.", "Edwin Hubbel Chapin", null),
    // new Quote("Why is the medical community complacently treating patients with inflammatory autoimmune diseases with immunosuppresives when these drugs only treat symptoms — not root cause — and put patients at greater risk for developing potentially life-threatening opportunistic infections and cancers?", "Neil Spector, MD", null),
    // new Quote("Three things cannot long be hidden: the sun, the moon, and the truth.","Buddha", null),
    // new Quote("Wisdom begins in wonder.","Socrates", null),
    // new Quote("Can't fly an airplane while looking down","Logan Bennett", null),
    // new Quote("Big fat hairy deal","Garfield", null),
    // new Quote("allah cat allah cat","allah cat", null),
    // new Quote("THEY HIT THE PENTAGON", "Zach Hadel", null),
    new Quote("Millions of people worldwide suffer from autoimmune disease and chronic illness. What is fueling this 21st-century pandemic?", null, 2020),
    new Quote("Matt loves skin", "Anthony Gu", 2022),
    new Quote("Early bird gets the worm")
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

  quote = quotes[index].text;

  if (quotes[index.author] != null) {
    quote = quote + " — " + quotes[index.author];
  }

  if (quotes[index.date] != null) {
    quote = quote + ", " + quotes[index.date];
  } else {
    quote = quote + ", Unknown";
  }

  quote = quote + "<br>";

  document.getElementById("quote").innerHTML = quote;

  // document.getElementById("quote").innerHTML = quotes[index].text + " — " + quotes[index].author + ", " + quotes[index].date "<br>";
}

random_quote();
document.getElementById("quote").innerHTML = quotes[index].text + " — " + quotes[index].author + "<br>";
</script>

You can use the [editor on GitHub](https://github.com/aco4/LymeQuote/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/aco4/LymeQuote/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
