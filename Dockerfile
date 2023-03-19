# FROM node:12.16-alpine AS build
# RUN apk add --update python make g++ \
#    && rm -rf /var/cache/apk/*

# COPY package.json ./
# RUN npm install && npm cache clean --force
# COPY . ./
# RUN npm run build
# RUN npm prune --production

# FROM node:12.16-alpine
# WORKDIR /app
# COPY --from=build package* ./
# COPY --from=build newrelic.js ./
# COPY --from=build dist ./dist
# COPY --from=build migrations ./migrations
# COPY --from=build node_modules ./node_modules
# RUN npm install --production

# CMD node dist/server.js