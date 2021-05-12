export default function GridOrder() {
  return (
    <div className='container'>
      Flex items can be ordered with the <code>order</code> class. Here are
      theree `col-4` with no ordering.
      <div className='row'>
        <div className='col-4'>Col 4 order 3</div>
        <div className='col-4'>Col 4 Order 2</div>
        <div className='col-4'>Col 4 Order 1</div>
      </div>
      Here are the same three with ordering applied.
      <div className='row'>
        <div className='col-4 order-3'>Col 4 order 3</div>
        <div className='col-4 order-2'>Col 4 Order 2</div>
        <div className='col-4 order-1'>Col 4 Order 1</div>
      </div>
    </div>
  )
}
