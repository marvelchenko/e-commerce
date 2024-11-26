import './Price.css';
import Input from '../../components/Input';

function Price({handleChange}) {
  
  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">Price</h2>
      
      <div>
        <label className="sidebar-label-container">
        <input onChange={handleChange} type='radio' value="" name='test2' />
        <span className='checkmark'></span>All
        </label>

      <Input 
      handleChange={handleChange}
      value="sandals"
      title="0 - 10k"
      name="test2"
      />
      <Input 
      handleChange={handleChange}
      value="flats"
      title="₦10k - 20k"
      name="test2"
      />
      <Input 
      handleChange={handleChange}
      value="sneakers"
      title="₦10k - 30k"
      name="test2"
      />
      <Input 
      handleChange={handleChange}
      value="heels"
      title="Over 30k"
      name="test2"
      />
      </div>
    </div>
  )
}

export default Price