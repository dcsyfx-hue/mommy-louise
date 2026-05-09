# Mommy Louise - Luxury Cash Stuffing E-Commerce Platform

[![Deployment Ready](https://img.shields.io/badge/Status-Production%20Ready-success?style=flat-square)](./DEPLOYMENT_CHECKLIST.md)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.4-black?style=flat-square)](https://nextjs.org)
[![Supabase](https://img.shields.io/badge/Database-Supabase-green?style=flat-square)](https://supabase.com)
[![Stripe](https://img.shields.io/badge/Payments-Stripe-blue?style=flat-square)](https://stripe.com)

A premium, full-featured e-commerce platform for luxury cash stuffing budgeting products, templates, and digital resources. Built with Next.js 16, Supabase, Stripe, and Tailwind CSS.

## 🚀 Quick Launch

**Deploy to Vercel in 30 seconds:**
1. Click "Publish" in v0
2. Add Supabase & Stripe environment variables
3. Your site goes live instantly

[Full Deployment Guide →](./DEPLOYMENT_CHECKLIST.md)

## 📋 What's Included

### 7 Phases of Implementation

#### Phase 1: Authentication
- Email/password sign-up and login
- Session management with Supabase Auth
- User profiles and dashboard
- Password recovery flow

#### Phase 2: Homepage Hub
- Central homepage with interconnected CTAs
- Featured products showcase
- Community preview
- Blog highlights
- Global navigation & footer

#### Phase 3: E-Commerce Shop
- Product listing with filtering
- Detailed product pages with reviews
- Dynamic product catalog (8 luxury items)
- Category and search functionality

#### Phase 4: Shopping Cart & Checkout
- Real-time cart management
- Stripe embedded checkout
- Order confirmation
- Payment processing
- Order history tracking

#### Phase 5: Digital Delivery
- Digital license key generation
- Download tracking with limits
- License expiration management
- Secure download links

#### Phase 6: Admin Dashboard
- Secure admin authentication
- Role-based access control
- Product management
- Order tracking
- Customer management
- Analytics & reporting
- Coupon/discount management
- Settings configuration

#### Phase 7: Community Features
- Real-time community chat (4 rooms)
- Blog system with SEO optimization
- Support for templates & challenges
- FAQ system
- About & Contact pages

## 📊 Feature Overview

| Feature | Status | Details |
|---------|--------|---------|
| **Authentication** | ✅ | Supabase Auth, sessions, profiles |
| **Products** | ✅ | 8 luxury items, reviews, ratings |
| **Shopping Cart** | ✅ | Real-time sync, persistent storage |
| **Payments** | ✅ | Stripe checkout, order tracking |
| **Digital Delivery** | ✅ | License keys, download limits |
| **Community Chat** | ✅ | Real-time Supabase Realtime |
| **Blog** | ✅ | SEO-optimized, categories, tags |
| **Admin Panel** | ✅ | Full management dashboard |
| **Mobile Responsive** | ✅ | 100% mobile-first design |
| **Security** | ✅ | RLS, auth guards, encrypted payments |

## 🏗 Technology Stack

- **Frontend:** Next.js 16 with React 19
- **Database:** Supabase PostgreSQL
- **Authentication:** Supabase Auth
- **Payments:** Stripe
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Real-time:** Supabase Realtime
- **Deployment:** Vercel
- **Package Manager:** pnpm

## 📁 Project Structure

```
mommy-louise/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── shop/              # Product catalog
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── blog/              # Blog system
│   ├── community/         # Community chat
│   ├── admin/             # Admin panel
│   ├── templates/         # Templates page
│   ├── challenges/        # Challenges page
│   ├── faq/               # FAQ page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout with global nav
├── components/            # Reusable React components
│   ├── GlobalNav.tsx      # Navigation header
│   ├── MobileNav.tsx      # Mobile navigation
│   ├── GlobalFooter.tsx   # Footer
│   ├── AdminSidebar.tsx   # Admin sidebar
│   └── ui/                # shadcn/ui components
├── lib/                   # Utilities and helpers
│   ├── supabase/          # Supabase client setup
│   ├── admin.ts           # Admin utilities
│   ├── products.ts        # Product catalog
│   └── utils.ts           # Helper functions
├── public/                # Static assets
├── styles/                # Global styles
├── DEPLOYMENT_CHECKLIST.md # Pre-deployment guide
├── QUICK_START.md         # Quick start guide
└── README.md              # This file
```

## 🎨 Design System

**Colors:**
- Primary: Soft Pink (#EC4899)
- Secondary: Beige
- Background: Warm White
- Accents: Black

**Typography:**
- Font Family: Geist (sans) + Geist Mono
- Responsive sizing
- Accessible contrast ratios

**Components:**
- 125+ shadcn/ui components
- Glassmorphism design
- Luxury feminine aesthetic

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)
- Supabase account
- Stripe account

### Local Development

```bash
# Install dependencies
pnpm install

# Set up environment variables
# Copy .env.example to .env.local and fill in your values
cp .env.example .env.local

# Start development server
pnpm dev

# Open browser
# http://localhost:3000
```

### Environment Variables

Required environment variables (add to `.env.local` or Vercel):

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 📦 Database Schema

The project includes 14 automatically managed tables:
- `profiles` - User accounts
- `products` - Product catalog
- `orders` - Customer orders
- `cart_items` - Shopping cart
- `coupons` - Discount codes
- `blog_posts` - Blog articles
- `chat_messages` - Community messages
- `digital_licenses` - License keys
- `product_reviews` - User reviews
- `announcements` - Store announcements
- `loyalty_points` - User rewards
- `referrals` - Referral program
- `order_items` - Order details
- Plus system tables

All tables include Row Level Security (RLS) for data protection.

## 🔐 Security Features

- ✅ Supabase Row Level Security (RLS)
- ✅ Session-based authentication
- ✅ Role-based access control (admin panel)
- ✅ Encrypted payment processing (Stripe)
- ✅ Protected API routes
- ✅ Input validation and sanitization
- ✅ HTTPS only in production
- ✅ Secure session cookies

## 🛠 Deployment

### Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Go to Vercel:**
   - https://vercel.com/new
   - Import your GitHub repository
   - Vercel detects Next.js automatically

3. **Add Environment Variables:**
   - Add all required env vars in Vercel dashboard
   - Or use v0 "Publish" button for automatic setup

4. **Deploy:**
   - Click "Deploy"
   - Your site goes live in minutes

[Full deployment guide →](./DEPLOYMENT_CHECKLIST.md)

## 📱 Pages & Routes

### Public Pages
- `/` - Homepage
- `/shop` - Product listing
- `/shop/[slug]` - Product detail
- `/templates` - Templates page
- `/challenges` - Savings challenges
- `/community/chat` - Community chat
- `/blog` - Blog listing
- `/blog/[slug]` - Blog post
- `/about` - About page
- `/contact` - Contact page
- `/faq` - FAQ page

### User Pages
- `/auth/login` - Login
- `/auth/sign-up` - Sign up
- `/dashboard` - User dashboard
- `/dashboard/downloads` - Digital downloads
- `/cart` - Shopping cart

### Admin Pages
- `/admin/login` - Admin login
- `/admin/dashboard` - Admin dashboard
- `/admin/products` - Product management
- `/admin/orders` - Order management
- `/admin/customers` - Customer management
- `/admin/coupons` - Coupon management
- `/admin/blog` - Blog management
- `/admin/templates` - Template management
- `/admin/analytics` - Analytics
- `/admin/settings` - Store settings
- `/admin/chat` - Chat moderation

## 🔑 Admin Access

### Getting Admin Access
1. Create a Supabase user account
2. Go to Supabase dashboard
3. Add `admin_role` column to `profiles` table (text field)
4. Set your user's `admin_role` to `'super_admin'` or `'admin'`

### Access Admin Panel
- **Option 1:** Press `Shift + A` anywhere on the site
- **Option 2:** Click the lock icon in the footer
- **Option 3:** Navigate to `/admin/login` directly

## 🧪 Testing

### Test Stripe Payments
Use these test cards in development:
- `4242 4242 4242 4242` - Successful payment
- `4000 0000 0000 0002` - Declined card
- Any future date for expiry
- Any 3-digit CVC

### Test Admin Features
1. Create products in `products` table
2. Create sample orders
3. Add coupons
4. Create blog posts
5. Post messages in community chat

## 📚 Documentation

- [Quick Start Guide](./QUICK_START.md) - Get up and running in 5 minutes
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md) - Complete pre-launch checklist
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Stripe Documentation](https://stripe.com/docs)

## 🤝 Contributing

This is a complete, production-ready platform. For customizations:

1. Clone the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2024 Mommy Louise. All rights reserved.

## 🆘 Support

- **Documentation:** See QUICK_START.md and DEPLOYMENT_CHECKLIST.md
- **Vercel Support:** https://vercel.com/help
- **Supabase Support:** https://supabase.com/support
- **Stripe Support:** https://stripe.com/support

---

**Status:** ✅ Production Ready  
**Last Updated:** May 10, 2026  
**Version:** 1.0.0

Ready to launch? [Deploy now →](./DEPLOYMENT_CHECKLIST.md)
