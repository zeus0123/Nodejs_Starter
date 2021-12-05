import express from 'express';
import { createBooks, getBooks } from './src/services/Book';

const router = express.Router();

router.get('/api/v1/books', (req, res) => getBooks(req, res));
router.post('/api/v1/book', (req, res) => createBooks(req, res));


export default router;