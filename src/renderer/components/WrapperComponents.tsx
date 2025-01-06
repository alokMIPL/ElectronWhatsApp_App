// import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import Sidebar from "./main-comp/Sidebar";
import MainDisplay from "./main-comp/MainDisplay";

const WrapperComponents = () => {
  return (
    <div>
      <MDBContainer fluid className="app-wrapper d-flex" >
        <Sidebar />
        <MainDisplay />
      </MDBContainer>
    </div>
  )
}

export default WrapperComponents