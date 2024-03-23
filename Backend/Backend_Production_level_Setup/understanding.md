1. Firstly, create all the common folders and files required.
2. Connect with the database
3. Create the model schema


----things to do---------
1. write a article on access and refresh token on ( https://hashnode.com/ )
2. make a utility to delete old image from the cloudinary as when new image will be updated, then there will be no need of old image
3. 




----------Things not able to understand-----------
1. auth.middleware.js
2. jwt - what stuff it takes to decode, what things it decode, what information it stores, what is the main purpose of using it. (especially in auth.middleware.js)
3. jwt.verify - what it will return, when it will return decoded token and when it will decode, how it will decode
4. jwt.sign - whatis the use of this function
5. Proper working of cookies, why they were made in first place, how they are harmful for us
6. Access and refresh token in depth
7. how cookies, refresh and access token are interlinked

why this code is written and how it is executed

const options = {
        httpOnly: true,
        secure: true
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)

8. what is teh meaning of enpoint in the refresh token, basically, what could be the endpoint

9. const avatarLocalPath = req.files?.avatar[0]?.path;
here how middleware is accessed automatically, as files are  fetched using middleware,so middlware will know that it is called at this point.
code written in registerUser controller.

10. let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }

    can't understand this above piece of code

11. const user = User.findByIdAndUpdate(
        req.user?._id,
        {
            fullName: fullName,
            email: email
        },
        { new: true}
    ).select("-password")

    why I can't update a object in the format given below

    const user = req.user?._id
    user.avatar = avatar.url
    user.save({validateBeforeSave: false})



------------------------------------------------------------------------------------------------------------------
1. bcrypt - helps to hash the passwords
2. jsonwebtoken - generates paswords
3. multer helps to upload the files on cloudinary
    firstly, we will take the file from user and upload it on our local storage, then, we will upload the file from our local storage to the cloudinary, 2 steps process we will do. We can directly upload the file on the cloudinary also but we will follow production based practice.