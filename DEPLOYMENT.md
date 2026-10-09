# NEXORA TRADEHUB deployment

## Recommended: Docker + a host with persistent storage

NEXORA TRADEHUB currently uses SQLite for its demo database and session store. **Persistent storage is required** or user accounts/trades will disappear when the container is recreated.

### Local production-like run

1. Copy `.env.example` to `.env`.
2. Replace `SESSION_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` with strong values.
3. Run `docker compose up --build`.
4. Open `http://localhost:3000`.

### Render

The included `render.yaml` uses a persistent disk for `/app/data`. On Render, create the service from the repository and provide the two secret admin values when prompted.

### Before a real-money launch

Do not use this demo architecture for real customer funds or live financial orders. Replace SQLite with a managed production database, add durable session infrastructure, CSRF protection where appropriate, MFA/admin hardening, audit logs, KYC/AML and sanctions workflows as required, payment-provider controls, broker/order safeguards, monitoring/alerting, backups, incident response, and jurisdiction-specific legal/regulatory review.
