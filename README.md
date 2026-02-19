# 🛡️ LinkDefender

**Know before you click.**

LinkDefender is a modern Chrome extension that helps users identify potentially unsafe or malicious links before opening them. It supports real-time scanning directly from webpages as well as manual URL checks, all presented in a clean, developer-focused dark interface.

---

## ✨ Features

* 🔍 Real-time link detection from webpages
* ✏️ Manual URL scanning via popup input
* 🔗 Short link expansion (planned)
* 🟢 Clear safety verdicts (Safe / Dangerous / Scanning)
* ⚡ Lightweight Manifest V3 architecture
* 🎨 Modern dark UI built with Tailwind CSS
* 🧩 Clean state-driven React popup

---

## 🧱 Tech Stack

* **React** — popup interface
* **Tailwind CSS** — styling system
* **Vite** — fast build tooling
* **Chrome Extension Manifest V3**
* **Lucide React** — icon system
* **Motion** *(planned)* — smooth UI animations

---

## 🧠 How It Works

LinkDefender operates through three core parts:

* **Content Script** → detects links on webpages
* **Background Service Worker** → handles scanning logic
* **React Popup** → displays results and accepts manual input

This architecture keeps the extension fast, modular, and scalable.

---

## 🖼️ UI States

The popup supports multiple states:

* Idle (manual input)
* Scanning
* Safe result
* Dangerous result

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/link-defender.git
cd link-defender
```

---

### 2️⃣ Install popup dependencies

```bash
cd popup
npm install
```

---

### 3️⃣ Build the popup

```bash
npm run build
```

This outputs the compiled files used by the extension.

---

### 4️⃣ Load the extension in Chrome

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `/extension` folder

---

## 📁 Project Structure

```
link-defender/
├─ extension/        # Manifest, background, content scripts
├─ popup/            # React + Tailwind UI
├─ screenshots/      # UI previews (add later)
└─ README.md
```

---

## 🗺️ Roadmap

* [x] UI design system
* [x] Extension scaffold
* [ ] Hover warning system
* [ ] URL expansion
* [ ] Threat intelligence integration
* [ ] Scan history
* [ ] Motion animations
* [ ] Chrome Web Store release

---

## ⚠️ Disclaimer

LinkDefender provides heuristic safety checks and does not guarantee that a link is completely safe. Always exercise caution when opening unknown URLs.

---

## 📄 License

MIT License

---

## 👤 Author

Built by **Abhi** — aspiring front-end developer focused on clean UI, practical tools, and modern web experiences.

