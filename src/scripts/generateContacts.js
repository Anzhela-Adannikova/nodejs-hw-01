import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const readingContacts = await readContacts();
  const newContacts = [];

  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    newContacts.push(contact);
  }

  const allContacts = [...readingContacts, ...newContacts];
  await writeContacts(allContacts);

  console.log(
    `Додано ${number} нових контактів. Загальна кількість контактів: ${allContacts.length}`,
  );
};

generateContacts(5);
