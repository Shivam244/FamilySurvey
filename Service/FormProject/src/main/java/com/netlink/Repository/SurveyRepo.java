package com.netlink.Repository;

import com.netlink.Model.OwnerInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyRepo extends JpaRepository<OwnerInfo, Long> {
}
