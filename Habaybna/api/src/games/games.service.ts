import { Injectable, NotFoundException } from "@nestjs/common";
import { Games } from "./dto/games.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class GamesService {
  constructor(@InjectModel("Games") private readonly gamesModel: Model<Games>) {}

  async insertGames(payload) {
    const newGames = new this.gamesModel(payload);
    const result = await newGames.save();
    return result;
  }

  async getAllGamess() {
    const gamess = await this.gamesModel.find().sort("-created_at").exec();
    return gamess as Games[];
  }

  async getGames(id: string) {
    const games = await this.findProduct(id);
    return games;
  }

  async updateGames(id, payload) {
    const updatedGames = await this.findProduct(id);

    if (payload.name) updatedGames.name = payload.name;
    if (payload.price) updatedGames.price = payload.price;
    if (payload.quantity) updatedGames.quantity = payload.quantity;
    updatedGames.save();
  }

  async removeGames(id) {
    const result = await this.gamesModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount == 0)
      throw new NotFoundException("Failed to delete games");
  }

  async getGamesByName(name) {
    const games = await this.gamesModel.find({ name: name }).exec();
    if (games.length == 0) throw new NotFoundException("Could not find Games.");
    return games[0];
  }

  private async findProduct(id: string): Promise<Games> {
    let games;
    try {
      games = await this.gamesModel.findById(id);
    } catch (error) {
      throw new NotFoundException("Could not find Games.");
    }
    if (!games) {
      throw new NotFoundException("Could not find Games.");
    }
    return games;
  }

  // async findOne(gamesname: string): Promise<Games | undefined> {
  //     return games.find(games => games.gamesname == gamesname)
  // }
}
