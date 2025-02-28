import express, { Request } from "express";

let db = {
    hello: "",
};

// create express application
const app = express();

// add middleware to parse JSON
app.use(express.json());

// add /db route which returns current db object
app.get("/db", (_req, res) => {
    res.json(db);
});

// add /db/update route which updates db object
app.post("/db/update", (req: Request<any, any, typeof db>, res) => {
    db = req.body;
    res.json(db);
});

// add /balance route which makes request via fetch to eth_getBalance method on Ankr RPC
app.post("/balance", async (_req, res) => {
    const response = await fetch(new URL("https://rpc.ankr.com/eth"), {
        method: "POST",
        body: JSON.stringify({
            jsonrpc: "2.0",
            method: "eth_getBalance",
            params: ["0xeac0827eff0c6e3ff28a7d4a54f65cb7689d7b99", "earliest"], // genesis block
            id: 1,
        }),
    });
    const responseJson = await response.json();

    res.json(responseJson);
});

// listen for connections
app.listen();
