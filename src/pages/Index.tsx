import NewspaperCover from "@/components/NewspaperCover";
import ChapterOne from "@/components/ChapterOne";
import AllChapters from "@/components/AllChapters";
import BottomTimeline from "@/components/BottomTimeline";

const Index = () => {
  return (
    <main className="bg-paper">
      <NewspaperCover />
      <ChapterOne />
      <AllChapters />
      <BottomTimeline />
    </main>
  );
};

export default Index;
