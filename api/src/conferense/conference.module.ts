import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConferenceSchema } from './dto/conference.model';
import { ConferenceController } from './conference.controller';
import { ConferenceService } from './conference.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Conference", schema: ConferenceSchema }]),
  ],
  controllers: [ConferenceController],
  providers: [ConferenceService],
  exports: [ConferenceService]
})
export class ConferencesModule {
  
}
