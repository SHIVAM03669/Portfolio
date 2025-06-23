import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";
import TextPressure from '../textpressure';

import WorkExperience from "./WorkExperience";

const Resume = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="resume container section" id="resume">
            <div style={{position: 'relative', height: '300px', width: '80%', margin: '0 auto -2rem auto'}}>
                <TextPressure
                  text="Experience"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="var(--title-color)"
                  strokeColor="#ff0000"
                  minFontSize={36}
                />
            </div>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"is-active"}
                    selectedTabPanelClassName={"is-active"}
                >
                    <TabList className="tab__list">
                        {WorkExperience.map((experience, index) => {
                            const { id, company } = experience;
                            return (
                                <Tab className="tab" key={`company-${id}`}>
                                    <Button>{company}</Button>
                                </Tab>
                            );
                        })}
                    </TabList>

                    {WorkExperience.map((experience) => {
                        const { id, company, yearsActive, title, information } = experience;
                        return (
                            <TabPanel className="tab__panel" key={`panel-${id}`}>
                                <h2 className="tab__panel-title">
                                    {title} @ {company}
                                </h2>
                                <p className="tab__panel-subtitle">{yearsActive}</p>
                                <ul className="tab__panel-list">
                                    {information.map((info, index) => {
                                        return <li key={`info-${index}`}>{info}</li>;
                                    })}
                                </ul>
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default Resume;
