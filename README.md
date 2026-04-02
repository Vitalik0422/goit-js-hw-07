# DOM Fundamentals — Practice Tasks

A set of five hands-on exercises covering core DOM manipulation, event handling, and dynamic rendering in vanilla JavaScript.

---

## Task 1 — Category List Traversal

**Goal:** Traverse a nested HTML list and extract structured data using DOM properties and methods.

Given a `<ul id="categories">` containing three `<li class="item">` elements (each with an `<h2>` title and a nested `<ul>` of items), the script:

- Counts and logs the total number of categories (`li.item` elements).
- Iterates over each category using `forEach()` and logs its heading text (`<h2>`) and the count of nested `<li>` elements.

**Key concepts:** `querySelectorAll`, `children`, `textContent`, `forEach`.

---

## Task 2 — Image Gallery

**Goal:** Dynamically build and render an image gallery from a data array in a single DOM operation.

Given an array of six image objects (each with `url` and `alt` fields) and an empty `<ul class="gallery">`, the script:

- Creates an `<li><img></li>` element pair for each item using either `document.createElement()` + `append()` or template literals with `insertAdjacentHTML()`.
- Inserts all gallery items into the DOM in **one operation**.
- Applies minimal Flexbox styling via CSS classes.

**Key concepts:** `createElement`, `append`, `insertAdjacentHTML`, batch DOM insertion, Flexbox layout.

---

## Task 3 — Live Name Greeting

**Goal:** Update a greeting in real time as the user types into an input field.

Given an `<input id="name-input">` and a `<span id="name-output">`, the script:

- Listens for the `input` event on the text field.
- Trims whitespace from the current value and injects it into the span.
- Falls back to `"Anonymous"` when the input is empty or contains only spaces.

**Key concepts:** `addEventListener('input')`, `trim()`, conditional rendering.

---

## Task 4 — Login Form Validation

**Goal:** Handle form submission with client-side validation — no page reload, no `required` attributes.

Given a `.login-form` with email and password fields, the script:

- Prevents the default browser reload on `submit`.
- Checks that both fields are filled; shows an `alert` if either is empty.
- When valid, collects trimmed field values into an object (`{ email, password }`), logs it to the console, and resets the form.

**Key concepts:** `preventDefault`, `form.elements`, `reset()`, custom JS validation.

---

## Task 5 — Random Background Color

**Goal:** Change the page background to a random hex color on button click and display the color value.

Given a `<button class="change-color">` and a `<span class="color">`, the script:

- Generates a random hex color via `getRandomHexColor()`.
- Applies it as an inline `background` style on `<body>`.
- Writes the same color value as text content into the span.

> Note: the hex value is applied to `<body>`, but the browser stores it internally as `rgb(...)` — this is expected behavior.

**Key concepts:** `addEventListener('click')`, `document.body.style`, `textContent`, hex color generation.

---

## Tech Stack

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript (ES6+)
