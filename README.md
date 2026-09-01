# Fender LXR - Legendary Tone, Modern Playability

เว็บไซต์โปรโมตและแนะนำกีตาร์ไฟฟ้า **Fender LXR** ที่ผสมผสานความคลาสสิกระดับตำนานเข้ากับดีไซน์สมัยใหม่ ตอบโจทย์ทุกสไตล์การเล่น ออกแบบด้วยแนวคิด Modern Dark & Copper Glossy Aesthetic พร้อมรองรับการแสดงผลแบบ Responsive เต็มรูปแบบบนทุกอุปกรณ์

---

## 🌟 ฟีเจอร์หลัก (Key Features)

- **Single Page Application (Tab Switching)**: สลับหน้าการทำงาน (หน้าหลัก, ประวัติ, แนะนำ, เปรียบเทียบ, ติดต่อ) ได้รวดเร็วโดยไม่ต้องโหลดหน้าใหม่
- **Interactive Color Selector**: เปลี่ยนโทนแสง Glow ด้านหลังกีตาร์ Hero Interactive ตามโทนสีที่เลือก
- **Floating Back-to-Top Button**: ปุ่มกลับขึ้นด้านบนแบบลอยล็อกตำแหน่งมุมขวาล่าง (`position: fixed`) พร้อมเอฟเฟกต์ Glassmorphism และใช้งานสะดวกทุกอุปกรณ์
- **Responsive Layout**: รองรับการแสดงผลสมบูรณ์แบบบน Desktop, Tablet และ Mobile (รวมถึง Hamburger Menu สำหรับหน้าจอมือถือ)
- **Contact Form Validation**: ฟอร์มติดต่อพร้อมข้อความแจ้งเตือนความสำเร็จแบบ Interactive

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```
056/
├── index.html          # โครงสร้างเนื้อหาหลักของเว็บไซต์ (Semantic HTML5)
├── styles.css          # ไฟล์สไตล์ลิ่ง Custom CSS (CSS Grid, Flexbox, Animation, Media Queries)
├── app.js              # สคริปต์ควบคุมการทำงาน (Tab Navigation, Mobile Menu, Interactivity)
└── assets/             # รูปภาพและโลโก้ประกอบเว็บไซต์
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

- **HTML5**: โครงสร้างแบบ Semantic Tag
- **CSS3**: Vanilla CSS, Flexbox, CSS Grid, Custom Properties (Variables), Glassmorphism Effects, Transitions & Animations
- **JavaScript (ES6+)**: DOM Manipulation, Event Listeners, Smooth Scrolling
- **Lucide Icons**: ไอคอนไอคอนกราฟิกสไตล์มินิมอลแบบ SVG
- **Google Fonts**:
  - `Mitr` (ภาษาไทย)
  - `Outfit` (ภาษาอังกฤษ Headings/Badges)
  - `Playball` & `Alex Brush` (Typography โลโก้และลายเซ็น)

---

## 💻 วิธีการเปิดใช้งาน (Getting Started)

1. คลอนหรือดาวน์โหลดโฟลเดอร์โปรเจกต์ `056`
2. เปิดไฟล์ `index.html` ผ่านเว็บเบราว์เซอร์ (เช่น Google Chrome, Microsoft Edge, Safari) หรือเปิดผ่าน Web Server เช่น Laragon / Live Server
