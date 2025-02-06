# 300ML - Online Liquor Store

A modern e-commerce web application for a liquor store built with React, TailwindCSS, and Firebase.

![300ML Screenshot](src/components/assets/applogo.png)

## Features

- 🛍️ Browse products by category (Whiskey, Gin, Vodka, Beer, Wine, etc.)
- 🛒 Shopping cart functionality with persistent storage
- 💫 Smooth animations and transitions using Framer Motion
- 📱 Responsive design that works on mobile, tablet and desktop
- 🔐 User authentication and account management
- 💳 Secure checkout process
- 🎯 Product filtering and search
- ⚡ Real-time updates using Firebase

## Tech Stack

- **Frontend Framework**: React 18
- **Styling**: TailwindCSS
- **State Management**: React Context API
- **Backend/Database**: Firebase
- **Authentication**: Firebase Auth
- **Animations**: Framer Motion
- **Notifications**: React Toastify
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form
- **Development**: Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/300ml.git
```

2.Navigate to the project directory:

```bash
cd 300ml
```

3.Install dependencies:

```bash
npm install
```

4.Create a `.env` file in the root directory and add your Firebase configuration:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

5.Start the development server:

```bash
npm start
```

### Available Scripts

- `npm start`

- Runs the app in development mode 

npm test

- Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Project Structure

```markdown
src/
  ├── components/         # Reusable components
  ├── context/           # React Context providers
  ├── pages/             # Page components
  ├── assets/           # Images and static files
  └── styles/           # CSS modules and global styles
```

## Key Features Explained

### Shopping Cart

- Persistent cart storage using localStorage
- Real-time cart updates
- Quantity adjustments
- Remove items
- Clear cart functionality

### Authentication

- Email/Password login
- User registration
- Password reset
- Protected routes

### Product Catalog

- Category-based browsing
- Product details view
- Image galleries
- Price and availability display

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - [@muregzzzz](https://twitter.com/muregzzzz)

Project Link: [https://github.com/murega14/300ml](https://github.com/murega14/300ml)

## Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [React Icons](https://react-icons.github.io/react-icons/)