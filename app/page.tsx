"use client";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex flex-col py-40 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>홈페이지</h1>
      <div>
        <Button text="확인" onClick={() => alert("확인 버튼")} />
        <Button text="취소" variant="danger" onClick={() => alert("삭제됨")}/>
        <Button text="비활성 버튼" disabled/>
      </div>
    </div>
  );
}
