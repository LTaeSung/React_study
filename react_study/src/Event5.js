const onChange1 = (e) => {
  console.log(e.target.value);
};
const onChange2 = (e) => {
  console.log(e.target.checked);
};
const onChange3 = (e) => {
  console.log(e.target.files);
};
const onChange4 = (e) => {
  console.log(e.target.button);
};

export default function Event5() {
  return (
    <>
      <div>
        <input type="text" onChange={onChange1} />
        <input type="button" onChange={onChange4} value={'버튼'} />
        <input type="checkbox" onChange={onChange2} />
        <input type="file" onChange={onChange3} />
      </div>
    </>
  );
}
