import type { Metadata } from "next";
import Band from "@/components/Band";
import LeadForm from "@/components/LeadForm";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact ${site.name} | Montessori Preschool in ${site.address.city}, ${site.address.state}`,
  description: `Book a tour of ${site.name}, a Montessori preschool for ages 2–6 in ${site.address.city}, ${site.address.state}. Fill out the form and we’ll text you within a minute — or call ${site.phone}. ${site.address.full}.`,
};

export default function ContactPage() {
  return (
    <>
      {/* 1 — Page-title hero band */}
      <Band color="navy">
        <SectionHeading
          as="h1"
          onDark
          eyebrow={`Contact · ${site.address.city}, ${site.address.state}`}
          title="Come say hello"
          intro={site.tagline}
        />
      </Band>

      {/* 2+3 — Info rail + tour form on a shared tint band */}
      <Band
        color="tint"
        edgeTop="wave"
        edgeTopColor="navy"
        edgeBottom="wave"
        edgeBottomColor="navy"
      >
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          {/* Info rail */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-dark">
              We can’t wait to meet your family
            </h2>

            <div className="mt-5 space-y-4 leading-relaxed">
              <p>
                <strong>To book a tour,</strong> fill out the form — we’ll text
                you within a minute to find a time that works for your family.
                No phone tag, no waiting.
              </p>
              <p>
                <strong>For everything else,</strong> call or text us at{" "}
                <a
                  href={site.phoneHref}
                  className="font-semibold underline decoration-brand decoration-2 underline-offset-4 hover:text-brand-dark"
                >
                  {site.phone}
                </a>{" "}
                during school hours, or drop your question in the message field
                and we’ll get right back to you.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-dark">
                  Visit us
                </h3>
                <address className="mt-2 not-italic leading-relaxed">
                  <span className="font-semibold">{site.name}</span>
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </address>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-dark">
                  Hours
                </h3>
                <p className="mt-2 leading-relaxed">{site.hours}</p>
                <p className="mt-1 text-sm">{site.ages}</p>
              </div>
            </div>

            {/* Offset photo collage */}
            <div className="relative mt-12 pb-16 pr-6">
              <PhotoPlaceholder
                src="/photos/classroom-doorway.jpg"
                alt="Children working with Montessori materials in the GKA classroom, seen from the doorway"
                aspect="4/3"
                shape="rounded"
                className="w-4/5"
              />
              <div className="absolute bottom-0 right-0 w-1/2">
                <PhotoPlaceholder
                  src="/photos/outdoor-play-a.jpg"
                  alt="Tree-lined outdoor play yard with natural play structures"
                  sizes="(max-width: 1023px) 50vw, 20vw"
                  aspect="3/4"
                  shape="rounded"
                  ring
                />
              </div>
            </div>

            {/* Map-embed slot (Google Business Profile link once claimed) */}
            <div className="mt-10">
              <PhotoPlaceholder
                alt={`Map showing ${site.name} at ${site.address.full}`}
                label="Map"
                aspect="16/9"
                shape="rounded"
              />
            </div>
          </div>

          {/* Tour form */}
          <div>
            <div className="rounded-3xl bg-background p-6 text-foreground shadow-sm sm:p-10">
              <h2 className="font-display text-2xl text-navy sm:text-3xl">
                Book a tour
              </h2>
              <p className="mt-2 leading-relaxed">
                Tell us a little about your family and the schedule you have in
                mind — full-time, half-day, or not sure yet. We’ll help you
                choose at your tour.
              </p>
              <LeadForm className="mt-8" />
            </div>
          </div>
        </div>
      </Band>
    </>
  );
}
