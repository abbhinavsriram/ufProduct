import React from 'react';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';
const Team =()=>{
    return(
        <section className="experts_team_area sec_pad">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="The Team" tClass="t_color3" TitleP="UF Product Space Executive Board and Fellowship Leads"/>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_01.jpg" memberN="Aarsh Chokshi" memberd="Co-president"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_02.jpg" memberN="Ryan Popov" memberd="Co-president"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_03.jpg" memberN="Donovan Spall" memberd="Director"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_04.jpg" memberN="William Teke" memberd="Director"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_5.jpg" memberN="Sofia Rizzo" memberd="Director"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_6.jpg" memberN="Shaina Desroches" memberd="Fellowship Lead"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_7.jpg" memberN="Ikram Loutfi" memberd="Fellowship Lead"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_8.jpg" memberN="Alfredo Auris" memberd="Fellowship Lead"/>
                    </div>
                     {/*
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_9.jpg" memberN="Max Conversion" memberd="Social Marketer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_10.jpg" memberN="Jake Weary" memberd="UI/UX designer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_9.jpg" memberN="Justin Case" memberd="Marketer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_12.jpg" memberN="Norman Gordon" memberd="Web developer"/>
                    </div>
                    */}
                </div>
            </div>
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="The Fellows" tClass="t_color3" TitleP="Fall 2023"/>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="anikethm.jpg" memberN="Aniketh Mukhirala" memberd="Fellow"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="aravinds.jpg" memberN="Aravind Shankar" memberd="Fellow"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="jellanef.jpg" memberN="Jellane Fauni" memberd="Fellow"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="jinghanw.jpg" memberN="Jinghan Wu" memberd="Fellow"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="phuh.jpg" memberN="Phu Huynh" memberd="Fellow"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="sophiab.jpg" memberN="Sophia Baccari" memberd="Fellow"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="stephanieg.jpg" memberN="Stephanie Goris" memberd="Fellow"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="avav.jpg" memberN="Ava Vellozzi" memberd="Fellow"/>
                    </div>
                     {}
                </div>
            </div>
        </section>
        
    )
}
export default Team;