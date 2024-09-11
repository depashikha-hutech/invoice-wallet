const {executeQueryInSevaSetuDB } = require("../config/dbConfig");

async function getClientInvoices(ClientID, fromDate, toDate) {
  const sql = `
    SELECT ClientID, CompanyID
    FROM (
      ${Array.from(
        { length: 35 },
        (_, i) =>
          `SELECT ClientID, CompanyID FROM account_trans_${i + 1} 
         WHERE ClientID = '${ClientID}' AND DATE(EntryDate) BETWEEN '${fromDate}' AND '${toDate}'`
      ).join(" UNION ")}
    ) AS subquery
    GROUP BY CompanyID, ClientID
  `;

  try {
    const results = await executeQueryInSevaSetuDB(sql);
    return results;
  } catch (error) {
    console.error("Error fetching client invoices:", error);
    throw error;
  }
}

module.exports = { getClientInvoices };
