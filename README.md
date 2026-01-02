# FinanceFlow - Dashboard Keuangan UMKM

Dashboard sederhana untuk mengelola keuangan bisnis UMKM, dibuat dengan HTML, Tailwind CSS, dan JavaScript.

---

## 📁 Struktur File

```
📁 FinanceFlow/
├── index.html        → Landing page (halaman utama)
├── login.html        → Halaman login
├── dashboard.html    → Dashboard dengan statistik & grafik
├── transactions.html → Halaman kelola transaksi
└── 📁 js/
    ├── data.js       → Data dummy (transaksi, statistik)
    └── dashboard.js  → Logic untuk render dashboard
```

---

## 🚀 Cara Menjalankan

1. Double-click file `index.html`
2. Atau klik kanan → "Open with" → pilih browser (Chrome/Firefox/Edge)
3. Tidak perlu install apapun!

---

## 📄 Penjelasan Setiap File

### 1. `index.html` - Landing Page
Halaman pertama yang dilihat pengunjung.

**Bagian penting:**
```html
<!-- Navbar - Menu navigasi atas -->
<nav class="fixed top-0 ...">

<!-- Hero Section - Judul besar & tombol CTA -->
<section class="pt-32 pb-20 ...">

<!-- Features - 3 kotak fitur -->
<section id="features" class="py-20 bg-gray-50">
```

---

### 2. `login.html` - Halaman Login
Form login sederhana.

**Bagian penting:**
```html
<!-- Form Login -->
<form id="loginForm">
  <input type="email" id="email" ...>
  <input type="password" id="password" ...>
  <button type="submit">Masuk</button>
</form>
```

**JavaScript di dalamnya:**
```javascript
// Ketika form di-submit, redirect ke dashboard
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();  // Cegah reload halaman
  window.location.href = 'dashboard.html';  // Pindah ke dashboard
});
```

---

### 3. `dashboard.html` - Dashboard Utama
Halaman utama setelah login, menampilkan statistik dan grafik.

**Bagian penting:**
```html
<!-- Sidebar - Menu samping kiri -->
<aside class="w-64 bg-white ...">

<!-- Header - Search bar & profil user -->
<header class="bg-white border-b ...">

<!-- Stats Cards - 4 kotak statistik -->
<div id="stats-container"></div>

<!-- Revenue Chart - Grafik garis -->
<canvas id="revenueChart"></canvas>

<!-- Category Chart - Grafik donut -->
<canvas id="categoryChart"></canvas>

<!-- Transactions Table - Tabel transaksi -->
<tbody id="transactions-body"></tbody>
```

---

### 4. `transactions.html` - Halaman Transaksi
Kelola semua transaksi dengan filter dan tambah data baru.

**Fitur:**
- Filter berdasarkan tipe (income/expense)
- Filter berdasarkan status (completed/pending/failed)
- Filter berdasarkan kategori
- Search transaksi
- Tambah transaksi baru (modal popup)

**Bagian penting:**
```html
<!-- Filter dropdowns -->
<select id="filterType">...</select>
<select id="filterStatus">...</select>
<select id="filterCategory">...</select>

<!-- Search input -->
<input id="searchInput" ...>

<!-- Modal tambah transaksi -->
<div id="modal" class="fixed inset-0 ...">
```

---

### 5. `js/data.js` - Data Dummy
Berisi semua data yang ditampilkan di dashboard.

**Variabel yang tersedia:**
```javascript
// Data statistik (4 kartu di dashboard)
const statsData = [
  { title: 'Total Saldo', value: 'Rp 45.2M', ... },
  ...
];

// Data grafik revenue (6 bulan)
const revenueData = {
  labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  income: [85, 92, 105, 118, 122, 128.5],
  expense: [62, 68, 75, 82, 79, 83.3],
};

// Data kategori pengeluaran (pie chart)
const categoryData = [
  { name: 'Inventory', value: 35000000, color: '#2563EB' },
  ...
];

// Data transaksi (tabel)
const transactionsData = [
  { id: '1', date: 'Dec 28, 2024', description: '...', ... },
  ...
];

// Fungsi format Rupiah
function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}
```

---

### 6. `js/dashboard.js` - Logic Dashboard
Mengatur bagaimana data ditampilkan di dashboard.

**Fungsi utama:**
```javascript
// Render 4 kartu statistik
function renderStats() { ... }

// Render tabel transaksi
function renderTransactions() { ... }

// Render tombol quick actions
function renderQuickActions() { ... }

// Render grafik garis (income vs expense)
function renderRevenueChart() { ... }

// Render grafik donut (kategori)
function renderCategoryChart() { ... }
```

---

## 🎨 Library yang Digunakan

| Library | Kegunaan | CDN |
|---------|----------|-----|
| Tailwind CSS | Styling/CSS | `cdn.tailwindcss.com` |
| Lucide Icons | Ikon-ikon | `unpkg.com/lucide` |
| Chart.js | Grafik | `cdn.jsdelivr.net/npm/chart.js` |

---

## 🔧 Cara Modifikasi

### Mengubah Data Statistik
Edit file `js/data.js`, bagian `statsData`:
```javascript
const statsData = [
  {
    title: 'Total Saldo',      // Judul kartu
    value: 'Rp 45.2M',         // Nilai yang ditampilkan
    change: '+12.5% dari bulan lalu',  // Perubahan
    changeType: 'positive',    // positive/negative
    icon: 'wallet',            // Nama ikon dari Lucide
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  // ... tambah/edit kartu lainnya
];
```

### Menambah Transaksi Baru
Edit file `js/data.js`, bagian `transactionsData`:
```javascript
const transactionsData = [
  {
    id: '1',
    date: 'Dec 28, 2024',
    description: 'Penjualan Produk - Order WhatsApp #1234',
    category: 'Penjualan',
    type: 'income',        // income atau expense
    amount: 2500000,       // Angka tanpa format
    status: 'completed',   // completed/pending/failed
  },
  // ... tambah transaksi lainnya
];
```

### Mengubah Warna
Tailwind menggunakan class untuk warna:
- `bg-blue-600` → Background biru
- `text-green-500` → Teks hijau
- `border-gray-200` → Border abu-abu

Referensi warna: https://tailwindcss.com/docs/customizing-colors

---

## 💡 Tips untuk Pemula

1. **Buka Developer Tools** (F12) untuk debug
2. **Console tab** untuk lihat error JavaScript
3. **Elements tab** untuk inspect HTML/CSS
4. **Pelajari Tailwind** di https://tailwindcss.com/docs
5. **Pelajari Chart.js** di https://www.chartjs.org/docs

---

## 📞 Bantuan

Jika ada pertanyaan tentang kode ini, silakan tanyakan!
