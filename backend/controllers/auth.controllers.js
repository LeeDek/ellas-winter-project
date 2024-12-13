export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "username already exists" });
    }
    //HASH PASSWORD HERE

    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic:
        gender === "male" || gender === "other"
          ? boyProfilePic
          : girlProfilePic,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profile,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => {
  console.log("loginUser");
};

export const logout = (req, res) => {
  console.log("logoutUser");
};
