const Dropdown = ({name, text}) => {
  return(
  <div className='dd-container'>
    <div className='dropdown'> {/* classe css à revoir */}
      <span>{name}</span>
      <div className='dropdownSquare'></div>
    </div>
      {Array.isArray(text) ?
      <ul>
        {text.map((word, index) => <li key={index} className="dropdown-list">{word}</li>)}
      </ul>
      : <p className='text-dropdown'>{text}</p>} 
   
  </div>)

}

export default Dropdown;
