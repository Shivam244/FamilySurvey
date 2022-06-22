package com.techrokz.service;

import com.techrokz.model.SystemUser;
import com.techrokz.model.OwnerInfo;
import com.techrokz.repository.MemberRepo;
import com.techrokz.repository.SystemUserRepository;
import com.techrokz.repository.SurveyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormImp implements FormService {

    @Autowired
    SystemUserRepository repo;

    @Autowired
    SurveyRepo orepo;

    @Autowired
    MemberRepo mrepo;

    @Autowired
    UserDetailsImpl userDetails;

    @Override
    public String saveData(SystemUser form) {
        if(form.getUsername()!=null && form.getEmail()!=null
                && form.getPassword()!=null && form.getAddress()!=null){
            SystemUser userExist = repo.findByEmail(form.getEmail());
            if(userExist==null){
                SystemUser frm = userDetails.save(form);
                if(frm!=null){
                    return "User has been registered";
                }
            } else{
                return  "Email already exists";
            }
        } else{
            return "All fields are mandatory";
        }
        return "We where unable to register the user";
    }

    @Override
    public String loginUser(SystemUser form) {
        if(form.getUsername()!=null && form.getPassword()!=null){
            SystemUser data = repo.findByUsername(form.getUsername());
            if(data!=null){
                if(data.getPassword().equals(form.getPassword())) return "User has logged in";
                else return "Password invalid";
            } else return "User does not exist";
        } else return "All fields are mandatory";
    }

    @Override
    public Boolean saveSurvey(OwnerInfo survey) {
        survey.getMembers().forEach(member -> member.setOwner(survey));
        OwnerInfo data = orepo.save(survey);
        if(!data.equals(null))
        return true;
        else return false;
    }

    @Override
    public List<OwnerInfo> showData() {
        List<OwnerInfo> list = orepo.findAll();
        return list;
    }

    @Override
    public Boolean removeMember(Long id) {
        mrepo.deleteById(id);
        return true;
    }

    @Override
    public Boolean findByEmail(SystemUser form) {
        SystemUser data = repo.findByEmail(form.getEmail());
        if (data!=null){
            data.setPassword(form.getPassword());
            repo.save(data);
            return true;
        } else return false;
    }


}
