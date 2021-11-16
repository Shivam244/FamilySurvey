package com.netlink.Repository;

import com.netlink.Model.MemberInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepo extends JpaRepository<MemberInfo, Long> {
}
