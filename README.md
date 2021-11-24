# DO-Product-Card

Este es un paquete de pruebas de despliegue en npm

### Jesús Enrique Pérez

```
import {ProductCard,ProductImage,ProductTitle, ProductButtons} from 'jepm-product-card'
```

```
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
```