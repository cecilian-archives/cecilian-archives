import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import Layout70th from "src/components/70th/Layout70th";

import StarDivider from "src/components/StarDivider";
import ButtonLink from "src/components/ButtonLink";

const ConcertSetlist70th: NextPageWithLayout = () => {
  return (
    <section className="w-full bg-archiveBlue-50 p-8 flex flex-col items-center md:max-w-full md:justify-between">
      <div className="max-w-prose">
        <h2 className="text-gray-900 text-4xl pt-4 pb-2">Concert Setlist</h2>
        <p className="py-2">
          Below is the setlist for our anniversary concert! This is subject to change as we go
          through the rehearsal process, but hopefully gives a good idea of what we're aiming for.
        </p>
        <p className="py-2">
          You'll also see some notes next to each number as to what voice types and size of cast
          we're hoping to have:
        </p>
        <ul className="py-2 px-6 md:px-10 list-disc">
          <li>hv - higher voice (soprano/alto)</li>
          <li>lv - lower voice (tenor/bass)</li>
          <li>small group - as it says on the tin</li>
          <li>full - full chorus</li>
        </ul>
        <p className="py-2">
          Numbers marked 'full' are, in the Cecilian spirit, open chorus, meaning that if you'd like
          to take part in it, you can!
        </p>
        <ButtonLink
          to="https://open.spotify.com/playlist/1xQ3uUuHgQEBQOKRYOW9yL"
          target="_blank"
          variant="solid"
          colour="primary"
          className="mb-6"
        >
          Listen on Spotify
        </ButtonLink>

        <StarDivider bgClass="bg-archiveBlue-50" />

        <h3 className="text-gray-900 text-2xl pt-4">Act One</h3>
        <ol className="py-4 px-6 md:px-10 list-decimal">
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
        <ol className="py-4 px-6 md:px-10 list-decimal">
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
            <span className="text-sm text-gray-500">(small group, 3x)</span>
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
            <span className="text-sm text-gray-500">(full)</span>
          </li>
          <br />
          <li>
            <b>Suddenly Seymour</b>, <i>Little Shop of Horrors</i>{" "}
            <span className="text-sm text-gray-500">(1hv, 1lv, (3-5)hv)</span>
          </li>
          <li>
            <b>Sit Down You're Rocking the Boat</b>, <i>Guys and Dolls</i>{" "}
            <span className="text-sm text-gray-500">(1lv, full)</span>
          </li>
          <br />
          <li>
            <b>Morning Glow</b>, <i>Pippin</i>{" "}
            <span className="text-sm text-gray-500">(1lv, full)</span>
          </li>
          <li>
            <b>Bad Guys</b>, <i>Bugsy Malone</i>{" "}
            <span className="text-sm text-gray-500">(small group, 7x)</span>
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
