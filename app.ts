import * as bodyParser from "body-parser";
import * as path from "path";
import * as express from "express";
import { APILogger } from "./logger/logger";
import { ApiController } from "./controller/apiController";

class App {
    public express: express.Application;
    public logger: APILogger;
    public apiController: ApiController;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new APILogger();
        this.apiController = new ApiController();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(express.static(path.join(__dirname, '../client/build')));
    }

    private routes(): void {
        this.express.post('/api/login', (req, res) => {
            this.apiController.login(req.body).then(data => res.json(data));
        });
        
        this.express.put('/api/register', (req, res) => {
            this.apiController.register(req.body).then(data => res.json(data));
        });

        this.express.get('/api/token', (req, res) => {
            res.set('Content-Type', 'text/html');
            res.send(process.env.NASA_TOKEN);
        });

        this.express.get("/", (req, res) => {
            res.sendFile(path.join(__dirname, '../client/build/index.html'));
        });

        // handle undefined routes
        // this.express.use("*", (req, res) => {
            // res.redirect('/');
        // });
    }
}

export default new App().express;