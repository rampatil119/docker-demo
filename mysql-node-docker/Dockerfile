# Use the official Node.js image as a base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if present)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose port 3000 (or any port if you're running a web server)
EXPOSE 3000

# Start the Node.js app
CMD ["node", "app.js"]

