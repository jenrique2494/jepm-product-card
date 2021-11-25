// import * as ReactDOM from 'react-dom';
import React from 'react';
import renderer  from 'react-test-renderer';
import { product1 } from '../../data/products';
import { ProductImage, ProductCard } from '../../../src/components';

const img='./coffee-mug2.png';

describe('pruebas en el ProductImage', () => {
  test('debe mostrar el componente correctamente con la imagen personalizada',()=>{
    const wrapper= renderer.create(
        <ProductImage img={img} />
    )
    expect(wrapper.toJSON()).toMatchSnapshot()

  });
  test('debe de mostrar el componente con la imagen del producto ', () => {
    const wrapper= renderer.create(
        <ProductCard product={product1}>
            {
                ()=>(
                    <ProductImage/>
                )
            }
        </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  });
  
});
