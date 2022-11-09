import express, { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Hola desde middleware');
    next();    
})
app.get('/', (req,res) => {
    res.json({
        msg: "ok"
    })
});

export default app;