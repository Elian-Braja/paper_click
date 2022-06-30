FROM node:14.17.0
WORKDIR /app
COPY . .
RUN cd client && npm install
RUN cd ..
RUN npm install
RUN cd client
CMD ["npm","run","serve"]

# sudo docker build -t paper_click .
# sudo docker run -it -p 8080:8080 paper_click