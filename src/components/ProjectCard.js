import { Button, Col } from "react-bootstrap";


export const ProjectCard = ({ title, viste, imgUrl,source_code }) => {
  return (
    <Col size={12} sm={6} md={4} >
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={viste} target="_blank"><Button variant="link" style={{color:'yellow'}}>Visit</Button></a>
          <a href={source_code} target="_blank"><Button variant="link" style={{color:'yellow'}}>Source Code</Button></a>

        </div>
      </div>
    </Col>
  )
}
