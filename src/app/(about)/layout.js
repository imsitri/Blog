import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "Our Featured Works",
    "Project 1: Lorem Ipsum",
    "Project 2: Lorem Ipsum",
    "Project 3: Lorem Ipsum",
    "Project 4: Lorem Ipsum",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
