import express from "express";
import db from "./config/database.js";
import IdentitasRoutes from "./utils/routes/master/identitasRoutes.js";
import kurikulumRoutes from "./utils/routes/master/kurikulumRoutes.js";
import akademikRoutes from "./utils/routes/master/akademikRoutes.js";
import gedungRoutes from "./utils/routes/master/gedungRoutes.js";
import cors from "cors";

const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/api/identitas', IdentitasRoutes);
app.use('/api/kurikulum', kurikulumRoutes);
app.use('/api/akademik', akademikRoutes);
app.use('/api/gedung', gedungRoutes);
 
app.listen(5000, () => console.log('Server running at port 5000'));