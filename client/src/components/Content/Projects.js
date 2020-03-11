import React, { useEffect } from 'react';
import { setStylesClass } from '../../utilities/utilities';
import Content from '../Content';
import Header from '../Content/Header';

const Projects = props => {
    const stylesProjectWrap = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '25px',
    };

    const stylesProject = {
        position: 'relative',
        margin: 'auto',
        marginBottom: '50px',
    };

    const stylesProjectHeader = {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20pt',
        marginBottom: '20px',
    };

    const projects = {
        db: {
            purpose:
                'Utilize pre-existing database to develop a cashflow visiualization for investors.',
            stack: 'React, Redux, GoLang',
            link: 'https://aca-dashboard-go.herokuapp.com/',
        },
        pdf: {
            purpose: "Simple application to merge all PDF's in a folder.",
            stack: 'React, GoLang, Electron',
            link: 'https://github.com/cbetori/PDF-Merger',
        },
    };

    const stylesProjectDetailWrap = {
        background: 'rgb(68,72,87,.1)',
        margin: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '30px',
        padding: '15px',
        borderRadius: '8px',
        width: '50vw',
    };

    const stylesProjectDetail = {
        marginTop: '10px',
        marginBottom: '20px',
        marginLeft: '15px',
    };

    const stylesProjectDetailHead = {
        color: 'black',
        textDecoration: 'none',
        fontWeight: 'bold',
        margin: '5px',
    };

    useEffect(() => {
        setStylesClass('project-wrapper', stylesProjectWrap);
        setStylesClass('project', stylesProject);
        setStylesClass('project-header', stylesProjectHeader);
        setStylesClass('project-detail-wrapper', stylesProjectDetailWrap);
        setStylesClass('project-detail', stylesProjectDetail);
        setStylesClass('  project-detail-header', stylesProjectDetailHead);
    }, []);

    return (
        <Content id="projects">
            <Header value="PROJECTS" />
            <div className="project-wrapper">
                <div className="project">
                    <div className="project-header">Investor Dashboard</div>
                    <div id="project-db" className="project-image" />
                    <div className="project-detail-wrapper">
                        <div className="project-detail-header">Summary</div>
                        <div className="project-detail">
                            {projects.db.purpose}
                        </div>

                        <div className="project-detail-header">Stack</div>
                        <div className="project-detail">
                            {projects.db.stack}
                        </div>
                        <a
                            className="project-detail-header"
                            href={projects.db.link}
                        >
                            Link
                        </a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-header">PDF Merger</div>
                    <div id="project-pdf" className="project-image" />
                    <div className="project-detail-wrapper">
                        <div className="project-detail-header">Summary</div>
                        <div className="project-detail">
                            {projects.pdf.purpose}
                        </div>

                        <div className="project-detail-header">Stack</div>
                        <div className="project-detail">
                            {projects.pdf.stack}
                        </div>
                        <a
                            className="project-detail project-detail-header"
                            href={projects.pdf.link}
                        >
                            Link
                        </a>
                    </div>
                </div>
            </div>
        </Content>
    );
};

export default Projects;
