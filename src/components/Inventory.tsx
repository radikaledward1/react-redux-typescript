import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Card,
    Button,
    Badge,
    Title
  } from '@tremor/react';
  import { 
    RiEditBoxLine,
    RiDeleteBinLine
   } from '@remixicon/react';
   import { Toaster } from 'sonner';
   import { Link } from 'react-router-dom';
   import { useAppSelector } from '../hooks/state';
   import { useInventoryActions } from '../hooks/actions/useInventoryActions';
    
   export default function Inventory() {

    const products = useAppSelector((state) => state.inventory);
    const { handlerDeleteProductById } = useInventoryActions();

    return (
        <Card>
            
            <div className='flex justify-between'>
                <Title>Inventory
                    <Badge className='ml-1'>{products.length}</Badge>
                </Title>
                <Button variant='light'>
                    <Link to='/add'>Add Product</Link>
                </Button>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableHeaderCell>Id</TableHeaderCell>
                    <TableHeaderCell>SKU</TableHeaderCell>
                    <TableHeaderCell>Product</TableHeaderCell>
                    <TableHeaderCell>Category</TableHeaderCell>
                    <TableHeaderCell>Description</TableHeaderCell>
                    <TableHeaderCell>Current Stock</TableHeaderCell>
                    <TableHeaderCell>Actions</TableHeaderCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        products.map((product, index) => (
                                <TableRow key={index}>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell>{product.sku}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                    <TableCell>
                                        <Button icon={RiEditBoxLine} variant='light'/>
                                        <Button icon={RiDeleteBinLine} onClick={() => {handlerDeleteProductById(product.id)}} variant='light'/>
                                    </TableCell>
                                </TableRow>
                            )
                        )
                    }
                </TableBody>
            </Table>

            <Toaster richColors />
        </Card>
    )
  }