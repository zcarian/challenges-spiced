import { createServer } from "node:http";

export const server = createServer((req, res) => {
    switch (req.url) {
        case "/api/fish/1":
            res.statusCode = 200;
            res.end("Shrimp");
            break;
        case "/api/fish/2":
            res.statusCode = 200;
            res.end("Anemonefish");
            break;
        default:
            res.statusCode = 404;
            res.end("Not found");
            break;
    }
});
