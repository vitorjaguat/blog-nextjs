import { projectFirestore } from '@/firebase/config';

export default async function handler(req, res) {
  const id = req.query.updateId;
  const body = req.body;

  if (req.method === 'PUT') {
    if (!body.title || !body.text) {
      return res.status(400).json({ data: 'Title or text not found' });
    }
    try {
      await projectFirestore.collection('posts').doc(id).update({
        title: body.title,
        text: body.text,
      });
      return res.status(200).json({ data: 'Success!' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ data: 'Could not fetch post request' });
    }
  }
}
