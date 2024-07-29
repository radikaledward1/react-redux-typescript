
import { 
Card, 
Title,
TextInput,
Button
 } from '@tremor/react';

export default function AddInventory() {
    return (
        <div className='flex justify-center'>
            <Card className='w-1/2'>
                <Title className='mb-1'>Add Product</Title>
                <div className='flex'>
                    <div className='flex flex-col w-full mr-5'>
                            <TextInput className='mb-3' placeholder='SKU' />
                            <TextInput className='mb-3' placeholder='Description' />
                            <TextInput placeholder='Stock' />
                    </div>
                    <div className='flex flex-col justify-start w-full'>
                            <TextInput className='mb-3' placeholder='Name' />
                            <TextInput className='mb-3' placeholder='Category' />
                    </div>
                </div>
                <div className='flex justify-end'>
                    <Button variant='primary'>Add</Button>
                </div>
            </Card>
        </div>
    )
}