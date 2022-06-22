package com.techrokz.service;

import com.techrokz.model.SystemUser;
import com.techrokz.model.OwnerInfo;

import java.util.List;


public interface FormService {
    public String saveData(SystemUser form);
    public String loginUser(SystemUser form);
    public Boolean saveSurvey(OwnerInfo survey);
    public List<OwnerInfo> showData();
    public Boolean removeMember(Long id);
    public Boolean findByEmail(SystemUser form);
}
