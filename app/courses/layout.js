export default function dashboardLayout({ children }) {
  return (
    <>
      <section className="">
        <main className="screenPadding">
          <div className="py-2 w-full rounded ">{children}</div>
        </main>
      </section>
    </>
  );
}
