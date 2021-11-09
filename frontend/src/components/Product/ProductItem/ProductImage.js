const ProductImage = (props) => {
    const { proImgUrl } = props;
    return (
        <div
            style={{
                backgroundImage: `url(${proImgUrl})`,
                height: '269px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        ></div>
    );
};

export default ProductImage;
