#  SDU Kampüs Film Kulübü — React Projesi

**Süleyman Demirel Üniversitesi Film Kulübü** için geliştirilen bu proje, [TVMaze API](https://www.tvmaze.com/api) üzerinden dizi arama, filtreleme, detay görüntüleme ve izlenecekler listesi oluşturma işlevlerini sunar.  
Modern **React (Vite)** altyapısıyla geliştirilmiş, sade ve kullanıcı dostu bir web uygulamasıdır.

🔗 **Site:** [https://alpisdu-movie-club.vercel.app](https://alpisdu-movie-club.vercel.app)

---

##  Özellikler

 **Gerçek API Entegrasyonu** — TVMaze üzerinden dizi verilerini çeker.  
 **useReducer State Yönetimi** — Komple uygulama durumunu merkezi biçimde yönetir.  
 **useEffect ile Asenkron Veri Yönetimi**  
 **Axios ile API Çağrıları**  
 **Sayfalama (Pagination)** — 6 öğe/sayfa ve ileri/geri/ilk/son navigasyon.  
 **Filtreleme & Arama** — Tür, dil, minimum puan ve kelime bazlı filtre.  
 **Watchlist (Gösterime Girecekler Paneli)** — localStorage üzerinden kalıcı liste.  
 **Detay Sayfası** — Dizi bilgileri ve bölüm listesi (sezon/bölüm detayları).  
 **Conditional Rendering** — Yükleniyor / Hata / Boş Liste durumlarına özel görünümler.  
 **Sticky NavBar** — Sayfanın üstünde her zaman görünen gezinme çubuğu.

---

##  Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|------------|----------|
|  **React 18** | Modern component-based frontend yapısı |
|  **Vite** | Hızlı geliştirme ortamı |
|  **Axios** | HTTP istekleri için |
|  **React Router DOM** | Sayfalar arası gezinme |
|  **CSS (custom)** | Responsive, sade ve modern tasarım |

---



##  Kurulum ve Çalıştırma

```bash
# 1️ Bağımlılıkları yükle
npm install

# 2️ Geliştirme modunda çalıştır
npm run dev

# 3️ Üretim (Build) için
npm run build
npm run preview


## Proje Yapısı

src/
 ├─ components/
 │   ├─ NavBar.jsx
 │   ├─ SearchBox.jsx
 │   ├─ Filters.jsx
 │   ├─ TVList.jsx
 │   ├─ TVCard.jsx
 │   ├─ WatchlistPanel.jsx
 │   ├─ Pagination.jsx
 │   ├─ ShowDetail.jsx
 │   └─ Footer.jsx
 │
 ├─ pages/
 │   └─ Home.jsx
 │
 ├─ reducer/
 │   └─ reducer.js
 │
 ├─ services/
 │   └─ api.js
 │
 ├─ App.jsx
 ├─ main.jsx
 └─ styles.css
