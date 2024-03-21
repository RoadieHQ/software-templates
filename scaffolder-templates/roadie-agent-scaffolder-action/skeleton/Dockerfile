FROM node:18-alpine

ARG TOKEN=example-broker-token

ENV BROKER_TOKEN $TOKEN

WORKDIR /app

COPY yarn.lock package.json ./
COPY src ./src
COPY config ./config

RUN apk add --no-cache tini

RUN cd /app

RUN yarn install --frozen-lockfile

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "src/index"]
