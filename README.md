# 🎸 Fender LXR - Legendary Tone, Modern Playability

เว็บไซต์โปรโมตและแนะนำกีตาร์ไฟฟ้าไฮเอนด์ **Fender LXR** ที่ดีไซน์ขึ้นภายใต้แนวคิด **Modern Dark & Copper Glossy Aesthetic** ผสมผสานโทนเสียงอันเป็นเอกลักษณ์ของ Fender เข้ากับสเปกสมัยใหม่ ตอบโจทย์มือกีตาร์ระดับมืออาชีพ พร้อมประสบการณ์ใช้งานระดับพรีเมียมแบบ Responsive รองรับทุกหน้าจอ

🔗 **เข้าชมเว็บไซต์จริง (Live Demo):** [https://github.com/056Anuwat-Nutem/056Anuwatfigmaproject](https://github.com/056Anuwat-Nutem/056Anuwatfigmaproject)
📂 **GitHub Repository:** [https://github.com/056Anuwat-Nutem/056Anuwatfigmaproject](https://github.com/056Anuwat-Nutem/056Anuwatfigmaproject)

---

## 🌟 ฟีเจอร์หลัก (Key Features)

- ⚡ **Seamless Single Page Application (SPA Navigation)**: ระบบสลับ Tab เปลี่ยนหน้า (หน้าหลัก, ประวัติ, รุ่นแนะนำ, เปรียบเทียบ, ติดต่อเรา) ได้ทันทีโดยไม่ต้อง Refresh หน้าเว็บ
- 📱 **Fully Responsive & Mobile Hamburger Navigation**: ดีไซน์ยืดหยุ่นรองรับทุกอุปกรณ์ (Desktop, Tablet, Mobile) พร้อมเมนู Off-canvas Hamburger สำหรับมือถือ
- 🔝 **Floating Back-to-Top Button**: ปุ่มเลื่อนกลับด้านบนแบบลอยตัว 
- ✉️ **Interactive Contact Form**: ฟอร์มติดต่อสอบถามพร้อมระบบจำลองการส่งข้อมูลและข้อความยืนยัน (Success Message)

---

## 🎨 การออกแบบและการตกแต่ง (Design & Aesthetic System)

- **Color Palette**: 
  - `Background`: Dark Base (`#170b06`, `#0d0502`)
  - `Accent/Primary`: Copper Orange & Warm Gold (`#d35400`, `#e67e22`, `#f39c12`)
  - `Text`: Warm White & Muted Sand (`#f5efe6`, `#c49c82`)
- **Typography**:
  - `Mitr`: ฟอนต์ภาษาไทยสไตล์โมเดิร์น ไร้หัว
  - `Outfit`: ฟอนต์ภาษาอังกฤษหัวข้อและสไตล์พรีเมียม
  - `Playball` / `Alex Brush`: ฟอนต์สไตล์ลายเซ็นและตราสินค้าอันหรูหรา
- **Visual Effects**: Glassmorphism (`backdrop-filter: blur`), Ambient Glow, Gradient Overlay, Interactive Card Hover

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
056/
├── index.html          # โครงสร้างเนื้อหาหลักของเว็บไซต์ (Semantic HTML5)
├── styles.css          # สไตล์ Custom CSS (Design System, Flexbox, Grid, Media Queries, Animations)
├── app.js              # สคริปต์ควบคุมระบบ SPA Navigation, Color Selector, Back-to-Top และ Mobile Menu
├── README.md           # เอกสารอธิบายโปรเจกต์
└── assets/             # ไฟล์สื่อและรูปภาพประกอบเว็บไซต์
    ├── hero_guitar.png        
    ├── guitar_sunburst_1.png  
    ├── guitar_hybrid.png      
    ├── guitar_strat.png       
    ├── history_masterpiece.png 
    ├── history_side_1.png     
    ├── history_side_2.png     
    └── sarason_logo.png       
```

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **HTML5**: Semantic Layout Elements
- **CSS3**: Vanilla CSS Variables, CSS Grid, Flexbox, Keyframe Animations, Glassmorphism Filters
- **JavaScript (ES6+)**: Vanilla JS DOM Manipulation, Event Handling
- **Lucide Icons**: SVG Icons สไตล์ Minimalist
- **Deployment Platform**: Vercel Cloud Hosting

---

## 💻 วิธีการติดตั้งและรันโปรเจกต์ (Getting Started)

### 1. การเปิดใช้งานแบบ Local (Local Development)
1. โคลนหรือดาวน์โหลดโฟลเดอร์โปรเจกต์
2. เปิดไฟล์ `index.html` ผ่านเว็บเบราว์เซอร์
3. หรือรันผ่าน Web Server เช่น **Live Server (VS Code Extension)**

### 2. การ Deploy ขึ้น Vercel (Vercel Deployment)
สามารถสั่ง Deploy ได้ง่ายๆ ผ่าน Vercel CLI:
```bash
npx vercel --prod --name fender-lxr --yes
```

---

## 📄 ใบอนุญาต (License)

โปรเจกต์นี้จัดทำขึ้นเพื่อการศึกษาและการนำเสนอผลงาน (Educational & Showcase Purpose Only)
README.md
กำลังแสดง README.md
