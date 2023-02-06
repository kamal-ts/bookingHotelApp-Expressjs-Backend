import { PrismaClient } from '../../generated/client/deno/edge.ts'
// import {config} from '../../deps.ts'


// const envVars = await config();

const db = new PrismaClient({
    datasources: {
      db: {
        url : "prisma://aws-us-east-1.prisma-data.com/?api_key=sHQsq89N_O1Muy0J3eZwpeXPwgmHS2XrPhj0ReMqprQGy-xsA9GAJS6Zpuwyo33R"
        // url: `${envVars.DATABASE_URL}`
      },
    },
  });

export default db;