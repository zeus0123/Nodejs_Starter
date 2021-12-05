import Book from "../models/Book";

export const getBooks = async (req, res) => {
  console.log('checking');
  try {
    const books = await Book.find({}, {__v: 0});
    return res.status(200).json({
      code: 'Ok',
      data: books
    });
  } catch (error) {
    return res.status(500).json({
      code: 'Error',
      data: error
    })
  }
}

export const createBooks = async (req, res) => {
  const { title, author, description } = req.body;
  try {
    const book = new Book({
      title,
      author,
      description
    });

    const createBook = await book.save();
    return res.status(200).json({
      code: 'Ok',
      data: createBook
    })

  } catch (error) {
    return res.status(500).json({
      code: 'Error',
      data: error
    })
  }
 
}
