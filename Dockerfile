FROM bitnami/express:latest

# Create app directory in container
WORKDIR /app

# Copy all files from current directory to container
COPY . .

## Install app dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

# Run app in watch mode
CMD [ "node", "--watch", "/app/server.js" ]