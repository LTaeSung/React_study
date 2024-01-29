import {useState} from "react";
import axios from "axios";

const LoginForm = () =>{
    const [data, setData] = useState({id:'', pwd:''}); //두가지를 객체화 하여 한번에 저장
    const handleChange = (e)=> {   //객체 두개를 처리하기 위한 과정
        setData({
            ...data,
            [e.target.name] : e.target.value,
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8090/test/api/customer/login', data).then(res=>{
            //로그인 성공여부
            console.log(res.data);
            if(res.data === 'success'){
                //스로리지에 저장
                window.sessionStorage.setItem('loginId', data.id); //단순하게 id를 저장한다
                setData({...data}); //렌더링을 다시 하여 동적으로 바뀌도록 저장(같은내용 but 새로운 객체로 저장)
            }else {
                alert("로그인에 실패했습니다.");
            }
        });
    };


    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" value={data.id} onChange={handleChange}></input><br />
                <input type="password" name="pwd" value={data.pwd} onChange={handleChange}></input><br />
                <input type="submit" value="로그인"/>

            </form>
            {window.sessionStorage.getItem('loginId')? '로그인 상태':'비로그인 상태'}
        </>
    );
};
export default LoginForm;