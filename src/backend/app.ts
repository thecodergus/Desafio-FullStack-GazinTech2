import restify from "restify"
import { config } from "dotenv"

// Tornar as variaveis de .env "globais"
config()

// Configurações basicas
const port = process.env.PORT_API || 3000

// Criar chamada de servidor
const app = restify.createServer({
    name: "desafio-gazin-tech",
    version: "2.0.0"
})

// Plugins
app.use(restify.plugins.acceptParser(app.acceptable));
app.use(restify.plugins.queryParser());
app.use(restify.plugins.bodyParser({ mapParams: true }));

// Middlesware

// Routes

// Executando servidor
app.listen(port, () => console.log("SERVER ON"))