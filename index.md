## Welcome to LymeQuote

<div>TESTING!</div>
<p>Here are some buttons</p>
<button type="button" onclick="alert('hello world')">Epic Button</button>
<button type="button" onclick="alert('pinged lmao')">The Epicer Button</button>
<button type="button" onclick="alert('+1000000 social credit points (>◡◔✿)')">press if taiwan is not a country</button>
<p>They are satisfying, yes? •⌣•</p>
<iframe src="https://open.spotify.com/embed/playlist/2WfC5KQcT1w9U1BwcZ2vis?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
<h2>which is better pumpkins or melons</h2>
<p id="pumpkin_counter">You have 0 pumpkins. :(</p>
<button type="button" onclick="setPumpkins(0)">revoke all pumpkins</button>
<button type="button" onclick="increasePumpkins(1)">press me to gain pumpkins</button>
<button type="button" onclick="multiplyPumpkins(2)">press me to double pumpkins</button>
<script>
    var pumpkins = 0;
    var happiness = ":";
    function updatePumpkinHappiness() {
        happiness = ":";
        if (pumpkins == 0) {
            happiness = ":("
        }
        for (let i = 0; i < pumpkins; i++) {
            happiness = happiness + ")";
        }
        if (pumpkins == 69) {
            happiness = "ha";
        }
    }
    function updatePumpkinCounter() {
        if (pumpkins < 100000) {
            updatePumpkinHappiness();
        }
        pumpkinDirectObject = " pumpkins. ";
        if (pumpkins == 1) {
            pumpkinDirectObject = " pumpkin. ";
        }
        document.getElementById("pumpkin_counter").innerHTML = "You have " + pumpkins + pumpkinDirectObject + happiness;
    }
    function setPumpkins(amount) {
        pumpkins = amount;
        updatePumpkinCounter();
    }
    function increasePumpkins(amount) {
        pumpkins += amount;
        updatePumpkinCounter();
    }
    function multiplyPumpkins(amount) {
        pumpkins *= amount;
        updatePumpkinCounter();
    }
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
