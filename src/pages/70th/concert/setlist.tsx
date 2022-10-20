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
          Below is the finalised setlist for our anniversary concert, along with the soloists
          performing each number.
        </p>
        <p className="py-2">
          Numbers with <span className="text-archiveYellow-800">Cecilian Chorus</span> in the cast
          are, in the Cecilian spirit, open chorus - meaning that if you'd like to take part in it,
          you can!
        </p>

        <StarDivider bgClass="bg-archiveBlue-50" />

        <h3 className="text-gray-900 text-2xl pt-4">Act One</h3>
        <ol className="py-4 px-6 md:px-10 list-decimal">
          <li>
            <b>G&amp;S Medley</b>{" "}
            <span className="text-sm">
              (Hail Poetry, <i>The Pirates of Penzance</i>; Ring Out Ye Bells, <i>The Sorcerer</i>;
              Over the Bright Blue Sea, <i>HMS Pinafore</i>; Dance a Cachuca, <i>The Gondoliers</i>)
            </span>
            <br />
            <span className="text-sm text-gray-500">
              (<span className="text-archiveYellow-800">Cecilian Chorus</span> with short solo from
              Ben Galloway)
            </span>
          </li>
          <li>
            <b>We Beseech Thee</b>, <i>Godspell</i>
            <br />
            <span className="text-sm text-gray-500">
              (Marnie Yule, John Paul Liddle, Jamie Maskall, James Parnell Mooney, Helen Smith, Abby
              Pickavance, Michael Smith, Andrea Glass, Joe Reid, Alex Lyne)
            </span>
          </li>
          <li>
            <b>I Cain't Say No</b>, <i>Oklahoma</i>
            <br />
            <span className="text-sm text-gray-500">(Chrissie Mills)</span>
          </li>
          <li>
            <b>Screw Loose</b>, <i>Cry Baby</i>
            <br />
            <span className="text-sm text-gray-500">(Iona Campbell)</span>
          </li>
          <li>
            <b>Morning Glow</b>, <i>Pippin</i>
            <br />
            <span className="text-sm text-gray-500">
              (John Paul Liddle and <span className="text-archiveYellow-800">Cecilian Chorus</span>)
            </span>
          </li>
          <li>
            <b>There's Gotta Be Something Better Than This</b>, <i>Sweet Charity</i>
            <br />
            <span className="text-sm text-gray-500">
              (Magdalene Cybulska, Robyn Smith, Fiona McPherson)
            </span>
          </li>
          <li>
            <b>Three Bedroom House</b>, <i>Bat Boy</i>
            <br />
            <span className="text-sm text-gray-500">(Marnie Yule, Olivia Attwooll-Keith)</span>
          </li>
          <li>
            <b>Somewhere</b>, <i>West Side Story</i>
            <br />
            <span className="text-sm text-gray-500">
              (Michael Smith, Becky Campbell, Alice Magorrian, Eliza Twaddle)
            </span>
          </li>
          <li>
            <b>Ruler of the Queen's Navy</b>, <i>HMS Pinafore</i>
            <br />
            <span className="text-sm text-gray-500">(Harrison Owens)</span>
          </li>
          <li>
            <b>Can't Help Falling in Love</b>, <i>All Shook Up</i>
            <br />
            <span className="text-sm text-gray-500">
              (Olivia Attwooll-Keith, Luke Seawright, Sam Pirie, Jamie Maskall, Robyn Hunter, Sean
              Taheny, Alice Sufferin and{" "}
              <span className="text-archiveYellow-800">Cecilian Chorus</span>)
            </span>
          </li>
        </ol>

        <StarDivider bgClass="bg-archiveBlue-50" />

        <h3 className="text-gray-900 text-2xl pt-4">Act Two</h3>
        <ol className="py-4 px-6 md:px-10 list-decimal">
          <li>
            <b>Zombie Prom</b>, <i>Zombie Prom</i>
            <br />
            <span className="text-sm text-gray-500">
              (Lucy Docherty, Sage Shaw and{" "}
              <span className="text-archiveYellow-800">Cecilian Chorus</span>)
            </span>
          </li>
          <li>
            <b>Believe</b>, <i>Popstars the 90s Musical</i>
            <br />
            <span className="text-sm text-gray-500">
              (Katharine Northcote, Katie Hindle, Becky Campbell, Abby Pickavance, Lucy Docherty)
            </span>
          </li>
          <li>
            <b>Easy Street</b>, <i>Annie</i>
            <br />
            <span className="text-sm text-gray-500">(Adele and Neil Simpson)</span>
          </li>
          <li>
            <b>Steam Heat</b>, <i>The Pajama Game</i>
            <br />
            <span className="text-sm text-gray-500">
              (Katharine Northcote, James Parnell Mooney, Neil Simpson, Neil Gordon, Sam Pirie,
              Jamie Maskall)
            </span>
          </li>
          <li>
            <b>Too Darn Hot</b>, <i>Kiss Me Kate</i>
            <br />
            <span className="text-sm text-gray-500">
              (James Woods and <span className="text-archiveYellow-800">Cecilian Chorus</span>)
            </span>
          </li>
          <li>
            <b>Stranger to the Rain</b>, <i>Children of Eden</i>
            <br />
            <span className="text-sm text-gray-500">(Alice Sufferin)</span>
          </li>
          <li>
            <b>Matchmaker</b>, <i>Fiddler on the Roof</i>
            <br />
            <span className="text-sm text-gray-500">
              (Abby Pickavance, Jennifer Warren, Susan Rocke)
            </span>
          </li>
          <li>
            <b>Suddenly Seymour</b>, <i>Little Shop of Horrors</i>
            <br />
            <span className="text-sm text-gray-500">
              (Luke Seawright, Becky Campbell, Grace Ford, Cara Whitelaw, Magdalene Cybulska)
            </span>
          </li>
          <li>
            <b>Sit Down You're Rocking the Boat</b>, <i>Guys and Dolls</i>
            <br />
            <span className="text-sm text-gray-500">
              (Alex Lyne and <span className="text-archiveYellow-800">Cecilian Chorus</span>)
            </span>
          </li>
          <li>
            <b>Bad Guys</b>, <i>Bugsy Malone</i>
            <br />
            <span className="text-sm text-gray-500">
              (Ben Galloway, Alice Sufferin, Sage Shaw, Jamie Maskall, Becky Campbell, Robyn Hunter,
              Laura Bauld, Alex Lyne, Iain Campbell)
            </span>
          </li>
          <li>
            <b>We Go Together</b>, <i>Grease</i> (Cecilian Edition)
            <br />
            <span className="text-sm text-gray-500">
              (<span className="text-archiveYellow-800">Cecilian Chorus</span>)
            </span>
          </li>
        </ol>
      </div>

      <ButtonLink to="/70th/concert/schedule" variant="outline" colour="secondary" className="mt-6">
        Go Back
      </ButtonLink>
    </section>
  );
};

ConcertSetlist70th.getLayout = (page: ReactElement) => {
  return <Layout70th>{page}</Layout70th>;
};

export default ConcertSetlist70th;
