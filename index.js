import contactsService from "./contacts.js";
import yargs from 'yargs';



async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case 'list':
        const allContacts = await contactsService.listContacts();
        return console.log(allContacts);
      case 'get':
        const contact = await contactsService.getContactById(id);
        return console.log(contact);
      case 'add':
        const newContact = await contactsService.addContact(name, email, phone);
        return console.log(newContact);
      case 'remove':
        const removeContact = await contactsService.removeContact(id);
        return console.log(removeContact);

  
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }
  const {argv} = yargs(process.argv);
  invokeAction(argv);