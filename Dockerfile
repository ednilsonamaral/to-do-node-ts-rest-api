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

# Installs Node.js image
FROM node:16.13.1-alpine3.14

# sets the working directory for any RUN, CMD, COPY command
# all files we put in the Docker container running the server will be in /usr/src/app (e.g. /usr/src/app/package.json)
WORKDIR /usr/src/app

# Copies package.json, package-lock.json, tsconfig.json, .env to the root of WORKDIR
# COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ["package.json", "package-lock.json", ".env", "./"]

# generated prisma files
# COPY prisma ./prisma/

# Copies everything in the src directory to WORKDIR/src
COPY ./src ./src

# Installs all packages
RUN npm install

# Runs the dev npm script to build & start the server
# CMD npm run dev