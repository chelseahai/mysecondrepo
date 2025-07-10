# Introduction to building a website
## HTML, CSS and JavaScript

Welcome to the world of web development! This tutorial will teach you the fundamentals of building websites using the three core technologies: HTML, CSS, and JavaScript. We'll learn how these languages work together to create modern, interactive websites.

---

### 1  The Role of HTML, CSS and JavaScript

#### **HTML (HyperText Markup Language) - The Structure**
HTML provides the **foundation and framework** for your website. It defines the basic structure and content.

**What HTML does:**
- Defines the structure of your webpage
- Contains all the text content
- Creates headings, paragraphs, lists, and links
- Adds images, forms, and other elements
- Provides meaning and organization to your content

**Key HTML Elements from our website:**
```html
<!-- Basic HTML structure -->
<!DOCTYPE html>                    <!-- Declares this is an HTML5 document -->
<html lang="en">                   <!-- Root element, lang="en" specifies English language -->
<head>                             <!-- Contains metadata about the page (not visible) -->
  <meta charset="UTF-8">           <!-- Sets character encoding for special characters -->
  <title>Module 1</title>          <!-- Title that appears in browser tab -->
  <link rel="stylesheet" href="style.css">  <!-- Links to our CSS file for styling -->
</head>
<body>                             <!-- Contains all visible content on the page -->
  <!-- Content goes here -->       <!-- Placeholder comment for where content would be -->
  <script src="script.js"></script>  <!-- Links to our JavaScript file for interactivity -->
</body>
</html>

<!-- Interactive elements with IDs for JavaScript -->
<button id="demoButton">Click Me!</button>  <!-- Clickable button with unique ID for JavaScript -->
<div id="messageDisplay"></div>            <!-- Empty container div with ID for JavaScript to fill -->
```

#### **CSS (Cascading Style Sheets) - The Design**
CSS handles the **styling and visual presentation** of your website. It controls how everything looks and is arranged.

**What CSS does:**
- Controls colors, fonts, and text styling
- Arranges elements on the page (layout)
- Adds spacing, borders, and backgrounds
- Makes websites responsive (work on different screen sizes)
- Creates animations and visual effects

**Key CSS Properties from our website:**
```css
/* Basic styling for the page */
body {                              /* Target the entire page body */
  font-family: 'Roboto', sans-serif;  /* Set the font to Roboto, with sans-serif as backup */
  background-color: #ffffff;          /* Set background color to white */
  color: #111;                        /* Set text color to dark gray (almost black) */
  margin: 0;                          /* Remove default spacing around the body */
}

/* Interactive button styling */
button {                             /* Target all button elements */
  background-color: #111;             /* Set button background to dark gray */
  color: white;                       /* Set button text color to white */
  padding: 12px 24px;                 /* Add 12px top/bottom, 24px left/right spacing inside */
  cursor: pointer;                    /* Change mouse cursor to hand when hovering over button */
  transition: background-color 0.3s;  /* Smooth color change animation (0.3 seconds) */
}

/* Hover effect for buttons */
button:hover {                       /* Apply styles when user hovers over button */
  background-color: #333;             /* Change background to lighter gray on hover */
}
```

#### **JavaScript - The Interactivity**
JavaScript adds **interactivity and dynamic behavior** to your website. It makes things happen when users interact with your page.

**What JavaScript does:**
- Responds to user actions (clicks, typing, etc.)
- Changes content on the page without reloading
- Validates forms and user input
- Creates animations and effects
- Connects to databases and external services
- Makes websites dynamic and interactive

**Key JavaScript Concepts from our website:**
```javascript
// Wait for the page to load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {  // Listen for when HTML is fully loaded
    
    // Find HTML elements using their IDs
    const button = document.getElementById('demoButton');      // Get the button element by its ID
    const messageArea = document.getElementById('messageDisplay');  // Get the message area element by its ID
    
    // Add click event listener to the button
    button.addEventListener('click', function() {              // Listen for clicks on the button
        // Get current time and create a message
        const currentTime = new Date().toLocaleTimeString();   // Get current time as a string
        const message = 'Hello! You clicked the button at ' + currentTime;  // Create message with time
        
        // Display the message in our HTML
        messageArea.textContent = message;                     // Put the message in the HTML element
        
        // Change button text temporarily
        button.textContent = 'Thanks for clicking!';           // Change what the button says
    });
});
```

#### **How They Work Together**
1. **HTML** provides the structure and content (buttons, text areas)
2. **CSS** makes it look good and organized (colors, spacing, hover effects)
3. **JavaScript** makes it interactive and dynamic (responds to clicks, changes content)

### For additional information on the syntax of this languages go to: https://www.w3schools.com/html/default.asp
---

### 2 Exercise

#### Step 1: Chat GPT Demo

Use the following prompt in chat GPT or a similar AI Chatbot:

“Construct a basic website containing an index.html file, a style.css file and a script.js file.
Make the website a basic demonstration of how these files work together.
Include comments and explanations for each line of code.
Use a minimalist style in black and white for the website design.
Write code that is understandable for a beginner.”

#### Step 2: Download VS Code

![Figma_zsQkizR17R](https://github.com/user-attachments/assets/3d61c718-56c2-4d4b-a653-d1bb114a6395)

#### Step 3: Open the Folder with the Repo

![Figma_x6EaTQN0s2](https://github.com/user-attachments/assets/3f58c888-1f8e-4ffc-b967-6ddab18b2e68)

![Figma_o97hvUlXRF](https://github.com/user-attachments/assets/0b48ab05-3806-44bd-b855-3a8e56bf46e4)

#### Step 4: Create an index.html, style.css, and a script.js file

![Figma_3NnVxDqmuk](https://github.com/user-attachments/assets/0a0c17c2-5e96-461a-8b3a-2c10cbe3156a)

![Figma_UdMcTk7KIW](https://github.com/user-attachments/assets/5c634928-a461-4763-b93f-99301047f4f9)

![Figma_kLAfOavzeF](https://github.com/user-attachments/assets/34cad656-0631-4d63-8cdf-665cdbbd6374)

![Figma_x6QazvozHl](https://github.com/user-attachments/assets/d17a6f5a-38ed-4fc9-bc6d-2a7718fb42c6)

#### Step 5: Run the index.html locally

![Figma_nMBZBTFQPF](https://github.com/user-attachments/assets/46c43c13-6345-4038-9f50-742f7da0c9b0)

![Figma_t3bfaumDXc](https://github.com/user-attachments/assets/75b3ec98-d3fc-45aa-914b-9f3bce9029d5)

#### Step 6: Commit and push your changes

![Figma_ZMOd2jPVAK](https://github.com/user-attachments/assets/b165aa12-3718-4d6e-b5f8-958972d6d714)

![Figma_XjjK7TLLM3](https://github.com/user-attachments/assets/34a7f9dc-6efd-4be2-b68f-54aae5880a7b)

#### Step 7: Review your GitHub page that now should have the website live online

![Figma_ofTv65jST4](https://github.com/user-attachments/assets/9c8b8642-7cd2-4cb6-b26c-8a07cfa7cba5)

![Figma_bagt4aQODv](https://github.com/user-attachments/assets/b5a1aab2-f629-47f5-a3cc-445645c0e9ef)

![Figma_t3bfaumDXc](https://github.com/user-attachments/assets/36c58e2c-66f8-4e7f-9d4e-1e000b3561bc)

---

### 3  Boilerplate code (using separate files)

While it's possible to put HTML, CSS, and JavaScript all in one file, we'll use **separate files** for better organization and learning. This approach helps you understand the role of each language clearly.

#### **Why Separate Files?**
- **Clearer organization**: Each file has one specific purpose
- **Easier to maintain**: Changes to styling don't affect structure
- **Better collaboration**: Different people can work on different files
- **Professional practice**: This is how real websites are built
- **Easier debugging**: Problems are easier to find and fix

#### **File Structure**
```
Building a Website/
├── index.html      (HTML structure and content)
├── style.css       (CSS styling and layout)
├── script.js       (JavaScript functionality)
└── README.md       (This tutorial)
```

#### **HTML File Structure (index.html)**
```html
<!DOCTYPE html>                      <!-- Declares this is an HTML5 document -->
<html lang="en">                     <!-- Root element, lang="en" specifies English language -->
<head>                               <!-- Contains metadata about the page (not visible) -->
  <meta charset="UTF-8">             <!-- Sets character encoding for special characters -->
  <title>Module 1</title>            <!-- Title that appears in browser tab -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">  <!-- Load Google Fonts -->
  <link rel="stylesheet" href="style.css">  <!-- Links to our CSS file for styling -->
</head>
<body>                               <!-- Contains all visible content on the page -->
  <header>                           <!-- Header section for navigation/branding -->
    <div class="left">Columbia GSAPP</div>  <!-- Left side of header with institution name -->
    <div class="center">             <!-- Center section of header -->
      Computational Design Practices<br>    <!-- Main title with line break -->
      <span>Project Archive</span>   <!-- Subtitle in smaller text -->
    </div>
    <div class="right"><a href="#">About</a></div>  <!-- Right side with navigation link -->
  </header>

  <main>                             <!-- Main content area of the page -->
    <div class="project-meta">2025</div>     <!-- Project year/date -->
    <div class="project-title">Project Title</div>  <!-- Main project title -->
    <div class="project-subtitle">Student Name</div>  <!-- Student name as subtitle -->
    
    <!-- Content sections -->
    <div class="section-title">Interactive Demo</div>  <!-- Section heading -->
    <p>Click the button below to see JavaScript in action:</p>  <!-- Instructions for user -->
    <button id="demoButton">Click Me!</button>  <!-- Interactive button with unique ID -->
    <div id="messageDisplay"></div>  <!-- Empty container for JavaScript to fill with messages -->
  </main>
  
  <script src="script.js"></script>  <!-- Links to our JavaScript file for interactivity -->
</body>
</html>
```

**Key HTML Concepts:**
- **Document structure**: DOCTYPE, html, head, body
- **Linking files**: CSS with `<link>`, JavaScript with `<script>`
- **Semantic elements**: header, main, div, p, button
- **IDs and classes**: `id="demoButton"` for JavaScript, `class="section-title"` for CSS

#### **CSS File Structure (style.css)**
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');  /* Import Google Fonts */

body {                              /* Target the entire page body */
  font-family: 'Roboto', sans-serif;  /* Set the font to Roboto, with sans-serif as backup */
  background-color: #ffffff;          /* Set background color to white */
  color: #111;                        /* Set text color to dark gray (almost black) */
  margin: 0;                          /* Remove default spacing around the body */
  padding: 0;                         /* Remove default internal spacing */
}

main {                               /* Target the main content area */
  max-width: 800px;                   /* Limit the maximum width to 800 pixels */
  margin: 60px auto;                  /* Add 60px top/bottom margin, center horizontally */
  padding: 0 20px;                    /* Add 20px left/right padding, no top/bottom */
}

.section-title {                      /* Target elements with class="section-title" */
  font-weight: 700;                   /* Make the text bold */
  text-transform: uppercase;          /* Convert text to all capital letters */
  margin-top: 40px;                   /* Add 40 pixels of space above this element */
  margin-bottom: 12px;                /* Add 12 pixels of space below this element */
  font-size: 14px;                    /* Set font size to 14 pixels */
}

button {                              /* Target all button elements */
  background-color: #111;             /* Set button background to dark gray */
  color: white;                       /* Set button text color to white */
  border: none;                       /* Remove the default button border */
  padding: 12px 24px;                 /* Add 12px top/bottom, 24px left/right spacing inside */
  cursor: pointer;                    /* Change mouse cursor to hand when hovering over button */
  transition: background-color 0.3s;  /* Smooth color change animation (0.3 seconds) */
}

button:hover {                        /* Apply styles when user hovers over button */
  background-color: #333;             /* Change background to lighter gray on hover */
}

#messageDisplay {                     /* Target element with id="messageDisplay" */
  margin-top: 20px;                   /* Add 20 pixels of space above this element */
  padding: 16px;                      /* Add 16 pixels of spacing inside the element */
  border: 1px solid #ccc;             /* Add a light gray border around the element */
  background-color: #f9f9f9;          /* Set background color to very light gray */
  min-height: 20px;                   /* Set minimum height so the area is visible even when empty */
}
```

**Key CSS Concepts:**
- **Selectors**: Element selectors (`body`), class selectors (`.section-title`), ID selectors (`#messageDisplay`)
- **Properties**: Colors, fonts, spacing, layout
- **Units**: Pixels (px), percentages (%), viewport units (vw, vh)
- **Pseudo-classes**: `:hover` for interactive effects
- **Transitions**: Smooth animations between states

#### **JavaScript File Structure (script.js)**
```javascript
document.addEventListener('DOMContentLoaded', function() {  // Wait for HTML to fully load before running code
    console.log('JavaScript is now running!');              // Print message to browser console for debugging
    
    // Find HTML elements by their IDs
    const button = document.getElementById('demoButton');      // Get the button element by its ID
    const messageArea = document.getElementById('messageDisplay');  // Get the message area element by its ID
    
    // Add click event listener to the button
    button.addEventListener('click', function() {              // Listen for clicks on the button
        console.log('Button was clicked!');                    // Print message to console when button is clicked
        
        // Create a message with current time
        const currentTime = new Date().toLocaleTimeString();   // Get current time as a readable string
        const message = 'Hello! You clicked the button at ' + currentTime;  // Create message combining text and time
        
        // Display the message in our HTML
        messageArea.textContent = message;                     // Put the message text into the HTML element
        
        // Change button text temporarily
        button.textContent = 'Thanks for clicking!';           // Change what the button displays
        
        // Reset button text after 2 seconds
        setTimeout(function() {                                // Run a function after a delay
            button.textContent = 'Click Me!';                  // Change button text back to original
        }, 2000);                                              // Wait 2000 milliseconds (2 seconds)
    });
});
```

**Key JavaScript Concepts:**
- **Event listeners**: Responding to user actions (`click`, `DOMContentLoaded`)
- **DOM manipulation**: Finding and changing HTML elements
- **Functions**: Reusable blocks of code
- **Variables**: Storing data (`const`, `let`)
- **Timing**: `setTimeout` for delayed actions
- **Console logging**: Debugging and development tools

#### **How the Files Connect**
1. **HTML** (`index.html`) contains the structure and links to CSS and JavaScript
2. **CSS** (`style.css`) styles the HTML elements using selectors
3. **JavaScript** (`script.js`) finds HTML elements by ID and makes them interactive

**The Connection Points:**
- HTML links CSS: `<link rel="stylesheet" href="style.css">`
- HTML links JavaScript: `<script src="script.js"></script>`
- CSS targets HTML: `#demoButton`, `.section-title`
- JavaScript finds HTML: `document.getElementById('demoButton')`

#### **Complete Working Website**
The source code files (`index.html`, `style.css`, `script.js`) can be found in the `Building a Website` directory.
