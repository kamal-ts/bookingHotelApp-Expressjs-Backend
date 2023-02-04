import { PrismaClient } from '../../generated/client/deno/edge.ts'
import {config} from '../../deps.ts'


const envVars = await config();

const db = new PrismaClient({
    datasources: {
      db: {
        url: envVars.DATABASE_URL,
      },
    },
  });

export default db;