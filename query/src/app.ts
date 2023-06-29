import express from 'express';

const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => {
  console.log("Start on port 4000.");
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify({demo1: 'query', demo2: 20}));
})
