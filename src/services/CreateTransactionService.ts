//import AppError from '../errors/AppError';

import { response } from 'express';
import { getCustomRepository } from 'typeorm';
import Transaction from '../models/Transaction';


import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  value: string;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({title, value, type, category,}: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = transactionsRepository.create({
      title,
      value, 
      type,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
  
}

export default CreateTransactionService;
