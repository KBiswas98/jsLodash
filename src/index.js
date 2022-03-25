import "./styles.css";
import * as _ from "./lib";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/** chunk */

const data = [1, 2, 3, 4, 5, 6, 7, , 9, "", null, undefined, 10];
console.log(_.chunk(data, 2));
