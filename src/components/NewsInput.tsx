import React, { useState } from 'react';

interface NewsInputProps {
    goButtonTapped:(keyword:string)=>void;
}


const NewsInput:React.FC<NewsInputProps> = ({ goButtonTapped }) => {

    const [value, setValue] = useState<string>("")
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        goButtonTapped(value);
        
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return(
        <>
            <form className='news-form' onSubmit={submitHandler}>
                    <input type="text" onChange={changeHandler} value={value}/>
                    <button type='submit'>GO</button>
            </form>
        </>
    )
}

export default NewsInput;