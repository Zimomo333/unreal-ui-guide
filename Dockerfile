From node

WORKDIR /app
COPY package*.json /app/
RUN npm --registry https://registry.npm.taobao.org i
COPY ./ /app/
RUN npm run build
RUN npm run serve