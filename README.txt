NEXORA TRADEHUB — Full Demo Trading Platform

This package includes the NEXORA TRADEHUB front end, Node.js/Express backend, SQLite database,
secure demo authentication, admin dashboard, and an interactive simulated trading terminal.

Run locally:
1. Install Node.js 18+.
2. Open a terminal in this folder.
3. Run: npm install
4. Set environment variables:
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=choose-a-secure-password-at-least-12-characters
   SESSION_SECRET=replace-with-a-long-random-secret
5. Run: npm start
6. Open http://localhost:3000

Terminal features:
- Simulated live price movement
- Interactive line chart and timeframes
- Rise/Fall demo controls
- Virtual stake and illustrative payout preview
- Protected server-side demo trade logging

IMPORTANT: This is an educational/prototyping application. It does not execute real trades,
handle real customer funds, process deposits or withdrawals, or connect to a broker.
Before any real-money use, obtain appropriate legal/regulatory advice and implement a
production-grade financial architecture, audit controls, KYC/AML, payment security,
order execution safeguards, monitoring, and secure secrets management.

Deployment files:
- Dockerfile
- docker-compose.yml
- .env.example
- render.yaml
- DEPLOYMENT.md

For deployment, use a host with persistent storage mounted at /app/data because the current demo uses SQLite.
