cd client
docker build -t client .
cd ..
cd server
docker build -t server .
cd ..

docker network create zad2

docker run -d --name server --network zad2 server
docker run -d --name client -p 3000:3000 --network zad2 client
