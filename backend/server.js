const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();
app.use(express.json());
// app.use(cors())

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

mongoose.connect(process.env.MONGO_URL,
).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.error('Error connecting to MongoDB',err);
    process.exit(1);
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));


app.get('/',(req,res)=>{
    res.json({ message: 'Backend API is running', status: 'success' });
});

app.get('/api',(req,res)=>{
    res.send('from express');
});

app.post('/api',(req,res)=>{
    const temp = req.body;
    res.send(temp);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});


