// import * as ReactDOM from 'react-dom';
import React from 'react';
import renderer  from 'react-test-renderer';
import { product1 } from '../../data/products';
import { ProductCard } from '../../../src/components';

const {act}=renderer;

describe('pruebas en el ProductCard', () => {
  test('debe mostrar el componente correctamente con el productcard personalizado',()=>{
    const wrapper= renderer.create(
        <ProductCard product={product1}>
            {
                ()=>(
                    <h1>
                        'hola mundo'
                    </h1>
                )
            }
        </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()

  });
  test('debe de incrementar el contador', () => {
    const wrapper= renderer.create(<ProductCard product={product1}>
        {
            ({count,increaseBy})=>(
                <>
                    <h1>Poduct card</h1>
                    <span>{count}</span>
                    <button onClick={()=>increaseBy(1)} ></button>
                </>
            )
        }
    </ProductCard>)
    let tree =wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(()=>{
        (tree as any).children[2].props.onClick();
    })
    tree=wrapper.toJSON()

    expect((tree as any).children[1].children[0]).toBe('1');
  })
  
  
});
