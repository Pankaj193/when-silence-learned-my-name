import { FadeInSection } from "./diary/DiaryComponents";

const months = [
  { id: "september", month: "September", title: `"Time does not heal.
It only creates enough distance for us to survive the memory."` },
  { id: "october", month: "October", title: `"Loneliness is not the absence of people,
but the absence of explanation."` },
  { id: "november", month: "November", title: `“We do not miss people.
We miss the versions of
ourselves that existed
with them.”` },
  { id: "december", month: "December", title: `“Some connections arrive
without intention,
because intention would
make them fragile.”` },
  { id: "january", month: "January", title: `“Hope is dangerous not
because it fails,
but because it makes us
imagine futures we are not
ready to live.”` },
  { id: "february", month: "February", title: `“Avoidance is a form of
choice,
and every choice leaves a
trace.”` },
  { id: "march", month: "March", title: `“Avoidance is a form of
choice,
and every choice leaves a
trace.”` },
  { id: "april", month: "April", title: `“Distance does not
separate people.
Unspoken truths do.”` },
  { id: "may", month: "May", title: `Truth does not arrive
loudly.
It waits until denial gets
exhausted.` },
  { id: "june", month: "June", title: `“Recognition is the most
intimate form of love.”` },
  { id: "july", month: "July", title: `“Recognition is the most
intimate form of love.”` },
];

const AllChapters = () => {
  return (
    <>
      {months.map((m) => (
        <section key={m.id} id={m.id} className="relative bg-paper paper-texture">
          <div className="relative z-[4] max-w-2xl mx-auto px-6 md:px-12 pt-20 pb-32">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-ink-faint text-xs tracking-[0.5em] uppercase font-body block mb-3">
                  {m.month}
                </span>
                <div className="w-12 h-px bg-ink/20 mx-auto mb-5" />
                <h2 className="font-display text-ink text-3xl md:text-4xl font-bold tracking-tight whitespace-pre-wrap">
                  {m.title}
                </h2>
                <div className="w-12 h-px bg-ink/20 mx-auto mt-5" />
              </div>
            </FadeInSection>
          </div>
        </section>
      ))}
    </>
  );
};

export default AllChapters;
