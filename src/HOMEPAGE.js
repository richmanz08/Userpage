import { Height } from "@material-ui/icons";
import React from "react";
import "./HOMEPAGE.css";
// import PageBversion2 from "./PageBversion2";
function HOMEPAGE() {
  const datanews = [
    {
      text1:
        "ประชาสัมพันธ์จากสำนักงาน ระบบบริหารจัดการข้อมูลตัวชี้วัด EdPex สำนักงานวิทยาเขตกำแพงแสน การเปิด-ปิด ระบบ",

      description:
        "ระบบจะเปิดจะให้ใช้งานในช่วงวันที่ 3/2/2563 - 2/8/256 เรียนผู้ใช้งานทุกท่านโปรดเข้าใช้งานงานระบบตามวันเวลาที่ระบบกำหนด สามารถขอรหัสผ่านเพื่อเข้าใช้งานระบบผ่าน Admin  ติดต่อโทร 098-4437173",
      datepost: "ประกาศเมื่อวันที่ 23 กันยา 2563",
    },
    {
      text1:
        "ประชาสัมพันธ์จากสำนักงาน ระบบบริหารจัดการข้อมูลตัวชี้วัด EdPex สำนักงานวิทยาเขตกำแพงแสน การเปิด-ปิด ระบบ",

      description: "ระบบจะเปิดจะให้ใช้งานในช่วงวันที่ 3/2/2563 - 2/8/2563",
      datepost: "ประกาศเมื่อวันที่ 23 กันยา 2563",
    },
    {
      text1:
        "ประชาสัมพันธ์จากสำนักงาน ระบบบริหารจัดการข้อมูลตัวชี้วัด EdPex สำนักงานวิทยาเขตกำแพงแสน การเปิด-ปิด ระบบ",

      description: "ระบบจะเปิดจะให้ใช้งานในช่วงวันที่ 3/2/2563 - 2/8/2563",
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
                    {/* <div className="pointer"></div> */}
                    <img className="pin" src="./pin.png"></img>
                    <div className="bodytext1">{datanews.text1}</div>
                  </div>

                  <div className="descriptioncontainer">
                    <div className="description">{datanews.description}</div>
                  </div>
                  <div className="datenewscontainer">
                    <img className="icons2" src="./timesystems.png"></img>
                    <div className="datenews">{datanews.datepost}</div>
                  </div>
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
