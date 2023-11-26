import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Web tutorial",
  description: "Generated by somyi",
};

export default async function RootLayout({ children }) {
  const resq = await fetch("http://localhost:9999/topics", {
    cache: "no-store",
  });
  const topic = await resq.json();

  console.log(topic);
  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          {topic.map((item) => {
            return (
              <li key={item.id}>
                <Link href={`/read/${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <ul>
          <li>
            <Link href="/create">Create</Link>
          </li>
          <li>
            <Link href="/update/1">Update</Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </ul>
      </body>
    </html>
  );
}
