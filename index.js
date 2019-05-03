/* eslint-disable no-console, no-shadow */
// import path from "path";
import express from "express";
import graphQLHTTP from "express-graphql";
import chalk from "chalk";
import cors from "cors";
import config from "./config/environment";
import schema from "./data/schema";

// Launch GraphQL
const graphql = express();

// automatically sets res headers
graphql.use(cors());

graphql.use(
  "/",
  graphQLHTTP(req => ({
    graphiql: true,
    pretty: true,
    schema,
    context: {
      access_token: req.headers.authorization
    }
  }))
);

graphql.listen(config.graphql.port, () =>
  console.log(
    chalk.green(`GraphQL is listening on port ${config.graphql.port}`)
  )
);
