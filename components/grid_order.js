export default function GridOrder() {
  return (
    <div className='container'>
      Flex items can be ordered with the <code>order</code> class. Here are
      theree `col-4` with no ordering.
      <div className='f-row'>
        <div className='col-4 order-1'>col-4 order 1</div>
        <div className='col-4 order-2'>col-4 order 2</div>
        <div className='col-4 order-3'>col-4 order 3</div>
      </div>
      Here are the same three with ordering applied.
      <div className='f-row'>
        <div className='col-4 order-3'>col-4 order 3</div>
        <div className='col-4 order-2'>col-4 order 2</div>
        <div className='col-4 order-1'>col-4 order 1</div>
      </div>
    </div>
  )
}
