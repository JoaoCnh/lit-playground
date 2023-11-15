const experiments = [
  { url: "/aspect-ratio", title: "aspect ratio", image: "" },
];

export default function PlaygroundPage() {
  return (
    <section id="experiments" className="relative isolate px-6 pt-28 lg:px-8">
      <ul className="mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14">
        {experiments.map((experiment, idx) => (
          <li key={idx} className="w-full h-full">
            {experiment.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
