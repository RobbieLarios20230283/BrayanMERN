const clientsController = {};

import Clients from "../models/Clients.js";

clientsController.getClients = async(req,res)=>{
    const clients = await Clients.find()
    res.json(clients)
}

clientsController.insertClients = async(req,res)=>{
    
    const {name,lastName,birthday,email,password,telephone,dui,isVerified} = req.body;
    const newClient = new Clients({name,lastName,birthday,email,password,telephone,dui,isVerified})

    await newClient.save()

    res.json({message:"Client saved"})
}

clientsController.deleteClient = async (req,res) => {
    await Clients.findByIdAndDelete(req.params.id);
    res.json({message: "Client delete"})
}

//update
clientsController.updateClient = async (req,res)=>{
    const {name,lastName,birthday,email,password,telephone,dui,isVerified} = req.body;
    const updateClient = await Clients.findByIdAndUpdate(req.params.id,{name,lastName,birthday,email,password,telephone,dui,isVerified}, {new:true})
    res.json({message:"Client updated"})
}

export default clientsController;
