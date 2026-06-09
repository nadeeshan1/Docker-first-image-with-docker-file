FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies (dev deps needed for build)
COPY package*.json ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

# --- Production image ---
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# create non-root user for better security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy only package files and install production dependencies
COPY package*.json ./
RUN npm ci --production --silent --omit=dev

# Copy build artifacts and static assets from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Ensure correct ownership and use non-root user
RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 3000

CMD ["npm", "run", "start"]

