import React, { useEffect, useState } from "react";
import axios from "axios";
import FreeTuitionImage from "./assets/FREETUITION.png";
import EaristLogo from "./assets/EaristLogo.png";
import MyPhoto from "./assets/student.png";

const CertificateOfRegistration = () => {
  const [data, setData] = useState([]);
  const [studentNumber, setStudentNumber] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [studentName, setStudentName] = useState("");
  const [academicYear, setAcademicYear] = useState("");

  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedSignature, setUploadedSignature] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [program, setProgram] = useState("");
  const [major, setMajor] = useState("");
  const [yearLevel, setYearLevel] = useState("");
  const [curriculum, setCurriculum] = useState("");
  const [totalLecUnits, setTotalLecUnits] = useState("");

  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cor");
        setData(response.data);
        setStudentNumber(response.data[0].student_no || "");
        setRegistrationNumber(response.data[1].registration_no || "");
        setStudentName(response.data[0].name || "");
        setAcademicYear(response.data[0].academic_year_term || "");
        setGender(response.data[0].gender || "");
        setAge(response.data[0].age || "");
        setEmail(response.data[0].email_address || "");
        setCollege(response.data[0].college || "");
        setProgram(response.data[0].program || "");
        setMajor(response.data[0].major || "");
        setYearLevel(response.data[0].year_level || "");
        setCurriculum(response.data[0].curriculum || "");
        setTotalLecUnits(response.data[0].total_lec_units || "");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  const handleSignatureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedSignature(reader.result);
      };
      reader.readAsDataURL(file);
    }
    event.target.value = "";
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      const hours = String(now.getHours() % 12 || 12).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";

      const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
      setCurrentDate(formattedDate);
    };

    updateDate();
    const interval = setInterval(updateDate, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    backgroundColor: "#f8f9fa",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
    marginTop: "50px",
    color: "Black",
    overflowY: "scroll",
  };

  const contentStyle = {
    color: "black",
    width: "100%",
    maxWidth: "800px",
    paddingBottom: "90px",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <form
          style={{
            border: "1px solid black",
            padding: "0.25in",
            width: "8in",
            marginBottom: "7%",
            height: "fit-content",
            position: "relative",
          }}
        >
          <table
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              fontFamily: "Arial, Helvetica, sans-serif",
              width: "100%",
              position: "relative",
              tableLayout: "fixed",
            }}
          >
            <tbody>
            <tr>
  <td colSpan={2} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
  <td colSpan={12} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
</tr>
<tr>
  <td colSpan={40} style={{ height: "0.5in", textAlign: "center" }}>
    <table width="100%" style={{ borderCollapse: "collapse" }}>
      <tbody>
        <tr>
          {/* Left: Logo */}
          <td style={{ width: "20%", textAlign: "center" }}>
            <img
              src={EaristLogo}
              alt="Earist Logo"
              style={{
                marginLeft: "25px",
                width: "110px",
                height: "110px",
                objectFit: "contain",
              }}
            />
          </td>
          {/* Center: School Info */}
          <td style={{ width: "60%", textAlign: "center", lineHeight: "1" }}>
            <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "12px" }}>
              Republic of the Philippines
            </div>
            <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", fontSize: "16px" }}>
              Eulogio "Amang" Rodriguez
            </div>
            <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", fontSize: "16px" }}>
              Institute of Science and Technology
            </div>
            <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "12px" }}>
              Nagtahan St. Sampaloc, Manila
            </div>
            <div style={{ height: "10px" }}></div>
            <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", fontSize: "18px", letterSpacing: "2px" }}>
              CERTIFICATE OF REGISTRATION
            </div>
          </td>
          {/* Right: Student Photo */}
          <td
            colSpan={4}
            rowSpan={6}
            style={{
              textAlign: "center",
              position: "relative",
              width: "3.5cm",
              height: "4.5cm",
              verticalAlign: "top",
            }}
          >
            <div
              style={{
                width: "3.8cm",
                height: "3.8cm",
                marginRight: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                border: "1px solid #888",
                background: "#fff",
              }}
            >
              <img
                src={MyPhoto}
                alt="Student Photo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
              <tr>
                <td
                  colSpan={15}
                  style={{ height: "0.3in", fontSize: "62.5%" }}
                ></td>
              </tr>
              <tr>
  <td colSpan={10} style={{ height: "0.1in", fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif" }}>
    <b>
      Registration No:&nbsp;
      <span style={{ color: "red" }}>{registrationNumber}</span>
    </b>
  </td>
  <td
    colSpan={29}
    style={{
      height: "0.1in",
      fontSize: "12px",
      textAlign: "right",
      fontFamily: "Arial, Helvetica, sans-serif"
    }}
  >
    <b>
      Academic Year/Term :{" "}
      <span style={{ color: "red" }}>{academicYear}</span>
    </b>
  </td>
</tr>
<tr>
  <td
    colSpan={40}
    style={{
      height: "0.2in",
      fontSize: "13px",
      backgroundColor: "gray",
      color: "black",
      textAlign: "center",
      fontFamily: "Arial, Helvetica, sans-serif",
      letterSpacing: "1px"
    }}
  >
    <b>
      STUDENT GENERAL INFORMATION
    </b>
  </td>
</tr>
<tr>
  <td colSpan={4} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Student No:
  </td>
  <td colSpan={12} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif" }}>
    {studentNumber}
  </td>
  <td colSpan={3} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    College:
  </td>
  <td colSpan={14} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif" }}>
    {college}
  </td>
</tr>
<tr>
  <td colSpan={3} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Name:
  </td>
  <td colSpan={13} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif" }}>
    {studentName}
  </td>
  <td colSpan={3} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Program:
  </td>
  <td colSpan={17} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif" }}>
    {program}
  </td>
</tr>
<tr>
  <td colSpan={3} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Gender:
  </td>
  <td colSpan={13} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif" }}>
    {gender}
  </td>
  <td colSpan={10} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Major:
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Curriculum:
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif" }}>
    {curriculum}
  </td>
</tr>
<tr>
  <td colSpan={2} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Age:
  </td>
  <td colSpan={14} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif" }}>
    {age}
  </td>
  <td colSpan={4} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Year Level:
  </td>
  <td colSpan={6} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif" }}>
    {yearLevel}
  </td>
  <td colSpan={12} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Scholarship/Discount : UNIFAST-FHE
  </td>
</tr>
<tr>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Email Address:
  </td>
  <td colSpan={20} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif" }}>
    {email}
  </td>
</tr>

              <tr></tr>
              <tr>
  <td colSpan={5} rowSpan={2} style={{
    color: "black",
    height: "0.3in",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "gray",
    border: "1px solid black",
    textAlign: "center"
  }}>
    CODE
  </td>
  <td colSpan={11} rowSpan={2} style={{
    color: "black",
    height: "0.3in",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "gray",
    border: "1px solid black",
    textAlign: "center"
  }}>
    SUBJECT TITLE
  </td>
  <td colSpan={4} style={{
    color: "black",
    height: "0.3in",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "gray",
    border: "1px solid black",
    textAlign: "center"
  }}>
    UNIT
  </td>
  <td colSpan={4} rowSpan={2} style={{
    color: "black",
    height: "0.3in",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "gray",
    border: "1px solid black",
    textAlign: "center"
  }}>
    SECTION
  </td>
  <td colSpan={8} rowSpan={2} style={{
    color: "black",
    height: "0.3in",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "gray",
    border: "1px solid black",
    textAlign: "center"
  }}>
    SCHEDULE/ROOM
  </td>
  <td colSpan={8} rowSpan={2} style={{
    color: "black",
    height: "0.3in",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "gray",
    border: "1px solid black",
    textAlign: "center"
  }}>
    FACULTY
  </td>
</tr>
<tr>
  <td colSpan={1} style={{
    color: "black",
    height: "0.1in",
    fontSize: "12px",
    backgroundColor: "gray",
    border: "1px solid black",
    textAlign: "center"
  }}>
    Lec
  </td>
  <td colSpan={1} style={{
    color: "black",
    height: "0.1in",
    fontSize: "12px",
    backgroundColor: "gray",
    border: "1px solid black",
    textAlign: "center"
  }}>
    Lab
  </td>
  <td colSpan={1} style={{
    color: "black",
    height: "0.1in",
    fontSize: "12px",
    backgroundColor: "gray",
    border: "1px solid black",
    textAlign: "center"
  }}>
    Credit
  </td>
  <td colSpan={1} style={{
    color: "black",
    height: "0.1in",
    fontSize: "12px",
    backgroundColor: "gray",
    border: "1px solid black",
    textAlign: "center"
  }}>
    Tuition
  </td>
</tr>
              {data.map((item, index) => {
                return (
<tr key={index}>
  <td colSpan={5} style={{
    height: "0.25in",
    fontSize: "12px",
    border: "1px solid black",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center"
  }}>
    <span>{item.subject_code || ""}</span>
  </td>
  <td colSpan={11} style={{
    height: "0.25in",
    fontSize: "12px",
    border: "1px solid black",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center"
  }}>
    <span>{item.subject_title || ""}</span>
  </td>
  <td colSpan={1} style={{
    height: "0.25in",
    fontSize: "12px",
    border: "1px solid black",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center"
  }}>
    <span>{item.lec_units || ""}</span>
  </td>
  <td colSpan={1} style={{
    height: "0.25in",
    fontSize: "12px",
    border: "1px solid black",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center"
  }}>
    <span>{item.lab_units || ""}</span>
  </td>
  <td colSpan={1} style={{
    height: "0.25in",
    fontSize: "12px",
    border: "1px solid black",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center"
  }}>
    <span>{item.credit_units || ""}</span>
  </td>
  <td colSpan={1} style={{
    height: "0.25in",
    fontSize: "12px",
    border: "1px solid black",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center"
  }}>
    <span>{item.tuition_units || ""}</span>
  </td>
  <td colSpan={4} style={{
    height: "0.25in",
    fontSize: "12px",
    border: "1px solid black",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center"
  }}>
    <span>{item.subject_section || ""}</span>
  </td>
  <td colSpan={8} style={{
    height: "0.25in",
    fontSize: "12px",
    border: "1px solid black",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center"
  }}>
    <span>{item.subject_schedule_room || ""}</span>
  </td>
  <td colSpan={8} style={{
    height: "0.25in",
    fontSize: "12px",
    border: "1px solid black",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center"
  }}>
    <span>{item.subject_faculty || ""}</span>
  </td>
</tr>
                );
              })}

<tr>
  <td colSpan={10} style={{ height: "0.1in", fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", textAlign: "center" }}>
    <b><i>Note: Subject marked with "*" is Special Subject.</i></b>
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    Total Unit(s)
  </td>
  <td colSpan={1} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center", border: "1px solid black" }}>
    {totalLecUnits || ""}
  </td>
  <td colSpan={1} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center", border: "1px solid black" }}>
    14
  </td>
  <td colSpan={1} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center", border: "1px solid black" }}>
    5
  </td>
  <td colSpan={1} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center", border: "1px solid black" }}>
    20
  </td>
  <td colSpan={1} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center", border: "1px solid black" }}>
    20
  </td>
  <td colSpan={2} style={{ height: "0.1in" }}></td>
  <td colSpan={3} style={{ height: "0.1in" }}></td>
</tr>
<tr style={{ color: "white", height: "0.1in", fontSize: "12px", backgroundColor: "gray", textAlign: "center" }}>
  <td colSpan={40}></td>
</tr>
<tr>
  <td colSpan={20} style={{ fontSize: "12px", border: "1px solid black", backgroundColor: "gray", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    A S S E S S E D  F E E S
  </td>
  <td colSpan={8} style={{ fontSize: "12px", color: "black", border: "1px 0px 1px 1px solid black", textAlign: "center" }}>
  </td>
</tr>

<tr>
  <td colSpan={15} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Tuition (21 unit(s))
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    2100.00
  </td>
  <td colSpan={15} style={{ fontSize: "10px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center", marginLeft: "40px" }}>
    RULES OF REFUND
  </td>
</tr>
<tr>
  <td colSpan={15} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Athletic Fee
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    50.00
  </td>
  <td colSpan={15} style={{ fontSize: "10px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", marginLeft: "40px" }}>
    1. Full refund of tuition fee - Before the start of classes
  </td>
</tr>
<tr>
  <td colSpan={15} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Cultural Fee
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    50.00
  </td>
  <td colSpan={15} style={{ fontSize: "10px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", marginLeft: "40px" }}>
    2. 80% refund of tuition fee - within 1 week from the start of classes
  </td>
</tr>
<tr>
  <td colSpan={15} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Developmental Fee
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    30.00
  </td>
  <td colSpan={15} style={{ fontSize: "10px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", marginLeft: "40px" }}>
    3. 50% refund - within 2 weeks from the start of classes.
  </td>
</tr>
<tr>
  <td colSpan={15} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Guidance Fee
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    30.00
  </td>
  <td colSpan={15} style={{ fontSize: "10px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", marginLeft: "40px" }}>
    4. No refund - after the 2nd week of classes.
  </td>
</tr>
<tr>
  <td colSpan={15} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Library Fee
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    100.00
  </td>
</tr>
<tr>
  <td colSpan={15} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Medical and Dental Fee
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    130.00
  </td>
  <td colSpan={20} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    PLEDGE UPON ADMISSION
  </td>
</tr>
<tr>
  <td colSpan={15} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Registration Fee
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    50.00
  </td>
  <td colSpan={20} style={{ fontSize: "10px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    "As a student of EARIST, I do solemnly promise that I will
  </td>
</tr>
<tr>
  <td colSpan={15} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Computer Fee
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    500.00
  </td>
  <td colSpan={20} style={{ fontSize: "10px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    comply with the rules and regulations of the Institution."
  </td>
</tr>
<tr>
  <td colSpan={2} style={{ fontSize: "12px" }}></td>
  <td colSpan={13} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Total Assessment :
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    3090.00
  </td>
</tr>
<tr>
  <td colSpan={2} style={{ fontSize: "12px" }}></td>
  <td colSpan={13} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Less Financial Aid :
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    3090.00
  </td>
</tr>
<tr>
  <td colSpan={2} style={{ fontSize: "12px" }}></td>
  <td colSpan={13} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Net Assessed :
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    0.00
  </td>
  <td colSpan={20} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center", textDecoration: "underline" }}>
    _________________________________
  </td>
</tr>
<tr>
  <td colSpan={2} style={{ fontSize: "12px" }}></td>
  <td colSpan={13} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Less Financial Aid :
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    0.00
  </td>
  <td colSpan={20} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center", textDecoration: "underline" }}>
    Student's Signature
  </td>
</tr>
<tr>
  <td colSpan={2} style={{ fontSize: "12px" }}></td>
  <td colSpan={13} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Medical and Dental Fee :
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    0.00
  </td>
</tr>
<tr>
  <td colSpan={2} style={{ fontSize: "12px" }}></td>
  <td colSpan={13} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Registration Fee :
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    0.00
  </td>
</tr>
<tr>
  <td colSpan={2} style={{ fontSize: "12px" }}></td>
  <td colSpan={13} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" }}>
    Computer Fee :
  </td>
  <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", borderRight: "1px solid black" }}>
    0.00
  </td>
</tr>

              <tr>
  <td colSpan={20} style={{ fontSize: "12px", border: "1px solid black", backgroundColor: "gray", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    A S S E S S E D  F E E S
  </td>
  <td colSpan={7} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "left", marginLeft: "20px" }}>
    APPROVED BY :
  </td>
  <td colSpan={13} style={{ fontSize: "12px", textAlign: "center" }}>
    <div style={{ width: "100%", height: "3.5rem", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", position: "relative" }}>
      {uploadedSignature ? (
        <img
          src={uploadedSignature}
          alt="Signature"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      ) : (
        <label
          htmlFor="signatureUpload"
          style={{ fontSize: "10px", color: "gray", cursor: "pointer", padding: "5px" }}
        >
          Click to upload your Signature
        </label>
      )}
    </div>
    <input
      id="signatureUpload"
      type="file"
      accept="image/*"
      onChange={handleSignatureUpload}
      style={{ display: "none" }}
    />
  </td>
</tr>
<tr>
  <td colSpan={7} style={{ fontSize: "12px", border: "1px solid black", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    1st Payment/Due
  </td>
  <td colSpan={6} style={{ fontSize: "12px", border: "1px solid black", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    2nd Payment/Due
  </td>
  <td colSpan={7} style={{ fontSize: "12px", border: "1px solid black", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    3rd Payment/Due
  </td>
  <td colSpan={20} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center", textDecoration: "underline" }}>
    _______________________________
  </td>
</tr>
<tr>
  <td colSpan={7} style={{ fontSize: "12px", border: "1px solid black", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    0.0
  </td>
  <td colSpan={6} style={{ fontSize: "12px", border: "1px solid black", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    0.0
  </td>
  <td colSpan={7} style={{ fontSize: "12px", border: "1px solid black", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    0.0
  </td>
  <td colSpan={20} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    Registrar
  </td>
</tr>
<tr>
  <td colSpan={12} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    Payment/Validation Date :
  </td>
  <td colSpan={7} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center", textDecoration: "underline" }}>
    February 24, 2025
  </td>
</tr>
<tr>
  <td colSpan={12} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    Official Receipt :
  </td>
  <td colSpan={7} style={{ fontSize: "12px", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", textAlign: "center" }}>
    Scholar  _____
  </td>
</tr>
<tr>
  <td colSpan={40} style={{ textAlign: "center" }}>
    <img
      src={FreeTuitionImage}
      alt="EARIST MIS FEE"
      style={{
        marginTop: "10px",
        width: "200px",
        height: "150px",
        marginLeft: "150px",
      }}
    />
  </td>
</tr>
<tr>
  <td colSpan={40} style={{ height: "0.25in", fontSize: "12px", textAlign: "right", verticalAlign: "middle" }}>
    {currentDate}
  </td>
</tr>
<tr>
  <td colSpan={40} style={{ height: "0.2in", fontSize: "12px", backgroundColor: "gray", color: "black", textAlign: "center" }}>
    <b>
      <i>
        KEEP THIS CERTIFICATE. YOU WILL BE REQUIRED TO PRESENT
        THIS IN ALL YOUR DEALINGS WITH THE COLLEGE.
      </i>
    </b>
  </td>
</tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default CertificateOfRegistration;
