

interface Props {
    params: Promise<{ slug: string[] }>,
    searchParams: Promise<{ sortOrder: string }>
}

const page = async ({ params, searchParams }: Props) => {
    const resolvedSlug = await params;
    const resolvedSearchParams = await searchParams;
    return (
        <div>
            Products {resolvedSlug.slug?.join(' => ')} {resolvedSearchParams.sortOrder}
        </div>
    );
};

export default page;