package com.techrokz.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "owner_info")
public class OwnerInfo {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "owner_id")
    private Long owner_id;

    @Column(name = "hn")
    private Long hn;

    @Column(name = "owner_name")
    private String owner_name;

    @JsonFormat
    @OneToMany(mappedBy = "owner",cascade = CascadeType.ALL)
    private List<MemberInfo> members = new ArrayList<>();

    public Long getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(Long owner_id) {
        this.owner_id = owner_id;
    }

    public Long getHn() {
        return hn;
    }

    public void setHn(Long hn) {
        this.hn = hn;
    }

    public String getOwner_name() {
        return owner_name;
    }

    public void setOwner_name(String owner_name) {
        this.owner_name = owner_name;
    }

    public List<MemberInfo> getMembers() {
        return members;
    }

    public void setMembers(List<MemberInfo> members) {
        this.members = members;
    }
}
