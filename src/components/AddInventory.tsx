
import { useNavigate } from 'react-router-dom';
import { 
Card, 
Title,
TextInput,
Button
 } from '@tremor/react';
import { Product } from '../utils/types';
import { useInventoryActions } from '../hooks/actions/useInventoryActions';

export default function AddInventory() {

    const { handlerAddProduct } = useInventoryActions()
    const navigate = useNavigate()

    const handleSubmitNewProduct = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const newProduct: Product = {
            sku: formData.get('sku') as string,
            name: formData.get('name') as string,
            category: formData.get('category') as string,
            description: formData.get('description') as string,
            stock: parseInt(formData.get('stock') as string)
        }

        handlerAddProduct(newProduct)
        form.reset()
        navigate('/')
    }

    return (
        <div className='flex justify-center'>
            <Card className='w-1/2'>
                <Title className='mb-1'>Add Product</Title>
                <form onSubmit={handleSubmitNewProduct}>
                    <div className='flex'>
                        <div className='flex flex-col w-full mr-5'>
                                <TextInput className='mb-3' placeholder='SKU' name='sku'/>
                                <TextInput className='mb-3' placeholder='Description' name='description'/>
                                <TextInput placeholder='Stock' name='stock'/>
                        </div>
                        <div className='flex flex-col justify-start w-full'>
                                <TextInput className='mb-3' placeholder='Name' name='name'/>
                                <TextInput className='mb-3' placeholder='Category' name='category'/>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <Button variant='primary'>Add</Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}