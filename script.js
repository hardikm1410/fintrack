const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-nav-active);
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('mobile-nav-active');
    }
});

hamburgerMenu.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
});








function animateCounter(target, duration) {
            const counterElement = document.getElementById('total-balance');
            let start = 0;
            const increment = Math.ceil(target / (duration / 16)); // 16ms interval roughly 60fps

            function updateCounter() {
                start += increment;
                if (start < target) {
                    counterElement.textContent = start;
                                        requestAnimationFrame(updateCounter);
                } else {
                    counterElement.textContent = '₹' + target.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                }
            }

            updateCounter();
        }

        
animateCounter(800456, 10000);

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

 // DOM Elements
 const chatForm = document.getElementById('chatForm');
 const chatInput = document.getElementById('chatInput');
 const sendBtn = document.getElementById('sendBtn');
 const chatHistory = document.getElementById('chatHistory');
 const typingIndicator = document.getElementById('typingIndicator');
 const menuBtn = document.getElementById('menuBtn');
 const chatContainer = document.getElementById('chatContainer');
 const sidebarOverlay = document.getElementById('sidebarOverlay');
 const sidebarClose = document.getElementById('sidebarClose');
 const themeToggle = document.getElementById('themeToggle');
 const suggestionChips = document.querySelectorAll('.suggestion-chip');

 // Auto-resize textarea
 chatInput.addEventListener('input', function() {
     this.style.height = 'auto';
     this.style.height = (this.scrollHeight) + 'px';
     
     // Enable/disable send button based on input
     sendBtn.disabled = !this.value.trim();
 });

 // Handle form submission
 chatForm.addEventListener('submit', function(e) {
     e.preventDefault();
     const message = chatInput.value.trim();
     if (!message) return;
     
     addMessage(message, 'user');
     chatInput.value = '';
     chatInput.style.height = 'auto';
     sendBtn.disabled = true;
     
     // Simulate AI thinking
     typingIndicator.style.display = 'flex';
     setTimeout(() => {
         typingIndicator.style.display = 'none';
         
         // Simulate AI response
         const responses = [
             "Sorry, I'm under developement at this time!",
         ];
         
         const randomResponse = responses[Math.floor(Math.random() * responses.length)];
         addMessage(randomResponse, 'ai');
         
         // Scroll to bottom
         chatHistory.scrollTop = chatHistory.scrollHeight;
     }, 1500);
     
     // Scroll to bottom
     chatHistory.scrollTop = chatHistory.scrollHeight;
 });

 // Add message to chat
 function addMessage(text, sender) {
     const messageDiv = document.createElement('div');
     messageDiv.className = `message ${sender}-message`;
     
     const now = new Date();
     const timeString = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
     
     const avatar = sender === 'user' ? 'You' : 'AI';
     const avatarClass = sender === 'user' ? 'user-avatar' : 'ai-avatar';
     
     messageDiv.innerHTML = `
         <div class="message-wrapper">
             <div>
                 <div class="message-content">${text}</div>
                 
                 <div class="message-actions">
                 <div class="message-time">${timeString}</div>
                     <button class="message-action-btn" title="Copy to clipboard">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                             <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                             <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                         </svg>
                     </button>
                     ${sender === 'ai' ? `
                     <button class="message-action-btn" title="Regenerate response">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                             <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                             <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                         </svg>
                     </button>
                     ` : ''}
                 </div>
             </div>
         </div>
     `;
     
     chatHistory.appendChild(messageDiv);
     
     // Add click event for copy button
     const copyBtn = messageDiv.querySelector('.message-action-btn');
     copyBtn.addEventListener('click', function() {
         navigator.clipboard.writeText(text).then(() => {
             this.innerHTML = `
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                     <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                 </svg>
             `;
             setTimeout(() => {
                 this.innerHTML = `
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                         <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                         <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                     </svg>
                 `;
             }, 2000);
         });
     });
 }

 // Sidebar toggle
 menuBtn.addEventListener('click', function() {
     chatContainer.classList.add('sidebar-open');
 });

 sidebarOverlay.addEventListener('click', function() {
     chatContainer.classList.remove('sidebar-open');
 });

 sidebarClose.addEventListener('click', function() {
     chatContainer.classList.remove('sidebar-open');
 });

 // Theme toggle
 themeToggle.addEventListener('click', function() {
     document.body.classList.toggle('dark-mode');
     
     // Update icon
     if (document.body.classList.contains('dark-mode')) {
         this.innerHTML = `
             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
             </svg>
         `;
     } else {
         this.innerHTML = `
             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
             </svg>
         `;
     }
 });

 // Suggestion chips
 suggestionChips.forEach(chip => {
     chip.addEventListener('click', function() {
         chatInput.value = this.textContent;
         chatInput.dispatchEvent(new Event('input'));
         chatInput.focus();
     });
 });
