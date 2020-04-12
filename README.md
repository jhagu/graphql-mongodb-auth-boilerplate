# GraphQL Server with MongoDB Atlas boilerplate #

This is a boilerplate to build a graphql server with Apollo Server and mongoose ODM. 
Main features:
- Auth middleware implemented with graphql-shield
- Support for serverless framework (coming soon)
- Logging middleware (coming soon)
- Testing with Jest (coming soon)

You can clone this repo and use it at a start point for your projects.

**How to start the server - Database configuration**

1. [Create a MongoDB Atlas account](https://docs.atlas.mongodb.com/tutorial/create-atlas-account/)
2. [Create a project and a cluster for your project](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/)
3. [Whitelist Your Connection IP Address](https://docs.atlas.mongodb.com/tutorial/whitelist-connection-ip-address/)
4. [Create a Database User for Your Cluster](https://docs.atlas.mongodb.com/tutorial/create-mongodb-user-for-cluster/)
5. [Connect to your cluster](https://docs.atlas.mongodb.com/tutorial/connect-to-your-cluster/)
6. Copy the connection string and **create a config/ folder in the root of the project**. Example connection string: 
```
mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true"
```
7. **Create a file called development.env in the config/** folder with the next structure (make sure to copy each part of the connection string in the correct place): 

```
DB_PROTOCOL=mongodb+srv
DB_USER=username
DB_PASSWORD=password
DB_HOST=clustername.mongodb.net
DB_NAME=test
JWT_SECRET=yoursuperawesomesecret
```

8. Install the node modules

```
> npm install
```
9. Start the server!

```
> npm run dev
```

Obviously, you can add some new features and improve the existing ones! It's only a guide!

Have fun!




