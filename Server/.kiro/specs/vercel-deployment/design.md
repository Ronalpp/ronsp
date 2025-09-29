# Design Document

## Overview

This design outlines the transformation of an Express.js backend application into a Vercel-compatible serverless application. The current application is a message management API with three endpoints (POST /send, GET /get, DELETE /delete/:id) that connects to a PostgreSQL database. The design focuses on adapting the application architecture to work within Vercel's serverless function constraints while maintaining all existing functionality.

## Architecture

### Current Architecture
- Express.js server listening on port 3000
- Direct database connection using pg.Pool
- Three REST endpoints for message CRUD operations
- Middleware: morgan (logging), cors, express.json

### Target Architecture (Vercel Serverless)
- Serverless functions handling individual routes
- API routes mapped through vercel.json configuration
- Environment-based database connection
- Optimized for cold starts and stateless execution

## Components and Interfaces

### 1. Vercel Configuration (vercel.json)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/index.js"
    }
  ]
}
```

### 2. Modified Express Application
- Remove app.listen() call (Vercel handles this)
- Export the Express app for Vercel to use
- Maintain existing middleware and route structure
- Add environment variable validation

### 3. Database Connection Module
- Use environment variables for connection string
- Implement connection pooling optimized for serverless
- Add connection error handling and retry logic

### 4. Environment Configuration
- DATABASE_URL: PostgreSQL connection string
- NODE_ENV: Environment identifier
- CORS_ORIGIN: Allowed origins for CORS

## Data Models

### Message Model (existing)
```sql
CREATE TABLE mensages (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  msg TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### API Endpoints
1. **POST /send** - Create new message
   - Input: { nombre, email, msg }
   - Output: Created message object
   
2. **GET /get** - Retrieve all messages
   - Input: None
   - Output: Array of message objects
   
3. **DELETE /delete/:id** - Delete message by ID
   - Input: id parameter
   - Output: Success confirmation

## Error Handling

### Database Connection Errors
- Implement retry logic for connection failures
- Provide meaningful error messages for connection issues
- Graceful degradation when database is unavailable

### Validation Errors
- Standardize error response format
- Fix existing validation logic (currently has bugs)
- Add proper HTTP status codes

### Serverless-Specific Considerations
- Handle cold start delays
- Optimize connection pooling for short-lived functions
- Implement proper cleanup for database connections

## Testing Strategy

### Local Testing
- Test with Vercel CLI (`vercel dev`)
- Verify all endpoints work in serverless environment
- Test database connectivity with environment variables

### Deployment Testing
- Deploy to Vercel preview environment
- Test all API endpoints in production-like environment
- Verify CORS configuration with actual frontend
- Load test to ensure proper scaling

### Database Testing
- Test connection with SSL requirements
- Verify connection pooling works correctly
- Test error handling for database failures

## Implementation Considerations

### File Structure Changes
```
src/
├── index.js (modified for Vercel export)
├── db.js (updated with env vars)
└── controllers/
    ├── web.controllers.js
    └── panel.controllers.js
vercel.json (new)
package.json (updated scripts)
```

### Package.json Modifications
- Update start script for production
- Remove nodemon from production dependencies
- Ensure all dependencies are properly listed

### Security Enhancements
- Move database connection string to environment variables
- Configure CORS for specific origins instead of wildcard
- Add input validation and sanitization

### Performance Optimizations
- Optimize database connection for serverless
- Minimize cold start time
- Implement proper connection cleanup