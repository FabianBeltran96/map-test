export default function Button({ text_btn }: { text_btn: string }) {
  return (
    <button className="w-full h-14 rounded bg-yellow-400 text-black font-extrabold">
      {text_btn}
    </button>
  );
}
