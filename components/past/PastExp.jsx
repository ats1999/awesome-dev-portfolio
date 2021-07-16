// react-tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import RenderMd from "@components/RenderMD";
import pastExp from "@config/past";

// css
import "react-tabs/style/react-tabs.css";
export default function PastExp() {
  return (
    <div id="past-exp">
      <h2>Where I’ve Worked</h2>

      <Tabs>
        <TabList>
          {pastExp.map((exp, idx) => (
            <Tab key={idx}>{exp.companyName}</Tab>
          ))}
        </TabList>

        {pastExp.map((exp, idx) => (
          <TabPanel key={idx}>
            <div className="experience-tab-content">
              <h4 className="experience-tab-jobTitle">
                {exp.jobTitle}{" "}
                <a href={exp.companySite} target="_blank">
                  {exp.companyName}
                </a>
              </h4>

              <p className="experience-tab-dateRange">{exp.dateRange}</p>

              {exp.summary.map((summary,idx)=>(
                <RenderMd key={idx} className="experience-tab-summary" md={summary}/>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
