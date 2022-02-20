import { Router } from 'express';
import {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
} from '../controllers/contact-controller';

const router = Router();

router.post('/', createContact);
router.get('/', getContacts);
router.get('/:contactId', getContact);
router.patch('/:contactId', updateContact);
router.delete('/:contactId', deleteContact);

export default router;
