import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import Layout70th from "src/components/70th/Layout70th";

import StarDivider from "src/components/StarDivider";
import ButtonLink from "src/components/ButtonLink";

const ConcertSetlist70th: NextPageWithLayout = () => {
  return (
    <section className="w-full bg-archiveBlue-50 p-10 flex flex-col items-center md:py-8 md:max-w-full md:justify-between">
      <div className="max-w-prose">
        <h2 className="text-gray-900 text-4xl pt-4 pb-2">Concert Setlist</h2>
        <h3 className="text-gray-900 text-2xl pt-4">Act One</h3>
        <ol className="py-4 px-10 list-decimal">
          <li>
            <b>Hail Poetry</b>, <i>The Pirates of Penzance</i>{" "}
            <span className="text-sm text-gray-500">(full)</span>
          </li>
          <li>
            <b>G&amp;S Medley</b> <span className="text-sm text-gray-500">(full)</span>
          </li>
          <br />
          <li>
            <b>I Cain't Say No</b>, <i>Oklahoma</i>{" "}
            <span className="text-sm text-gray-500">(1hv)</span>
          </li>
          <li>
            <b>Screw Loose</b>, <i>Cry Baby</i> <span className="text-sm text-gray-500">(1hv)</span>
          </li>
          <li>
            <b>We Beseech Thee</b>, <i>Godspell</i>{" "}
            <span className="text-sm text-gray-500">(1lv, full or small group)</span>
          </li>
          <br />
          <li>
            <b>Flash Bang Wallop</b>, <i>Half a Sixpence</i>{" "}
            <span className="text-sm text-gray-500">(1lv, full)</span>
          </li>
          <li>
            <b>There's Gotta Be Something Better Than This</b>, <i>Sweet Charity</i>{" "}
            <span className="text-sm text-gray-500">(3hv)</span>
          </li>
          <li>
            <b>Three Bedroom House</b>, <i>Bat Boy</i>{" "}
            <span className="text-sm text-gray-500">(2hv)</span>
          </li>
          <br />
          <li>
            <b>Somewhere</b>, <i>West Side Story</i>{" "}
            <span className="text-sm text-gray-500">(small group, 5x/1hv)</span>
          </li>
          <li>
            <b>Ruler of the Queen's Navy</b>, <i>HMS Pinafore</i>{" "}
            <span className="text-sm text-gray-500">(full, featured 1lv)</span>
          </li>
          <br />
          <li>
            <b>Can't Help Falling in Love</b>, <i>All Shook Up</i>{" "}
            <span className="text-sm text-gray-500">(full, featured 8x)</span>
          </li>
        </ol>
        <StarDivider bgClass="bg-archiveBlue-50" />
        <h3 className="text-gray-900 text-2xl pt-4">Act Two</h3>
        <ol className="py-4 px-10 list-decimal">
          <li>
            <b>Zombie Prom</b>, <i>Zombie Prom</i>{" "}
            <span className="text-sm text-gray-500">(full, featured 1hv 1lv)</span>
          </li>
          <li>
            <b>Believe</b>, <i>Popstars</i> <span className="text-sm text-gray-500">(5hv)</span>
          </li>
          <li>
            <b>Easy Street</b>, <i>Annie</i>{" "}
            <span className="text-sm text-gray-500">(1lv 1hv)</span>
          </li>
          <br />
          <li>
            <b>Steam Heat</b>, <i>The Pajama Game</i>{" "}
            <span className="text-sm text-gray-500">(3x)</span>
          </li>
          <li>
            <b>Too Darn Hot</b>, <i>Kiss Me Kate</i>{" "}
            <span className="text-sm text-gray-500">(full, featured 1lv)</span>
          </li>
          <br />
          <li>
            <b>Stranger to the Rain</b>, <i>Children of Eden</i>{" "}
            <span className="text-sm text-gray-500">(1hv)</span>
          </li>
          <li>
            <b>Matchmaker</b>, <i>Fiddler on the Roof</i>{" "}
            <span className="text-sm text-gray-500">(5(?)hv)</span>
          </li>
          <li>
            <b>Facade</b>, <i>Jekyll and Hyde</i>{" "}
            <span className="text-sm text-gray-500">(chorus)</span>
          </li>
          <br />
          <li>
            <b>Suddenly Seymour</b>, <i>Little Shop of Horrors</i>{" "}
            <span className="text-sm text-gray-500">(1hv, 1lv, (3-5)hv)</span>
          </li>
          <li>
            <b>Sit Down You're Rocking the Boat</b>, <i>Guys and Dolls</i>{" "}
            <span className="text-sm text-gray-500">(1lv and chorus)</span>
          </li>
          <br />
          <li>
            <b>Morning Glow</b>, <i>Pippin</i>{" "}
            <span className="text-sm text-gray-500">(1lv, full)</span>
          </li>
          <li>
            <b>Bad Guys</b>, <i>Bugsy Malone</i> <span className="text-sm text-gray-500">(7x)</span>
          </li>
          <li>
            <b>We Go Together</b>, <i>Grease (Cecilians Version)</i>{" "}
            <span className="text-sm text-gray-500">(mixed solo, full)</span>
          </li>
        </ol>
      </div>
      <ButtonLink to="/70th/concert" variant="outline" colour="secondary" className="mt-6">
        Go Back
      </ButtonLink>
    </section>
  );
};

ConcertSetlist70th.getLayout = (page: ReactElement) => {
  return <Layout70th>{page}</Layout70th>;
};

export default ConcertSetlist70th;
