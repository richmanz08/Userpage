import React, { useRef } from "react";
import "./Fixeditems.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import {
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 380,
    transform: "translateZ(0px)",
    flexGrow: 1,
  },
  speedDial: {
    // position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function Fixeditems() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  // const handleVisibility = () => {
  //   setHidden((prevHidden) => !prevHidden);
  // };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const actions = [
    {
      icon: (
        <React.Fragment>
          <img
            className="png_save"
            src="./picturesave.png"
            onClick={() => exportComponentAsPNG(componentRef)}
          />
        </React.Fragment>
      ),
      name: "SavePNG",
    },
    {
      icon: <img className="excel_save" src="./excel.png" />,
      name: "Excel",
    },
    {
      icon: (
        <React.Fragment>
          <img
            className="pdf_save"
            src="./pdf.png"
            onClick={() => exportComponentAsPDF(componentRef)}
          />
        </React.Fragment>
      ),
      name: "PDF",
    },
  ];
  const ComponentToPrint = React.forwardRef((props, ref) => (
    <div className="No" ref={ref}></div>
  ));

  const Fixeditems = () => {};
  const componentRef = useRef();

  return (
    <div className={classes.root}>
      {/* <Button onClick={handleVisibility}>Toggle Speed Dial</Button> */}
      {/* <Backdrop open={open} /> */}
      <ComponentToPrint>
        <div>
          {ComponentToPrint.ref}
          Hello World
          <img src="./home.png"></img>
        </div>
      </ComponentToPrint>
      <div className="HeadBox">
        <div className="BoxSPDIAL">
          <SpeedDial
            ariaLabel="SpeedDial tooltip example"
            className={classes.speedDial}
            hidden={hidden}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                tooltipOpen
                onClick={handleClose}
              />
            ))}
          </SpeedDial>
          <React.Fragment>
            <ComponentToPrint ref={componentRef} />

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
      </div>
    </div>
  );
}
export default Fixeditems;
