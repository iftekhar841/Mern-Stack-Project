const User = require('../models/userModel')


const registration_user = async(req, res) => {

    // // const { uploadDocument } = req.file.filename;
    // const { user }  = req.body;
    // { firstName, lastName, email, street1, street2, fileName, typeOfFile } = user
    // console.log(user);
    // // console.log("document", req.file.filename);

    // if(!firstName || !lastName || !email || !street1 || !street2 || !fileName || !typeOfFile) {
    //     console.log("now printing data :");
    //     console.log(firstName);
    //     console.log(lastName);
    //     console.log(email);
    //     console.log(street1);
    //     console.log(street2);
    //     console.log(fileName);
    //     console.log(typeOfFile);
    //     res.status(422).json({err: "Missing mandatory field !"})
    // }
    try {
        console.log(req.body);
        console.log(typeof(req.body));

        const { firstName, lastName, email, street1, street2, fileName, typeOfFile } = req.body


        const userData = await User({
            firstName, 
            lastName, 
            email, 
            street1, 
            street2, 
            fileName, 
            typeOfFile
        });

        console.log("🚀 ~ file: userController.js:31 ~ constregistration_user=async ~ userData:", userData);

        //   const newUser =  await userData.save();
        // //   res.json({ message: 'User data saved successfully' });
        //   return res.status(201).json({ message:"User Registration Successfully", data:newUser});

        
        const userExits = await User.findOne({email:req.body.email});
        console.log("🚀 ~ file: userController.js:48 ~ constregistration_user=async ~ userExits:", userExits);

        if(userExits) {
            return res.status(422).json({msg:"Email already Exits."});
        }
        else{
            const user_data = await userData.save();
            return res.status(201).json({ message:"User Registration Successfully", data:user_data});
        }
        
    } catch (error) {
        console.error('An error occurred while saving user data:', error);
        res.status(500).json({ error: 'An error occurred while saving user data' });
    }

}

module.exports = {
    registration_user
}
