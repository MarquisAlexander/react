import { EntityRepository, Repository } from 'typeorm';

import Tickets from '../models/Tickets';

@EntityRepository(Tickets)
class TicketsRepository extends Repository<Tickets> {
    public async findByDate(date: Date): Promise<Tickets | null> {
        // percorrendo o arrau de appointments com o .find e verificando se a hora do parsedDate
        // já existe no array ou não 
        const findAppointment = await this.findOne({
            where: { date },
        });

        return findAppointment || null;
    }
}

export default TicketsRepository;