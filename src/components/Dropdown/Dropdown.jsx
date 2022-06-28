const Dropdown = ({name, text}) => {
  const hideOrShow = (el) => {
    const text = el.target.parentElement.parentElement.children[1]
    el.target.classList.toggle("dropdown-activated");
    el.target.classList.contains("dropdown-activated") ? text.style.display = "none" : text.style.display = "block";
  }
  
  return(
  <div className='dd-container'>
    <div className='dropdown'>
      <span>{name}</span>
      <div className='dropdownSquare' onClick={hideOrShow.bind(this)}></div>
    </div>
      {Array.isArray(text) ?
      <ul>
        {text.map((word, index) => <li key={index} className="dropdown-list">{word}</li>)}
      </ul>
      : <p className='text-dropdown'>{text}</p>} 
   
  </div>)

}

export default Dropdown;
