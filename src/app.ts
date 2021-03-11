import "reflect-metadata";
import * as express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})