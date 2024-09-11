// src/index.js
const express = require("express");
const { fetchInvoices } = require("./controllers/invoiceController");

const app = express();
const port = process.env.PORT || 3008;

app.use(express.json());

// Define routes
app.get("/invoices", fetchInvoices);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
