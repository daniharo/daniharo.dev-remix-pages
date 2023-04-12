import type { V2_MetaFunction } from "@remix-run/react";
import { Github, Linkedin } from "lucide-react";
import { SocialButton } from "~/components/SocialButton";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Dani Haro" }];
};

export default function Index() {
  return (
    <main className="mx-8 flex h-full flex-col items-start justify-center self-center md:ml-16 md:flex-row md:items-center">
      <section className="flex flex-col">
        <span className="mb-3 text-5xl font-semibold">I&apos;m Dani.</span>
        <span>Full-stack dev.</span>
        <span>Creating awesome experiences at Appfluence.</span>
      </section>
      <section className="mt-8 flex justify-center gap-4 md:flex-1">
        <SocialButton href="https://github.com/daniharo/">
          <Github />
        </SocialButton>
        <SocialButton href="https://www.linkedin.com/in/daniel-haro-contreras/">
          <Linkedin />
        </SocialButton>
      </section>
    </main>
  );
}
