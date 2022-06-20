const HousingTags = ({tags}) => {

  return(
    <div className='tagSection'>
    {tags.map((tag, index) => 
    <span key={index}className='tags'>{tag}</span>
    )}
    </div>
  )
}

export default HousingTags;