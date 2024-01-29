const onClick = (e) => {
  const { isTrusted, target, bubbles } = e;
  console.log('클릭 이밴트 :', isTrusted, target, bubbles);
};

export default function Event3() {
  return (
    <>
      <div onClick={onClick}>클릭3</div>
    </>
  );
}
