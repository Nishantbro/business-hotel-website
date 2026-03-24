# Quick Reference - Admin System Testing Guide

## 🚀 Quick Start

### Login
- URL: `admin-login.html`
- Username: `admin`
- Password: `admin123`

### Access Points
1. Click "Admin" button in navbar (any page)
2. OR go directly to `admin.html` (will redirect to login if not authenticated)

---

## ✅ Test Checklist

### 1. Authentication Tests
- [ ] Click "Admin" button → redirects to login page
- [ ] Wrong username → Error message appears
- [ ] Wrong password → Error message appears
- [ ] Correct credentials → Redirects to admin.html
- [ ] Click "Logout" → Session cleared, redirected to home
- [ ] Direct access to admin.html (not logged in) → Redirects to login

### 2. Booking Tests
- [ ] Go to rooms.html → Click "Book Now"
- [ ] Modal appears confirming booking
- [ ] Go to admin.html → Booking appears in table
- [ ] Click "View" on booking → Shows details in alert
- [ ] Click "Delete" on booking → Removes from table
- [ ] Click "Clear All Bookings" → All removed with confirmation
- [ ] Refresh page → Data persists (stored in localStorage)

### 3. Contact Tests
- [ ] Go to contact.html → Fill form completely
- [ ] Submit form → Success message
- [ ] Go to admin.html → Contact appears in table
- [ ] Message shows preview (first 50 characters)
- [ ] Click "View" → Shows full message and all details
- [ ] Click "Delete" → Removes specific contact
- [ ] Click "Clear All Contacts" → All removed
- [ ] Refresh page → Data persists

### 4. Responsive Tests
- [ ] Desktop (1366px+) → Tables display normally
- [ ] Tablet (768px-1365px) → Tables readable
- [ ] Mobile (320px-767px) → Tables scroll horizontally
- [ ] Navbar Admin button → Visible on all sizes

### 5. UI/UX Tests
- [ ] All buttons clickable and responsive
- [ ] Colors consistent with theme
- [ ] Icons display correctly (Font Awesome)
- [ ] No console errors (F12 → Console tab)
- [ ] Navigation between sections smooth
- [ ] Hover effects working on buttons

---

## 📊 Data Storage Check

**View Stored Data in Browser Console**:
```javascript
// Check if logged in
localStorage.getItem('isAdminLoggedIn')

// View all bookings
JSON.parse(localStorage.getItem('bookings'))

// View all contacts
JSON.parse(localStorage.getItem('contacts'))

// Clear all data (use with caution!)
localStorage.clear()
```

---

## 🔍 Expected Data Formats

### Booking Object
```json
{
    "id": 1710757830123,
    "room": "Executive Suite",
    "date": "Mar 18, 2026, 10:30 AM",
    "status": "New"
}
```

### Contact Object
```json
{
    "id": 1710757830124,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+91 9876543210",
    "subject": "Room Booking Inquiry",
    "message": "I would like to book an executive suite for 3 nights.",
    "timestamp": "Mar 18, 2026, 10:30 AM"
}
```

---

## 🛠️ Debug Commands

### Check Page Element
1. Open DevTools (F12)
2. Click Elements tab
3. Search for: `id="bookingsBody"` or `id="contactsBody"`
4. Verify tables exist

### Monitor JavaScript
1. Open DevTools (F12)
2. Click Console tab
3. Watch for logs when:
   - Logging in
   - Creating bookings
   - Submitting contacts
   - Deleting records

### Test localStorage
1. Open DevTools (F12)
2. Click Application tab
3. Select "Local Storage"
4. View all stored keys and values

---

## 📱 Mobile Testing Steps

### With DevTools
1. Press F12 → Toggle responsive design (Ctrl+Shift+M)
2. Select device (iPhone 12, iPad, etc.)
3. Test all interactions

### Real Mobile Device
1. Get PC IP: `ipconfig` (Windows) → IPv4 Address
2. On mobile: `http://<IP>:PORT/admin-login.html`
3. Use actual device size for testing

---

## ⚠️ Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| "Admin" button not showing | CSS not loaded | Refresh page, check css/style.css exists |
| Login redirects to blank | 404 admin-login.html | Verify file exists in root directory |
| Bookings not saving | Book button doesn't have .btn-book class | Check main.js selector targets correct button |
| No data showing | localStorage disabled | Enable in browser settings |
| Can't delete all | Confirmation cancelled | Click "OK" on confirmation dialog |
| Session lost on refresh | isAdminLoggedIn not set | Login again, check localStorage in DevTools |

---

## 🎯 Key Files Reference

| File | Purpose | Key Function |
|------|---------|--------------|
| admin-login.html | Login authentication | Form submission handler |
| admin.html | Dashboard UI | HTML table structures |
| admin.js | Data management | loadBookingsData(), loadContactsData() |
| main.js | Event capture | Booking & contact save handlers |
| css/style.css | Styling | .admin-nav-link, .table-wrapper |

---

## 📋 Browser Console Log Messages

**Expected Logs**:
- Login: `isAdminLoggedIn set to true`
- Booking save: `✅ Loaded X bookings`
- Contact save: `✅ Loaded X contacts`
- Delete: `Deleted booking/contact: [id]`
- Logout: `Logged out and redirected`

---

## ⏱️ Performance Notes

- **Login speed**: Should be instant (hardcoded validation)
- **Data display**: Should be instant for <100 records
- **Page load**: <2 seconds even with slow internet (localStorage is local)

---

## 🔐 Security Reminder

⚠️ **DO NOT use in production**:
- Credentials embedded in HTML
- Data stored in plain text
- No encryption or validation
- Single machine storage

✅ **Production requirements**:
- Backend API with authentication
- Database for persistence
- Password hashing
- HTTPS encryption
- Input validation
- Access control

---

## 📞 Contact & Support

For updates or issues, refer to main README.md or create issue in version control.

---

**Happy Testing! 🎉**
