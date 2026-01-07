import { Navigate, useNavigate, useParams } from 'react-router';

import { useProduct } from '@/admin/hooks/useProduct';
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { ProductForm } from './ui/ProductForm';
import { toast } from 'sonner';

interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    slug: string;
    stock: number;
    sizes: string[];
    gender: string;
    tags: string[];
    images: string[];
}

export const AdminProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { isLoading, data: product, isError, mutation } = useProduct(id || '');
    console.log({ mutation: mutation.isPending })

    const title = id === 'new' ? 'Nuevo producto' : 'Editar producto';
    const subtitle =
        id === 'new'
            ? 'Aquí puedes crear un nuevo producto.'
            : 'Aquí puedes editar el producto.';


    const handleSubmit = async (productLike: Partial<Product>) => {
        await mutation.mutateAsync(productLike, {
            onSuccess: (data) => {
                toast.success('Producto actualizado correctamente', {
                    position: 'top-right'
                });
                navigate(`/admin/products/${data.id}`);
            },
            onError: () => {
                toast.error('Error al actualizar el producto', {
                    position: 'top-right'
                });
            }
        });
    }


    if (isError) {
        return <Navigate to="/admin/products" />;
    }
    if (isLoading) return <CustomFullScreenLoading />;


    if (!product) {
        return <Navigate to="/admin/products" />;
    }

    return <ProductForm
        product={product}
        title={title}
        subTitle={subtitle}
        onSubmit={handleSubmit}
        isPending={mutation.isPending}
    />

};