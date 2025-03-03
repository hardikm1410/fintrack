document.addEventListener('DOMContentLoaded', function() {
    // ===== Modal Functionality =====
    // Transaction Modal
    const transactionModal = document.getElementById('transaction-modal');
    const addTransactionBtn = document.getElementById('add-transaction-btn');
    const cancelTransactionBtn = document.getElementById('cancel-transaction');
    const closeTransactionModal = document.querySelector('#transaction-modal .close-modal');
    
    // Connect Account Modal
    const connectModal = document.getElementById('connect-modal');
    const connectAccountBtn = document.getElementById('connect-account-btn');
    const cancelConnectBtn = document.getElementById('cancel-connect');
    const closeConnectModal = document.querySelector('#connect-modal .close-modal');
    
    // Connection Status Elements
    const connectionForm = document.getElementById('connection-form');
    const connectingStatus = document.getElementById('connecting-status');
    const connectionSuccess = document.getElementById('connection-success');
    const connectBtn = document.getElementById('connect-btn');
    
    // Show Transaction Modal
    addTransactionBtn.addEventListener('click', function() {
        transactionModal.style.display = 'flex';
    });
    
    // Hide Transaction Modal
    function hideTransactionModal() {
        transactionModal.style.display = 'none';
        document.getElementById('transaction-form').reset();
    }
    
    cancelTransactionBtn.addEventListener('click', hideTransactionModal);
    closeTransactionModal.addEventListener('click', hideTransactionModal);
    
    // Show Connect Modal
    connectAccountBtn.addEventListener('click', function() {
        // Reset form state
        connectionForm.style.display = 'block';
        connectingStatus.style.display = 'none';
        connectionSuccess.style.display = 'none';
        
        connectModal.style.display = 'flex';
    });
    
    // Hide Connect Modal
    function hideConnectModal() {
        connectModal.style.display = 'none';
        document.getElementById('institution-select').value = '';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
    
    cancelConnectBtn.addEventListener('click', hideConnectModal);
    closeConnectModal.addEventListener('click', hideConnectModal);
    
    // Handle Connect Account flow
    connectBtn.addEventListener('click', function() {
        // Validate form
        const institution = document.getElementById('institution-select').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (!institution || !username || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show loading state
        connectionForm.style.display = 'none';
        connectingStatus.style.display = 'block';
        
        // Simulate API connection (3 seconds)
        setTimeout(function() {
            connectingStatus.style.display = 'none';
            connectionSuccess.style.display = 'block';
            
            // Auto close after 2 seconds and refresh account list
            setTimeout(function() {
                hideConnectModal();
                // Here you would typically refresh the accounts list with new data
            }, 2000);
        }, 3000);
    });
    
    // ===== Navigation Tabs =====
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // You would typically load different content here based on the tab
            const pageName = this.textContent.trim();
            console.log(`Navigating to ${pageName} page`);
            
            // For demo purposes, show an alert
            if (pageName !== 'Dashboard') {
                alert(`The ${pageName} page would load here. This is a demo.`);
            }
        });
    });
    
    // ===== Transaction Filters =====
    const filterButtons = document.querySelectorAll('.filter-btn');
    const transactions = document.querySelectorAll('.transaction-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.textContent.trim();
            
            // Show/hide transactions based on filter
            transactions.forEach(transaction => {
                if (filter === 'All') {
                    transaction.style.display = 'flex';
                } else if (filter === 'Income' && transaction.querySelector('.income')) {
                    transaction.style.display = 'flex';
                } else if (filter === 'Expenses' && transaction.querySelector('.expense')) {
                    transaction.style.display = 'flex';
                } else {
                    transaction.style.display = 'none';
                }
            });
        });
    });
    
    // ===== Month Selector =====
    const monthSelector = document.getElementById('month-selector');
    
    monthSelector.addEventListener('change', function() {
        const selectedMonth = this.value;
        console.log(`Loading data for ${selectedMonth}`);
        // Here you would typically update charts and transaction list
        // For demo purposes:
        alert(`Data for ${selectedMonth} would load here. This is a demo.`);
    });
    
    // ===== Transaction Form Submission =====
    const transactionForm = document.getElementById('transaction-form');
    
    transactionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const type = document.getElementById('transaction-type').value;
        const amount = document.getElementById('transaction-amount').value;
        const category = document.getElementById('transaction-category').value;
        const date = document.getElementById('transaction-date').value;
        const description = document.getElementById('transaction-description').value;
        const account = document.getElementById('transaction-account').value;
        
        // Create transaction object
        const transaction = {
            type,
            amount,
            category,
            date,
            description,
            account
        };
        
        console.log('New transaction:', transaction);
        
        // Here you would typically send this data to your backend
        // For demo purposes:
        alert('Transaction added successfully!');
        hideTransactionModal();
        
        // Add the new transaction to the list (for demo purposes)
        addTransactionToList(transaction);
    });
    
    // Function to add a new transaction to the list
    function addTransactionToList(transaction) {
        const transactionList = document.querySelector('.transaction-list');
        
        // Format date for display
        const transactionDate = new Date(transaction.date);
        const formattedDate = transactionDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        // Create new list item
        const newTransaction = document.createElement('li');
        newTransaction.className = 'transaction-item';
        
        // Determine icon class based on category
        let iconClass = '';
        if (transaction.category === 'food') iconClass = 'food';
        else if (transaction.category === 'shopping') iconClass = 'shopping';
        else if (transaction.category === 'transport') iconClass = 'transport';
        else if (transaction.category === 'salary') iconClass = 'bank';
        else iconClass = 'bank';
        
        // Determine icon based on category
        let icon = '';
        if (transaction.category === 'food') icon = 'fas fa-utensils';
        else if (transaction.category === 'shopping') icon = 'fas fa-shopping-bag';
        else if (transaction.category === 'transport') icon = 'fas fa-gas-pump';
        else if (transaction.category === 'salary') icon = 'fas fa-money-bill-wave';
        else icon = 'fas fa-receipt';
        
        // Format amount display
        const amountClass = transaction.type === 'income' ? 'income' : 'expense';
        const amountPrefix = transaction.type === 'income' ? '+ ' : '- ';
        
        // Set HTML content
        newTransaction.innerHTML = `
            <div class="transaction-info">
                <div class="transaction-icon ${iconClass}">
                    <i class="${icon}"></i>
                </div>
                <div class="transaction-details">
                    <div class="transaction-name">${transaction.description || transaction.category}</div>
                    <div class="transaction-date">${formattedDate}</div>
                </div>
            </div>
            <div class="transaction-amount ${amountClass}">${amountPrefix}₹${parseFloat(transaction.amount).toFixed(2)}</div>
        `;
        
        // Insert at the beginning of the list
        transactionList.insertBefore(newTransaction, transactionList.firstChild);
    }
    
    // ===== Bank Options =====
    const bankOptions = document.querySelectorAll('.bank-option');
    
    bankOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Show connect modal with pre-selected bank
            connectModal.style.display = 'flex';
            
            // Try to set the institution select if it matches
            const bankName = this.querySelector('img').alt;
            const selectOptions = document.getElementById('institution-select').options;
            
            for (let i = 0; i < selectOptions.length; i++) {
                if (selectOptions[i].text.includes(bankName)) {
                    document.getElementById('institution-select').selectedIndex = i;
                    break;
                }
            }
        });
    });
    
    // ===== Charts =====
    // Load charts using Chart.js
    loadCharts();
    
    function loadCharts() {
        // Get chart contexts
        const incomeExpenseCtx = document.getElementById('incomeExpenseCanvas').getContext('2d');
        const categoryCtx = document.getElementById('categoryCanvas').getContext('2d');
        
        // Income vs Expense Chart
        new Chart(incomeExpenseCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Income',
                        data: [45000, 47000, 48000, 46000, 49000, 50000],
                        backgroundColor: '#60ad5e',
                    },
                    {
                        label: 'Expenses',
                        data: [30000, 32000, 29000, 33000, 31000, 28000],
                        backgroundColor: '#c62828',
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Income vs Expenses'
                    }
                }
            }
        });
        
        // Expense by Category Chart
        new Chart(categoryCtx, {
            type: 'doughnut',
            data: {
                labels: ['Food & Dining', 'Shopping', 'Housing', 'Transportation', 'Utilities', 'Entertainment', 'Other'],
                datasets: [{
                    data: [5000, 4200, 10000, 3000, 2800, 2000, 1000],
                    backgroundColor: [
                        '#f9a825', // Food
                        '#7e57c2', // Shopping
                        '#5c6bc0', // Housing
                        '#42a5f5', // Transportation
                        '#26a69a', // Utilities
                        '#ec407a', // Entertainment
                        '#78909c'  // Other
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Expenses by Category'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.raw;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `₹${value.toLocaleString()} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Close modals when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === transactionModal) {
            hideTransactionModal();
        }
        if (event.target === connectModal) {
            hideConnectModal();
        }
    });
});