import { Injectable, NotFoundException } from "@nestjs/common";
import { Conference } from "./dto/conference.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ConferenceService {
  constructor(@InjectModel("Conference") private readonly conferenceModel: Model<Conference>) {}

  async insertConference(payload) {
    const newConference = new this.conferenceModel(payload);
    const result = await newConference.save();
    return result;
  }

  async getAllConferences() {
    const conferences = await this.conferenceModel.find().sort("-created_at").exec();
    return conferences as Conference[];
  }

  async getConference(id: string) {
    const conference = await this.findProduct(id);
    return conference;
  }

  async updateConference(id, payload) {
    const updatedConference = await this.findProduct(id);

    if (payload.name) updatedConference.name = payload.name;
    updatedConference.save();
  }

  async removeConference(id) {
    const result = await this.conferenceModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount == 0)
      throw new NotFoundException("Failed to delete conference");
  }

  async getConferenceByName(name) {
    const conference = await this.conferenceModel.find({ name: name }).exec();
    if (conference.length == 0) throw new NotFoundException("Could not find Conference.");
    return conference[0];
  }

  private async findProduct(id: string): Promise<Conference> {
    let conference;
    try {
      conference = await this.conferenceModel.findById(id);
    } catch (error) {
      throw new NotFoundException("Could not find Conference.");
    }
    if (!conference) {
      throw new NotFoundException("Could not find Conference.");
    }
    return conference;
  }

  // async findOne(conferencename: string): Promise<Conference | undefined> {
  //     return conference.find(conference => conference.conferencename == conferencename)
  // }
}
