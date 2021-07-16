import greet from "@config/greet";
export default function Greet() {
  return (
    <div id="greet">
      <p>Hi, my name is</p>
      <h1>{greet.name}</h1>
      <h2>{greet.iDo}</h2>
      <p>
        {greet.bio}{" "}
        {greet.currentOrg && (
          <a href={greet.currentOrg.link} target="_blank">
            {greet.currentOrg.name}
          </a>
        )}
      </p>
      <a href={greet.contactLink} target="_blank">
        Get In Touch
      </a>
    </div>
  );
}
