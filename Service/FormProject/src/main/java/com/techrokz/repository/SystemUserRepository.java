package com.techrokz.repository;

import com.techrokz.model.SystemUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SystemUserRepository extends JpaRepository<SystemUser, Long>{
    public SystemUser findByUsername(String username);
    public SystemUser findByEmail(String email);
}
