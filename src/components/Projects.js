import { Container, Row, Col, Tab } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import colorSharp from "../assets/img/color-sharp.png"

export const Projects = () => {
  const projects = [
    {
      title: "Bot Making",
      description: "Automatic Chat Bot for different platform",
      imgUrl:
        "https://www.apptunix.com/blog/wp-content/uploads/sites/3/2019/10/how-to-build-a-chat-bot.jpg",
    },
    {
      title: "Backend-End",
      description: "Backend Apis",
      imgUrl:
        "https://codecondo.com/wp-content/uploads/2017/09/back-end-developer.jpg",
    },
    {
      title: "Web Front-End",
      description: "Web Front-End Design & Development",
      imgUrl:
        "https://tolustar.com/wp-content/uploads/2020/02/Front-end-Development.jpeg",
    },
    {
      title: "App Devlopment",
      description: "Android / IOS Devlopment",
      imgUrl: "https://i.ytimg.com/vi/5gnWTu37RKE/maxresdefault_live.jpg",
    },
    {
      title: "AI / ML",
      description: "Automation Models",
      imgUrl: "https://www.suntecindia.com/img/news-AI-ML-sevices.png",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div className="animate__animated animate__fadeIn">
                <h2>Projects</h2>
                <p>
                I am pursuing B.E CSE from Chitkara University,Chandigarh.I
                    am currently polishing my skills related to Javascript,
                    Node.js, Python, AI/ML and Flutter. If you need to
                    collaborate in any of the projects plz feel free to contact
                    me.
                </p>
                <Row>
                  {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </Row>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={10} sm={6} md={4}>
      <div  className="proj-imgbx">
        <img style={{height: 230}} src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
