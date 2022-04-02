package com.netlink.Service;

import com.netlink.Model.Form;
import com.netlink.Model.MemberInfo;
import com.netlink.Model.OwnerInfo;

import java.util.List;


public interface FormService {
    public String saveData(Form form);
    public String loginUser(Form form);
    public Boolean saveSurvey(OwnerInfo survey);
    public List<OwnerInfo> showData();
    public Boolean removeMember(Long id);
    public Boolean findByEmail(Form form);
}
