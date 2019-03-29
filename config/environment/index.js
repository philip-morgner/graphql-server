import _ from "lodash";

const config = {
  env: "development",
  port: 8080,
  graphql: {
    port: 8000
  }
};

export default _.extend(config, require(`./${config.env}`).default);
