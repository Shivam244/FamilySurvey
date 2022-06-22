package com.techrokz.controller;
import com.techrokz.dto.SystemUserDTO;
import com.techrokz.model.SystemUser;
import com.techrokz.repository.SystemUserRepository;
import com.techrokz.service.FormService;
import com.techrokz.service.UserDetailsImpl;
import com.techrokz.util.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class LoginController {

    @Autowired
    FormService data;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserDetailsImpl userDetailsService;

    @Autowired
    SystemUserRepository systemUserRepository;


    @PostMapping(value = "/authenticate")
    public ResponseEntity<SystemUserDTO> createAuthenticationToken(@RequestBody SystemUser authenticationRequest) throws Exception {
        SystemUserDTO systemUserDTO = new SystemUserDTO();
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());
        SystemUser systemUser =  systemUserRepository.findByUsername(userDetails.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails);
        systemUserDTO.setUsername(userDetails.getUsername());
        systemUserDTO.setPassword(userDetails.getPassword());
        systemUserDTO.setToken(token);
        systemUserDTO.setRole(systemUser.getRole());
        return ResponseEntity.ok(systemUserDTO);
    }

    @PostMapping("/register")
    public ResponseEntity<String> save(@RequestBody SystemUser form){
        String response = data.saveData(form);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping("/login")
    public ResponseEntity<String> login(@RequestBody SystemUser form){
        String response = data.loginUser(form);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<Boolean> findUserByMail(@RequestBody SystemUser form){
        Boolean resp = data.findByEmail(form);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }

}
