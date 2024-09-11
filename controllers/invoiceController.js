const { getClientInvoices } = require("../utilities/invoice Utilities");

async function fetchInvoices(req, res) {
  const { ClientID, fromDate, toDate } = req.query;

  try {
    const invoices = await getClientInvoices(ClientID, fromDate, toDate);
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ error: "Error fetching invoices" });
  }
}

module.exports = { fetchInvoices };
