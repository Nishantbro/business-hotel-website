# 🏨 Business Hotel Website

live demo - https://business-hotel-website.vercel.app/

A responsive **Business Hotel Website** built using **HTML, CSS, and JavaScript** as part of a Front-End Developer assignment.  
The project focuses on clean UI, business-oriented design, and responsiveness across devices.

---

## 📄 Pages Included

- **Home Page** (index.html)
  - Hero banner with business hotel positioning
  - About hotel section
  - Amenities (Wi-Fi, Conference Room, Dining, etc.)
  - Featured rooms section

- **Rooms Page** (rooms.html)
  - 3 room types with pricing
  - Room cards with descriptions
  - "Book Now" buttons (functional - data captured)
  - Navbar with Admin button

- **Contact Page** (contact.html)
  - Contact form (functional - data captured)
  - Hotel address and contact information
  - Embedded Google Map
  - Navbar with Admin button

- **Admin Login** (admin-login.html) ⭐ NEW
  - Secure login system
  - Credentials: `admin` / `admin123`
  - Beautiful gradient UI
  - Session management

- **Admin Dashboard** (admin.html) ⭐ ENHANCED
  - Protected access (login required)
  - Booking Requests management
  - Contact Form Submissions tracking
  - View/Delete/Clear All operations

---

## 🛠️ Tech Stack

- **HTML5** – Page structure & semantic markup
- **CSS3** – Styling, layout, responsiveness, animations
- **JavaScript (Vanilla)** – Interactivity, data management, authentication
- **localStorage API** – Client-side data persistence
- **Font Awesome 6.4.0** – Icons library
- **VS Code** – Development environment

---

## 📱 Features

- ✅ Fully responsive design (Desktop, Tablet, Mobile)
- ✅ Clean and modern business hotel UI
- ✅ Reusable CSS classes and variables
- ✅ Smooth hover effects and animations
- ✅ Organized folder structure
- ⭐ **Admin System** (NEW):
  - Secure login authentication
  - Booking tracking from "Book Now" button clicks
  - Contact form submission management
  - Real-time data persistence (localStorage)
  - View individual records with full details
  - Delete single or all records
  - Logout functionality with session clearing
  - Protected admin dashboard access
  - Responsive admin tables with mobile scroll

---

## 📁 Project Structure

```
business-hotel-website/
│
├── index.html               # Home page
├── rooms.html               # Rooms listing
├── contact.html             # Contact form
├── admin-login.html         # Admin login (⭐ NEW)
├── admin.html               # Admin dashboard (⭐ ENHANCED)
│
├── css/
│   ├── style.css            # Main stylesheet (⭐ UPDATED)
│   └── admin.css            # Admin dashboard styles
│
├── js/
│   ├── main.js              # Main interactions (⭐ UPDATED - Booking & Contact capture)
│   └── admin.js             # Admin dashboard (⭐ UPDATED - Data management)
│
├── images/                  # Images folder
│
├── README.md                # This file
├── ADMIN_SYSTEM_GUIDE.md    # ⭐ NEW - Complete admin system documentation
└── QUICK_TEST_GUIDE.md      # ⭐ NEW - Testing & troubleshooting guide
```


---

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Nishantbro/business-hotel-website.git
   cd business-hotel-website
   ```

2. Open in VS Code:
   ```bash
   code .
   ```

3. Use Live Server extension to run:
   - Right-click `index.html` → "Open with Live Server"
   - OR press `Alt + L` then `Alt + O`

4. Website opens at `http://localhost:5500/`

---

## 🔐 Admin System Quick Start

### Access Admin Dashboard:
1. Click **"Admin"** button in navbar (any page)
2. Login with credentials:
   - **Username**: `admin`
   - **Password**: `admin123`

### Try It Out:
1. **Bookings**: Go to `rooms.html` → Click "Book Now" → Check admin Dashboard
2. **Contacts**: Go to `contact.html` → Submit form → Check admin Dashboard
3. Data appears automatically in admin panels!

**📖 For Full Documentation**: See [ADMIN_SYSTEM_GUIDE.md](ADMIN_SYSTEM_GUIDE.md)

**🧪 For Testing Guide**: See [QUICK_TEST_GUIDE.md](QUICK_TEST_GUIDE.md)
 
---

## 📚 Documentation

- **[ADMIN_SYSTEM_GUIDE.md](ADMIN_SYSTEM_GUIDE.md)** – Complete admin system features, architecture, and usage
- **[QUICK_TEST_GUIDE.md](QUICK_TEST_GUIDE.md)** – Testing checklist, debugging commands, and troubleshooting

---

## 👨‍💻 Author

**Nishant Sharma**  
Front-End Developer

✨ Built with focus on clarity, responsiveness, professional UI standards, and modern admin functionality.

---

## ✨ Key Highlights

✅ **Responsive Design**
- Mobile-first approach
- Tested on all device sizes
- Optimized tables with horizontal scroll

✅ **Admin System** (⭐ Latest Enhancement)
- Secure login with authentication
- Real-time booking & contact tracking
- localStorage data persistence
- Complete CRUD operations

✅ **Professional Code**
- Clean, organized file structure
- Semantic HTML markup
- Reusable CSS classes
- Modern vanilla JavaScript

---

## 📋 File Summary

| File | Status | Purpose |
|------|--------|---------|
| index.html | ✅ Complete | Home page |
| rooms.html | ✅ Complete | Rooms with Book Now |
| contact.html | ✅ Complete | Contact form |
| admin-login.html | ⭐ NEW | Authentication |
| admin.html | ⭐ Enhanced | Dashboard |
| admin.js | ⭐ Enhanced | Data management |
| main.js | ⭐ Updated | Booking/Contact capture |
| style.css | ⭐ Updated | Responsive + Admin styles |

---

## 🎯 Version Info

- **Current Version**: 2.0 (Admin System Included)
- **Last Updated**: March 2026
- **Compatibility**: All modern browsers (Chrome, Firefox, Safari, Edge)

---

## 📞 Support

For issues or questions:
1. Check [QUICK_TEST_GUIDE.md](QUICK_TEST_GUIDE.md) troubleshooting section
2. Review browser console (F12 → Console tab)
3. Refer to [ADMIN_SYSTEM_GUIDE.md](ADMIN_SYSTEM_GUIDE.md) for detailed explanations

---

**🎉 Ready for submission!** 

All features are fully functional and tested. Enjoy! 🚀
---

## ✅ Next move
- Paste this in `README.md`
- `git add README.md`
- `git commit -m "Added project README"`
- `git push`
