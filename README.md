# Next.js Blog

Next.js Blog is a Next.js + TypeScript project created during a Next.js concepts training.

The project was developed as a practical exercise to understand how the main Next.js concepts work together in a real
application. It includes a public blog and an admin area for managing posts.

## About the Project

The application implements a simple blog platform where users can browse published posts and an authenticated
administrator can manage the content.

With the application, users can:

- View published blog posts
- Open individual posts
- View featured posts

Administrators can:

- Log in to the admin area
- Create posts
- Edit existing posts
- Delete posts
- Publish or unpublish posts
- Write post content using Markdown
- Upload cover images
- Manage post titles, authors, excerpts, and content

The project was a practical exercise covering Server Components, Client Components, Server Actions, authentication,
validation, database access, caching, forms, routing, and other fundamental Next.js concepts.

## Screenshot

<img width="1101" height="1070" alt="Screenshot 2026-08-27 at 4 49 04 PM" src="https://github.com/user-attachments/assets/aad3c9ff-048a-4285-a75d-1579041b6fc1" />


## Next.js Concepts Practiced

- App Router
- Server Components
- Client Components
- Server Actions
- Dynamic routes
- Forms and form actions
- `useActionState`
- `useTransition`
- Authentication
- Cookies
- JWT
- Data validation
- Cache revalidation
- Environment variables
- Image handling
- Error handling

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Drizzle ORM
- Zod
- JWT
- bcrypt
- React Toastify
- Lucide React
- Markdown
- sanitize-html

## Authentication

The application includes a protected admin area.

Authentication uses:

- Username and password
- Password hashing
- JWT session tokens
- HTTP cookies
- Protected Server Actions

Only authenticated users can create, update, delete, and manage posts.

## Post Management

The admin area provides CRUD operations for blog posts.

Each post contains:

- Title
- Slug
- Author
- Excerpt
- Content
- Cover image
- Published status
- Creation date
- Update date

Post data is validated with Zod before being persisted.

## Image Upload

Administrators can upload cover images directly through the post management interface.

The application validates:

- File type
- Maximum file size
- Authentication

Uploaded images are stored in the configured upload directory.

## Database

The project uses Drizzle ORM for database access.

The repository layer separates the application logic from the persistence implementation and provides operations for:

- Finding published posts
- Finding posts by ID or slug
- Creating posts
- Updating posts
- Deleting posts

A JSON repository implementation is also available for local or alternative persistence.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to see the application.

## Environment Variables

Create your environment configuration based on the project requirements.

The application uses environment variables for:

- Database query delay simulation
- Image upload size
- Image upload directory
- Image server URL
- JWT secret
- Login expiration
- Login cookie name
- Admin username
- Admin password hash
- Login availability

## Next.js

This project was built with Next.js using the App Router.

For more information, see the official Next.js documentation:

https://nextjs.org/docs
