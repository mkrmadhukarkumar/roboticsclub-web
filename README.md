# 🤖 Robotics Club Website

This is the demo website for the **Robotics Club NITP**, showcasing our projects, activities, and opportunities to get involved in robotics and STEM.  
The website is hosted using **GitHub Pages**.

🔗 **Live Website:**  
https://mkrmadhukarkumar.github.io/roboticsclub-web/

---

## 🔤 Team Name : **CYBERNAUTS**

## 👥 Team Members

| Name | Role | GitHub |
|------|------|--------|
| **Onkar Kumar** | Team Lead / Content | https://github.com/onkarrpy2403-ux |
| **Madhukar Kumar** | Full Stack Developer / Documentation | https://github.com/mkrmadhukarkumar |
| **Tanmayee Biswal** | Frontend Developer / Content | https://github.com/RT-Biswal257 |
| **Anukriti Dinesh Rai** | UI/UX Designer | N/A |

---

## 🛠️ Technology Stack & Reasons

### Technologies Used

#### Frontend
- **HTML5** - Structure and Semantic layout
- **React.js** – Component-based UI development
- **Tailwind CSS** – Utility-first CSS framework for responsive design
- **React Icons** – Lightweight and scalable icon library

#### Tooling & Deployment
- **Vite** – Fast development and build tool
- **GitHub Pages** – Free static site hosting
- **Git & GitHub** – Version control and collaboration

### Reasons for Choosing These Technologies

- **React.js:**  
  Enables reusable components, better state management, and scalability.

- **Tailwind CSS:**  
  Faster UI development with consistent styling and no CSS bloat.

- **React Icons:**  
  Easy-to-use, customizable icons without external CDN dependency.

- **Vite:**  
  Lightning-fast dev server and optimized production builds.

- **GitHub Pages:**  
  Simple, free, and reliable hosting for frontend projects.
  
- **Cost-Effective:**  
  GitHub Pages provides free hosting, perfect for a static website.

- **Community & Ecosystem:**  
  Large communities, extensive documentation, and easy integrations.

- **Performance:**  
  Static sites load faster and are ideal for portfolio-style websites.

---

## 📈 Future Scalability & Maintainability

- **Component-Based Architecture:**  
  Easy to add new pages, sections, and features.

- **Responsive Design:**  
  Fully mobile-first and works across all screen sizes.

- **Extensible Structure:**  
  Can integrate APIs, CMS, authentication, or backend services in the future.

- **Team Collaboration:**  
  GitHub workflow supports multiple contributors via branches and pull requests.

- **Performance Optimized:**  
  Vite build, lazy loading, and optimized assets ensure fast load times.

- **Extensibility:**  
  The project can be extended with:
  - Jekyll (for blogs or news updates)
  - API integrations
  - Custom Bootstrap themes or plugins

- **Performance Optimization:**  
  Minified assets, optimized images, and lazy loading ensure fast performance as content grows.

---

## 🌐 External Resources & Assets

- **React:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/
- **React Icons:** https://react-icons.github.io/react-icons/

### Images

- Most of the images are taken from official Robotics Club NITP website

### Fonts & Services

- uses Default fonts **Arial, Helvetica, sans-serif** globally to all 

📜 All resources used are **free or open-source**.

---

## ⚙️ Setup & Installation Guide

### Prerequisites

- GitHub account  
- Basic knowledge of HTML, CSS, and JavaScript and React JS
- Code editor (recommended: **VS Code**)

### Project Architecture

    roboticsclub-web/
    ├── public/                     # Static assets that don’t need bundling
    │   ├── background.jpeg
    │   ├── dark-logo.png
    │   ├── favicon.png
    │   ├── gagandeepmeena.jpg
    │   └── logo.png
    │
    ├── src/                        # Main app source folder
    │   │
    │   ├── components/             # Reusable UI components
    │   |    ├── Footer.jsx
    │   |    ├── Loader.jsx
    │   |    ├── Navbar.jsx
    
    │   ├── pages/                  # Route-level pages
    │   │   ├── AboutUs.jsx
    │   │   ├── Achievements.jsx
    │   │   ├── Contacts.jsx
    │   │   ├── Events.jsx
    │   │   ├── EventRegistration.jsx
    │   │   ├── Home.jsx
    │   │   ├── News.jsx
    │   │   ├── NewsDetails.jsx
    │   │   ├── OngoingProjectDetails.jsx
    │   │   ├── PasstEventDetails.jsx
    |   |   ├── Projects.jsx
    │   │   └── Tean.jsx
    |   |
    │   ├── App.jsx                 # Root app layout
    │   ├── index.css               # Main CSS file and Tailwind integration
    │   └── main.jsx                # Entry point (React + Tailwind kick-off)
    │
    ├── .gitignore
    ├── index.html                  # HTML entry page
    ├── esling.coonfig.js           # Prettier + Tailwind plugin integration
    ├── package.json                # NPM dependencies & scripts
    ├── postcss.config.js           # Tailwind/PostCSS integration
    ├── vite.config.js              # Vite build config
    └── README.md                   # Project documentation
    
---

### 🧑‍💻 Local Development

#### Clone the Repository
```bash
git clone https://github.com/onkarrpy2403-ux/roboticsclub-web.git
cd roboticsclub-web
