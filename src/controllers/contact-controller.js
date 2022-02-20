import { Contact } from '../database/models';

export const createContact = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
  } = req.body;

  try {
    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      phoneNumber,
    });

    return res.status(201).json({ data: contact });
  } catch (error) {
    return next(error);
  }
};

export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.findAll();

    return res.status(200).json({ data: contacts });
  } catch (error) {
    return next(error);
  }
};

export const getContact = async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const [contact] = await Contact.findAll({ where: { id: contactId } });

    if (!contact) return res.status(404).json({ error: 'Contact not found' });

    return res.status(200).json({ data: contact });
  } catch (error) {
    return next(error);
  }
};

export const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
  } = req.body;

  try {
    const result = await Contact.update(
      {
        firstName,
        lastName,
        email,
        phoneNumber,
      },
      {
        where: { id: contactId },
        returning: true,
      },
    );

    if (!result[0]) return res.status(404).json({ error: 'Contact not found' });

    const contact = result[1][0];

    return res.status(200).json({ data: contact });
  } catch (error) {
    return next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const contact = await Contact.destroy({ where: { id: contactId } });

    if (!contact) return res.status(404).json({ error: 'Contact not found' });

    return res.status(201).json({ message: 'Contact was deleted successfully' });
  } catch (error) {
    return next(error);
  }
};
