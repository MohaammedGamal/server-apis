FROM node:latest
WORKDIR /server
# COPY package*.json ./server
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]