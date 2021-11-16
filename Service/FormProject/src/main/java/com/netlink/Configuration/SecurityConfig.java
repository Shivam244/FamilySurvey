package com.netlink.Configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    protected void configure(HttpSecurity security) throws Exception{
        try{
            security.csrf().disable().authorizeRequests()
                    .antMatchers("/auth/login","/auth/register","/auth/forgot-password", "/survey/showData", "/survey/save", "/survey/update", "/survey/deleteMember").permitAll().anyRequest()
                    .authenticated().and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

            security.cors();
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
