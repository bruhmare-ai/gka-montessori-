import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Layout for all main-site routes. /book-a-tour lives OUTSIDE this route
 * group (app/book-a-tour/page.tsx) so the funnel page gets no main nav.
 */
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
