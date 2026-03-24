# Responsive Design Reference Guide
## LuxBiz Hotel Website - Breakpoints & Specifications

---

## 📱 BREAKPOINT OVERVIEW

```
┌─────────────────────────────────────────────────────────────┐
│  320px          480px          768px          1200px        │
│   │              │               │              │            │
│   └──MOBILE──────┼───TABLET─────┼─DESKTOP──────┘            │
│    (Extra)   (Primary)    (Landscape)   (Large)             │
└─────────────────────────────────────────────────────────────┘
```

---

## 1️⃣ MOBILE - EXTRA SMALL (≤320px)

**Use Case**: Feature phones, very old devices

**Styling**:
- `padding: 0 12px` (minimal padding)
- `hero-title: 1.4rem` (extra compact)
- `hero-title: 0.85rem` (sub heading)
- `btn: 9px 16px` (tiny buttons)
- Single column layouts

---

## 2️⃣ MOBILE - PRIMARY (321px - 480px)

**Use Case**: iPhone SE, older Android phones, portrait mode

**Layout Changes**:
```
Rooms Grid:    1 column (full width)
Amenities:     1 column
About Stats:   1 column
Features:      2x2 grid → 2 columns

Featured Rooms Structure:
┌─────────────────┐
│  Room Image     │
│   (200px h)     │
├─────────────────┤
│  Badge          │
│  Title          │
│  Description    │
│  Features (col) │
├─────────────────┤
│ Price           │ ← Left aligned
│ Button (100%)   │ ← Full width
└─────────────────┘
```

**Sizing**:
- `hero: 350px` height
- `hero-title: 1.6rem`
- `rooms-grid: 1fr` (single column)
- `room-footer: flex-direction: column` (stacked)
- `btn: 10px 18px` (smallest)
- `room-price .price: 1.6rem`

**Spacing**:
- Container padding: `0 15px`
- Gap between elements: `0.8-1rem`
- Card padding: `1.2rem`

---

## 3️⃣ TABLET - PORTRAIT (481px - 600px)

**Use Case**: iPad Mini, small tablets, large phones

**Layout Changes**:
```
Rooms Grid:    2 columns (side by side)
Amenities:     2 columns
About:         Single column, but spacious
Features:      Multi-column

Featured Rooms:
┌──────────┬──────────┐
│ Room 1   │ Room 2   │  ← 2 columns
├──────────┼──────────┤
│ Price    │ Price    │
│ Button   │ Button   │
└──────────┴──────────┘
```

**Sizing**:
- `hero: 400px` height
- `hero-title: 2rem`
- `btn: 11px 22px` (medium)
- `room-footer: flex-direction: column` (still stacked)
- `room-price .price: 1.5rem`

---

## 4️⃣ TABLET - LANDSCAPE (601px - 768px)

**Use Case**: iPad landscape, large tablets, Windows tablets

**Layout Changes**:
```
Rooms Grid:    2 columns (optimized)
Contact Form:  1 column (full width form)
Map Info:      3 columns (if applicable)

Featured Rooms Remains: 2 columns
Room Details: Full width (stacked)
```

**Sizing**:
- `hero: ~400px` height
- `hero-title: 2rem - 2.2rem`
- `btn: 11px 22px`
- `room-footer: flex-direction: column`
- Media queries apply full styling

---

## 5️⃣ DESKTOP / LAPTOP (769px - 1099px)

**Use Case**: Desktop browsers, laptops, small monitors

**Layout Changes**:
```
Rooms Grid:    3 columns (full featured display)
Amenities:     3 columns
Contact:       2 column layout (form + info)

Featured Rooms:
┌─────────┬─────────┬─────────┐
│ Room 1  │ Room 2  │ Room 3  │  ← 3 columns
├─────────┴─────────┴─────────┤
│ Price  ←→  Button  ←→ Price  │  ← Horizontal
└─────────┬─────────┬─────────┘

Room Details:
┌────────────────────────────────┐
│  Image (1fr) │ Content (1.5fr) │  ← Side-by-side
├──────────────┼─────────────────┤
│              │ Title  ···  Price
│              │ Desc, Features  │
└──────────────┴─────────────────┘
```

**Sizing**:
- `hero: 600px` height
- `hero-title: 3rem`
- `btn: 13px 28px` (standard)
- `room-footer: flex-direction: row`
- `room-price .price: 1.9rem`
- Full 3-column layouts

**Spacing**:
- Container padding: `0 20px`
- Grid gaps: `2rem - 2.5rem`
- Card padding: `1.8rem - 3rem`

---

## 6️⃣ LARGE DESKTOP (1100px+)

**Use Case**: Large monitors, widescreen displays

**Styling**:
- Container max-width: `1200px`
- Same as Desktop (769px+)
- Extra visual breathing room
- Optimal readability

---

## 🎨 BUTTON RESPONSIVE SIZING

```
Device Type        Padding         Font Size   Use Case
─────────────────────────────────────────────────────────
Extra Small        9px 16px        0.8rem      Minimal space
Mobile             10px 18px       0.85rem     Compact, touchable
Mobile (Primary)   10px 18px       0.85rem     Standard mobile
Tablet             11px 22px       0.9rem      Balanced
Desktop            13px 28px       1rem        Full size

Button Heights (approximate):
- Mobile: ~28-30px (easy touch target)
- Desktop: ~38-40px (visual hierarchy)
```

---

## 🖼️ FEATURED ROOM CARD - RESPONSIVE STRUCTURE

### Mobile (≤480px)
```height: varies
Image:      200px
Badge:      10px 12px, 0.75rem
Title:      1.15rem
Description: 0.85rem
Features:   2 columns (8.6 × 2 grid)
Price:      1.6rem (left-aligned)
Button:     100% width, 10px 16px
```

### Tablet (481-768px)
```
Image:      220px
Badge:      12px 14px, 0.8rem
Title:      1.2rem
Description: 0.9rem
Features:   2-3 columns
Price:      1.5rem
Button:     100% width, 11px
```

### Desktop (769px+)
```
Image:      250px
Badge:      15px 16px, 0.85rem
Title:      1.35rem
Description: 0.95rem
Features:   4 columns
Price:      1.9rem (right-aligned)
Button:     inline, 13px 28px
```

---

## 📊 ROOM FOOTER LAYOUT

### Mobile & Tablet
```
┌──────────────────────┐
│ Price: ₹4,999        │  ← flex-grow: 0, stays compact
├──────────────────────┤
│ [View Details Button]│  ← 100% width
└──────────────────────┘
```

### Desktop
```
┌──────────────┬──────────────┐
│ Price: ₹4,999│ [View Details]│  ← space-between
└──────────────┴──────────────┘
```

---

## 📝 TYPOGRAPHY SCALING

```
Element             Mobile    Tablet    Desktop
─────────────────────────────────────────────────
Hero Title          1.6rem    2rem      3rem
Hero Subtitle       0.95rem   1rem      1.3rem
Section Header      1.8rem    2.2rem    2.5rem
Room Card Title     1.15rem   1.2rem    1.35rem
Room Card Desc      0.85rem   0.9rem    0.95rem
Price (Featured)    1.6rem    1.5rem    1.9rem
Price (Details)     1.8rem    2rem      2.5rem
Button Text         0.85rem   0.9rem    1rem
Body Text           0.9rem    0.95rem   1rem
```

---

## 🎯 SPACING GUIDELINES

```
Breakpoint          Container    Card      Gap      Line Height
                    Padding      Padding   Grid
─────────────────────────────────────────────────────────────
Mobile (≤480px)     0 15px       1.2rem    0.8rem   1.6
Tablet              0 18px       1.5rem    1.2rem   1.65
Desktop             0 20px       1.8rem    2.5rem   1.75
```

---

## ✅ TESTING COORDINATES

Use browser DevTools:

1. **Mobile View**: 
   - iPhone SE: 375×667
   - iPhone 12: 390×844
   - Galaxy S20: 360×800

2. **Tablet View**:
   - iPad (9.7"): 768×1024
   - iPad Pro (11"): 834×1194
   - Surface Go: 960×640

3. **Desktop View**:
   - Laptop: 1366×768
   - Desktop: 1920×1080
   - MacBook Air: 1440×900

---

## 🔍 KEY METRIC CHANGES

| Metric | Mobile | Tablet | Desktop |
|--------|--------|--------|---------|
| Column Count | 1 | 2 | 3 |
| Hero Height | 350px | 400px | 600px |
| Button Padding | 10×18px | 11×22px | 13×28px |
| Room Img Height | 200px | 220px | 250px |
| Container Max-W | 100% | 100% | 1200px |
| Card Shadow | Light | Light | Medium |

---

## 🎨 CSS BREAKPOINTS IN CODE

```css
/* Mobile-First Approach */

/* Extra Small (≤320px) */
@media (max-width: 320px) { }

/* Primary Mobile (321-480px) */
@media (max-width: 480px) { }

/* Tablet Portrait (481-768px) */
@media (min-width: 481px) and (max-width: 768px) { }

/* Desktop (769px+) */
@media (min-width: 769px) { }
```

---

## 🚀 PERFORMANCE NOTES

✅ **Optimized Load**:
- Images scale with `object-fit: cover`
- Minimal CSS for mobile (mobile-first)
- No layout shifts on resize
- Smooth transitions (0.25s)

✅ **Accessibility**:
- Touch targets: 44px+ minimum
- Readable contrast ratios
- Semantic HTML maintained
- Focus states optimized

✅ **Compatibility**:
- CSS Grid: Full support
- Flexbox: Full support
- Object-fit: Full support
- Media queries: Full support

---

*Last Updated: 2025 | LuxBiz Hotel Responsive Design System*
