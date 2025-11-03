# Professional Portfolio Website

A modern, conversion-optimized portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a stunning purple & black theme with smooth animations and a focus on lead generation.

## 🚀 Features

- **Modern Design**: Purple & black theme with glass morphism effects
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth transitions and micro-interactions with Framer Motion
- **SEO Optimized**: Complete meta tags, structured data, and performance optimization
- **Conversion Focused**: Multiple CTAs and booking form for lead generation
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized images, lazy loading, and fast loading times

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)
- **Language**: TypeScript

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/portfolio)

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure redirects for SPA routing

### Deploy to Other Platforms
The project is compatible with any platform that supports Node.js:
- Railway
- Render
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Email Configuration (SendGrid)
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=noreply@yourdomain.com
ADMIN_EMAIL=afrozenajam@gmail.com

# Stripe Configuration (for payments)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Calendly Integration (optional)
CALENDLY_TOKEN=your_calendly_token

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Site Configuration
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### Customization

#### 1. Update Contact Information
Edit the following files to update contact details:
- `src/components/Header.tsx` - Email link
- `src/components/Footer.tsx` - Contact info
- `src/app/layout.tsx` - Structured data

#### 2. Replace Placeholder Images
Replace images in `public/projects/` with your actual project screenshots:
- `fashion-store.jpg`
- `restaurant-booking.jpg`
- `photography-portfolio.jpg`
- `saas-dashboard.jpg`
- `real-estate.jpg`
- `fitness-app.jpg`

#### 3. Update Portfolio Data
Edit `src/data/projects.json` to include your actual projects:

```json
[
  {
    "id": 1,
    "title": "Your Project Title",
    "description": "Project description...",
    "image": "/projects/your-image.jpg",
    "category": "Web Development",
    "technologies": ["Next.js", "TypeScript", "Tailwind CSS"],
    "url": "https://your-project-url.com",
    "featured": true,
    "year": "2024"
  }
]
```

#### 4. Update Services
Edit `src/components/Services.tsx` to modify the services offered.

## 📧 Email Integration

### SendGrid Setup
1. Create a SendGrid account
2. Generate an API key
3. Add the API key to your environment variables
4. Uncomment the email code in `src/app/api/book/route.ts`

### Alternative Email Providers
The code includes examples for:
- SendGrid (recommended)
- SMTP configuration
- Netlify Forms
- Serverless email services

## 💳 Payment Integration

### Stripe Setup
1. Create a Stripe account
2. Get your API keys from the dashboard
3. Add keys to environment variables
4. Uncomment the Stripe code in `src/app/api/book/route.ts`

### Payment Flow
- Consultation deposits ($50)
- Project milestone payments
- Recurring maintenance billing

## 📊 Analytics & SEO

### Google Analytics
1. Create a GA4 property
2. Add the tracking ID to environment variables
3. Uncomment the GA code in `src/app/layout.tsx`

### SEO Optimization
The site includes:
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Sitemap generation
- Robot.txt configuration

## 🎨 Design System

### Color Palette
- **Primary Purple**: #6C4AE2
- **Accent Purple**: #9B7BFF
- **Black**: #0B0B0B
- **Charcoal**: #121212
- **White**: #FFFFFF
- **Muted Gray**: #BDBDBD

### Typography
- **Headings**: Poppins (300-900)
- **Body**: Inter (300-900)

### Components
- Glass morphism effects
- Purple glow animations
- Smooth transitions
- Responsive grid layouts

## 🔒 Security

### Form Validation
- Client-side validation
- Server-side validation
- CSRF protection
- Rate limiting (recommended)

### Best Practices
- Environment variables for secrets
- HTTPS enforcement
- Content Security Policy
- Input sanitization

## 📱 Mobile Optimization

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Performance
- Image optimization with Next.js Image
- Lazy loading
- Code splitting
- Font optimization

## 🧪 Testing

### Run Tests
```bash
npm run test
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## 📈 Performance Monitoring

### Core Web Vitals
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

### Optimization Tips
- Use Next.js Image component
- Implement lazy loading
- Optimize fonts
- Minimize bundle size

## 🚀 Deployment Checklist

- [ ] Update environment variables
- [ ] Replace placeholder images
- [ ] Update contact information
- [ ] Configure email service
- [ ] Set up payment processing
- [ ] Add analytics tracking
- [ ] Test all forms and CTAs
- [ ] Verify mobile responsiveness
- [ ] Check SEO meta tags
- [ ] Test performance

## 📞 Support

For questions or support:
- Email: afrozenajam@gmail.com
- Create an issue in the repository

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide for beautiful icons

---

**Ready to launch your professional portfolio? Follow the setup instructions above and deploy to your preferred platform!**