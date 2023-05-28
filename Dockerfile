FROM node:18 as build

WORKDIR /opt/app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN yarn

COPY ./src ./src
COPY . .
RUN yarn build


FROM node:18-alpine

WORKDIR /opt/app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json  
RUN yarn install --prod

COPY --from=build /opt/app/build .

CMD [ "node" ,"index" ]

