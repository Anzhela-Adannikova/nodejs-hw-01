import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contact = JSON.parse(data);

    return contact.length;
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error);
  }
};

console.log(await countContacts());
