import ButtonsContainer from "@/components/ButtonsContainer";
import DisplayResult from "@/components/DisplayResult";

function HomePage() {
  return (
    <main className="sm:px-0 px-5">
      <section className="container flex items-center justify-center h-screen mx-auto">
        <div className="bg-slate-50 text-slate-950 flex flex-col flex-auto max-w-sm gap-5 p-5">
          <DisplayResult />
          <ButtonsContainer />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
