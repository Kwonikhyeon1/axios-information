package com.office.reactex.util;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

@Service
@Log4j2
public class UploadFileService {

    public String upload(String m_id, MultipartFile file) {
        log.info("upload()");

        boolean result = false;

        String fileOriName = file.getOriginalFilename();
        String fileExtension = fileOriName.substring(fileOriName.lastIndexOf("."), fileOriName.length());
        String uploadDir = ConstantVar.UPLOAD_BASIC_PATH.concat(m_id);

        UUID uuid = UUID.randomUUID();
        String uniqueFileName = uuid.toString().replaceAll("-", "");

        File saveFile = new File(uploadDir.concat("\\")
                                          .concat(uniqueFileName)
                                          .concat(fileExtension));
        if(!saveFile.exists())
            saveFile.mkdirs();

        try {

            file.transferTo(saveFile);
            result = true;

        } catch (Exception e) {
            e.printStackTrace();

        }

        if (result) {
            log.info("FILE UPLOAD SUCCESS!!");
            return uniqueFileName.concat(fileExtension);

        } else {
            log.info("FILE UPLOAD FAIL!!");
            return null;

        }

    }

}
