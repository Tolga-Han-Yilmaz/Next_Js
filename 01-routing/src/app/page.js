import Link from "next/link";


export default function Home() {
  return <main >
    <Link href="/hakkimizda">Hakkimizda</Link>
    <br/>
    <Link href="/docs/post-1">Post-1</Link>
    <br/>

    <Link href="/docs/post-3/post-5">Post-5</Link>
    <br/>

    <Link 
    target="_blank"
    className="test"
    href={{
      pathname:"/hakkimizda",
      query:{
        name:"Next.js",
        surname:"framework"
      }
    }}>Hakkimizda Obje ile</Link>
  </main>;
}
