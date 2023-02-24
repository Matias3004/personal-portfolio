import { Col, Container, Nav, Row, Tab, TabContainer } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import regenesis from "../assets/img/regenesis.jpg";
import tabletka from "../assets/img/tabletka.jpg";
import tales from "../assets/img/tales.jpg";

export const Projects = () => {
    const projects = [
        {
            title: "Tales From The Nightbutcher's House",
            description: "MosherZ's first LP",
            imgUrl: tales,
        },
        {
            title: "ReGenesis",
            description: "Moyra's second EP",
            imgUrl: regenesis,
        },
        {
            title: "Tabletka",
            description: "Album by Mocne Lajty",
            imgUrl: tabletka,
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Hahaha hihihi</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Jakeis peirdolenie</Tab.Pane>
                                <Tab.Pane eventKey="third">Seima Seima</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Color Sharp" />
        </section>
    )
}