import * as Yup from 'yup';
import Appointiment from '../models/Appointment';

class AppointimentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validadtion fails' });
    }
    const { provider_id, date} = req.body;
  }
}

export default new AppointimentController();
