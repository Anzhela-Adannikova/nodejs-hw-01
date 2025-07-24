import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contact = JSON.parse(data);
    const newContact = createFakeContact();

    contact.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contact, null, 2));
    console.log('Контакт успішно додано:', newContact);
  } catch (error) {
    console.error('Помилка при додаванні контакту:', error);
  }
};

addOneContact();
