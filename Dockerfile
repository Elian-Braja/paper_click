FROM node:14.17.0
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["node", "server.js"]
EXPOSE 8080




# sudo docker build -t paper_click .
# sudo docker run -it -p 8080:8080 paper_click

# sudo docker container ls -a
# sudo docker stop c932ce539fd2
# sudo docker system prune -a --volumes

