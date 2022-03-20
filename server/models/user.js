import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    about: String,
    experience: {
        type: Number,
        default: 0
    },
    domain: [String],
    projects: [String],
    followCount: {
        type: Number,
        default: 0
    },
    linkedin: String,
    github: String,
    contests: [String],
    id:{type : String}
});

export default mongoose.model("User", userSchema);