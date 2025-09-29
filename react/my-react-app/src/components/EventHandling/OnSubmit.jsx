// submit 이벤트는 form 태그만 발생한다
export default function OnSubmit() {
  // submit이벤트 핸들러 함수
  // 핸들러 함수 이름 규칙 : handleㅇ이벤트명
  function handldeSubmit(event) {
    event.preventDefualt(); // form의 기본 동작인 제출(새로 고침)을 막는다
    console.log(event);
    console.log(event.target.value);
  }
  return (
    <div>
      {/* form 태그의 onSubmit 속성에서 handleSubmit 함수를 호출 */}
      <form onSubmit={(event) => handldeSubmit(event)}>
        <input type="text" name="email" className="border-2" />
        <input type="password" name="password" className="border-2" />
        <input type="submit" value="제출" className="border-2" />
      </form>
    </div>
  );
}
