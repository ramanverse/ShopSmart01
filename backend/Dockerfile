# ── Stage 1: Install production dependencies ──
FROM node:20-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# ── Stage 2: Production image ──
FROM node:20-alpine

ENV NODE_ENV=production

# Create and use non-root user for security
RUN addgroup -S ethereal && adduser -S ethereal -G ethereal
USER ethereal

WORKDIR /app

# Copy installed node_modules from deps stage
COPY --chown=ethereal:ethereal --from=deps /app/node_modules ./node_modules

# Copy application source
COPY --chown=ethereal:ethereal . .

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:5000/api/ping || exit 1

CMD ["node", "server.js"]
