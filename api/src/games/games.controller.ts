import { Controller, Get, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { GamesObj } from "./dto/games.model";
import { GamesService } from "./games.service";

@Controller("games")
export class GamesController {
  constructor(private readonly GamesService: GamesService) {}

  @Post()
  async addGames(@Body() body: GamesObj) {
    console.log(body)
    const newGames = await this.GamesService.insertGames(body);
    return newGames;
  }

  @Get()
  async getAllGamess() {
    return await this.GamesService.getAllGamess();
  }

  @Get(":id")
  async getGames(@Param("id") id: string) {
    return await this.GamesService.getGames(id);
  }

  @Get("/name/:name")
  async getGamesByName(@Param("name") name: string) {
    return await this.GamesService.getGamesByName(name);
  }

  @Patch(":id")
  async updateGames(@Param("id") id: string, @Body() body: GamesObj) {    
    await this.GamesService.updateGames(id,body)
    return null
  }

  @Delete(":id")
  async removeGames(@Param("id") id: string) {
    await this.GamesService.removeGames(id)
    return null
  }
}
