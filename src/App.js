import { getImageUrl } from "./utils.js";
import Profile from "./Profile.js";
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <Profile
          name="Katsuko Saruhashi"
          imgId="YfeOqp2"
          width={70}
          height={70}
          profession="geochemist"
          numberOfAwards={2}
          awardsName="Miyake Prize for geochemistry, Tanaka Prize"
          discoveries="a method for measuring carbon dioxide in seawater"
        />
        <Profile
          name="Maria Skłodowska-Curie"
          imgId="szV5sdG"
          width={70}
          height={70}
          profession="physicist and chemist"
          numberOfAwards={4}
          awardsName=" (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
          discoveries="polonium (chemical element)"
        />
      </section>
    </div>
  );
}
