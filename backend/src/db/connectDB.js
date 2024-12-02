import sql from "mssql";

const config = {
    server: '103.12.1.132', // Replace with your server IP or hostname
    port: 8138,             // Replace with your port
    database: 'Inventory21Nov', // Your database name
    user: 'msspl',          // Your username
    password: 'P@$$word2024', // Your password
    options: {
        encrypt: true,      // Encrypts the connection (use true if connecting to Azure)
        trustServerCertificate: true, // Use only for development/testing
        multipleActiveResultSets: true // Allows multiple active result sets
    }
};

// Connect and run a query
async function connectDB(){
  try {
     const connection = await sql.connect(config)
    //  console.log(connection);
     console.log("Connection to the server connected SuccessFully.")
     return connection;
  } catch (error) {
    console.log(error);
  }

//    .then(pool => {
//         return pool.request()
//             .query('SELECT * FROM YourTable'); // Replace with your SQL query
//     }).then(result => {
//         console.log(result.recordset); // Display query results
//     }).catch(err => {
//         console.error('SQL error:', err);
//     }).finally(() => {
//         sql.close(); // Close the connection when done
//     });
}

export default connectDB;

