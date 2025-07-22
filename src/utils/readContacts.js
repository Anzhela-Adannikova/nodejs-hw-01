import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    console.log('Вміст файлу:', data);
    return JSON.parse(data);
  } catch (error) {
    console.log('Помилка при читанні файлу:', error);
    return [];
  }
};
