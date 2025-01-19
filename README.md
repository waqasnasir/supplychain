# Supply Chain Tracker

A Next.js application for tracking supply chain items and their events. Built with Next.js 14, TypeScript, and Prisma.

## Features

- View and manage supply chain items
- Track item events with location and custodian information
- RESTful API with OpenAPI/Swagger documentation
- Responsive design with Tailwind CSS
- PostgreSQL database with Prisma ORM

## Prerequisites

- Node.js 18+
- PostgreSQL
- Docker (optional)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd supply-chain-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```

4. Update `.env` with your database connection:
```
DATABASE_URL="postgresql://user:password@localhost:5432/supply_chain_db"
```

5. Run database migrations:
```bash
npx prisma migrate dev
```

6. Start the development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## API Routes

All API routes are documented in `swagger.yaml`. Key endpoints:

- `GET /api/items` - List all items
- `POST /api/items` - Create a new item
- `GET /api/items/{id}` - Get item details
- `GET /api/items/{id}/events` - Get item events
- `POST /api/items/{id}/events` - Create new event
- `GET /api/items/{id}/events/last` - Get latest event

## Project Structure

```
supply-chain-tracker/
├── app/
│   ├── components/        # Reusable UI components
│   ├── items/            # Item-related pages
│   └── types/            # TypeScript interfaces
├── pages/api/            # API routes
└── prisma/              # Database schema and migrations
```

## Development

```bash
# Run development server
npm run dev

# Run type checking
npm run type-check

# Build for production
npm run build

# Start production server
npm start
```

## How to run with docker 
docker build -t supply-chain .
docker run -p 3000:3000 supply-chain

## License

MIT

