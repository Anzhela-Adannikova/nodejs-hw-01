import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log('Контакти успішно записані в файл.');
  } catch (error) {
    console.log('Помилка при записі файлу:', error);
  }
};
