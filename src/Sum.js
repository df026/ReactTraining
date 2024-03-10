import React, { useState } from 'react'
function Sum() {
    const [nums, setNums] = useState({});
    const [sum, setSum] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        setSum(parseInt(nums.num1) + parseInt(nums.num2));
    }
    
    function handleChange(e) {
        let num = nums;
        num[e.target.name] =  e.target.value;
        setNums(num);
    }

    return ( 
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Num1' name="num1" onChange={(e) => handleChange(e)}/> <br/>
                <input type="text" placeholder='Num2' name="num2" onChange={(e) => handleChange(e)}/> <br/>
                <input type='submit' value='Add'/>
            </form>
            <h3>Sum is { sum }</h3>
        </>
    );
}

export default Sum;