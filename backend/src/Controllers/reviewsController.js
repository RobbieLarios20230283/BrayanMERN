const reviewsController ={};

//select
reviewsController.getReviews = async (req,res)=>{
    const reviews = await reviewsModel.find().populate("idClient")
    res.json(reviews)
}

reviewsController.inserReview = async(req,res) => {
    const {comment,rating,idClient}= req.body;
    const newReview = reviewsModel(
        {comment,rating,idClient}
    )
    await newReview.save()
    res.json({message: "Review save"})
}

reviewsController.deletereview = async (req,res) => {
    await reviewsModel.findByIdAndDelete(req.params.id);
    res.json({message: "review delete"})
}

//update
reviewsController.updateProduct = async (req,res)=>{
    const {name, description,price,stock} = req.body;
    const updateProduct = await reviewsModel.findByIdAndUpdate(req.params.id,{comment,rating,idClient}, {new:true})
    res.json({message:"review updated"})
}

export default reviewsController;