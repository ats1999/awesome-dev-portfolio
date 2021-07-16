import {h} from "@bdevg/h";

export default function RenderMd({md,className}){
    return (
      <div className={className} dangerouslySetInnerHTML={{ __html: h(md) }} />
    );
}