# Image de production — multi-étapes, pour ne pas embarquer les sources.
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# DATABASE_URL est nécessaire à `prisma generate`, pas à la connexion.
ENV DATABASE_URL="postgresql://build:build@localhost:5432/build"
RUN npx prisma generate && npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Nécessaires aux migrations et au seed depuis le conteneur.
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

USER nextjs
EXPOSE 3000
ENV PORT=3000 HOSTNAME=0.0.0.0
CMD ["node", "server.js"]
