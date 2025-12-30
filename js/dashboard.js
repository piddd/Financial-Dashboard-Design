// Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Render all components
  renderStats();
  renderTransactions();
  renderQuickActions();
  renderRevenueChart();
  renderCategoryChart();
});

// Render Stats Cards
function renderStats() {
  const container = document.getElementById('stats-container');
  
  statsData.forEach(stat => {
    const changeColor = stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500';
    
    const card = `
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <p class="text-gray-500 mb-2 text-sm">${stat.title}</p>
            <p class="text-gray-900 mb-1 text-3xl font-semibold">${stat.value}</p>
            <p class="${changeColor} text-sm font-medium">${stat.change}</p>
          </div>
          <div class="${stat.iconBgColor} ${stat.iconColor} p-3 rounded-lg">
            <i data-lucide="${stat.icon}" class="w-6 h-6"></i>
          </div>
        </div>
      </div>
    `;
    
    container.innerHTML += card;
  });
  
  // Re-initialize icons for new elements
  lucide.createIcons();
}

// Render Transactions Table
function renderTransactions() {
  const tbody = document.getElementById('transactions-body');
  
  transactionsData.forEach(tx => {
    const typeClass = tx.type === 'income' 
      ? 'bg-green-100 text-green-500' 
      : 'bg-red-100 text-red-500';
    
    const amountClass = tx.type === 'income' ? 'text-green-500' : 'text-red-500';
    const amountPrefix = tx.type === 'income' ? '+' : '-';
    
    let statusClass = '';
    switch(tx.status) {
      case 'completed':
        statusClass = 'bg-green-100 text-green-500 border-green-200';
        break;
      case 'pending':
        statusClass = 'bg-yellow-100 text-yellow-700 border-yellow-200';
        break;
      case 'failed':
        statusClass = 'bg-red-100 text-red-500 border-red-200';
        break;
    }
    
    const row = `
      <tr class="hover:bg-gray-50 transition-colors">
        <td class="px-6 py-4 text-gray-500 text-sm">${tx.date}</td>
        <td class="px-6 py-4 text-gray-900 text-sm font-medium">${tx.description}</td>
        <td class="px-6 py-4 text-gray-500 text-sm">${tx.category}</td>
        <td class="px-6 py-4">
          <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${typeClass}">
            ${tx.type === 'income' ? 'Income' : 'Expense'}
          </span>
        </td>
        <td class="px-6 py-4 text-right text-sm font-semibold ${amountClass}">
          ${amountPrefix}${formatRupiah(tx.amount)}
        </td>
        <td class="px-6 py-4">
          <div class="flex justify-center">
            <span class="inline-flex items-center px-2.5 py-1 rounded-md border text-xs font-medium ${statusClass}">
              ${tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
            </span>
          </div>
        </td>
      </tr>
    `;
    
    tbody.innerHTML += row;
  });
}

// Render Quick Actions
function renderQuickActions() {
  const container = document.getElementById('quick-actions');
  
  quickActions.forEach(action => {
    const button = `
      <button class="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-blue-600 hover:shadow-sm transition-all text-left group">
        <div class="${action.bgColor} ${action.textColor} p-2.5 rounded-lg group-hover:scale-110 transition-transform">
          <i data-lucide="${action.icon}" class="w-5 h-5"></i>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-gray-900 mb-0.5 text-sm font-medium">${action.label}</p>
          <p class="text-gray-500 truncate text-xs">${action.description}</p>
        </div>
      </button>
    `;
    
    container.innerHTML += button;
  });
  
  lucide.createIcons();
}

// Render Revenue Chart
function renderRevenueChart() {
  const ctx = document.getElementById('revenueChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: revenueData.labels,
      datasets: [
        {
          label: 'Income',
          data: revenueData.income,
          borderColor: '#22C55E',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 2,
        },
        {
          label: 'Expense',
          data: revenueData.expense,
          borderColor: '#EF4444',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 2,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 20,
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': Rp ' + context.raw + 'M';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value + 'M';
            }
          },
          grid: {
            color: '#E2E8F0',
          }
        },
        x: {
          grid: {
            display: false,
          }
        }
      }
    }
  });
}

// Render Category Chart
function renderCategoryChart() {
  const ctx = document.getElementById('categoryChart').getContext('2d');
  const total = categoryData.reduce((sum, item) => sum + item.value, 0);
  
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: categoryData.map(c => c.name),
      datasets: [{
        data: categoryData.map(c => c.value),
        backgroundColor: categoryData.map(c => c.color),
        borderWidth: 0,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.label + ': ' + formatRupiah(context.raw);
            }
          }
        }
      }
    }
  });
  
  // Render legend
  const legendContainer = document.getElementById('category-legend');
  categoryData.forEach(category => {
    const percentage = ((category.value / total) * 100).toFixed(1);
    
    const legendItem = `
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-3 h-3 rounded-full" style="background-color: ${category.color}"></div>
          <span class="text-gray-900 text-sm font-medium">${category.name}</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-gray-500 text-xs">${percentage}%</span>
          <span class="text-gray-900 text-sm font-semibold">${formatRupiah(category.value)}</span>
        </div>
      </div>
    `;
    
    legendContainer.innerHTML += legendItem;
  });
}
