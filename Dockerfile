
FROM node:20-alpine

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install


# Step 5: Copy the rest of the application code
COPY . .

RUN npx prisma generate

# Step 6: Expose the application port
EXPOSE 3000

# Step 7: Set the command to run the application
CMD ["npm", "run", "dev"]