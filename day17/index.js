const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("Users", userSchema);

// Connect Mongoose to MongoDB
/*mongoose.connect("mongodb://127.0.0.1/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/
mongoose
  .connect("mongodb://127.0.0.1/mydatabase")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

async function addUserToDatabase(user) {
  try {
    const existingUser = await User.findOne({ username: user.username });

    if (existingUser) {
      console.log("User already exists in the database.");
      return;
    }

    const newUser = new User({
      username: user.username,
      email: user.email,
    });

    await newUser.save();

    console.log("User added successfully:", newUser);
  } catch (error) {
    console.error("Error adding user:", error);
  } finally {
    mongoose.connection.close();
  }
}

addUserToDatabase({ username: "yogita", email: "yogita@example.com" });
