# Job Board Backend

This is the backend service for a Job Board Platform. It includes authentication, job postings, and applications.

## Installation

1. Install dependencies:
   ```sh
   npm install
   ```

2. Run the server:
   ```sh
   npm start
   ```

## API Endpoints

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user
- `POST /api/jobs` - Create a job posting
- `GET /api/jobs` - Fetch all job postings
- `POST /api/job-applications` - Apply for a job

## Environment Variables

Create a `.env` file with:
```
PORT=8000
MONGO_URI=mongodb://localhost:27017/job_portal
JWT_SECRET=your_secret_key
```

