import { useState } from 'react';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/



function TodoItem( {item} ) {
  
  const [checked, ifChecked] = useState(true);

  const changeColor = (e) =>{
  
    ifChecked(!checked);
  
  }
  return (
        <label className="panel-block">
            <input type="checkbox" value = {checked} onClick = {changeColor} />
            <div className = {!checked? 'has-text-grey-light' : ' '}> {item.text} </div>
        </label>
  );
}

export default TodoItem;