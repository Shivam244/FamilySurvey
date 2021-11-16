package com.netlink.Repository;

import com.netlink.Model.Form;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repo extends JpaRepository<Form, Long>{
    public Form findByUsername(String username);
    public Form findByEmail(String email);
}
