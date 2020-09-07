import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionCustomReporitory = getCustomRepository(
      TransactionsRepository,
    );

    if (!id) {
      throw new AppError('send id to delete');
    }

    const transaction = await transactionCustomReporitory.findOne(id);

    if (!transaction) {
      throw new AppError('transaction not found');
    }

    await transactionCustomReporitory.remove(transaction);
  }
}

export default DeleteTransactionService;
