// Admin Dashboard JS - Simple & Clean

document.addEventListener('DOMContentLoaded', function () {
    checkLogin();
    initNav();
    initMobile();
    setupLogout();
    loadBookingsData();
    loadContactsData();
    updateStats();
});

// ---- Login Check ----
function checkLogin() {
    if (localStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = 'admin-login.html';
    }
}

// ---- Logout ----
function setupLogout() {
    const btn = document.querySelector('.logout-btn');
    if (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('isAdminLoggedIn');
            localStorage.removeItem('adminUsername');
            window.location.href = 'index.html';
        });
    }
}

// ---- Sidebar Navigation ----
function initNav() {
    const links = document.querySelectorAll('.sidebar-nav a');
    const sections = document.querySelectorAll('.content-section');
    const pageTitle = document.getElementById('pageTitle');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var target = this.getAttribute('data-section');

            links.forEach(function (l) { l.classList.remove('active'); });
            this.classList.add('active');

            sections.forEach(function (s) { s.classList.remove('active'); });
            var el = document.getElementById(target);
            if (el) el.classList.add('active');

            var names = {
                dashboard: 'Dashboard',
                bookings: 'Bookings',
                inquiries: 'Inquiries',
                rooms: 'Rooms'
            };
            if (pageTitle) pageTitle.textContent = names[target] || 'Dashboard';

            if (target === 'bookings') loadBookingsData();
            if (target === 'inquiries') loadContactsData();

            // close mobile sidebar
            var sidebar = document.getElementById('sidebar');
            var overlay = document.getElementById('sidebarOverlay');
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('mobile-open');
                overlay.classList.remove('active');
            }
        });
    });
}

function switchSection(id) {
    var link = document.querySelector('[data-section="' + id + '"]');
    if (link) link.click();
}

// ---- Mobile Menu ----
function initMobile() {
    var btn = document.getElementById('mobileMenuBtn');
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebarOverlay');

    if (btn) {
        btn.addEventListener('click', function () {
            sidebar.classList.toggle('mobile-open');
            overlay.classList.toggle('active');
        });
    }
    if (overlay) {
        overlay.addEventListener('click', function () {
            sidebar.classList.remove('mobile-open');
            overlay.classList.remove('active');
        });
    }
}

// ---- Stats ----
function updateStats() {
    var bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    var bEl = document.getElementById('totalBookings');
    var cEl = document.getElementById('totalInquiries');
    if (bEl) bEl.textContent = bookings.length;
    if (cEl) cEl.textContent = contacts.length;
}

// ---- Bookings ----
function loadBookingsData() {
    var body = document.getElementById('bookingsBody');
    var recentBody = document.getElementById('recentBookingsBody');
    var bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    if (body) {
        body.innerHTML = '';
        if (bookings.length === 0) {
            body.innerHTML = '<tr><td colspan="4" class="empty-msg">No bookings yet</td></tr>';
        } else {
            bookings.slice().reverse().forEach(function (b) {
                var row = document.createElement('tr');
                row.innerHTML =
                    '<td><strong>' + escapeHtml(b.room) + '</strong></td>' +
                    '<td>' + escapeHtml(b.date) + '</td>' +
                    '<td><span class="status-badge pending">' + escapeHtml(b.status) + '</span></td>' +
                    '<td>' +
                    '<button class="table-btn view" onclick="viewBooking(' + b.id + ')"><i class="fas fa-eye"></i></button> ' +
                    '<button class="table-btn delete" onclick="deleteBooking(' + b.id + ')"><i class="fas fa-trash"></i></button>' +
                    '</td>';
                body.appendChild(row);
            });
        }
    }

    // Recent bookings on dashboard (max 3)
    if (recentBody) {
        recentBody.innerHTML = '';
        if (bookings.length === 0) {
            recentBody.innerHTML = '<tr><td colspan="3" class="empty-msg">No bookings yet</td></tr>';
        } else {
            bookings.slice().reverse().slice(0, 3).forEach(function (b) {
                var row = document.createElement('tr');
                row.innerHTML =
                    '<td><strong>' + escapeHtml(b.room) + '</strong></td>' +
                    '<td>' + escapeHtml(b.date) + '</td>' +
                    '<td><span class="status-badge pending">' + escapeHtml(b.status) + '</span></td>';
                recentBody.appendChild(row);
            });
        }
    }

    updateStats();
}

function deleteBooking(id) {
    if (confirm('Delete this booking?')) {
        var bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings = bookings.filter(function (b) { return b.id !== id; });
        localStorage.setItem('bookings', JSON.stringify(bookings));
        loadBookingsData();
        showNotification('Booking deleted', 'success');
    }
}

function viewBooking(id) {
    var bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    var b = bookings.find(function (x) { return x.id === id; });
    if (b) {
        alert('Booking Details:\n\nRoom: ' + b.room + '\nDate: ' + b.date + '\nStatus: ' + b.status);
    }
}

function clearAllBookings() {
    if (confirm('Delete ALL bookings?')) {
        localStorage.removeItem('bookings');
        loadBookingsData();
        showNotification('All bookings cleared', 'success');
    }
}

// ---- Contacts ----
function loadContactsData() {
    var body = document.getElementById('contactsBody');
    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    if (!body) return;
    body.innerHTML = '';

    if (contacts.length === 0) {
        body.innerHTML = '<tr><td colspan="6" class="empty-msg">No inquiries yet</td></tr>';
        updateStats();
        return;
    }

    contacts.slice().reverse().forEach(function (c) {
        var name = escapeHtml(c.firstName + ' ' + c.lastName);
        var msg = escapeHtml(c.message.substring(0, 50) + (c.message.length > 50 ? '...' : ''));
        var row = document.createElement('tr');
        row.innerHTML =
            '<td><strong>' + name + '</strong></td>' +
            '<td>' + escapeHtml(c.email) + '</td>' +
            '<td>' + escapeHtml(c.phone || 'N/A') + '</td>' +
            '<td>' + msg + '</td>' +
            '<td>' + escapeHtml(c.timestamp) + '</td>' +
            '<td>' +
            '<button class="table-btn view" onclick="viewContact(' + c.id + ')"><i class="fas fa-eye"></i></button> ' +
            '<button class="table-btn delete" onclick="deleteContact(' + c.id + ')"><i class="fas fa-trash"></i></button>' +
            '</td>';
        body.appendChild(row);
    });

    updateStats();
}

function deleteContact(id) {
    if (confirm('Delete this inquiry?')) {
        var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts = contacts.filter(function (c) { return c.id !== id; });
        localStorage.setItem('contacts', JSON.stringify(contacts));
        loadContactsData();
        showNotification('Inquiry deleted', 'success');
    }
}

function viewContact(id) {
    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    var c = contacts.find(function (x) { return x.id === id; });
    if (c) {
        alert('Name: ' + c.firstName + ' ' + c.lastName +
            '\nEmail: ' + c.email +
            '\nPhone: ' + (c.phone || 'N/A') +
            '\nSubject: ' + c.subject +
            '\nDate: ' + c.timestamp +
            '\n\nMessage:\n' + c.message);
    }
}

function clearAllContacts() {
    if (confirm('Delete ALL inquiries?')) {
        localStorage.removeItem('contacts');
        loadContactsData();
        showNotification('All inquiries cleared', 'success');
    }
}

// ---- Notification ----
function showNotification(message, type) {
    var old = document.querySelectorAll('.admin-notification');
    old.forEach(function (n) { n.remove(); });

    var colors = { success: '#27ae60', error: '#e74c3c', info: '#3498db' };
    var icons = { success: 'check-circle', error: 'times-circle', info: 'info-circle' };

    var div = document.createElement('div');
    div.className = 'admin-notification';
    div.innerHTML = '<i class="fas fa-' + (icons[type] || 'info-circle') + '"></i> ' + escapeHtml(message);
    div.style.cssText = 'position:fixed;top:80px;right:20px;background:white;padding:0.8rem 1.2rem;border-radius:8px;box-shadow:0 3px 12px rgba(0,0,0,0.12);display:flex;align-items:center;gap:0.6rem;z-index:9999;border-left:4px solid ' + (colors[type] || colors.info) + ';font-size:0.9rem;';
    div.querySelector('i').style.color = colors[type] || colors.info;

    document.body.appendChild(div);
    setTimeout(function () { div.remove(); }, 3000);
}

// ---- Utility ----
function escapeHtml(text) {
    if (!text) return '';
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
}