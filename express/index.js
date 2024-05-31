import express from 'express'
const app=express()

const port=3000;

app.use(express.json())
let teaddata=[]
let nextid=1;

app.post('/teas',(req,res)=>{
    const {name,price}=req.body;
    const newTea={id:nextid++,name,price};
    console.log(nextid);
    teaddata.push(newTea)
    res.status(201).send(newTea)

})
app.post('/teas/:id',(req,res)=>{
    const tea=teaddata.find(t=>t.id===parseInt(req.params.id))
    if(!tea){
      
    }
})
app.put('/teas/:id',(req,res)=>{
    const teaId=req.params.id;


})
app.get('/teas',(req,res)=>{
    res.status(200).send(teaddata)
})
app.listen(port,(req,res)=>{
    console.log(`Server is Listening at port:${port}`)
})