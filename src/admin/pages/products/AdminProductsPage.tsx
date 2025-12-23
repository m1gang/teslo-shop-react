import { AdminTitle } from '@/admin/components/AdminTitle'
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading'
import { CustomPagination } from '@/components/custom/CustomPagination'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { currencyFormater } from '@/lib/currency-formater'
import { useProducts } from '@/shop/hooks/useProducts'
import { PencilIcon, PlusIcon } from 'lucide-react'
import { Link } from 'react-router'

export const AdminProductsPage = () => {

    const { data, isLoading } = useProducts();

    if (isLoading) return <CustomFullScreenLoading />

    return (
        <>

            <div className='flex justify-between items-center'>
                <AdminTitle
                    title="Productos"
                    subtitle="Aqui puedes gestionar tus productos"
                />
                <div className='flex justify-end mb-10 gap-4'>
                    <Link to='/admin/products/new'>
                        <Button>
                            <PlusIcon className='mr-2' />
                            Nuevo Producto
                        </Button>
                    </Link>

                </div>
            </div>


            <Table className='bg-white p-10 shadow-xs border-gray-200 mb-10'>
                <TableHeader>
                    <TableRow>
                        <TableHead>Imagen</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Precio</TableHead>
                        <TableHead>Categoría</TableHead>
                        <TableHead>Inventario</TableHead>
                        <TableHead>Tallas</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data?.products.map(product => {
                            return (
                                <TableRow key={product.id}>

                                    <TableCell>
                                        <img src={product.images[0]}
                                            alt={product.title}
                                            className='w-20 h-20 object-cover rounded-md'
                                        />
                                    </TableCell>
                                    <Link to={`/admin/products/${product.id}`}
                                        className='hover:text-blue-900 hover:underline'>
                                        <TableCell>{product.title}</TableCell>
                                    </Link>
                                    <TableCell>{currencyFormater(product.price)}</TableCell>
                                    <TableCell>{product.gender}</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                    <TableCell>{(product.sizes).join(',').toLocaleLowerCase()}</TableCell>
                                    <TableCell className="text-right">
                                        <Link to={`/admin/products/${product.id}`}>
                                            <PencilIcon
                                                className='w-5 h-5 text-gray-900'
                                            />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                    {/* <TableRow>
                        <TableCell className="w-[100px]">1</TableCell>
                        <TableCell>
                            <img src="https://placehold.co/250x250"
                                alt="Product"
                                className='w-20 h-20 object-cover rounded-md'
                            />
                        </TableCell>
                        <TableCell>Producto 1</TableCell>
                        <TableCell>$250.00</TableCell>
                        <TableCell>Categoría 1</TableCell>
                        <TableCell>Stock: 100</TableCell>
                        <TableCell>xs,x,xl</TableCell>
                        <TableCell className="text-right">
                            <Link to='/admin/products/t-shirt-teslo'>
                                Editar
                            </Link>
                        </TableCell>
                    </TableRow> */}
                </TableBody>
            </Table>

            <CustomPagination totalPages={data?.pages || 0} />
        </>

    )
}
