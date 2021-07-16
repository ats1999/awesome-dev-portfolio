import RenderMD from "@components/RenderMD";

import about from "@config/about";

export default function About() {
  const recentUsedTechnologies=[];
  for(let i=0; i<about.recentUsedTechnologies.length; i+=2){
      recentUsedTechnologies.push(
        <p key={i}>
          <code>{about.recentUsedTechnologies[i]}</code>{"   "}
          <code>{about.recentUsedTechnologies[i + 1]}</code>
        </p>
      );
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {about.summary.map((md, idx) => (
        <RenderMD md={md} key={idx} className="about-text-div" />
      ))}

      <div className="recent-technologies-used">{recentUsedTechnologies}</div>
    </div>
  );
}
