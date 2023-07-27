

const ProductDetails = () => {
    return (
        <div className="card">
            <figure><img className="imgWidth" src="data:image/jpeg;base64,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"  /></figure>
            <h2>Heading</h2>
            <p>Latest post will be comes from rest api</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    );
};

export default ProductDetails;