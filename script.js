 
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (this.getAttribute('href') !== '#') {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
    }
});
});

// Fade-in section observer
const fadeInObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
    }
});
}, {
threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe all sections with fade-in class
document.querySelectorAll('.fade-in-section').forEach(section => {
fadeInObserver.observe(section);
});

// Observe feature cards for staggered animation
document.querySelectorAll('.feature-card').forEach(card => {
fadeInObserver.observe(card);
});

// Observe security features for staggered animation
document.querySelectorAll('.security-feature').forEach(feature => {
fadeInObserver.observe(feature);
});

// Observe AI feature items for staggered animation
document.querySelectorAll('.ai-feature-item').forEach(item => {
fadeInObserver.observe(item);
});

// Add fade-in effect for hero section immediately

    
    // Dark mode toggle
    const themeToggle = document.querySelector('.toogle-theme');


    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    
    // Check saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

     
       
        
    
    const errorMessage = document.getElementById('errorMessage');
    const trueMessage = document.getElementById('trueMessage');
    
     
    
    const loginTrigger = document.getElementById('login-trigger');
    
    const logoutModal = document.getElementById('logout-modal');
    const closeBtn=document.getElementById('close-btn');
    
     loginTrigger.addEventListener('click', () => {
            logoutModal.style.display = 'block';
            document.body.classList.toggle('no-scroll');
           
           
    
            closeBtn.addEventListener('click', () => {
                logoutModal.style.display= 'none';
                 document.body.classList.toggle('no-scroll');
            });
        
        });

const d = new Date();
const time = d.getHours();
const grt = document.getElementById("greetings");

if (time < 12) {
  grt.innerText = "Good morning";
} else if (time >= 12 && time < 16) {
  grt.innerText = "Good afternoon";
} else if (time >= 16) {
  grt.innerText = "Good evening";
}


    

    
    // Show signup form, hide login
function showSignup() {
    document.getElementById("signup-modal").style.display = "block";
    document.getElementById("login-modal").style.display = "none";
}

// Show login form, hide signup
function showLogin() {
   
    document.body.classList.toggle('no-scroll');
     document.getElementById("signup-modal").style.display = "none";
    document.getElementById("login-modal").style.display = "block";
}


// Signup Function
function signup() {
    let name= document.getElementById("signup-user").value;
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;
    let user="user";
    
    

    if (localStorage.getItem(username)) {
        errorMessage.textContent = 'User already exists! Please';
        errorMessage.style.display = 'block';
       
    } else {
        localStorage.setItem(username, password);
        localStorage.setItem("name",name);
        
        
        errorMessage.style.display = 'none';
        trueMessage.textContent = 'Sign Up Successful!';
        trueMessage.style.display = 'block';
        
    }
 
}
let name= localStorage.getItem("name");
// Login Function
function login() {
     
    
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    

    if (localStorage.getItem (username) === password) {
      
        
      localStorage.setItem("loggedInUser",username); 
      document.getElementById("user-name").innerText=name;
document.getElementById("user-name2").innerText=name;
 
    document.body.classList.toggle('no-scroll');    document.getElementById("login-modal").style.display = "none";
         document.getElementById("welcome-box").style.display = "block";
        errorMessage.style.display = 'none';
        trueMessage.textContent = 'Logged in successfully!';
        trueMessage.style.display = 'block';
    } else {
        errorMessage.textContent = 'Please Enter corret details.';
        errorMessage.style.display = 'block';
        
    }
}



// Logout Function
function logout() {
    localStorage.removeItem("loggedInUser");
     document.getElementById("logout-modal").style.display = "none";
    showLogin();
}


window.onload = function () {
    let loggedInUser = localStorage.getItem("loggedInUser");
    
    if (loggedInUser) {
       document.title= name+"'s FinTrack"; document.getElementById("user-name").innerText = name;
       
document.getElementById("user-name2").innerText = name; document.getElementById("login-modal").style.display = "none";
        document.getElementById("signup-modal").style.display = "none";
        // document.getElementById("welcome-box").style.display = "block";
    }
    else{
        showLogin()
    }
};

    
    
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-nav-active');
        document.body.classList.toggle('no-scroll');
    });
    
    
    
    
    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!hamburgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('mobile-nav-active');
        }
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
    
    
    
    document.addEventListener('DOMContentLoaded', function () {
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
        addTransactionBtn.addEventListener('click', function () {
            transactionModal.style.display = 'flex';
                      document.body.classList.toggle('no-scroll');
        });
    
        // Hide Transaction Modal
        function hideTransactionModal() {
            transactionModal.style.display = 'none';
               document.body.classList.toggle('no-scroll'); document.getElementById('transaction-form').reset();
        }
    
        cancelTransactionBtn.addEventListener('click', hideTransactionModal);
        closeTransactionModal.addEventListener('click', hideTransactionModal);
    
        // Show Connect Modal
        connectAccountBtn.addEventListener('click', function () {
            // Reset form state
            connectionForm.style.display = 'block';
            connectingStatus.style.display = 'none';
            connectionSuccess.style.display = 'none';
                 document.body.classList.toggle('no-scroll');
            connectModal.style.display = 'flex';
        });
    
        // Hide Connect Modal
        function hideConnectModal() {
            connectModal.style.display = 'none';
               document.body.classList.toggle('no-scroll'); document.getElementById('institution-select').value = '';
            document.getElementById('uname').value = '';
            document.getElementById('password').value = '';
        }
    
        cancelConnectBtn.addEventListener('click', hideConnectModal);
        closeConnectModal.addEventListener('click', hideConnectModal);
    
        // Handle Connect Account flow
        connectBtn.addEventListener('click', function () {
            // Validate form
            const institution = document.getElementById('institution-select').value;
            const uname = document.getElementById('uname').value;
            const password = document.getElementById('password').value;
    
            if (!institution || !uname || !password) {
                alert('Please fill in all fields');
                return;
            }
    
            // Show loading state
            connectionForm.style.display = 'none';
            connectingStatus.style.display = 'block';
    
            // Simulate API connection (3 seconds)
            setTimeout(function () {
                connectingStatus.style.display = 'none';
                connectionSuccess.style.display = 'block';
    
                // Auto close after 2 seconds and refresh account list
                setTimeout(function () {
                    hideConnectModal();
                    // Here you would typically refresh the accounts list with new data
                }, 2000);
            }, 3000);
        });
    
    
        // ===== Navigation Tabs =====
        const navLinks = document.querySelectorAll('.nav-links a');
    
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
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
            button.addEventListener('click', function () {
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
    
        monthSelector.addEventListener('change', function () {
            const selectedMonth = this.value;
            console.log(`Loading data for ${selectedMonth}`);
            // Here you would typically update charts and transaction list
            // For demo purposes:
            alert(`Data for ${selectedMonth} would load here. This is a demo.`);
        });
    
        // ===== Transaction Form Submission =====
        const transactionForm = document.getElementById('transaction-form');
    
        transactionForm.addEventListener('submit', function (e) {
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
            option.addEventListener('click', function () {
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
                                callback: function (value) {
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
                                label: function (context) {
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
        window.addEventListener('click', function (event) {
            if (event.target === transactionModal) {
                hideTransactionModal();
            }
            if (event.target === connectModal) {
                hideConnectModal();
            }
        });
    });
    
    // API Configuration

    


    
    const aiToggle= document.querySelector('.ai-toggle');
    const chatContainer= document.querySelector('.chat-container');
    const closeAi=document.querySelector('.close-bttn');
    
    aiToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('bot-visible');
        document.body.classList.toggle('no-scroll');
        
       

        closeAi.addEventListener('click', ()=> {
            chatContainer.classList.remove('bot-visible');
            document.body.classList.toggle('no-scroll');
        });
       
    });
    
    
    
    
    // DOM Elements
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatHistory = document.getElementById('chatHistory');
    const typingIndicator = document.getElementById('typingIndicator');
    const menuBtn = document.getElementById('menuBtn');
    // const chatContainer = document.getElementById('chatContainer');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarClose = document.getElementById('sidebarClose');
    
    const suggestionChips = document.querySelectorAll('.suggestion-chip');
    
    /**
     * Send a request to the AI API
     * @param {string} prompt - The input prompt for the AI
     * @param {Object} options - Additional parameters for the API request
     * @returns {Promise} - Promise resolving to the API response
     */
    async function getAIResponse(prompt, options = {}) {
        // Default parameters that can be overridden by options
        const params = {
            prompt: prompt,
            max_tokens: 100,
            temperature: 0.7,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            ...options
        };
    
        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                body: JSON.stringify(params)
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`API Error: ${errorData.error?.message || response.statusText}`);
            }
    
            return await response.json();
        } catch (error) {
            console.error('Error calling AI API:', error);
            throw error;
        }
    }
    
    // Auto-resize textarea
    chatInput.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    
        // Enable/disable send button based on input
        sendBtn.disabled = !this.value.trim();
    });
    
    // Handle form submission
    chatForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (!message) return;
    
        addMessage(message, 'user');
        chatInput.value = '';
        chatInput.style.height = 'auto';
        sendBtn.disabled = true;
    
        // Show typing indicator
        typingIndicator.style.display = 'flex';
    
        try {
            // Call the AI API instead of using random responses
            const result = await getAIResponse(message);
            const aiResponse = result.choices && result.choices[0] ?
                result.choices[0].text :
                "I'm having trouble connecting to my knowledge source right now.";
    
            // Hide typing indicator after response
            typingIndicator.style.display = 'none';
    
            // Add the AI response to chat
            addMessage(aiResponse, 'ai');
        } catch (error) {
            // Handle errors
            typingIndicator.style.display = 'none';
            addMessage("Sorry, I encountered an error: " + error.message, 'ai');
        }
    
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
                        <button class="message-action-btn copy-btn" title="Copy to clipboard">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                            </svg>
                        </button>
                        ${sender === 'ai' ? `
                        <button class="message-action-btn regenerate-btn" title="Regenerate response">
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
        const copyBtn = messageDiv.querySelector('.copy-btn');
        copyBtn.addEventListener('click', function () {
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
    
        // Add click event for regenerate button (if AI message)
        if (sender === 'ai') {
            const regenerateBtn = messageDiv.querySelector('.regenerate-btn');
            if (regenerateBtn) {
                regenerateBtn.addEventListener('click', async function () {
                    // Get the last user message
                    const userMessages = document.querySelectorAll('.user-message');
                    if (userMessages.length > 0) {
                        const lastUserMessage = userMessages[userMessages.length - 1];
                        const lastUserText = lastUserMessage.querySelector('.message-content').textContent;
    
                        // Remove the current AI message
                        messageDiv.remove();
    
                        // Show typing indicator
                        typingIndicator.style.display = 'flex';
    
                        try {
                            // Get a new response
                            const result = await getAIResponse(lastUserText, {
                                temperature: 1.0 // Increase temperature for more variation
                            });
    
                            const aiResponse = result.choices && result.choices[0] ?
                                result.choices[0].text :
                                "I'm having trouble connecting to my knowledge source right now.";
    
                            // Hide typing indicator
                            typingIndicator.style.display = 'none';
    
                            // Add the new AI response
                            addMessage(aiResponse, 'ai');
                        } catch (error) {
                            typingIndicator.style.display = 'none';
                            addMessage("Sorry, I encountered an error while regenerating: " + error.message, 'ai');
                        }
    
                        // Scroll to bottom
                        chatHistory.scrollTop = chatHistory.scrollHeight;
                    }
                });
            }
        }
    }
    
    // Add event listeners for suggestion chips if they exist
    if (suggestionChips.length > 0) {
        suggestionChips.forEach(chip => {
            chip.addEventListener('click', function () {
                const suggestionText = this.textContent;
                chatInput.value = suggestionText;
                chatInput.dispatchEvent(new Event('input'));
                chatForm.dispatchEvent(new Event('submit'));
            });
        });
    }
    
    // Add menu toggle functionality if menu button exists
    if (menuBtn && sidebarOverlay) {
        menuBtn.addEventListener('click', function () {
            sidebarOverlay.classList.add('active');
        });
    }
    
    // Add sidebar close functionality if close button exists
    if (sidebarClose && sidebarOverlay) {
        sidebarClose.addEventListener('click', function () {
            sidebarOverlay.classList.remove('active');
        });
    }
    
    
    
    // Sidebar toggle
    menuBtn.addEventListener('click', function () {
        chatContainer.classList.add('sidebar-open');
    });
    
    sidebarOverlay.addEventListener('click', function () {
        chatContainer.classList.remove('sidebar-open');
    });
    
    sidebarClose.addEventListener('click', function () {
        chatContainer.classList.remove('sidebar-open');
    });
    
    
    
    // Suggestion chips
    suggestionChips.forEach(chip => {
        chip.addEventListener('click', function () {
            chatInput.value = this.textContent;
            chatInput.dispatchEvent(new Event('input'));
            chatInput.focus();
        });
    });
