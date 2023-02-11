import { Application } from "./deps.ts";

import UserRoute from "./src/routes/Users.ts";
import HotelRoute from './src/routes/Hotels.ts';

// const envVars = await config();
const port = 5000;
const app = new Application();

// Logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// users route
app.use(UserRoute.routes());
app.use(UserRoute.allowedMethods());

// hotels route
app.use(HotelRoute.routes());
app.use(HotelRoute.allowedMethods());

// Hello World!
app.use((ctx) => {
    ctx.response.body = `Hello World!`;
});

await app.listen({ port: port });
