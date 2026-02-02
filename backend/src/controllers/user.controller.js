import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

/**
 * @desc    Login User (email or mobile + password)
 * @route   POST /api/v1/users/login
 * @access  Public
 */

const generateAccessAndRefereshToken = async(userId) =>{
    try{  
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken() ; 
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken ; 
        await user.save({ ValidateBeforeSave : false})

        return { accessToken , refreshToken} ;

    }catch(e){
        throw new ApiError (500 , "Something went wrong while generating refesh and access token");
        
    }
}
const loginUser = asyncHandler(async (req, res) => {
  const { email, mobile, password } = req.body;

  // 1️⃣ Validate input
  if ((!email && !mobile) || !password) {
    throw new ApiError(
      400,
      "Email or mobile and password are required"
    );
  }

  // 2️⃣ Find user (email OR mobile)
  const user = await User.findOne({
    $or: [{ email }, { mobile }],
  });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  // 3️⃣ Check password
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials");
  }

  // 4️⃣ Generate tokens
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  // 5️⃣ Save refresh token in DB
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  // 6️⃣ Remove sensitive fields before sending response
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // 7️⃣ Cookie options (production-ready)
  const cookieOptions = {
    httpOnly: true,
    secure: true, // true in production (HTTPS)
    sameSite: "strict",
  };

  // 8️⃣ Send response
  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully"
      )
    );
});
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, mobile, password, role } = req.body;

  // 1️⃣ Validate required fields
  if (!name || !mobile || !password) {
    throw new ApiError(400, "Name, mobile and password are required");
  }

  // 2️⃣ Check if user already exists
  const existingUser = await User.findOne({
    $or: [{ email }, { mobile }],
  });

  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  // 3️⃣ Create user
  const user = await User.create({
    name,
    email,
    mobile,
    password, // will be hashed by pre-save hook
    role,
  });

  // 4️⃣ Remove sensitive fields
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "User registration failed");
  }

  // 5️⃣ Send response
  return res.status(201).json(
    new ApiResponse(
      201,
      createdUser,
      "User registered successfully"
    )
  );
});

export { 
    loginUser,
    registerUser  ,
    generateAccessAndRefereshToken
 };
 