# Base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --only=production

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD ["yarn", "start"]
