FROM node:18-alpine

# Create app directory in container
WORKDIR /app

# Copy package.json (if it exists)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all files from current directory to container
COPY . .

# Expose port 3000
EXPOSE 3000

# Run the application
CMD [ "node", "server.js" ]