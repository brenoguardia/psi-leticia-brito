# ---------- Build stage ----------
FROM node:22-alpine AS builder

ENV CI=true

RUN npm install -g pnpm
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --ignore-scripts && \
    pnpm approve-builds --all && \
    pnpm rebuild

COPY . .

ARG PUBLIC_SITE_URL
ENV PUBLIC_SITE_URL=$PUBLIC_SITE_URL

ARG PUBLIC_WHATSAPP_NUMBER
ENV PUBLIC_WHATSAPP_NUMBER=$PUBLIC_WHATSAPP_NUMBER

ARG PUBLIC_EMAIL
ENV PUBLIC_EMAIL=$PUBLIC_EMAIL

ARG PUBLIC_INSTAGRAM_URL
ENV PUBLIC_INSTAGRAM_URL=$PUBLIC_INSTAGRAM_URL

ARG PUBLIC_FACEBOOK_URL
ENV PUBLIC_FACEBOOK_URL=$PUBLIC_FACEBOOK_URL

ARG PUBLIC_ADDRESS
ENV PUBLIC_ADDRESS=$PUBLIC_ADDRESS

ARG PUBLIC_UMAMI_URL
ENV PUBLIC_UMAMI_URL=$PUBLIC_UMAMI_URL

ARG PUBLIC_UMAMI_WEBSITE_ID
ENV PUBLIC_UMAMI_WEBSITE_ID=$PUBLIC_UMAMI_WEBSITE_ID

RUN pnpm build

# ---------- Production stage ----------
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget --no-check-certificate --quiet --spider http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]