import mongoose from "mongoose";

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
});

const Book = mongoose.model('books', BookSchema);

export default Book;