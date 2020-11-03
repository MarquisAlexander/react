import { EntityRepository, Repository } from 'typeorm';

import Event from '../models/Event';

@EntityRepository(Event)
class EventsRepository extends Repository<Event> {
    public async findByDate(date: Date): Promise<Event | null> {
        // percorrendo o arrau de appointments com o .find e verificando se a hora do parsedDate
        // já existe no array ou não 
        const findAppointment = await this.findOne({
            where: { date },
        });

        return findAppointment || null;
    }
}

export default EventsRepository;