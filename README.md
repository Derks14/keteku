# Keteku Portfolio

Portfolio site for Derrick Keteku, a cloud-native software engineer based in Sydney. The site is built to present engineering work through project writeups, architecture notes, and API-backed detail pages rather than a static resume page.

## What This Site Highlights

- Cloud-native software engineering experience
- Distributed systems and service-oriented project work
- Backend and infrastructure-focused case studies
- Architecture, data flow, and observability notes
- Published project details served from an API
- A lightweight internal detail editor for drafting and publishing project content

## Tech Stack

- React 19
- TypeScript
- Vite
- TanStack Router
- TanStack Query
- Tailwind CSS
- Axios
- React Hook Form
- Zod
- `@uiw/react-md-editor` command utilities for Markdown authoring
- Sonner notifications

## Application Structure

```text
src/
  components/
    sections/        Shared layout sections and detail rendering
    ui/              Reusable UI primitives
    schemas/         Form validation schemas
  routes/            TanStack Router file routes
  services/
    api/             API service wrappers
    models/          Shared response and domain types
```

Key routes:

- `/` - landing grid for the portfolio
- `/about` - profile and background page
- `/projects` - published project/detail list
- `/projects/$id` - project detail page with Markdown/MDX rendering and table of contents
- `/projects/details` - internal detail library
- `/projects/add` - internal detail creation form
- `/projects/details/update/$id` - internal detail update form

## Backend Contract

The frontend expects an API base URL and calls endpoints under `/api`.

Current API client behavior:

```ts
const BASE_URL = import.meta.env.SERVER_URL;
const api_url = `${BASE_URL}/api/`;
```

The detail pages use these resources:

- `GET /api/details`
- `GET /api/details/:id`
- `POST /api/details`
- `PUT /api/details/:id`
- `DELETE /api/details/:id`

The project service also includes:

- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/projects`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`

If using standard Vite environment variables, consider exposing the backend URL as a `VITE_` prefixed variable and updating the API client accordingly.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Content Model

Project detail records are API-backed and can be rendered as:

- `MARKDOWN`
- `MDX`
- `JSON_BLOCKS`

Published records are shown on the public `/projects` page when their `status` is `PUBLISHED`. Drafting, editing, previewing, and deleting detail records is handled by the internal detail routes.

## Engineering Focus

The portfolio is intentionally structured around engineering artifacts: project architecture, implementation notes, system tradeoffs, and backend-driven content. It is designed to fit a cloud-native software engineer whose work spans frontend presentation, API integration, distributed application design, and infrastructure-aware delivery.
