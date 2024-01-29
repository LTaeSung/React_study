document.getElementById('root').addEventListener('click', (e) => {
  const { isTrusted, target, bubbles } = e;
  console.log('클릭 이밴트 :', isTrusted, target, bubbles);
});

export default function Event() {
  return (
    <>
      <div>클릭</div>
    </>
  );
}
