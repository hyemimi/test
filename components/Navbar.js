import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <Link href="/">
        <a>홈으로 이동</a>
      </Link>
      <Link href="/list">
        <a>2로 이동</a>
      </Link>
    </>
  );
}
