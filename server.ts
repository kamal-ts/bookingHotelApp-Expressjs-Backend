import {
    config,
    express
} from './deps.ts';

import { Express, Request, Response } from 'npm:express@^4.18.2';
import UserRoute from './src/routes/Users.ts';

const envVars = await config();
const app: Express = express();

app.use(express.json());

app.use(UserRoute)

app.use("/", (_req: Request, res: Response) => {
    res.send("hello wordl");
})




app.listen(envVars.PORT || 5000, () => {
    console.log(`server runing on port 5000 or ${envVars.PORT}`);
    
});