import { Contact } from '../database/models';

export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.findAll();

    return res.status(200).json({ data: contacts });
  } catch (error) {
    return next(error);
  }
};

export const getContact = {};
