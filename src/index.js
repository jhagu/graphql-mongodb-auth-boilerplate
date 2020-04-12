import server from './server';

server.start(({ endpoint: '/api/graphql', port: process.env.PORT || 4000 }), () => {
  console.log(`GrahpQL server up`)
});
