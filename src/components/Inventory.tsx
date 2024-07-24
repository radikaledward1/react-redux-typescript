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
  
  export function Inventory () {

    const products = [
        {
            sku: '1234',
            name: 'Product 1',
            category: 'Category 1',
            description: 'Description 1',
            stock: 10,
        },
        {
            sku: '5678',
            name: 'Product 2',
            category: 'Category 2',
            description: 'Description 2',
            stock: 20,
        },
        {
            sku: '91011',
            name: 'Product 3',
            category: 'Category 3',
            description: 'Description 3',
            stock: 30,
        },
    ]

    return (
        <Card>
            <Title>Inventory
            <Badge>{products.length}</Badge>
            </Title>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableHeaderCell>SKU</TableHeaderCell>
                    <TableHeaderCell>Product</TableHeaderCell>
                    <TableHeaderCell>Category</TableHeaderCell>
                    <TableHeaderCell>Description</TableHeaderCell>
                    <TableHeaderCell>Current Stock</TableHeaderCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        products.map((product, index) => (
                                <TableRow key={index}>
                                    <TableCell>{product.sku}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                    <TableCell>
                                        <Button icon={RiEditBoxLine} variant='light'/>
                                        <Button icon={RiDeleteBinLine} variant='light'/>
                                    </TableCell>
                                </TableRow>
                            )
                        )
                    }
                </TableBody>
            </Table>

        </Card>
    )
  }