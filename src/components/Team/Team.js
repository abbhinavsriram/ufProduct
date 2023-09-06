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
                        <Teamitem teamImage="team_01.jpg" memberN="Aarsh Chokshi" memberd="co president"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_02.jpg" memberN="Ryan Popov" memberd="co president"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_03.jpg" memberN="Donovan Spall" memberd="director"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_04.jpg" memberN="William Teke" memberd="director"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_5.jpg" memberN="Sofia Rizzo" memberd="director"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_6.jpg" memberN="Shaina Desroches" memberd="fellowship lead"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_7.jpg" memberN="Ikram Loutfi" memberd="fellowship lead"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_8.jpg" memberN="Alfredo Auris" memberd="fellowship lead"/>
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
        </section>
        
    )
}
export default Team;