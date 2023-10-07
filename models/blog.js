const { Schema, default: mongoose } = require("mongoose");

const blogSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
)

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;