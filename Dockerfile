From node

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
# RUN npm run build # 构建出来样式有问题，先跑dev作为服务器