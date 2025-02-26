# Clean Architecture CRUD API with Sports DB Integration

This project is a Node.js API built using Clean Architecture principles. It provides CRUD operations for users, integrates with The Sports DB API to fetch sports data (teams and leagues), and includes token-based authentication. The API is written in TypeScript and uses MongoDB for data storage.


## Features

### User Management:

Register a new user.

Login with JWT token authentication.

Fetch all users (protected route).


## Sports Data Integration:

Fetch teams by league name.

Fetch team details by team ID.

Fetch all leagues.

Fetch league details by league name.


## Token-Based Authentication:

JWT token validation for protected routes.

MongoDB Integration:

Stores user data.

Optionally caches sports data (teams and leagues).

