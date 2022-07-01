FROM node:14.17.0
WORKDIR /app/client
COPY package.json /app/client
RUN npm install
COPY . /app/client
CMD ["npm", "run", "serve", "--", "--port", "8081"]
EXPOSE 8081



# sudo docker build -t paper_click/client .
# sudo docker run -it -p 8081:8081 paper_click/client
