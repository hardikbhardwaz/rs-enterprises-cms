# R.S. Enterprises — Headless CMS (Strapi 5)

Dedicated Strapi 5 Headless CMS project providing structured content management and API endpoints for the **R.S. Enterprises** industrial website.

---

## 1. System Overview & Technology Stack

- **Framework**: Strapi 5 (`@strapi/strapi` v5.55.1)
- **Language**: TypeScript (`tsconfig.json`)
- **Runtime Target**: Node.js `22.x` (LTS)
- **Package Manager**: `npm`
- **Development Database**: SQLite (`better-sqlite3`, local zero-dependency database stored in `.tmp/data.db`)
- **Production Database**: MySQL (`mysql2`, fully compatible with Hostinger Business MySQL)
- **Media Uploads**: Built-in Strapi Media Library with local disk provider (`public/uploads`)
- **Target Hosting**: Hostinger Business Environment (Node.js Application Manager)

---

## 2. Directory Architecture

```
rs-enterprises-cms/
├── config/
│   ├── env/
│   │   └── production/
│   │       ├── database.ts    # Production MySQL config (DATABASE_* env vars)
│   │       └── server.ts      # Production reverse-proxy & URL config
│   ├── admin.ts
│   ├── api.ts
│   ├── database.ts            # Default/Development database config (SQLite)
│   ├── middlewares.ts
│   ├── plugins.ts             # Upload security & MIME restrictions
│   └── server.ts
├── database/
│   └── migrations/
├── public/
│   ├── uploads/               # Uploaded media (gitignored, persistent on host)
│   └── favicon.png
├── src/
│   ├── admin/
│   ├── api/                   # Content-type schemas & controllers
│   ├── extensions/
│   └── index.ts
├── .env                       # Local secrets (NEVER COMMIT)
├── .env.example               # Template for local and production deployment
├── .gitignore                 # Production-safe gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 3. Local Development Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Environment Configuration
Copy `.env.example` to `.env` if not already present:
```bash
cp .env.example .env
```
Ensure `DATABASE_CLIENT=sqlite` is active in `.env`.

### Step 3: Run Development Server
```bash
npm run develop
```
- Strapi will start at: `http://localhost:1337`
- Access the Admin Panel at: `http://localhost:1337/admin`
- On first launch, create the root Administrator account.

---

## 4. Production Build Test

To test the production build locally:
```bash
npm run build
```
This generates the optimized admin bundle into `dist/build/`.

---

## 5. Hostinger Production Deployment Guide

### A. Environment & Node.js Setup
1. In Hostinger hPanel, navigate to **Websites** → **Node.js** (or Application Manager).
2. Set Node.js version to **22.x**.
3. Set Application Root to the project folder (`rs-enterprises-cms`).
4. Set Startup File to `node_modules/@strapi/strapi/bin/strapi.js` or configure a custom `server.js` runner with command `npm run start`.

### B. MySQL Database Setup
1. In Hostinger hPanel, go to **Databases** → **MySQL Databases**.
2. Create a new database (e.g., `u123456789_rs_cms`).
3. Create a database user with full privileges and a strong password.
4. Note the Hostinger MySQL hostname (usually `127.0.0.1` or `localhost`).

### C. Hostinger Environment Variables
Set the following environment variables in Hostinger:

| Variable | Description | Example / Recommended Value |
|---|---|---|
| `NODE_ENV` | Application environment | `production` |
| `HOST` | Binding address | `0.0.0.0` |
| `PORT` | Node.js port assigned by Hostinger | `1337` (or host-assigned port) |
| `PUBLIC_URL` | Public domain / subdomain | `https://cms.rsesolution.com` |
| `DATABASE_CLIENT` | Enforces MySQL | `mysql` |
| `DATABASE_HOST` | Hostinger MySQL host | `127.0.0.1` |
| `DATABASE_PORT` | MySQL port | `3306` |
| `DATABASE_NAME` | MySQL database name | `u123456789_rs_cms` |
| `DATABASE_USERNAME` | MySQL database user | `u123456789_admin` |
| `DATABASE_PASSWORD` | MySQL password | *(Secure Password)* |
| `DATABASE_SSL` | SSL encryption for MySQL | `false` (standard for local socket/host) |
| `APP_KEYS` | Comma-separated random keys | *(Generate 4 base64 keys)* |
| `API_TOKEN_SALT` | Random salt | *(Random base64 string)* |
| `ADMIN_JWT_SECRET` | Admin JWT secret | *(Random base64 string)* |
| `TRANSFER_TOKEN_SALT` | Transfer token salt | *(Random base64 string)* |
| `JWT_SECRET` | Users-permissions JWT secret | *(Random base64 string)* |
| `ENCRYPTION_KEY` | Strapi data encryption key | *(Random base64 string)* |

> **Tip**: Generate keys using:
> ```bash
> node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
> ```

### D. Persistent Storage for Uploads
On Hostinger Git/Node.js deployments, new code deployments might overwrite the application directory.
To ensure uploaded machinery photos, PDFs, and brochures persist across deployments:
1. Create a persistent folder outside the deployment release root, e.g.:
   `/home/u123456789/shared/uploads`
2. Create a symbolic link:
   ```bash
   ln -s /home/u123456789/shared/uploads /home/u123456789/public_html/cms/public/uploads
   ```
3. Strapi will automatically store and serve all media library files from this persistent storage without requiring paid external storage services.

---

## 6. Security & Repository Rules

- **Zero Hardcoded Secrets**: All credentials and salts must always come from environment variables.
- **Lightweight Repository**: Never commit uploaded media, machine images, PDFs, `.tmp` SQLite files, or build artifacts to Git.
- **Gitignore Protection**: `.gitignore` strictly guards `.env`, `public/uploads/*`, `.tmp/`, and `node_modules/`.
