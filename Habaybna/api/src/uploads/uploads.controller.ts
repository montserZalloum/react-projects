import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Res,
  Injectable,
} from "@nestjs/common";

import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { editFileName, imageFileFilter } from "src/utils/file-uploading.utils";
@Controller("uploads")
export class UploadsController {
  @Post("/image")
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./files",
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  async uploadFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    console.log(response);
    return response;
  }

  @Get()
  xx(){
    return 'xx';
  }
  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }
}
