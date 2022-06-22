package com.techrokz.dto;

import lombok.Data;
import java.util.List;

@Data
public class SystemUserDTO {
    String username;
    String password;
    String token;
    String role;
}
