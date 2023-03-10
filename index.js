const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT || 80

app.post('/api/v1/authorization', (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  res.json({
    "balances": {
      "currency_code": "SGD",
      "ledger_balance": "100.00",
      "available_balance": "98.00"
    },
    "transaction_id": "b0dc7c8d-a346-450f-9b1d-cbd76aa2b0a7",
    "remarks": "user bought from drink shop"
  });
});

app.post('/api/v1/webhook', (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});