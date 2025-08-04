---

<p align="center" width="100%">
    <img height="400" width="600" src="https://github.com/vikkirkobane/my-portfolio-website/blob/94d5bd7259e845c1b0295f63ea76b40d5e6d0865/logo.png">
</p>

---

# 🚀 Developer Portfolio

Welcome to my professional portfolio – a dynamic, full-stack platform that showcases my journey, skills, and project highlights as a software engineer. This site is designed not just as a portfolio but as an intelligent assistant to help you explore what I do best.

📍 **Live Site**: [victor-chogo-portfolio.com](https://my-portfolio-website-mopj.onrender.com)
📂 **Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, OpenAI API, Gemini, MongoDB, Express, Flutter, Solidity, Vercel AI SDK, Google AI Studio, N8N, Make and Zapier.

---

## 🔥 Key Features

- **AI Chatbot Assistant** (OpenAI & Gemini):
  Engage with a smart chatbot trained specifically on the content of my portfolio. Built using N8N and Google AI Studio, it understands only what's in the app—no off-topic noise. Supports code snippets, markdown, and real-time streaming output.

- **Chatbot UI Enhancements**:
  - Scroll-activated chat icon using Framer Motion
  - Modal-based chat interface with Markdown support (via `react-markdown`, `remark-gfm`)
  - Error boundary handling and message state management

- **Full-Stack Projects**:
  Browse my top projects built with technologies like the MERN stack, Flutter, Solidity (DApps), and more.

- **Blog Integration**:
  Automatically fetches my latest articles from dev.to to keep content fresh and relevant.

- **Responsive & Accessible Design**:
  Mobile-first, fast-loading, accessible UI with Tailwind CSS.

---

## 🧠 Built For

- Clients and recruiters seeking skilled, AI-savvy developers
- Collaborators looking for full-stack engineers with experience in modern frameworks
- Fellow developers exploring clean, scalable portfolio templates

---

## 🛠️ Local Setup

1.  **Clone the Repository**:

    ```bash
    git clone https://github.com/vikkirkobane/my-portfolio-website
    cd my-portfolio-website
    ```

2.  **Install Dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run Development Server**:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Deployment

This site is fully deployable to platforms like Vercel, Render or Netlify.

**Vercel** is recommended for Next.js and AI SDK optimization.

Be sure to set your `.env.local` variables before deploying.

---

## 🧩 Customization

-   Edit the content in the `utils/data` directory to update:
    -   Personal info
    -   Project descriptions
    -   Blog sources
    -   Contact details

-   Update the n8n chat webhook in  `app/component/ChatWidget.jsx` to customize the chatbot in your n8n account.

---

## 🧠 AI Integration Summary

| Feature                 | Tech Used                               |
| :---------------------- | :-------------------------------------- |
| Chatbot Logic           | N8N AI Agent               |
| LLM APIs                | OpenAI, Gemini                          |
| Response Streaming      | Server-side API routes                  |
| Prompt Engineering      | Strict context-limited system messages  |
| Voice, Markdown & Code  | `react-markdown`, `remark-gfm`          |
| Formatting & UI         | Tailwind, Framer Motion, `lottie-react`  |

---

## 📦 Packages & Tools

| Tool          | Purpose                                   |
| :------------ | :---------------------------------------- |
| Next.js 15    | App framework                             |
| TypeScript    | Type safety                               |
| Tailwind CSS  | Styling                                   |
| lottie-react     | UI animations                             |
| Framer Motion | Animations                                |
| N8N | AI Agent integration                            |
| react-markdown | Markdown rendering                        |
| Google AI Studio | LLM APIs                                  |
| MongoDB       | Database                                  |
| Flutter       | Mobile/frontend (for selected projects)   |
| Solidity      | Smart contracts (DApps)                   |

---

## 📁 File Structure

This is a high-level overview of the project's directory structure.

```bash
├── README.md                 # The main README file for this project.
├── app                       # The root directory for the Next.js application.
│   ├── api                   # API routes for server-side logic (e.g., handling chat requests).
│   ├── assets                # Stores miscellaneous assets like fonts or general files.
│   ├── blog                  # The directory for blog-related pages and content.
│   ├── components            # Reusable React components used throughout the application.
│   ├── css                   # Global stylesheets, likely containing a main CSS file.
│   ├── favicon.ico           # The favicon for the website.
│   ├── layout.js             # The main layout file that wraps the application's pages.
│   ├── not-found.jsx         # A custom 404 page for handling unknown routes.
│   └── page.js               # The main home page of the application.
├── jsconfig.json             # Configuration file for JavaScript settings.
├── next.config.js            # Next.js configuration file.
├── package-lock.json         # Records the exact version of each dependency.
├── package.json              # Defines project metadata and lists all dependencies.
├── postcss.config.js         # Configuration for PostCSS, used by Tailwind CSS.
├── public                    # Static assets like images that are served directly.
│   ├── blur-23.svg           # A background blur effect SVG.
│   ├── card.png              # An image likely used for a card component.
│   ├── grid.svg              # A background grid pattern.
│   ├── hero.svg              # An SVG for the hero section of a page.
│   ├── image                 # A directory for various image files.
│   ├── next.svg              # The Next.js logo.
│   ├── png                   # A directory for PNG images.
│   ├── profile.png           # The main profile image.
│   ├── section.svg           # An SVG used for a page section.
│   ├── top-bg.svg            # A background SVG for the top of a page.
│   └── vercel.svg            # The Vercel logo.
├── tailwind.config.js        # Configuration file for Tailwind CSS.
└── utils                     # Helper functions and data used across the application.
    ├── check-email.js        # A utility function for validating email addresses.
    ├── data                  # Contains all the portfolio data (e.g., projects, contacts).
    ├── skill-image.js        # A utility function to get skill-related images.
    └── time-converter.js     # A utility function for converting time.
```


## 🤔 What does the portfolio website offer?

 * AI Chat Assistant: The core feature that interacts with users to provide information about my projects, skills, and experience.
 * Next.js App Router: The project utilizes the modern Next.js App Router for server-side rendering and efficient routing.
 * Modular Components: The components folder houses reusable UI elements, ensuring a clean and maintainable codebase.
 * Static Asset Management: The public directory is used for all static images and SVGs, which are optimized for delivery.
 * Centralized Data: The utils/data folder stores all content, making it easy to manage and update information.
This structure provides a robust and scalable foundation for a modern portfolio website.


---

## 🤝 Get in Touch

If you're looking for a committed, innovative, and highly skilled software engineer for your next project or team—let's connect. I'm open to freelance work, collaborative builds, and full-time opportunities aligned with impact-driven tech.

📩 victorchogo37@gmail.com
🌐 [victor-chogo-portfolio.com](https://my-portfolio-website-mopj.onrender.com)
🐱 [GitHub](https://github.com/vikkirkobane)
🔗 [LinkedIn](https://www.linkedin.com/in/victor-chogo)

---

> Built with purpose, powered by AI, and crafted for impact.
