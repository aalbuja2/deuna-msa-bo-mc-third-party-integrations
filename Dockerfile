ARG NODE_VERSION=18.17.0

# ---- Base ----
FROM node:$NODE_VERSION-alpine AS base

WORKDIR /app

# ---- Build ----
FROM base AS build

ENV NPM_VERSION=9.6.7

COPY package*.json .npmrc ./

RUN npm i -g npm@${NPM_VERSION} && \
    npm ci --quiet

COPY . .

RUN npm run build --quiet

# ---- Release ----
FROM base AS release

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# ---- Non-Prod ----
FROM release AS non-prod

EXPOSE 80

CMD ["node", "dist/main.js"]

# ---- Prod ----
FROM release AS prod

ENV LD_PRELOAD /opt/dynatrace/oneagent/agent/lib64/liboneagentproc.so

COPY --from=egc67676.live.dynatrace.com/linux/oneagent-codemodules-musl:nodejs / /

EXPOSE 80

CMD ["node", "dist/main.js"]
