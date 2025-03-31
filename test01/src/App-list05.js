import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
    let profile;
    const listItems = people.map((person) => (
    (person.profession === 'chemist')?profile = "(" + person.profession + ")" :profile = " " + person.profession + " ";
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
