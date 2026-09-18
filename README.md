# Vyvix

A full-stack survey and plan-management SaaS — React dashboard on the front, Express and MongoDB behind it.

**[Live demo](https://vyvix.vercel.app)**

---

## Architecture

```
frontend/          React + Vite
  authcomponent/   AuthProvider, RequireAuth route guard, session layout
  customHooks/     Axios instance, form hooks (register, login, password, update)
  dashboardcomponent/  charts and data tables

backend/           Express (ESM)
  mongoose/schema/ user, plan and survey models
  router/          /users, /plans, CORS origin allow-list
  strategies/      Passport local strategy
  utils/gemini.mjs Google Gemini integration
```

## What it covers

- **Session authentication** with Passport local strategy — registration, login, password change and profile update, each with its own validated form hook on the client
- **Route guarding** — `RequireAuth` wraps protected routes, with auth state held in a context provider rather than scattered through components
- **Plans and surveys** modelled in Mongoose, served through a small REST API
- **Gemini integration** for generated content
- A shared Axios instance so auth headers and base URL are configured in one place

## Running locally

```bash
# backend
cd backend && npm install
npm start                    # needs MONGODB_URI and SESSION_SECRET

# frontend
cd frontend && npm install
npm run dev
```