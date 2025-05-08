# ShopMe - Online Store

A modern e-commerce platform built with Next.js and Node.js

## 🚀 Features

- **Modern Frontend**: Beautiful and responsive design using Next.js and Tailwind CSS
- **Powerful Backend**: RESTful APIs with Node.js and Express
- **Authentication**: Secure login and registration with OTP verification
- **Product Management**: 
  - Product image upload
  - Category management
  - Discount system
  - Advanced search
- **Shopping Cart**: 
  - Add/remove products
  - Final price calculation
  - Discount application
- **Admin Panel**: Complete management of products, categories, and orders

## 🛠️ Technologies

### Frontend
- Next.js 14
- React Query
- Tailwind CSS
- React Hook Form
- Axios

### Backend
- Node.js
- Express
- MongoDB
- JWT
- Multer
- Kavenegar (OTP Service)

## 📦 Installation and Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- Kavenegar API Key

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Configuration
Create `.env` files in both `frontend` and `backend` directories with the following configurations:

#### Frontend (.env)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

#### Backend (.env)
```env
PORT=5000
APP_DB=mongodb://localhost:27017/shopme
JWT_SECRET_KEY=your_jwt_secret
COOKIE_PARSER_SECRET_KEY=your_cookie_secret
KAVENEGAR_API_KEY=your_kavenegar_api_key
ALLOW_CORS_ORIGIN=http://localhost:3000
```


1. Clone the repository
```bash
git clone https://github.com/yourusername/shopme.git
```

2. Set up the environment variables as described above

3. Install dependencies for both frontend and backend

4. Start both servers:
   - Frontend will run on http://localhost:3000
   - Backend will run on http://localhost:5000

5. Access the application:
   - User interface: http://localhost:3000
   - Admin panel: http://localhost:3000/admin

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.



For support, please open an issue in the GitHub repository or contact the development team. 