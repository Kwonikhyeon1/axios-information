package com.office.reactex;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Log4j2
@Controller
public class HomeController {

    @GetMapping({"", "/"})
    public String home () {
        log.info("home()");

        return "/home";
    }
}
