---
title: DeepSite Project
colorFrom: green
colorTo: red
sdk: static
emoji: 🔧
tags:
  - deepsite-v4
---

# DeepSite Project

This project has been created with [DeepSite](https://deepsite.hf.co) AI Vibe Coding.---
title: DeepSite Project
ColorFrom: Green
ColorTo: Red
SDK: Static
Emojis: 🔧
Tags:
- Deepsite-V4
---

# DeepSite Project

This project has been created with [DeepSite](https://deepsite.hf.co) AI Vibe Coding. 

# 🚀 English Online Mock Test Platform
This project is a professional English online placement test platform designed to help students practice skills ranging from Vocabulary and Grammar to Reading Comprehension through a modern, user-friendly interface.
## 📋 Table of Contents
 * Key Features
 * Project Structure
 * Technologies Used
 * Installation Guide
 * Exam Data Structure
 * Operational Logic
## ✨ Key Features
 * **Comprehensive 35-Question Bank:** Divided into specialized sections (Vocabulary, Grammar, Fill in the Blanks, etc.).
 * **Modern Dark Mode UI:** Features a professional color palette optimized for long study sessions without eye strain.
 * **Seamless Page Transitions:** Built as a Single Page Application (SPA), allowing users to switch between parts without reloading the page.
 * **Smart Image Management:** Uses a photoFiles array to efficiently manage local or GitHub-hosted JPEG images.
 * **Fully Responsive:** Optimized for a flawless experience across Desktops, Tablets, and Mobile devices.
## 📁 Project Structure
```text
├── index.html          # Core structure and UI (Includes the robust showPage logic)
├── style.css           # Custom CSS styling and Dark Mode effects
├── script.js          # Exam database and image array configuration
├── image1.jpeg         # Exercise images (Sequenced from image1 to image10)
└── README.md           # Project documentation

```
## 🛠 Technologies Used
 * **HTML5:** Semantic structure for web content.
 * **CSS3:** Flexbox, Grid, Hover effects, and Dark Theme styling.
 * **JavaScript (ES6):** Handles dynamic rendering, scoring logic, and navigation.
 * **Font Awesome:** Professional iconography for navigation and UI elements.
## ⚙️ Installation Guide
 1. Download or clone the source code to your local machine.
 2. Ensure all .jpeg image files are located in the same directory as index.html.
 3. Open index.html using any modern web browser (Chrome, Edge, or Firefox).
 4. Press **F12** -> **Console** to monitor data loading and debug if necessary.
## 📊 Exam Data Structure
The exam system is structured as a JavaScript Object for easy scalability:
 * **Part 1: Vocabulary (Look & Choose):** Visual-based questions with image prompts.
 * **Parts 2-4:** Grammar and sentence completion exercises.
 * **Part 5: Fill in the Blanks:** Advanced context-based completion.
## 💡 Operational Logic
This project implements a **"Zero-Fail ShowPage"** mechanism:
 * The showPage() navigation function is embedded directly within index.html. This ensures that UI transitions remain functional even if the external data file (script.js) encounters syntax issues.
 * The photoFiles array management allows for bulk updates of image paths, making the platform easy to maintain and update.
### 👨‍💻 Author
**Trương Thị Huyền Trang (Tracy)
