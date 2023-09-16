import { PopularServices, Welcome } from "./components";

export default function Home() {
  return (
    <>
      <div className="h-screen relative">
        <Welcome />
        <PopularServices />
      </div>
    </>
  );
}
