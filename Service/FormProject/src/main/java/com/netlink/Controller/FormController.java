package com.netlink.Controller;
import com.netlink.Model.Form;
import com.netlink.Service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/auth")
public class  FormController {

    @Autowired
    FormService data;

    @PostMapping("/register")
    public ResponseEntity<String> save(@RequestBody Form form){
        String response = data.saveData(form);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Form form){
        String response = data.loginUser(form);
        return new ResponseEntity<>(response, HttpStatus.FOUND);
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<Boolean> findUserByMail(@RequestBody Form form){
        Boolean resp = data.findByEmail(form);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

}
