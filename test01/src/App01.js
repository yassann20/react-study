import { getImageUrl } from './utils.js';

function Profile({ porson, awards }) { 
  return (
    <ul>
      <li>
        <b>Profession: </b>
        {porson.Prof}
      </li>
      <li>
        <b>Awards: {awards.num}</b>
        {awards.text}
      </li>
      <li>
        <b>Discovered: </b> 
        {porson.disc}
      </li>
    </ul>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <Profile
          porson ={{
            prof: "physicist and chemist",
            disc: "polonium (chemical element)",
          }}
          awards ={{
            num: 4,
            text: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          }}
        />
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
