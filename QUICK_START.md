# Mommy Louise - Quick Start Guide

## What You Have

A complete, production-ready luxury e-commerce platform for cash stuffing budgeting templates and digital products.

**29 Pages | 7 Phases | Full Admin Panel | Supabase + Stripe**

---

## Access Points

### Public Site
- **Homepage:** `/` - Central hub with all interconnected CTAs
- **Shop:** `/shop` - Product listing
- **Product Detail:** `/shop/[slug]` - Individual product pages
- **Cart:** `/cart` - Shopping cart with checkout
- **Templates:** `/templates` - Browse budget templates
- **Challenges:** `/challenges` - Savings challenges
- **Community:** `/community/chat` - Real-time community chat
- **Blog:** `/blog` - SEO blog system
- **Blog Post:** `/blog/[slug]` - Individual articles
- **About:** `/about` - Brand story
- **Contact:** `/contact` - Contact form
- **FAQ:** `/faq` - Frequently asked questions

### User Dashboard
- **Dashboard:** `/dashboard` - User overview
- **Downloads:** `/dashboard/downloads` - Digital product licenses
- **Auth Pages:** `/auth/login`, `/auth/sign-up`

### Admin Panel
- **Admin Login:** `/admin/login` OR press **Shift + A** anywhere
- **Dashboard:** `/admin/dashboard` - Analytics & overview
- **Products:** `/admin/products` - Manage products
- **Orders:** `/admin/orders` - View all orders
- **Customers:** `/admin/customers` - User management
- **Coupons:** `/admin/coupons` - Discount codes
- **Analytics:** `/admin/analytics` - Sales & metrics
- **Settings:** `/admin/settings` - Store configuration
- **Blog:** `/admin/blog` - Manage blog posts
- **Templates:** `/admin/templates` - Digital products
- **Chat:** `/admin/chat` - Moderation

---

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Open browser
# http://localhost:3000
```

---

## Test Accounts

### Admin Access (After Setup)
1. Create a Supabase user with your email
2. In Supabase dashboard, add column `admin_role` to `profiles` table
3. Set `admin_role = 'super_admin'` for your user
4. Access admin at `/admin/login` or press Shift+A

### Test Products
- 8 pre-configured luxury cash stuffing products
- All with descriptions, prices, and features
- Ready for shopping cart and checkout

### Test Stripe Payments
- Use Stripe test cards: `4242 4242 4242 4242`
- Any future expiry date
- Any 3-digit CVC

---

## Database Setup

### Supabase Tables (Auto-Created)
1. `profiles` - User profiles with admin roles
2. `products` - Product catalog
3. `orders` - Customer orders
4. `cart_items` - Shopping cart items
5. `coupons` - Discount codes
6. `blog_posts` - Blog articles
7. `chat_messages` - Community messages
8. `digital_licenses` - License keys for digital products
9. `product_reviews` - User reviews
10. `announcements` - Store announcements
11. `loyalty_points` - User loyalty tracking
12. `referrals` - Referral program
13. `order_items` - Order line items
14. Plus system tables

All tables have Row Level Security enabled.

---

## One-Click Deployment to Vercel

### Option 1: Click the Publish Button in v0
1. Click "Publish" in v0 UI
2. Connect to GitHub (automatically done)
3. Vercel will deploy automatically
4. Get your live URL

### Option 2: Manual GitHub + Vercel

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Go to Vercel Dashboard:**
   - https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repo

3. **Add Environment Variables in Vercel:**
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   STRIPE_SECRET_KEY=your_stripe_secret
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

4. **Deploy:** Click "Deploy"

5. **Done!** Your site is live

---

## Key Features

### For Customers
- ✅ Browse luxury cash stuffing products
- ✅ Read reviews and ratings
- ✅ Join community chat
- ✅ Read budget tips in blog
- ✅ Download digital templates
- ✅ Track purchases in dashboard
- ✅ Participate in savings challenges

### For Admin
- ✅ Manage products and inventory
- ✅ View all orders and customer data
- ✅ Create discount coupons
- ✅ Review analytics and sales
- ✅ Manage blog content
- ✅ Monitor community chat
- ✅ Configure store settings

### Security
- ✅ Secure authentication with Supabase
- ✅ Role-based admin access
- ✅ Row-level security on all data
- ✅ Encrypted Stripe payments
- ✅ HTTPS only
- ✅ Protected admin routes

---

## Customization

### Colors
Edit `/app/globals.css` - Update CSS variables:
- `--primary` - Main brand color (pink)
- `--secondary` - Accent color (beige)
- `--background` - Page background
- `--foreground` - Text color

### Products
Add/edit products in Supabase `products` table:
- name, description, price, images
- category, features, stock_quantity
- is_digital (true for digital downloads)

### Blog Posts
Create posts in Supabase `blog_posts` table:
- title, content, featured_image
- category, tags, slug
- is_published (true to show)

### Settings
Edit store info in Supabase `profiles` or admin settings:
- Store name and email
- Phone and address
- Tax rate and shipping cost

---

## Troubleshooting

### Build Errors
- Check all env vars are set in Vercel
- Ensure Supabase URL and keys are correct
- Clear `.next` cache and rebuild

### Payment Issues
- Verify Stripe keys are correct
- Use test mode cards for testing
- Check Stripe webhook logs

### Admin Access Denied
- Verify your user has `admin_role` column set
- Check `admin_role` value is `'super_admin'` or `'admin'`
- Clear browser cookies and try again

### Chat Not Loading
- Check browser console for errors
- Ensure Supabase Realtime is enabled
- Verify RLS policies on chat_messages table

---

## Support

- **Vercel Support:** https://vercel.com/help
- **Supabase Support:** https://supabase.com/support
- **Stripe Support:** https://stripe.com/support
- **Documentation:** See DEPLOYMENT_CHECKLIST.md

---

## What's Next?

1. ✅ Test locally with `pnpm dev`
2. ✅ Verify admin access and features
3. ✅ Create test products and orders
4. ✅ Test Stripe payments
5. ✅ Review all public pages
6. ✅ Check mobile responsiveness
7. ✅ Deploy to Vercel
8. ✅ Monitor analytics
9. ✅ Start selling!

---

**Ready to launch? Click "Publish" in v0 or follow the manual GitHub + Vercel steps above.**
