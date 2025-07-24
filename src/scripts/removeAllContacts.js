import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('Немає контактів для видаленняю');
    }

    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
    console.log('Усі контакти успішно видалені.');
  } catch (error) {
    console.error('Помилка при читанні файлу:', error);
  }
};

removeAllContacts();
