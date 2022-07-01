# paper_click

clone project

cd paper_click
  sudo docker build -t paper_click .
  sudo docker run -it -p 8080:8080 paper_click

cd client
  sudo docker build -t paper_click/client .
  sudo docker run -it -p 8081:8081 paper_click/client
