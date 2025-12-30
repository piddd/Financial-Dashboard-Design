// Data Mock untuk Dashboard

const statsData = [
  {
    title: 'Total Saldo',
    value: 'Rp 45.2M',
    change: '+12.5% dari bulan lalu',
    changeType: 'positive',
    icon: 'wallet',
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Total Pemasukan',
    value: 'Rp 128.5M',
    change: '+8.2% dari bulan lalu',
    changeType: 'positive',
    icon: 'trending-up',
    iconBgColor: 'bg-green-100',
    iconColor: 'text-green-500',
  },
  {
    title: 'Total Pengeluaran',
    value: 'Rp 83.3M',
    change: '-3.1% dari bulan lalu',
    changeType: 'positive',
    icon: 'trending-down',
    iconBgColor: 'bg-red-100',
    iconColor: 'text-red-500',
  },
  {
    title: 'Jumlah Transaksi',
    value: '1,247',
    change: '+15.3% dari bulan lalu',
    changeType: 'positive',
    icon: 'dollar-sign',
    iconBgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
];

const revenueData = {
  labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  income: [85, 92, 105, 118, 122, 128.5],
  expense: [62, 68, 75, 82, 79, 83.3],
};

const categoryData = [
  { name: 'Inventory', value: 35000000, color: '#2563EB' },
  { name: 'Operational', value: 18500000, color: '#22C55E' },
  { name: 'Marketing', value: 12000000, color: '#F59E0B' },
  { name: 'Salary', value: 11000000, color: '#EF4444' },
  { name: 'Utilities', value: 6800000, color: '#8B5CF6' },
];

const transactionsData = [
  {
    id: '1',
    date: 'Dec 28, 2024',
    description: 'Penjualan Produk - Order WhatsApp #1234',
    category: 'Penjualan',
    type: 'income',
    amount: 2500000,
    status: 'completed',
  },
  {
    id: '2',
    date: 'Dec 28, 2024',
    description: 'Pembelian Inventory - Supplier A',
    category: 'Inventory',
    type: 'expense',
    amount: 5200000,
    status: 'completed',
  },
  {
    id: '3',
    date: 'Dec 27, 2024',
    description: 'Order WhatsApp #1233',
    category: 'Penjualan',
    type: 'income',
    amount: 1800000,
    status: 'pending',
  },
  {
    id: '4',
    date: 'Dec 27, 2024',
    description: 'Marketing - Facebook Ads',
    category: 'Marketing',
    type: 'expense',
    amount: 850000,
    status: 'completed',
  },
  {
    id: '5',
    date: 'Dec 26, 2024',
    description: 'Penjualan Produk - Toko Online',
    category: 'Penjualan',
    type: 'income',
    amount: 3200000,
    status: 'completed',
  },
];

const quickActions = [
  {
    icon: 'plus',
    label: 'Add Transaction',
    description: 'Manual entry',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
  },
  {
    icon: 'upload',
    label: 'Import Data',
    description: 'From Google Sheets',
    bgColor: 'bg-green-50',
    textColor: 'text-green-500',
  },
  {
    icon: 'download',
    label: 'Export Report',
    description: 'Download CSV/PDF',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: 'file-text',
    label: 'Generate Invoice',
    description: 'Create new',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
];

// Utility function untuk format Rupiah
function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}
