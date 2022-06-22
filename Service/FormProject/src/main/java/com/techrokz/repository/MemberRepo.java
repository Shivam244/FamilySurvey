package com.techrokz.repository;

import com.techrokz.model.MemberInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepo extends JpaRepository<MemberInfo, Long> {
}
