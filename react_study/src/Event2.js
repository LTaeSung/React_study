document.getElementById('root').onclick = (e) => {
  const { isTrusted, target, bubbles } = e;
  console.log('클릭 이밴트 :', isTrusted, target, bubbles);
};

export default function Event2() {
  return (
    <>
      <div>클릭2</div>
    </>
  );
}
