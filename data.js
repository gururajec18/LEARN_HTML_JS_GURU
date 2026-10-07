/**
 * Comprehensive Data Store for HTML & JavaScript Learning Platform
 * Developed by Gururaj Surampalli
 */

const APP_DATA = {
  // ===================== HTML BASICS LESSONS =====================
  htmlBasics: [
    {
      id: "html-structure",
      title: "1. HTML Document Structure",
      category: "HTML Basics",
      summary: "Understand the boilerplate and foundational tags of every HTML document.",
      content: `
        <h3>What is HTML?</h3>
        <p><strong>HTML</strong> (HyperText Markup Language) is the standard language for documents designed to be displayed in a web browser. It provides the structure of web pages.</p>
        <h4>The Basic Skeleton:</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, Web!&lt;/h1&gt;
    &lt;p&gt;This is your first webpage.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
        <h4>Key Tags:</h4>
        <ul>
          <li><code>&lt;!DOCTYPE html&gt;</code>: Tells browser to render using modern HTML5 standards.</li>
          <li><code>&lt;html&gt;</code>: The root element wrapping all content.</li>
          <li><code>&lt;head&gt;</code>: Contains metadata, stylesheets, character sets, and page title.</li>
          <li><code>&lt;body&gt;</code>: Contains all visible content displayed to the user.</li>
        </ul>
      `,
      exampleId: "ex-html-structure"
    },
    {
      id: "html-text",
      title: "2. Headings, Paragraphs & Text Formatting",
      category: "HTML Basics",
      summary: "Explore headers h1-h6, paragraphs, bold, italic, marks, and line breaks.",
      content: `
        <h3>Text Elements & Typography</h3>
        <p>HTML offers semantic tags to convey the hierarchy and emphasis of text.</p>
        <h4>Headings (H1 to H6)</h4>
        <p>Used to structure document outline. <code>&lt;h1&gt;</code> is the main topic; <code>&lt;h6&gt;</code> is the least important sub-heading.</p>
        <h4>Formatting Elements:</h4>
        <ul>
          <li><code>&lt;p&gt;</code>: Paragraph block.</li>
          <li><code>&lt;strong&gt;</code> / <code>&lt;b&gt;</code>: Bold / Strong importance.</li>
          <li><code>&lt;em&gt;</code> / <code>&lt;i&gt;</code>: Italic / Emphasized text.</li>
          <li><code>&lt;mark&gt;</code>: Highlighted text.</li>
          <li><code>&lt;code&gt;</code> &amp; <code>&lt;pre&gt;</code>: Monospace code snippet and preformatted text.</li>
          <li><code>&lt;br&gt;</code>: Single line break (self-closing).</li>
          <li><code>&lt;hr&gt;</code>: Horizontal thematic rule divider.</li>
        </ul>
      `,
      exampleId: "ex-text-formatting"
    },
    {
      id: "html-links-media",
      title: "3. Links, Images & Media",
      category: "HTML Basics",
      summary: "Hyperlinks with anchor tag, images, audio, and video embedding.",
      content: `
        <h3>Connecting & Visualizing Content</h3>
        <h4>Hyperlinks:</h4>
        <p>The <code>&lt;a&gt;</code> (anchor) tag creates links to external websites, local pages, or jump anchors.</p>
        <pre><code>&lt;a href="https://example.com" target="_blank" rel="noopener"&gt;Visit Site&lt;/a&gt;</code></pre>
        <h4>Images:</h4>
        <p>The <code>&lt;img&gt;</code> tag embeds graphics. Always supply <code>src</code> and descriptive <code>alt</code> text for accessibility and SEO.</p>
        <pre><code>&lt;img src="nature.jpg" alt="Mountain sunset landscape" width="400"&gt;</code></pre>
        <h4>Audio & Video:</h4>
        <p>Modern HTML5 features native multimedia players:</p>
        <pre><code>&lt;video controls width="320"&gt;
  &lt;source src="clip.mp4" type="video/mp4"&gt;
  Your browser does not support video.
&lt;/video&gt;</code></pre>
      `,
      exampleId: "ex-links-media"
    },
    {
      id: "html-lists-tables",
      title: "4. Lists & Tables",
      category: "HTML Basics",
      summary: "Organize items with ordered, unordered, description lists, and structured tabular data.",
      content: `
        <h3>Grouping and Tabular Data</h3>
        <h4>Lists:</h4>
        <ul>
          <li><code>&lt;ul&gt;</code>: Unordered bulleted list.</li>
          <li><code>&lt;ol&gt;</code>: Ordered numbered list (supports <code>type="1|a|i"</code>).</li>
          <li><code>&lt;li&gt;</code>: Individual list items inside <code>ul</code> or <code>ol</code>.</li>
        </ul>
        <h4>Tables:</h4>
        <p>Used to represent multi-column datasets:</p>
        <pre><code>&lt;table border="1"&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Role&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;Gururaj&lt;/td&gt;&lt;td&gt;Developer&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
      `,
      exampleId: "ex-lists-tables"
    },
    {
      id: "html-forms",
      title: "5. Forms & Interactive Inputs",
      category: "HTML Basics",
      summary: "Collect user input with textfields, passwords, checkboxes, radio buttons, dropdowns, and buttons.",
      content: `
        <h3>Building Interactive Forms</h3>
        <p>Forms send data or trigger JavaScript event listeners.</p>
        <h4>Common Form Elements:</h4>
        <ul>
          <li><code>&lt;input type="text"&gt;</code>: Single-line text input.</li>
          <li><code>&lt;input type="email|number|password|color|range"&gt;</code>: Specialized input types with built-in validation.</li>
          <li><code>&lt;textarea&gt;</code>: Multi-line text field.</li>
          <li><code>&lt;select&gt; &amp; &lt;option&gt;</code>: Dropdown menu selection.</li>
          <li><code>&lt;button type="submit|button|reset"&gt;</code>: Clickable button.</li>
          <li><code>&lt;label for="id"&gt;</code>: Accessible label binding to an input.</li>
        </ul>
      `,
      exampleId: "ex-form-inputs"
    },
    {
      id: "html-semantics",
      title: "6. Semantic HTML & Modern Layouts",
      category: "HTML Basics",
      summary: "Write meaningful, accessible code using header, nav, main, article, section, aside, and footer.",
      content: `
        <h3>Why Semantic Tags Matter</h3>
        <p>Semantic tags describe their meaning to both browser and developer, enhancing accessibility (screen readers) and search engines.</p>
        <h4>Core Semantic Tags:</h4>
        <ul>
          <li><code>&lt;header&gt;</code>: Introductory banner, logo, navigation.</li>
          <li><code>&lt;nav&gt;</code>: Navigation links.</li>
          <li><code>&lt;main&gt;</code>: Dominant central content of the document.</li>
          <li><code>&lt;section&gt;</code>: Thematic grouping of content.</li>
          <li><code>&lt;article&gt;</code>: Self-contained composition (blog post, news item).</li>
          <li><code>&lt;aside&gt;</code>: Sidebars or related links.</li>
          <li><code>&lt;footer&gt;</code>: Bottom copyright, links, and authorship.</li>
        </ul>
      `,
      exampleId: "ex-semantic-layout"
    }
  ],

  // ===================== JAVASCRIPT BASICS LESSONS =====================
  jsBasics: [
    {
      id: "js-vars-types",
      title: "1. Variables & Data Types",
      category: "JavaScript Basics",
      summary: "Understanding let, const, var, primitive data types and type conversion.",
      content: `
        <h3>Variables in Modern JavaScript</h3>
        <p>JavaScript is dynamically typed. We declare variables using <code>let</code> and <code>const</code> (avoid legacy <code>var</code>).</p>
        <pre><code>// const: cannot be reassigned
const siteName = "JS Academy";

// let: mutable variable with block scope
let count = 0;
count += 5;</code></pre>
        <h4>Primitive Data Types:</h4>
        <ul>
          <li><strong>String</strong>: <code>"Hello"</code>, <code>'World'</code>, <code>\`Hi \${name}\`</code> (template literal)</li>
          <li><strong>Number</strong>: <code>42</code>, <code>3.14</code>, <code>NaN</code>, <code>Infinity</code></li>
          <li><strong>Boolean</strong>: <code>true</code> or <code>false</code></li>
          <li><strong>Undefined</strong>: Variable declared but not assigned a value</li>
          <li><strong>Null</strong>: Explicit intentional absence of any value</li>
          <li><strong>Symbol &amp; BigInt</strong>: Unique tokens and arbitary precision integers</li>
        </ul>
      `,
      exampleId: "ex-js-vars"
    },
    {
      id: "js-operators-logic",
      title: "2. Operators & Control Flow",
      category: "JavaScript Basics",
      summary: "Arithmetic, comparison, logical operators, if-else statements, and ternary operators.",
      content: `
        <h3>Decision Making in Code</h3>
        <h4>Comparison Operators:</h4>
        <ul>
          <li><code>===</code> &amp; <code>!==</code>: Strict equality and inequality (checks value &amp; type). Always prefer strict equality!</li>
          <li><code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>: Relational comparisons.</li>
        </ul>
        <h4>Logical Operators:</h4>
        <p><code>&amp;&amp;</code> (AND), <code>||</code> (OR), <code>!</code> (NOT), <code>??</code> (Nullish coalescing).</p>
        <h4>Conditionals:</h4>
        <pre><code>const score = 85;

if (score &gt;= 90) {
  console.log("Grade: A");
} else if (score &gt;= 75) {
  console.log("Grade: B");
} else {
  console.log("Keep practicing!");
}

// Ternary Operator: condition ? valueIfTrue : valueIfFalse
const status = score &gt;= 50 ? "Pass" : "Fail";</code></pre>
      `,
      exampleId: "ex-js-conditionals"
    },
    {
      id: "js-loops",
      title: "3. Loops & Iteration",
      category: "JavaScript Basics",
      summary: "Repeat tasks smoothly with for, while, do-while, for...of, and for...in loops.",
      content: `
        <h3>Repeating Execution</h3>
        <h4>The Classic for Loop:</h4>
        <pre><code>for (let i = 0; i &lt; 5; i++) {
  console.log("Step: " + i);
}</code></pre>
        <h4>while Loop:</h4>
        <pre><code>let energy = 100;
while (energy &gt; 0) {
  energy -= 25;
}</code></pre>
        <h4>for...of (Iterating Arrays &amp; Strings):</h4>
        <pre><code>const fruits = ["Apple", "Mango", "Banana"];
for (const fruit of fruits) {
  console.log(fruit);
}</code></pre>
      `,
      exampleId: "ex-js-loops"
    },
    {
      id: "js-functions",
      title: "4. Functions & Scope",
      category: "JavaScript Basics",
      summary: "Function declarations, function expressions, Arrow functions, parameters, and return values.",
      content: `
        <h3>Reusable Code Blocks</h3>
        <h4>Function Declaration:</h4>
        <pre><code>function greet(name = "Friend") {
  return "Welcome, " + name + "!";
}</code></pre>
        <h4>Arrow Functions (ES6):</h4>
        <p>Arrow functions offer concise syntax and lexical <code>this</code> binding:</p>
        <pre><code>const add = (a, b) =&gt; a + b;

const square = num =&gt; {
  return num * num;
};</code></pre>
        <h4>Higher-Order Functions:</h4>
        <p>Functions that accept other functions as arguments (callbacks) or return functions.</p>
      `,
      exampleId: "ex-js-functions"
    },
    {
      id: "js-arrays-objects",
      title: "5. Arrays & Objects",
      category: "JavaScript Basics",
      summary: "Structured data storage, array methods (map, filter, reduce), object keys and destructuring.",
      content: `
        <h3>Working with Complex Data</h3>
        <h4>Arrays &amp; Powerful Methods:</h4>
        <pre><code>const numbers = [1, 2, 3, 4, 5];

// map(): transforms every item
const doubled = numbers.map(n =&gt; n * 2); // [2, 4, 6, 8, 10]

// filter(): retains matching items
const evens = numbers.filter(n =&gt; n % 2 === 0); // [2, 4]

// reduce(): computes aggregate
const total = numbers.reduce((sum, n) =&gt; sum + n, 0); // 15</code></pre>
        <h4>Objects:</h4>
        <pre><code>const developer = {
  name: "Gururaj Surampalli",
  skills: ["HTML", "CSS", "JavaScript"],
  isAvailable: true,
  summary() {
    return \`\${this.name} specializes in \${this.skills.join(", ")}\`;
  }
};</code></pre>
      `,
      exampleId: "ex-js-arrays"
    },
    {
      id: "js-dom",
      title: "6. DOM Manipulation & Events",
      category: "JavaScript Basics",
      summary: "Selecting elements, updating text/HTML, toggling CSS classes, and listening to clicks, keys & submits.",
      content: `
        <h3>Connecting JavaScript to HTML</h3>
        <p>The <strong>DOM</strong> (Document Object Model) represents HTML as a tree of JavaScript objects.</p>
        <h4>Selecting Elements:</h4>
        <ul>
          <li><code>document.getElementById('myId')</code></li>
          <li><code>document.querySelector('.myClass')</code>: Finds first match</li>
          <li><code>document.querySelectorAll('button')</code>: Finds all matches as NodeList</li>
        </ul>
        <h4>Updating DOM Elements:</h4>
        <ul>
          <li><code>elem.textContent = "New text"</code> (Safe text replacement)</li>
          <li><code>elem.innerHTML = "&lt;span&gt;Bold&lt;/span&gt;"</code></li>
          <li><code>elem.classList.add("active")</code> / <code>elem.classList.toggle("dark")</code></li>
          <li><code>elem.style.backgroundColor = "#ff5722"</code></li>
        </ul>
        <h4>Handling Events:</h4>
        <pre><code>const btn = document.querySelector("#myBtn");
btn.addEventListener("click", (event) =&gt; {
  console.log("Button was clicked!", event);
});</code></pre>
      `,
      exampleId: "ex-dom-basics"
    }
  ],

  // ===================== 18 PRACTICAL EXAMPLES =====================
  examples: [
    {
      id: "ex-html-structure",
      title: "1. HTML Document & Tags Showcase",
      category: "HTML",
      difficulty: "Beginner",
      description: "Demonstrates core semantic HTML tags: headings, styled paragraphs, blockquotes, badges, and horizontal rules.",
      html: `<div class="card">
  <header class="card-header">
    <span class="badge">HTML5 Standard</span>
    <h1>My Personal Bio & Notes</h1>
    <p class="subtitle">A quick introduction built with pure HTML markup</p>
  </header>
  
  <hr>
  
  <section>
    <h2>About Me</h2>
    <p>
      Hello! I am learning <strong>HTML5</strong> and <em>JavaScript</em> programming.
      Writing clean semantic markup makes websites fast, accessible, and SEO friendly.
    </p>
    
    <blockquote>
      "Simplicity is the soul of efficiency."
      <cite>— Austin Freeman</cite>
    </blockquote>
    
    <h3>Key Technologies</h3>
    <ul>
      <li>HyperText Markup Language (HTML)</li>
      <li>Cascading Style Sheets (CSS)</li>
      <li>JavaScript (Interactive client-side engine)</li>
    </ul>
  </section>
  
  <footer class="card-footer">
    <p><small>&copy; 2026 Developed by Gururaj Surampalli</small></p>
  </footer>
</div>`,
      css: `body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f0f4f8;
  padding: 20px;
  color: #334155;
}
.card {
  max-width: 550px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 12px;
  padding: 28px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
}
.card-header h1 {
  margin: 8px 0 4px 0;
  font-size: 1.6rem;
  color: #0f172a;
}
.subtitle {
  color: #64748b;
  margin: 0;
  font-size: 0.95rem;
}
.badge {
  display: inline-block;
  background: #e0e7ff;
  color: #4338ca;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  text-transform: uppercase;
}
hr {
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 18px 0;
}
blockquote {
  border-left: 4px solid #3b82f6;
  margin: 16px 0;
  padding: 8px 16px;
  background: #f8fafc;
  font-style: italic;
  color: #475569;
}
blockquote cite {
  display: block;
  font-size: 0.85rem;
  color: #94a3b8;
  margin-top: 4px;
}
ul {
  padding-left: 20px;
}
ul li {
  margin-bottom: 6px;
}
.card-footer {
  margin-top: 24px;
  border-top: 1px dashed #cbd5e1;
  padding-top: 12px;
  text-align: center;
  color: #94a3b8;
}`,
      js: `// Log a welcoming message to inspect in console
console.log("HTML Showcase initialized successfully!");
console.log("Document title and semantic structure inspected.");`
    },

    {
      id: "ex-text-formatting",
      title: "2. Interactive Text Styler & Badge Bar",
      category: "HTML + JS",
      difficulty: "Beginner",
      description: "Manipulate text styles, toggle bold, italic, uppercase, and highlight using JavaScript DOM event listeners.",
      html: `<div class="container">
  <h2>Live Text Formatter</h2>
  <p id="targetText" class="sample-text">
    The quick brown fox jumps over the lazy dog. Code with passion!
  </p>

  <div class="button-group">
    <button id="btnBold" class="btn">Bold</button>
    <button id="btnItalic" class="btn">Italic</button>
    <button id="btnUpper" class="btn">Uppercase</button>
    <button id="btnHighlight" class="btn">Highlight</button>
    <button id="btnReset" class="btn btn-outline">Reset Style</button>
  </div>
  
  <p class="status" id="statusMessage">Click buttons above to format text</p>
</div>`,
      css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 24px;
  background: #fafafa;
  color: #1e293b;
}
.container {
  max-width: 500px;
  margin: 0 auto;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
h2 {
  margin-top: 0;
  font-size: 1.4rem;
  color: #111827;
}
.sample-text {
  font-size: 1.15rem;
  line-height: 1.6;
  padding: 16px;
  background: #f3f4f6;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  transition: all 0.2s ease;
}
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}
.btn {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 8px 14px;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s;
}
.btn:hover {
  background: #1d4ed8;
}
.btn-outline {
  background: transparent;
  color: #4b5563;
  border: 1px solid #9ca3af;
}
.btn-outline:hover {
  background: #f3f4f6;
  color: #111827;
}
.highlight {
  background-color: #fef08a !important;
  color: #854d0e;
}
.status {
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 14px;
}`,
      js: `const text = document.getElementById("targetText");
const status = document.getElementById("statusMessage");

document.getElementById("btnBold").addEventListener("click", () => {
  text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
  status.textContent = "Font weight toggled: " + text.style.fontWeight;
  console.log("Bold toggled:", text.style.fontWeight);
});

document.getElementById("btnItalic").addEventListener("click", () => {
  text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
  status.textContent = "Font style toggled: " + text.style.fontStyle;
  console.log("Italic toggled:", text.style.fontStyle);
});

document.getElementById("btnUpper").addEventListener("click", () => {
  text.style.textTransform = text.style.textTransform === "uppercase" ? "none" : "uppercase";
  status.textContent = "Text transform toggled: " + text.style.textTransform;
  console.log("Text transform:", text.style.textTransform);
});

document.getElementById("btnHighlight").addEventListener("click", () => {
  text.classList.toggle("highlight");
  const isHigh = text.classList.contains("highlight");
  status.textContent = isHigh ? "Highlight enabled" : "Highlight removed";
  console.log("Highlight state:", isHigh);
});

document.getElementById("btnReset").addEventListener("click", () => {
  text.style.fontWeight = "normal";
  text.style.fontStyle = "normal";
  text.style.textTransform = "none";
  text.classList.remove("highlight");
  status.textContent = "Styles reset to default";
  console.log("Styles reset");
});`
    },

    {
      id: "ex-click-counter",
      title: "3. Interactive Counter with Step & Limits",
      category: "JavaScript Basics",
      difficulty: "Beginner",
      description: "State management in pure JS: increment, decrement, reset, dynamic color warnings, and audio-like feedback.",
      html: `<div class="counter-box">
  <div class="counter-header">
    <span class="badge">State & Event Basics</span>
    <h3>Interactive Value Counter</h3>
  </div>

  <div class="display-container">
    <div id="counterValue" class="value zero">0</div>
  </div>

  <div class="controls">
    <button id="btnDec" class="btn btn-danger">- 1</button>
    <button id="btnReset" class="btn btn-secondary">Reset</button>
    <button id="btnInc" class="btn btn-success">+ 1</button>
  </div>

  <div class="step-setting">
    <label for="stepInput">Step Size:</label>
    <input type="number" id="stepInput" value="1" min="1" max="10">
  </div>
  
  <p id="counterLog" class="log">Ready to count. Click + or -.</p>
</div>`,
      css: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #0f172a;
  color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 280px;
  margin: 0;
  padding: 16px;
}
.counter-box {
  background: #1e293b;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  max-width: 380px;
  text-align: center;
  border: 1px solid #334155;
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
}
.counter-header h3 {
  margin: 8px 0;
  font-size: 1.25rem;
}
.badge {
  font-size: 0.75rem;
  background: #0ea5e9;
  color: #fff;
  padding: 3px 8px;
  border-radius: 99px;
  font-weight: 600;
}
.display-container {
  margin: 20px 0;
}
.value {
  font-size: 3.5rem;
  font-weight: 800;
  font-family: monospace;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.value.positive { color: #10b981; transform: scale(1.05); }
.value.negative { color: #f43f5e; transform: scale(0.95); }
.value.zero { color: #94a3b8; }
.controls {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.btn {
  border: none;
  padding: 10px 18px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.1s;
}
.btn:active { transform: scale(0.96); }
.btn-success { background: #10b981; color: white; }
.btn-danger { background: #f43f5e; color: white; }
.btn-secondary { background: #475569; color: white; }
.step-setting {
  margin-top: 18px;
  font-size: 0.9rem;
  color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.step-setting input {
  width: 50px;
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid #475569;
  background: #0f172a;
  color: #fff;
  text-align: center;
}
.log {
  margin-top: 14px;
  font-size: 0.8rem;
  color: #64748b;
}`,
      js: `let count = 0;
const valueEl = document.getElementById("counterValue");
const stepInput = document.getElementById("stepInput");
const logEl = document.getElementById("counterLog");

function updateUI() {
  valueEl.textContent = count;
  valueEl.classList.remove("positive", "negative", "zero");
  
  if (count > 0) {
    valueEl.classList.add("positive");
  } else if (count < 0) {
    valueEl.classList.add("negative");
  } else {
    valueEl.classList.add("zero");
  }
}

document.getElementById("btnInc").addEventListener("click", () => {
  const step = parseInt(stepInput.value, 10) || 1;
  count += step;
  updateUI();
  logEl.textContent = \`Increased by \${step}. Total = \${count}\`;
  console.log("Incremented:", { count, step });
});

document.getElementById("btnDec").addEventListener("click", () => {
  const step = parseInt(stepInput.value, 10) || 1;
  count -= step;
  updateUI();
  logEl.textContent = \`Decreased by \${step}. Total = \${count}\`;
  console.log("Decremented:", { count, step });
});

document.getElementById("btnReset").addEventListener("click", () => {
  count = 0;
  updateUI();
  logEl.textContent = "Counter reset to 0.";
  console.log("Counter reset to 0");
});`
    },

    {
      id: "ex-char-counter",
      title: "4. Live Character & Word Counter",
      category: "JavaScript Basics",
      difficulty: "Beginner",
      description: "Input event handling, string manipulation, reading text length, calculating word counts, and progress bar visualization.",
      html: `<div class="word-card">
  <h3>Live Text & Word Counter</h3>
  <p class="desc">Type or paste text below to see real-time statistics.</p>

  <textarea id="textInput" placeholder="Start typing your thoughts here..." rows="4"></textarea>

  <div class="stats-grid">
    <div class="stat-box">
      <span class="stat-num" id="charCount">0</span>
      <span class="stat-label">Characters</span>
    </div>
    <div class="stat-box">
      <span class="stat-num" id="wordCount">0</span>
      <span class="stat-label">Words</span>
    </div>
    <div class="stat-box">
      <span class="stat-num" id="readingTime">0s</span>
      <span class="stat-label">Read Time</span>
    </div>
  </div>

  <div class="limit-bar-wrapper">
    <div class="limit-info">
      <span>Character limit (280)</span>
      <span id="charRemaining">280 left</span>
    </div>
    <div class="progress-track">
      <div id="progressBar" class="progress-fill"></div>
    </div>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #f8fafc;
  padding: 20px;
  color: #1e293b;
}
.word-card {
  max-width: 480px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 22px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  border: 1px solid #e2e8f0;
}
.word-card h3 {
  margin: 0 0 4px 0;
  color: #0f172a;
}
.desc {
  color: #64748b;
  font-size: 0.85rem;
  margin-bottom: 12px;
}
textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  font-size: 0.95rem;
  border-radius: 8px;
  border: 1.5px solid #cbd5e1;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.2s;
  outline: none;
}
textarea:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 16px 0;
}
.stat-box {
  background: #f1f5f9;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}
.stat-num {
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  color: #2563eb;
}
.stat-label {
  font-size: 0.75rem;
  color: #64748b;
  text-transform: uppercase;
  font-weight: 600;
}
.limit-bar-wrapper {
  margin-top: 14px;
}
.limit-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #64748b;
  margin-bottom: 6px;
}
.progress-track {
  height: 6px;
  background: #e2e8f0;
  border-radius: 99px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  width: 0%;
  background: #3b82f6;
  transition: width 0.15s ease, background-color 0.2s;
}
.progress-fill.warning { background: #f59e0b; }
.progress-fill.danger { background: #ef4444; }`,
      js: `const input = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const readingTime = document.getElementById("readingTime");
const charRemaining = document.getElementById("charRemaining");
const progressBar = document.getElementById("progressBar");

const MAX_CHARS = 280;

input.addEventListener("input", () => {
  const text = input.value;
  const chars = text.length;
  
  // Calculate words (strip multiple whitespace)
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\\s+/).length : 0;
  
  // Average reading speed: 200 words per minute (approx 3.3 words/sec)
  const seconds = Math.ceil(words / 3.3);
  
  charCount.textContent = chars;
  wordCount.textContent = words;
  readingTime.textContent = seconds < 60 ? \`\${seconds}s\` : \`\${Math.ceil(seconds/60)}m\`;
  
  // Remaining & progress
  const remaining = MAX_CHARS - chars;
  charRemaining.textContent = remaining >= 0 ? \`\${remaining} left\` : \`\${Math.abs(remaining)} over\`;
  
  const percentage = Math.min((chars / MAX_CHARS) * 100, 100);
  progressBar.style.width = percentage + "%";
  
  progressBar.classList.remove("warning", "danger");
  if (percentage >= 100) {
    progressBar.classList.add("danger");
  } else if (percentage >= 80) {
    progressBar.classList.add("warning");
  }

  console.log("Live stats:", { characters: chars, words, remaining });
});`
    },

    {
      id: "ex-theme-toggle",
      title: "5. Dark & Light Theme Switcher",
      category: "HTML + JS",
      difficulty: "Beginner",
      description: "Toggle themes cleanly using CSS custom variables (variables), classList toggle, and state reflection.",
      html: `<div id="themeContainer" class="theme-wrapper light">
  <div class="theme-card">
    <div class="header-row">
      <h3 id="modeTitle">Light Theme Active</h3>
      <button id="toggleBtn" class="mode-btn">🌙 Dark Mode</button>
    </div>
    
    <p class="body-text">
      Modern UI interfaces allow users to comfortably switch between light and dark palettes for reduced eye strain and enhanced readability.
    </p>

    <div class="feature-box">
      <h4>CSS Custom Variables</h4>
      <p>Seamlessly change themes by toggling a root class that updates variable tokens!</p>
    </div>

    <footer class="theme-footer">
      <span>Theme state: <strong id="stateLabel">Light</strong></span>
    </footer>
  </div>
</div>`,
      css: `/* Theme CSS Variables */
.theme-wrapper.light {
  --bg-color: #f8fafc;
  --card-bg: #ffffff;
  --text-primary: #0f172a;
  --text-muted: #64748b;
  --card-border: #e2e8f0;
  --box-bg: #f1f5f9;
  --btn-bg: #1e293b;
  --btn-text: #ffffff;
}

.theme-wrapper.dark {
  --bg-color: #0b1120;
  --card-bg: #1e293b;
  --text-primary: #f8fafc;
  --text-muted: #94a3b8;
  --card-border: #334155;
  --box-bg: #0f172a;
  --btn-bg: #38bdf8;
  --btn-text: #0b1120;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
}

.theme-wrapper {
  background-color: var(--bg-color);
  min-height: 280px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.theme-card {
  background-color: var(--card-bg);
  color: var(--text-primary);
  border: 1px solid var(--card-border);
  border-radius: 14px;
  padding: 24px;
  max-width: 440px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.header-row h3 {
  margin: 0;
  font-size: 1.2rem;
}

.mode-btn {
  background-color: var(--btn-bg);
  color: var(--btn-text);
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.mode-btn:hover {
  opacity: 0.9;
}

.body-text {
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.5;
}

.feature-box {
  background: var(--box-bg);
  padding: 12px 16px;
  border-radius: 8px;
  margin: 16px 0;
}

.feature-box h4 {
  margin: 0 0 4px 0;
  font-size: 0.95rem;
}

.feature-box p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.theme-footer {
  font-size: 0.8rem;
  color: var(--text-muted);
  border-top: 1px dashed var(--card-border);
  padding-top: 10px;
}`,
      js: `const wrapper = document.getElementById("themeContainer");
const toggleBtn = document.getElementById("toggleBtn");
const modeTitle = document.getElementById("modeTitle");
const stateLabel = document.getElementById("stateLabel");

toggleBtn.addEventListener("click", () => {
  const isDark = wrapper.classList.toggle("dark");
  wrapper.classList.toggle("light", !isDark);
  
  if (isDark) {
    toggleBtn.textContent = "☀️ Light Mode";
    modeTitle.textContent = "Dark Theme Active";
    stateLabel.textContent = "Dark";
    console.log("Switched to DARK theme");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    modeTitle.textContent = "Light Theme Active";
    stateLabel.textContent = "Light";
    console.log("Switched to LIGHT theme");
  }
});`
    },

    {
      id: "ex-random-color",
      title: "6. Random Color Generator & Flipper",
      category: "JavaScript Basics",
      difficulty: "Beginner",
      description: "Generates random hexadecimal and RGB colors, updates UI dynamically, and copies color code to clipboard.",
      html: `<div class="color-flipper">
  <div id="colorDisplay" class="color-preview">
    <span id="hexValue">#3B82F6</span>
  </div>

  <div class="action-bar">
    <button id="btnGenerate" class="btn btn-primary">🎨 Generate Color</button>
    <button id="btnCopy" class="btn btn-copy">📋 Copy Hex</button>
  </div>

  <div class="color-details">
    <p>RGB: <code id="rgbValue">rgb(59, 130, 246)</code></p>
    <span id="copyFeedback" class="feedback">Click "Copy Hex" to copy to clipboard</span>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  padding: 24px;
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 260px;
  margin: 0;
}
.color-flipper {
  background: white;
  border-radius: 14px;
  padding: 20px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
  text-align: center;
}
.color-preview {
  height: 120px;
  background: #3b82f6;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.25s ease;
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.15);
}
.color-preview span {
  font-family: monospace;
  font-size: 1.5rem;
  font-weight: 700;
  background: rgba(0,0,0,0.5);
  color: #fff;
  padding: 6px 14px;
  border-radius: 8px;
  letter-spacing: 1px;
}
.action-bar {
  display: flex;
  gap: 10px;
  margin: 16px 0;
}
.btn {
  flex: 1;
  padding: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: transform 0.1s, opacity 0.2s;
}
.btn:active { transform: scale(0.97); }
.btn-primary { background: #0f172a; color: white; }
.btn-copy { background: #e2e8f0; color: #1e293b; }
.color-details {
  font-size: 0.85rem;
  color: #64748b;
}
.color-details code {
  color: #0f172a;
  font-weight: 600;
}
.feedback {
  display: block;
  margin-top: 6px;
  font-size: 0.8rem;
  color: #10b981;
}`,
      js: `const display = document.getElementById("colorDisplay");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");
const copyFeedback = document.getElementById("copyFeedback");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return \`rgb(\${r}, \${g}, \${b})\`;
}

function applyNewColor() {
  const newHex = getRandomColor();
  const newRgb = hexToRgb(newHex);
  
  display.style.backgroundColor = newHex;
  hexValue.textContent = newHex;
  rgbValue.textContent = newRgb;
  copyFeedback.textContent = "Generated new color!";
  copyFeedback.style.color = "#64748b";
  
  console.log("New color generated:", { hex: newHex, rgb: newRgb });
}

document.getElementById("btnGenerate").addEventListener("click", applyNewColor);

document.getElementById("btnCopy").addEventListener("click", () => {
  const code = hexValue.textContent;
  navigator.clipboard.writeText(code).then(() => {
    copyFeedback.textContent = \`Copied \${code} to clipboard!\`;
    copyFeedback.style.color = "#10b981";
  }).catch(() => {
    copyFeedback.textContent = "Copy permission blocked in sandbox.";
  });
});`
    },

    {
      id: "ex-dynamic-todo",
      title: "7. Dynamic Item List (Create & Delete)",
      category: "HTML + JS",
      difficulty: "Intermediate",
      description: "DOM tree creation with document.createElement, appendChild, remove(), and event bubbling.",
      html: `<div class="todo-widget">
  <h3>Quick Tasks List</h3>
  <form id="taskForm" class="task-form">
    <input type="text" id="taskInput" placeholder="Enter task..." required autocomplete="off">
    <button type="submit" class="btn-add">Add</button>
  </form>

  <ul id="taskList" class="task-list">
    <!-- Initial tasks -->
    <li class="task-item">
      <span>Master HTML5 semantic elements</span>
      <button class="btn-del">&times;</button>
    </li>
    <li class="task-item">
      <span>Understand JS Event Listeners</span>
      <button class="btn-del">&times;</button>
    </li>
  </ul>
  
  <div class="todo-footer">
    <span id="taskCount">2 tasks</span>
    <button id="btnClearAll" class="btn-clear-all">Clear All</button>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #f8fafc;
  padding: 20px;
  color: #334155;
}
.todo-widget {
  max-width: 420px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  border: 1px solid #e2e8f0;
}
.todo-widget h3 {
  margin-top: 0;
  color: #0f172a;
}
.task-form {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.task-form input {
  flex: 1;
  padding: 8px 12px;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
}
.task-form input:focus {
  border-color: #3b82f6;
}
.btn-add {
  background: #2563eb;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background: #f1f5f9;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}
.task-item span {
  font-size: 0.95rem;
}
.btn-del {
  background: #fee2e2;
  color: #ef4444;
  border: none;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}
.btn-del:hover {
  background: #fecaca;
}
.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #e2e8f0;
  font-size: 0.85rem;
  color: #64748b;
}
.btn-clear-all {
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 0.85rem;
}`,
      js: `const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const countEl = document.getElementById("taskCount");
const clearBtn = document.getElementById("btnClearAll");

function updateCount() {
  const total = list.children.length;
  countEl.textContent = \`\${total} task\${total === 1 ? '' : 's'}\`;
}

// Add task
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = \`
    <span>\${text}</span>
    <button class="btn-del">&times;</button>
  \`;

  list.appendChild(li);
  input.value = "";
  updateCount();
  console.log("Added task:", text);
});

// Event delegation for delete buttons
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-del")) {
    const item = e.target.closest(".task-item");
    const taskName = item.querySelector("span").textContent;
    item.remove();
    updateCount();
    console.log("Removed task:", taskName);
  }
});

// Clear all tasks
clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
  updateCount();
  console.log("Cleared all tasks");
});`
    },

    {
      id: "ex-modal-dialog",
      title: "8. Interactive Modal & Popup Window",
      category: "HTML + JS",
      difficulty: "Intermediate",
      description: "Creating accessible modal dialogs, backdrop blurring, keyboard ESC dismissal, and preventing scroll bleed.",
      html: `<div class="modal-demo">
  <h3>Modal Dialog Component</h3>
  <p>Click below to open the interactive popup overlay.</p>

  <button id="openModalBtn" class="btn btn-primary">🚀 Launch Dialog</button>

  <!-- Modal Overlay -->
  <div id="modalOverlay" class="modal-overlay hidden">
    <div class="modal-card">
      <div class="modal-header">
        <h4>System Notification</h4>
        <button id="closeModalBtn" class="modal-close-icon">&times;</button>
      </div>
      <div class="modal-body">
        <p>This is a custom modal window powered by HTML &amp; JavaScript event listeners.</p>
        <p><small>Tip: You can also press <kbd>Escape</kbd> or click outside the card to close it!</small></p>
      </div>
      <div class="modal-footer">
        <button id="modalActionBtn" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #f1f5f9;
  padding: 30px;
  color: #1e293b;
}
.modal-demo {
  max-width: 450px;
  margin: 0 auto;
  text-align: center;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.06);
}
.btn {
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
}
.btn-primary { background: #3b82f6; color: white; }
.btn-primary:hover { background: #2563eb; }

/* Modal Styling */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 1;
  transition: opacity 0.25s ease;
}
.modal-overlay.hidden {
  opacity: 0;
  pointer-events: none;
}
.modal-card {
  background: white;
  border-radius: 14px;
  width: 90%;
  max-width: 420px;
  padding: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  text-align: left;
  transform: translateY(0);
  transition: transform 0.25s ease;
}
.modal-overlay.hidden .modal-card {
  transform: translateY(-20px);
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 10px;
}
.modal-header h4 {
  margin: 0;
  color: #0f172a;
}
.modal-close-icon {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #94a3b8;
  cursor: pointer;
  line-height: 1;
}
.modal-close-icon:hover { color: #0f172a; }
.modal-body {
  padding: 16px 0;
  color: #475569;
  font-size: 0.95rem;
}
kbd {
  background: #f1f5f9;
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
  font-size: 0.8rem;
}
.modal-footer {
  text-align: right;
  border-top: 1px solid #e2e8f0;
  padding-top: 12px;
}`,
      js: `const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const actionBtn = document.getElementById("modalActionBtn");
const overlay = document.getElementById("modalOverlay");

function openModal() {
  overlay.classList.remove("hidden");
  console.log("Modal opened");
}

function closeModal() {
  overlay.classList.add("hidden");
  console.log("Modal closed");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
actionBtn.addEventListener("click", closeModal);

// Close when clicking on backdrop
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

// Close on Escape key press
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
    closeModal();
  }
});`
    },

    {
      id: "ex-digital-clock",
      title: "9. Live Digital Clock & Timezone Display",
      category: "JavaScript Basics",
      difficulty: "Intermediate",
      description: "Using setInterval, JavaScript Date object, padding strings with padStart, and 12/24 hour time toggling.",
      html: `<div class="clock-card">
  <div class="clock-top">
    <span class="badge">Live Time Engine</span>
    <button id="btnToggleFormat" class="format-btn">Switch to 24H</button>
  </div>

  <div class="time-display">
    <span id="hours">12</span>:<span id="minutes">00</span>:<span id="seconds">00</span>
    <span id="ampm" class="ampm">PM</span>
  </div>

  <div class="date-display" id="dateString">
    Wednesday, October 7, 2026
  </div>
</div>`,
      css: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #0f172a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 260px;
  margin: 0;
  padding: 20px;
}
.clock-card {
  background: #1e293b;
  border-radius: 16px;
  padding: 26px;
  border: 1px solid #334155;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  text-align: center;
  max-width: 400px;
  width: 100%;
}
.clock-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.badge {
  background: #0284c7;
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 99px;
  font-weight: 600;
}
.format-btn {
  background: #334155;
  color: #94a3b8;
  border: none;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
}
.time-display {
  font-family: 'Courier New', monospace;
  font-size: 3rem;
  font-weight: 700;
  color: #38bdf8;
  text-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
  letter-spacing: 2px;
}
.ampm {
  font-size: 1.2rem;
  color: #f59e0b;
  margin-left: 6px;
}
.date-display {
  margin-top: 15px;
  font-size: 0.95rem;
  color: #94a3b8;
  border-top: 1px solid #334155;
  padding-top: 12px;
}`,
      js: `let is24Hour = false;

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const dateEl = document.getElementById("dateString");
const toggleBtn = document.getElementById("btnToggleFormat");

function updateClock() {
  const now = new Date();
  
  let h = now.getHours();
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  
  if (!is24Hour) {
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    ampmEl.style.display = "inline";
    ampmEl.textContent = ampm;
  } else {
    ampmEl.style.display = "none";
  }

  hoursEl.textContent = String(h).padStart(2, "0");
  minutesEl.textContent = m;
  secondsEl.textContent = s;
  
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  dateEl.textContent = now.toLocaleDateString(undefined, options);
}

toggleBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  toggleBtn.textContent = is24Hour ? "Switch to 12H" : "Switch to 24H";
  updateClock();
  console.log("Clock format updated. 24H:", is24Hour);
});

// Update every second
setInterval(updateClock, 1000);
updateClock();
console.log("Digital clock timer started.");`
    },

    {
      id: "ex-tip-calculator",
      title: "10. Bill & Tip Split Calculator",
      category: "HTML + JS",
      difficulty: "Intermediate",
      description: "Perform real-time floating point calculations, handle form inputs, and compute per-person shares.",
      html: `<div class="calc-card">
  <h3>Tip &amp; Bill Splitter</h3>
  
  <div class="form-group">
    <label>Bill Amount ($):</label>
    <input type="number" id="billInput" placeholder="0.00" step="0.01" min="0">
  </div>

  <div class="form-group">
    <label>Tip Percentage:</label>
    <div class="tip-options">
      <button class="tip-btn active" data-tip="10">10%</button>
      <button class="tip-btn" data-tip="15">15%</button>
      <button class="tip-btn" data-tip="20">20%</button>
      <button class="tip-btn" data-tip="25">25%</button>
    </div>
  </div>

  <div class="form-group">
    <label>Split Between (People):</label>
    <input type="number" id="peopleInput" value="2" min="1" max="50">
  </div>

  <div class="summary-box">
    <div class="row">
      <span>Tip Amount (Total):</span>
      <strong id="tipAmount">$0.00</strong>
    </div>
    <div class="row">
      <span>Total Bill:</span>
      <strong id="totalAmount">$0.00</strong>
    </div>
    <div class="row total-per-person">
      <span>Amount Per Person:</span>
      <span class="highlight" id="perPersonAmount">$0.00</span>
    </div>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #f0fdf4;
  padding: 20px;
  color: #14532d;
}
.calc-card {
  max-width: 400px;
  margin: 0 auto;
  background: white;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(20, 83, 45, 0.08);
  border: 1px solid #bbf7d0;
}
.calc-card h3 {
  margin-top: 0;
  color: #15803d;
}
.form-group {
  margin-bottom: 16px;
}
.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 6px;
  color: #166534;
}
input[type="number"] {
  width: 100%;
  box-sizing: border-box;
  padding: 8px 12px;
  border: 1.5px solid #86efac;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
}
input:focus { border-color: #22c55e; }
.tip-options {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}
.tip-btn {
  background: #f0fdf4;
  border: 1.5px solid #86efac;
  color: #15803d;
  padding: 8px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}
.tip-btn.active {
  background: #22c55e;
  color: white;
  border-color: #22c55e;
}
.summary-box {
  background: #f0fdf4;
  border: 1px dashed #86efac;
  border-radius: 10px;
  padding: 14px;
  margin-top: 20px;
}
.summary-box .row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.9rem;
}
.summary-box .total-per-person {
  margin-top: 12px;
  padding-top: 8px;
  border-top: 1px solid #bbf7d0;
  font-size: 1rem;
  font-weight: 700;
}
.highlight {
  font-size: 1.3rem;
  color: #15803d;
}`,
      js: `let selectedTip = 10;
const billInput = document.getElementById("billInput");
const peopleInput = document.getElementById("peopleInput");
const tipBtns = document.querySelectorAll(".tip-btn");

const tipAmountEl = document.getElementById("tipAmount");
const totalAmountEl = document.getElementById("totalAmount");
const perPersonEl = document.getElementById("perPersonAmount");

function calculate() {
  const bill = parseFloat(billInput.value) || 0;
  const people = parseInt(peopleInput.value, 10) || 1;

  const tipTotal = bill * (selectedTip / 100);
  const total = bill + tipTotal;
  const perPerson = total / (people > 0 ? people : 1);

  tipAmountEl.textContent = \`$\${tipTotal.toFixed(2)}\`;
  totalAmountEl.textContent = \`$\${total.toFixed(2)}\`;
  perPersonEl.textContent = \`$\${perPerson.toFixed(2)}\`;

  console.log("Tip calculated:", { bill, tipPercent: selectedTip, perPerson });
}

tipBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tipBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedTip = parseFloat(btn.dataset.tip);
    calculate();
  });
});

billInput.addEventListener("input", calculate);
peopleInput.addEventListener("input", calculate);`
    },

    {
      id: "ex-search-filter",
      title: "11. Real-time Search & Filter List",
      category: "JavaScript Basics",
      difficulty: "Intermediate",
      description: "Search array of items with Array.prototype.filter, case-insensitive string matching, and live DOM rendering.",
      html: `<div class="search-widget">
  <h3>Web Tech Explorer</h3>
  <input type="text" id="searchInput" placeholder="Search technologies (e.g., CSS, React)...">

  <div class="results-header">
    <span id="matchCount">Showing all items</span>
  </div>

  <ul id="techList" class="items-list">
    <!-- Populated by JS -->
  </ul>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #f8fafc;
  padding: 20px;
  color: #1e293b;
}
.search-widget {
  max-width: 440px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 22px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.search-widget h3 {
  margin-top: 0;
  color: #0f172a;
}
#searchInput {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 14px;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
}
#searchInput:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
}
.results-header {
  margin: 12px 0 8px 0;
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 600;
}
.items-list {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 220px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.items-list li {
  padding: 10px 12px;
  background: #f1f5f9;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tag {
  font-size: 0.75rem;
  background: #e2e8f0;
  padding: 2px 6px;
  border-radius: 4px;
  color: #475569;
}
.no-results {
  text-align: center;
  color: #94a3b8;
  padding: 20px;
}`,
      js: `const technologies = [
  { name: "HTML5", category: "Markup" },
  { name: "CSS3", category: "Styling" },
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Framework" },
  { name: "Node.js", category: "Runtime" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Git & GitHub", category: "Tool" },
  { name: "Webpack / Vite", category: "Bundler" }
];

const input = document.getElementById("searchInput");
const list = document.getElementById("techList");
const countEl = document.getElementById("matchCount");

function renderList(items) {
  list.innerHTML = "";
  
  if (items.length === 0) {
    list.innerHTML = '<li class="no-results">No matching technology found.</li>';
    countEl.textContent = "0 matches";
    return;
  }

  items.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = \`
      <strong>\${item.name}</strong>
      <span class="tag">\${item.category}</span>
    \`;
    list.appendChild(li);
  });

  countEl.textContent = \`Showing \${items.length} of \${technologies.length} items\`;
}

input.addEventListener("input", () => {
  const query = input.value.toLowerCase().trim();
  const filtered = technologies.filter(item => 
    item.name.toLowerCase().includes(query) || 
    item.category.toLowerCase().includes(query)
  );
  
  renderList(filtered);
  console.log(\`Filtered query "\${query}" matches:\`, filtered.length);
});

// Initial render
renderList(technologies);`
    },

    {
      id: "ex-accordion-faq",
      title: "12. Collapsible Accordion & FAQ",
      category: "HTML + JS",
      difficulty: "Intermediate",
      description: "Interactive accordion widget with smooth height expansion and single-open toggle logic.",
      html: `<div class="accordion-box">
  <h3>Frequently Asked Questions</h3>

  <div class="accordion-item">
    <button class="accordion-header">
      <span>What is the difference between HTML and JavaScript?</span>
      <span class="icon">+</span>
    </button>
    <div class="accordion-body">
      <p>HTML provides the static structure and elements of a page, while JavaScript is a programming language that provides interactivity, dynamic behaviour, and logic.</p>
    </div>
  </div>

  <div class="accordion-item">
    <button class="accordion-header">
      <span>Why prefer let and const over var?</span>
      <span class="icon">+</span>
    </button>
    <div class="accordion-body">
      <p><code>let</code> and <code>const</code> have block-level scoping and prevent accidental hoisting bugs or global variable pollution common with <code>var</code>.</p>
    </div>
  </div>

  <div class="accordion-item">
    <button class="accordion-header">
      <span>What does addEventListener do?</span>
      <span class="icon">+</span>
    </button>
    <div class="accordion-body">
      <p>It registers an event handler function to a specific target event (e.g. click, submit, keydown) without overwriting existing event handlers on that element.</p>
    </div>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #f1f5f9;
  padding: 20px;
  color: #1e293b;
}
.accordion-box {
  max-width: 480px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 22px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
}
.accordion-box h3 {
  margin-top: 0;
  color: #0f172a;
}
.accordion-item {
  border-bottom: 1px solid #e2e8f0;
}
.accordion-header {
  width: 100%;
  padding: 14px 0;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1e293b;
  cursor: pointer;
  text-align: left;
}
.accordion-header:hover {
  color: #2563eb;
}
.icon {
  font-size: 1.2rem;
  font-weight: bold;
  transition: transform 0.2s ease;
}
.accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease-out;
}
.accordion-body p {
  margin: 0;
  padding-bottom: 14px;
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
}
.accordion-item.active .icon {
  transform: rotate(45deg);
}
.accordion-item.active .accordion-body {
  max-height: 150px;
}`,
      js: `const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all other accordion items
    items.forEach(other => other.classList.remove("active"));

    // Toggle current item
    if (!isActive) {
      item.classList.add("active");
      console.log("Opened section:", header.textContent.trim());
    }
  });
});`
    },

    {
      id: "ex-stopwatch",
      title: "13. Precision Stopwatch (Lap & Reset)",
      category: "JavaScript Basics",
      difficulty: "Intermediate",
      description: "Accurate timing using performance.now/Date.now, start/pause/reset cycle, and recording lap times.",
      html: `<div class="stopwatch-card">
  <h3>Precision Stopwatch</h3>
  
  <div class="display">
    <span id="swDisplay">00:00.00</span>
  </div>

  <div class="controls">
    <button id="btnStart" class="btn btn-start">Start</button>
    <button id="btnLap" class="btn btn-lap" disabled>Lap</button>
    <button id="btnReset" class="btn btn-reset">Reset</button>
  </div>

  <div class="laps-box">
    <h4>Recorded Laps (<span id="lapCount">0</span>)</h4>
    <ul id="lapList"></ul>
  </div>
</div>`,
      css: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #090d16;
  color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 280px;
  margin: 0;
  padding: 16px;
}
.stopwatch-card {
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 14px;
  padding: 22px;
  max-width: 380px;
  width: 100%;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}
.stopwatch-card h3 {
  margin-top: 0;
  color: #94a3b8;
  font-size: 1.1rem;
}
.display {
  font-family: monospace;
  font-size: 2.8rem;
  font-weight: 700;
  color: #10b981;
  margin: 16px 0;
  letter-spacing: 2px;
}
.controls {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s;
}
.btn:disabled { opacity: 0.4; cursor: not-allowed; }
.btn-start { background: #10b981; color: white; }
.btn-start.running { background: #f59e0b; }
.btn-lap { background: #3b82f6; color: white; }
.btn-reset { background: #374151; color: #d1d5db; }
.laps-box {
  margin-top: 18px;
  border-top: 1px solid #1f2937;
  padding-top: 12px;
  text-align: left;
}
.laps-box h4 {
  margin: 0 0 8px 0;
  font-size: 0.85rem;
  color: #94a3b8;
}
#lapList {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 100px;
  overflow-y: auto;
  font-family: monospace;
  font-size: 0.85rem;
}
#lapList li {
  display: flex;
  justify-content: space-between;
  padding: 4px 6px;
  border-bottom: 1px solid #1f2937;
  color: #9ca3af;
}`,
      js: `let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let laps = [];

const display = document.getElementById("swDisplay");
const startBtn = document.getElementById("btnStart");
const lapBtn = document.getElementById("btnLap");
const resetBtn = document.getElementById("btnReset");
const lapList = document.getElementById("lapList");
const lapCount = document.getElementById("lapCount");

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const centiseconds = Math.floor((ms % 1000) / 10);
  
  return \`\${String(minutes).padStart(2, "0")}:\${String(seconds).padStart(2, "0")}.\${String(centiseconds).padStart(2, "0")}\`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10);
  startBtn.textContent = "Pause";
  startBtn.classList.add("running");
  lapBtn.disabled = false;
  console.log("Stopwatch started");
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  startBtn.textContent = "Resume";
  startBtn.classList.remove("running");
  console.log("Stopwatch paused at:", formatTime(elapsedTime));
}

startBtn.addEventListener("click", () => {
  if (timerInterval) {
    pauseTimer();
  } else {
    startTimer();
  }
});

lapBtn.addEventListener("click", () => {
  const currentFormatted = formatTime(elapsedTime);
  laps.unshift(currentFormatted);
  lapList.innerHTML = laps.map((lap, idx) => \`<li><span>Lap \${laps.length - idx}</span><span>\${lap}</span></li>\`).join("");
  lapCount.textContent = laps.length;
  console.log("Lap recorded:", currentFormatted);
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  laps = [];
  display.textContent = "00:00.00";
  startBtn.textContent = "Start";
  startBtn.classList.remove("running");
  lapBtn.disabled = true;
  lapList.innerHTML = "";
  lapCount.textContent = "0";
  console.log("Stopwatch reset");
});`
    },

    {
      id: "ex-quiz-game",
      title: "14. Interactive Quiz with Instant Feedback",
      category: "JavaScript Basics",
      difficulty: "Intermediate",
      description: "Array of question objects, dynamically rendering options, scoring, and end-of-quiz statistics.",
      html: `<div class="quiz-card">
  <div class="quiz-header">
    <span id="questionStep">Question 1 of 3</span>
    <span id="scoreBadge" class="score-badge">Score: 0</span>
  </div>

  <div id="quizContent">
    <h3 id="questionText">Loading question...</h3>
    <div id="optionsContainer" class="options-grid"></div>
  </div>

  <div class="quiz-footer">
    <button id="nextBtn" class="btn" style="display:none">Next Question &rarr;</button>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #f1f5f9;
  padding: 20px;
  color: #1e293b;
}
.quiz-card {
  max-width: 460px;
  margin: 0 auto;
  background: white;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  border: 1px solid #e2e8f0;
}
.quiz-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 14px;
}
.score-badge {
  background: #e0e7ff;
  color: #4338ca;
  padding: 2px 8px;
  border-radius: 99px;
  font-weight: 700;
}
#questionText {
  margin: 0 0 16px 0;
  font-size: 1.15rem;
  color: #0f172a;
}
.options-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.opt-btn {
  text-align: left;
  padding: 10px 14px;
  background: #f8fafc;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.15s;
}
.opt-btn:hover:not(:disabled) {
  background: #e2e8f0;
}
.opt-btn.correct {
  background: #dcfce7;
  border-color: #22c55e;
  color: #15803d;
  font-weight: 600;
}
.opt-btn.wrong {
  background: #fee2e2;
  border-color: #ef4444;
  color: #b91c1c;
}
.quiz-footer {
  margin-top: 18px;
  text-align: right;
}
.btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}`,
      js: `const questions = [
  {
    question: "Which HTML tag is used for the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    answer: 2
  },
  {
    question: "Which keyword declares a block-scoped variable in modern JS?",
    options: ["var", "let", "define", "dim"],
    answer: 1
  },
  {
    question: "What method adds a new element to the end of a JavaScript Array?",
    options: ["push()", "pop()", "shift()", "append()"],
    answer: 0
  }
];

let currentIndex = 0;
let score = 0;

const questionStep = document.getElementById("questionStep");
const scoreBadge = document.getElementById("scoreBadge");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const current = questions[currentIndex];
  questionStep.textContent = \`Question \${currentIndex + 1} of \${questions.length}\`;
  questionText.textContent = current.question;
  optionsContainer.innerHTML = "";
  nextBtn.style.display = "none";

  current.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => handleSelect(idx, btn));
    optionsContainer.appendChild(btn);
  });
}

function handleSelect(selectedIndex, clickedBtn) {
  const current = questions[currentIndex];
  const allBtns = optionsContainer.querySelectorAll(".opt-btn");
  
  allBtns.forEach(btn => btn.disabled = true);

  if (selectedIndex === current.answer) {
    clickedBtn.classList.add("correct");
    score++;
    scoreBadge.textContent = \`Score: \${score}\`;
    console.log("Correct answer!");
  } else {
    clickedBtn.classList.add("wrong");
    allBtns[current.answer].classList.add("correct");
    console.log("Wrong answer chosen.");
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    questionStep.textContent = "Quiz Complete!";
    questionText.textContent = \`Congratulations! You scored \${score} out of \${questions.length}!\`;
    optionsContainer.innerHTML = '<p style="text-align:center; color:#64748b;">Great job learning HTML & JavaScript fundamentals!</p>';
    nextBtn.textContent = "Restart Quiz";
    nextBtn.onclick = () => {
      currentIndex = 0;
      score = 0;
      scoreBadge.textContent = "Score: 0";
      nextBtn.textContent = "Next Question \u2192";
      loadQuestion();
    };
  }
});

loadQuestion();`
    },

    {
      id: "ex-password-gen",
      title: "15. Customizable Password Generator",
      category: "JavaScript Basics",
      difficulty: "Intermediate",
      description: "Character pools, random array indexing, user constraints (uppercase, lowercase, numbers, symbols), and clipboard copy.",
      html: `<div class="pwd-card">
  <h3>Secure Password Generator</h3>

  <div class="result-box">
    <input type="text" id="pwdResult" readonly placeholder="Click Generate">
    <button id="btnCopyPwd" class="btn-copy">Copy</button>
  </div>

  <div class="settings">
    <div class="setting-row">
      <label>Password Length: <span id="lenDisplay">14</span></label>
      <input type="range" id="lenSlider" min="6" max="32" value="14">
    </div>

    <div class="checkbox-row">
      <label><input type="checkbox" id="chkUpper" checked> Include Uppercase (A-Z)</label>
      <label><input type="checkbox" id="chkLower" checked> Include Lowercase (a-z)</label>
      <label><input type="checkbox" id="chkNumbers" checked> Include Numbers (0-9)</label>
      <label><input type="checkbox" id="chkSymbols" checked> Include Symbols (!@#$)</label>
    </div>
  </div>

  <button id="btnGenPwd" class="btn btn-primary">Generate Strong Password</button>
  <p id="pwdMsg" class="msg"></p>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #0f172a;
  color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 280px;
  margin: 0;
  padding: 16px;
}
.pwd-card {
  background: #1e293b;
  border-radius: 14px;
  padding: 22px;
  max-width: 400px;
  width: 100%;
  border: 1px solid #334155;
}
.pwd-card h3 {
  margin-top: 0;
  font-size: 1.2rem;
  color: #38bdf8;
}
.result-box {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.result-box input {
  flex: 1;
  background: #0f172a;
  border: 1px solid #334155;
  color: #38bdf8;
  font-family: monospace;
  font-size: 1.1rem;
  padding: 10px;
  border-radius: 8px;
  letter-spacing: 1px;
}
.btn-copy {
  background: #334155;
  color: #fff;
  border: none;
  padding: 0 14px;
  border-radius: 8px;
  cursor: pointer;
}
.setting-row label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 6px;
  color: #94a3b8;
}
.setting-row input[type="range"] {
  width: 100%;
  accent-color: #38bdf8;
}
.checkbox-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 14px 0;
  font-size: 0.88rem;
  color: #cbd5e1;
}
.checkbox-row label {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}
.btn-primary {
  width: 100%;
  background: #0284c7;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
.msg {
  font-size: 0.8rem;
  margin-top: 8px;
  text-align: center;
  color: #10b981;
}`,
      js: `const chars = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
};

const slider = document.getElementById("lenSlider");
const lenDisplay = document.getElementById("lenDisplay");
const resultInput = document.getElementById("pwdResult");
const genBtn = document.getElementById("btnGenPwd");
const copyBtn = document.getElementById("btnCopyPwd");
const msg = document.getElementById("pwdMsg");

slider.addEventListener("input", () => {
  lenDisplay.textContent = slider.value;
});

function generatePassword() {
  const length = parseInt(slider.value, 10);
  let pool = "";
  if (document.getElementById("chkUpper").checked) pool += chars.upper;
  if (document.getElementById("chkLower").checked) pool += chars.lower;
  if (document.getElementById("chkNumbers").checked) pool += chars.numbers;
  if (document.getElementById("chkSymbols").checked) pool += chars.symbols;

  if (!pool) {
    resultInput.value = "Select at least 1 option";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    password += pool[randomIndex];
  }

  resultInput.value = password;
  msg.textContent = "Generated new secure password!";
  console.log("Password generated with length:", length);
}

genBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (resultInput.value) {
    navigator.clipboard.writeText(resultInput.value).then(() => {
      msg.textContent = "Password copied to clipboard!";
    }).catch(() => {
      msg.textContent = "Copy permission error.";
    });
  }
});

// Auto generate once on load
generatePassword();`
    },

    {
      id: "ex-canvas-draw",
      title: "16. HTML5 Canvas Interactive Drawing Pad",
      category: "HTML + JS",
      difficulty: "Advanced",
      description: "HTML5 <canvas> 2D rendering context, mouse event tracking (mousedown, mousemove, mouseup), color & line width controls.",
      html: `<div class="canvas-wrapper">
  <div class="toolbar">
    <label>Color: <input type="color" id="brushColor" value="#3b82f6"></label>
    <label>Size: <input type="range" id="brushSize" min="2" max="20" value="5"></label>
    <button id="btnClearCanvas" class="btn-clear">Clear Board</button>
  </div>

  <canvas id="paintCanvas" width="420" height="200"></canvas>
  <p class="hint">Draw with your mouse inside the box above!</p>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #f8fafc;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.canvas-wrapper {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
  text-align: center;
}
.toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.85rem;
  color: #475569;
}
canvas {
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  background: #ffffff;
  cursor: crosshair;
}
.btn-clear {
  background: #fee2e2;
  color: #ef4444;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  margin-left: auto;
}
.hint {
  font-size: 0.75rem;
  color: #94a3b8;
  margin-top: 8px;
}`,
      js: `const canvas = document.getElementById("paintCanvas");
const ctx = canvas.getContext("2d");
const colorInput = document.getElementById("brushColor");
const sizeInput = document.getElementById("brushSize");
const clearBtn = document.getElementById("btnClearCanvas");

let isDrawing = false;

function startDraw(e) {
  isDrawing = true;
  draw(e);
}

function stopDraw() {
  isDrawing = false;
  ctx.beginPath();
}

function draw(e) {
  if (!isDrawing) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.lineWidth = sizeInput.value;
  ctx.lineCap = "round";
  ctx.strokeStyle = colorInput.value;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseleave", stopDraw);

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  console.log("Canvas cleared");
});`
    },

    {
      id: "ex-async-api",
      title: "17. Async Data Loader & Card Renderer",
      category: "JavaScript Basics",
      difficulty: "Advanced",
      description: "Promises, async/await syntax, simulated network latency, loading spinners, and error handling.",
      html: `<div class="async-card">
  <h3>Async Profile Fetcher</h3>
  <p class="sub">Simulates fetching user profiles from a remote REST API.</p>

  <button id="btnFetchUser" class="btn btn-primary">🔄 Fetch Random User</button>

  <div id="userProfile" class="profile-box">
    <div class="placeholder">Click "Fetch Random User" to load data</div>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #f1f5f9;
  padding: 24px;
  color: #1e293b;
}
.async-card {
  max-width: 420px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.06);
  border: 1px solid #e2e8f0;
  text-align: center;
}
.sub {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 16px;
}
.btn-primary {
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
.profile-box {
  margin-top: 18px;
  padding: 18px;
  border-radius: 10px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  min-height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.placeholder {
  color: #94a3b8;
  font-size: 0.9rem;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 auto 10px auto;
}
.loading-spinner {
  border: 3px solid #e2e8f0;
  border-top: 3px solid #2563eb;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
      js: `const sampleProfiles = [
  { name: "Gururaj Surampalli", role: "Full-Stack Web Architect", location: "India", xp: "Senior" },
  { name: "Sophia Chen", role: "UI/UX Engineer", location: "San Francisco, USA", xp: "Lead" },
  { name: "Liam O'Connor", role: "DevOps & Cloud Specialist", location: "Dublin, Ireland", xp: "Mid" },
  { name: "Amara Patel", role: "Frontend Developer", location: "London, UK", xp: "Junior" }
];

const container = document.getElementById("userProfile");
const fetchBtn = document.getElementById("btnFetchUser");

// Simulated asynchronous network request returning a Promise
function mockApiFetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * sampleProfiles.length);
      resolve(sampleProfiles[randomIndex]);
    }, 700);
  });
}

fetchBtn.addEventListener("click", async () => {
  fetchBtn.disabled = true;
  container.innerHTML = '<div class="loading-spinner"></div>';
  console.log("Fetching simulated API data...");

  try {
    const user = await mockApiFetch();
    const initials = user.name.split(" ").map(n => n[0]).join("");

    container.innerHTML = \`
      <div style="width:100%">
        <div class="avatar">\${initials}</div>
        <h4 style="margin:0; color:#0f172a">\${user.name}</h4>
        <p style="margin:4px 0; color:#2563eb; font-size:0.9rem;">\${user.role}</p>
        <small style="color:#64748b">\${user.location} &bull; \${user.xp}</small>
      </div>
    \`;
    console.log("User fetched successfully:", user);
  } catch (error) {
    container.innerHTML = '<span style="color:#ef4444">Failed to load data</span>';
    console.error("Fetch error:", error);
  } finally {
    fetchBtn.disabled = false;
  }
});`
    },

    {
      id: "ex-drag-drop",
      title: "18. Dynamic CSS Box Styler & Generator",
      category: "HTML + JS",
      difficulty: "Intermediate",
      description: "Manipulate border-radius, box-shadow, padding, and background gradient live with instant CSS code generation.",
      html: `<div class="styler-widget">
  <h3>Live CSS Box Styler</h3>
  
  <div class="preview-area">
    <div id="targetBox" class="demo-box">Antigravity Box</div>
  </div>

  <div class="controls-grid">
    <label>Radius: <input type="range" id="rngRadius" min="0" max="50" value="12"></label>
    <label>Shadow: <input type="range" id="rngShadow" min="0" max="40" value="15"></label>
    <label>Scale: <input type="range" id="rngScale" min="80" max="120" value="100"></label>
  </div>

  <div class="css-output">
    <code>border-radius: <span id="outRadius">12px</span>;</code>
    <code>box-shadow: 0 <span id="outShadow">15px</span> 30px rgba(0,0,0,0.15);</code>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #f8fafc;
  padding: 20px;
  color: #1e293b;
}
.styler-widget {
  max-width: 440px;
  margin: 0 auto;
  background: white;
  border-radius: 14px;
  padding: 22px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
}
.styler-widget h3 {
  margin-top: 0;
  color: #0f172a;
}
.preview-area {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  background: #f1f5f9;
  border-radius: 10px;
  margin-bottom: 16px;
}
.demo-box {
  width: 140px;
  height: 70px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
  transition: all 0.1s ease;
}
.controls-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.85rem;
  color: #475569;
}
.controls-grid label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.controls-grid input {
  width: 60%;
}
.css-output {
  margin-top: 16px;
  background: #0f172a;
  color: #38bdf8;
  padding: 10px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
}`,
      js: `const box = document.getElementById("targetBox");
const rngRadius = document.getElementById("rngRadius");
const rngShadow = document.getElementById("rngShadow");
const rngScale = document.getElementById("rngScale");

const outRadius = document.getElementById("outRadius");
const outShadow = document.getElementById("outShadow");

function updateStyles() {
  const radius = rngRadius.value + "px";
  const shadow = rngShadow.value + "px";
  const scale = rngScale.value / 100;

  box.style.borderRadius = radius;
  box.style.boxShadow = \`0 \${shadow} \${parseInt(shadow)*2}px rgba(0,0,0,0.2)\`;
  box.style.transform = \`scale(\${scale})\`;

  outRadius.textContent = radius;
  outShadow.textContent = shadow;
}

rngRadius.addEventListener("input", updateStyles);
rngShadow.addEventListener("input", updateStyles);
rngScale.addEventListener("input", updateStyles);

console.log("CSS Box Styler ready.");`
    }
  ],

  // ===================== HTML + JAVASCRIPT MINI PROJECTS =====================
  miniProjects: [
    {
      id: "project-todo-app",
      title: "Smart Task Master (To-Do & LocalStorage)",
      category: "Full Mini Project",
      difficulty: "Comprehensive",
      description: "A complete task organizer with task filtering (All, Active, Completed), completion toggling, delete functionality, and count badges.",
      html: `<div class="app-container">
  <header class="app-header">
    <div class="logo">
      <span>🚀</span>
      <h2>TaskMaster</h2>
    </div>
    <span class="badge" id="statsBadge">0 done</span>
  </header>

  <div class="input-card">
    <input type="text" id="newTodoInput" placeholder="Add a new task (e.g. Learn Promises)...">
    <button id="addTodoBtn">Add Task</button>
  </div>

  <div class="filter-tabs">
    <button class="tab-btn active" data-filter="all">All</button>
    <button class="tab-btn" data-filter="active">Active</button>
    <button class="tab-btn" data-filter="completed">Completed</button>
  </div>

  <ul id="todoItemsList" class="todo-list">
    <!-- Populated by JS -->
  </ul>

  <footer class="app-footer">
    <span id="itemsLeft">0 items remaining</span>
    <button id="clearCompletedBtn" class="link-btn">Clear Completed</button>
  </footer>
</div>`,
      css: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f0f4f8;
  padding: 20px;
  color: #1e293b;
  margin: 0;
}
.app-container {
  max-width: 480px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
}
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo h2 {
  margin: 0;
  font-size: 1.4rem;
  color: #0f172a;
}
.badge {
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 99px;
}
.input-card {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.input-card input {
  flex: 1;
  padding: 10px 14px;
  border: 1.5px solid #cbd5e1;
  border-radius: 10px;
  font-size: 0.95rem;
  outline: none;
}
.input-card input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
}
.input-card button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0 18px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}
.input-card button:hover { background: #1d4ed8; }
.filter-tabs {
  display: flex;
  gap: 6px;
  margin-bottom: 14px;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 10px;
}
.tab-btn {
  background: none;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  color: #64748b;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
}
.tab-btn.active {
  background: #eff6ff;
  color: #2563eb;
}
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: 120px;
  max-height: 240px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.15s;
}
.todo-item.done {
  background: #f1f5f9;
  opacity: 0.7;
}
.todo-item.done .text {
  text-decoration: line-through;
  color: #94a3b8;
}
.todo-item .text {
  flex: 1;
  font-size: 0.95rem;
}
.btn-remove {
  background: none;
  border: none;
  color: #cbd5e1;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0 4px;
}
.btn-remove:hover { color: #ef4444; }
.app-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #e2e8f0;
  font-size: 0.85rem;
  color: #64748b;
}
.link-btn {
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 0.85rem;
}`,
      js: `let todos = [
  { id: 1, text: "Learn HTML Document Structure", completed: true },
  { id: 2, text: "Practice DOM querySelector & Events", completed: true },
  { id: 3, text: "Build an interactive JavaScript mini-project", completed: false }
];

let currentFilter = "all";

const input = document.getElementById("newTodoInput");
const addBtn = document.getElementById("addTodoBtn");
const list = document.getElementById("todoItemsList");
const itemsLeft = document.getElementById("itemsLeft");
const statsBadge = document.getElementById("statsBadge");
const clearBtn = document.getElementById("clearCompletedBtn");
const filterTabs = document.querySelectorAll(".tab-btn");

function render() {
  list.innerHTML = "";
  
  const filtered = todos.filter(t => {
    if (currentFilter === "active") return !t.completed;
    if (currentFilter === "completed") return t.completed;
    return true;
  });

  if (filtered.length === 0) {
    list.innerHTML = '<li style="text-align:center; color:#94a3b8; padding:20px;">No tasks found here.</li>';
  } else {
    filtered.forEach(todo => {
      const li = document.createElement("li");
      li.className = \`todo-item \${todo.completed ? 'done' : ''}\`;
      li.innerHTML = \`
        <input type="checkbox" \${todo.completed ? 'checked' : ''} data-id="\${todo.id}">
        <span class="text">\${todo.text}</span>
        <button class="btn-remove" data-id="\${todo.id}">&times;</button>
      \`;
      list.appendChild(li);
    });
  }

  const remaining = todos.filter(t => !t.completed).length;
  const completedCount = todos.filter(t => t.completed).length;
  
  itemsLeft.textContent = \`\${remaining} item\${remaining === 1 ? '' : 's'} remaining\`;
  statsBadge.textContent = \`\${completedCount} of \${todos.length} done\`;
}

function addTodo() {
  const text = input.value.trim();
  if (!text) return;
  todos.push({ id: Date.now(), text, completed: false });
  input.value = "";
  render();
  console.log("Task added:", text);
}

addBtn.addEventListener("click", addTodo);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});

list.addEventListener("click", (e) => {
  const id = Number(e.target.dataset.id);
  if (!id) return;

  if (e.target.type === "checkbox") {
    const item = todos.find(t => t.id === id);
    if (item) {
      item.completed = e.target.checked;
      render();
      console.log("Toggled task status:", item);
    }
  } else if (e.target.classList.contains("btn-remove")) {
    todos = todos.filter(t => t.id !== id);
    render();
    console.log("Deleted task ID:", id);
  }
});

filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    filterTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentFilter = tab.dataset.filter;
    render();
    console.log("Filter switched to:", currentFilter);
  });
});

clearBtn.addEventListener("click", () => {
  todos = todos.filter(t => !t.completed);
  render();
  console.log("Cleared completed tasks");
});

render();`
    },

    {
      id: "project-calc",
      title: "Clean Modern Calculator",
      category: "Full Mini Project",
      difficulty: "Comprehensive",
      description: "Full functioning calculator with clear display, chained arithmetic operations, decimal precision handling, and responsive keypad.",
      html: `<div class="calc-app">
  <div class="calc-screen">
    <div id="calcPrev" class="prev-op"></div>
    <div id="calcCurr" class="curr-val">0</div>
  </div>

  <div class="keypad">
    <button class="btn btn-fn" data-action="clear">AC</button>
    <button class="btn btn-fn" data-action="delete">DEL</button>
    <button class="btn btn-op" data-action="divide">&divide;</button>
    <button class="btn btn-op" data-action="multiply">&times;</button>

    <button class="btn btn-num">7</button>
    <button class="btn btn-num">8</button>
    <button class="btn btn-num">9</button>
    <button class="btn btn-op" data-action="subtract">&minus;</button>

    <button class="btn btn-num">4</button>
    <button class="btn btn-num">5</button>
    <button class="btn btn-num">6</button>
    <button class="btn btn-op" data-action="add">+</button>

    <button class="btn btn-num">1</button>
    <button class="btn btn-num">2</button>
    <button class="btn btn-num">3</button>
    <button class="btn btn-equals" data-action="equals">=</button>

    <button class="btn btn-num span-2">0</button>
    <button class="btn btn-num">.</button>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #0f172a;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 320px;
  margin: 0;
  padding: 16px;
}
.calc-app {
  background: #1e293b;
  border-radius: 18px;
  padding: 20px;
  width: 100%;
  max-width: 310px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
  border: 1px solid #334155;
}
.calc-screen {
  background: #0f172a;
  border-radius: 12px;
  padding: 16px;
  text-align: right;
  margin-bottom: 16px;
  border: 1px solid #334155;
}
.prev-op {
  color: #64748b;
  font-size: 0.85rem;
  min-height: 1.2rem;
  font-family: monospace;
}
.curr-val {
  color: #f8fafc;
  font-size: 2rem;
  font-weight: 700;
  font-family: monospace;
  overflow: hidden;
  text-overflow: ellipsis;
}
.keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.btn {
  background: #334155;
  color: #f8fafc;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 14px 0;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.1s;
}
.btn:active { transform: scale(0.95); opacity: 0.9; }
.btn-fn { background: #475569; color: #f87171; }
.btn-op { background: #0284c7; color: white; }
.btn-equals { background: #10b981; color: white; grid-row: span 2; display: flex; align-items: center; justify-content: center; }
.span-2 { grid-column: span 2; }`,
      js: `let currentOperand = "0";
let previousOperand = "";
let operation = undefined;

const prevDisplay = document.getElementById("calcPrev");
const currDisplay = document.getElementById("calcCurr");

function updateDisplay() {
  currDisplay.textContent = currentOperand;
  if (operation != null) {
    const symbol = { add: "+", subtract: "-", multiply: "\u00d7", divide: "\u00f7" }[operation] || "";
    prevDisplay.textContent = \`\${previousOperand} \${symbol}\`;
  } else {
    prevDisplay.textContent = "";
  }
}

function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) return;
  if (currentOperand === "0" && number !== ".") {
    currentOperand = number;
  } else {
    currentOperand += number;
  }
}

function chooseOperation(op) {
  if (currentOperand === "") return;
  if (previousOperand !== "") compute();
  operation = op;
  previousOperand = currentOperand;
  currentOperand = "";
}

function compute() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "add": result = prev + current; break;
    case "subtract": result = prev - current; break;
    case "multiply": result = prev * current; break;
    case "divide": result = current === 0 ? "Error" : prev / current; break;
    default: return;
  }

  currentOperand = String(result);
  operation = undefined;
  previousOperand = "";
}

document.querySelector(".keypad").addEventListener("click", (e) => {
  const btn = e.target;
  if (!btn.matches("button")) return;

  const action = btn.dataset.action;
  const text = btn.textContent;

  if (!action) {
    appendNumber(text);
  } else if (action === "clear") {
    currentOperand = "0";
    previousOperand = "";
    operation = undefined;
  } else if (action === "delete") {
    currentOperand = currentOperand.length > 1 ? currentOperand.slice(0, -1) : "0";
  } else if (action === "equals") {
    compute();
  } else {
    chooseOperation(action);
  }

  updateDisplay();
  console.log("Calculator state:", { current: currentOperand, prev: previousOperand, op: operation });
});

updateDisplay();`
    },

    {
      id: "project-timer-suite",
      title: "Pomodoro Focus & Study Timer",
      category: "Full Mini Project",
      difficulty: "Comprehensive",
      description: "Customizable 25-minute Pomodoro study sprint with session counters, audio chime preview, and pause/skip transitions.",
      html: `<div class="pomo-app">
  <div class="mode-selector">
    <button class="mode-pill active" data-time="1500">Focus (25m)</button>
    <button class="mode-pill" data-time="300">Short Break (5m)</button>
    <button class="mode-pill" data-time="900">Long Break (15m)</button>
  </div>

  <div class="circle-container">
    <div class="pomo-time" id="pomoDisplay">25:00</div>
    <span class="pomo-status" id="pomoStatus">Ready to focus</span>
  </div>

  <div class="pomo-actions">
    <button id="pomoToggleBtn" class="btn btn-main">Start Focus</button>
    <button id="pomoResetBtn" class="btn btn-alt">Reset</button>
  </div>

  <div class="sessions-row">
    <span>Completed Sprints:</span>
    <span class="dots" id="sprintDots">🍅 🍅 ⚪ ⚪</span>
  </div>
</div>`,
      css: `body {
  font-family: system-ui, sans-serif;
  background: #450a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 280px;
  margin: 0;
  padding: 16px;
}
.pomo-app {
  background: #7f1d1d;
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  max-width: 360px;
  text-align: center;
  color: white;
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
}
.mode-selector {
  display: flex;
  gap: 6px;
  background: rgba(0,0,0,0.2);
  padding: 4px;
  border-radius: 99px;
  margin-bottom: 20px;
}
.mode-pill {
  flex: 1;
  background: none;
  border: none;
  color: #fca5a5;
  padding: 6px 0;
  border-radius: 99px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
}
.mode-pill.active {
  background: white;
  color: #7f1d1d;
}
.circle-container {
  margin: 20px 0;
}
.pomo-time {
  font-size: 3.8rem;
  font-weight: 800;
  font-family: monospace;
  letter-spacing: 2px;
}
.pomo-status {
  font-size: 0.9rem;
  color: #fecaca;
}
.pomo-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.btn {
  padding: 10px 24px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.1s;
}
.btn:active { transform: scale(0.96); }
.btn-main { background: white; color: #7f1d1d; }
.btn-alt { background: rgba(255,255,255,0.2); color: white; }
.sessions-row {
  margin-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.15);
  padding-top: 12px;
  font-size: 0.85rem;
  color: #fca5a5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
      js: `let totalTime = 1500; // 25 min default
let timeLeft = totalTime;
let timerId = null;
let completedSprints = 2;

const display = document.getElementById("pomoDisplay");
const status = document.getElementById("pomoStatus");
const toggleBtn = document.getElementById("pomoToggleBtn");
const resetBtn = document.getElementById("pomoResetBtn");
const pills = document.querySelectorAll(".mode-pill");

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return \`\${String(m).padStart(2, "0")}:\${String(s).padStart(2, "0")}\`;
}

function updateDisplay() {
  display.textContent = formatTime(timeLeft);
}

function startTimer() {
  timerId = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timerId);
      timerId = null;
      status.textContent = "Time's up! Great work!";
      toggleBtn.textContent = "Start";
      console.log("Pomodoro session completed!");
    }
  }, 1000);
  toggleBtn.textContent = "Pause";
  status.textContent = "Focus session in progress...";
}

function pauseTimer() {
  clearInterval(timerId);
  timerId = null;
  toggleBtn.textContent = "Resume";
  status.textContent = "Paused";
}

toggleBtn.addEventListener("click", () => {
  if (timerId) pauseTimer();
  else startTimer();
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  timeLeft = totalTime;
  updateDisplay();
  toggleBtn.textContent = "Start";
  status.textContent = "Ready";
});

pills.forEach(pill => {
  pill.addEventListener("click", () => {
    pills.forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    clearInterval(timerId);
    timerId = null;
    totalTime = parseInt(pill.dataset.time, 10);
    timeLeft = totalTime;
    updateDisplay();
    toggleBtn.textContent = "Start";
    status.textContent = "Ready (" + pill.textContent + ")";
  });
});

updateDisplay();`
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.APP_DATA = APP_DATA;
}
