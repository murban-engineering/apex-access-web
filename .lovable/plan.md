

# Access & Height Safety Services — Full Build Plan

## Design Direction
Industrial & bold aesthetic — dark backgrounds (charcoal/near-black), orange/amber accents for CTAs and highlights, strong sans-serif typography. Gritty, confident feel that conveys safety expertise and reliability.

---

## Phase 1: Public Marketing Pages

### 1. Home Page
- Full-width hero with bold headline, dark overlay on a construction/rope access background image, two CTAs: **"Request a Quote"** and **"Call Now"**
- Services overview grid (4 cards: Rope Access, Scaffolding, Mobile Access Platforms, Netting & Decking) with icons and short descriptions
- Safety & certifications badges strip
- Featured projects carousel with images and short descriptions
- Testimonials section with client quotes
- Footer with contact info, quick links, and social icons

### 2. Services Pages
- Main services landing page with all 4 service categories
- Individual service detail pages for each sub-service (e.g., Rope Access → Inspection, Maintenance, High-rise Works)
- Each page includes description, benefits, related images, and a CTA to request a quote for that service
- Service comparison section on the main services page

### 3. Projects / Gallery
- Grid gallery of project images with filtering by service type
- Before/after image slider for select projects
- Case study detail pages with project overview, challenges, and results

### 4. About Us
- Company profile section with mission and history
- Certifications & accreditations display
- Safety policy summary
- Team members grid with photos and roles

### 5. Blog / Safety Updates
- Blog listing page with cards (title, excerpt, date, category)
- Individual blog post pages
- Category filtering

### 6. Contact / Quote Page
- Multi-service quote request form with service selector, project details, file upload, and contact fields
- Embedded map showing office location
- Direct contact details (phone, email, address)

---

## Phase 2: Backend & Database (Lovable Cloud + Supabase)

### 7. Database Setup
- **Quote submissions** table — stores all form data including selected services, project details, and uploaded file references
- **Projects** table — for gallery/case studies content
- **Blog posts** table — title, content, category, date, author
- **Team members** table — name, role, photo, bio
- **Testimonials** table — client name, company, quote
- **User roles** table — for admin access control
- Storage bucket for project images and quote file uploads

### 8. Email Notifications
- Edge function using Resend to send email alerts when a new quote is submitted (you'll need a Resend API key and verified domain)

### 9. Admin Panel
- Protected admin area with authentication (email/password login)
- Dashboard showing recent quote submissions
- CRUD management for:
  - Projects/gallery items
  - Blog posts
  - Team members
  - Testimonials
- Quote submissions viewer with status tracking

---

## Phase 3: Polish & SEO

### 10. Responsive & Performance
- Fully mobile-responsive across all pages
- Optimized image loading and lazy loading
- Smooth scroll animations on key sections

### 11. SEO
- Dedicated SEO-friendly URLs for each service page
- Meta titles, descriptions, and Open Graph tags per page
- Structured heading hierarchy

---

## Navigation Structure
**Header:** Logo | Services (dropdown) | Projects | About | Blog | Contact / Get Quote (highlighted CTA button)

All content starts with placeholder text and images — you can swap in real content at any time by uploading through the chat.

