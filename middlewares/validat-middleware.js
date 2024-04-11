const validate = (Schema)=>async(req, res, next)=>{
try {
    const parseBody = await Schema.parseAsync(req.body);
    req.body = parseBody;
    next();
} catch (err) {
    const status = 422;
    const message = "fill the input properly";
    const extradetails = err.errors[0].message;


    const error = {
        status,
        message,
        extradetails,
    };
    console.log(error); 
//  res.status(400).json({msg:message})
   next(error);
}
};

module.exports = validate;