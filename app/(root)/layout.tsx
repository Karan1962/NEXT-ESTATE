import Navbar from "../../components/shared/Navbar/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <section className="w-full  bg-dark100_light400 shadow-dark_light z-50 p-2">
        <Navbar />
      </section>

      <div className="mt-[1.5px]">{children}</div>
    </main>
  );
};

export default layout;
