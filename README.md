# Jagga Reddy (T. Jayaprakash Reddy) — Official Public Profile & Political Portfolio

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-Primitives-161618?style=flat-square&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

A modern, high-performance, responsive public profile and digital portfolio celebrating the life, public service, electoral milestones, and constituency advocacy of **T. Jayaprakash Reddy (popularly known as Jagga Reddy)** — Senior Indian National Congress Leader, Working President of the Telangana Pradesh Congress Committee (TPCC), and three-term former MLA representing the Sangareddy Assembly Constituency.

---

## 🏛️ About T. Jayaprakash Reddy (Jagga Reddy)

**T. Jayaprakash Reddy** is one of Telangana's most prominent grassroots leaders, known for his charismatic oratory, fearless advocacy for people's rights, and steadfast dedication to the welfare and development of the Sangareddy constituency and Telangana state.

- **Current Role**: Working President, Telangana Pradesh Congress Committee (TPCC)
- **Legislative Career**: Three-Term Member of the Legislative Assembly (MLA) from Sangareddy (2004, 2009, 2018)
- **Civic Leadership**: Former Chairman, Sangareddy Municipality (2000–2004)
- **Core Focus Areas**: Manjeera river water security, farmer welfare & crop procurement, public healthcare & medical education, urban infrastructure & roads, and student rights.

---

## ✨ Features & Architecture

- **🏛️ Interactive Hero & Leadership Showcase**
  - Dynamic welcome banner highlighting key titles, party symbol (Indian National Congress), and core principles.
  - Quick action buttons to explore political journey, public service, constituency works, and contact office.

- **📅 Chronological Political Journey**
  - Interactive timeline documenting key milestones from early student politics and municipal chairmanship to three legislative assembly terms and state leadership.

- **📊 Comprehensive Electoral Record**
  - Verified historical breakdown and interactive data tables of Sangareddy Assembly elections (2004, 2009, 2014, 2018, 2023).
  - Vote shares, winning margins, and constituency trends with responsive charts.

- **🏙️ Sangareddy Constituency Development Hub**
  - In-depth documentation of major infrastructure achievements:
    - Sanctioning and establishment of the Government Medical College & Hospital.
    - Manjeera River water supply protection for Sangareddy residents and farmers.
    - Ring roads, internal arterial roads, flyovers, and municipal modernizations.
    - Agricultural market yard enhancements and local irrigation canal extensions.

- **🤝 Public Service & Grassroots Initiatives**
  - Dedicated modules on citizen outreach, 24/7 public grievance redressal, student fee & hostel advocacy, and emergency relief distribution.

- **📸 Media & Photo Gallery**
  - Curated high-resolution image gallery featuring mass rallies, public addresses, padayatras, and meetings with party leadership (including Hon'ble Chief Minister A. Revanth Reddy).
  - Category filters and modal lightbox viewer for responsive browsing.

- **🎙️ Speeches & Press Statements**
  - Legislative assembly debate highlights, landmark press briefings at Gandhi Bhavan, and video speeches.

- **📫 Constituency Office & Contact Portal**
  - Real-time contact form with client-side validation.
  - Interactive embedded Google Map locating the Camp Office in Sangareddy.
  - Direct helpline contacts, office hours, and official social media channels.

- **🚀 SEO & Accessibility Optimized**
  - Full OpenGraph metadata, Twitter Cards, canonical tags, and Schema.org JSON-LD Person structured data.
  - Modern typography, high-contrast accessible colors, smooth animations via Framer Motion, and mobile-first responsive layout.

---

## 🛠️ Technology Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://reactjs.org/) | Component-driven declarative UI library |
| **Build Tool** | [Vite](https://vitejs.dev/) | Lightning-fast ESM frontend tooling and bundler |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strongly typed JavaScript for enterprise stability |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework with custom design tokens |
| **UI Primitives** | [Radix UI](https://www.radix-ui.com/) | Accessible, unstyled UI primitives (`dialog`, `dropdown`, `tabs`, etc.) |
| **Icons** | [Lucide React](https://lucide.dev/) | Modern, clean vector icon set |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) | Production-ready motion and gesture library |
| **Routing** | [React Router DOM v6](https://reactrouter.com/) | Client-side routing with deep link support |
| **Data Viz** | [Recharts](https://recharts.org/) | Composable SVG charting library |

---

## 📂 Project Structure

```text
├── public/
│   ├── assets/               # Generated and static SVG illustrations
│   ├── images/
│   │   ├── branding/         # Congress hand and official insignias
│   │   └── jagga-reddy/      # Verified photography (rallies, speeches, meetings)
│   ├── favicon.png           # Authoritative Indian National Congress favicon
│   ├── favicon.svg           # Scalable SVG favicon
│   ├── robots.txt            # Search engine crawl directives
│   └── sitemap.xml           # Search engine sitemap
├── src/
│   ├── assets/               # App-level bundled assets
│   ├── components/           # Reusable UI widgets, Navbar, Footer, Cards
│   ├── context/              # Global React contexts (Theme, Nav state)
│   ├── data/                 # Structured data for elections, timeline, gallery
│   ├── hooks/                # Custom React hooks (window resize, scroll state)
│   ├── lib/                  # Utility functions (cn helper, formatting)
│   ├── pages/                # Page components:
│   │   ├── Home.tsx          # Hero, overview, key highlights
│   │   ├── About.tsx         # Biography, background, core vision
│   │   ├── PoliticalJourney.tsx # Detailed timeline & leadership roles
│   │   ├── Sangareddy.tsx    # Constituency achievements & local impact
│   │   ├── Elections.tsx     # Historical assembly election data & charts
│   │   ├── PublicService.tsx # Social welfare, grievance resolution
│   │   ├── Speeches.tsx      # Video addresses & assembly statements
│   │   ├── Gallery.tsx       # Filterable photo & video gallery
│   │   ├── Contact.tsx       # Office address, interactive map & feedback form
│   │   └── NotFound.tsx      # 404 handler page
│   ├── ui/                   # Radix / shadcn reusable UI primitives
│   ├── App.tsx               # Main application routing and shell
│   ├── index.css             # Tailwind base & custom utility layers
│   └── main.tsx              # Application entry point
├── components.json           # shadcn configuration
├── package.json              # Dependencies and build scripts
├── tailwind.config.ts        # Tailwind configuration & design palette
├── tsconfig.json             # TypeScript compiler configuration
└── vite.config.ts            # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn** / **pnpm**

### 1. Clone the Repository

```bash
git clone https://github.com/VenkatAsrith/JaggaReddyPortfolio.git
cd JaggaReddyPortfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot module replacement (HMR).

### 4. Build for Production

```bash
npm run build
```

This compiles optimized assets into the `dist/` folder ready for deployment on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

### 5. Preview Production Build Locally

```bash
npm run preview
```

---

## 📍 Constituency Office Information

- **Camp Office (Sangareddy)**:
  Opp. Municipal Office, Main Road, Sangareddy, Telangana – 502001
- **Party Headquarters**:
  Gandhi Bhavan, Nampally, Hyderabad, Telangana – 500001
- **Key Office Contacts**:
  - Email: `office@jaggareddy.in` / `contact@jaggareddy.in`
  - Public Hours: Monday – Saturday, 09:00 AM – 02:00 PM (Sangareddy Camp Office)

---

## 📄 License & Attribution

This project is built and maintained as a public informational profile and digital archive for T. Jayaprakash Reddy (Jagga Reddy). 

© 2026 T. Jayaprakash Reddy (Jagga Reddy) Public Profile. All rights reserved.
