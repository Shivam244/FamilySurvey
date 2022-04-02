package com.netlink.Service;

import com.netlink.Model.Form;
import com.netlink.Model.MemberInfo;
import com.netlink.Model.OwnerInfo;
import com.netlink.Repository.MemberRepo;
import com.netlink.Repository.Repo;
import com.netlink.Repository.SurveyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.From;
import java.lang.reflect.Member;
import java.util.List;
import java.util.Optional;

@Service
public class FormImp implements FormService {

    @Autowired
    Repo repo;

    @Autowired
    SurveyRepo orepo;

    @Autowired
    MemberRepo mrepo;

    @Override
    public String saveData(Form form) {
        if(form.getUsername()!=null && form.getEmail()!=null
                && form.getPassword()!=null && form.getAddress()!=null){
            Form userExist = repo.findByEmail(form.getEmail());
            if(userExist==null){
                Form frm = repo.save(form);
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
    public String loginUser(Form form) {
        if(form.getUsername()!=null && form.getPassword()!=null){
            Form data = repo.findByUsername(form.getUsername());
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
    public Boolean findByEmail(Form form) {
        Form data = repo.findByEmail(form.getEmail());
        if (data!=null){
            data.setPassword(form.getPassword());
            repo.save(data);
            return true;
        } else return false;
    }


}
