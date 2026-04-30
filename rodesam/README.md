# RODESAM (PTY) LTD - Full MERN Stack Website

## Project Structure
```
rodesam/
├── backend/          # Express.js + MongoDB API
│   ├── server.js     # Main server entry
│   ├── models/       # MongoDB schemas
│   └── routes/       # API routes
└── frontend/         # React.js + Vite
    ├── src/
    │   ├── components/  # Navbar, Footer
    │   └── pages/       # Home, Services, About, Contact, GetQuote
    └── dist/            # Production build
```

## Setup Instructions

### Prerequisites
- Node.js v18+
- MongoDB (local or MongoDB Atlas)

### Backend Setup
```bash
cd backend
npm install
# Create .env file:
echo "MONGO_URI=mongodb://localhost:27017/rodesam" > .env
echo "PORT=5000" >> .env
node server.js
```

### Frontend Setup (Development)
```bash
cd frontend
npm install
npm run dev       # Starts at http://localhost:5173
```

### Frontend Production Build
```bash
cd frontend
npm run build     # Output in dist/
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/services | Get all services |
| GET | /api/team | Get team members |
| POST | /api/contact | Submit contact form |
| POST | /api/quote | Submit quote request |
| GET | /api/contact | Get all messages |
| GET | /api/quote | Get all quote requests |

## Pages
- **/** - Homepage with hero, services, clients, CTA
- **/services** - Interactive services with tabs and detail view
- **/about** - Company story, values, team, clients
- **/contact** - Contact form (saves to MongoDB)
- **/get-quote** - Quote request form (saves to MongoDB)

## Colors
- Primary: #00B4D8 (Cyan Blue)
- Secondary: #FF6B35 (Orange)
- Accent: #2EC4B6 (Teal)
- Dark: #03045E (Navy)

## Fonts
- Display: Syne (headings)
- Body: DM Sans
