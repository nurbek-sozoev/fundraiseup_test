import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Donation } from '../models/Donation';

@Service()
export class CreateDonation {
  constructor(@InjectRepository(Donation) private donationRepository: Repository<Donation>) {}

  async call(donation: Donation) {
    donation.createdAt = new Date(Date.now());
    return await this.donationRepository.insert(donation);
  }
}
