package com.techrokz.repository;

import com.techrokz.model.OwnerInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyRepo extends JpaRepository<OwnerInfo, Long> {
}
