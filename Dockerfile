# imagen base de node alpine
FROM node:lts-alpine

WORKDIR /app

#  mi archivo -> al contenedor 
COPY package*.json ./
RUN npm install
#  copiar todo (excepto lo que esta en .dockerignore)
COPY . .

EXPOSE 3000

# ejecuta el comando en segundo plano
CMD ["npm", "start"]