import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import UserScreen from "./UserScreen";
import { Link } from "react-router-dom";
// --
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";
// import axios from "axios";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return <NumberFormat maxLength={10} allowNegative={false} {...other} />;
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
function PageBversion2(props) {
  // const [questions, setQuestions] = useState();
  // useEffect(() => {
  //   console.log(props.community);
  //   async function processFetch() {
  //     const res = await fetch(
  //       `http://defea17a0c6b.ngrok.io/process/AllInput/?processID=${props.location.state.community}&fbclid=IwAR0ODwOGyVGxkI9fyAISMM47XUfsTjzBy7A8sXwO0st_TTN_CD_lE6l3VMI `
  //     );
  //     res.json().then(async (res) => {
  //       console.log.apply(res);
  //       setQuestions(res);
  //     });
  //   }
  //   processFetch();
  // }, []);
  // const [desc, setDesc] = useState();
  const Question = [
    { CommunityS: "การให้บริการไฟฟ้า", Q1: " รายงานครั้งไฟฟ้าดับ" },
    {
      Q1: " จำนวนพนักงานที่เข้าทำงาน",
    },
    {
      Q1: " จำนวนครั้งที่ไฟฟ้าดับ",
    },
    {
      Q1:
        "คะแนนเฉลี่ยผลการประเมินความพึงพอใจของบุคลากรหรือหน่วยงานที่มีต่อสารสนเทศนิสิต",
    },
  ];
  console.log(Question.Q1);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [values, setValues] = React.useState({
    textmask: "(1  )    -    ",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <UserScreen />
      <div className="Grid">
        <div className="GridLeft positionB">
          <Link to="/PageAversion2" style={{ textDecoration: "none" }}>
            <button className="BackHome" onClick={"/PageAversion2"}>
              <img className="iconBackhome" src="./back.png" alt="value" />
              <div className="fontBackhome">ย้อนกลับ</div>
            </button>
          </Link>
        </div>
        <div className="GridMain version2">
          <div className="ZoneHead">
            <div className="HostK">
              <div className="K1">
                <div className="K11"> </div>
                <div className="K12">ข้อมูลที่ต้องกรอก</div>
                <div className="TerK">
                  <div className="K13">ปีการศึกษา</div>
                  <div className="K14">2563</div>
                </div>
              </div>
              <div className="K2">
                <div className="K21">ชื่อกระบวนการ</div>
                <div className="K22"></div>
                {/* <div className="K23">{questions && questions.description}</div> */}
                <div className="K23">หน่วยงานการไฟฟ้าส่วนภูมิภาค</div>
              </div>
            </div>
          </div>
          <div className="Inbox2">
            {Question &&
              // {questions &&
              Question.map((Question, index) => (
                // questions.inputs.map((question, index) => (
                <div className="Inputbox">
                  <div className="BeforeNumber"></div>
                  <div className="ZoneNumber">{index + 1}</div>

                  <div className="BodyZone">
                    <div className="ZoneQuestion">
                      <div className="itemQ"> {Question.Q1} </div>
                      {/* <div className="itemQ"> {question.description} </div> */}
                    </div>{" "}
                    <div
                      className="ZoneButton"
                      // onClick={() => setDesc(question.description)}
                    >
                      <button className="B1">
                        <img className="iconBa" src="./plus.png" alt="value" />
                        เพิ่มข้อมูล
                      </button>
                      <button className="B2">
                        <img
                          className="iconBb"
                          src="./clock2.png"
                          alt="value"
                        />
                        ประวัติ
                      </button>
                    </div>
                  </div>
                </div>
              ))}{" "}
          </div>
        </div>
        <div className="GridRight"></div>
      </div>
    </div>
  );
}

export default PageBversion2;
