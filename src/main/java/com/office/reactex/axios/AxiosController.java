package com.office.reactex.axios;

import com.office.reactex.util.UploadFileService;
import jakarta.servlet.http.HttpSession;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Log4j2
@RestController
@RequestMapping("/axios")
public class AxiosController {

    final private UploadFileService uploadFileService;

    public AxiosController(UploadFileService uploadFileService) {
        this.uploadFileService = uploadFileService;
    }

    @GetMapping("/get_data")
    public Map<String, Object> getData (@RequestParam()Map<String, String> paramsMap, HttpSession session) {
        log.info("getData()");
//        log.info("id:{}", id);

        log.info("paramsMapID: {}", paramsMap.get("id"));
        log.info("paramsMap: {}", paramsMap);
        log.info("sessionID: {}", session.getId());

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("data1", "good");
        responseMap.put("data2", "afternoon");
        responseMap.put("data3", "night");
        responseMap.put("data4", "morning");

        return responseMap;
    }
    @PostMapping("/post_data")
    public Map<String, Object> postData (@RequestBody Map<String, String> paramsMap) {
        log.info("postData()");

        log.info("paramsMap: {}", paramsMap);

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("data1", "good");
        responseMap.put("data2", "afternoon");
        responseMap.put("data3", "night");
        responseMap.put("data4", "morning");


        return responseMap;
    }

    @PutMapping("/put_data")
    public Map<String, Object> putData (@RequestBody Map<String, String> paramsMap) {
        log.info("putData()");

        log.info("paramsMap: {}", paramsMap);

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("data1", "good");
        responseMap.put("data2", "afternoon");
        responseMap.put("data3", "night");
        responseMap.put("data4", "morning");


        return responseMap;
    }

    //delete
    @DeleteMapping("/delete_data")
    public Map<String, Object> deleteData (@RequestBody Map<String, String> paramsMap) {
        log.info("deleteData()");

        log.info("paramsMap: {}", paramsMap);

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("data1", "good");
        responseMap.put("data2", "afternoon");
        responseMap.put("data3", "night");
        responseMap.put("data4", "morning");


        return responseMap;
    }

    @PostMapping("/transfer_file")
    public Object transferFile (@RequestParam(value = "id", defaultValue = "abcd") String id,
                                @RequestParam(value ="attach_file", required = false) MultipartFile file) {
        log.info("transferFile()");

        log.info("id:{}", id);
        log.info("attach_file:{}", file);

        uploadFileService.upload(id, file);

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("data1", "good");
        responseMap.put("data2", "afternoon");
        responseMap.put("data3", "night");
        responseMap.put("data4", "morning");

        return responseMap;
    }

    @PostMapping("/post_formData")
    public Object postFormData (@RequestParam("id") String id,
                                @RequestParam("pw") String pw) {
        log.info("postFormData()");

        log.info("id:{}", id);
        log.info("pw:{}", pw);

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("data1", "good");
        responseMap.put("data2", "afternoon");
        responseMap.put("data3", "night");
        responseMap.put("data4", "morning");

        return responseMap;

    }

    @PutMapping("/put_formData")
    public Object putFormData (@RequestParam("id") String id,
                               @RequestParam("pw") String pw) {
        log.info("postFormData()");

        log.info("id:{}", id);
        log.info("pw:{}", pw);

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("data1", "good");
        responseMap.put("data2", "afternoon");
        responseMap.put("data3", "night");
        responseMap.put("data4", "morning");

        return responseMap;

    }

    @DeleteMapping("delete_formdata")
    public Object deleteFormData (@RequestParam("id") String id,
                                  @RequestParam("pw") String pw) {
        log.info("deleteFormData()");

        log.info("id:{}", id);
        log.info("pw:{}", pw);

        return null;
    }

    @PostMapping("/post_formdata_dto")
    public Object postFormdataDto (AxiosDto axiosDto, @RequestParam("email") String email) {         //프론트에서 넘어주는 변수명이 이름이 같지않으면 어쩔 수 없이 @RequestParams 으로 직접 넣어줘야 합니다.
        log.info("postFormdataDto()");

       log.info("id: {}", axiosDto.getId());
       log.info("pw: {}", axiosDto.getPw());

       axiosDto.setMail(email);
       log.info("mail: {}", axiosDto.getMail());

        return null;
    }

}
