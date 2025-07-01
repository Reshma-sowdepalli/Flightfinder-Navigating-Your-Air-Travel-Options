# FlightFinder - Navigate Your Air Travel Options

A modern, responsive flight booking website built with Next.js, React, and Tailwind CSS. FlightFinder helps users search, compare, and book flights with an intuitive and beautiful interface.

## 🚀 Features

- **Smart Flight Search**: Advanced search functionality with filters for dates, passengers, and trip types
- **Responsive Design**: Beautiful, mobile-first design that works on all devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations and transitions
- **Flight Booking System**: Complete booking flow with passenger information and payment
- **Real-time Updates**: Dynamic flight listings with real-time pricing
- **Contact System**: Integrated contact form with smart auto-replies
- **SEO Optimized**: Built with Next.js for optimal performance and SEO

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Date Handling**: Date-fns
- **Backend**: Firebase (planned integration)

## 📁 Project Structure

```
flightfinder1/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── booking/           # Booking page
│   ├── contact/           # Contact page
│   ├── flights/           # Flights search page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── FlightCard.tsx     # Flight display card
│   ├── FlightSearch.tsx   # Search form component
│   ├── Footer.tsx         # Footer component
│   └── Header.tsx         # Navigation header
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/flightfinder1.git
   cd flightfinder1
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📱 Pages & Features

### Homepage (`/`)
- Hero section with flight search
- Feature highlights
- Popular destinations
- Call-to-action sections

### Flight Search (`/flights`)
- Advanced search form
- Flight listings with filters
- Price comparison
- Booking integration

### Booking (`/booking`)
- Multi-step booking process
- Passenger information form
- Payment integration
- Booking confirmation

### About (`/about`)
- Company information
- Mission and values
- Team profiles
- Statistics and achievements

### Contact (`/contact`)
- Contact form with validation
- Company information
- FAQ section
- Support details

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3B82F6 to #1E40AF)
- **Accent**: Light blue (#0EA5E9)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: Primary and secondary variants
- **Cards**: Consistent shadow and border radius
- **Forms**: Styled inputs with focus states
- **Navigation**: Responsive header with mobile menu

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### TypeScript
TypeScript is configured for type safety. Configuration in `tsconfig.json`.

### Next.js
Next.js 14 with app directory structure. Configuration in `next.config.js`.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Key Features Implementation

### Flight Search Component
- Real-time form validation
- Date picker with minimum date restrictions
- Passenger count selection
- Trip type selection (round-trip/one-way)

### Flight Card Component
- Expandable flight details
- Price display with currency formatting
- Airline information and logos
- Direct booking integration

### Booking Flow
- Multi-step form process
- Progress indicator
- Form validation
- Success confirmation

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🔮 Future Enhancements

- [ ] User authentication system
- [ ] Real flight API integration
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Booking management dashboard
- [ ] Reviews and ratings system
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Progressive Web App (PWA)
- [ ] Advanced filtering options

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**APSCHE SmartInternz Student**
- Project created as part of the APSCHE SmartInternz program
- Built with modern web technologies and best practices

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons
- Unsplash for the stunning images
- The open-source community for inspiration and tools

---

**FlightFinder** - Making air travel accessible, affordable, and enjoyable for everyone. ✈️ 