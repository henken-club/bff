/* eslint-disable no-console */
import {ApolloGateway} from '@apollo/gateway';
import {ApolloServer} from 'apollo-server';

const gateway = new ApolloGateway({
  serviceList: [
    {name: 'main', url: process.env.SERVICE_URL_MAIN},
    {name: 'content', url: process.env.SERVICE_URL_CONTENT},
  ],
});

const server = new ApolloServer({gateway});

server
  .listen(parseInt(process.env.PORT, 10))
  .then(({url}) => {
    console.log(`Server ready at ${url}`);
  })
  .catch((error) => {
    console.error(error);
  });
