
import connectDB from "../db/connectDB.js";

async function getData(req, res) {
  const query = `
    SELECT * from nt where trackdate>='2024-11-07' and trackdate<='2024-11-07' ;`;

  try {
    const pool = await connectDB();

    const result = await pool.request().query(query);
    console.log("Data is sent");
    return res.status(200).json({
      data: result.recordset,
    });

  } catch (error) {
    console.log("error occured");
    console.log(error);
  }
}

export { getData };
