import { Controller, Get, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { ConferenceObj } from "./dto/conference.model";
import { ConferenceService } from "./conference.service";

@Controller("conference")
export class ConferenceController {
  constructor(private readonly ConferenceService: ConferenceService) {}

  @Post()
  async addConference(@Body() body: ConferenceObj) {
    console.log(body)
    const newConference = await this.ConferenceService.insertConference(body);
    return newConference;
  }

  @Get()
  async getAllConferences() {
    return await this.ConferenceService.getAllConferences();
  }

  @Get(":id")
  async getConference(@Param("id") id: string) {
    return await this.ConferenceService.getConference(id);
  }

  @Get("/name/:name")
  async getConferenceByName(@Param("name") name: string) {
    return await this.ConferenceService.getConferenceByName(name);
  }

  @Patch(":id")
  async updateConference(@Param("id") id: string, @Body() body: ConferenceObj) {    
    await this.ConferenceService.updateConference(id,body)
    return null
  }

  @Delete(":id")
  async removeConference(@Param("id") id: string) {
    await this.ConferenceService.removeConference(id)
    return null
  }
}
