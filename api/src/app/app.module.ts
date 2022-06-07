import { Module } from "@nestjs/common";
import { TaxonomyModule } from "../taxonomy/taxonomy.module";
import { HomeModule } from "../home/home.module";
import { MongooseModule } from "@nestjs/mongoose";
import { TermModule } from "src/taxonomy/term/term.module";
import { ContentModule } from "src/content/content.module";
import { AuthModule } from "src/auth/auth.module";
import { UsersModule } from "src/users/users.module";
import { ConferencesModule } from "src/conferense/conference.module";
import { GamesModule } from "src/games/games.module";

@Module({
  imports: [
    AuthModule,
    TaxonomyModule,
    TermModule,
    HomeModule,
    ContentModule,
    UsersModule,
    ConferencesModule,
    GamesModule,
    MongooseModule.forRoot("mongodb://localhost:27017/aw-admin"),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
