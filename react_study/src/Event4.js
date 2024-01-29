const onClick = (e) => {
  const { isTrusted, target, bubbles } = e;
  console.log('클릭 이밴트 :', isTrusted, target, bubbles);
};
const onClick2 = (e) => {
  const { isTrusted, target, bubbles, currentTarget } = e;
  console.log('클릭 이밴트2 :', isTrusted, target, bubbles, currentTarget);
};

export default function Event4() {
  return (
    <>
      <div onClick={onClick2}>
        <div onClick={onClick}>클릭4</div>
      </div>
    </>
  );
}
