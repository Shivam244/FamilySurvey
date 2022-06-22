package com.techrokz.service;

import com.techrokz.model.SystemUser;
import com.techrokz.repository.SystemUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;

@Service
public class UserDetailsImpl implements UserDetailsService {

    @Autowired
    SystemUserRepository systemUserRepository;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        SystemUser systemUser =  systemUserRepository.findByUsername(username);
        ArrayList roles = new ArrayList<>();
        roles.add(systemUser.getRole());
        if(systemUser.getId()!=null){
//            return new User(systemUser.getUsername(), systemUser.getPassword(), roles);
            return new User(systemUser.getUsername(), systemUser.getPassword(), new ArrayList<>());
        } else{
            throw new UsernameNotFoundException("User not found with username: "+username);
        }
    }

    public SystemUser save(SystemUser user) {
        SystemUser newUser = new SystemUser();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        newUser.setAddress(user.getAddress());
        newUser.setEmail(user.getEmail());
        newUser.setRole("Generic");
        return systemUserRepository.save(newUser);
    }
}
