const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51I1GGyBZkh01ATE4brsGLO1gHwW53uUSEMa3y6mAvDiEFSIi5dlsMYg3KrGybvagbxwYhi7JauvuaBGuOUfer9P100WPEEBnPI'
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});




//http://localhost:5001/react-89078/us-central1/api

exports.api = functions.https.onRequest(app);