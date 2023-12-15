import { Button } from "$/components/Button";
import { Input } from "$/components/Input";
import { useState } from "react";
import { PageHeader } from "$/components/PageHeader";

export default function DesignSystemPage() {
  const [brand, setBrand] = useState<string | undefined>();

  return (
    <section id="design-sytem" className="relative isolate px-6 pt-28 lg:px-8">
      <PageHeader
        title="design system"
        description="Creating a basic set of web components for a design system."
        githubUrl="https://github.com/JoaoCnh/lit-playground/blob/main/src/custom-elements/design-system"
      />

      <input type="color" onChange={(e) => setBrand(e.target.value)} />

      <hr className="my-2" />

      <Button variant="primary" style={{ ["--brand" as string]: brand }}>
        primary button
      </Button>
      <Button variant="secondary" style={{ ["--brand" as string]: brand }}>
        secondary button
      </Button>

      <hr className="my-2" />

      <Input id="name" label="Name" style={{ ["--brand" as string]: brand }} />

      <hr className="my-2" />
    </section>
  );
}
