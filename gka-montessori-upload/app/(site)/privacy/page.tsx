import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects and uses information submitted through this website.`,
};

// DRAFT — requires client/legal review before public launch (see docs/client-intake.md)
export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="uppercase tracking-widest text-sm text-brand-dark">
        {site.name}
      </p>
      <h1 className="font-display text-4xl text-navy mt-2">Privacy Policy</h1>
      <p className="mt-2 text-sm italic">
        Draft — effective upon our fall opening.
      </p>

      <div className="mt-8 space-y-6">
        <section>
          <h2 className="font-display text-2xl text-navy">
            What we collect
          </h2>
          <p className="mt-2">
            When you request a tour or contact us through this site, we collect
            the information you provide: your name, phone number, email
            address, your child&apos;s age, and your desired start date, along
            with basic information about how you found us.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy">How we use it</h2>
          <p className="mt-2">
            We use your information only to respond to your inquiry, schedule
            tours, and communicate with you about enrollment at {site.name}.
            If you agreed to receive text messages, we may text you about your
            inquiry — reply STOP at any time to opt out. We do not sell or
            rent your personal information.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy">Questions</h2>
          <p className="mt-2">
            Contact us at{" "}
            <a className="underline text-brand-dark" href={site.phoneHref}>
              {site.phone}
            </a>{" "}
            or visit us at {site.address.full}.
          </p>
        </section>
      </div>
    </main>
  );
}
