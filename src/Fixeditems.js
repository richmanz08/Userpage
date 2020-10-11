import React, { useRef } from "react";
import "./Fixeditems.css";
import ReactToExcel from "react-html-table-to-excel";
import {
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

function Fixeditems() {
  const ComponentToPrint = React.forwardRef((props, ref) => (
    <div className="No" ref={ref}>
      555555555555555555
    </div>
  ));

  const Fixeditems = () => {};
  const componentRef = useRef();

  const User = [
    {
      name: "การประปา",
      day: "12/01/13",
      number: "13",
    },
    {
      name: "การให้บริการโทรศัพท์",
      day: "11/11/13",
      number: "10",
    },
    {
      name: "การให้บริการไฟฟ้า",
      day: "15/11/13",
      number: "9",
    },
    {
      name: "การให้บริการคมนาคม-ขนส่ง",
      day: "15/11/13",
      number: "20",
    },
  ];
  return (
    <div>
      <div className="HeadBox">
        <div className="BoxSPDIAL">
          <div className="TABLE">
            <table boder="1" id="gotoexcel" className="bordertable">
              <thead>
                <tr>
                  <th>FirstName</th>
                  <th>Lastname</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {User &&
                  User.map((User, index) => (
                    <tr>
                      <th className="fontexcel">{User.name}</th>
                      <th className="fontexcel">{User.day}</th>
                      <th className="fontexcel">{User.number}</th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ReactToExcel
        table="gotoexcel"
        filename="excelfile"
        sheet="sheet 1"
        className="setbuttonToEXCEL"
        buttonText="Excel"
      ></ReactToExcel>
      <React.Fragment>
        <button
          className="BtnPDF"
          onClick={() => exportComponentAsPDF(componentRef)}
        >
          PDF
        </button>
        <button
          className="BtnPNG"
          onClick={() => exportComponentAsPNG(componentRef)}
        >
          PNG
        </button>
      </React.Fragment>
    </div>
  );
}
export default Fixeditems;
