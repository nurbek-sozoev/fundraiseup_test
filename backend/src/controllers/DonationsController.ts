import { JsonController, Post, HttpCode, Body, Header } from 'routing-controllers';
import { Container } from 'typedi';
import { Donation } from '../models/Donation';
import { CreateDonation } from "../services/CreateDonation";

@JsonController()
export class DonationsController {
  @Post('/donations')
  @HttpCode(201)
  async createDonation(@Body() donation: Donation) {
    await Container.get(CreateDonation).call(donation);
    return { "ok": true };
  }
}
