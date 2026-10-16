# Slide Me

เว็บแอปเรียกรถ/ขนส่ง (ผู้ใช้จองงาน – คนขับรับงาน, แผนที่, ชำระเงิน, แชตเรียลไทม์)

> โปรเจกต์ทีม 4 คน นี่คือ fork ของ [thanapat-hnu/newslideme](https://github.com/thanapat-hnu/newslideme)
> เพื่อรวบรวมงานของผมไว้ใน branch `pobphon` (ประวัติ commit ต้นฉบับยังอยู่ครบ)

## Tech Stack
React + Vite · Node.js / Express · Socket.IO · MySQL

## ส่วนที่ผมรับผิดชอบ (pobphon11)
- **ระบบแชตเรียลไทม์ (backend)** ด้วย Socket.IO: สร้างห้องแชตจากไอดีสองฝั่ง, บริการส่ง/ดึงข้อความ (`backend/All-Routes/messageService.js`, `socketServer.js`)
- route ที่เกี่ยวกับการจองและงาน (`bookingRoutes.js`, `jobRoutes.js`)
- ต้นแบบ UI ก่อนหน้านี้: [Project-Slide-Me](https://github.com/pobphon11/Project-Slide-Me) (React + Vite)

สถานะ: ระบบแชตเก็บข้อความในหน่วยความจำ ยังไม่เชื่อมฐานข้อมูล (วางแผนทำใน v2)

## ส่วนของเพื่อนร่วมทีม
- [@thanapat-hnu](https://github.com/thanapat-hnu): Socket.IO ส่วนส่ง/รับงาน, หน้ารับงานของคนขับ, แผนที่
- [@Katawutxz](https://github.com/Katawutxz): คำนวณราคา, ชำระเงิน, สถานะงาน
- [@KHN22](https://github.com/KHN22): geocode, token, หน้าแชตฝั่ง frontend

## ดูประวัติ commit ของผม
[commits โดย pobphon11](../../commits/pobphon?author=pobphon11)

## วิธีรัน
1. `cd backend && npm install`
2. คัดลอก `.env.example` เป็น `.env` แล้วใส่ค่าฐานข้อมูลของคุณ
3. `node app.js`
4. อีก terminal: `cd frontend && npm install && npm run dev`
