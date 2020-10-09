import { Height } from "@material-ui/icons";
import React from "react";
import "./HOMEPAGE.css";
// import PageBversion2 from "./PageBversion2";
function HOMEPAGE() {
  const datanews = [
    {
      text1:
        "ประชาสัมพันธ์จากสำนักงาน ระบบบริหารจัดการข้อมูลตัวชี้วัด EdPex สำนักงานวิทยาเขตกำแพงแสน การเปิด-ปิด ระบบ",
      picture: <img src="./tu.jpg" style={{ width: "75%", height: "45%" }} />,
      datetimesystems: "ระบบจะเปิดจะให้ใช้งานในช่วงวันที่ 3/2/2563 - 2/8/2563",
      datepost: "ประกาศเมื่อวันที่ 23 กันยา 2563",
    },
    {
      text1:
        "ประชาสัมพันธ์จากสำนักงาน ระบบบริหารจัดการข้อมูลตัวชี้วัด EdPex สำนักงานวิทยาเขตกำแพงแสน การเปิด-ปิด ระบบ",
      picture: (
        <img src="./picthree.jpg" style={{ width: "75%", height: "45%" }} />
      ),
      datetimesystems: "ระบบจะเปิดจะให้ใช้งานในช่วงวันที่ 3/2/2563 - 2/8/2563",
      datepost: "ประกาศเมื่อวันที่ 23 กันยา 2563",
    },
  ];
  return (
    <div className="WindowsGrid">
      <div className="GridNew ">
        <div className="Box">
          <div className="zoneheader">
            <div className="herderitems">
              <img className="icons1" src="./chatlogin.png"></img>
              <div className="textnews">ข่าวประชาสัมพันธ์ทั่วไป</div>
            </div>
          </div>
          <div className="linespace"></div>
          <div className="scroll">
            {datanews &&
              datanews.map((datanews, index) => (
                <div className="zonebody">
                  <div className="bodygroup1">
                    <div className="pointer"></div>
                    <div className="bodytext1">{datanews.text1}</div>
                  </div>

                  <div className="pictureCSS">{datanews.picture}</div>

                  <div className="datesystem">
                    <img className="icons2" src="./timesystems.png"></img>
                    <div className="datetext">{datanews.datetimesystems}</div>
                  </div>
                  <div className="datenews">{datanews.datepost}</div>
                  <div className="linespace2"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="GridLogin">
        <img className="imglogin" src="./log.jpg"></img>
      </div>
    </div>
  );
}
export default HOMEPAGE;
