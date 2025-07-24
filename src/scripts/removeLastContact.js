import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('Немає контакітв для видалення.');
      return;
    }

    const lastContact = contacts.slice(0, -1);
    await fs.writeFile(PATH_DB, JSON.stringify(lastContact, null, 2));
    console.log('Останній контакт видалений успішно.');
  } catch (error) {
    console.log('Помилка при читанні файлу:', error);
  }
};

removeLastContact();
