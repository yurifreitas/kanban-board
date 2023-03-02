# Base image
FROM node:14 AS base

WORKDIR /app

# Copy dependencies manifest
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --production

# Copy application code
COPY . .

# Build image
FROM base AS build

WORKDIR /app

# Install dev dependencies
RUN yarn install --frozen-lockfile

# Build application
RUN yarn build

# Final image
FROM nginx:stable-alpine AS final

# Copy built application from build image
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
