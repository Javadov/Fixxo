import React from 'react'
import $ from 'jquery';

const ProductQuantity = () => {

    $(document).ready(($) => {
        $('.quantity').on('click', '.plus', function(e) {
            let $input = $(this).prev('input.qty');
            let val = parseInt($input.val());
            $input.val( val+1 ).change();
        });
 
        $('.quantity').on('click', '.minus', 
            function(e) {
            let $input = $(this).next('input.qty');
            var val = parseInt($input.val());
            if (val > 0) {
                $input.val( val-1 ).change();
            } 
        });
    });

  return (
    
    <form id='myform' method='POST' className='quantity' action='#'>
        <input type='button' value='-' className='qtyminus minus' field='quantity' />
        <input type='text' name='quantity' value='0' className='qty' />
        <input type='button' value='+' className='qtyplus plus' field='quantity' />
    </form>
  )
}

export default ProductQuantity