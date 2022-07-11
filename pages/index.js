import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const onClick = () => {
    router.push("/list");
  };
  return (
    <div>
      <h1 className="home">홈입니당</h1>
      <section>
        <button className="btn_" onClick={onClick}>
          리스트 페이지로 이동합니다.
        </button>
      </section>
      <h4>이제 되었을까?</h4>

      <style jsx>
        {`
          .home {
            font-size: 20px;
            color: green;
          }
          .btn_ {
            background-color: yellow;
          }
        `}
      </style>
    </div>
  );
}
