import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard,ProductImage,ProductTitle, ProductButtons } from '../.';

const App = () => {
  const product={
      id:'2',
      title:'Coffee Mug - Meme',
      img:'./coffee-mug2.png'
  }
  return (
    <>
      <ProductCard 
          product={ product} 
          initialValues={{
              count:4,
              maxCount:10,
          }}
      >
          {
              ({count,maxCount,reset,increaseBy, isMaxCountReached})=>(
                  <>
                      <ProductImage />
                      <ProductTitle />
                      <ProductButtons />
                  </>
              )
          }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
